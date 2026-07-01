import { useState, useEffect } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { SupportScreen } from './components/SupportScreen';
import { CategoriesScreen } from './components/CategoriesScreen';
import { ProductListScreen } from './components/ProductListScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CartScreen } from './components/CartScreen';
import { ScreenTransition } from './components/ScreenTransition';

export type Screen = 'login' | 'support' | 'categories' | 'productList' | 'productDetail' | 'cart';
export type Category = 'ropa' | 'accesorios' | 'calzado';
export type Language = 'en' | 'es';

export interface User {
  name: string;
  email: string;
  phone?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  condition: string;
  size: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [navigationHistory, setNavigationHistory] = useState<Screen[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'forward' | 'backward'>('forward');

  // Manejar navegación del navegador (botón atrás/adelante)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.screen) {
        setTransitionDirection('backward');
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentScreen(event.state.screen);
          if (event.state.category) setSelectedCategory(event.state.category);
          if (event.state.product) setSelectedProduct(event.state.product);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 150);
      } else if (navigationHistory.length > 0) {
        navigateBack();
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Establecer estado inicial
    if (currentScreen !== 'login') {
      window.history.replaceState(
        { screen: currentScreen, category: selectedCategory, product: selectedProduct },
        '',
        window.location.href
      );
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigationHistory, currentScreen, selectedCategory, selectedProduct]);

  // Helper function to navigate with history
  const navigateTo = (screen: Screen, saveToHistory: boolean = true) => {
    if (saveToHistory && currentScreen !== 'login') {
      setNavigationHistory(prev => [...prev, currentScreen]);
    }
    
    setTransitionDirection('forward');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentScreen(screen);
      
      // Agregar al historial del navegador
      window.history.pushState(
        { screen, category: selectedCategory, product: selectedProduct },
        '',
        `#${screen}`
      );
      
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  // Helper function to go back
  const navigateBack = () => {
    setTransitionDirection('backward');
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (navigationHistory.length > 0) {
        const previousScreen = navigationHistory[navigationHistory.length - 1];
        setNavigationHistory(prev => prev.slice(0, -1));
        setCurrentScreen(previousScreen);
      } else {
        setCurrentScreen('categories');
      }
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setNavigationHistory([]);
    setCurrentScreen('categories');
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    setNavigationHistory([]);
    setCurrentScreen('login');
  };

  const handleGoToSupport = () => {
    navigateTo('support');
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    navigateTo('productList');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    navigateTo('productDetail');
  };

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const handleUpdateCartQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleGoToCart = () => {
    navigateTo('cart');
  };

  const handleBackToCategories = () => {
    navigateBack();
  };

  const handleGoToCategories = () => {
    setCurrentScreen('categories');
    setNavigationHistory([]);
  };

  const handleBackToProducts = () => {
    navigateBack();
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {currentScreen === 'login' && (
        <ScreenTransition direction={transitionDirection}>
          <LoginScreen onLogin={handleLogin} language={language} />
        </ScreenTransition>
      )}
      
      {currentScreen === 'support' && user && (
        <ScreenTransition direction={transitionDirection} onSwipeBack={navigateBack}>
          <SupportScreen
            onBack={navigateBack}
            user={user}
            onLogout={handleLogout}
            cartItemsCount={getTotalItems()}
            onGoToCart={handleGoToCart}
            onGoToCategories={handleGoToCategories}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </ScreenTransition>
      )}
      
      {currentScreen === 'categories' && user && (
        <ScreenTransition direction={transitionDirection}>
          <CategoriesScreen
            onSelectCategory={handleSelectCategory}
            onGoToCart={handleGoToCart}
            onGoToSupport={handleGoToSupport}
            onGoToCategories={handleGoToCategories}
            cartItemsCount={getTotalItems()}
            user={user}
            onLogout={handleLogout}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </ScreenTransition>
      )}
      
      {currentScreen === 'productList' && selectedCategory && user && (
        <ScreenTransition direction={transitionDirection} onSwipeBack={navigateBack}>
          <ProductListScreen
            category={selectedCategory}
            onSelectProduct={handleSelectProduct}
            onBack={navigateBack}
            onGoToCart={handleGoToCart}
            onGoToSupport={handleGoToSupport}
            onGoToCategories={handleGoToCategories}
            cartItemsCount={getTotalItems()}
            user={user}
            onLogout={handleLogout}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </ScreenTransition>
      )}
      
      {currentScreen === 'productDetail' && selectedProduct && user && (
        <ScreenTransition direction={transitionDirection} onSwipeBack={navigateBack}>
          <ProductDetailScreen
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBack={navigateBack}
            onGoToCart={handleGoToCart}
            onGoToSupport={handleGoToSupport}
            onGoToCategories={handleGoToCategories}
            cartItemsCount={getTotalItems()}
            user={user}
            onLogout={handleLogout}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </ScreenTransition>
      )}
      
      {currentScreen === 'cart' && user && (
        <ScreenTransition direction={transitionDirection} onSwipeBack={navigateBack}>
          <CartScreen
            cartItems={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onBack={navigateBack}
            onGoToSupport={handleGoToSupport}
            onGoToCategories={handleGoToCategories}
            user={user}
            onLogout={handleLogout}
            language={language}
            onToggleLanguage={toggleLanguage}
          />
        </ScreenTransition>
      )}
    </div>
  );
}
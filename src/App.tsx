import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { CategoriesScreen } from './components/CategoriesScreen';
import { ProductListScreen } from './components/ProductListScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CartScreen } from './components/CartScreen';

export type Screen = 'login' | 'categories' | 'productList' | 'productDetail' | 'cart';
export type Category = 'ropa' | 'accesorios' | 'calzado';

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
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleLogin = () => {
    setCurrentScreen('categories');
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setCurrentScreen('productList');
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('productDetail');
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
    setCurrentScreen('cart');
  };

  const handleBackToCategories = () => {
    setCurrentScreen('categories');
  };

  const handleBackToProducts = () => {
    setCurrentScreen('productList');
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      
      {currentScreen === 'categories' && (
        <CategoriesScreen
          onSelectCategory={handleSelectCategory}
          onGoToCart={handleGoToCart}
          cartItemsCount={getTotalItems()}
        />
      )}
      
      {currentScreen === 'productList' && selectedCategory && (
        <ProductListScreen
          category={selectedCategory}
          onSelectProduct={handleSelectProduct}
          onBack={handleBackToCategories}
          onGoToCart={handleGoToCart}
          cartItemsCount={getTotalItems()}
        />
      )}
      
      {currentScreen === 'productDetail' && selectedProduct && (
        <ProductDetailScreen
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onBack={handleBackToProducts}
          onGoToCart={handleGoToCart}
          cartItemsCount={getTotalItems()}
        />
      )}
      
      {currentScreen === 'cart' && (
        <CartScreen
          cartItems={cart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onBack={handleBackToCategories}
        />
      )}
    </div>
  );
}

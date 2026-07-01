import { useState } from 'react';
import { Minus, Plus, Trash2, CreditCard, MapPin, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import { Header } from './Header';
import type { CartItem, User, Language, Category } from '../App';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onBack: () => void;
  onGoToSupport: () => void;
  onGoToCategories: () => void;
  user: User;
  onLogout: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export function CartScreen({ 
  cartItems, 
  onUpdateQuantity, 
  onBack,
  onGoToSupport,
  onGoToCategories,
  user,
  onLogout,
  language,
  onToggleLanguage
}: CartScreenProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<'shipping' | 'pickup'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  
  // Calculate discount percentage
  const getDiscountPercentage = (condition: string): number => {
    const conditionLower = condition.toLowerCase();
    switch (conditionLower) {
      case 'like new':
      case 'como nuevo':
        return 50;
      case 'good':
      case 'buen estado':
        return 60;
      case 'excellent':
      case 'excelente':
      default:
        return 40;
    }
  };

  // Calculate discounted price from original price
  const getDiscountedPrice = (originalPrice: number, condition: string): number => {
    const discount = getDiscountPercentage(condition);
    return Math.round(originalPrice * (1 - discount / 100));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + getDiscountedPrice(item.product.price, item.product.condition) * item.quantity,
    0
  );
  const freeShippingThreshold = 2999;
  const shipping = deliveryMethod === 'shipping' && subtotal >= freeShippingThreshold ? 0 : deliveryMethod === 'shipping' ? 10 : 0;
  const total = subtotal + shipping;

  const texts = {
    en: {
      myCart: 'My Cart',
      emptyCart: 'Your cart is empty',
      addItems: 'Add some items to get started',
      exploreProducts: 'Explore products',
      cartItems: 'Cart Items',
      orderSummary: 'Order Summary',
      subtotal: 'Subtotal',
      deliveryMethod: 'Delivery Method',
      shipping: 'Shipping',
      pickup: 'Pick up at store',
      pickupAddress: 'Plaza de Armas Durango, Zona Centro, 34000 Durango',
      freeShipping: 'FREE SHIPPING',
      shippingCost: 'Shipping Cost',
      total: 'Total',
      proceedToCheckout: 'Proceed to Checkout',
      selectPaymentMethod: 'Select Payment Method',
      almostFreeShipping: `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for FREE shipping!`,
      congratsFreeShipping: 'Congrats! You get FREE shipping 🎉',
      checkoutSuccess: 'Processing payment! This is a demo. In a real app, payment would be processed here.',
      paymentRequired: 'Please select a payment method',
      confirmPayment: 'Confirm Payment'
    },
    es: {
      myCart: 'Mi Carrito',
      emptyCart: 'Tu carrito está vacío',
      addItems: 'Agrega algunos artículos para comenzar',
      exploreProducts: 'Explorar productos',
      cartItems: 'Artículos del Carrito',
      orderSummary: 'Resumen del Pedido',
      subtotal: 'Subtotal',
      deliveryMethod: 'Método de Entrega',
      shipping: 'Envío a domicilio',
      pickup: 'Recoger en tienda',
      pickupAddress: 'Plaza de Armas Durango, Zona Centro, 34000 Durango',
      freeShipping: 'ENVÍO GRATIS',
      shippingCost: 'Costo de Envío',
      total: 'Total',
      proceedToCheckout: 'Proceder al Pago',
      selectPaymentMethod: 'Seleccionar Método de Pago',
      almostFreeShipping: `¡Agrega $${(freeShippingThreshold - subtotal).toFixed(2)} más para envío GRATIS!`,
      congratsFreeShipping: '¡Felicidades! Obtienes envío GRATIS 🎉',
      checkoutSuccess: '¡Procesando pago! Esto es una demostración. En una app real, el pago se procesaría aquí.',
      paymentRequired: 'Por favor selecciona un método de pago',
      confirmPayment: 'Confirmar Pago'
    }
  };

  const t = texts[language];

  const paymentMethods = [
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: 'https://images.unsplash.com/photo-1706879349461-1fdfb4f7d519?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXlwYWwlMjBsb2dvJTIwaWNvbnxlbnwxfHx8fDE3NjUyMjAwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      id: 'visa', 
      name: 'VISA', 
      icon: 'https://images.unsplash.com/photo-1653389527286-604ab2dd2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXNhJTIwY2FyZCUyMGxvZ298ZW58MXx8fHwxNzY1MjIwMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-indigo-600' 
    },
    { 
      id: 'mastercard', 
      name: 'Mastercard', 
      icon: 'https://images.unsplash.com/photo-1749039370614-7cfbeae55d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXJjYXJkJTIwbG9nbyUyMG9mZmljaWFsfGVufDF8fHx8MTc2NTIyMDA2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-red-500 to-orange-600' 
    },
    { 
      id: 'debit', 
      name: language === 'en' ? 'Debit Card' : 'Tarjeta de Débito', 
      icon: 'https://images.unsplash.com/photo-1660732106134-f3009a1e90ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJpdCUyMGNhcmQlMjBpY29ufGVufDF8fHx8MTc2NTIyMDA2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-green-500 to-emerald-600' 
    },
    { 
      id: 'credit', 
      name: language === 'en' ? 'Credit Card' : 'Tarjeta de Crédito', 
      icon: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkJTIwcGF5bWVudHxlbnwxfHx8fDE3NjUyMDE0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-pink-600' 
    },
    { 
      id: 'oxxo', 
      name: 'OXXO Pay', 
      icon: 'https://images.unsplash.com/photo-1747699575563-281ed4f4a11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveHhvJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2NTIyMDA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-yellow-500 to-red-600' 
    },
    { 
      id: 'googlepay', 
      name: 'Google Pay', 
      icon: 'https://images.unsplash.com/photo-1732258355920-e305212eacfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBwYXklMjBsb2dvfGVufDF8fHx8MTc2NTIxNjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-green-500' 
    },
    { 
      id: 'applepay', 
      name: 'Apple Pay', 
      icon: 'https://images.unsplash.com/photo-1649734924649-b559375080b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBheSUyMGxvZ298ZW58MXx8fHwxNzY1MjE2NTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-gray-700 to-gray-900' 
    },
  ];

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert(t.paymentRequired);
      setShowPaymentMethods(true);
      return;
    }
    const selectedPayment = paymentMethods.find(pm => pm.id === paymentMethod);
    alert(`${t.checkoutSuccess}\\n\\n${t.selectPaymentMethod}: ${selectedPayment?.name}`);
  };

  // Get unique categories from cart items
  const cartCategories = Array.from(new Set(cartItems.map(item => item.product.category)));
  
  // Determine dominant category (by quantity)
  const getCategoryQuantity = (category: Category) => {
    return cartItems
      .filter(item => item.product.category === category)
      .reduce((sum, item) => sum + item.quantity, 0);
  };
  
  const dominantCategory = cartCategories.reduce((prev, current) => {
    return getCategoryQuantity(current) > getCategoryQuantity(prev) ? current : prev;
  }, cartCategories[0] || 'ropa');

  // Category-specific background effects
  const getCategoryBackground = () => {
    switch (dominantCategory) {
      case 'ropa':
        return {
          primary: 'from-pink-400/20 via-purple-400/20 to-indigo-400/20',
          secondary: 'from-rose-400/15 via-fuchsia-400/15 to-violet-400/15',
          tertiary: 'from-pink-300/10 via-purple-300/10 to-blue-300/10',
          sparkle1: 'from-pink-400 to-purple-500',
          sparkle2: 'from-fuchsia-400 to-violet-500',
          sparkle3: 'from-rose-400 to-indigo-500'
        };
      case 'calzado':
        return {
          primary: 'from-orange-400/20 via-amber-400/20 to-yellow-400/20',
          secondary: 'from-red-400/15 via-orange-400/15 to-amber-400/15',
          tertiary: 'from-orange-300/10 via-yellow-300/10 to-amber-300/10',
          sparkle1: 'from-orange-400 to-red-500',
          sparkle2: 'from-amber-400 to-orange-500',
          sparkle3: 'from-yellow-400 to-amber-500'
        };
      case 'accesorios':
        return {
          primary: 'from-cyan-400/20 via-teal-400/20 to-emerald-400/20',
          secondary: 'from-blue-400/15 via-cyan-400/15 to-teal-400/15',
          tertiary: 'from-sky-300/10 via-cyan-300/10 to-teal-300/10',
          sparkle1: 'from-cyan-400 to-blue-500',
          sparkle2: 'from-teal-400 to-emerald-500',
          sparkle3: 'from-sky-400 to-cyan-500'
        };
      default:
        return {
          primary: 'from-yellow-400/20 via-orange-400/20 to-red-400/20',
          secondary: 'from-orange-400/15 via-red-400/15 to-pink-400/15',
          tertiary: 'from-yellow-300/10 via-orange-300/10 to-red-300/10',
          sparkle1: 'from-yellow-400 to-orange-500',
          sparkle2: 'from-orange-400 to-red-500',
          sparkle3: 'from-red-400 to-pink-500'
        };
    }
  };

  const categoryBg = getCategoryBackground();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-gray-50 to-white relative overflow-hidden">
      {/* Category-based animated background effects */}
      {cartItems.length > 0 && (
        <>
          {/* Primary animated blob */}
          <div className={`absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-r ${categoryBg.primary} rounded-full blur-3xl animate-pulse`}></div>
          
          {/* Secondary animated blob */}
          <div 
            className={`absolute bottom-20 left-0 w-[450px] h-[450px] bg-gradient-to-r ${categoryBg.secondary} rounded-full blur-3xl animate-pulse`} 
            style={{animationDelay: '1.5s'}}
          ></div>
          
          {/* Tertiary animated blob */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r ${categoryBg.tertiary} rounded-full blur-3xl animate-pulse`}
            style={{animationDelay: '0.8s'}}
          ></div>
          
          {/* Floating sparkles based on category */}
          <div className={`absolute top-10 right-20 w-4 h-4 bg-gradient-to-r ${categoryBg.sparkle1} rounded-full animate-ping`} style={{animationDelay: '0.3s'}}></div>
          <div className={`absolute bottom-40 left-40 w-3 h-3 bg-gradient-to-r ${categoryBg.sparkle2} rounded-full animate-ping`} style={{animationDelay: '1.5s'}}></div>
          <div className={`absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-to-r ${categoryBg.sparkle3} rounded-full animate-ping`} style={{animationDelay: '2.2s'}}></div>
          <div className={`absolute bottom-1/4 right-40 w-2 h-2 bg-gradient-to-r ${categoryBg.sparkle1} rounded-full animate-ping`} style={{animationDelay: '3s'}}></div>
          <div className={`absolute top-2/3 left-1/4 w-2 h-2 bg-gradient-to-r ${categoryBg.sparkle2} rounded-full animate-ping`} style={{animationDelay: '0.7s'}}></div>
        </>
      )}
      
      {/* Default background for empty cart */}
      {cartItems.length === 0 && (
        <>
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/13 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-800/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"></div>
        </>
      )}
      
      {/* Header */}
      <Header
        user={user}
        cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        onGoToCart={() => {}}
        onGoToSupport={onGoToSupport}
        onGoToCategories={onGoToCategories}
        onLogout={onLogout}
        language={language}
        onToggleLanguage={onToggleLanguage}
        showBackButton={true}
        onBack={onBack}
        title={t.myCart}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-gray-900 mb-2">{t.emptyCart}</h2>
            <p className="text-gray-600 mb-6">{t.addItems}</p>
            <Button onClick={onBack} className="bg-primary text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all">
              {t.exploreProducts}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-gray-900 mb-6">{t.cartItems}</h2>
              {cartItems.map((item) => {
                const discount = getDiscountPercentage(item.product.condition);
                return (
                  <div
                    key={item.product.id}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-primary/10"
                  >
                    <div className="flex gap-6">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-28 h-28 object-cover rounded-lg shadow-sm"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="text-gray-900 mb-1">{item.product.name}</h3>
                            <p className="text-gray-600 text-sm">{item.product.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-500">{item.product.condition}</span>
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                {discount}% OFF
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onUpdateQuantity(item.product.id, 0)}
                            className="hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="hover:bg-white h-8 w-8"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-gray-900 w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="hover:bg-white h-8 w-8"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <div className="flex flex-col items-end gap-1">
                              <p className="text-gray-400 text-xs line-through">${item.product.price.toFixed(2)}</p>
                              <p className="text-gray-900 font-medium">${getDiscountedPrice(item.product.price, item.product.condition).toFixed(2)} each</p>
                              <p className="text-lg font-semibold text-green-600">${(getDiscountedPrice(item.product.price, item.product.condition) * item.quantity).toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/20 sticky top-24">
                <h3 className="text-gray-900 mb-6">{t.orderSummary}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>{t.subtotal}</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>

                  {/* Delivery Method Selector */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 font-medium mb-3">{t.deliveryMethod}</p>
                    
                    {/* Shipping Option */}
                    <button
                      onClick={() => setDeliveryMethod('shipping')}
                      className={`w-full p-4 rounded-lg border-2 transition-all mb-3 text-left ${
                        deliveryMethod === 'shipping'
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          deliveryMethod === 'shipping' ? 'bg-orange-500' : 'bg-gray-200'
                        }`}>
                          <Truck className={`w-5 h-5 ${
                            deliveryMethod === 'shipping' ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{t.shipping}</p>
                          <p className="text-xs text-gray-600">
                            {subtotal >= freeShippingThreshold ? t.freeShipping : `$${shipping.toFixed(2)}`}
                          </p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          deliveryMethod === 'shipping'
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300'
                        }`}>
                          {deliveryMethod === 'shipping' && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Pickup Option */}
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        deliveryMethod === 'pickup'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          deliveryMethod === 'pickup' ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          <MapPin className={`w-5 h-5 ${
                            deliveryMethod === 'pickup' ? 'text-white' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{t.pickup}</p>
                          <p className="text-xs text-gray-600">{t.freeShipping}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          deliveryMethod === 'pickup'
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        }`}>
                          {deliveryMethod === 'pickup' && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Pickup Address */}
                    {deliveryMethod === 'pickup' && (
                      <div className="mt-3 p-3 bg-green-50 rounded-lg border border-green-200 animate-fade-in">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-green-800">{t.pickupAddress}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <Separator />
                  
                  {deliveryMethod === 'shipping' && (
                    <>
                      <div className="flex justify-between text-gray-600">
                        <span>{t.shippingCost}</span>
                        <span className="font-medium">
                          {shipping === 0 ? (
                            <span className="text-green-600">{t.freeShipping}</span>
                          ) : (
                            `$${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      
                      {subtotal < freeShippingThreshold && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 animate-pulse">
                          <p className="text-sm text-yellow-800 text-center">
                            {t.almostFreeShipping}
                          </p>
                        </div>
                      )}

                      {subtotal >= freeShippingThreshold && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 animate-bounce">
                          <p className="text-sm text-green-800 text-center font-medium">
                            {t.congratsFreeShipping}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <Separator className="my-6" />

                {/* Payment Method Selector */}
                <div className="mb-6">
                  <button
                    onClick={() => setShowPaymentMethods(!showPaymentMethods)}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-gray-900">{t.selectPaymentMethod}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-purple-600 transition-transform ${showPaymentMethods ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showPaymentMethods && (
                    <div className="mt-3 space-y-2 animate-fade-in">
                      {paymentMethods.map((pm) => (
                        <button
                          key={pm.id}
                          onClick={() => {
                            setPaymentMethod(pm.id);
                            setShowPaymentMethods(false);
                          }}
                          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                            paymentMethod === pm.id
                              ? 'border-purple-500 bg-purple-50 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${pm.color}`}>
                              <img src={pm.icon} alt={pm.name} className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{pm.name}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              paymentMethod === pm.id
                                ? 'border-purple-500 bg-purple-500'
                                : 'border-gray-300'
                            }`}>
                              {paymentMethod === pm.id && (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {paymentMethod && !showPaymentMethods && (
                    <div className="mt-3 p-3 bg-purple-50 rounded-lg border border-purple-200 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-purple-600" />
                        <p className="text-sm text-purple-800">
                          {paymentMethods.find(pm => pm.id === paymentMethod)?.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between text-gray-900 mb-6">
                  <span className="font-medium">{t.total}</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white hover:from-yellow-500 hover:via-orange-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 transform py-6"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  {paymentMethod ? t.confirmPayment : t.proceedToCheckout}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
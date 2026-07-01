import { useState } from 'react';
import { Package, Shield, Truck, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { productDescriptions } from '../translations/productTranslations';
import type { Product, User, Language } from '../App';

interface ProductDetailScreenProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
  onGoToCart: () => void;
  onGoToSupport: () => void;
  onGoToCategories: () => void;
  cartItemsCount: number;
  user: User;
  onLogout: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export function ProductDetailScreen({
  product,
  onAddToCart,
  onBack,
  onGoToCart,
  onGoToSupport,
  onGoToCategories,
  cartItemsCount,
  user,
  onLogout,
  language,
  onToggleLanguage,
}: ProductDetailScreenProps) {
  const [addedToCart, setAddedToCart] = useState(false);

  const texts = {
    en: {
      productDetails: 'Product Details',
      condition: 'Condition',
      size: 'Size',
      category: 'Category',
      addToCart: 'Add to Cart',
      addedToCart: 'Added to Cart!',
      viewCart: 'View Cart',
      productFeatures: 'Product Features',
      authenticProduct: 'Authentic Product',
      qualityGuaranteed: 'Quality Guaranteed',
      freeShipping: 'Free Shipping on orders over $2,999',
      secureCheckout: 'Secure Checkout',
      description: 'Description',
      savings: 'You Save',
      originalPrice: 'Original Price (estimated)',
      discountApplied: 'Discount Applied',
      ropa: 'Clothing',
      accesorios: 'Accessories',
      calzado: 'Footwear',
      excellent: 'Excellent',
      likeNew: 'Like New',
      good: 'Good'
    },
    es: {
      productDetails: 'Detalles del Producto',
      condition: 'Condición',
      size: 'Talla',
      category: 'Categoría',
      addToCart: 'Agregar al Carrito',
      addedToCart: '¡Agregado al Carrito!',
      viewCart: 'Ver Carrito',
      productFeatures: 'Características del Producto',
      authenticProduct: 'Producto Auténtico',
      qualityGuaranteed: 'Calidad Garantizada',
      freeShipping: 'Envío gratis en pedidos mayores a $2,999',
      secureCheckout: 'Pago Seguro',
      description: 'Descripción',
      savings: 'Ahorras',
      originalPrice: 'Precio Original (estimado)',
      discountApplied: 'Descuento Aplicado',
      ropa: 'Ropa',
      accesorios: 'Accesorios',
      calzado: 'Calzado',
      excellent: 'Excelente',
      likeNew: 'Como Nuevo',
      good: 'Buen Estado'
    }
  };

  const t = texts[language];

  // Translate condition value - handles both English and Spanish input
  const getTranslatedCondition = (condition: string): string => {
    const conditionLower = condition.toLowerCase();
    
    // If already in English, translate to Spanish if needed
    if (conditionLower === 'excellent' || conditionLower === 'excelente') {
      return language === 'en' ? 'Excellent' : 'Excelente';
    }
    if (conditionLower === 'like new' || conditionLower === 'como nuevo') {
      return language === 'en' ? 'Like New' : 'Como Nuevo';
    }
    if (conditionLower === 'good' || conditionLower === 'buen estado') {
      return language === 'en' ? 'Good' : 'Buen Estado';
    }
    
    // Fallback: return as-is if no match
    return condition;
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  // Get translated description
  const getTranslatedDescription = (): string => {
    const translation = productDescriptions[product.id];
    if (translation) {
      return language === 'en' ? translation.en : translation.es;
    }
    return product.description;
  };

  // Calculate discount percentage (for display badge only)
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

  const discount = getDiscountPercentage(product.condition);

  // Calculate discounted price from original price
  const getDiscountedPrice = (originalPrice: number): number => {
    return Math.round(originalPrice * (1 - discount / 100));
  };

  const discountedPrice = getDiscountedPrice(product.price);
  const savings = product.price - discountedPrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Header */}
      <Header
        user={user}
        cartItemsCount={cartItemsCount}
        onGoToCart={onGoToCart}
        onGoToSupport={onGoToSupport}
        onGoToCategories={onGoToCategories}
        onLogout={onLogout}
        language={language}
        onToggleLanguage={onToggleLanguage}
        showBackButton={true}
        onBack={onBack}
        title={t.productDetails}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-primary/10 group hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 animate-bounce">
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white text-lg px-4 py-2 shadow-lg border-2 border-white">
                    {discount}% OFF
                  </Badge>
                </div>
                {/* Condition Badge */}
                <div className="absolute top-4 left-4 animate-slide-in">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 shadow-lg border-2 border-white">
                    {getTranslatedCondition(product.condition)}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{t.authenticProduct}</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{t.qualityGuaranteed}</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all">
                    <Truck className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{t.freeShipping}</p>
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105 transform group">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-100 to-yellow-100 group-hover:from-orange-200 group-hover:to-yellow-200 transition-all">
                    <Package className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{t.secureCheckout}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/10">
              <h1 className="text-gray-900 mb-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                {product.name}
              </h1>
              
              {/* Price Section */}
              <div className="mb-6 p-6 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-xl border-2 border-primary/20">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through text-xl">${product.price.toFixed(2)}</span>
                    <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-3 py-1">
                      {discount}% OFF
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-gray-900 font-extrabold text-4xl">${discountedPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-green-600 font-medium">
                    {t.savings}: ${savings.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-medium">{t.condition}:</span>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    {getTranslatedCondition(product.condition)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-medium">{t.size}:</span>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                    {product.size}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600 font-medium">{t.category}:</span>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    {t[product.category as keyof typeof t] as string}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  {t.description}
                </h3>
                <p className="text-gray-600 leading-relaxed bg-gradient-to-r from-gray-50 to-yellow-50/30 p-4 rounded-lg border border-gray-200">
                  {getTranslatedDescription()}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                  className={`w-full py-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${
                    addedToCart
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                      : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 hover:from-yellow-500 hover:via-orange-600 hover:to-red-700'
                  } text-white font-semibold`}
                >
                  {addedToCart ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2 animate-bounce" />
                      {t.addedToCart}
                    </>
                  ) : (
                    <>
                      <Package className="w-5 h-5 mr-2" />
                      {t.addToCart}
                    </>
                  )}
                </Button>
                
                {addedToCart && (
                  <Button
                    onClick={onGoToCart}
                    variant="outline"
                    className="w-full py-6 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 transition-all animate-slide-in"
                  >
                    {t.viewCart}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
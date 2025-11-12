import { ArrowLeft, ShoppingCart, Package, Shield, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../App';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';

interface ProductDetailScreenProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
  onGoToCart: () => void;
  cartItemsCount: number;
}

export function ProductDetailScreen({
  product,
  onAddToCart,
  onBack,
  onGoToCart,
  cartItemsCount,
}: ProductDetailScreenProps) {
  const handleAddToCart = () => {
    onAddToCart(product);
    // Mostrar feedback visual
    alert('Producto añadido al carrito');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden">
      {/* Efectos de difuminación de fondo con múltiples colores */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-slate-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-yellow-50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <img src={starLogo} alt="STAR Logo" className="w-8 h-8 object-contain rounded-full bg-white shadow-md" />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="relative border-primary/30 hover:bg-yellow-50 hover:border-primary"
            onClick={onGoToCart}
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-primary text-black h-5 w-5 flex items-center justify-center p-0 border border-black">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="aspect-square bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-primary/20 relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Borde decorativo */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-gray-900">{product.name}</h1>
                <Badge className="bg-primary text-black border border-black">{product.condition}</Badge>
              </div>
              <p className="text-black mb-4">${product.price}</p>
            </div>

            <div className="border-t border-primary/20 pt-6">
              <h3 className="text-gray-900 mb-3">Descripción</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="border-t border-primary/20 pt-6">
              <h3 className="text-gray-900 mb-4">Detalles del producto</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Talla:</span>
                  <span className="text-gray-900">{product.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Condición:</span>
                  <span className="text-gray-900">{product.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoría:</span>
                  <span className="text-gray-900 capitalize">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-primary/20 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <Package className="w-6 h-6 text-black mb-2" />
                  <p className="text-gray-600">Artículo verificado</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <Shield className="w-6 h-6 text-black mb-2" />
                  <p className="text-gray-600">Compra segura</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                  <Truck className="w-6 h-6 text-black mb-2" />
                  <p className="text-gray-600">Envío incluido</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-primary/20 pt-6 space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full bg-primary text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all"
              >
                Añadir al carrito
              </Button>
              <Button
                variant="outline"
                className="w-full border-primary/30 hover:bg-yellow-50 hover:border-primary"
                onClick={() => {
                  onAddToCart(product);
                  onGoToCart();
                }}
              >
                Comprar ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
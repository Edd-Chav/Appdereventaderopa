import { ArrowLeft, Minus, Plus, Trash2, CreditCard } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Separator } from './ui/separator';
import type { CartItem } from '../App';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onBack: () => void;
}

export function CartScreen({ cartItems, onUpdateQuantity, onBack }: CartScreenProps) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 2999;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 10;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('¡Procesando pago! Esta es una demostración. En una app real, aquí se procesaría el pago.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-gray-50 to-white relative overflow-hidden">
      {/* Efectos de difuminación de fondo con múltiples colores */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/13 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-800/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-yellow-50">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <img src={starLogo} alt="STAR Logo" className="w-8 h-8 object-contain rounded-full bg-white shadow-md" />
            <h1 className="text-gray-900">Mi Carrito</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-gray-900 mb-2">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-6">Añade algunos artículos para comenzar</p>
            <Button onClick={onBack} className="bg-primary text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-all">
              Explorar productos
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.product.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-primary/20">
                      <ImageWithFallback
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-gray-900 mb-1">{item.product.name}</h3>
                          <p className="text-gray-600">Talla: {item.product.size}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => onUpdateQuantity(item.product.id, 0)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 bg-yellow-50 rounded-lg p-1 border border-primary/20">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-primary/20"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="text-gray-900 w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-primary/20"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-black">${item.product.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg sticky top-24 border border-primary/20">
                <h2 className="text-gray-900 mb-4">Resumen del pedido</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-green-600 font-medium">¡Gratis!</span>
                    ) : (
                      <span>${shipping}</span>
                    )}
                  </div>
                  <Separator className="bg-primary/20" />
                  <div className="flex justify-between text-gray-900">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-primary text-black hover:bg-yellow-400 mt-6 shadow-lg hover:shadow-xl transition-all"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Proceder al pago
                </Button>

                {subtotal >= freeShippingThreshold ? (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-center font-medium">
                      🎉 ¡Envío incluido!
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-primary/20">
                    <p className="text-gray-600 text-center">
                      Envío gratuito en compras superiores a $2,999
                    </p>
                    <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all duration-300"
                        style={{width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%`}}
                      ></div>
                    </div>
                    <p className="text-gray-500 text-center mt-2 text-sm">
                      Te faltan ${Math.max(freeShippingThreshold - subtotal, 0)} para envío gratis
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import { Package, Phone, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';

interface MenuScreenProps {
  onGoToCategories: () => void;
  onGoToSupport: () => void;
  cartItemsCount: number;
}

export function MenuScreen({ onGoToCategories, onGoToSupport, cartItemsCount }: MenuScreenProps) {
  const handleRegresarParcial3 = () => {
    window.location.href = 'https://edd-chav.github.io/indexReseller.github.io/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-gray-50 to-white relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/13 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-800/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.8s'}}></div>
      <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl shadow-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img src={starLogo} alt="STAR Logo" className="w-12 h-12 object-contain rounded-full bg-white shadow-md" />
            <h1 className="text-gray-900">Bazar STAR</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Welcome to Bazar STAR</h2>
          <p className="text-gray-600">What would you like to do today?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Order Button */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Package className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-gray-900">Order</h3>
              <p className="text-gray-600">Explore our catalog and make your purchases</p>
              <Button
                onClick={onGoToCategories}
                className="w-full bg-primary text-black hover:bg-yellow-400 shadow-md hover:shadow-lg transition-all mt-4"
              >
                Go to store
              </Button>
            </div>
          </div>

          {/* Call Support Button */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-gray-900">Call Support</h3>
              <p className="text-gray-600">Contact our team or submit a complaint</p>
              <Button
                onClick={onGoToSupport}
                variant="outline"
                className="w-full bg-white hover:bg-yellow-50 border-primary/30 text-black shadow-md hover:shadow-lg transition-all mt-4"
              >
                Go to support
              </Button>
            </div>
          </div>

          {/* Back to Partial 3 Button */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-gray-900">Back to Partial 3</h3>
              <p className="text-gray-600">Return to the previous project page</p>
              <Button
                onClick={handleRegresarParcial3}
                variant="outline"
                className="w-full bg-white hover:bg-yellow-50 border-primary/30 text-black shadow-md hover:shadow-lg transition-all mt-4"
              >
                Go to Partial 3
              </Button>
            </div>
          </div>
        </div>

        {/* Additional information */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md border border-primary/20 inline-block">
            <p className="text-gray-600">
              <span className="text-black">💎</span> Premium pre-owned designer clothing
            </p>
            <p className="text-gray-500 mt-2">Versace • Gucci • Prada • Balenciaga • Louis Vuitton</p>
          </div>
        </div>
      </div>
    </div>
  );
}
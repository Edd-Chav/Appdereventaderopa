import { useState } from 'react';
import { ShoppingCart, Menu, X, HeadphonesIcon, LogOut, Globe, Package, User, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';
import type { User as UserType, Language } from '../App';

interface HeaderProps {
  user: UserType;
  cartItemsCount: number;
  onGoToCart: () => void;
  onGoToSupport?: () => void;
  onGoToCategories?: () => void;
  onLogout: () => void;
  language: Language;
  onToggleLanguage: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
  title?: string;
}

export function Header({
  user,
  cartItemsCount,
  onGoToCart,
  onGoToSupport,
  onGoToCategories,
  onLogout,
  language,
  onToggleLanguage,
  showBackButton,
  onBack,
  title
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const texts = {
    en: {
      support: 'Support',
      order: 'Shop',
      cart: 'Cart',
      logout: 'Logout',
      changeLanguage: 'Change to Spanish',
      welcome: 'Welcome',
      backToParcial3: 'Back to Parcial 3'
    },
    es: {
      support: 'Soporte',
      order: 'Ordenar',
      cart: 'Carrito',
      logout: 'Cerrar Sesión',
      changeLanguage: 'Cambiar a Inglés',
      welcome: 'Bienvenido',
      backToParcial3: 'Volver a Parcial 3'
    }
  };

  const t = texts[language];

  return (
    <div className="bg-gradient-to-r from-white via-yellow-50/40 to-orange-50/40 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b-2 border-orange-200/30 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left section */}
          <button 
            onClick={onGoToCategories || (() => {})}
            className="flex items-center gap-3 group cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {showBackButton && onBack && (
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onBack();
                }}
                className="hover:bg-orange-100 hover:scale-110 transition-all duration-300 rounded-full"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
            )}
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-lg opacity-60 animate-glow-yellow-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-0.5 rounded-full shadow-xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-gradient-yellow-shift">
                <div className="bg-white p-1.5 rounded-full">
                  <img 
                    src={starLogo} 
                    alt="STAR Logo" 
                    className="w-10 h-10 object-contain rounded-full animate-pulse" 
                    style={{animationDuration: '3s'}}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h1 className="text-gray-900 group-hover:scale-105 transition-all duration-300 font-extrabold tracking-tight">
                Bazar <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-gradient">STAR</span>
              </h1>
              {title && title !== 'Bazar STAR' && (
                <p className="text-sm text-gray-600">{title}</p>
              )}
            </div>
          </button>

          {/* Right section - Menu button */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 border-2 border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:border-orange-400 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl rounded-full px-4 py-2 bg-white/90"
            >
              <div className="flex items-center gap-2">
                {menuOpen ? (
                  <X className="w-5 h-5 text-orange-600" />
                ) : (
                  <Menu className="w-5 h-5 text-orange-600" />
                )}
              </div>
            </Button>

            {/* Dropdown menu */}
            {menuOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border-2 border-orange-200 overflow-hidden animate-slide-in">
                {/* User info section */}
                <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-4 border-b-2 border-orange-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm">{t.welcome}</p>
                      <p className="text-white/90 font-bold truncate">{user.name}</p>
                      <p className="text-white/75 text-xs truncate">{user.email}</p>
                    </div>
                  </div>
                </div>

                <div className="p-2 space-y-1">
                  {/* Order/Shop button */}
                  {onGoToCategories && (
                    <button
                      onClick={() => {
                        onGoToCategories();
                        setMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 transition-all duration-300 shadow-sm">
                        <Package className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors flex-1">{t.order}</span>
                    </button>
                  )}

                  {/* Cart button */}
                  <button
                    onClick={() => {
                      onGoToCart();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300 shadow-sm relative">
                      <ShoppingCart className="w-5 h-5 text-green-600" />
                      {cartItemsCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-orange-600 text-white h-5 w-5 flex items-center justify-center p-0 text-xs border-2 border-white">
                          {cartItemsCount}
                        </Badge>
                      )}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors flex-1">{t.cart}</span>
                    {cartItemsCount > 0 && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>

                  {/* Support button */}
                  {onGoToSupport && (
                    <button
                      onClick={() => {
                        onGoToSupport();
                        setMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left group"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300 shadow-sm">
                        <HeadphonesIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors flex-1">{t.support}</span>
                    </button>
                  )}

                  <div className="my-2 border-t border-gray-200"></div>

                  {/* Back to Parcial 3 */}
                  <a
                    href="https://edd-chav.github.io/IndexDeBazarSTAR.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left group"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-300 shadow-sm">
                      <ExternalLink className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors flex-1">{t.backToParcial3}</span>
                  </a>

                  {/* Language toggle */}
                  <button
                    onClick={() => {
                      onToggleLanguage();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 transition-all duration-300 text-left group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300 shadow-sm">
                      <Globe className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-orange-600 transition-colors flex-1">{t.changeLanguage}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full font-medium">
                      {language === 'en' ? '🇺🇸 EN' : '🇪🇸 ES'}
                    </span>
                  </button>

                  {/* Logout button */}
                  <button
                    onClick={() => {
                      onLogout();
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 transition-all duration-300 text-left group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-red-100 to-orange-100 group-hover:from-red-200 group-hover:to-orange-200 transition-all duration-300 shadow-sm">
                      <LogOut className="w-5 h-5 text-red-600" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-red-600 transition-colors flex-1">{t.logout}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
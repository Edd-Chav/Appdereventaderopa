import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import type { Category, User, Language } from '../App';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';

interface CategoriesScreenProps {
  onSelectCategory: (category: Category) => void;
  onGoToCart: () => void;
  onGoToSupport: () => void;
  onGoToCategories: () => void;
  cartItemsCount: number;
  user: User;
  onLogout: () => void;
  language: Language;
  onToggleLanguage: () => void;
}

export function CategoriesScreen({ 
  onSelectCategory, 
  onGoToCart, 
  onGoToSupport,
  onGoToCategories,
  cartItemsCount,
  user,
  onLogout,
  language,
  onToggleLanguage
}: CategoriesScreenProps) {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEcoModal, setShowEcoModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Imágenes de fondo por defecto (cuando no hay hover)
  const defaultBackgrounds = [
    'https://images.unsplash.com/photo-1685432531593-1afc8a152e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWx8ZW58MXx8fHwxNzYyOTgxNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2Mjk4NjM5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1687296186113-856c3a016966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2Mjk4NjM5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2Mjk4NjQwMHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  // Imágenes para cada categoría
  const categoryBackgrounds = {
    ropa: [
      'https://images.unsplash.com/photo-1556665132-c734fe400c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHdlYXJpbmclMjBhY2Nlc3NvcmllcyUyMHdhdGNofGVufDF8fHx8MTc2Mjk2NjU5OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2Nlc3NvcmllcyUyMGpld2VscnklMjBmYXNoaW9ufGVufDF8fHx8MTc2Mjk2NjYwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1569388330338-53ecda03dfa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBzdW5nbGFzc2VzJTIwc3R5bGV8ZW58MXx8fHwxNzYyOTY2NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    accesorios: [
      'https://images.unsplash.com/photo-1659887347330-5bd7d335edaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZyUyMHN0eWxlfGVufDF8fHx8MTc2Mjk2NjU5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760736534430-ed4a321e108f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwbW9kZWwlMjB1cmJhbiUyMG91dGZpdHxlbnwxfHx8fDE3NjI5NjY1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1761164920960-2d776a18998c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMG1vZGVsJTIwZHJlc3N8ZW58MXx8fHwxNzYyOTY2NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    calzado: [
      'https://images.unsplash.com/photo-1632497775897-815042a13216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMGZvb3R3ZWFyJTIwbW9kZWwlMjBzaG9lc3xlbnwxfHx8fDE3NjI5NjY2MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1631050165150-d6d79a2fd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc2hvZXMlMjBib290cyUyMHN0eWxlfGVufDF8fHx8MTc2Mjk2NjYwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHNob2VzJTIwbGlmZXN0eWxlJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI5NjY2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  };

  const texts = {
    en: {
      exploreTitle: 'Explore by category',
      exploreSubtitle: 'Find pre-owned items in excellent condition',
      clothing: { name: 'Clothing', description: 'Discover unique pieces' },
      accessories: { name: 'Accessories', description: 'Complete your style' },
      footwear: { name: 'Footwear', description: 'Take the perfect step' },
      whyBuy: 'Why buy pre-owned?',
      sustainable: 'Sustainable and eco-friendly',
      save: 'Save up to 70%',
      unique: 'Unique and exclusive pieces'
    },
    es: {
      exploreTitle: 'Explora por categoría',
      exploreSubtitle: 'Encuentra artículos de segunda mano en excelente estado',
      clothing: { name: 'Ropa', description: 'Descubre piezas únicas' },
      accessories: { name: 'Accesorios', description: 'Completa tu estilo' },
      footwear: { name: 'Calzado', description: 'Da el paso perfecto' },
      whyBuy: '¿Por qué comprar de segunda mano?',
      sustainable: 'Sostenible y ecológico',
      save: 'Ahorra hasta 70%',
      unique: 'Piezas únicas y exclusivas'
    }
  };

  const t = texts[language];

  const categories = [
    {
      id: 'ropa' as Category,
      name: t.clothing.name,
      image: 'https://images.unsplash.com/photo-1762343287001-b5c8ed1bf773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHdlYXJpbmclMjBzbmVha2Vyc3xlbnwxfHx8fDE3NjI5NjQ4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.clothing.description,
    },
    {
      id: 'accesorios' as Category,
      name: t.accessories.name,
      image: 'https://images.unsplash.com/photo-1721917113611-33f71aa9f416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RlbCUyMHdlYXJpbmclMjB3YXRjaHxlbnwxfHx8fDE3NjI5NjQ4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.accessories.description,
    },
    {
      id: 'calzado' as Category,
      name: t.footwear.name,
      image: 'https://images.unsplash.com/photo-1631363320585-06e91d54210e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjI5MjYwNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.footwear.description,
    },
  ];

  // Crossfade automático de imágenes
  useEffect(() => {
    const backgrounds = hoveredCategory 
      ? categoryBackgrounds[hoveredCategory] 
      : defaultBackgrounds;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [hoveredCategory]);

  // Resetear índice cuando cambia la categoría
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [hoveredCategory]);

  // Obtener las imágenes actuales
  const getCurrentBackgrounds = () => {
    return hoveredCategory ? categoryBackgrounds[hoveredCategory] : defaultBackgrounds;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* Efectos de difuminación amarillos animados */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-amber-300/10 rounded-full blur-3xl animate-glow-yellow-pulse"></div>
      
      {/* Logo de fondo difuminado y animado */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img 
          src={starLogo} 
          alt="STAR Background Logo" 
          className="w-[800px] h-[800px] object-contain"
          style={{
            filter: 'blur(20px)',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite, spin 60s linear infinite'
          }}
        />
      </div>

      {/* Crossfade de imágenes de fondo */}
      {getCurrentBackgrounds().map((image, index) => (
        <div
          key={`bg-${hoveredCategory || 'default'}-${index}`}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay oscuro sobre las imágenes */}
          <div className={`absolute inset-0 transition-all duration-700 ${
            hoveredCategory 
              ? 'bg-gradient-to-br from-black/70 via-black/60 to-black/80' 
              : 'bg-gradient-to-br from-black/60 via-black/50 to-black/70'
          }`}></div>
        </div>
      ))}

      {/* Header con animación */}
      <Header
        user={user}
        cartItemsCount={cartItemsCount}
        onGoToCart={onGoToCart}
        onGoToSupport={onGoToSupport}
        onGoToCategories={onGoToCategories}
        onLogout={onLogout}
        language={language}
        onToggleLanguage={onToggleLanguage}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 animate-fade-in">
          <h2 className="text-white mb-2 transition-all duration-300 drop-shadow-lg">
            {t.exploreTitle}
          </h2>
          <p className="text-white/90 transition-all duration-300 drop-shadow-md">
            {t.exploreSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const isHovered = hoveredCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up-fade-in ${
                  isHovered ? 'ring-4 ring-primary z-10' : ''
                }`}
                style={{
                  animationDelay: `${idx * 0.15}s`,
                  opacity: 0
                }}
              >
                <div className="relative h-80">
                  {/* Imagen de fondo */}
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                  
                  {/* Efecto de brillo amarillo al hover */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isHovered ? 'bg-primary/30 animate-pulse' : 'bg-primary/0'
                  }`}></div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-4 right-4 w-2 h-2 bg-primary rounded-full transition-all duration-500 ${
                      isHovered ? 'animate-ping' : 'opacity-0'
                    }`}></div>
                    <div className={`absolute bottom-10 left-6 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-500 ${
                      isHovered ? 'animate-ping' : 'opacity-0'
                    }`} style={{animationDelay: '0.3s'}}></div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0">
                    <div className={`inline-block bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full mb-3 transition-all duration-300 ${
                      isHovered ? 'bg-primary scale-110 shadow-xl' : ''
                    }`}>
                      <h3 className="text-black font-medium">{category.name}</h3>
                    </div>
                    <p className="text-white/90 transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Borde decorativo animado */}
                  <div className={`absolute inset-0 border-2 transition-all duration-300 rounded-2xl ${
                    isHovered ? 'border-primary/70 shadow-[0_0_30px_rgba(255,237,0,0.5)]' : 'border-primary/0'
                  }`}></div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Section con animaciones */}
        <div className={`mt-12 backdrop-blur-xl rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 hover:shadow-2xl ${
          hoveredCategory ? 'bg-white/30 border-white/50' : 'bg-white/90 border-primary/30'
        }`}>
          <h3 className={`text-gray-900 mb-6 transition-colors duration-300 ${hoveredCategory ? 'text-white' : ''}`}>
            {t.whyBuy}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`text-center p-6 rounded-xl transition-all duration-300 ${
              hoveredCategory ? 'hover:bg-white/20 bg-white/10' : 'hover:bg-yellow-50 bg-white/50'
            } shadow-md hover:shadow-xl cursor-pointer`}>
              <div className="text-5xl mb-3">♻️</div>
              <p className={`text-gray-600 transition-colors duration-300 ${hoveredCategory ? 'text-white/90' : ''}`}>
                {t.sustainable}
              </p>
            </div>
            <div className={`text-center p-6 rounded-xl transition-all duration-300 ${
              hoveredCategory ? 'hover:bg-white/20 bg-white/10' : 'hover:bg-yellow-50 bg-white/50'
            } shadow-md hover:shadow-xl cursor-pointer`}>
              <div className="text-5xl mb-3">💰</div>
              <p className={`text-gray-600 transition-colors duration-300 ${hoveredCategory ? 'text-white/90' : ''}`}>
                {t.save}
              </p>
            </div>
            <div className={`text-center p-6 rounded-xl transition-all duration-300 ${
              hoveredCategory ? 'hover:bg-white/20 bg-white/10' : 'hover:bg-yellow-50 bg-white/50'
            } shadow-md hover:shadow-xl cursor-pointer`}>
              <div className="text-5xl mb-3">✨</div>
              <p className={`text-gray-600 transition-colors duration-300 ${hoveredCategory ? 'text-white/90' : ''}`}>
                {t.unique}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
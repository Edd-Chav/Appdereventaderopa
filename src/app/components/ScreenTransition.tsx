import { ReactNode, useEffect, useState, useRef } from 'react';

interface ScreenTransitionProps {
  children: ReactNode;
  direction?: 'forward' | 'backward';
  onSwipeBack?: () => void;
}

export function ScreenTransition({ 
  children, 
  direction = 'forward',
  onSwipeBack 
}: ScreenTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pequeño delay para activar la animación
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Gestos de deslizamiento para móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    
    touchCurrentX.current = e.touches[0].clientX;
    const diff = touchCurrentX.current - touchStartX.current;
    
    // Solo permitir deslizar hacia la derecha (regresar)
    if (diff > 0 && diff < 300) {
      setSwipeOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    
    const diff = touchCurrentX.current - touchStartX.current;
    
    // Si deslizó más de 120px, activar el regreso
    if (diff > 120 && onSwipeBack) {
      setSwipeOffset(window.innerWidth); // Animar salida completa
      setTimeout(() => {
        onSwipeBack();
        setSwipeOffset(0);
      }, 200);
    } else {
      // Regresar a posición original
      setSwipeOffset(0);
    }
    
    setIsSwiping(false);
  };

  // Clases de animación basadas en dirección
  const getAnimationClasses = () => {
    if (isSwiping) {
      return '';
    }

    if (!isVisible) {
      return direction === 'forward' 
        ? 'opacity-0 translate-x-full scale-95'
        : 'opacity-0 -translate-x-full scale-95';
    }

    return 'opacity-100 translate-x-0 scale-100';
  };

  return (
    <div
      ref={containerRef}
      className={`
        min-h-screen w-full
        transition-all duration-300 ease-out
        ${getAnimationClasses()}
      `}
      style={{
        transform: isSwiping ? `translateX(${swipeOffset}px)` : undefined,
        transition: isSwiping ? 'none' : undefined,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Indicador visual de deslizamiento */}
      {isSwiping && swipeOffset > 30 && (
        <div 
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          style={{
            opacity: Math.min(swipeOffset / 120, 1),
          }}
        >
          <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 p-3 rounded-full shadow-2xl animate-pulse">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
}

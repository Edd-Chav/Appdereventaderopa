import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import starLogo from 'figma:asset/93a8753ad858f757b1413489ff0481f51289e4a5.png';
import type { User, Language } from '../App';

interface LoginScreenProps {
  onLogin: (user: User) => void;
  language: Language;
}

export function LoginScreen({ onLogin, language }: LoginScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [emailDomainIndex, setEmailDomainIndex] = useState(0);
  const [emailPlaceholder, setEmailPlaceholder] = useState('you@');

  const fashionImages = [
    'https://images.unsplash.com/photo-1762430790694-aedd36b4cb8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwZmFzaGlvbiUyMHJ1bndheXxlbnwxfHx8fDE3NjUyMTU1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1683290845409-280ec0dc39df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYm91dGlxdWV8ZW58MXx8fHwxNzY1MTkxNjk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1704775986777-b903cf6b9802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNsb3RoaW5nJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2NTIxNTU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1676808325981-3aa9a37347c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RyZWV0JTIwc3R5bGV8ZW58MXx8fHwxNzY1MjA3ODM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1759933253608-ba60cfb8dcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhY2Nlc3NvcmllcyUyMHNob3BwaW5nfGVufDF8fHx8MTc2NTIxNTU4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1589986993357-6f9a171e02d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbGlmZXN0eWxlJTIwbHV4dXJ5fGVufDF8fHx8MTc2Mjk0MTI4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760089663992-af2a3506504f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjI5NjYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1660486044177-45cd45bb5e99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwdXJiYW4lMjBmYXNoaW9ufGVufDF8fHx8MTc2Mjk2NjM3MXww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  const emailDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com', 'proton.me'];

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fashionImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Email placeholder animation
  useEffect(() => {
    const domain = emailDomains[emailDomainIndex];
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        // Typing effect
        if (charIndex < domain.length) {
          currentText = 'you@' + domain.substring(0, charIndex + 1);
          setEmailPlaceholder(currentText);
          charIndex++;
        } else {
          // Wait before deleting
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          currentText = 'you@' + domain.substring(0, charIndex - 1);
          setEmailPlaceholder(currentText);
          charIndex--;
        } else {
          // Move to next domain
          isDeleting = false;
          setEmailDomainIndex((prev) => (prev + 1) % emailDomains.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [emailDomainIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (email === 'admin' && password === 'admin') {
      const userData: User = {
        name: 'Admin',
        email: 'admin@bazarstar.com',
        phone: undefined
      };
      onLogin(userData);
      return;
    }
    
    const userData: User = {
      name: isSignUp ? name : 'Guest User',
      email,
      phone: phone || undefined
    };
    onLogin(userData);
  };

  const handleGuestLogin = () => {
    const guestData: User = {
      name: 'Guest',
      email: 'guest@bazarstar.com'
    };
    onLogin(guestData);
  };

  const handleSocialLogin = (provider: string) => {
    const userData: User = {
      name: `${provider} User`,
      email: `user@${provider.toLowerCase()}.com`
    };
    onLogin(userData);
  };

  const texts = {
    en: {
      title: 'Bazar STAR',
      subtitle: 'Your premium pre-owned fashion marketplace',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      name: 'Full Name',
      namePlaceholder: 'John Doe',
      email: 'Email Address',
      emailPlaceholder: 'you@email.com',
      password: 'Password',
      passwordPlaceholder: '••••••••',
      phone: 'Phone Number (Optional)',
      phonePlaceholder: '+52 123 456 7890',
      signInButton: 'Sign In',
      signUpButton: 'Create Account',
      forgotPassword: 'Forgot your password?',
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      createAccount: 'Sign Up',
      signInLink: 'Sign In',
      orSignInWith: 'Or sign in with',
      googleAria: 'Sign in with Google',
      githubAria: 'Sign in with GitHub',
      appleAria: 'Sign in with Apple',
      continueAsGuest: 'Continue as Guest'
    },
    es: {
      title: 'Bazar STAR',
      subtitle: 'Tu mercado premium de moda de segunda mano',
      signIn: 'Iniciar Sesión',
      signUp: 'Registrarse',
      name: 'Nombre Completo',
      namePlaceholder: 'Juan Pérez',
      email: 'Correo Electrónico',
      emailPlaceholder: 'tu@email.com',
      password: 'Contraseña',
      passwordPlaceholder: '••••••••',
      phone: 'Número de Teléfono (Opcional)',
      phonePlaceholder: '+52 123 456 7890',
      signInButton: 'Iniciar Sesión',
      signUpButton: 'Crear Cuenta',
      forgotPassword: '¿Olvidaste tu contraseña?',
      noAccount: '¿No tienes cuenta?',
      haveAccount: '¿Ya tienes cuenta?',
      createAccount: 'Regístrate',
      signInLink: 'Inicia Sesión',
      orSignInWith: 'O inicia sesión con',
      googleAria: 'Iniciar sesión con Google',
      githubAria: 'Iniciar sesión con GitHub',
      appleAria: 'Iniciar sesión con Apple',
      continueAsGuest: 'Continuar como Invitado'
    }
  };

  const t = texts[language];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Crossfade background images */}
      {fashionImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-2000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/85 to-black/90"></div>
      
      {/* Animated background effects with vibrant colors */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-yellow-400/40 via-orange-500/40 to-red-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Floating sparkles */}
      <div className="absolute top-10 right-20 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
      <div className="absolute bottom-20 left-40 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute top-40 right-60 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" style={{animationDelay: '2.2s'}}></div>
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping" style={{animationDelay: '3.2s'}}></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-2 border-transparent bg-gradient-to-br from-white via-white to-yellow-50/50 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] transition-all duration-700 animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            {/* Vibrant animated logo */}
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 p-1 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 hover:rotate-12">
                <div className="bg-white p-3 rounded-full">
                  <img src={starLogo} alt="STAR Logo" className="w-20 h-20 object-contain rounded-full animate-pulse" style={{animationDuration: '3s'}} />
                </div>
              </div>
            </div>
            <h1 className="text-gray-900 text-center font-extrabold tracking-tight animate-gradient">
              Bazar <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">STAR</span>
            </h1>
            <p className="text-gray-600 text-center mt-2 animate-fade-in" style={{animationDelay: '0.2s'}}>{t.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignUp && (
              <div className="space-y-2 animate-slide-in">
                <Label htmlFor="name" className="text-gray-700 font-medium">{t.name}</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-all"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">{t.email}</Label>
              <Input
                id="email"
                type="text"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300 hover:border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">{t.password}</Label>
              <Input
                id="password"
                type="password"
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300 hover:border-gray-300"
              />
            </div>

            {isSignUp && (
              <div className="space-y-2 animate-slide-in">
                <Label htmlFor="phone" className="text-gray-700 font-medium">{t.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-2 border-gray-200 focus:border-orange-400 focus:ring-orange-400/20 transition-all duration-300 hover:border-gray-300"
                />
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold hover:from-yellow-500 hover:via-orange-600 hover:to-red-700 shadow-lg hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] transition-all duration-300 hover:scale-105 transform"
            >
              {isSignUp ? t.signUpButton : t.signInButton}
            </Button>
          </form>

          {!isSignUp && (
            <div className="mt-6 text-center">
              <a href="#" className="text-orange-600 hover:text-orange-700 transition-colors font-medium">
                {t.forgotPassword}
              </a>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              {isSignUp ? t.haveAccount : t.noAccount}{' '}
              <button 
                type="button"
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-orange-600 hover:text-orange-700 transition-colors font-semibold"
              >
                {isSignUp ? t.signInLink : t.createAccount}
              </button>
            </p>
          </div>

          {/* Social Login Icons */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center mb-4">{t.orSignInWith}</p>
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin('Google')}
                className="p-3 rounded-full border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all shadow-sm hover:shadow-lg transform hover:scale-110"
                aria-label={t.googleAria}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('GitHub')}
                className="p-3 rounded-full border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all shadow-sm hover:shadow-lg transform hover:scale-110"
                aria-label={t.githubAria}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('Apple')}
                className="p-3 rounded-full border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-50 transition-all shadow-sm hover:shadow-lg transform hover:scale-110"
                aria-label={t.appleAria}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Guest Login Button */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <button
              type="button"
              onClick={handleGuestLogin}
              className="text-orange-600 hover:text-orange-700 transition-colors font-semibold"
            >
              {t.continueAsGuest}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
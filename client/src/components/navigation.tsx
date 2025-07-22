import { useState } from 'react';
import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#accueil' },
    { key: 'nav.about', href: '#apropos' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.projects', href: '#projets' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 nav-blur">
      <div className="container-premium">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-black text-gradient-gold tracking-tight">VisualStudio360</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide group"
                >
                  {t(item.key)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="glass-effect border-white/10 hover:border-white/20 text-white hover:bg-white/10 font-semibold px-4 py-2 rounded-xl"
            >
              {language.toUpperCase()}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden glass-effect hover:bg-white/10 rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="glass-effect-strong mx-4 mt-2 rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

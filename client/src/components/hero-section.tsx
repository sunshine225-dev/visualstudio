import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative z-10 text-center container-premium">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-gradient leading-tight fade-in" data-animation-id="hero-title">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-3xl mb-12 text-gray-200 font-light leading-relaxed fade-in" data-animation-id="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in" data-animation-id="hero-buttons">
            <Button 
              onClick={scrollToServices}
              className="premium-button text-white px-10 py-5 text-lg font-semibold rounded-2xl relative z-10"
            >
              {t('hero.cta1')}
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToProjects}
              className="glass-effect border-white/20 hover:border-white/40 text-white px-10 py-5 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10"
            >
              {t('hero.cta2')}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-3xl text-white/40 drop-shadow-lg" />
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
}

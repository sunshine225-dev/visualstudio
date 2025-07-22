import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle } from 'lucide-react';

export function Interactive3DSection() {
  const { t } = useLanguage();

  const features = t('interactive3d.features.list');

  return (
    <section className="section-spacing bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 fade-in" data-animation-id="interactive-header">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient">
            {t('interactive3d.title')}
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('interactive3d.subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-in space-y-8" data-animation-id="interactive-features">
            <div className="glass-effect-strong rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-gradient-gold">{t('interactive3d.features.title')}</h3>
              <ul className="space-y-6">
                {Array.isArray(features) && features.map((feature, index) => (
                  <li key={index} className="flex items-center text-xl text-gray-300">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center lg:text-left">
              <Button asChild className="premium-button text-white px-12 py-6 text-xl font-semibold rounded-3xl inline-flex items-center">
                <a href="https://example.com/streaming" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-4" size={24} />
                  {t('interactive3d.cta')}
                </a>
              </Button>
            </div>
          </div>
          
          <div className="fade-in" data-animation-id="interactive-preview">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Interface de visite 3D interactive" 
                  className="w-full h-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-xl mb-2">Visite Interactive Disponible</p>
                        <p className="text-white/80 text-lg">Explorez en temps réel</p>
                      </div>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ExternalLink className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

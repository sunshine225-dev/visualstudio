import { useLanguage } from '@/hooks/use-language';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="section-spacing bg-gradient-to-b from-black to-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-in relative" data-animation-id="about-image">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Daniel Zady, Fondateur de VisualStudio360" 
                className="relative rounded-3xl w-full max-w-lg mx-auto shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="fade-in space-y-8" data-animation-id="about-content">
            <h2 className="text-5xl md:text-6xl font-black text-gradient leading-tight">
              {t('about.title')}
            </h2>
            
            <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
              <p className="text-gray-200">{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center glass-effect rounded-2xl p-6">
                <div className="text-4xl font-black text-gradient-gold mb-2">150+</div>
                <div className="text-base text-gray-400 font-medium">{t('about.stats.projects')}</div>
              </div>
              <div className="text-center glass-effect rounded-2xl p-6">
                <div className="text-4xl font-black text-gradient-gold mb-2">10+</div>
                <div className="text-base text-gray-400 font-medium">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center glass-effect rounded-2xl p-6">
                <div className="text-4xl font-black text-gradient-gold mb-2">98%</div>
                <div className="text-base text-gray-400 font-medium">{t('about.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

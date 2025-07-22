import { useLanguage } from '@/hooks/use-language';
import { Box, Video, ChevronsRight, Home, Armchair, Building } from 'lucide-react';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Box,
      title: t('services.rendering.title'),
      description: t('services.rendering.description'),
      features: t('services.rendering.features'),
      color: 'bg-blue-600'
    },
    {
      icon: Video,
      title: t('services.animation.title'),
      description: t('services.animation.description'),
      features: t('services.animation.features'),
      color: 'bg-emerald-600'
    },
    {
      icon: ChevronsRight,
      title: t('services.interactive.title'),
      description: t('services.interactive.description'),
      features: t('services.interactive.features'),
      color: 'bg-purple-600'
    },
    {
      icon: Home,
      title: t('services.interior.title'),
      description: t('services.interior.description'),
      features: t('services.interior.features'),
      color: 'bg-orange-600'
    },
    {
      icon: Armchair,
      title: t('services.furniture.title'),
      description: t('services.furniture.description'),
      features: t('services.furniture.features'),
      color: 'bg-red-600'
    },
    {
      icon: Building,
      title: t('services.architecture.title'),
      description: t('services.architecture.description'),
      features: t('services.architecture.features'),
      color: 'bg-indigo-600'
    }
  ];

  return (
    <section id="services" className="section-spacing bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20 fade-in" data-animation-id="services-header">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient">
            {t('services.title')}
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group glass-effect-strong rounded-3xl p-8 hover-lift fade-in relative overflow-hidden" 
                data-animation-id={`service-${index}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'bg-blue-600' ? 'from-blue-600/10 to-blue-800/5' : 
                                                                     service.color === 'bg-emerald-600' ? 'from-emerald-600/10 to-emerald-800/5' :
                                                                     service.color === 'bg-purple-600' ? 'from-purple-600/10 to-purple-800/5' :
                                                                     service.color === 'bg-orange-600' ? 'from-orange-600/10 to-orange-800/5' :
                                                                     service.color === 'bg-red-600' ? 'from-red-600/10 to-red-800/5' :
                                                                     'from-indigo-600/10 to-indigo-800/5'} rounded-3xl`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-20 h-20 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-gradient transition-all duration-300">{service.title}</h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {Array.isArray(service.features) && service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

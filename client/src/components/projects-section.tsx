import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Villa Contemporaine",
      description: "Rendu 3D • Animation • Visite virtuelle",
      alt: "Villa moderne avec architecture contemporaine"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Aménagement Résidentiel",
      description: "Design intérieur • Réalisation",
      alt: "Salon moderne luxueux avec mobilier design"
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Complexe de Bureaux",
      description: "Visualisation architecturale",
      alt: "Immeuble de bureaux moderne avec façade vitrée"
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Restaurant Gastronomique",
      description: "Conception • Réalisation complète",
      alt: "Intérieur de restaurant élégant avec éclairage sophistiqué"
    },
    {
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Mobilier Sur Mesure",
      description: "Design • Fabrication artisanale",
      alt: "Mobilier sur mesure dans atelier moderne"
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Hôtel Boutique",
      description: "Aménagement complet",
      alt: "Hall d'hôtel de luxe avec design contemporain"
    },
    {
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400",
      title: "Développement Résidentiel",
      description: "Maître d'œuvre • Visualisation complète • Animation 3D",
      alt: "Complexe résidentiel moderne avec espaces verts"
    },
    {
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Cuisine d'Exception",
      description: "Design • Réalisation",
      alt: "Cuisine moderne avec mobilier sur mesure"
    }
  ];

  return (
    <section id="projets" className="section-spacing">
      <div className="container-premium">
        <div className="text-center mb-20 fade-in" data-animation-id="projects-header">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-gradient">
            {t('projects.title')}
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>
        
        <div className="premium-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="premium-grid-item group cursor-pointer fade-in"
              data-animation-id={`project-${index}`}
            >
              <div className="relative h-full overflow-hidden rounded-3xl">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">{project.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">{project.description}</p>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20 fade-in" data-animation-id="projects-cta">
          <Button className="premium-button text-white px-12 py-6 text-xl font-semibold rounded-3xl">
            {t('projects.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}

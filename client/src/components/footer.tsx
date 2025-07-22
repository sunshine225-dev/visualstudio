import { useLanguage } from '@/hooks/use-language';
import { Linkedin, Instagram } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">VisualStudio360</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaBehance size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">{t('services.rendering.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.animation.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.interactive.title')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('services.interior.title')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>contact@visualstudio360.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} VisualStudio360. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { ServicesSection } from '@/components/services-section';
import { ProjectsSection } from '@/components/projects-section';
import { Interactive3DSection } from '@/components/interactive-3d-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Interactive3DSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

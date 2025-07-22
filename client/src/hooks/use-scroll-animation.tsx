import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in[data-animation-id]');
      const newVisibleElements = new Set(visibleElements);
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elementVisible = 150;
        const animationId = element.getAttribute('data-animation-id');
        
        if (rect.top < window.innerHeight - elementVisible && animationId) {
          newVisibleElements.add(animationId);
          element.classList.add('visible');
        }
      });
      
      setVisibleElements(newVisibleElements);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleElements]);

  return { visibleElements };
}

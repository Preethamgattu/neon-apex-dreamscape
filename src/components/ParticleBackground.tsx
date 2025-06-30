
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
      
      // Random colors for particles
      const colors = ['#00d4ff', '#9d4edd', '#39ff14'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 16000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 300);

    // Initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="particles" />;
};

export default ParticleBackground;

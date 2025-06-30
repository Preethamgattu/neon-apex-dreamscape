
import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Salesforce Developer';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block p-8 neon-border holographic rounded-lg mb-8 animate-float">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-glow"></div>
            <div className="font-orbitron text-sm tracking-widest text-primary/80 mb-2">
              FUTURE_TECH_SPECIALIST
            </div>
          </div>
          
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-neon">
            ALEX CHEN
          </h1>
          
          <div className="font-rajdhani text-2xl md:text-4xl font-light mb-8 text-foreground/90 h-12">
            <span className="glitch" data-text={typedText}>
              {typedText}
            </span>
            <span className="animate-pulse text-primary">|</span>
          </div>
          
          <p className="font-rajdhani text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Architect of digital transformation with <span className="text-primary font-medium">3+ years</span> of experience 
            crafting scalable Salesforce solutions. Specialized in Apex, Lightning Components, and enterprise integrations 
            that drive <span className="text-accent font-medium">measurable business impact</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 font-rajdhani font-semibold text-lg tracking-wider bg-gradient-to-r from-primary to-secondary text-background rounded-lg hover:scale-105 transition-all duration-300 animate-glow overflow-hidden"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-rajdhani font-semibold text-lg tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-lg transition-all duration-300 neon-border"
            >
              HIRE ME
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center">
            <span className="text-white text-4xl font-semibold">AC</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Alex Chen
          </h1>
          
          <div className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground min-h-[3rem] flex items-center justify-center">
            <span className="font-mono">{typedText}</span>
            <span className="animate-pulse text-primary ml-1">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Experienced Salesforce Developer with <span className="text-primary font-semibold">3+ years</span> of expertise 
            in crafting scalable enterprise solutions. Specialized in Apex, Lightning Components, and integrations 
            that drive <span className="text-primary font-semibold">measurable business impact</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg hover-lift"
            >
              View Projects
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

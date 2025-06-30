
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Apex', level: 90, icon: '⚡', description: 'Advanced server-side logic & triggers' },
    { name: 'Lightning Components', level: 85, icon: '🌩️', description: 'Modern UI framework expertise' },
    { name: 'Visualforce', level: 80, icon: '👁️', description: 'Custom page development' },
    { name: 'SOQL/SOSL', level: 95, icon: '🔍', description: 'Database query optimization' },
    { name: 'Integration APIs', level: 75, icon: '🔗', description: 'REST/SOAP web services' },
    { name: 'Process Builder', level: 88, icon: '⚙️', description: 'Workflow automation' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            TECHNICAL MATRIX
          </h2>
          <p className="font-rajdhani text-xl text-foreground/70 max-w-2xl mx-auto">
            Core competencies in Salesforce ecosystem with proven track record of delivering enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`neon-border holographic p-6 rounded-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4 animate-float">{skill.icon}</span>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-primary">
                    {skill.name}
                  </h3>
                  <p className="font-rajdhani text-sm text-foreground/60">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-rajdhani text-sm text-foreground/80">Proficiency</span>
                  <span className="font-orbitron text-sm text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out relative ${
                      isVisible ? 'animate-glow' : ''
                    }`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide-in-right"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block neon-border holographic p-8 rounded-lg">
            <h3 className="font-orbitron text-2xl font-bold text-primary mb-4">EXPERIENCE METRICS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-accent mb-2 animate-pulse-neon">3+</div>
                <div className="font-rajdhani text-sm text-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-secondary mb-2 animate-pulse-neon">50+</div>
                <div className="font-rajdhani text-sm text-foreground/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-primary mb-2 animate-pulse-neon">99%</div>
                <div className="font-rajdhani text-sm text-foreground/70">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


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
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Technical Skills
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core competencies in Salesforce ecosystem with proven track record of delivering enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`professional-card hover-lift ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-4">{skill.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Proficiency</span>
                  <span className="font-mono text-sm text-primary font-semibold">{skill.level}%</span>
                </div>
                
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="professional-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Experience Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

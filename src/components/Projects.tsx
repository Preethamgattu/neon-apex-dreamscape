
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Sales Automation',
      description: 'Built comprehensive sales pipeline automation reducing manual work by 60% and increasing conversion rates by 35%.',
      tech: ['Apex', 'Lightning Components', 'Process Builder', 'Integration'],
      impact: ['60% reduction in manual tasks', '35% increase in conversion', '$2M additional revenue'],
      demoUrl: '#',
      codeUrl: '#',
      image: 'photo-1461749280684-dccba630e2f6'
    },
    {
      id: 2,
      title: 'Customer Service Portal',
      description: 'Developed self-service portal with real-time case tracking, reducing support tickets by 45% and improving satisfaction scores.',
      tech: ['Visualforce', 'Apex', 'Lightning Experience', 'Communities'],
      impact: ['45% reduction in tickets', '4.7/5 satisfaction score', '50% faster resolution'],
      demoUrl: '#',
      codeUrl: '#',
      image: 'photo-1487058792275-0ad4aaf24ca7'
    },
    {
      id: 3,
      title: 'Multi-System Integration Hub',
      description: 'Architected real-time data synchronization between Salesforce, ERP, and marketing platforms serving 10K+ users.',
      tech: ['REST APIs', 'SOAP', 'Apex Callouts', 'Platform Events'],
      impact: ['Real-time sync for 10K users', '99.9% uptime achieved', '80% faster data processing'],
      demoUrl: '#',
      codeUrl: '#',
      image: 'photo-1518770660439-4636190af475'
    },
    {
      id: 4,
      title: 'Advanced Analytics Dashboard',
      description: 'Created executive dashboard with predictive analytics and custom KPIs, enabling data-driven decision making.',
      tech: ['Lightning Components', 'Apex', 'Einstein Analytics', 'Custom Objects'],
      impact: ['25% improvement in forecasting', 'Real-time executive insights', '90% adoption rate'],
      demoUrl: '#',
      codeUrl: '#',
      image: 'photo-1531297484001-80022131f5a1'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <div className="section-divider"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of enterprise-grade Salesforce solutions with measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`professional-card hover-lift animate-fade-in-up bg-white`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden mb-6">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=300&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary font-mono font-semibold text-sm">
                    {project.id}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Business Impact:</h4>
                <ul className="space-y-1">
                  {project.impact.map((impact, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {impact}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200">
                  View Demo
                </button>
                <button className="px-4 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  View Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

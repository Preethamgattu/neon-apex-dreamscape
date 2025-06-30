
const Certifications = () => {
  const certifications = [
    {
      title: 'Platform Developer I',
      issuer: 'Salesforce',
      date: '2023',
      credentialId: 'SF-PDI-2023-AC789',
      status: 'Active',
      icon: '🏆'
    },
    {
      title: 'Administrator',
      issuer: 'Salesforce',
      date: '2022',
      credentialId: 'SF-ADM-2022-AC456',
      status: 'Active',
      icon: '⚙️'
    },
    {
      title: 'Advanced Administrator',
      issuer: 'Salesforce',
      date: '2023',
      credentialId: 'SF-AADM-2023-AC123',
      status: 'Active',
      icon: '🔧'
    },
    {
      title: 'App Builder',
      issuer: 'Salesforce',
      date: '2022',
      credentialId: 'SF-AB-2022-AC321',
      status: 'Active',
      icon: '🏗️'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            DIGITAL CREDENTIALS
          </h2>
          <p className="font-rajdhani text-xl text-foreground/70 max-w-2xl mx-auto">
            Official Salesforce certifications validating expertise and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.credentialId}
              className={`neon-border holographic p-6 rounded-lg text-center hover:scale-105 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 animate-float">
                {cert.icon}
              </div>
              
              <h3 className="font-orbitron text-lg font-bold text-primary mb-2">
                {cert.title}
              </h3>
              
              <p className="font-rajdhani text-foreground/80 mb-2">
                {cert.issuer}
              </p>
              
              <p className="font-rajdhani text-sm text-foreground/60 mb-3">
                Issued: {cert.date}
              </p>
              
              <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full">
                <span className="font-rajdhani text-xs text-accent font-semibold">
                  {cert.status}
                </span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-primary/20">
                <p className="font-rajdhani text-xs text-foreground/50 font-mono">
                  ID: {cert.credentialId}
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block neon-border holographic p-6 rounded-lg">
            <h3 className="font-orbitron text-xl font-bold text-primary mb-4">VERIFICATION</h3>
            <p className="font-rajdhani text-foreground/70 mb-4">
              All certifications can be verified through Salesforce Trailhead
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background font-rajdhani font-semibold rounded-lg hover:scale-105 transition-all duration-300 animate-glow">
              VERIFY CREDENTIALS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

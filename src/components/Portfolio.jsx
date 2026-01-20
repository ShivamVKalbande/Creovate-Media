export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping solution with payment integration',
      category: 'Web Development',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure financial management application',
      category: 'App Development',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'SaaS Dashboard',
      description: 'Real-time analytics and management platform',
      category: 'Web Development',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Fitness Tracker App',
      description: 'Health and wellness tracking application',
      category: 'App Development',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Restaurant Management',
      description: 'Food delivery and ordering platform',
      category: 'Full Stack',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'AI Content Generator',
      description: 'Intelligent writing tool with machine learning',
      category: 'Web Development',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
            Our Work
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
              Speaks for Itself
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects and see the quality of work we deliver
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div
                className="h-64 rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/90 mb-3">{project.description}</p>
                  <span className="inline-block w-fit px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

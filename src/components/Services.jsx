export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Custom websites that are beautiful, fast, and optimized for conversions",
      features: ["Responsive Design", "SEO Optimized", "High Performance"],
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform apps that users love",
      features: ["iOS & Android", "User-Centric", "Scalable"],
      icon: "📱",
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Complete online store setup and optimization for maximum sales",
      features: ["Amazon Listings", "Flipkart Listings", "Payment Integration"],
      icon: "🛒",
    },
    {
      title: "Social Media Management",
      description:
        "Strategic content and community management to grow your brand",
      features: ["Content Strategy", "Community Management", "Analytics"],
      icon: "📱",
    },
    {
      title: "Performance Marketing",
      description: "Data-driven campaigns that deliver measurable ROI",
      features: ["Google Ads", "Facebook Ads", "Conversion Optimization"],
      icon: "📊",
    },
    {
      title: "Graphic & Video Design",
      description: "Creative assets that make your brand stand out",
      features: ["Video Editing", "Graphic Design", "Animation"],
      icon: "🎨",
    },
    {
      title: "End-to-End Website Tracking",
      description:
        "Complete tracking setup to monitor user behavior, conversions, and performance across your website.",
      features: ["GA4 Setup", "Conversion Tracking", "User Behavior Analysis"],
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            What We
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2 leading-tight mb-4">
              Bring to the Table
            </span>
          </h2>
        </div> */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-wider text-blue-600 bg-blue-50 rounded-full">
            OUR SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            What We Bring
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">
              to the Table
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to build, grow, and scale your digital presence
            — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

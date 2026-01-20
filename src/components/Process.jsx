export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We understand your business goals and create a strategic plan to achieve them'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Beautiful, intuitive designs that resonate with your target audience'
    },
    {
      step: '03',
      title: 'Development & Build',
      description: 'Clean, scalable code built with the latest technologies and best practices'
    },
    {
      step: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing ensures everything works perfectly across all devices'
    },
    {
      step: '05',
      title: 'Launch & Deploy',
      description: 'Smooth deployment to production with zero downtime'
    },
    {
      step: '06',
      title: 'Support & Growth',
      description: 'Ongoing support and optimization to ensure continuous success'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
            Our
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
              Proven Process
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={i} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

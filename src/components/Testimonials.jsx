export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'E-Shop India',
      text: 'Creovate Media transformed our online presence. Our sales increased by 300% in just 6 months!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'FitLife App',
      text: 'The mobile app they built is beautiful, fast, and our users love it. Highly professional team.',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      company: 'TechStartup',
      text: 'From concept to launch, they managed everything perfectly. Great communication and delivery.',
      rating: 5
    },
    {
      name: 'Ananya Singh',
      company: 'Digital Marketing Co',
      text: 'Best web development team I have worked with. They understand business needs perfectly.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

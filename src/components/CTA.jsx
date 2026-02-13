export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:shadow-lg transition-all hover:scale-105">
                Start Your Project
              </button>
              <button className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                Schedule a Call
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-blue-100 text-sm">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-blue-100 text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100 text-sm">Support</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

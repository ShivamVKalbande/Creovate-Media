export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            We Build Digital
            <span className="block mt-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Experiences That Convert
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From breathtaking websites to powerful applications, we create
            digital solutions that engage users and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* {[
            { number: '500+', label: 'Websites Built' },
            { number: '200+', label: 'Clients Trust Us' },
            { number: '50+', label: 'Team Experts' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))} */}
        </div>
      </div>
      <div className="mt-20 flex justify-center">
  <div className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
</div>

    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Creovate
            </h3>
            <p className="text-gray-400">
              Transforming businesses through innovative digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">E-Commerce</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 creovatemedia03@gmail.com</p>
              <p>📞 +91 7620274330</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors">f</a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors">in</a>
                <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition-colors">tw</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Creovate Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

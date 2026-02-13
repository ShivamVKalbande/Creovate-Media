import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Creovate
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </button>
            {/* <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </button> */}
            <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Process
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all hover:scale-105 font-medium">
              Get Started
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('process')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium">
              Process
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-md font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

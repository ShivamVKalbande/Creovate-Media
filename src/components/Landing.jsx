import { useEffect, useRef } from 'react';

export default function Landing({ onExplore }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener('resize', setSize);

    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, index) => {
        particles.slice(index + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', setSize);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="animate-fade-in-down mb-6">
          <div className="inline-block">
            <span className="text-blue-300 text-lg font-semibold">Welcome to Creovate Media</span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
          Your Digital
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Revolution Starts Here
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          We craft stunning websites, mobile apps, and digital experiences that transform your vision into reality and drive real business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
          <button
            onClick={onExplore}
            className="group relative px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="px-10 py-4 text-lg font-bold text-white border-2 border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            Schedule Call
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 text-center animate-fade-in-up animation-delay-800">
          {/* <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-blue-200">Projects Delivered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="text-blue-300 text-sm mb-2">Click Explore to Continue</div>
        <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

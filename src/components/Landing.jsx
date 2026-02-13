// import { useEffect, useRef } from 'react';

// export default function Landing({ onExplore }) {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     const setSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     setSize();
//     window.addEventListener('resize', setSize);

//     const particles = [];
//     const particleCount = 50;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//         this.opacity = Math.random() * 0.5 + 0.2;
//       }

//       draw() {
//         ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0) this.x = canvas.width;
//         if (this.x > canvas.width) this.x = 0;
//         if (this.y < 0) this.y = canvas.height;
//         if (this.y > canvas.height) this.y = 0;
//       }
//     }

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       particles.forEach((p1, index) => {
//         particles.slice(index + 1).forEach(p2 => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 150)})`;
//             ctx.lineWidth = 1;
//             ctx.beginPath();
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });
//       });

//       requestAnimationFrame(animate);
//     };

//     animate();

//     return () => window.removeEventListener('resize', setSize);
//   }, []);

//   return (
//     <div ref={containerRef} className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-800 to-slate-900 overflow-hidden">
//       <canvas ref={canvasRef} className="absolute inset-0" />

//       <div className="relative z-10 text-center px-4 max-w-4xl">
//         <div className="animate-fade-in-down mb-6">
//           <div className="inline-block">
//             <span className="text-blue-300 text-lg font-semibold">Welcome to Creovate Media</span>
//           </div>
//         </div>

//         <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
//           Your Digital
//           <br />
//           <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
//             Revolution Starts Here
//           </span>
//         </h1>

//         <p className="text-xl sm:text-2xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
//           We craft stunning websites, mobile apps, and digital experiences that transform your vision into reality and drive real business growth.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
//           <button
//             onClick={onExplore}
//             className="group relative px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               Explore Services
//               <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>

//           <button className="px-10 py-4 text-lg font-bold text-white border-2 border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
//             Schedule Call
//           </button>
//         </div>

//         <div className="mt-20 grid grid-cols-3 gap-8 text-center animate-fade-in-up animation-delay-800">
//           {/* <div>
//             <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
//             <div className="text-blue-200">Projects Delivered</div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
//             <div className="text-blue-200">Happy Clients</div>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
//             <div className="text-blue-200">Years Experience</div>
//           </div> */}
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
//         <div className="text-blue-300 text-sm mb-2">Click Explore to Continue</div>
//         <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from 'react';

// export default function LandingOption2({ onExplore }) {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Animated cursor follow effect */}
//       <div 
//         className="fixed w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl pointer-events-none transition-all duration-700 ease-out"
//         style={{
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//         }}
//       />

//       {/* Main Container */}
//       <div className="relative min-h-screen flex flex-col lg:flex-row">
        
//         {/* Left Side - Content */}
//         <div className="flex-1 flex items-center justify-center p-8 lg:p-16 relative z-10">
//           <div className="max-w-2xl">
            
//             {/* Logo */}
//             <div className="mb-8">
//               <div className="text-3xl font-black tracking-tight">
//                 <span className="text-gray-900">Creo</span>
//                 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">vate</span>
//               </div>
//               <div className="text-sm text-gray-500 mt-1">Media & Technology</div>
//             </div>

//             {/* Main Content */}
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                 <span className="text-xs font-semibold text-blue-700">AVAILABLE FOR NEW PROJECTS</span>
//               </div>

//               <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
//                 Digital
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
//                   Solutions
//                 </span>
//                 <br />
//                 That Scale
//               </h1>

//               <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
//                 We create powerful web applications, mobile experiences, and marketing campaigns that help businesses grow exponentially.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <button
//                   onClick={onExplore}
//                   className="group px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105"
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     Start Your Project
//                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </span>
//                 </button>
                
//                 <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all">
//                   View Work
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="pt-8 flex items-center gap-6">
//                 <div className="flex -space-x-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
//                   <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-white"></div>
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
//                   <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full border-2 border-white flex items-center justify-center">
//                     <span className="text-xs text-white font-bold">+200</span>
//                   </div>
//                 </div>
//                 <div className="text-sm">
//                   <div className="font-semibold text-gray-900">Trusted by 200+ companies</div>
//                   <div className="text-gray-500">across 15+ countries</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Visual */}
//         <div className="flex-1 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-8 lg:p-16 relative">
          
//           {/* Decorative Elements */}
//           <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
//           <div className="absolute bottom-20 left-10 w-40 h-40 bg-cyan-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

//           {/* Main Visual Grid */}
//           <div className="relative w-full max-w-md">
//             <div className="grid grid-cols-2 gap-4">
              
//               {/* Card 1 */}
//               <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-1">Web Dev</h3>
//                 <p className="text-xs text-gray-500">Modern & Fast</p>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer mt-8">
//                 <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-1">Mobile Apps</h3>
//                 <p className="text-xs text-gray-500">iOS & Android</p>
//               </div>

//               {/* Card 3 */}
//               <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
//                 <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                   </svg>
//                 </div>
//                 <h3 className="font-bold text-gray-900 mb-1">Marketing</h3>
//                 <p className="text-xs text-gray-500">Growth Focus</p>
//               </div>

//               {/* Stats Card */}
//               <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-3xl shadow-xl text-white mt-8">
//                 <div className="text-3xl font-black mb-1">500+</div>
//                 <p className="text-xs text-gray-300">Completed Projects</p>
//                 <div className="mt-3 flex gap-1">
//                   <div className="flex-1 h-1 bg-blue-500 rounded-full"></div>
//                   <div className="flex-1 h-1 bg-cyan-500 rounded-full"></div>
//                   <div className="flex-1 h-1 bg-purple-500 rounded-full"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg rotate-12 hover:rotate-0 transition-transform cursor-pointer">
//               ⚡ Fast Delivery
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-gradient {
//           animation: gradient 3s ease infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

import { useEffect, useState, useRef } from 'react';
export default function Landing({ onExplore,  onPortfolioClick  }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Subtle animated background cursor effect */}
      <div 
        className="fixed w-[500px] h-[500px] bg-blue-400 rounded-full opacity-[0.08] blur-3xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Gradient Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              
              {/* Logo */}
              <div className="mb-8">
                <div className="text-3xl font-black tracking-tight">
                  <span className="text-gray-900">Creo</span>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">vate</span>
                </div>
                <div className="text-sm text-gray-500 font-medium mt-1">Media & Technology</div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-sm font-semibold text-blue-900">Available for New Projects</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
                Digital
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Solutions
                </span>
                <br />
                That Scale
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg">
                We create powerful web applications, mobile experiences, and marketing campaigns that help businesses grow exponentially.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                 onClick={onExplore}
                  className="group px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Services
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
               {/* <button   onClick={onPortfolioClick} className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-bold text-lg rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all">
                  View Portfolio
                </button> */}
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex -space-x-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white shadow-md"></div>
                  <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full border-2 border-white shadow-md"></div>
                  <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
                  <div className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                    <span className="text-xs text-white font-bold">200+</span>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Trusted by 200+ companies</div>
                  <div className="text-gray-500">Across 15+ countries</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Cards */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                
                {/* Decorative Background Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-300 rounded-full opacity-20 blur-3xl"></div>

                {/* Cards Grid */}
                <div className="relative grid grid-cols-2 gap-5">
                  
                  {/* Card 1 - Web Development */}
                  <div className="bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Web Development</h3>
                    <p className="text-sm text-gray-500">Modern & Scalable</p>
                  </div>

                  {/* Card 2 - Mobile Apps */}
                  <div className="bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer mt-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Mobile Apps</h3>
                    <p className="text-sm text-gray-500">iOS & Android</p>
                  </div>

                  {/* Card 3 - Digital Marketing */}
                  <div className="bg-white rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Marketing</h3>
                    <p className="text-sm text-gray-500">Growth Focused</p>
                  </div>

                  {/* Card 4 - Stats Card */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-7 shadow-xl text-white mt-10">
                    <div className="text-4xl font-black mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      500+
                    </div>
                    <p className="text-sm text-gray-300 mb-3">Projects Delivered</p>
                    <div className="flex gap-1.5">
                      <div className="flex-1 h-1.5 bg-blue-500 rounded-full"></div>
                      <div className="flex-1 h-1.5 bg-cyan-500 rounded-full"></div>
                      <div className="flex-1 h-1.5 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-xl rotate-12 hover:rotate-0 transition-transform cursor-pointer z-10">
                  ⚡ Fast Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="text-gray-400 text-sm font-medium mb-2">Scroll to explore</div>
        <svg className="w-6 h-6 mx-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}

      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
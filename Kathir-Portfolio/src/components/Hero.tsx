import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Code, Palette } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div
        className={`flex flex-col md:flex-row items-center max-w-5xl mx-auto transition-all duration-1000 transform relative z-10 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* User Image with enhanced background blend and animation */}
        <div className="mb-6 sm:mb-8 md:mb-0 md:mr-16 flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <div className="relative group">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 blur-3xl opacity-60 z-0 animate-pulse group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#232946]/50 via-[#121629]/50 to-[#0A0A0A]/50 blur-2xl opacity-80 z-0" style={{filter: 'blur(32px)'}}></div>
            
            {/* Floating elements around image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-500/20 rounded-full blur-sm animate-bounce delay-1000"></div>
            
            <img
              src="/user.png"
              alt="User Avatar"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white/20 bg-transparent relative z-10 stable-glow group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Skill badges floating around */}
            <div className="absolute -top-2 -right-2 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 group-hover:scale-110 transition-transform duration-300">
              <Code className="w-4 h-4 text-blue-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 group-hover:scale-110 transition-transform duration-300 delay-200">
              <Palette className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Enhanced Text Content */}
        <div className="flex-1 text-center md:text-left px-2 sm:px-0 relative">
          {/* Floating sparkle effect */}
          <div className="absolute top-0 right-0 md:right-10 opacity-60 animate-pulse">
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider">Design • Development • Strategy</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                <span className="block text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Kathiresan P
                </span>
                <span className="block text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-2">
                  Full-Stack Developer & UI/UX Designer
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Crafting efficient digital solutions through code and human-centered design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center md:justify-start">
              <button
                onClick={scrollToProjects}
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 border border-white/20 hover:border-white/40 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a
                href="#contact"
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="group p-3 sm:p-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10 shadow-lg hover:shadow-xl"
          aria-label="Scroll to About"
        >
          <ArrowDown size={20} className="text-white sm:w-6 sm:h-6 group-hover:animate-bounce transition-transform duration-300" />
        </button>
      </div>

      {/* Custom animation styles */}
      <style>{`
        .stable-glow {
          box-shadow: 
            0 0 48px 8px rgba(80, 120, 255, 0.35), 
            0 0 0 8px rgba(80, 120, 255, 0.10),
            0 0 100px 20px rgba(147, 51, 234, 0.2);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

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
    <section className="min-h-screen flex flex-col justify-center relative px-4 md:px-6">
      <div
        className={`flex flex-col md:flex-row items-center max-w-4xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* User Image with background blend and animation */}
        <div className="mb-8 md:mb-0 md:mr-16 flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#232946]/50 via-[#121629]/50 to-[#0A0A0A]/50 blur-2xl opacity-80 z-0" style={{filter: 'blur(32px)'}}></div>
            <img
              src="/user.png"
              alt="User Avatar"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white/10 bg-transparent relative z-10 stable-glow"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-gray-300 text-sm uppercase tracking-wider mb-4 md:mb-6 block">Design • Development • Strategy</span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
            <span className="block text-white">Kathiresan P</span>
            <span className="block text-gray-300">Full-Stack Developer & UI/UX Designer</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8 md:mb-12">
            Crafting efficient digital solutions through code and human-centered design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              View Projects
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <button
          onClick={scrollToAbout}
          className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors backdrop-blur-sm"
          aria-label="Scroll to About"
        >
          <ArrowDown size={20} className="text-white" />
        </button>
      </div>
      {/* Custom animation styles */}
      <style>{`
        .stable-glow {
          box-shadow: 0 0 48px 8px rgba(80, 120, 255, 0.35), 0 0 0 8px rgba(80, 120, 255, 0.10);
        }
      `}</style>
    </section>
  );
};

export default Hero;
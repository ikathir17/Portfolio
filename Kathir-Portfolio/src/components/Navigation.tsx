import React from 'react';

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={scrollToTop} className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="K Logo" className="w-full h-full object-contain" />
          </button>
          <div className="flex items-center space-x-6">
            <button 
              onClick={scrollToTop}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

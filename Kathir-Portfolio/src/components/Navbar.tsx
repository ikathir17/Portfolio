import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-lg md:text-xl font-semibold tracking-tighter text-white"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <img src="/logo.png" alt="K Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={scrollToTop}
            className="text-sm uppercase tracking-wider text-white hover:text-white/90 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm uppercase tracking-wider text-white hover:text-white/90 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm uppercase tracking-wider text-white hover:text-white/90 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm uppercase tracking-wider text-white hover:text-white/90 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm uppercase tracking-wider text-white hover:text-white/90 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -mr-2 text-white hover:text-white/90 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-24">
          <nav className="container mx-auto px-6 flex flex-col">
            <button
              onClick={scrollToTop}
              className="py-6 text-2xl capitalize tracking-tight text-white hover:text-white/90 transition-colors border-b border-white/10 text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="py-6 text-2xl capitalize tracking-tight text-white hover:text-white/90 transition-colors border-b border-white/10 text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="py-6 text-2xl capitalize tracking-tight text-white hover:text-white/90 transition-colors border-b border-white/10 text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="py-6 text-2xl capitalize tracking-tight text-white hover:text-white/90 transition-colors border-b border-white/10 text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="py-6 text-2xl capitalize tracking-tight text-white hover:text-white/90 transition-colors border-b border-white/10 text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
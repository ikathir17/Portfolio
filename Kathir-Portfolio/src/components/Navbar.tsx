import { useState, useEffect } from 'react';
import { Menu, X, Home, User, FolderOpen, Settings, Mail, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      let currentSection = 'home';
      
      // Check if we're at the very top
      if (window.scrollY < 100) {
        currentSection = 'home';
      } else {
        // Find the section that's currently in view
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i]);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const elementBottom = elementTop + rect.height;
            
            // Check if the section is in the viewport
            if (window.scrollY >= elementTop - 200 && window.scrollY < elementBottom - 100) {
              currentSection = sections[i];
              break;
            }
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      // Reset navigating state after scroll
      if (isNavigating) {
        setIsNavigating(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection, isNavigating]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    setIsNavigating(true);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    setIsOpen(false);
    setActiveSection('home');
    setIsNavigating(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home, action: scrollToTop },
    { id: 'about', label: 'About', icon: User, action: () => scrollToSection('about') },
    { id: 'projects', label: 'Projects', icon: FolderOpen, action: () => scrollToSection('projects') },
    { id: 'services', label: 'Services', icon: Settings, action: () => scrollToSection('services') },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => scrollToSection('contact') },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled && !isNavigating
          ? 'bg-black border-b border-white/10 shadow-lg shadow-black/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center py-4 sm:py-6">
        <a 
          href="#" 
          className="text-lg md:text-xl font-semibold tracking-tighter text-white group"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="K Logo" className="h-6 sm:h-8 w-auto group-hover:scale-110 transition-transform duration-300" />
            <Sparkles className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                activeSection === item.id 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-white/90'
              }`}
            >
              <span>{item.label}</span>
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative p-3 -mr-2 text-white hover:text-white/90 transition-all duration-300 group"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute top-0 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}></span>
            <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`absolute top-5 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}></span>
          </div>
          <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-80 h-full bg-black border-l border-white/20 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="K Logo" className="h-8 w-auto" />
              <span className="text-white font-semibold text-lg">Menu</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-white/90 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full group flex items-center gap-4 p-4 text-left transition-all duration-300 rounded-xl border border-transparent ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                      : 'text-white hover:text-white/90 hover:bg-white/5 hover:border-white/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500/20'
                      : 'bg-white/10 group-hover:bg-blue-500/20'
                  }`}>
                    <item.icon size={20} className={activeSection === item.id ? 'text-blue-400' : 'text-blue-400'} />
                  </div>
                  <span className="text-lg font-medium capitalize">{item.label}</span>
                  <div className={`ml-auto transition-opacity duration-300 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                </button>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <div className="text-center text-white/60 text-sm">
              <p>Navigate with ease</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-blue-400">Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
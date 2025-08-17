import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="py-4 sm:py-6 px-4 sm:px-6 md:px-8 border-t border-white/10 backdrop-blur-sm bg-gradient-to-t from-black/20 to-transparent">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Brand Section */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/logo.png" alt="K Logo" className="h-6 sm:h-8 w-auto" />
              <h3 className="text-sm sm:text-lg font-semibold text-white">Kathiresan P</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Full-Stack Developer & UI/UX Designer crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="#about" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-xs sm:text-sm text-gray-300">Frontend Development</li>
              <li className="text-xs sm:text-sm text-gray-300">UI/UX Design</li>
              <li className="text-xs sm:text-sm text-gray-300">Full-Stack Solutions</li>
              <li className="text-xs sm:text-sm text-gray-300">Technical Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="mailto:kathiresanp80152@gmail.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-blue-400" />
                <span className="truncate">kathiresanp80152@gmail.com</span>
              </a>
              <a 
                href="tel:+918754780152"
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-green-400" />
                <span>+91 87547 80152</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href="https://github.com/ikathir17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
              aria-label="GitHub"
            >
              <Github size={14} className="sm:w-4 sm:h-4 text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kathiresan-p-1703k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} className="sm:w-4 sm:h-4 text-white" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400">
            <span>© {currentYear} Kathiresan P. Made with</span>
            <Heart size={10} className="sm:w-3 sm:h-3 text-red-400 fill-current" />
            <span>All rights reserved.</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-1.5 sm:p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
            aria-label="Back to top"
          >
            <ArrowUp size={14} className="sm:w-4 sm:h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
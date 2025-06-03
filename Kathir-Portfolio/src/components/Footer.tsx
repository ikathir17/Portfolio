import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 md:px-6 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/ikathir17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
              aria-label="GitHub"
            >
              <Github size={16} className="text-white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kathiresan-p-1703k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} className="text-white" />
            </a>
          </div>
          
          <div className="text-xs text-gray-400">
            © {currentYear} Kathiresan P. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
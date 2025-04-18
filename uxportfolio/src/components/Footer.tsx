import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-warmGray-800 text-warmGray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Cynthia Liu. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:contact@example.com" 
              className="text-warmGray-300 hover:text-warmOrange-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warmGray-300 hover:text-warmOrange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-warmGray-300 hover:text-warmOrange-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
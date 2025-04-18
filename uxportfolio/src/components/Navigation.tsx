import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full bg-warmGray-50/90 backdrop-blur-sm z-50 border-b border-warmGray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl font-medium text-warmGray-800">
          Cynthia Liu
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#about" className="text-warmGray-600 hover:text-warmOrange-600 transition-colors">About</a>
          <a href="/#ux-projects" className="text-warmGray-600 hover:text-warmOrange-600 transition-colors">UX Projects</a>
          <a href="/#ai-projects" className="text-warmGray-600 hover:text-warmOrange-600 transition-colors">AI-Coding Projects</a>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-warmGray-50 px-6 py-4 border-t border-warmGray-200">
          <div className="flex flex-col space-y-4">
            <a 
              href="/#about" 
              className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/#ux-projects" 
              className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              UX Projects
            </a>
            <a 
              href="/#ai-projects" 
              className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              AI-Coding Projects
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
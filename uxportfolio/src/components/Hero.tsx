import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-warmGray-800 mb-6">
            Product Designer
          </h1>
          <p className="text-warmGray-600 text-lg md:text-xl mb-10 leading-relaxed">
            A problem solver who loves to craft real solutions-through design and AI.
          </p>
          <a 
            href="#ux-projects" 
            className="inline-flex items-center px-6 py-3 bg-warmOrange-600 text-white rounded-md hover:bg-warmOrange-700 transition-colors"
          >
            View My Work <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
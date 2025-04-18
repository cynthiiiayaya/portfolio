import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warmGray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-6">
              About Me
            </h2>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
              alt="Portrait" 
              className="rounded-md shadow-md w-full max-w-sm"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-warmGray-700 mb-6 leading-relaxed">
              Hi, I'm Cynthia Liu, a UX designer and AI developer passionate about creating meaningful digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-warmGray-700 mb-8 leading-relaxed">
              My design philosophy centers on empathy and inclusivity. I believe that great design should be accessible to everyone and solve real human problems. Through careful research and iterative design, I strive to create products that are both beautiful and useful.
            </p>
            <div className="mb-8">
              <h3 className="font-serif text-xl font-medium text-warmGray-800 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["UX Research", "UI Design", "Wireframing", "Prototyping", "Usability Testing", 
                  "Information Architecture", "Interaction Design", "Python", "React", "AI Integration"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-warmGray-200 text-warmGray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-warmGray-800 mb-4">Contact</h3>
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:contact@example.com" 
                  className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-warmGray-600 hover:text-warmOrange-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const AIProjects = () => {
  const aiProjects = projectsData.filter(project => project.category === 'ai');

  return (
    <section id="ai-projects" className="py-20 bg-warmGray-100">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-4 text-center">
          AI-Coding Projects
        </h2>
        <p className="text-warmGray-600 text-center mb-12 max-w-2xl mx-auto">
          Exploring the intersection of AI and design through innovative coding projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {aiProjects.map(project => (
            <ProjectCard key={project.id} project={project} category="ai" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects;
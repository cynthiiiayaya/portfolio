import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projects';

const UXProjects = () => {
  const uxProjects = projectsData.filter(project => project.category === 'ux');

  return (
    <section id="ux-projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-3xl font-medium text-warmGray-800 mb-4 text-center">
          UX Projects
        </h2>
        <p className="text-warmGray-600 text-center mb-12 max-w-2xl mx-auto">
          A collection of my UX design work, showcasing user-centered approaches to solving complex problems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uxProjects.map(project => (
            <ProjectCard key={project.id} project={project} category="ux" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXProjects;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../utils/types';

interface ProjectCardProps {
  project: Project;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-warmGray-100 text-warmGray-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-xl font-medium text-warmGray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-warmGray-600 mb-4">
          {project.description}
        </p>
        <Link
          to={`/case-study/${project.id}`}
          className="inline-flex items-center text-warmOrange-600 hover:text-warmOrange-700 transition-colors"
        >
          View Case Study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
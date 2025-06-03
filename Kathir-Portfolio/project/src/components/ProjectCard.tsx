// Removed unused React import
// import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-[#111] rounded-xl overflow-hidden transition-all duration-500 hover:transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="h-64 md:h-72 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]/90"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-white">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        {/* View Project Link */}
        {project.link && (
          <a 
            href={project.link} 
            className="inline-flex items-center text-sm text-white font-medium group/link"
          >
            View Case Study
            <ArrowUpRight size={16} className="ml-1 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
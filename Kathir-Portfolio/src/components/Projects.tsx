// Removed unused React import
// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Project, projects } from '../data/projects';
import ProjectDetailsModal from './ProjectDetailsModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  return (
    <section id="projects" className="py-16 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">Projects Showcase</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            Innovative solutions blending technical execution with user-centric design
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openProjectDetails(project)}
              className="group bg-white/5 backdrop-blur-sm rounded-lg p-5 md:p-6 hover:bg-white/10 transition-all duration-200 relative overflow-hidden border border-white/10 hover:border-white/20 w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              
              <div className="grid md:grid-cols-12 gap-6 items-center relative">
                <div className={`md:col-span-8 space-y-3 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <h3 className="text-xl md:text-2xl font-medium text-white line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] px-1.5 py-0.5 text-white/60">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center mt-2">
                    <div className="flex gap-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="group">
                          <div className="text-lg font-medium text-white">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={`h-full ${index % 2 === 0 ? 'md:order-last' : ''} md:col-span-4`}>
                  <div className="aspect-[16/9] rounded overflow-hidden bg-white/5 backdrop-blur-sm group-hover:shadow transition-all duration-200 border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal
            isOpen={!!selectedProject}
            onClose={closeProjectDetails}
            project={{
              ...selectedProject,
              images: selectedProject.images || [selectedProject.image],
              technologies: selectedProject.technologies || selectedProject.tags
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
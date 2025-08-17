// Removed unused React import
// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Project, projects } from '../data/projects';
import ProjectDetailsModal from './ProjectDetailsModal';
import { Code, ExternalLink, Calendar, Users, TrendingUp, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
          >
            Projects Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Innovative solutions blending technical execution with user-centric design
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group"
            >
              <div 
                onClick={() => openProjectDetails(project)}
                className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Project Image */}
                    <div className="lg:col-span-5 order-first lg:order-last">
                      <div className="relative">
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm group-hover:shadow transition-all duration-300 border border-white/10">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        {/* Live Demo Badge */}
                        {project.link && (
                          <div className="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20">
                            Live Demo
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-3">
                          <Code className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-white/80">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 transition-colors border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 4 && (
                            <span className="text-xs px-2 py-1 text-white/60 bg-white/5 rounded-full border border-white/10">
                              +{project.tags.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 group-hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="h-3 w-3 text-green-400" />
                              <div className="text-sm sm:text-base font-semibold text-white">
                                {metric.value}
                              </div>
                            </div>
                            <div className="text-xs text-gray-300 group-hover:text-white transition-colors">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2 text-sm sm:text-base text-blue-400 group-hover:text-blue-300 transition-colors">
                          <Eye className="h-4 w-4" />
                          <span>View Details</span>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{projects.length}</div>
            <div className="text-xs sm:text-sm text-gray-300">Projects</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3</div>
            <div className="text-xs sm:text-sm text-gray-300">Live Demos</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">8+</div>
            <div className="text-xs sm:text-sm text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
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
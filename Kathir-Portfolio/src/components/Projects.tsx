// Removed unused React import
// import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Projects Showcase</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solutions blending technical execution with user-centric design
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300 relative overflow-hidden border border-white/10 hover:border-white/20"
            >
              {/* Project card gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center relative">
                <div className={`space-y-6 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-medium leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-white hover:text-gray-300 transition-colors"
                    >
                      View case study →
                    </a>
                  )}

                  <div className="flex gap-12 pt-6">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="group">
                        <div className="text-2xl font-medium text-white">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-300 mt-1 group-hover:text-white transition-colors">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`order-first ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm group-hover:shadow-2xl transition-all duration-300 border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
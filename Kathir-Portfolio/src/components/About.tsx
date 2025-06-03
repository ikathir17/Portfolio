import React from 'react';
import { motion } from 'framer-motion';
// Removed unused import
// import { skillCategories } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter text-white"
          >
            About Me
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-5xl"
          >
            <p className="text-lg text-white/90 leading-relaxed">
              I'm a Full-Stack Developer and UI/UX Designer currently pursuing my degree in Information Technology at Sona College of Technology. My work focuses on building efficient, user-centric applications that bridge technical functionality with intuitive design.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              I approach problems with a blend of technical precision and design thinking, ensuring solutions are both scalable and human-centered. Through academic projects and internships, I've honed my ability to translate complex requirements into clean, impactful digital experiences.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              I'm actively seeking opportunities to collaborate on projects that challenge me to grow—whether in web development, AI integration, or UX design.
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
          >
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-lg font-medium mb-2 text-white">
                Development
              </h3>
              <p className="text-white/90 text-sm">
                Full-stack development with focus on scalable and efficient solutions
              </p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-lg font-medium mb-2 text-white">
                Design
              </h3>
              <p className="text-white/90 text-sm">
                User-centered design with emphasis on intuitive interfaces
              </p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-lg font-medium mb-2 text-white">
                Innovation
              </h3>
              <p className="text-white/90 text-sm">
                Continuous learning and adoption of new technologies
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, SkillCategory, skillCategories as allSkillCategories } from '../data/skills';

const categories: SkillCategory[] = [
  'Top Skills',
  'Development',
  'Design',
  'Soft Skills',
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Top Skills');

  const filteredSkills = selectedCategory === 'All Skills'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tighter text-white">
            Skills & Expertise
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-12 max-w-5xl">
            <motion.button
              key="All Skills"
              onClick={() => setSelectedCategory('All Skills')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 focus:outline-none ${
                selectedCategory === 'All Skills'
                  ? 'bg-white/20 backdrop-blur-sm text-white border-transparent shadow-lg'
                  : 'bg-white/5 text-white/90 border-white/20 hover:bg-white/10'
              }`}
            >
              All Skills
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 focus:outline-none ${
                  selectedCategory === category
                    ? 'bg-white/20 backdrop-blur-sm text-white border-transparent shadow-lg'
                    : 'bg-white/5 text-white/90 border-white/20 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div 
            layout
            className="flex flex-wrap gap-4 max-w-5xl"
          >
            {filteredSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
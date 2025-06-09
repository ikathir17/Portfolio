import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, SkillCategory } from '../data/skills';
import { FaArrowRight } from 'react-icons/fa';

type SkillWithLevel = {
  name: string;
  category: SkillCategory;
  level: number;
  icon?: string;
};

const categoryColors: Record<SkillCategory, string> = {
  'Top Skills': 'from-blue-500 to-cyan-400',
  'Development': 'from-purple-500 to-pink-500',
  'Design': 'from-amber-500 to-yellow-400',
  'Soft Skills': 'from-emerald-500 to-teal-400'
};

const categoryIcons: Record<SkillCategory, string> = {
  'Top Skills': '🏆',
  'Development': '💻',
  'Design': '🎨',
  'Soft Skills': '🤝'
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All Skills'>('All Skills');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Add default level to skills
  const skillsWithLevels: SkillWithLevel[] = skills.map(skill => ({
    ...skill,
    level: Math.floor(Math.random() * 5) + 6, // Random level between 6-10
    icon: categoryIcons[skill.category]
  }));

  const filteredSkills = selectedCategory === 'All Skills'
    ? skillsWithLevels
    : skillsWithLevels.filter(skill => skill.category === selectedCategory);

  const categories = Object.keys(categoryColors) as SkillCategory[];

  const getCategoryColor = (category: SkillCategory) => {
    return categoryColors[category] || 'from-gray-500 to-gray-700';
  };
  
  const getProficiency = (level: number) => {
    const stars = '★'.repeat(level) + '☆'.repeat(10 - level);
    return `${stars} (${level}/10)`;
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-4 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0VjIwYTQgNCAwIDEgMSA4IDB2MTRhNCA0IDAgMSAxLTggMHpNMjYgMjZhNCA0IDAgMSAwLTggMHY4YTQgNCAwIDAgMCA4IDB2LTh6bS0xNiA4YTQgNCAwIDEgMS04IDB2LTJhNCA0IDAgMSAxIDggMHYyem0xNiA4YTQgNCAwIDEgMC04IDB2MmE0IDQgMCAwIDAgOCAwdi0yem0xNiAwYTQgNCAwIDEgMS04IDB2LTJhNCA0IDAgMCAxIDggMHYyem0tMTYtOGE0IDQgMCAxIDAtOCAwdjJhNCA0IDAgMCAwIDggMHYteiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 text-blue-300 rounded-full mb-4 border border-white/10">
              Skills & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical</span> Skills
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A blend of technical expertise and creative problem-solving to deliver exceptional digital experiences.
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
            <motion.button
              key="All Skills"
              onClick={() => setSelectedCategory('All Skills')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === 'All Skills'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-white/5 text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/10'
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
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg`
                    : 'bg-white/5 text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                {categoryIcons[category]} {category}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => {
                const categoryColor = getCategoryColor(skill.category);
                const isHovered = hoveredSkill === skill.name;
                
                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    layout
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      delay: Math.min(index * 0.03, 0.5)
                    }}
                    className={`relative group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden ${
                      isHovered ? 'scale-[1.02]' : ''
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${categoryColor.split(' ')[0].replace('from-', '')}00 0%, ${categoryColor.split(' ')[2].replace('to-', '')}20 100%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className={`p-2 rounded-lg bg-gradient-to-br ${categoryColor} text-white`}
                            style={{
                              boxShadow: `0 4px 15px -5px var(--tw-gradient-from)`
                            }}
                          >
                            {skill.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                          {getProficiency(skill.level)}
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/60 mb-1">
                          <span>Proficiency</span>
                          <span>{skill.level}/10</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div 
                            className={`h-full rounded-full bg-gradient-to-r ${categoryColor}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 10) * 100}%` }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 1, delay: index * 0.05 }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                        <span className="text-xs text-white/60">{skill.category}</span>
                        <div className="flex items-center text-xs text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span className="mr-1">View projects</span>
                          <FaArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          
          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-white/50 mb-4">No skills found in this category</div>
              <button 
                onClick={() => setSelectedCategory('All Skills')}
                className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white/80 hover:text-white transition-colors"
              >
                View All Skills
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
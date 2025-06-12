import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, SkillCategory } from '../data/skills';

type CategoryKey = SkillCategory | 'All Skills';

const categoryColors: Record<SkillCategory, string> = {
  'Top Skills': 'from-blue-500/20 to-blue-600/20',
  'Development': 'from-purple-500/20 to-purple-600/20',
  'Design': 'from-amber-500/20 to-amber-600/20',
  'Soft Skills': 'from-emerald-500/20 to-emerald-600/20'
};

const categoryButtonStyles: Record<SkillCategory, string> = {
  'Top Skills': 'hover:bg-blue-500/10 text-blue-400',
  'Development': 'hover:bg-purple-500/10 text-purple-400',
  'Design': 'hover:bg-amber-500/10 text-amber-400',
  'Soft Skills': 'hover:bg-emerald-500/10 text-emerald-400'
};

const categories: CategoryKey[] = ['All Skills', 'Top Skills', 'Development', 'Design', 'Soft Skills'];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('All Skills');
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  const filteredSkills = selectedCategory === 'All Skills' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);
    
  const handleCategoryChange = useCallback((newCategory: CategoryKey) => {
    if (newCategory === selectedCategory) return;
    
    setIsLoading(true);
    setDirection(categories.indexOf(newCategory) > categories.indexOf(selectedCategory) ? 1 : -1);
    
    // Simulate loading state for better animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSelectedCategory(newCategory);
        setTimeout(() => setIsLoading(false), 50);
      });
    });
  }, [selectedCategory]);

  // Fallback color in case a skill's category is not found
  const getCategoryColor = (category: SkillCategory) => {
    return categoryColors[category] || 'from-gray-500/20 to-gray-600/20';
  };

  return (
    <section id="skills" className="py-12 md:py-16 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Skills & Expertise</h2>
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6 md:mb-8">
            Technologies and tools I'm proficient in and use to build amazing experiences
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`
                  px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-medium 
                  whitespace-nowrap relative overflow-hidden
                  ${selectedCategory === category 
                    ? 'bg-white/10 text-white backdrop-blur-sm' 
                    : 'bg-transparent border border-white/10 text-white/70 hover:bg-white/5'}
                  ${category !== 'All Skills' ? categoryButtonStyles[category as SkillCategory] : ''}
                `}
                disabled={isLoading}
                initial={false}
                animate={{
                  scale: selectedCategory === category ? 1.05 : 1,
                  opacity: selectedCategory === category ? 1 : 0.8,
                  transition: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { 
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    duration: 0.3
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { 
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }
                }}
              >
                {category}
                {selectedCategory === category && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white/40"
                    layoutId="activeCategory"
                    transition={{
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      duration: 0.3
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          {isLoading ? (
            <motion.div 
              key="loading"
              className="flex justify-center items-center h-40"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
              }}
              exit={{ 
                opacity: 0, 
                y: -10,
                transition: { duration: 0.15, ease: [0.4, 0, 1, 1] }
              }}
            >
              <motion.div 
                className="text-white/60 flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }}
              >
                <motion.span
                  animate={{ 
                    y: [0, -5, 0],
                    transition: { 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }
                  }}
                  className="inline-block"
                >
                  ⚡
                </motion.span>
                Loading skills...
              </motion.div>
            </motion.div>
          ) : filteredSkills.length === 0 ? (
            <motion.div 
              key="empty"
              className="text-center py-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }}
              exit={{ 
                opacity: 0, 
                y: -10,
                transition: { duration: 0.2, ease: [0.4, 0, 1, 1] }
              }}
            >
              <motion.p 
                className="text-white/70 mb-4"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 }
                }}
              >
                No skills found in this category.
              </motion.p>
              <motion.button
                onClick={() => handleCategoryChange('All Skills')}
                className="mt-4 px-4 py-2 text-base rounded-lg bg-white/5 hover:bg-white/10 text-white/80"
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 500, damping: 30 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { type: 'spring', stiffness: 500, damping: 30 }
                }}
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.3 }
                }}
              >
                View All Skills
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              key={selectedCategory}
              className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3"
              initial={{ x: 30 * direction, opacity: 0, filter: 'blur(4px)' }}
              animate={{ 
                x: 0, 
                opacity: 1, 
                filter: 'blur(0px)',
                transition: { 
                  duration: 0.4, 
                  ease: [0.4, 0, 0.2, 1],
                  staggerChildren: 0.02,
                  when: 'beforeChildren'
                }
              }}
              exit={{ 
                x: -30 * direction, 
                opacity: 0, 
                filter: 'blur(4px)',
                transition: { 
                  duration: 0.3, 
                  ease: [0.4, 0, 1, 1],
                  staggerChildren: 0.01,
                  staggerDirection: -1
                }
              }}
            >
              {filteredSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className={`
                    p-2 sm:p-3 rounded-xl backdrop-blur-sm
                    bg-gradient-to-br ${getCategoryColor(skill.category)}
                    border border-white/10 hover:border-white/20
                    flex items-center justify-center
                    h-16 sm:h-20
                  `}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { 
                      type: 'spring',
                      stiffness: 500,
                      damping: 30,
                      delay: index * 0.015
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.06)',
                    transition: { 
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    y: 0,
                    transition: { 
                      type: 'spring',
                      stiffness: 500,
                      damping: 30
                    }
                  }}
                >
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        delay: index * 0.02 + 0.1,
                        duration: 0.3
                      }
                    }}
                  >
                    <span className="text-white font-medium text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills; 
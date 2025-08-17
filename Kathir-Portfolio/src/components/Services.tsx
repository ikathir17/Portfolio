import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiMessageSquare } from 'react-icons/fi';
import { FaReact, FaFigma, FaNodeJs, FaGraduationCap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiDjango, SiMongodb } from 'react-icons/si';
import React from 'react';

type Service = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  techIcons: React.ReactNode[];
  deliverables: string[];
  color: string;
};

const services: Service[] = [
  {
    title: 'Frontend Development',
    subtitle: 'React, JavaScript, Tailwind CSS',
    description: 'Building responsive, interactive web interfaces with modern React practices.',
    icon: <FiCode className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    techIcons: [
      <FaReact key="react" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
      <SiJavascript key="js" className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />,
      <SiTailwindcss key="tailwind" className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
    ],
    deliverables: [
      'Landing pages with sleek animations',
      'Component-driven UIs',
      'Mobile-first implementations'
    ],
    color: 'from-blue-500/20 to-blue-600/20',
  },
  {
    title: 'UI/UX Prototyping',
    subtitle: 'Figma, Design Thinking',
    description: 'Creating intuitive wireframes and prototypes that prioritize user needs.',
    icon: <FiLayers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />,
    techIcons: [
      <FaFigma key="figma" className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
      <FiLayers key="design" className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
    ],
    deliverables: [
      'User flow diagrams',
      'Clickable mockups',
      'Usability-focused redesigns'
    ],
    color: 'from-purple-500/20 to-purple-600/20',
  },
  {
    title: 'Full-Stack Solutions',
    subtitle: 'Django, MERN Stack',
    description: 'Developing functional web applications from concept to deployment.',
    icon: <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 group-hover:text-amber-300 transition-colors" />,
    techIcons: [
      <SiDjango key="django" className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />,
      <FaNodeJs key="node" className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />,
      <SiMongodb key="mongo" className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
    ],
    deliverables: [
      'Database-integrated systems',
      'RESTful APIs',
      'Deployment-ready MVPs'
    ],
    color: 'from-amber-500/20 to-amber-600/20',
  },
  {
    title: 'Technical Consultation',
    subtitle: 'For Students & Startups',
    description: 'Bridging theory and practice for academic projects or early-stage ideas.',
    icon: <FiMessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
    techIcons: [
      <FaGraduationCap key="student" className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
      <FiMessageSquare key="consult" className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500" />
    ],
    deliverables: [
      'Tech stack recommendations',
      'Project roadmap planning',
      'Code review for learning projects'
    ],
    color: 'from-emerald-500/20 to-emerald-600/20',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      mass: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    },
  },
  hover: {
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16 px-2 sm:px-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Services I Offer</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Practical solutions grounded in my technical training and project experience
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className={`p-4 sm:p-6 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-white/10
                bg-gradient-to-br ${service.color.replace('/20', '/10')} hover:border-white/30 transition-all duration-300 ease-out
                flex flex-col items-start h-full relative overflow-hidden group backdrop-opacity-80
                hover:shadow-lg hover:shadow-white/5 hover:scale-[1.02]`}
              variants={item}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <motion.div 
                className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
                }}
              />
              <div className="flex items-start justify-between w-full mb-3 sm:mb-4 relative z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-200 group-hover:scale-110`}>
                  {service.icon}
                </div>
                <motion.div 
                  className="flex space-x-1 sm:space-x-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.2,
                      duration: 0.3 
                    } 
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                >
                  {service.techIcons.map((icon, i) => (
                    <motion.span 
                      key={i} 
                      className="opacity-80 hover:opacity-100"
                      whileHover={{ 
                        y: -2,
                        scale: 1.1,
                      }}
                      transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                    >
                      {icon}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{service.title}</h3>
              <p className="text-blue-100/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
                {service.subtitle}
              </p>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>
              <motion.div 
                className="mt-auto pt-2 sm:pt-3 border-t border-white/5 w-full"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.1,
                    duration: 0.4
                  } 
                }}
                viewport={{ once: true, margin: "-20px" }}
              >
                <h4 className="text-xs sm:text-sm font-medium text-white/80 mb-2">What I deliver:</h4>
                <motion.ul 
                  className="space-y-1.5 sm:space-y-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-20px" }}
                >
                  {service.deliverables.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { 
                          opacity: 1, 
                          x: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }
                      }}
                    >
                      <motion.span 
                        className="text-blue-300 mr-2 text-xs sm:text-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          delay: 0.1 + (i * 0.1),
                          type: 'spring',
                          stiffness: 500,
                          damping: 10
                        }}
                      >
                        •
                      </motion.span>
                      <span className="text-xs sm:text-sm text-white/70 leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

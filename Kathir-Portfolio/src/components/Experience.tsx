import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Building, ExternalLink, Award } from 'lucide-react';
import DetailsModal from './DetailsModal';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  image: string;
  role?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "UI/UX Design Internship",
    company: "CodSoft",
    duration: "September - October 2024",
    role: "UI/UX Design Intern",
    image: "/Experience/UIUX Design Intern.jpg",
    description: `Successfully completed a 4-week intensive virtual internship program in UI/UX Design at CodSoft. During this internship, I received exceptional remarks for my design contributions and project execution. I developed 15+ wireframes and prototypes using Figma, focusing on creating intuitive user interfaces. I conducted comprehensive user research that led to a 35% improvement in product usability. This experience allowed me to apply design thinking methodologies to real-world projects and collaborate with cross-functional teams to deliver user-centered design solutions.`
  },
  {
    title: "Software Development Internship",
    company: "Infosys (Internship 5.0)",
    duration: "February - April 2025",
    role: "Software Development Intern",
    image: "/Experience/Software Dev Intern.jpg",
    description: `As a Software Development Intern at Infosys, I contributed to the development of an institutional Grievance Handling System. I implemented core features using Django for the backend with SQLite optimization, which improved system performance. Working in an Agile team environment, I collaborated with senior developers to deliver project milestones on time. My contributions helped reduce ticket resolution time by 60% through system automation and process improvements. This experience provided me with valuable insights into enterprise software development and the software development lifecycle.`
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (exp: ExperienceItem) => {
    setSelectedExp(exp);
    setIsModalOpen(true);
  };

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey and hands-on experience in the tech industry
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
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
                  onClick={() => openModal(exp)}
                  className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
                      {/* Left Content */}
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Briefcase className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-2 text-sm sm:text-base text-blue-400">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10 w-fit">
                          <Calendar className="h-3.5 w-3.5 text-green-400" />
                          <span>{exp.duration}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3 sm:line-clamp-4">
                          {exp.description}
                        </p>
                      </div>

                      {/* Right Content - Image */}
                      <div className="lg:flex-shrink-0">
                        <div className="w-full lg:w-48 h-32 lg:h-40 rounded-lg overflow-hidden bg-white/5 border border-white/10">
                          <img
                            src={exp.image}
                            alt={`${exp.company} experience`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="mt-4 sm:mt-6 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm sm:text-base text-blue-400 group-hover:text-blue-300 transition-colors">
                          <span>View Details</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                        <Award className="h-5 w-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{experiences.length}</div>
            <div className="text-xs sm:text-sm text-gray-300">Internships</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2</div>
            <div className="text-xs sm:text-sm text-gray-300">Companies</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">6+</div>
            <div className="text-xs sm:text-sm text-gray-300">Months</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-300">Success Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <DetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={selectedExp?.title || ''}
            subtitle={selectedExp?.role}
            issuer={selectedExp?.company}
            image={selectedExp?.image}
            details={selectedExp?.description || ''}
            date={selectedExp?.duration}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;

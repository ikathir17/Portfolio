import { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from './Carousel';
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
    <section id="experience" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Work Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto"
          >
            My professional journey and hands-on experience in the tech industry
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group"
              >
                <div 
                  onClick={() => openModal(exp)}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                        <p className="text-blue-400">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-full">
                        {exp.duration}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-300 line-clamp-3">
                      {exp.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span>View Certificate</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
    </section>
  );
};

export default Experience;

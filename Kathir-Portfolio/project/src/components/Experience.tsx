import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  image: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "UI/UX Design Intern",
    company: "CodSoft",
    duration: "Sep-Oct 2024",
    image: "/Experience/UIUX Design Intern.jpg",
    description: [
      "Successfully completed 4-week intensive virtual internship program in UI/UX Design",
      "Received exceptional remarks for design contributions and project execution",
      "Developed 15+ wireframes and prototypes using Figma",
      "Conducted user research to improve product usability by 35%"
    ]
  },
  {
    title: "Software Development Intern",
    company: "Infosys (Internship 5.0)",
    duration: "Feb-Apr 2025",
    image: "/Experience/Software Dev Intern.jpg",
    description: [
      "Developed core features for institutional Grievance Handling System",
      "Implemented Django backend with SQLite optimization",
      "Collaborated in Agile team environment to deliver project milestones",
      "Reduced ticket resolution time by 60% through system automation"
    ]
  }
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  const handleExpClick = (exp: ExperienceItem) => {
    setSelectedExp(exp);
  };

  return (
    <section id="experience" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Verified Industry Experience</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            This collection documents my participation in structured internship programs with leading tech organizations. Each credential has been authenticated by the issuing institution and represents hands-on experience solving real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: expIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-6 hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => handleExpClick(exp)}>
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors mb-2">{exp.title}</h4>
                        <p className="text-white/80">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80">{exp.duration}</p>
                        <p className="text-white/60 text-sm mt-1">Certificate of Completion</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-white/90 flex items-start group-hover:text-white transition-colors">
                          <span className="mr-2 text-blue-400">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors flex items-center">
                      Click to view certificate
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for displaying experience certificate */}
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-medium text-white mb-2">{selectedExp.title}</h3>
                <p className="text-white/80">{selectedExp.company}</p>
              </div>
              <div className="relative bg-black/20 max-h-[70vh] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src={selectedExp.image}
                    alt={selectedExp.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setSelectedExp(null)}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;

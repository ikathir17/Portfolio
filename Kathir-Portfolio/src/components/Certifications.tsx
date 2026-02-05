import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Calendar, Award, Building } from 'lucide-react';
import DetailsModal from './DetailsModal';

interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  details: string;
  image: string;
  score?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Infosys Java Foundation Certification",
    issuer: "Infosys",
    year: "August 2024",
    details: "Demonstrated mastery of Java programming fundamentals, including object-oriented design principles, collections framework, and exception handling. Applied knowledge to solve complex problems through project-based assessments evaluated by Infosys technical experts. Validated ability to develop production-ready Java applications following industry best practices.",
    image: "/Certifications/Infosys Java Foundation.jpg",
    score: "Top Performer"
  },
  {
    title: "Infosys Python Foundation Certification",
    issuer: "Infosys",
    year: "September 2024",
    details: "Earned distinction in Python programming with focus on data structures, algorithms, and automation scripting. Completed rigorous real-world scenario testing including data processing and API integration challenges. Recognized by Infosys as demonstrating professional-grade Python competency.",
    image: "/Certifications/Infosys Python Foundation.jpg"
  },
  {
    title: "Infosys AI Foundation Certification",
    issuer: "Infosys",
    year: "2024",
    details: "Artificial Intelligence fundamentals. Machine Learning concepts & applications. Gained understanding of AI lifecycle, ML algorithms, and practical implementations.",
    image: "/Certifications/Infosys AI Foundation.jpeg"
  },
  {
    title: "NPTEL Certification in Design Thinking",
    issuer: "IIT Madras",
    year: "January - February 2024",
    details: "Mastered the 5-stage design thinking process (Empathize, Define, Ideate, Prototype, Test). Applied human-centered design methodologies to solve real-world UX challenges. Developed low-fidelity prototypes for usability testing scenarios. Learned user research techniques including persona development and journey mapping.",
    image: "/Certifications/NPTEL Design Thinking.jpg",
    score: "Score: 71% (Top 30%)"
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google",
    year: "February 2024",
    details: "Hands-on experience with GCP core services: Compute Engine, Cloud Storage, VPC networking. Implemented infrastructure-as-code solutions through Google Cloud Shell. Completed real-world deployment scenarios including load balancing and auto-scaling.",
    image: "/Certifications/Google Cloud Computing Foundations & Generative AI.jpg",
    score: "8-Course Specialization"
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "November 2024",
    details: "Mastered threat detection using SIEM tools and IDS/IPS systems. Developed Python scripts for security automation and log analysis. Gained expertise in network security, encryption, and incident response.",
    image: "/Certifications/Google Cybersecurity.jpg"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (cert: CertificationItem) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white"
          >
            Certifications & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Professional certifications and courses that validate my expertise and demonstrate continuous learning
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group"
            >
              <div
                onClick={() => openModal(cert)}
                className="h-full bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 lg:p-3 border border-white/20">
                        <ExternalLink size={20} className="lg:w-6 lg:h-6 text-white" />
                      </div>
                    </div>

                    {/* Score Badge */}
                    {cert.score && (
                      <div className="absolute top-2 lg:top-3 right-2 lg:right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full border border-white/20">
                        {cert.score}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 lg:p-5 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 lg:mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer and Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 lg:gap-3 mb-2 lg:mb-3">
                    <div className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm text-gray-300">
                      <Building size={12} className="lg:w-3.5 lg:h-3.5 text-blue-400" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm text-gray-400">
                      <Calendar size={12} className="lg:w-3.5 lg:h-3.5 text-green-400" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto pt-2 lg:pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-xs lg:text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                        View Details
                      </span>
                      <Award size={14} className="lg:w-4 lg:h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-3xl mx-auto"
        >
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{certifications.length}</div>
            <div className="text-xs lg:text-sm text-gray-300">Certifications</div>
          </div>
          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">4</div>
            <div className="text-xs lg:text-sm text-gray-300">Organizations</div>
          </div>

          <div className="text-center p-3 sm:p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-white/10">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-xs lg:text-sm text-gray-300">Completion Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <DetailsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={selectedCert?.title || ''}
            subtitle={selectedCert?.issuer}
            image={selectedCert?.image}
            details={selectedCert?.details || ''}
            date={selectedCert?.year}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications; 
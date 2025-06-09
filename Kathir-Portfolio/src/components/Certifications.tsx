import { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from './Carousel';
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
    <section id="certifications" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Professional certifications and courses that validate my expertise
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <Carousel itemsPerView={3} gap={24} autoPlay={false}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div 
                  onClick={() => openModal(cert)}
                  className="group h-full flex flex-col bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden pt-[56.25%]">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm font-medium">View Details →</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{cert.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
                      <span className="truncate">{cert.issuer}</span>
                      <span className="whitespace-nowrap ml-2">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </motion.div>
      </div>

      <DetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedCert?.title || ''}
        subtitle={selectedCert?.issuer}
        image={selectedCert?.image}
        details={selectedCert?.details || ''}
        date={selectedCert?.year}
      />
    </section>
  );
};

export default Certifications; 
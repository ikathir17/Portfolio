import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  description: string[];
  image: string;
  score?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Infosys Java Foundation Certification",
    issuer: "Infosys",
    date: "Issued: August 2024",
    image: "/Certifications/Infosys Java Foundation.jpg",
    description: [
      "Demonstrated mastery of Java programming fundamentals, including object-oriented design principles, collections framework, and exception handling",
      "Applied knowledge to solve complex problems through project-based assessments evaluated by Infosys technical experts",
      "Validated ability to develop production-ready Java applications following industry best practices"
    ]
  },
  {
    title: "Infosys Python Foundation Certification",
    issuer: "Infosys",
    date: "Issued: September 2024",
    image: "/Certifications/Infosys Python Foundation.jpg",
    description: [
      "Earned distinction in Python programming with focus on data structures, algorithms, and automation scripting",
      "Completed rigorous real-world scenario testing including data processing and API integration challenges",
      "Recognized by Infosys as demonstrating professional-grade Python competency"
    ]
  },
  {
    title: "Infosys AI Foundation Certification",
    issuer: "Infosys",
    date: "Issued: August 2024",
    image: "/Certifications/Infosys AI Foundation.jpg",
    description: [
      "Certified in core AI/ML concepts including supervised learning, neural networks, and model evaluation",
      "Applied knowledge to business use cases through Infosys's proprietary training framework",
      "Recognized for understanding ethical AI implementation and limitations"
    ]
  },
  {
    title: "NPTEL Internet of Things",
    issuer: "IIT Kharagpur",
    date: "Jul-Oct 2024",
    score: "Score: 79% (Top 25% of 33,131 candidates)",
    image: "/Certifications/NPTEL IoT.jpg",
    description: [
      "Comprehensive understanding of IoT architectures, sensor networks, and edge computing",
      "Completed hands-on projects with Raspberry Pi and Arduino platforms",
      "Officially recognized by India's premier technical institute"
    ]
  },
  {
    title: "NPTEL Certification in Design Thinking",
    issuer: "IIT Madras",
    date: "Jan-Feb 2024",
    score: "Score: 71% (Top 30% of 3,949 candidates)",
    image: "/Certifications/NPTEL Design Thinking.jpg",
    description: [
      "Mastered the 5-stage design thinking process (Empathize, Define, Ideate, Prototype, Test)",
      "Applied human-centered design methodologies to solve real-world UX challenges",
      "Developed low-fidelity prototypes for usability testing scenarios",
      "Learned user research techniques including persona development and journey mapping"
    ]
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "Google",
    date: "February 2024",
    score: "8-Course Specialization",
    image: "/Certifications/Google Cloud Computing Foundations & Generative AI.jpg",
    description: [
      "Hands-on experience with GCP core services: Compute Engine, Cloud Storage, VPC networking",
      "Implemented infrastructure-as-code solutions through Google Cloud Shell",
      "Completed real-world deployment scenarios including load balancing and auto-scaling"
    ]
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "November 2024",
    image: "/Certifications/Google Cybersecurity.jpg",
    description: [
      "Mastered threat detection using SIEM tools and IDS/IPS systems",
      "Developed Python scripts for security automation and log analysis",
      "Certified in NIST Cybersecurity Framework implementation"
    ]
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const handleCertClick = (cert: CertificationItem) => {
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className="py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certified Technical Expertise</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Officially validated skills through industry-standard assessments. These credentials represent formal recognition of my technical capabilities by leading technology institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, certIndex) => (
            <motion.div
              key={certIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: certIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-6 hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => handleCertClick(cert)}>
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors mb-2">{cert.title}</h4>
                        <p className="text-white/80">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80">{cert.date}</p>
                        {cert.score && (
                          <p className="text-white/60 text-sm mt-1">{cert.score}</p>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {cert.description.map((item, itemIndex) => (
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

        {/* Modal for displaying certification */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-white/10 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-medium text-white mb-2">{selectedCert.title}</h3>
                <p className="text-white/80">{selectedCert.issuer}</p>
              </div>
              <div className="relative bg-black/20 max-h-[70vh] flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={() => setSelectedCert(null)}
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

export default Certifications; 
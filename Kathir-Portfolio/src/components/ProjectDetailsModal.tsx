import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiLock, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';

// Extend the Window interface to include clipboard API
declare global {
  interface Window {
    clipboardData?: DataTransfer | null;
  }
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    link?: string;
    backend?: string;
    note?: string;
    credentials?: {
        message?: string;
      username?: string;
      password?: string;
      admin?: {
        username: string;
        password: string;
      };
      customer?: {
        username: string;
        password: string;
      };
      employees?: Array<{
        username: string;
        password: string;
        department: string;
      }>;
    };
    features?: string[];
    technologies: string[];
  };
}

const CredentialItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center">
    <span className="text-amber-200/80 text-sm w-20">{label}:</span>
    <div className="bg-gray-900/50 px-3 py-1.5 rounded-lg border border-amber-900/50 flex-1">
      <code className="text-amber-300 font-mono text-sm">{value}</code>
    </div>
    <button 
      onClick={() => navigator.clipboard.writeText(value || '')}
      className="ml-2 text-amber-400 hover:text-amber-300 transition-colors"
      title="Copy to clipboard"
    >
      <FiLayers size={16} />
    </button>
  </div>
);

export default function ProjectDetailsModal({
  isOpen,
  onClose,
  project,
}: ProjectDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCredentials, setShowCredentials] = useState(false);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  // Create a style element for the scrollbar
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(96, 165, 250, 0.5);
      border-radius: 3px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(96, 165, 250, 0.8);
    }
  `;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-gray-700/50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-blue-600/80 transition-all duration-300 text-white backdrop-blur-sm shadow-lg hover:scale-110"
            aria-label="Close"
            whileHover={{ rotate: 90 }}
          >
            <FiX size={24} />
          </motion.button>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row h-full overflow-hidden">
            {/* Image Carousel */}
            <div className="relative w-full md:w-1/2 h-72 md:h-auto bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="relative h-full w-full overflow-hidden">
                <div 
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {project.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full">
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-contain p-4 md:p-8 transition-all duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 hover:bg-blue-600/90 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Previous image"
                    whileHover={{ x: -5 }}
                  >
                    <FiChevronLeft size={24} />
                  </motion.button>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-900/80 hover:bg-blue-600/90 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg"
                    aria-label="Next image"
                    whileHover={{ x: 5 }}
                  >
                    <FiChevronRight size={24} />
                  </motion.button>
                </>
              )}

              {/* Dots Indicator */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-500 w-8' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {project.title}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </div>
              
                {project.features && project.features.length > 0 && (
                  <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/50">
                    <div className="flex items-center text-blue-400 mb-3">
                      <FiCheckCircle className="mr-2" />
                      <h3 className="text-xl font-semibold text-white">Key Features</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start group">
                          <span className="text-blue-400 mr-3 mt-1 group-hover:scale-110 transition-transform">
                            <FiCheckCircle size={16} />
                          </span>
                          <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-gray-800/40 rounded-xl p-5 border border-gray-700/50">
                  <div className="flex items-center text-blue-400 mb-3">
                    <FiCode className="mr-2" />
                    <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/30 text-blue-300 border border-blue-800/50 hover:border-blue-600/70 hover:from-blue-800/40 hover:to-blue-700/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.link || project.credentials) && (
                  <div className="space-y-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/30"
                      >
                        <FiExternalLink className="mr-2 group-hover:animate-pulse" />
                        Take a Look at Live Project
                      </a>
                    )}
                    {/* Backend link and note (if provided) */}
                    {project.backend && (
                      <div>
                        {project.note && (
                          <div className="mb-3 text-sm text-amber-200 bg-amber-900/10 px-3 py-2 rounded-md border border-amber-900/20">
                            {project.note}
                          </div>
                        )}

                        <a
                          href={project.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="group inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/30"
                        >
                          <FiExternalLink className="mr-2" />
                          Open Backend API
                        </a>
                      </div>
                    )}
                    {project.credentials && (
                      <div className="space-y-4">
                        {/* For Grievance project, hide credentials until user reveals */}
                        {project.title === 'Grievance Handling System' && !showCredentials ? (
                          <div className="space-y-3">
                            <div className="text-sm text-gray-300">
                              Credentials are hidden to protect sensitive details. Click the button below to reveal.
                            </div>
                            <div className="flex">
                              <button
                                onClick={() => setShowCredentials(true)}
                                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-xl transition-all duration-300 hover:from-amber-500 hover:to-amber-600 shadow-lg"
                              >
                                Reveal Credentials
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            {project.credentials.admin && (
                              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-xl p-5 border border-purple-800/30">
                                <div className="flex items-center text-purple-400 mb-3">
                                  <FiLock className="mr-2" />
                                  <h3 className="text-lg font-semibold text-white">Admin Account</h3>
                                </div>
                                <CredentialItem label="Username" value={project.credentials.admin.username} />
                                <CredentialItem label="Password" value={project.credentials.admin.password} />
                              </div>
                            )}

                            {project.credentials.customer && (
                              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 rounded-xl p-5 border border-blue-800/30">
                                <div className="flex items-center text-blue-400 mb-3">
                                  <FiLock className="mr-2" />
                                  <h3 className="text-lg font-semibold text-white">Customer Account</h3>
                                </div>
                                <CredentialItem label="Username" value={project.credentials.customer.username} />
                                <CredentialItem label="Password" value={project.credentials.customer.password} />
                              </div>
                            )}

                            {project.credentials?.employees && project.credentials.employees.length > 0 && (
                              <div className="bg-gradient-to-br from-amber-900/30 to-yellow-900/20 rounded-xl p-5 border border-amber-800/30">
                                <div className="flex items-center text-amber-400 mb-3">
                                  <FiLock className="mr-2" />
                                  <h3 className="text-lg font-semibold text-white">Employee Accounts</h3>
                                </div>
                                <div className="space-y-4">
                                  {project.credentials.employees.map((emp, index, array) => (
                                    <div key={index} className="space-y-2">
                                      <div className="text-amber-200 text-sm font-medium">{emp.department} Department:</div>
                                      <CredentialItem label="Username" value={emp.username} />
                                      <CredentialItem label="Password" value={emp.password} />
                                      {index < array.length - 1 && <div className="h-px bg-amber-800/50 my-2"></div>}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {project.credentials.username && project.credentials.password && (
                              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-5 border border-gray-700/30">
                                <div className="flex items-center text-gray-400 mb-3">
                                  <FiLock className="mr-2" />
                                  <h3 className="text-lg font-semibold text-white">Demo Account</h3>
                                </div>
                                <CredentialItem label="Username" value={project.credentials.username} />
                                <CredentialItem label="Password" value={project.credentials.password} />
                              </div>
                            )}
                            {/* Message-only credentials (instructions) */}
                            {project.credentials.message && (
                              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 rounded-xl p-5 border border-gray-700/30">
                                <div className="flex items-center text-gray-300 mb-2">
                                  <FiLayers className="mr-2 text-amber-300" />
                                  <h3 className="text-lg font-semibold text-white">Note</h3>
                                </div>
                                <div className="text-sm text-gray-200">{project.credentials.message}</div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  image?: string;
  details: string | string[];
  date?: string;
  issuer?: string;
}

export default function DetailsModal({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  details,
  date,
  issuer,
}: DetailsModalProps) {
  if (!isOpen) return null;

  const detailsArray = Array.isArray(details)
    ? details
    : details.split('\n').filter(Boolean);


  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="flex min-h-screen items-center justify-center p-4 pt-16 text-center sm:block sm:p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" />
          
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>

          <motion.div
            className="inline-block w-full max-w-6xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-left align-middle shadow-2xl transition-all sm:my-8 sm:align-middle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          >
            <div className="relative h-full flex flex-col">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {image && (
                  <div className="lg:w-1/2 xl:w-2/5 bg-black/30 flex-shrink-0">
                    <div className="h-full w-full flex items-center justify-center p-2 md:p-4">
                      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
                        <img
                          src={image}
                          alt={title}
                          className="absolute inset-0 w-full h-full object-contain p-2"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
                    {subtitle && (
                      <p className="text-lg md:text-xl text-blue-400 font-medium">{subtitle}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-3">
                      {issuer && (
                        <span className="inline-flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {issuer}
                        </span>
                      )}
                      {date && (
                        <span className="inline-flex items-center gap-1.5 bg-gray-800/50 px-3 py-1.5 rounded-full">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {date}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                    {detailsArray.map((detail, index) => (
                      <p key={index} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

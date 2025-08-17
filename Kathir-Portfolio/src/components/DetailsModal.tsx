import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Building, Award, ExternalLink } from 'lucide-react';

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
            className="inline-block w-full max-w-4xl lg:max-w-6xl transform overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md text-left align-middle shadow-2xl transition-all sm:my-8 sm:align-middle border border-white/10"
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          >
            <div className="relative h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 backdrop-blur-sm p-2 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200 focus:outline-none border border-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                {/* Image Section */}
                {image && (
                  <div className="lg:w-1/2 xl:w-2/5 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex-shrink-0">
                    <div className="h-full w-full flex items-center justify-center p-4 sm:p-6">
                      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl" />
                        <img
                          src={image}
                          alt={title}
                          className="absolute inset-0 w-full h-full object-contain p-4 rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Content Section */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                  {/* Header */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Award className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h3>
                        {subtitle && (
                          <p className="text-base sm:text-lg md:text-xl text-blue-400 font-medium mt-1">{subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      {issuer && (
                        <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-gray-300 border border-white/10">
                          <Building className="w-3.5 h-3.5 text-blue-400" />
                          {issuer}
                        </span>
                      )}
                      {date && (
                        <span className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-gray-300 border border-white/10">
                          <Calendar className="w-3.5 h-3.5 text-green-400" />
                          {date}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                      <h4 className="text-lg font-semibold text-white">Details</h4>
                    </div>
                    
                    <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                      {detailsArray.map((detail, index) => (
                        <motion.p 
                          key={index} 
                          className="text-gray-300 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <ExternalLink className="w-4 h-4" />
                        <span>Click outside to close</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400">Verified Certificate</span>
                      </div>
                    </div>
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

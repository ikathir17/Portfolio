import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 tracking-tighter text-white">
            Get In Touch
          </h2>

          {/* Two-column layout for introductory text and contact info on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Introductory Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:pr-12"
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-xl lg:mb-0 leading-relaxed">
                Have a project in mind or just want to say hello? Feel free to reach out through the links below.
              </p>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                Contact Information
              </h3>

              <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                <p className="text-gray-300 text-sm sm:text-base">Feel free to reach out directly:</p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:kathiresanp80152@gmail.com"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Mail size={16} className="mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="truncate">kathiresanp80152@gmail.com</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+918754780152"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20 w-full sm:w-auto text-sm sm:text-base"
                >
                  <Phone size={16} className="mr-2 sm:mr-3 flex-shrink-0" />
                  <span>+91 87547 80152</span>
                </motion.a>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-white">
                  Connect with me
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/ikathir17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
                    aria-label="GitHub"
                  >
                    <Github size={18} className="text-white sm:w-5 sm:h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/kathiresan-p-1703k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-white sm:w-5 sm:h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
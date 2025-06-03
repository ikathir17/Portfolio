import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tighter text-white">
            Get In Touch
          </h2>

          {/* Two-column layout for introductory text and contact info on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Introductory Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:pr-12"
            >
              <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-xl lg:mb-0">
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
              <h3 className="text-xl font-semibold mb-6 text-white">
                Contact Information
              </h3>

              <div className="mb-8 space-y-4">
                <p className="text-gray-300">Feel free to reach out directly:</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:kathiresanp80152@gmail.com"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 bg-white/5 backdrop-blur-sm p-3 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <Mail size={18} className="mr-2" />
                  kathiresanp80152@gmail.com
                </motion.a>
                <br />
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+918754780152"
                  className="inline-flex items-center text-white hover:text-gray-300 transition-all duration-300 bg-white/5 backdrop-blur-sm p-3 rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20"
                >
                  <Phone size={18} className="mr-2" />
                  +91 87547 80152
                </motion.a>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4 text-white">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/ikathir17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
                    aria-label="GitHub"
                  >
                    <Github size={20} className="text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/kathiresan-p-1703k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 border border-white/10 hover:border-white/20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} className="text-white" />
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
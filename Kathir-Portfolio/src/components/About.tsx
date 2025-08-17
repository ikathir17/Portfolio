import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Lightbulb, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="container mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tighter text-white"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate developer and designer crafting digital experiences with innovation and precision
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/10"
              >
                                  <div className="flex items-start gap-3 mb-4">
                    <User className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Get to Know Me! ✨</h3>
                  </div>
                                  <div className="space-y-4 text-sm sm:text-base text-white/90 leading-relaxed">
                    <p>
                      Hey there! 👋 I'm a passionate Full-Stack Developer and UI/UX Designer, currently rocking my Information Technology degree at Sona College of Technology. I love creating amazing digital experiences that people actually enjoy using!
                    </p>
                    <p>
                      When I tackle problems, I bring together the best of both worlds - solid technical skills and creative design thinking. My goal? Building solutions that not only work perfectly but also feel great to use. Through my projects and internships, I've learned how to turn complex ideas into clean, powerful digital solutions.
                    </p>
                    <p>
                      I'm super excited to work on new challenges and grow my skills! Whether it's building awesome websites, diving into AI projects, or crafting beautiful user experiences - I'm ready to bring my energy and creativity to the table! 🚀
                    </p>
                  </div>
              </motion.div>

              {/* Key Focus Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              >
                <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-base sm:text-lg font-semibold text-white">Development</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Full-stack development with focus on scalable and efficient solutions using modern technologies.
                  </p>
                </div>
                
                <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Palette className="h-5 w-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-base sm:text-lg font-semibold text-white">Design</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    User-centered design with emphasis on intuitive interfaces and exceptional user experiences.
                  </p>
                </div>
                
                <div className="p-4 sm:p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="h-5 w-5 text-amber-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-base sm:text-lg font-semibold text-white">Innovation</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Continuous learning and adoption of new technologies to stay ahead of industry trends.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Personal Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                    <GraduationCap className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>Information Technology</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                    <MapPin className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>Sona College of Technology</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-gray-300">
                    <Calendar className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <span>2022 - 2026</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Projects Completed</span>
                    <span className="text-lg font-semibold text-white">3+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Technologies</span>
                    <span className="text-lg font-semibold text-white">8+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Certifications</span>
                    <span className="text-lg font-semibold text-white">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Experience</span>
                    <span className="text-lg font-semibold text-white">2+ Years</span>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">Current Status</h3>
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Actively seeking opportunities to collaborate on innovative projects and contribute to meaningful digital solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
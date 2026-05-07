import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data';
import Chatbot from '../components/Chatbot';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Let's Connect</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-blue-400 transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-purple-600/20 rounded-lg mr-4">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Bhopal, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-green-600/20 rounded-lg mr-4">
                    <MessageCircle className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Response Time</p>
                    <p className="text-white font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-6">Social Media</h2>
              
              <div className="space-y-4">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-600/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">LinkedIn</p>
                    <p className="text-gray-400 text-sm">Professional networking</p>
                  </div>
                </a>

                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-600/20 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <Github className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium group-hover:text-purple-400 transition-colors">GitHub</p>
                    <p className="text-gray-400 text-sm">Code repositories</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/30"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you. Drop me a message and let's create something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
            
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <Linkedin size={20} className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* AI Chatbot */}
      <Chatbot />
    </motion.div>
  );
};

export default Contact;
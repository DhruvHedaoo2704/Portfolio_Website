import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { aboutData } from '../data';
import GitHubFeed from '../components/GitHubFeed';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-xl text-gray-400">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Profile */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">My Story</h2>
            <p className="text-gray-300 leading-relaxed">
              {aboutData.profile}
            </p>
          </motion.div>

          {/* GitHub Feed */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <GitHubFeed />
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-400 mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-white">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{aboutData.education.degree}</h3>
              <p className="text-blue-400 font-medium mb-2">{aboutData.education.institution}</p>
              <div className="flex items-center text-gray-400 mb-2">
                <Calendar size={16} className="mr-2" />
                {aboutData.education.duration}
              </div>
              <div className="flex items-center text-gray-400">
                <Award size={16} className="mr-2" />
                CGPA: {aboutData.education.cgpa}/10.0
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-4">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.education.coursework.map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
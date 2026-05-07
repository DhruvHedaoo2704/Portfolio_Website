// src/pages/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experienceData } from '../data';

const Experience = () => {
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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Experience</h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 hidden md:block"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="relative mb-12 md:ml-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-3.75rem] top-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-100 dark:border-gray-900 flex items-center justify-center hidden md:flex">
                {experience.type === 'Experience' ? 
                  <Briefcase size={16} className="text-white" /> : 
                  <Users size={16} className="text-white" />
                }
              </div>

              <div className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full mr-3 ${
                        experience.type === 'Experience' 
                          ? 'bg-blue-100 dark:bg-blue-600/20 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-400/30'
                          : 'bg-purple-100 dark:bg-purple-600/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-400/30'
                      }`}>
                        {experience.type}
                      </span>
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{experience.title}</h3>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">{experience.company}</p>
                  </div>
                  <div className="mt-2 lg:mt-0 lg:text-right">
                    <div className="flex items-center text-slate-500 dark:text-gray-400 mb-1">
                      <Calendar size={16} className="mr-2" />
                      {experience.duration}
                    </div>
                    <div className="flex items-center text-slate-500 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">{experience.description}</p>

                <div>
                  <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-slate-600 dark:text-gray-300">
                        <ChevronRight size={16} className="text-blue-600 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
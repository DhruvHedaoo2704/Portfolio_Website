// src/pages/Experience.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, MapPin, ChevronRight, Code2, Database, Cpu } from 'lucide-react';
import { experienceData, skillsData } from '../data';

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
              <div className="absolute left-[-3.75rem] top-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center hidden md:flex shadow-lg">
                {experience.type === 'Experience' ? 
                  <Briefcase size={16} className="text-white" /> : 
                  <Users size={16} className="text-white" />
                }
              </div>

              <div className="bg-white dark:bg-slate-900/40 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:bg-slate-800/50 transition-all duration-300">
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

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 dark:text-gray-400">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-900/40 rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md dark:hover:bg-slate-800/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                {categoryIndex % 3 === 0 && <Code2 size={20} className="mr-2 text-blue-600 dark:text-blue-400" />}
                {categoryIndex % 3 === 1 && <Database size={20} className="mr-2 text-purple-600 dark:text-purple-400" />}
                {categoryIndex % 3 === 2 && <Cpu size={20} className="mr-2 text-emerald-600 dark:text-emerald-400" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-600/20 dark:to-purple-600/20 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-400/30 transition-all hover:border-blue-400 dark:hover:border-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
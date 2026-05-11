import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

const Skills = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">My technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm"
            >
              <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-400/30"
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

export default Skills;
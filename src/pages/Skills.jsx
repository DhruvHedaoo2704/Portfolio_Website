import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

const barColors = [
  'bg-blue-500',
  'bg-pink-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-teal-500',
];

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
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">{category}</h2>
              <div className="space-y-5">
                {skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-slate-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-gray-700">
                      <motion.div
                        className={`${barColors[skillIndex % barColors.length]} h-2.5 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + (skillIndex * 0.1) }}
                      />
                    </div>
                  </div>
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
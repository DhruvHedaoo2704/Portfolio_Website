import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h1>
          <p className="text-xl text-gray-400">My technical expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">{category}</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${category}-${skill}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.span
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white text-sm font-medium rounded-full border border-blue-400/30 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                    
                    {/* Tooltip */}
                    {hoveredSkill === `${category}-${skill}` && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg border border-white/20 whitespace-nowrap z-10"
                      >
                        <div className="text-center">
                          <div className="font-medium">{skill}</div>
                          <div className="text-gray-300">{category}</div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">7+</h3>
            <p className="text-gray-400">Programming Languages</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">15+</h3>
            <p className="text-gray-400">Frameworks & Libraries</p>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
            <p className="text-gray-400">Tools & Technologies</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
// src/pages/Achievements.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, Building } from 'lucide-react';
import { achievementsData } from '../data';

const Achievements = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Achievements</h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">Recognition and accomplishments</p>
        </motion.div>

        {/* Competitive Achievements */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Trophy className="text-yellow-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">Competitive Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.competitive.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <Trophy className="text-yellow-500 group-hover:scale-110 transition-transform" size={24} />
                  <span className="text-xs text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-full">
                    {achievement.organization}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <Award className="text-blue-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">Professional Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group shadow-sm"
              >
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-blue-500 group-hover:scale-110 transition-transform" size={20} />
                  <div className="flex items-center text-xs text-slate-500 dark:text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                
                <div className="flex items-center text-sm text-slate-600 dark:text-gray-300">
                  <Building size={14} className="mr-2" />
                  {cert.issuer}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Achievements;
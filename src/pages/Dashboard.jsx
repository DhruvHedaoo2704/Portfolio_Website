// dhruvhedaoo2704/portfolio_website/Portfolio_Website-dcee0f04d1bd90fce2e157f1eba91c1ef20070c7/pages/Dashboard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import { personalInfo, aboutData, projectsData, achievementsData } from '../data';


const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>
          <div className="text-xl md:text-2xl font-medium text-slate-700 dark:text-gray-300 mb-6">
            <Typewriter words={personalInfo.animatedTitles} speed={100} delay={2000} />
          </div>
          <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 font-semibold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-slate-300 dark:border-white/20"
          >
            Download Resume
            <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white dark:bg-white/5 shadow-md rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{projectsData.length}+</h3>
            <p className="text-slate-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="p-6 bg-white dark:bg-white/5 shadow-md rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">8.80</h3>
            <p className="text-slate-600 dark:text-gray-400">{aboutData.education.cgpa}</p>
          </div>
          <div className="p-6 bg-white dark:bg-white/5 shadow-md rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{achievementsData.certifications.length + achievementsData.academicCredentials.length + achievementsData.extraCurricular.length + achievementsData.participation.length}+</h3>
            <p className="text-slate-600 dark:text-gray-400">Achievements</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
// src/pages/Achievements.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Calendar, Building, Users, X } from "lucide-react";
import { achievementsData } from "../data";

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  // Check if file is PDF
  const isPDF = (url) => url && url.toLowerCase().endsWith('.pdf');

  // Check if file is an image
  const isImage = (url) => url && /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(url);

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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400">
            Recognition and accomplishments
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <Award className="text-blue-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
              Professional Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 group shadow-sm cursor-pointer"
                onClick={() => openModal(cert)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award
                    className="text-blue-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
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

        <br />
        <br />

        {/* Academic Credentials */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center mb-8">
            <Award className="text-green-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
              Academic Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.academicCredentials.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-green-400/30 transition-all duration-300 group shadow-sm cursor-pointer"
                onClick={() => openModal(cert)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Award
                    className="text-green-500 group-hover:scale-110 transition-transform"
                    size={20}
                  />
                  <div className="flex items-center text-xs text-slate-500 dark:text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
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

        <br />
        <br />

        {/* Extra-Curricular Achievements */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Trophy className="text-yellow-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
              Extra-Curricular Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.extraCurricular.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm cursor-pointer"
                onClick={() => openModal(achievement)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Trophy
                    className="text-yellow-500 group-hover:scale-110 transition-transform"
                    size={24}
                  />
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



        {/* Participation Achievements */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Users className="text-teal-500 mr-3" size={28} />
            <h2 className="text-3xl font-semibold text-slate-800 dark:text-white">
              Participation Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.participation.map((participation, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 group shadow-sm cursor-pointer"
                onClick={() => openModal(participation)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Users
                    className="text-teal-500 group-hover:scale-110 transition-transform"
                    size={24}
                  />
                  <span className="text-xs text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/10 px-2 py-1 rounded-full">
                    {participation.organization}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {participation.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {participation.description}
                </p>
              </motion.div>

            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Certificate Display */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-[65vw] max-w-5xl max-h-[90vh] bg-white dark:bg-slate-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="relative flex-shrink-0 w-full border-b border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800 z-20 pt-6 pb-4 px-16">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white text-center">
                {selectedCert.title}
              </h3>
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 bg-slate-200/90 dark:bg-slate-700/90 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-full p-2 transition-colors shadow-sm"
            >
              <X size={24} />
            </button>

            {/* Scrollable Content */}
            <div className="p-6 md:p-8 overflow-y-auto w-full custom-scrollbar flex-1">
              <div className="flex flex-col gap-10 items-center w-full">
                {(Array.isArray(selectedCert.imageUrl) ? selectedCert.imageUrl : [selectedCert.imageUrl]).map((url, idx) => (
                  <div key={idx} className="w-full flex justify-center p-2 md:p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                    {url?.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={`${url}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-[70vh] border-0 rounded-lg shadow-lg bg-white"
                        title={`${selectedCert.title} - part ${idx + 1}`}
                        style={{ pointerEvents: 'auto' }}
                      />
                    ) : (
                      <img
                        src={url}
                        alt={`${selectedCert.title} - part ${idx + 1}`}
                        className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-lg bg-white/5"
                        onContextMenu={(e) => e.preventDefault()} // Disable right-click for images
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Achievements;


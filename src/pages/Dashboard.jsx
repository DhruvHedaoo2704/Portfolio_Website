import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import Typewriter from '../components/Typewriter';
import { personalInfo, aboutData, projectsData, skillsData, experienceData } from '../data';

const Dashboard = () => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  // Calculate experience stats
  const totalExperiences = experienceData.length;
  const leadershipRoles = experienceData.filter(exp => exp.type === 'Leadership').length;
  const technicalRoles = experienceData.filter(exp => exp.type === 'Experience').length;
  const yearsExperience = new Date().getFullYear() - 2023;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4">
              Hello,
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              I'm {personalInfo.name}
            </h2>
            <div className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-gray-300 mb-6 h-12">
              <Typewriter words={personalInfo.animatedTitles} speed={100} delay={2000} />
            </div>
            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/about"
              className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              Know More
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center px-8 py-4 bg-white dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-slate-300 dark:border-white/20"
            >
              Download Resume
              <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{yearsExperience}+</div>
              <p className="text-slate-600 dark:text-gray-400 text-sm">Years Exp.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{projectsData.length}+</div>
              <p className="text-slate-600 dark:text-gray-400 text-sm">Projects</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{Object.keys(skillsData).length}+</div>
              <p className="text-slate-600 dark:text-gray-400 text-sm">Skill Categories</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-slate-200 dark:border-white/10 backdrop-blur">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{leadershipRoles}+</div>
              <p className="text-slate-600 dark:text-gray-400 text-sm">Leadership</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-gray-400">My technical toolkit and areas of expertise.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="
                  bg-white dark:bg-white/5
                  backdrop-blur-sm
                  rounded-2xl
                  p-8
                  border border-slate-200 dark:border-white/10
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Category Heading */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  {category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: skillIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-600/20 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200 dark:border-blue-400/30"
                    >
                      {typeof skill === "string" ? skill : skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Title and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <p className="text-slate-600 dark:text-gray-400 mb-8 leading-relaxed">
                A journey through my professional career, where I've had the privilege to work with amazing teams and build impactful solutions.
              </p>

              {/* Career at a Glance */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl border border-slate-700 dark:border-slate-700">
                <h3 className="text-xl font-bold text-white mb-6">Career at a Glance</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5M14 4.5v5M11.5 6.5h5M11.5 11h5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">4+</p>
                      <p className="text-sm text-slate-400">Years Exp.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{totalExperiences}+</p>
                      <p className="text-sm text-slate-400">Projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 7H7v6h6V7z M7 4h6v2H7V4zm0 10h6v2H7v-2z M3 7h2v6H3V7zm12 0h2v6h-2V7z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">10+</p>
                      <p className="text-sm text-slate-400">Technologies</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-amber-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">8.8</p>
                      <p className="text-sm text-slate-400">CGPA</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 italic mt-6 pt-6 border-t border-slate-700">
                  "Building resilience through code, and scalability through architecture."
                </p>
              </div>
            </motion.div>

            {/* Right Side - Timeline */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

                {/* Experience Cards */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6 lg:pl-8"
                >
                  {experienceData.slice(0, visibleCount).map((exp, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      onMouseEnter={() => setExpandedExperience(idx)}
                      onMouseLeave={() => setExpandedExperience(null)}
                    >
                      {/* Timeline Dot */}
                      <div className="hidden lg:flex absolute -left-5 mt-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-slate-50 dark:border-slate-900 items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        </svg>
                      </div>

                      <div
                        className="w-full bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800 dark:to-slate-900 border border-slate-700 dark:border-slate-700 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group cursor-default"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                            <p className="text-slate-400 font-medium">{exp.company}</p>
                          </div>
                          <span className="text-blue-400 font-semibold whitespace-nowrap ml-4">{exp.duration}</span>
                        </div>

                        {expandedExperience !== idx && exp.description && (
                          <p className="text-sm text-slate-400 mt-2 line-clamp-2">{exp.description}</p>
                        )}

                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: expandedExperience === idx ? 1 : 0, height: expandedExperience === idx ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {expandedExperience === idx && (
                            <div className="mt-4 pt-4 border-t border-slate-700">
                              <p className="text-slate-300 mb-4">{exp.description}</p>
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map((achievement, aidx) => (
                                    <li key={aidx} className="flex items-start text-sm text-slate-400">
                                      <span className="text-blue-400 mr-2 flex-shrink-0">•</span>
                                      <span>{achievement}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Show More Button */}
                {visibleCount < totalExperiences && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 flex justify-center lg:justify-end"
                  >
                    <button
                      onClick={() => setVisibleCount(prev => Math.min(prev + 5, totalExperiences))}
                      className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
                    >
                      Show More
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {visibleCount > 5 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 flex justify-center lg:justify-end"
                  >
                    <button
                      onClick={() => setVisibleCount(5)}
                      className="text-slate-400 hover:text-slate-300 font-medium text-sm transition-colors"
                    >
                      Show Less
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognitions Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Awards & Recognitions
            </h2>
            <p className="text-slate-600 dark:text-gray-400">Notable achievements and recognitions throughout my journey.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 p-8 rounded-xl border border-amber-200 dark:border-amber-800/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                Industry Certifications
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-amber-600 mr-3 flex-shrink-0">✓</span>
                  Full-Stack Development Expertise
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-amber-600 mr-3 flex-shrink-0">✓</span>
                  Cloud & DevOps Knowledge
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-amber-600 mr-3 flex-shrink-0">✓</span>
                  AI/ML Development Skills
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-amber-600 mr-3 flex-shrink-0">✓</span>
                  Mobile Development Proficiency
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl border border-blue-200 dark:border-blue-800/50">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                Professional Achievements
              </h3>
              <ul className="space-y-2">
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                  Campus Ambassador (Multiple Organizations)
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                  Technical Lead & Innovator
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                  NSS Team Lead & Community Service
                </li>
                <li className="text-slate-700 dark:text-gray-300 flex items-start">
                  <span className="text-blue-600 mr-3 flex-shrink-0">✓</span>
                  Floor Representative & Leadership
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Send Me an Email
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-white dark:bg-white/10 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/20 font-semibold rounded-full transition-all duration-300 border border-slate-300 dark:border-white/20"
              >
                Connect on LinkedIn
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
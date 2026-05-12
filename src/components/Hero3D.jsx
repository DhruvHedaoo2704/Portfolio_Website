import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundEngine } from './BackgroundEngine';
import { personalInfo, skillsData } from '../data';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'Web',
    title: personalInfo.animatedTitles[0] || 'Full-Stack Developer',
    tech: skillsData["Web Technologies"] ? skillsData["Web Technologies"].slice(0, 4).join(' | ') : 'React.js | Node.js | MongoDB | Express.js',
    desc: 'Architecting high-performance scalable web applications with responsive UI and robust backend systems.'
  },
  {
    id: 'Mobile',
    title: personalInfo.animatedTitles[1] || 'Android Developer',
    tech: skillsData["Mobile Development"] ? skillsData["Mobile Development"].slice(0, 4).join(' | ') : 'Java | Kotlin | Android Studio',
    desc: 'Developing native mobile applications with intuitive interfaces and seamless API integration.'
  },
  {
    id: 'AI',
    title: personalInfo.animatedTitles[2] || 'AI & ML Enthusiast',
    tech: skillsData["AI & ML"] ? skillsData["AI & ML"].slice(0, 4).join(' | ') : 'Python | TensorFlow | PyTorch | Machine Learning',
    desc: 'Specializing in predictive modeling, computer vision, and privacy-preserving AI systems.'
  },
  {
    id: 'Software',
    title: personalInfo.animatedTitles[3] || 'Software Engineer',
    tech: skillsData["Programming Languages"] ? skillsData["Programming Languages"].slice(0, 4).join(' | ') : 'C++ | Java | DSA',
    desc: 'Solving complex computational problems and building resilience through scalable architecture.'
  }
];

const getGlowStyles = (index) => {
  const zone = slides[index].id;
  if (zone === 'Web') {
    return 'bg-cyan-600 border-cyan-400 shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]';
  } else if (zone === 'Mobile') {
    return 'bg-emerald-600 border-emerald-400 shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]';
  } else if (zone === 'AI') {
    return 'bg-purple-600 border-purple-400 shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]';
  } else {
    return 'bg-amber-600 border-amber-400 shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]';
  }
};

const getBlurStyles = (index) => {
  const zone = slides[index].id;
  if (zone === 'Web') return 'bg-cyan-500/20';
  if (zone === 'Mobile') return 'bg-emerald-500/20';
  if (zone === 'AI') return 'bg-purple-500/20';
  return 'bg-amber-500/20';
};

const getBackgroundGradient = (index) => {
  const zone = slides[index].id;
  if (zone === 'Web') {
    return 'bg-gradient-to-br from-cyan-900/30 via-slate-900 to-slate-950';
  } else if (zone === 'Mobile') {
    return 'bg-gradient-to-br from-emerald-900/30 via-slate-900 to-slate-950';
  } else if (zone === 'AI') {
    return 'bg-gradient-to-br from-purple-900/30 via-slate-900 to-slate-950';
  } else {
    return 'bg-gradient-to-br from-amber-900/30 via-slate-900 to-slate-950';
  }
};

export const Hero3D = () => {
  const [index, setIndex] = useState(0);

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      animate={{ backgroundImage: undefined }}
      transition={{ duration: 0.8 }}
      className={`relative w-full min-h-screen flex flex-col justify-center overflow-hidden ${getBackgroundGradient(index)} transition-all duration-1000`}
    >
      {/* The Dynamic 3D Background */}
      <BackgroundEngine currentZone={slides[index].id} />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full transition-colors duration-1000 ${getBlurStyles(index)} transition-colors duration-1000`}
        style={{ filter: 'blur(10px)' }}
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5
        }}
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full transition-colors duration-1000 ${getBlurStyles(index)} transition-colors duration-1000`}
        style={{ filter: 'blur(10px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-20 pb-16">

        {/* Left Side Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2"
          >
            Hello,
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8"
          >
            I'm {personalInfo.name}
          </motion.h2>

          <div className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50 w-full shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].id + index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="min-h-[160px]"
              >
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{slides[index].title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-mono font-semibold mb-4 tracking-wide">{slides[index].tech}</p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{slides[index].desc}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
              <div className="flex gap-4">
                <button onClick={() => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button onClick={() => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-blue-500/30"
              >
                Know More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="/certifications/resume.pdf"
              download
              className="group inline-flex items-center px-8 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-slate-300 dark:border-slate-600 shadow-xl"
            >
              Download Resume
              <Download size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image with Glow */}
        <div className="relative mt-12 lg:mt-0 flex justify-center w-full lg:w-2/5">
          <div className={`absolute inset-0 rounded-[6rem] blur-3xl transition-colors duration-1000 ${getBlurStyles(index)}`} />

          <div className={`relative w-64 h-[22rem] md:w-80 md:h-[28rem] rounded-[6rem] flex items-center justify-center border-4 transition-all duration-1000 overflow-hidden ${getGlowStyles(index)}`}>
            <img
              src="/certifications/profile1.png"
              alt={personalInfo.name}
              className="w-full h-full object-cover relative z-0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero3D;

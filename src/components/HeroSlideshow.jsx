import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Full-Stack Developer",
    techStack: "React.js | Node.js | MongoDB | Express.js",
    description: "Architecting high-performance scalable web applications. Proficient in modern frontend and backend technologies, focusing on responsive UI, API design, and data integrity."
  },
  {
    id: 2,
    title: "Android Developer",
    techStack: "Java | Kotlin | Android Studio | SQLite",
    description: "Developing native mobile applications with intuitive interfaces. Focused on robust offline storage, seamless API integration, and clean code architecture."
  },
  {
    id: 3,
    title: "AI/ML Developer",
    techStack: "Python | TensorFlow | PyTorch | Scikit-learn",
    description: "Creating intelligent solutions using predictive modeling and data analysis. Experienced in building synthetic data pipelines and computer vision applications."
  },
  {
    id: 4,
    title: "Software Engineer",
    techStack: "C++ | Java | Data Structures | Algorithms",
    description: "Solving complex computational problems and participating in competitive programming. Dedicated to building resilience through code and scalability through architecture."
  }
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-2xl mt-8 flex items-center z-10">
      {/* Left Arrow */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 -ml-4 md:-ml-6 z-20 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Slideshow Card */}
      <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50 p-8 md:p-10 overflow-hidden relative min-h-[300px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
              {slides[current].title}
            </h3>
            <div className="text-blue-600 dark:text-blue-400 font-bold mb-6 tracking-wide text-sm md:text-base">
              {slides[current].techStack}
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              {slides[current].description}
            </p>
            
            <div className="flex justify-start">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition-all shadow-md hover:shadow-blue-500/30 hover:scale-105"
              >
                Know More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current 
                  ? 'w-6 bg-blue-600 dark:bg-blue-500' 
                  : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button 
        onClick={nextSlide}
        className="absolute right-0 -mr-4 md:-mr-6 z-20 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSlideshow;

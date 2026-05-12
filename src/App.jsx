import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import NetworkBackground from './components/NetworkBackground';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Contact = lazy(() => import('./pages/Contact'));

const AnimatedRoutes = () => {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative bg-slate-100 text-slate-800 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 dark:text-white transition-colors duration-300">
          {/* Global Wallpaper */}
          <NetworkBackground />
          
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
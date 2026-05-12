// dhruvhedaoo2704/portfolio_website/Portfolio_Website-dcee0f04d1bd90fce2e157f1eba91c1ef20070c7/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Home, User, Code, Briefcase, Folder, Award, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: User },
    { to: '/skills', label: 'Skills', icon: Code },
    { to: '/experience', label: 'Experience', icon: Briefcase },
    { to: '/projects', label: 'Projects', icon: Folder },
    { to: '/achievements', label: 'Achievements', icon: Award },
    { to: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/30 backdrop-blur-lg border-b border-slate-200 dark:border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="text-3xl font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors tracking-tight">
            DH
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 text-base font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-gray-300'
                  }`
                }
              >
                <Icon size={20} strokeWidth={2.5} />
                {label}
              </NavLink>
            ))}
            
            {/* Divider */}
            <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 mx-3"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700/50 transition-colors"
            >
              {isDark ? <Moon size={20} className="text-blue-400" /> : <Sun size={22} className="text-amber-500" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 border border-transparent dark:border-slate-700/50 transition-colors"
            >
              {isDark ? <Moon size={20} className="text-blue-400" /> : <Sun size={22} className="text-amber-500" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-slate-200/60 dark:bg-white/10 hover:bg-slate-300/60 dark:hover:bg-white/20 transition-colors text-slate-800 dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-black/50 backdrop-blur-lg rounded-lg mt-2 border border-slate-200 dark:border-white/20">
              {navLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-3.5 px-4 py-3 rounded-md text-lg font-semibold transition-colors ${
                      isActive ? 'text-blue-600 dark:text-blue-400 bg-slate-200 dark:bg-white/10' : 'text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={22} strokeWidth={2.5} />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
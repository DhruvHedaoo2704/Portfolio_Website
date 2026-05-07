import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github size={20} className="text-white" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin size={20} className="text-white" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail size={20} className="text-white" />
            </a>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span>by {personalInfo.name}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
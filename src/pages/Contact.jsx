import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data';
import Chatbot from '../components/Chatbot';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d19oblh',
        'template_29c2vlr',
        form.current,
        'Myq7D5Zv4qaQwyRbQ'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message');
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h1>

          <p className="text-xl text-slate-600 dark:text-gray-400">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10">

            <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center">
                <Mail className="text-blue-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-slate-800 dark:text-white">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="text-purple-500 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-slate-800 dark:text-white">
                    Neemuch, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Linkedin className="text-blue-500 mr-4" />
                <span className="text-slate-800 dark:text-white">
                  LinkedIn
                </span>
              </a>

              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="text-purple-500 mr-4" />
                <span className="text-slate-800 dark:text-white">
                  GitHub
                </span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-200 dark:border-white/10">

            <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
              Send a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 outline-none"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 outline-none"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
                className="w-full p-4 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/10 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 rounded-xl font-semibold"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

      <Chatbot />
    </motion.div>
  );
};

export default Contact;
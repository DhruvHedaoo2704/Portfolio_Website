import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: 1,
                icon: Mail,
                title: "Email",
                subtitle: "Write to me",
                actionText: "Send Email",
                href: `mailto:${personalInfo.email}`,
                colorClass: "bg-red-50 dark:bg-red-900/20",
                iconColorClass: "text-red-600 dark:text-red-400",
              },
              {
                id: 2,
                icon: Phone,
                title: "Call",
                subtitle: "Talk to me",
                actionText: "Call Now",
                href: "tel:9399239147",
                colorClass: "bg-green-50 dark:bg-green-900/20",
                iconColorClass: "text-green-600 dark:text-green-400",
              },
              {
                id: 3,
                icon: Linkedin,
                title: "LinkedIn",
                subtitle: "Connect with me",
                actionText: "Connect",
                href: personalInfo.socialLinks.linkedin,
                colorClass: "bg-blue-50 dark:bg-blue-900/20",
                iconColorClass: "text-blue-600 dark:text-blue-400",
              },
              {
                id: 4,
                icon: Github,
                title: "GitHub",
                subtitle: "Check my repos",
                actionText: "Follow",
                href: personalInfo.socialLinks.github,
                colorClass: "bg-purple-50 dark:bg-purple-900/20",
                iconColorClass: "text-purple-600 dark:text-purple-400",
              },
              {
                id: 5,
                icon: MapPin,
                title: "Location",
                subtitle: "Neemuch, MP",
                actionText: "View Map",
                href: "https://www.google.com/maps/place/Dhruv+Hedaoo/@24.4658637,74.8819564,17z/data=!3m1!4b1!4m6!3m5!1s0x39667500644ea899:0xa202f744f6c929d0!8m2!3d24.4658637!4d74.8845313!16s%2Fg%2F11xf_00t4z?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D",
                colorClass: "bg-orange-50 dark:bg-orange-900/20",
                iconColorClass: "text-orange-600 dark:text-orange-400",
                colSpan: "sm:col-span-2"
              }
            ].map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.id}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all group ${contact.colSpan || ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${contact.colorClass}`}>
                    <Icon className={contact.iconColorClass} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-1">{contact.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{contact.subtitle}</p>
                  <div className="flex items-center text-sm font-medium mt-auto text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {contact.actionText} <Send size={16} className="ml-2" />
                  </div>
                </a>
              );
            })}
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
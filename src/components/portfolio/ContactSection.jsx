import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const email = 'justinbaja07@gmail.com';
  const subject = encodeURIComponent("Let's work together");

  // Body is intentionally left empty → user starts with a clean compose window
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-400/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Have a project<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">in mind?</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            I'm currently available for freelance work. If you have a project that needs a great website, let's talk.
          </p>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white text-[#0a0a0a] px-10 py-4 rounded-full font-medium hover:bg-amber-400 active:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-400/20"
          >
            <Mail className="w-5 h-5" />
            <span>justinbaja07@gmail.com</span>
            <ArrowUpRight 
              className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </a>

          <p className="text-white/40 text-sm mt-4">
            Opens Gmail compose (new tab) with subject ready
          </p>
        </motion.div>
      </div>
    </section>
  );
}
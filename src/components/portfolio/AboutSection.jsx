import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { icon: Code, title: 'Development', desc: 'Clean, performant code that scales' },
    { icon: Palette, title: 'Design', desc: 'Pixel-perfect, modern interfaces' },
    { icon: Zap, title: 'Performance', desc: 'Fast-loading, optimized sites' },
    { icon: Globe, title: 'Full-Stack', desc: 'End-to-end web solutions' },
  ];

  return (
    <section id="about" className="relative bg-[#0f0f0f] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Building the web,<br />
              <span className="text-white/40">one pixel at a time.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-12 max-w-2xl mx-auto">
              I'm Justin Baja, a teenage web developer, passionate about creating beautiful, functional websites that make a real impact. I focus on clean design, smooth user experiences, and code that actually performs. From concept to launch, I handle every part of the process.
            </p>

            {/* Skill cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {skills.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-[#1a1a1a] border border-white/5 rounded-xl p-5 hover:border-amber-400/30 transition-colors duration-300 text-center">
                  <Icon className="w-5 h-5 text-amber-400 mb-3 mx-auto" />
                  <p className="text-white text-sm font-medium">{title}</p>
                  <p className="text-white/40 text-xs mt-1.5">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
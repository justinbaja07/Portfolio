import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ heroBg }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Web Developer & Designer
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight leading-[0.9]">
            Justin
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              Bajakjian
            </span>
          </h1>
          <p className="mt-8 text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
            I craft clean, high-performance websites that look incredible and convert visitors into customers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#work" className="bg-white text-[#0a0a0a] px-8 py-3.5 rounded-full font-medium hover:bg-amber-400 transition-all duration-300 text-sm tracking-wide">
            View My Work
          </a>
          <a href="#contact" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-medium hover:border-white/50 transition-all duration-300 text-sm tracking-wide">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="w-5 h-5 text-white/30" />
      </motion.div>
    </section>
  );
}
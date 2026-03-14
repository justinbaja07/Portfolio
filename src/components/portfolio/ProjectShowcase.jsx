import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

// ← Import your NEW screenshot here (adjust path/filename as needed)
import newSaviraScreenshot from '@/assets/screenshots/savira-new-homepage.png';  
// or: import newSaviraScreenshot from '/public/screenshots/savira-updated.png';
// or: import newSaviraScreenshot from '../assets/savira-home-2025.png';

export default function ProjectShowcase() {
  return (
    <section id="work" className="relative bg-[#0a0a0a] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-3">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Project
          </h2>
        </motion.div>

        {/* Savira Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <a
            href="https://savira.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#111]">
              {/* Browser chrome mockup */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#0a0a0a] rounded-md px-4 py-1 text-xs text-white/40 flex items-center gap-2">
                    <span>savira.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Updated Screenshot – using the new import */}
              <div className="relative overflow-hidden">
                <img
                  src={newSaviraScreenshot}
                  alt="Savira - Stop Paying For Air (Updated)"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>

              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Web App</span>
                      <span className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Product Design</span>
                      <span className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full border border-white/10">Full-Stack</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Savira</h3>
                    <p className="text-white/50 max-w-lg text-sm md:text-base leading-relaxed">
                      A consumer app that scans products to detect shrinkflation, compares prices across retailers, and tracks inflation over time. Free during beta with 700M+ barcodes indexed.
                    </p>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0a0a0a] transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Stats grid removed as per previous request */}
      </div>
    </section>
  );
}
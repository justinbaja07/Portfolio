import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

import newSaviraScreenshot from '@/assets/screenshots/savira-new-homepage.png';

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 tracking-tight">
            Featured Project
          </h2>
        </motion.div>

        {/* Savira Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <a
            href="https://savira.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#111] shadow-2xl shadow-black/30">
              {/* Browser chrome mockup */}
              <div className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#0a0a0a] rounded-md px-4 py-1 text-xs text-black flex items-center gap-2">
                    <span>savira.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden">
                <img
                  src={newSaviraScreenshot}
                  alt="Savira - Stop Paying For Air (Updated)"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Info section below – text now white */}
            <div className="mt-6 bg-[#111]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block border-b-4 border-amber-400 pb-1">
                    Savira
                  </h3>
                  <p className="text-white text-base md:text-lg leading-relaxed max-w-3xl">
                    A consumer app that scans products to detect shrinkflation, compares prices across retailers, and tracks inflation over time. Free during beta with 700M+ barcodes indexed.
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-amber-400 group-hover:border-amber-400 transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-[#0a0a0a] transition-colors duration-500" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
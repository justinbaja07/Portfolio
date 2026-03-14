import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Justin Bajakjian. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Twitter</a>
          <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">GitHub</a>
          <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
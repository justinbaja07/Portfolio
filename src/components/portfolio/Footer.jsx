import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Justin Baja. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
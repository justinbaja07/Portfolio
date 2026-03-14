import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white font-semibold tracking-tight text-lg">
          JB<span className="text-amber-400">.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              className="text-sm text-white/60 hover:text-white transition-colors duration-300 tracking-wide uppercase"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm bg-white text-[#0a0a0a] px-5 py-2 rounded-full font-medium hover:bg-amber-400 transition-colors duration-300"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 space-y-4">
          {links.map(l => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.id)}
              className="block text-white/70 hover:text-white text-lg"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="inline-block bg-white text-[#0a0a0a] px-5 py-2 rounded-full font-medium text-sm mt-2"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
}
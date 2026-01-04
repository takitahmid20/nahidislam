import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="tracking-wider text-white">NAHID ISLAM</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#vision" className="text-gray-300 hover:text-white transition-colors">
              Vision
            </a>
            <a href="#biography" className="text-gray-300 hover:text-white transition-colors">
              Biography
            </a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors">
              Events
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
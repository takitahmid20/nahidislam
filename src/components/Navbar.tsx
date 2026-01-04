import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const menuItems = [
  { labelKey: 'nav.vision', href: '/#vision', isRoute: false },
  { labelKey: 'nav.platform', href: '/#platform', isRoute: false },
  { labelKey: 'nav.about', href: '/about', isRoute: true },
  { labelKey: 'nav.news', href: '/#news', isRoute: false },
  { labelKey: 'nav.contact', href: '/#contact', isRoute: false }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span className="text-white text-lg sm:text-xl tracking-wider font-bold">NI</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-slate-800 text-sm tracking-wider leading-tight font-semibold">
                  {language === 'en' ? 'NAHID ISLAM' : 'নাহিদ ইসলাম'}
                </div>
                <div className="text-emerald-600 text-xs tracking-[0.2em] font-medium">
                  {language === 'en' ? 'NCP CONVENER' : 'এনসিপি আহবায়ক'}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Right Side */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {menuItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={index}
                  to={item.href}
                  className="text-slate-600 hover:text-emerald-600 tracking-wide text-sm lg:text-base transition-colors relative group font-medium"
                >
                  {t(item.labelKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className="text-slate-600 hover:text-emerald-600 tracking-wide text-sm lg:text-base transition-colors relative group font-medium"
                >
                  {t(item.labelKey)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" />
                </a>
              )
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-xs tracking-wide transition-all ${
                  language === 'en'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1.5 rounded-full text-xs tracking-wide transition-all ${
                  language === 'bn'
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                বাং
              </button>
            </div>
            
            <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-300 font-semibold">
              {t('nav.volunteer')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-slate-100 border border-emerald-200 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-emerald-200/50">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              item.isRoute ? (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-600 hover:text-emerald-600 tracking-wide text-base py-2 transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-600 hover:text-emerald-600 tracking-wide text-base py-2 transition-colors"
                >
                  {t(item.labelKey)}
                </a>
              )
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 bg-slate-100 border border-emerald-200 rounded-full p-1 w-fit">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  language === 'en'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  language === 'bn'
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                বাং
              </button>
            </div>
            
            <button className="w-full mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white tracking-wide shadow-sm hover:shadow-md transition-all">
              {t('nav.volunteer')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
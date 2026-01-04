import React, { useState, useEffect } from 'react';
import { ArrowRight, Target, TrendingUp, Facebook, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const candidateImage = '/Nahid-Islam.png';
const backgroundImages = ['/bg.png', '/bg2.png', '/bg3.png'];

export function HeroSection() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden bg-slate-50">
      {/* Animated Background Image with Crossfade - No Flash */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div 
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: [1, 1.05, 1],
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5 },
              scale: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          ></motion.div>
        </AnimatePresence>
      </div>
      
      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20">
        {/* Top Left - Tagline */}
        <motion.div 
          className="absolute top-24 sm:top-28 left-4 sm:left-8 lg:left-20 z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center gap-2 text-emerald-600 tracking-wider text-xs sm:text-sm"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Target className="size-4 sm:size-5" />
            <span className="hidden sm:inline">{t('hero.tagline')}</span>
            <span className="sm:hidden">{t('hero.tagline.mobile')}</span>
          </motion.div>
        </motion.div>

        {/* Left Side - Name - Behind the image */}
        <div className="absolute left-4 sm:left-8 lg:left-20 top-32 sm:top-40 lg:top-1/2 lg:-translate-y-32 z-0">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.85]">
            <motion.div 
              className="text-emerald-600 font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {t('hero.name.first')}
            </motion.div>
            <motion.div 
              className="text-slate-800 font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {t('hero.name.last')}
            </motion.div>
          </h1>
        </div>

        {/* Center - Large Candidate Image - Bottom Aligned */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-[70vh] sm:h-[85vh] lg:h-[95vh] z-10"
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src={candidateImage}
            alt="Nahid Islam"
            className="relative w-full h-full object-cover object-top"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Top Right - Vision Link */}
        <motion.div 
          className="absolute top-24 sm:top-28 right-4 sm:right-8 lg:right-20 z-20 max-w-[180px] sm:max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#vision" className="flex items-center gap-2 text-slate-800 hover:text-emerald-600 transition-colors group text-sm sm:text-base">
            <span className="tracking-wide hidden sm:inline">{t('hero.vision.link')}</span>
            <span className="tracking-wide sm:hidden">{t('hero.vision.link.mobile')}</span>
            <ArrowRight className="size-4 sm:size-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <motion.p 
            className="text-slate-600 mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {t('hero.vision.subtitle')}
          </motion.p>
        </motion.div>

        {/* Bottom Left - Circular Badge */}
        <motion.div 
          className="hidden sm:block absolute bottom-4 left-4 sm:bottom-12 sm:left-8 lg:bottom-20 lg:left-20 z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.9, type: "spring", stiffness: 100 }}
        >
          <motion.div 
            className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full border-4 border-slate-900 bg-white flex items-center justify-center shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center p-4">
              <div className="text-slate-900 text-xs sm:text-sm font-medium mb-2">{t('hero.badge.join')}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-3">{t('hero.badge.movement')}</div>
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900 flex items-center justify-center shadow-md mx-auto"
                whileHover={{ scale: 1.1, x: 2 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="size-5 sm:size-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Candidate Info - Mobile: Top Right, Desktop: Bottom Right */}
        <motion.div 
          className="absolute bottom-auto top-20 right-4 sm:top-auto sm:bottom-20 sm:right-8 lg:bottom-32 lg:right-32 z-20 max-w-[200px] sm:max-w-sm lg:max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="space-y-3 sm:space-y-6">
            {/* Description */}
            <p className="text-sm sm:text-xl lg:text-3xl text-slate-800 leading-tight">
              <motion.span 
                className="text-emerald-600 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {t('hero.description.student')}
              </motion.span>{' '}
              <motion.span 
                className="text-slate-800 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {t('hero.description.leader')}
              </motion.span>{' '}
              <motion.span 
                className="text-slate-600 hidden sm:inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                {t('hero.description.candidate')}
              </motion.span>
            </p>
            
            {/* Divider */}
            <motion.div 
              className="h-px bg-emerald-600 w-2/3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              style={{ transformOrigin: "left" }}
            />
            
            {/* Constituency Badge */}
            <motion.div 
              className="space-y-1 sm:space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="text-emerald-400 tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
                {t('hero.independent')}
              </div>
              <div className="text-2xl sm:text-4xl lg:text-6xl text-emerald-600 tracking-tight font-bold">
                {t('hero.constituency')}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Social Media Icons - Hidden on mobile */}
        <motion.div 
          className="hidden sm:flex absolute right-4 sm:right-8 lg:right-20 top-1/2 -translate-y-1/2 flex-col space-y-3 sm:space-y-4 z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { Icon: Facebook, bg: "bg-blue-600", hover: "hover:bg-blue-700", fill: true },
            { Icon: Twitter, bg: "bg-slate-800", hover: "hover:bg-blue-400" },
            { Icon: Instagram, bg: "bg-slate-800", hover: "hover:bg-pink-600" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${social.bg} ${social.hover} flex items-center justify-center transition-colors border border-white/20`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <social.Icon className="size-4 sm:size-5 text-white" fill={social.fill ? "white" : "none"} />
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile Social Icons - Bottom Center */}
        <motion.div 
          className="sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { Icon: Facebook, bg: "bg-blue-600", hover: "hover:bg-blue-700", fill: true },
            { Icon: Twitter, bg: "bg-slate-800", hover: "hover:bg-blue-400" },
            { Icon: Instagram, bg: "bg-slate-800", hover: "hover:bg-pink-600" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className={`w-10 h-10 rounded-full ${social.bg} ${social.hover} flex items-center justify-center transition-colors border border-white/20`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
            >
              <social.Icon className="size-4 text-white" fill={social.fill ? "white" : "none"} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
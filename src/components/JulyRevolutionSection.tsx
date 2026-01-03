import React from 'react';
import { Flame, BookOpen, Users, Shield, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export function JulyRevolutionSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <Flame className="size-6 text-emerald-600" />
          <span className="text-emerald-600 tracking-[0.3em] text-sm uppercase">
            {t('july.label')}
          </span>
          <div className="h-px bg-emerald-600 flex-1" />
        </motion.div>

        {/* Main Heading - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 sm:mb-24">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] mb-6">
              <span className="text-slate-900">{t('july.title.the')}</span>
              <br />
              <span className="text-emerald-600">{t('july.title.architect')}</span>
              <br />
              <span className="text-green-600">{t('july.title.change')}</span>
            </h2>

            <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
              {t('july.subtitle')}
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Users className="size-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 text-xl mb-2">{t('july.role.title')}</h3>
                  <p className="text-slate-600 text-sm">{t('july.role.desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="size-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 text-xl mb-2">{t('july.movement.title')}</h3>
                  <p className="text-slate-600 text-sm">{t('july.movement.desc')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Book Section - Featured */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="size-8 text-emerald-600" />
                  <span className="text-emerald-600 tracking-widest text-sm uppercase">
                    {t('july.book.label')}
                  </span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
                  {t('july.book.title')}
                </h3>
                
                <p className="text-slate-600 text-lg sm:text-xl mb-8 leading-relaxed">
                  {t('july.book.desc')}
                </p>

                <motion.button
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('july.book.cta')}
                </motion.button>
              </div>

              <div className="lg:col-span-5">
                <motion.div
                  className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-md"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote className="size-12 text-emerald-600/30 mb-4" />
                  <blockquote className="text-slate-900 text-xl sm:text-2xl italic leading-relaxed mb-4">
                    "{t('july.quote.text')}"
                  </blockquote>
                  <cite className="text-emerald-600 not-italic text-sm tracking-wider">
                    — {t('july.quote.author')}
                  </cite>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Struggle Timeline */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-12 text-center">
            {t('july.struggle.title')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['detention', 'torture', 'surveillance', 'liberation'].map((item, index) => (
              <motion.div
                key={item}
                className="bg-white border border-emerald-300 rounded-2xl p-6 backdrop-blur-sm shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(5, 150, 105, 0.5)' }}
              >
                <div className="text-5xl mb-4 text-emerald-600/20">0{index + 1}</div>
                <h4 className="text-slate-900 text-lg mb-2">{t(`july.struggle.${item}.title`)}</h4>
                <p className="text-slate-600 text-sm">{t(`july.struggle.${item}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { Rocket, Vote, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function FutureVisionSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Vote,
      titleKey: 'future.pillar1.title',
      descKey: 'future.pillar1.desc'
    },
    {
      icon: Users,
      titleKey: 'future.pillar2.title',
      descKey: 'future.pillar2.desc'
    },
    {
      icon: TrendingUp,
      titleKey: 'future.pillar3.title',
      descKey: 'future.pillar3.desc'
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="size-6 text-emerald-600" />
            <span className="text-emerald-600 tracking-[0.3em] text-sm uppercase">
              {t('future.label')}
            </span>
            <Sparkles className="size-6 text-emerald-600" />
          </div>

          <motion.h2
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-900">{t('future.title.the')}</span>
            <br />
            <span className="text-green-600">{t('future.title.next')}</span>{' '}
            <span className="text-emerald-600">{t('future.title.chapter')}</span>
          </motion.h2>

          <motion.p
            className="text-slate-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('future.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Vision Card */}
        <motion.div
          className="mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-lg">
            {/* Glow effect */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <motion.div
                  className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center mb-6"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Rocket className="size-10 text-white" />
                </motion.div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
                  {t('future.electoral.title')}
                </h3>

                <p className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-8">
                  {t('future.electoral.desc')}
                </p>

                <div className="flex flex-wrap gap-4">
                  <motion.button
                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('future.electoral.cta')}
                    <ArrowRight className="size-5" />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 border-2 border-emerald-600 rounded-full text-slate-900 tracking-wide hover:bg-emerald-50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('future.electoral.secondary')}
                  </motion.button>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    className="bg-white border border-emerald-300 rounded-xl p-6 backdrop-blur-sm shadow-md"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + item * 0.1 }}
                    whileHover={{ x: -5, borderColor: 'rgba(5, 150, 105, 0.5)' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-600 text-lg">0{item}</span>
                      </div>
                      <div>
                        <h4 className="text-slate-900 text-lg mb-1">
                          {t(`future.commitment.item${item}.title`)}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {t(`future.commitment.item${item}.desc`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 text-center mb-12">
            {t('future.pillars.title')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 group hover:border-emerald-500 transition-all duration-300 shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="size-8 text-white" />
                  </motion.div>

                  <h4 className="text-2xl text-slate-900 mb-4 leading-tight">
                    {t(pillar.titleKey)}
                  </h4>

                  <p className="text-slate-600 text-base leading-relaxed">
                    {t(pillar.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* People's Movement Quote */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
            <div className="text-7xl text-emerald-600/20 mb-4">"</div>
            <p className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed mb-6 max-w-4xl mx-auto">
              {t('future.movement.quote')}
            </p>
            <div className="h-px bg-emerald-600 w-48 mx-auto mb-4" />
            <p className="text-emerald-600 tracking-wider text-sm">
              {t('future.movement.author')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

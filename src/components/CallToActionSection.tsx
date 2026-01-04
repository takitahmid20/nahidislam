import React, { useState } from 'react';
import { Check, X, ArrowRight, Vote, Shield, Users, Trophy, AlertCircle, TrendingDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function CallToActionSection() {
  const { t } = useLanguage();
  const [hoveredSide, setHoveredSide] = useState<'yes' | 'no' | null>(null);

  const yesPoints = [
    { icon: Shield, textKey: 'cta.yes.point1' },
    { icon: Users, textKey: 'cta.yes.point2' },
    { icon: Trophy, textKey: 'cta.yes.point3' }
  ];

  const noPoints = [
    { icon: AlertCircle, textKey: 'cta.no.point1' },
    { icon: TrendingDown, textKey: 'cta.no.point2' },
    { icon: X, textKey: 'cta.no.point3' }
  ];

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-emerald-400/10"
          animate={{
            opacity: hoveredSide === 'yes' ? 0.25 : 0.10
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-red-400/10"
          animate={{
            opacity: hoveredSide === 'no' ? 0.25 : 0.10
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Vote className="size-8 text-emerald-600" />
            <span className="text-emerald-600 tracking-[0.3em] text-sm uppercase">
              {t('cta.label')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
            <span className="text-slate-900">{t('cta.headline.part1')}</span>
            <br />
            <span className="text-emerald-600">{t('cta.headline.part2')}</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            {t('cta.subheadline')}
          </p>
        </motion.div>

        {/* Choice Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* YES SIDE */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setHoveredSide('yes')}
            onHoverEnd={() => setHoveredSide(null)}
          >
            <motion.div
              className="relative bg-emerald-50 border-2 border-emerald-500 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02, borderColor: 'rgba(5, 150, 105, 0.8)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-emerald-100 blur-2xl"
                animate={{
                  opacity: hoveredSide === 'yes' ? 0.6 : 0.3,
                  scale: hoveredSide === 'yes' ? 1.1 : 1
                }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                {/* YES Badge */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  animate={{
                    scale: hoveredSide === 'yes' ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
                    <Check className="size-10 sm:size-12 text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-1">
                      {t('cta.yes.label')}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900">
                      {t('cta.yes.title')}
                    </h3>
                  </div>
                </motion.div>

                {/* Means */}
                <div className="mb-8">
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-2">
                    {t('cta.means')}
                  </div>
                  <p className="text-2xl sm:text-3xl text-slate-900">
                    {t('cta.yes.means')}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-emerald-600 w-1/2 mb-8" />

                {/* Represents */}
                <div className="mb-6">
                  <div className="text-emerald-600 text-sm uppercase tracking-wider mb-4">
                    {t('cta.represents')}
                  </div>
                  <div className="space-y-4">
                    {yesPoints.map((point, index) => {
                      const Icon = point.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon className="size-4 text-emerald-600" />
                          </div>
                          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                            {t(point.textKey)}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Checkmark pattern */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <Check className="size-48 text-emerald-400" strokeWidth={1} />
              </div>
            </motion.div>
          </motion.div>

          {/* NO SIDE */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setHoveredSide('no')}
            onHoverEnd={() => setHoveredSide(null)}
          >
            <motion.div
              className="relative bg-slate-100 border-2 border-red-300 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-md"
              whileHover={{ scale: 0.98, borderColor: 'rgba(239, 68, 68, 0.5)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Dark glow */}
              <motion.div
                className="absolute inset-0 bg-red-100 blur-2xl"
                animate={{
                  opacity: hoveredSide === 'no' ? 0.3 : 0.1
                }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                {/* NO Badge */}
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  animate={{
                    scale: hoveredSide === 'no' ? 0.95 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-700 border-2 border-red-500 flex items-center justify-center">
                    <X className="size-10 sm:size-12 text-red-400" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-red-600 text-sm tracking-[0.3em] uppercase mb-1">
                      {t('cta.no.label')}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl text-slate-700">
                      {t('cta.no.title')}
                    </h3>
                  </div>
                </motion.div>

                {/* Means */}
                <div className="mb-8">
                  <div className="text-red-600 text-sm uppercase tracking-wider mb-2">
                    {t('cta.means')}
                  </div>
                  <p className="text-2xl sm:text-3xl text-slate-700">
                    {t('cta.no.means')}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-red-600 mb-8" />

                {/* Represents */}
                <div className="mb-6">
                  <div className="text-red-600 text-sm uppercase tracking-wider mb-4">
                    {t('cta.represents')}
                  </div>
                  <div className="space-y-4">
                    {noPoints.map((point, index) => {
                      const Icon = point.icon;
                      return (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-red-100 border border-red-600 flex items-center justify-center flex-shrink-0 mt-1">
                            <Icon className="size-4 text-red-600" />
                          </div>
                          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                            {t(point.textKey)}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* X pattern */}
              <div className="absolute bottom-0 right-0 opacity-5">
                <X className="size-48 text-red-600" strokeWidth={1} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white text-lg sm:text-xl font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Check className="size-6" strokeWidth={3} />
              {t('cta.button')}
              <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.button>

          <motion.p
            className="mt-6 text-slate-600 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('cta.footer')}
          </motion.p>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="inline-block bg-white border-2 border-emerald-600 rounded-2xl px-8 py-6 shadow-md">
            <p className="text-emerald-600 text-xl sm:text-2xl font-medium">
              {t('cta.closing')}
            </p>
          </div>
        </motion.div>

        {/* Footer Credit */}
        <motion.div 
          className="text-center mt-16 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-slate-600 text-sm">
            Designed & Developed by{' '}
            <a 
              href="https://bynari.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors underline"
            >
              Bynari Agency
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

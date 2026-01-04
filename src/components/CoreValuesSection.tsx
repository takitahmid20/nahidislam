import React from 'react';
import { Scale, MessageCircle, ShieldCheck, Gavel } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function CoreValuesSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: MessageCircle,
      titleKey: 'values.freedom.title',
      descKey: 'values.freedom.desc',
      quoteKey: 'values.freedom.quote'
    },
    {
      icon: Gavel,
      titleKey: 'values.justice.title',
      descKey: 'values.justice.desc',
      quoteKey: 'values.justice.quote'
    },
    {
      icon: ShieldCheck,
      titleKey: 'values.accountability.title',
      descKey: 'values.accountability.desc',
      quoteKey: 'values.accountability.quote'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Scale className="size-6 text-emerald-600" />
            <span className="text-emerald-600 tracking-[0.3em] text-sm uppercase">
              {t('values.label')}
            </span>
            <div className="h-px bg-emerald-600 flex-1" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[0.95]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-slate-900">{t('values.title.upholding')}</span>
              <br />
              <span className="text-emerald-600">{t('values.title.freedom')}</span>
              <br />
              <span className="text-green-600">{t('values.title.accountability')}</span>
            </motion.h2>

            <motion.p
              className="text-slate-600 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('values.subtitle')}
            </motion.p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <div className="space-y-8 sm:space-y-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReverse ? 'lg:text-right' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Icon & Title */}
                <div
                  className={`lg:col-span-5 ${
                    isReverse ? 'lg:col-start-8 lg:order-2' : ''
                  }`}
                >
                  <motion.div
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative bg-white border-2 border-emerald-300 rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-lg">
                      <div
                        className={`w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center mb-6 ${
                          isReverse ? 'lg:ml-auto' : ''
                        }`}
                      >
                        <Icon className="size-10 text-white" />
                      </div>

                      <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4 leading-tight">
                        {t(value.titleKey)}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {t(value.descKey)}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Quote */}
                <div
                  className={`lg:col-span-7 ${
                    isReverse ? 'lg:col-start-1 lg:order-1' : ''
                  }`}
                >
                  <motion.div
                    className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-md"
                    whileHover={{ borderColor: 'rgba(5, 150, 105, 0.5)', scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-6xl text-emerald-600/30 leading-none">"</div>
                      <div>
                        <p className="text-slate-900 text-xl sm:text-2xl lg:text-3xl italic leading-relaxed mb-6">
                          {t(value.quoteKey)}
                        </p>
                        <div className="h-px bg-emerald-600 w-24" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 sm:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6">
            <h3 className="text-2xl sm:text-3xl text-slate-900">
              {t('values.cta.text')}
            </h3>
            <motion.button
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('values.cta.button')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

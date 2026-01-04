import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Users, Building2, Leaf, GraduationCap, Heart } from 'lucide-react';

export function Dhaka11Section() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      titleKey: 'dhaka11.feature1.title',
      descKey: 'dhaka11.feature1.desc',
    },
    {
      icon: Building2,
      titleKey: 'dhaka11.feature2.title',
      descKey: 'dhaka11.feature2.desc',
    },
    {
      icon: GraduationCap,
      titleKey: 'dhaka11.feature3.title',
      descKey: 'dhaka11.feature3.desc',
    },
    {
      icon: Leaf,
      titleKey: 'dhaka11.feature4.title',
      descKey: 'dhaka11.feature4.desc',
    },
    {
      icon: Heart,
      titleKey: 'dhaka11.feature5.title',
      descKey: 'dhaka11.feature5.desc',
    },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 tracking-wider">
              {t('dhaka11.label')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-emerald-600">{t('dhaka11.title.my')}</span>{' '}
            <span className="text-slate-800">{t('dhaka11.title.dhaka11')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            {t('dhaka11.subtitle')}
          </motion.p>
        </div>

        {/* Constituency Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-emerald-50 to-white p-8 md:p-12 rounded-3xl mb-16 border border-emerald-100"
        >
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium text-center">
            "{t('dhaka11.vision')}"
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-200 transition-all duration-300 h-full hover:shadow-lg">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-slate-600 mb-6">
            {t('dhaka11.commitment')}
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors cursor-pointer">
            <MapPin className="w-5 h-5" />
            {t('dhaka11.cta')}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

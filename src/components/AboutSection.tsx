import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Book, Award, Users, Heart, Target, Lightbulb } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  const milestones = [
    {
      icon: Book,
      titleKey: 'about.milestone1.title',
      descKey: 'about.milestone1.desc',
      yearKey: 'about.milestone1.year',
    },
    {
      icon: Users,
      titleKey: 'about.milestone2.title',
      descKey: 'about.milestone2.desc',
      yearKey: 'about.milestone2.year',
    },
    {
      icon: Award,
      titleKey: 'about.milestone3.title',
      descKey: 'about.milestone3.desc',
      yearKey: 'about.milestone3.year',
    },
    {
      icon: Target,
      titleKey: 'about.milestone4.title',
      descKey: 'about.milestone4.desc',
      yearKey: 'about.milestone4.year',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <Heart className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 tracking-wider">
              {t('about.label')}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-slate-800">{t('about.title.about')}</span>{' '}
            <span className="text-emerald-600">{t('about.title.nahid')}</span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-slate-200 aspect-[4/5]">
              <img 
                src="/about-nahid-1.png" 
                alt="Nahid Islam"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-200 to-emerald-100 aspect-[4/3]">
              <img 
                src="/about-nahid-2.png" 
                alt="Nahid Islam Leadership"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {t('about.story.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {t('about.story.para1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('about.story.para2')}
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl">
              <p className="text-slate-700 italic text-lg leading-relaxed">
                "{t('about.quote')}"
              </p>
              <p className="text-emerald-600 font-semibold mt-4">
                — {t('about.quote.author')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {t('about.mission.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('about.mission.desc')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-12">
            {t('about.journey.title')}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  <div className="text-emerald-600 font-bold text-sm mb-2">
                    {t(milestone.yearKey)}
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-800 mb-3">
                    {t(milestone.titleKey)}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t(milestone.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-100 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">
            {t('about.values.title')}
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                {t('about.value1.title')}
              </h4>
              <p className="text-slate-600">
                {t('about.value1.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                {t('about.value2.title')}
              </h4>
              <p className="text-slate-600">
                {t('about.value2.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">
                {t('about.value3.title')}
              </h4>
              <p className="text-slate-600">
                {t('about.value3.desc')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { Briefcase, Award, CalendarCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function PublicServiceSection() {
  const { t } = useLanguage();

  const roles = [
    {
      icon: Award,
      titleKey: 'service.role1.title',
      periodKey: 'service.role1.period',
      descKey: 'service.role1.desc',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      titleKey: 'service.role2.title',
      periodKey: 'service.role2.period',
      descKey: 'service.role2.desc',
      color: 'blue'
    },
    {
      icon: Briefcase,
      titleKey: 'service.role3.title',
      periodKey: 'service.role3.period',
      descKey: 'service.role3.desc',
      color: 'emerald'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px bg-green-600 w-24" />
            <span className="text-green-600 tracking-[0.3em] text-sm uppercase">
              {t('service.label')}
            </span>
            <div className="h-px bg-green-600 w-24" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
            <span className="text-slate-900">{t('service.title.public')}</span>
            <br />
            <span className="text-green-600">{t('service.title.service')}</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            {t('service.subtitle')}
          </p>
        </motion.div>

        {/* Timeline View */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-emerald-600" />

          {/* Roles */}
          <div className="space-y-12 lg:space-y-24">
            {roles.map((role, index) => {
              const Icon = role.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'lg:text-right'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Timeline node */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-${
                        role.color === 'emerald' ? 'emerald-600' : 'green-600'
                      } flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="size-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                    <motion.div
                      className={`bg-white border-2 ${
                        role.color === 'emerald' ? 'border-emerald-200' : 'border-green-200'
                      } rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300`}
                      whileHover={{ y: -3 }}
                    >
                      <div className="lg:hidden mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-${
                            role.color === 'emerald' ? 'emerald-600' : 'green-600'
                          } flex items-center justify-center inline-flex`}
                        >
                          <Icon className="size-6 text-white" />
                        </div>
                      </div>

                      <div
                        className={`flex items-center gap-2 mb-4 ${
                          isEven ? 'lg:justify-start' : 'lg:justify-end'
                        }`}
                      >
                        <CalendarCheck
                          className={`size-5 ${
                            role.color === 'emerald' ? 'text-emerald-600' : 'text-green-600'
                          }`}
                        />
                        <span
                          className={`text-sm tracking-wider ${
                            role.color === 'emerald' ? 'text-emerald-600' : 'text-green-600'
                          }`}
                        >
                          {t(role.periodKey)}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl text-slate-900 mb-4 leading-tight">
                        {t(role.titleKey)}
                      </h3>

                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        {t(role.descKey)}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Policy Theme */}
        <motion.div
          className="mt-16 sm:mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white border-2 border-green-600 rounded-3xl p-8 sm:p-12 inline-block shadow-lg">
            <h3 className="text-emerald-600 tracking-[0.3em] text-sm uppercase mb-4">
              {t('service.policy.label')}
            </h3>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 max-w-3xl">
              {t('service.policy.text')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

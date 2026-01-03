import React from 'react';
import { Lightbulb, Users, Scale, BookOpen, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const visionItems = [
  {
    icon: Scale,
    titleKey: 'vision.card1.title',
    descKey: 'vision.card1.desc',
    color: 'emerald'
  },
  {
    icon: BookOpen,
    titleKey: 'vision.card2.title',
    descKey: 'vision.card2.desc',
    color: 'blue'
  },
  {
    icon: Users,
    titleKey: 'vision.card3.title',
    descKey: 'vision.card3.desc',
    color: 'red'
  },
  {
    icon: Zap,
    titleKey: 'vision.card4.title',
    descKey: 'vision.card4.desc',
    color: 'emerald'
  },
  {
    icon: Heart,
    titleKey: 'vision.card5.title',
    descKey: 'vision.card5.desc',
    color: 'blue'
  },
  {
    icon: Lightbulb,
    titleKey: 'vision.card6.title',
    descKey: 'vision.card6.desc',
    color: 'red'
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    emerald: {
      border: 'border-emerald-400',
      bg: 'bg-emerald-600',
      text: 'text-emerald-600',
      hover: 'hover:border-emerald-600'
    },
    blue: {
      border: 'border-green-400',
      bg: 'bg-green-600',
      text: 'text-green-600',
      hover: 'hover:border-green-600'
    },
    red: {
      border: 'border-emerald-500',
      bg: 'bg-emerald-700',
      text: 'text-emerald-700',
      hover: 'hover:border-emerald-600'
    }
  };
  return colors[color as keyof typeof colors];
};

export function VisionSection() {
  const { t } = useLanguage();
  return (
    <section id="vision" className="relative min-h-screen bg-slate-50 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header - Dynamic Asymmetry Layout */}
        <div className="mb-12 sm:mb-20 lg:mb-32">
          {/* Small label - top left */}
          <div className="flex items-center gap-2 text-emerald-600 tracking-[0.3em] text-xs sm:text-sm mb-6 sm:mb-8">
            <div className="w-12 h-px bg-emerald-600" />
            <span>{t('vision.label')}</span>
          </div>
          
          {/* Main heading - offset layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9]">
                <span className="text-slate-900">{t('vision.title.new')}</span>
                <br />
                <span className="text-green-600">{t('vision.title.bangladesh')}</span>
                <br />
                <span className="text-emerald-600">{t('vision.title.starts')}</span>
              </h2>
            </div>
            
            <div className="lg:col-span-5 flex items-end">
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                {t('vision.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Vision Cards - Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            
            // Create varied card heights and positions for dynamic asymmetry
            const isLarge = index === 0 || index === 4;
            const offsetClass = index % 3 === 1 ? 'lg:mt-12' : index % 3 === 2 ? 'lg:mt-24' : '';
            
            return (
              <div
                key={index}
                className={`group relative ${offsetClass}`}
              >
                <div className={`relative bg-white backdrop-blur-sm border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 sm:p-8 ${isLarge ? 'sm:p-10' : ''} transition-all duration-500 hover:scale-105 hover:shadow-lg shadow-md`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${isLarge ? 'sm:w-16 sm:h-16' : ''} rounded-full ${colors.bg} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`size-6 ${isLarge ? 'sm:size-8' : 'sm:size-7'} text-white`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl ${isLarge ? 'sm:text-3xl' : ''} text-slate-900 mb-3 sm:mb-4 tracking-tight`}>
                    {t(item.titleKey)}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-slate-600 text-sm sm:text-base ${isLarge ? 'sm:text-lg' : ''} leading-relaxed`}>
                    {t(item.descKey)}
                  </p>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} opacity-5 rounded-bl-full`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action - Floating Element */}
        <div className="mt-16 sm:mt-24 lg:mt-32 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
          <div className="text-center sm:text-left">
            <p className="text-emerald-600 tracking-[0.3em] text-xs sm:text-sm mb-3">
              {t('vision.cta.label')}
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
              {t('vision.cta.title')}
            </h3>
          </div>
          
          <button className="group px-8 sm:px-12 py-4 sm:py-5 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white font-medium tracking-wide shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
            <span className="flex items-center gap-3">
              {t('vision.cta.button')}
              <Zap className="size-5 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
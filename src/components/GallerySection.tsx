import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', labelKey: 'gallery.category.all' },
    { id: 'movement', labelKey: 'gallery.category.movement' },
    { id: 'leadership', labelKey: 'gallery.category.leadership' },
    { id: 'people', labelKey: 'gallery.category.people' },
    { id: 'events', labelKey: 'gallery.category.events' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'movement',
      titleKey: 'gallery.item1.title',
      descKey: 'gallery.item1.desc',
      image: '/ni2.png',
    },
    {
      id: 2,
      category: 'leadership',
      titleKey: 'gallery.item2.title',
      descKey: 'gallery.item2.desc',
      image: '/Nahid-Islam.png',
    },
    {
      id: 3,
      category: 'people',
      titleKey: 'gallery.item3.title',
      descKey: 'gallery.item3.desc',
      image: '/ni2.png',
    },
    {
      id: 4,
      category: 'movement',
      titleKey: 'gallery.item4.title',
      descKey: 'gallery.item4.desc',
      image: '/Nahid-Islam.png',
    },
    {
      id: 5,
      category: 'events',
      titleKey: 'gallery.item5.title',
      descKey: 'gallery.item5.desc',
      image: '/ni2.png',
    },
    {
      id: 6,
      category: 'leadership',
      titleKey: 'gallery.item6.title',
      descKey: 'gallery.item6.desc',
      image: '/Nahid-Islam.png',
    },
    {
      id: 7,
      category: 'people',
      titleKey: 'gallery.item7.title',
      descKey: 'gallery.item7.desc',
      image: '/ni2.png',
    },
    {
      id: 8,
      category: 'events',
      titleKey: 'gallery.item8.title',
      descKey: 'gallery.item8.desc',
      image: '/Nahid-Islam.png',
    },
    {
      id: 9,
      category: 'movement',
      titleKey: 'gallery.item9.title',
      descKey: 'gallery.item9.desc',
      image: '/ni2.png',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
      setSelectedImage(filteredItems[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
      const nextIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredItems[nextIndex].id);
    }
  };

  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6"
          >
            <Camera className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-600 tracking-wider">
              {t('gallery.label')}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="text-emerald-600">{t('gallery.title.know')}</span>{' '}
            <span className="text-slate-800">{t('gallery.title.nahid')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-3xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {t(category.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-200 aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Actual Image */}
                  <img 
                    src={item.image} 
                    alt={t(item.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {t(item.descKey)}
                    </p>
                  </div>

                  {/* Zoom effect overlay */}
                  <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">{t('gallery.empty')}</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find(i => i.id === selectedImage);
                if (!item) return null;
                
                return (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="relative bg-slate-200 aspect-[16/10]">
                      <img 
                        src={item.image} 
                        alt={t(item.titleKey)}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-slate-800 mb-3">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-lg text-slate-600">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

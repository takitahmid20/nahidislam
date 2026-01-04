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
      image: '/portfolio/1.jpg',
    },
    {
      id: 2,
      category: 'leadership',
      titleKey: 'gallery.item2.title',
      descKey: 'gallery.item2.desc',
      image: '/portfolio/2.jpg',
    },
    {
      id: 3,
      category: 'people',
      titleKey: 'gallery.item3.title',
      descKey: 'gallery.item3.desc',
      image: '/portfolio/3.jpg',
    },
    {
      id: 4,
      category: 'movement',
      titleKey: 'gallery.item4.title',
      descKey: 'gallery.item4.desc',
      image: '/portfolio/4.jpg',
    },
    {
      id: 5,
      category: 'events',
      titleKey: 'gallery.item5.title',
      descKey: 'gallery.item5.desc',
      image: '/portfolio/5.jpg',
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
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
                <div className="relative overflow-hidden rounded-2xl bg-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-64 md:h-72 lg:h-80 relative">
                    <img 
                      src={item.image} 
                      alt={t(item.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {t(item.descKey)}
                    </p>
                  </div>
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

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            {/* Black Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100]"
              onClick={() => setSelectedImage(null)}
            />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="fixed top-6 right-6 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-[110] group"
              aria-label="Close gallery"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            {filteredItems.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="fixed left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-[110]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7 text-white" />
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="fixed right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all z-[110]"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7 text-white" />
                </motion.button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center p-4 md:p-8 z-[105] pointer-events-none"
            >
              <div 
                className="max-w-7xl w-full pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const item = galleryItems.find(i => i.id === selectedImage);
                  if (!item) return null;
                  
                  return (
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
                      {/* Image */}
                      <div className="relative bg-slate-100">
                        <img 
                          src={item.image} 
                          alt={t(item.titleKey)}
                          className="w-full max-h-[75vh] object-contain"
                        />
                      </div>
                      
                      {/* Info Section */}
                      <div className="p-6 md:p-8 bg-gradient-to-b from-white to-slate-50">
                        <div className="max-w-3xl mx-auto text-center">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            {t(item.titleKey)}
                          </h3>
                          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                            {t(item.descKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

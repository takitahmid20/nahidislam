import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { VisionSection } from './components/VisionSection';
import { JulyRevolutionSection } from './components/JulyRevolutionSection';
import { PublicServiceSection } from './components/PublicServiceSection';
import { CoreValuesSection } from './components/CoreValuesSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { CallToActionSection } from './components/CallToActionSection';

function AppContent() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Apply language class to body for font switching
    if (language === 'bn') {
      document.body.classList.add('lang-bn');
    } else {
      document.body.classList.remove('lang-bn');
    }
  }, [language]);
  
  return (
      <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <JulyRevolutionSection />
      <PublicServiceSection />
      <CoreValuesSection />
      <VisionSection />
      <FutureVisionSection />
      <CallToActionSection />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
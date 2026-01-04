import { HeroSection } from '../components/HeroSection';
import { JulyRevolutionSection } from '../components/JulyRevolutionSection';
import { PublicServiceSection } from '../components/PublicServiceSection';
import { Dhaka11Section } from '../components/Dhaka11Section';
import { GallerySection } from '../components/GallerySection';
import { CoreValuesSection } from '../components/CoreValuesSection';
import { VisionSection } from '../components/VisionSection';
import { FutureVisionSection } from '../components/FutureVisionSection';
import { CallToActionSection } from '../components/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <JulyRevolutionSection />
      <PublicServiceSection />
      <Dhaka11Section />
      <GallerySection />
      <CoreValuesSection />
      <VisionSection />
      <FutureVisionSection />
      <CallToActionSection />
    </>
  );
}

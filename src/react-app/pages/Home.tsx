import HeroSection from '@/react-app/components/HeroSection';
import StorytellingSection from '@/react-app/components/StorytellingSection';
import AuthoritySection from '@/react-app/components/AuthoritySection';
import BenefitsSection from '@/react-app/components/BenefitsSection';
import SocialProofSection from '@/react-app/components/SocialProofSection';
import BonusSection from '@/react-app/components/BonusSection';
import PriceRevealSection from '@/react-app/components/PriceRevealSection';
import UrgencySection from '@/react-app/components/UrgencySection';
import FinalCTASection from '@/react-app/components/FinalCTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030b11] to-[#060102]">
      <HeroSection />
      <StorytellingSection />
      <AuthoritySection />
      <BenefitsSection />
      <SocialProofSection />
      <BonusSection />
      <PriceRevealSection />
      <UrgencySection />
      <FinalCTASection />
    </div>
  );
}

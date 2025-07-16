import HeroSection from "@/components/HeroSection";
import BrandsCarousel from "@/components/BrandsCarousel";
import HowItWorks from "@/components/HowItWorksSection";
import ConfigurationStepsSection from "@/components/ConfigurationStepsSection";
import IntelligentAgentBuilder from "@/components/IntelligentAgentBuilder";
import MultilingualAssistantForm from "@/components/MultilingualAssistantForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsCarousel />
      <HowItWorks />
      <ConfigurationStepsSection />
      <IntelligentAgentBuilder />
      <MultilingualAssistantForm />
    </>
  );
}

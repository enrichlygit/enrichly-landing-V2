import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";  
import { BenefitsSection } from "./components/BenefitsSection";
import { ProofSection } from "./components/ProofSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { ProcessSection } from "./components/TechStackSection";
import { OfferBanner } from "./components/OfferBanner";
import { IntakeForm } from "./components/IntakeForm";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <ProofSection />
      <UseCasesSection />
      <ProcessSection />
      <OfferBanner />
      <IntakeForm />
      <FinalCTA />
      <Footer />
    </div>
  );
}
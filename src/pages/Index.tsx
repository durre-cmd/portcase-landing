import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import AudienceSection from "@/components/sections/AudienceSection";
import TryAppSection from "@/components/sections/TryAppSection";
import FeedbackSection from "@/components/sections/FeedbackSection";
import EthicsSection from "@/components/sections/EthicsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <CapabilitiesSection />
        <AudienceSection />
        <TryAppSection />
        <FeedbackSection />
        <EthicsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

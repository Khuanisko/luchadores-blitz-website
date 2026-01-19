import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ManagersSection } from "@/components/ManagersSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ManagersSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;

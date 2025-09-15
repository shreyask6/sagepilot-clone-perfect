import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HumanInLoopSection } from "@/components/HumanInLoopSection";
import { BusinessOperationsSection } from "@/components/BusinessOperationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingSection } from "@/components/BookingSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HumanInLoopSection />
      <BusinessOperationsSection />
      <TestimonialsSection />
      <BookingSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

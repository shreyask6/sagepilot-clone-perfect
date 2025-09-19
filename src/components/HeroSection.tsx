import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import unifiedInterfaceMockup from "@/assets/unified-interface-mockup.png";

const scrollingTexts = [
  "Turning Browsers into Loyal Customers",
  "Delighting Customers 24/7/365", 
  "Responding in Seconds, Not Hours",
  "Running Your Business Workflows",
  "Speaking Your Brand Language",
  "Managing Every Customer Channel",
  "Driving Sales While You Sleep",
  "Boosting Cart Completion Rates",
  "Delivering VIP Service at Scale",
  "Providing Real-Time Order Updates",
  "Handling Peak Season Demand"
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20 px-4 py-2">
            Join 100+ Companies Delivering World-Class CX with Sagepilot →
          </Badge>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Meet Your New{" "}
              <br />
              AI Employee That's...
            </h1>
            
            <div className="relative h-16 overflow-hidden">
              <div className="animate-scroll flex space-x-8 w-fit">
                {[...scrollingTexts, ...scrollingTexts].map((text, index) => (
                  <h2 
                    key={index}
                    className={`text-4xl lg:text-5xl font-bold whitespace-nowrap ${
                      text === "Running Your Business Workflows" ? "text-sage-green" : "text-foreground"
                    }`}
                  >
                    {text}
                  </h2>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Deliver exceptional customer engagement at scale with Sagepilot's 
              human-like AI employees. Provide personalized, 24/7 customer service 
              across all channels throughout the customer journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="sage" size="lg" className="shadow-green">
              ✨ Book a Demo
            </Button>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Trusted by world-class consumer brands</p>
            <div className="flex items-center space-x-6 opacity-60">
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                LOOKAN
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                basil
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                WELLBI
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                treebo
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right">
          <div className="relative">
            <img 
              src={unifiedInterfaceMockup}
              alt="Unified customer service interface showing multiple communication channels"
              className="w-full h-auto rounded-2xl shadow-elevated glass-green animate-float"
            />
            <div className="absolute -top-4 -right-4 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-medium shadow-green">
              Unified Experience, Multiple Channels
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-sage-green/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-sage-green/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import chatInterfaceMockup from "@/assets/chat-interface-mockup.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20 px-4 py-2">
            End-to-End Solutions Built for Your Success →
          </Badge>

          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We build whatever you need —{" "}
              <span className="text-sage-green">AI agents, apps, websites, automations, and more</span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Custom solutions shipped fast. From AI-powered automation to full-stack applications, we deliver exactly what your business needs to grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="sage" size="lg" className="shadow-green">
              📞 Book a Call
            </Button>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">Trusted by innovative companies</p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 opacity-60">
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                STARTUPS
              </div>
              <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-medium">
                SCALE-UPS
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                ENTERPRISE
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right mt-8 lg:mt-0">
          <div className="relative">
            <img
              src={chatInterfaceMockup}
              alt="Unified customer service interface showing multiple communication channels"
              className="w-full h-auto rounded-2xl shadow-elevated glass-green animate-float max-w-lg mx-auto lg:max-w-none"
            />
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-sage-green text-sage-green-dark px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-green">
              <span className="hidden sm:inline">Unified Experience, Multiple Channels</span>
              <span className="sm:hidden">Unified Experience</span>
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
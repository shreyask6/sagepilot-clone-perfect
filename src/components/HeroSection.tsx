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
            <Button variant="emeraldCta" size="lg" asChild>
              <a href="#contact">📞 Book a Call</a>
            </Button>
          </div>
        </div>
        
        <div className="relative animate-slide-in-right mt-8 lg:mt-0">
          <div className="relative">
            {/* Development Dashboard Mockup */}
            <div className="w-full max-w-lg mx-auto lg:max-w-none bg-white rounded-2xl shadow-elevated p-6 animate-float">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500">BuilderOps Dashboard</span>
              </div>

              <div className="space-y-4">
                <div className="bg-sage-green/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-sage-green-dark">🤖 AI Agent Development</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-sage-green h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-800">🌐 Web Application</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-purple-800">⚡ Automation Setup</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">Planning</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>3 Active Projects</span>
                  <span>85% On Schedule</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 badge-white-text text-xs sm:text-sm">
              <span className="hidden sm:inline">End-to-End Project Management</span>
              <span className="sm:hidden">Project Dashboard</span>
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
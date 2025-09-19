import { Button } from "@/components/ui/button";
import sagepilotLogo from "@/assets/sagepilot-logo.png";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={sagepilotLogo} 
            alt="SagePilot" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#platform" className="text-foreground hover:text-primary transition-colors">
            Platform
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How it works?
          </a>
          <a href="#ai-employees" className="text-foreground hover:text-primary transition-colors">
            AI Employees
          </a>
        </nav>
        
        <Button variant="sage" size="sm">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};
import sagepilotLogo from "@/assets/sagepilot-logo.png";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  product: [
    { name: "Platform", href: "#platform" },
    { name: "AI Employees", href: "#ai-employees" },
    { name: "Integrations", href: "#integrations" },
    { name: "Analytics", href: "#analytics" },
    { name: "Security", href: "#security" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Press", href: "#press" },
    { name: "Contact", href: "#contact" }
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Case Studies", href: "#cases" },
    { name: "API Reference", href: "#api" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src={sagepilotLogo} 
                alt="SagePilot" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transform your customer operations with AI employees that work like humans, 
              scale like software, and deliver results 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-sage-green transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-sage-green transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-sage-green transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-sage-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-sage-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-sage-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 SagePilot AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-sage-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
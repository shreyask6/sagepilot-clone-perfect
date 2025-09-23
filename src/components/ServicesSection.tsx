import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "AI Agents",
    description: "Intelligent automation that handles tasks and decisions",
    examples: ["Customer support bots", "Process automation assistants", "Lead qualification agents"],
    icon: "🤖"
  },
  {
    title: "Web Apps & Websites",
    description: "Full-stack applications and responsive websites",
    examples: ["E-commerce platforms", "SaaS dashboards", "Marketing websites"],
    icon: "🌐"
  },
  {
    title: "Automation & Integrations",
    description: "Connect systems and streamline workflows",
    examples: ["API integrations", "Workflow automation", "Data synchronization"],
    icon: "⚡"
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    examples: ["iOS & Android apps", "React Native solutions", "Progressive web apps"],
    icon: "📱"
  },
  {
    title: "Internal Tools",
    description: "Custom software for your team's specific needs",
    examples: ["Admin dashboards", "Analytics platforms", "Project management tools"],
    icon: "🛠️"
  },
  {
    title: "Product Prototypes",
    description: "Rapid development to validate ideas",
    examples: ["MVP development", "Proof of concepts", "Market validation tools"],
    icon: "🚀"
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20">
            Our Capabilities
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            End-to-end solutions for <span className="text-sage-green">every need</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered automation to full-stack development, we build custom solutions that grow with your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-sage-green/30 transition-all duration-300 group">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-sage-green-dark">Examples:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-sage-green rounded-full mr-2 flex-shrink-0"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="emeraldCta" size="lg" asChild>
            <a href="#contact">📞 Book a Call to Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
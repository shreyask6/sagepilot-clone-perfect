import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, BarChart3, Database } from "lucide-react";

const humanInLoopFeatures = [
  {
    icon: MessageSquare,
    title: "Human in the Loop",
    description: "AI intelligently escalates to human agents whenever handling requires human intervention.",
    highlight: "Seamless Handoffs"
  },
  {
    icon: BarChart3,
    title: "AI-Driven CRM & Lead Management",
    description: "Continuously identifying new leads and qualifying customers over time, with AI agents processing customer data to provide precise and effective relationship management.",
    highlight: "Smart Lead Generation"
  }
];

export const HumanInLoopSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Humans Like AI That Executes Business Strategy,<br />
            Not Scripts or Processes
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {humanInLoopFeatures.map((feature, index) => (
            <Card key={index} className="glass border-0 shadow-elevated hover:shadow-green transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-sage-green/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-sage-green-dark" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20">
                      {feature.highlight}
                    </Badge>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MessageCircle, ShoppingCart, Clock, Users, Zap, TrendingUp, Shield } from "lucide-react";

const businessFeatures = [
  {
    icon: Globe,
    title: "It works on all channels",
    description: "From social media to email, chat to phone, our AI employees seamlessly integrate across every customer touchpoint to deliver consistent experiences.",
    highlight: "Omnichannel Ready"
  },
  {
    icon: MessageCircle,
    title: "Conversational AI that gets context",
    description: "Advanced natural language processing that understands intent, emotion, and context to deliver human-like conversations at scale.",
    highlight: "Context Aware"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce integration",
    description: "Direct integration with your e-commerce platform to handle orders, returns, product questions, and cart abandonment recovery.",
    highlight: "Sales Focused"
  },
  {
    icon: Clock,
    title: "24/7 availability",
    description: "Never miss a customer inquiry. Our AI employees work around the clock to ensure your customers get immediate responses anytime.",
    highlight: "Always On"
  },
  {
    icon: Users,
    title: "Scalable workforce",
    description: "Scale your customer service team instantly without hiring. Handle thousands of conversations simultaneously with consistent quality.",
    highlight: "Instant Scale"
  },
  {
    icon: Zap,
    title: "Real-time automation",
    description: "Automate routine tasks and workflows while maintaining the personal touch customers expect from your brand.",
    highlight: "Smart Automation"
  },
  {
    icon: TrendingUp,
    title: "Performance analytics",
    description: "Comprehensive insights into customer satisfaction, response times, resolution rates, and business impact metrics.",
    highlight: "Data Driven"
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and complete data privacy protection.",
    highlight: "Secure & Compliant"
  }
];

export const BusinessOperationsSection = () => {
  return (
    <section className="py-24 bg-sage-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Manage your support operations with an<br />
            AI-first platform designed for seamless<br />
            Human + AI Agent collaboration.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessFeatures.map((feature, index) => (
            <Card key={index} className="glass border-0 shadow-soft hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="bg-sage-green/10 p-3 rounded-lg w-fit group-hover:bg-sage-green/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-sage-green-dark" />
                  </div>
                  <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20 text-xs">
                    {feature.highlight}
                  </Badge>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
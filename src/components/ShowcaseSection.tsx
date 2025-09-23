import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce AI Assistant",
    category: "AI Agent + Web App",
    description: "Built a complete e-commerce platform with an AI shopping assistant that increased conversion rates by 40%.",
    outcome: "40% increase in conversions",
    tech: ["React", "Node.js", "OpenAI", "Stripe"],
    image: "🛒"
  },
  {
    title: "Workflow Automation Suite",
    category: "Automation & Integration",
    description: "Automated complex approval workflows across 5 different systems, reducing processing time from days to minutes.",
    outcome: "95% reduction in processing time",
    tech: ["Python", "Zapier", "API Integration", "Slack"],
    image: "⚡"
  },
  {
    title: "VoiceCall AI Sales Agent",
    category: "AI Agent",
    description: "Intelligent sales bot that autonomously calls potential customers and conducts persuasive sales conversations using natural voice synthesis.",
    outcome: "Automated outbound sales calls with human-like conversation",
    tech: ["Python", "OpenAI", "Twilio", "ElevenLabs"],
    image: "📞"
  },
  {
    title: "SustainBuddy Maritime API",
    category: "API Development",
    description: "Customized chatbot API for maritime sustainability consulting with AI-powered conversational interface and document citations.",
    outcome: "Complete API documentation & integration",
    tech: ["Python", "OpenAI", "Nginx", "HTML/CSS/JS"],
    image: "🌊"
  },
  {
    title: "Real Estate CRM Platform",
    category: "Web App + Mobile",
    description: "Custom CRM with mobile app for real estate agents, featuring automated lead scoring and follow-up sequences.",
    outcome: "300% increase in lead qualification efficiency",
    tech: ["Next.js", "React Native", "PostgreSQL", "Twilio"],
    image: "🏡"
  },
  {
    title: "Customer Support Bot",
    category: "AI Agent",
    description: "Intelligent support bot that handles 80% of customer inquiries automatically while maintaining high satisfaction scores.",
    outcome: "80% automation rate, 4.8/5 satisfaction",
    tech: ["OpenAI", "Langchain", "Zendesk API", "React"],
    image: "🎧"
  }
];

export const ShowcaseSection = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-sage-green/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <Badge variant="outline" className="bg-sage-green/10 text-sage-green-dark border-sage-green/20">
            Our Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Solutions that <span className="text-sage-green">deliver results</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, see how we've helped businesses transform their operations and achieve measurable growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:border-sage-green/30 transition-all duration-300 group bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {project.category}
                </Badge>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-sage-green/10 rounded-lg border border-sage-green/20">
                    <p className="text-sm font-medium text-sage-green-dark">Key Outcome</p>
                    <p className="text-lg font-bold text-sage-green">{project.outcome}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Technologies Used</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="emeraldCta" size="lg" asChild>
            <a href="#contact">📞 Book a Call to Start Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
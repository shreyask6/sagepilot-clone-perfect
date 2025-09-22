import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, Database, Zap } from "lucide-react";

const knowledgeSources = [
  {
    icon: FileText,
    title: "Product Specifications",
    description: "Detailed product information, features, and technical specifications",
    items: ["Product catalogs", "Technical docs", "Feature lists"]
  },
  {
    icon: BookOpen,
    title: "Help Articles",
    description: "Customer support documentation and troubleshooting guides",
    items: ["FAQ databases", "How-to guides", "Troubleshooting docs"]
  },
  {
    icon: Database,
    title: "Internal Knowledge",
    description: "Company policies, procedures, and internal documentation",
    items: ["Policy documents", "Process guides", "Best practices"]
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Dynamic information that changes frequently",
    items: ["Inventory levels", "Pricing updates", "Service status"]
  }
];

export const KnowledgeIntegrationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                Knowledge Integration
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Transform your collective knowledge into instant AI expertise
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Product specs, help articles, and internal docs become immediately accessible intelligence. 
                Our AI masters your content, becoming a trusted extension of your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sage-green/10 p-2 rounded-lg">
                  <Database className="h-6 w-6 text-sage-green-dark" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Instant Knowledge Access</h3>
                  <p className="text-muted-foreground">
                    Your AI agents instantly access any piece of information from your knowledge base
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sage-green/10 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-sage-green-dark" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Always Up-to-Date</h3>
                  <p className="text-muted-foreground">
                    Automatic synchronization ensures your AI always has the latest information
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-sage-green/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-sage-green-dark" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Context-Aware Responses</h3>
                  <p className="text-muted-foreground">
                    AI understands context and provides relevant, accurate information every time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {knowledgeSources.map((source, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <source.icon className="h-8 w-8 text-sage-green-dark mb-3" />
                    <h3 className="font-semibold text-lg mb-2">{source.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {source.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {source.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-sage-green-dark rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
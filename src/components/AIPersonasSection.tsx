import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const personas = [
  {
    name: "Sarah",
    role: "Skincare Expert",
    description: "Specializes in personalized skincare consultations and product recommendations",
    expertise: ["Product Knowledge", "Skin Analysis", "Routine Building"],
    avatar: "👩‍⚕️",
    color: "bg-rose-100 text-rose-800"
  },
  {
    name: "Marcus",
    role: "Insurance Advisor",
    description: "Expert in policy comparisons, claims assistance, and coverage optimization",
    expertise: ["Policy Analysis", "Claims Processing", "Risk Assessment"],
    avatar: "👨‍💼",
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Elena",
    role: "Travel Specialist",
    description: "Assists with bookings, itinerary planning, and travel support",
    expertise: ["Booking Management", "Travel Planning", "Customer Support"],
    avatar: "✈️",
    color: "bg-purple-100 text-purple-800"
  },
  {
    name: "David",
    role: "Tech Support",
    description: "Provides technical assistance and troubleshooting guidance",
    expertise: ["Technical Troubleshooting", "Product Setup", "Issue Resolution"],
    avatar: "🔧",
    color: "bg-green-100 text-green-800"
  }
];

export const AIPersonasSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-sage-green/10 text-sage-green-dark border-sage-green/20">
            AI Personas & Customization
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Create specialized AI teammates that embody your company's DNA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From skincare experts to insurance advisors, each persona is meticulously crafted with your expertise and warmth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{persona.avatar}</div>
                  <h3 className="text-lg font-semibold">{persona.name}</h3>
                  <Badge className={`text-xs ${persona.color}`}>
                    {persona.role}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {persona.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {persona.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Ready to create your own AI team? 
            <span className="text-sage-green-dark font-medium ml-2">
              Let's build them together →
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
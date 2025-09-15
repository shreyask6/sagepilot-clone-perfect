import analyticsImage from "@/assets/analytics-dashboard.png";
import crmImage from "@/assets/crm-interface.png";
import chatInterfaceImage from "@/assets/chat-interface-mockup.png";

const features = [
  {
    title: "Plug and Play AI, No Strings Attached",
    description: "Effortlessly integrate our AI agents across Freshdesk, Zendesk, and third-party platforms. No time-consuming technical headaches needed.",
    image: chatInterfaceImage,
    highlight: "Get Started Seamlessly!"
  },
  {
    title: "Unified Conversations View",
    description: "Manage all customer interactions from various channels in one centralized view. Monitor live agent conversations with customers and handle escalated interactive conversations.",
    image: analyticsImage,
    highlight: "Stay in Control"
  },
  {
    title: "Comprehensive Analytics",
    description: "Get real-time insights into your customer service performance, AI agent effectiveness, and customer metrics tracking data about your support operations.",
    image: analyticsImage,
    highlight: "Data-Driven Decisions"
  },
  {
    title: "Custom Knowledge Base",
    description: "Build a repository of important resources, product agents to provide precise and effective support.",
    image: crmImage,
    highlight: "Smart Knowledge Management"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Meet your human-like AI employees who truly get your brand
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform every customer touchpoint - from discovery to purchase to support - into a 24/7 revenue engine, 
            powering both conversations and business workflows across every channel
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            They handle millions of interactions and work seamlessly with your tools - helping you scale without scaling headcount.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {features.map((feature, index) => (
            <div key={index} className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="bg-sage-green/10 text-sage-green-dark px-3 py-1 rounded-full text-sm font-medium">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
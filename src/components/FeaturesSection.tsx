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
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
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
      </div>
    </section>
  );
};
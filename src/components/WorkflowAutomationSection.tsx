import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CreditCard, Calendar, RefreshCw, Users, ShoppingCart, MessageSquare } from "lucide-react";

const workflows = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "Automatically process orders, track shipments, and handle returns",
    steps: ["Order placement", "Payment processing", "Shipping updates", "Return handling"]
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Schedule appointments, send reminders, and manage availability",
    steps: ["Check availability", "Book appointment", "Send confirmation", "Reminder notifications"]
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Handle refunds, process payments, and manage billing inquiries",
    steps: ["Payment verification", "Refund processing", "Billing support", "Account updates"]
  },
  {
    icon: Users,
    title: "Customer Onboarding",
    description: "Guide new customers through setup and initial configuration",
    steps: ["Account creation", "Profile setup", "Feature introduction", "First-time guidance"]
  }
];

const integrations = [
  "Salesforce", "HubSpot", "Stripe", "PayPal", "Calendly", "Shopify", 
  "WooCommerce", "Zendesk", "Intercom", "Slack", "Microsoft Teams", "Zapier"
];

export const WorkflowAutomationSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
            Workflow Automation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience seamless workflow automation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your AI connects to your business tools – CRM, payments, booking systems – turning customer requests into immediate action. 
            From refunds to appointments, everything happens autonomously.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {workflows.map((workflow, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <workflow.icon className="h-8 w-8 text-sage-green-dark mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{workflow.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {workflow.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center text-sm">
                      <div className="w-6 h-6 bg-sage-green/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sage-green-dark font-medium text-xs">
                          {stepIndex + 1}
                        </span>
                      </div>
                      <span>{step}</span>
                      {stepIndex < workflow.steps.length - 1 && (
                        <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Seamless Integrations</h3>
            <p className="text-muted-foreground">
              Connect with your existing tools and platforms for unified automation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {integration}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sage-green-dark font-medium">
              + 500+ more integrations via Zapier and custom APIs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
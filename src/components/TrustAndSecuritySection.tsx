import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, CheckCircle, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II compliant with end-to-end encryption and secure data handling",
    features: ["256-bit encryption", "SOC 2 compliance", "GDPR ready", "ISO 27001 certified"]
  },
  {
    icon: Lock,
    title: "Data Privacy Protection",
    description: "Your customer data is protected with advanced privacy controls and access management",
    features: ["Data anonymization", "Access controls", "Audit trails", "Data retention policies"]
  },
  {
    icon: Eye,
    title: "Brand Voice Protection",
    description: "Comprehensive controls to maintain your brand voice and prevent AI misuse",
    features: ["Response monitoring", "Brand guidelines", "Tone enforcement", "Content filtering"]
  },
  {
    icon: Users,
    title: "Human-AI Collaboration",
    description: "Seamless handoffs between AI and human agents with complete context preservation",
    features: ["Context handoffs", "Human oversight", "Escalation rules", "Quality assurance"]
  }
];

const complianceLogos = [
  "SOC 2 Type II",
  "GDPR",
  "ISO 27001",
  "CCPA",
  "HIPAA Ready",
  "PCI DSS"
];

export const TrustAndSecuritySection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
            Security & Compliance
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-grade security and compliance in every interaction
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive controls to protect your brand voice, handle sensitive data appropriately, 
            and prevent misuse with enterprise-grade security and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="bg-sage-green/10 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-8 w-8 text-sage-green-dark" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                </div>

                <div className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Compliance & Certifications</h3>
            <p className="text-muted-foreground">
              We maintain the highest standards of security and compliance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceLogos.map((compliance, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center border hover:shadow-md transition-shadow"
              >
                <div className="mb-2">
                  <Shield className="h-6 w-6 text-sage-green-dark mx-auto" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {compliance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Promise */}
        <div className="bg-white border border-sage-green/20 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="bg-sage-green/10 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-sage-green-dark" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Our Security Promise</h3>
              <p className="text-muted-foreground mb-4">
                Your data security and privacy are our top priorities. We implement multiple layers of protection 
                to ensure your customer interactions remain secure and your business data stays private.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Data Protection</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Zero data retention unless requested</li>
                    <li>• Encrypted data transmission and storage</li>
                    <li>• Regular security audits and assessments</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Access Control</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Role-based access management</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Comprehensive audit logging</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
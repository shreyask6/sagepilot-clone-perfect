import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

export const TrustAndSecuritySection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-sage-green/10 text-sage-green-dark border-sage-green/20">
            Security & Trust
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-sage-green">Secure</span> and reliable development practices
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            I follow industry-standard security practices to ensure your projects are built with care and protection in mind.
          </p>
        </div>

        {/* Simple Security Promise */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-sage-green/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="bg-sage-green/10 p-4 rounded-full w-fit mx-auto mb-6">
                  <Shield className="h-12 w-12 text-sage-green-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Basic Security Practices I Follow</h3>
                <p className="text-muted-foreground">
                  While I'm still growing my expertise, I'm committed to following fundamental security practices in every project.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Code Security</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Secure coding practices and input validation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">No hardcoded secrets or sensitive data</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Regular dependency updates and security patches</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Data Handling</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">HTTPS and encrypted connections</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Responsible data handling and privacy</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sage-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Environment variables for sensitive configuration</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
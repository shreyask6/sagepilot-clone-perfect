import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold">
            The future is here! Deploy your AI workforce today.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transform your customer operations with AI employees that work like humans, 
            scale like software, and deliver results 24/7.
          </p>
          <Button variant="sage" size="lg" className="shadow-green">
            ✨ Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            Ready to build your next solution?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            From AI agents to full-stack applications, we deliver custom solutions that drive real business results. Let's discuss your project today.
          </p>
          <Button variant="sage" size="lg" className="shadow-green">
            📞 Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};
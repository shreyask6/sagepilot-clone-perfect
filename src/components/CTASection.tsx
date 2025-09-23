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
          {/* Google Calendar Appointment Scheduling begin */}
          <div className="bg-white rounded-lg shadow-elevated p-4">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3tBKS1dW15EAHb4Zs7XmQwPysQuWoFJbHf6CE2UpQS8osc9XIR4U2xh2f697FO5D8fb8ZybDzj?gv=true"
              style={{border: 0}}
              width="100%"
              height="1600"
              frameBorder="0"
              className="rounded-lg"
            />
          </div>
          {/* end Google Calendar Appointment Scheduling */}
        </div>
      </div>
    </section>
  );
};
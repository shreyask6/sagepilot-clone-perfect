import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timeSlots = [
  "4:30am", "9:30am", "10:30am", "11:30am", "12:30pm", "1:30pm", "11:30pm"
];

const weekDays = ["Mon 15", "Tue 16", "Wed 17", "Thu 18", "Fri 19", "Sat 20"];

export const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <section id="bookademo" className="py-24 bg-sage-gray-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold">
              See our AI Agents in Action, Book a demo today!
            </h2>
            <p className="text-xl text-muted-foreground">
              Hey 👋 I'm Prashanth, Founder of Sagepilot AI, let's chat!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg">Select an appointment time</CardTitle>
                <p className="text-sm text-muted-foreground">(GMT-06:00) Mountain Time - Denver</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold">September 2025</h3>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                    Previous day
                  </Button>
                  <Button variant="ghost" size="sm">
                    Next day
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weekDays.map((day, index) => (
                    <div key={day} className="space-y-3">
                      <h3 className="font-semibold text-lg">{day}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={`${day}-${time}`}
                            variant={selectedTime === `${day}-${time}` ? "sage" : "outline"}
                            size="sm"
                            className="justify-start"
                            onClick={() => setSelectedTime(`${day}-${time}`)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center justify-center space-x-2">
                  <span>protected by</span>
                  <strong>reCAPTCHA</strong>
                </div>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <a href="#" className="text-primary hover:underline">Privacy</a>
                  <span>-</span>
                  <a href="#" className="text-primary hover:underline">Terms</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
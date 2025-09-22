import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const chatExamples = [
  {
    title: "Order Tracking & Payment Verification",
    category: "E-commerce Support",
    messages: [
      {
        sender: "customer",
        name: "Sarah",
        message: "Hi, I need help tracking my order #12345. I placed it last week but haven't received any updates.",
        time: "2:34 PM"
      },
      {
        sender: "ai",
        name: "Alex",
        message: "Hi Sarah! I'd be happy to help you track your order. Let me pull up the details for order #12345.",
        time: "2:34 PM"
      },
      {
        sender: "ai",
        name: "Alex",
        message: "I can see your order was processed and shipped on January 18th via FedEx. Your tracking number is 1234567890. The package is currently in transit and expected to arrive by January 22nd. Would you like me to send you the tracking link?",
        time: "2:35 PM"
      },
      {
        sender: "customer",
        name: "Sarah",
        message: "Yes please! Also, I was charged twice for this order. Can you verify the payment?",
        time: "2:36 PM"
      },
      {
        sender: "ai",
        name: "Alex",
        message: "I've sent the tracking link to your email. Regarding the payment, I can see there was a pending charge that was released on January 19th. You were only charged once ($89.99). The second charge you might be seeing is likely the temporary hold that has since been removed. Your final charge was $89.99 on January 18th.",
        time: "2:37 PM"
      }
    ]
  },
  {
    title: "Product Damage & Return Request",
    category: "Returns & Refunds",
    messages: [
      {
        sender: "customer",
        name: "Mike",
        message: "I received my skincare set yesterday but the serum bottle was cracked and leaked all over the box. I need a replacement.",
        time: "1:15 PM"
      },
      {
        sender: "ai",
        name: "Emma",
        message: "I'm so sorry to hear about the damaged serum bottle, Mike! That's definitely not the experience we want for our customers. I can absolutely help you with a replacement.",
        time: "1:15 PM"
      },
      {
        sender: "ai",
        name: "Emma",
        message: "I've located your order (#67890) for the Premium Skincare Set. I'm processing a replacement serum that will ship today via overnight delivery. You should receive it by tomorrow. No need to return the damaged item - just dispose of it safely.",
        time: "1:16 PM"
      },
      {
        sender: "ai",
        name: "Emma",
        message: "I've also added a 20% discount to your account for the inconvenience. You'll receive an email confirmation shortly with your tracking details. Is there anything else I can help you with today?",
        time: "1:17 PM"
      },
      {
        sender: "customer",
        name: "Mike",
        message: "Wow, that was fast! Thank you so much for the quick resolution and the discount. Great customer service!",
        time: "1:18 PM"
      }
    ]
  }
];

export const LiveChatExamplesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
            Live Chat Examples
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See how our AI handles real customer interactions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch realistic customer service conversations in action. Our AI provides personalized, 
            empathetic responses while handling complex requests autonomously.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {chatExamples.map((example, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Badge variant="outline" className="mb-2">{example.category}</Badge>
                  <h3 className="text-lg font-semibold">{example.title}</h3>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {example.messages.map((message, messageIndex) => (
                    <div 
                      key={messageIndex}
                      className={`flex ${message.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${
                        message.sender === 'customer' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className={
                            message.sender === 'customer' 
                              ? 'bg-blue-100 text-blue-800' 
                              : 'bg-sage-green/10 text-sage-green-dark'
                          }>
                            {message.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'customer'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'customer' 
                              ? 'text-blue-100' 
                              : 'text-gray-500'
                          }`}>
                            {message.name} • {message.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-muted-foreground">AI Agent Online</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View Full Conversation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see how our AI can handle your customer conversations?
          </p>
          <Button variant="sage" size="lg">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};
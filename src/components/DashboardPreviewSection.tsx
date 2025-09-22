import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Users, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react";

const metrics = [
  { label: "Active Conversations", value: "247", change: "+12%", icon: MessageSquare },
  { label: "Customer Satisfaction", value: "98.5%", change: "+2.1%", icon: Users },
  { label: "Response Time", value: "1.2s", change: "-15%", icon: Clock },
  { label: "Resolution Rate", value: "94.8%", change: "+5.3%", icon: CheckCircle }
];

const conversations = [
  {
    id: 1,
    customer: "Sarah Johnson",
    message: "Hi, I need help tracking my order #12345",
    time: "2 min ago",
    status: "active",
    channel: "Website Chat"
  },
  {
    id: 2,
    customer: "Mike Chen",
    message: "Can I get a refund for my recent purchase?",
    time: "5 min ago",
    status: "resolved",
    channel: "Email"
  },
  {
    id: 3,
    customer: "Emma Davis",
    message: "I'm having trouble with the product setup",
    time: "8 min ago",
    status: "escalated",
    channel: "Phone"
  }
];

export const DashboardPreviewSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
            Dashboard & Management
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Manage all customer interactions from one centralized view
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor live agent conversations with customers and handle escalated interactions that require human intervention. 
            Get a high-level overview of key metrics, AI agent performance, and customer insights.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
          <div className="bg-gradient-to-r from-sage-green to-sage-green-dark p-6">
            <h3 className="text-white text-xl font-semibold mb-2">SagePilot Dashboard</h3>
            <p className="text-sage-green-light">Real-time customer support overview</p>
          </div>

          <div className="p-6">
            {/* Metrics Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className="h-5 w-5 text-muted-foreground" />
                      <span className={`text-sm font-medium ${
                        metric.change.startsWith('+') ? 'text-green-600' : 
                        metric.change.startsWith('-') && metric.label === 'Response Time' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="conversations" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="conversations">Live Conversations</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="agents">AI Agents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="conversations" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Active Conversations</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">Live</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {conversations.map((conversation) => (
                        <div key={conversation.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-sage-green/10 rounded-full flex items-center justify-center">
                              <span className="text-sage-green-dark font-medium text-sm">
                                {conversation.customer.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{conversation.customer}</p>
                              <p className="text-sm text-muted-foreground">{conversation.message}</p>
                              <p className="text-xs text-muted-foreground">{conversation.channel} • {conversation.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={
                                conversation.status === 'active' ? 'default' :
                                conversation.status === 'resolved' ? 'secondary' : 'destructive'
                              }
                              className="text-xs"
                            >
                              {conversation.status}
                            </Badge>
                            {conversation.status === 'escalated' && (
                              <AlertCircle className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                        <p>Advanced analytics and insights coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Agent Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">👩‍⚕️</div>
                          <div>
                            <p className="font-medium">Sarah - Skincare Expert</p>
                            <p className="text-sm text-muted-foreground">Handling 42 conversations</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">99.2% Satisfaction</p>
                          <p className="text-xs text-muted-foreground">1.1s avg response</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="text-2xl">👨‍💼</div>
                          <div>
                            <p className="font-medium">Marcus - Insurance Advisor</p>
                            <p className="text-sm text-muted-foreground">Handling 38 conversations</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">98.8% Satisfaction</p>
                          <p className="text-xs text-muted-foreground">1.3s avg response</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
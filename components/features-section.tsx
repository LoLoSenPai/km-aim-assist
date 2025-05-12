import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MousePointer, Gamepad, Settings, Shield, Zap, BarChart, Eye, Wand2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <MousePointer className="h-5 w-5" />,
      title: "Native K/M Feel",
      description: "Maintain the precision and comfort of keyboard and mouse while gaining controller benefits.",
      color: "text-indigo-500 dark:text-indigo-400"
    },
    {
      icon: <Gamepad className="h-5 w-5" />,
      title: "Perfect Controller Emulation",
      description: "Flawlessly tricks games into detecting a controller while you use keyboard and mouse.",
      color: "text-purple-500 dark:text-purple-400"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Anti-Cheat Safe",
      description: "Designed to work with major anti-cheat systems without triggering detection.",
      color: "text-green-500 dark:text-green-400"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Fully Customizable",
      description: "Fine-tune every aspect of the remapper to match your playstyle and preferences.",
      color: "text-sky-500 dark:text-sky-400"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Zero Input Lag",
      description: "Experience instant response with our optimized low-latency processing.",
      color: "text-amber-500 dark:text-amber-400"
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Performance Monitoring",
      description: "Real-time metrics to ensure optimal performance and system resource usage.",
      color: "text-red-500 dark:text-red-400"
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Stealth Mode",
      description: "Optional stealth features to further reduce detection risk during competitive play.",
      color: "text-violet-500 dark:text-violet-400"
    },
    {
      icon: <Wand2 className="h-5 w-5" />,
      title: "One-Click Setup",
      description: "Get up and running in minutes with our easy-to-use configuration wizard.",
      color: "text-teal-500 dark:text-teal-400"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-purple-500/30 bg-purple-500/10 text-purple-400">
            Powerful Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Everything You Need for the Ultimate Gaming Advantage
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Our remapper is designed with competitive gaming in mind, giving you all the tools you need to dominate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/5"
            >
              <CardHeader>
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${feature.color} bg-background border border-border`}>
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="bg-card/30 border border-border rounded-lg p-6 md:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                  Advanced Technology
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Precision Engineered for Competitive Gaming
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our remapper works at the driver level to create a perfect controller simulation that gives you aim assist while maintaining all the precision of keyboard and mouse controls.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dynamic input processing for ultra-low latency",
                    "Advanced analog simulation for smooth aim assist",
                    "Smart profile switching for different games",
                    "Regular updates to maintain compatibility",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden border border-indigo-500/20 shadow-xl shadow-indigo-500/5">
                  <Image
                    src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="AimEdge Pro Interface"
                    width={600}
                    height={338}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-card/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-medium">Constantly updated</div>
                  <div className="text-xs text-muted-foreground">Last update: {new Date().toLocaleDateString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
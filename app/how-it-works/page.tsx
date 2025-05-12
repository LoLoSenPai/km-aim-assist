import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MousePointer, Gamepad, Download, Settings, PlayCircle, Check } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Download className="h-8 w-8" />,
      title: "Purchase & Download",
      description: "Buy AimEdge Pro and receive an instant download link to your email."
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Quick Installation",
      description: "Run the installer and follow the simple setup wizard. The entire process takes less than 2 minutes."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Initial Configuration",
      description: "Set up your preferred key bindings and sensitivity settings using our intuitive interface."
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      title: "Launch AimEdge",
      description: "Start the AimEdge Pro software before launching your game."
    },
    {
      icon: <Gamepad className="h-8 w-8" />,
      title: "Enable Controller Mode",
      description: "Make sure controller support is enabled in your game settings."
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "Play Normally",
      description: "Use your keyboard and mouse as usual while enjoying aim assist benefits."
    }
  ];

  const technicalDetails = [
    {
      title: "Virtual Controller Creation",
      description: "AimEdge Pro creates a virtual controller at the driver level that games recognize as legitimate hardware."
    },
    {
      title: "Input Translation",
      description: "Your mouse movements are translated to analog stick inputs in real-time with our precision algorithms."
    },
    {
      title: "Aim Assist Activation",
      description: "The game detects controller input and automatically enables aim assist features designed for controllers."
    },
    {
      title: "Low-Latency Processing",
      description: "Our optimized code ensures inputs are processed with virtually zero delay, maintaining competitive performance."
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-teal-500/30 bg-teal-500/10 text-teal-400">
              Simple & Effective
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              How AimEdge Pro Works
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Get up and running in minutes with our easy-to-use remapper
            </p>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Setup & Usage Process</h2>
            
            <div className="relative">
              <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30 hidden md:block" />
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 relative">
                    <div className="flex-shrink-0 flex md:block">
                      <div className="w-16 h-16 rounded-full bg-muted-foreground/5 border border-border flex items-center justify-center z-10">
                        {step.icon}
                      </div>
                      <div className="md:hidden ml-4">
                        <span className="inline-block w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:pt-3 flex-1">
                      <div className="hidden md:flex items-center gap-2 mb-1">
                        <span className="inline-block w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <h3 className="text-xl font-semibold md:hidden">{step.title}</h3>
                      <p className="text-muted-foreground mt-2">{step.description}</p>
                    </div>
                    
                    {index === 2 && (
                      <div className="col-span-2 mt-8 md:mt-0 md:col-start-2 rounded-lg overflow-hidden border border-border">
                        <Image 
                          src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="AimEdge Pro Configuration Interface" 
                          width={800} 
                          height={450}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Technical Deep Dive</h2>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                    Advanced Technology
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    Precision Engineered for Competitive Gaming
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    AimEdge Pro works at the driver level to create a perfect controller simulation that gives you aim assist while maintaining all the precision of keyboard and mouse controls.
                  </p>
                  
                  <div className="space-y-4">
                    {technicalDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
                          <span className="text-indigo-400">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{detail.title}</h4>
                          <p className="text-sm text-muted-foreground">{detail.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden border border-indigo-500/20 shadow-xl shadow-indigo-500/5">
                    <Image
                      src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="AimEdge Pro Technical Visualization"
                      width={600}
                      height={338}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Is using AimEdge Pro considered cheating?",
                  answer: "AimEdge Pro simply simulates a controller input device, which is a legitimate input method supported by all games. It doesn't modify game files or inject code into games."
                },
                {
                  question: "Will this get me banned?",
                  answer: "AimEdge Pro is designed to be undetectable by anti-cheat systems as it operates at the driver level, similar to how your actual input devices work."
                },
                {
                  question: "Do I need to use an actual controller?",
                  answer: "No! That's the beauty of AimEdge Pro. You continue using your keyboard and mouse as normal, while our software simulates controller inputs to the game."
                },
                {
                  question: "What games are compatible with AimEdge Pro?",
                  answer: "AimEdge Pro works with most popular FPS and third-person shooter games including Fortnite, Call of Duty, Apex Legends, Destiny 2, Valorant, PUBG, and many more."
                }
              ].map((faq, index) => (
                <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience AimEdge Pro?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of gamers who have already gained the competitive edge with our professional-grade remapper.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              <Link href="/buy" className="flex items-center">
                Buy Now - $29.99 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
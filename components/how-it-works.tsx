"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, MousePointer, Gamepad, Download, Settings, PlayCircle } from "lucide-react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("installation");

  const steps = {
    installation: [
      {
        icon: <Download className="h-6 w-6" />,
        title: "Purchase & Download",
        description: "Buy AimEdge Pro and receive an instant download link to your email."
      },
      {
        icon: <Check className="h-6 w-6" />,
        title: "Run Installer",
        description: "Open the installer and follow the simple setup wizard."
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Initial Configuration",
        description: "Set up your preferred key bindings and sensitivity settings."
      }
    ],
    usage: [
      {
        icon: <PlayCircle className="h-6 w-6" />,
        title: "Launch AimEdge",
        description: "Start the AimEdge Pro software before launching your game."
      },
      {
        icon: <Gamepad className="h-6 w-6" />,
        title: "Enable Controller Mode",
        description: "Make sure controller support is enabled in your game settings."
      },
      {
        icon: <MousePointer className="h-6 w-6" />,
        title: "Play Normally",
        description: "Use your keyboard and mouse as usual while enjoying aim assist benefits."
      }
    ],
    technical: [
      {
        icon: <Gamepad className="h-6 w-6" />,
        title: "Virtual Controller Creation",
        description: "AimEdge creates a virtual controller that games recognize as legitimate hardware."
      },
      {
        icon: <MousePointer className="h-6 w-6" />,
        title: "Input Translation",
        description: "Your mouse movements are translated to analog stick inputs with precision algorithms."
      },
      {
        icon: <Check className="h-6 w-6" />,
        title: "Game Authentication",
        description: "Our system passes all authentication checks that verify controller inputs."
      }
    ]
  };

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-background to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-teal-500/30 bg-teal-500/10 text-teal-400">
            Simple & Effective
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            How AimEdge Pro Works
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running in minutes with our easy-to-use remapper
          </p>
        </div>
        
        <Tabs defaultValue="installation" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="usage">Daily Usage</TabsTrigger>
            <TabsTrigger value="technical">Technical Details</TabsTrigger>
          </TabsList>
          
          {Object.entries(steps).map(([key, stepsList]) => (
            <TabsContent key={key} value={key} className="pt-6">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-indigo-500 to-purple-500 opacity-30" />
                {stepsList.map((step, index) => (
                  <div key={index} className="flex gap-4 mb-8 relative">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-muted-foreground/5 border border-border flex items-center justify-center z-10">
                      {step.icon}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {activeTab === "installation" && (
                <Card className="mt-8 border border-indigo-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">System Requirements</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Minimum</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Windows 10 (64-bit)</li>
                          <li>4GB RAM</li>
                          <li>DirectX 11</li>
                          <li>100MB available space</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Recommended</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>Windows 10/11 (64-bit)</li>
                          <li>8GB RAM</li>
                          <li>DirectX 12</li>
                          <li>100MB available space</li>
                          <li>SSD storage</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "usage" && (
                <Card className="mt-8 border border-indigo-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">Pro Tips</span>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><span className="font-medium">Hotkeys:</span> Use Ctrl+Shift+A to toggle the remapper on/off during gameplay</li>
                      <li><span className="font-medium">Game Profiles:</span> Create different profiles for different games to optimize your experience</li>
                      <li><span className="font-medium">Anti-Cheat:</span> Close the remapper before updating your game to avoid potential conflicts</li>
                      <li><span className="font-medium">Aim Settings:</span> Experiment with different sensitivity settings to find your sweet spot</li>
                    </ul>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "technical" && (
                <Card className="mt-8 border border-indigo-500/20 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-indigo-400 mb-2">
                      <Check className="h-5 w-5" />
                      <span className="font-medium">Compatibility</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      AimEdge Pro works with most popular competitive FPS and third-person shooter games:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {[
                        "Fortnite", "Call of Duty", "Apex Legends", "Destiny 2", 
                        "Valorant", "PUBG", "Overwatch", "Rainbow Six"
                      ].map((game, i) => (
                        <div key={i} className="text-sm p-2 bg-background/50 rounded border border-border">
                          {game}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
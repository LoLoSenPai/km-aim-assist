import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MousePointer, Gamepad, Settings, Shield, Zap, BarChart, Eye, Wand2 } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: "Native K/M Feel",
      description: "Maintain the precision and comfort of keyboard and mouse while gaining controller benefits. AimEdge Pro preserves your mouse sensitivity and key bindings exactly as you like them.",
      color: "text-indigo-500 dark:text-indigo-400"
    },
    {
      icon: <Gamepad className="h-6 w-6" />,
      title: "Perfect Controller Emulation",
      description: "Flawlessly tricks games into detecting a controller while you use keyboard and mouse. Our advanced emulation passes all authentication checks that verify controller inputs.",
      color: "text-purple-500 dark:text-purple-400"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Anti-Cheat Safe",
      description: "Designed to work with major anti-cheat systems without triggering detection. AimEdge Pro operates at the driver level, similar to how your actual input devices work, making it virtually undetectable.",
      color: "text-green-500 dark:text-green-400"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Fully Customizable",
      description: "Fine-tune every aspect of the remapper to match your playstyle and preferences. Adjust stick sensitivity, deadzones, acceleration curves, and button mapping to create your perfect setup.",
      color: "text-sky-500 dark:text-sky-400"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Zero Input Lag",
      description: "Experience instant response with our optimized low-latency processing. AimEdge Pro is engineered for competitive play with imperceptible input delay that won't affect your gameplay.",
      color: "text-amber-500 dark:text-amber-400"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Performance Monitoring",
      description: "Real-time metrics to ensure optimal performance and system resource usage. Monitor CPU/GPU impact, input latency, and simulation accuracy to keep your system running at peak efficiency.",
      color: "text-red-500 dark:text-red-400"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Stealth Mode",
      description: "Optional stealth features to further reduce detection risk during competitive play. Stealth mode minimizes the software's footprint and uses advanced techniques to blend in with normal system processes.",
      color: "text-violet-500 dark:text-violet-400"
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "One-Click Setup",
      description: "Get up and running in minutes with our easy-to-use configuration wizard. The installer handles all driver installations automatically and guides you through initial setup with recommended settings.",
      color: "text-teal-500 dark:text-teal-400"
    }
  ];

  const advancedFeatures = [
    {
      title: "Game-Specific Profiles",
      description: "Create and save custom configurations for different games. Automatically load the right profile when you launch a supported game.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Advanced Aim Settings",
      description: "Fine-tune your aim assist with detailed settings for strength, activation radius, and smoothing. Customize different settings for hipfire vs. ADS for the perfect feel.",
      image: "https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Custom Key Bindings",
      description: "Map any keyboard or mouse input to any controller button or stick movement. Create complex macros and combinations for advanced gameplay mechanics.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-purple-500/30 bg-purple-500/10 text-purple-400">
              Powerful Features
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything You Need for the Ultimate Gaming Advantage
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Our remapper is designed with competitive gaming in mind, giving you all the tools you need to dominate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-200 hover:shadow-md hover:shadow-indigo-500/5"
              >
                <CardHeader>
                  <div className={`h-12 w-12 rounded-full flex items-center justify-center ${feature.color} bg-background border border-border`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                Advanced Capabilities
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">
                Powerful Features for Pro Gamers
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Take your gameplay to the next level with these advanced features
              </p>
            </div>
            
            <div className="space-y-12">
              {advancedFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {[
                        "Intuitive visual interface",
                        "Save and share configurations",
                        "Real-time preview and testing",
                        "Detailed documentation",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="rounded-lg overflow-hidden border border-indigo-500/20 shadow-xl shadow-indigo-500/5">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={338}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-3 py-1 border-green-500/30 bg-green-500/10 text-green-400">
                Compatibility
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">
                Works With All Major Games
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                AimEdge Pro is compatible with a wide range of popular titles
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Fortnite", "Call of Duty: Warzone", "Apex Legends", "Destiny 2", 
                "Valorant", "PUBG", "Overwatch", "Rainbow Six Siege",
                "Battlefield", "Halo Infinite", "Counter-Strike", "Escape from Tarkov",
                "GTA V", "Rogue Company", "Splitgate", "Call of Duty: Modern Warfare"
              ].map((game, i) => (
                <div key={i} className="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 text-center hover:bg-card/50 transition-colors">
                  {game}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <div className="bg-card/30 border border-border rounded-lg p-6 md:p-10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                    Technical Specifications
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    System Requirements
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    AimEdge Pro is optimized to run on most gaming PCs with minimal resource usage
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Minimum Requirements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Windows 10 (64-bit)</li>
                        <li>4GB RAM</li>
                        <li>DirectX 11</li>
                        <li>100MB available space</li>
                        <li>Intel Core i3 / AMD Ryzen 3 or better</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Recommended</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>Windows 10/11 (64-bit)</li>
                        <li>8GB RAM</li>
                        <li>DirectX 12</li>
                        <li>100MB available space</li>
                        <li>Intel Core i5 / AMD Ryzen 5 or better</li>
                        <li>SSD storage</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-background/50 border border-border rounded-lg p-6">
                    <h4 className="font-medium mb-4">Resource Usage</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>CPU Usage</span>
                          <span>0.5-1%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '1%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>RAM Usage</span>
                          <span>~100MB</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '3%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Disk Space</span>
                          <span>100MB</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '2%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Input Latency</span>
                          <span>&lt;1ms</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-amber-500/30 bg-amber-500/10 text-amber-400">
              Limited Time Offer
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience AimEdge Pro?
            </h2>
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
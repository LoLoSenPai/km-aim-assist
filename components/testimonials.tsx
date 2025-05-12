import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex K.",
      role: "Competitive FPS Player",
      avatar: "AK",
      content: "The difference is night and day. I can actually compete with controller players now while keeping the precision of my mouse. Totally worth it.",
      rating: 5
    },
    {
      name: "Jessica M.",
      role: "Twitch Streamer",
      avatar: "JM",
      content: "My viewers kept asking how I improved so quickly. This tool is a game-changer for PC players who want that controller aim assist advantage.",
      rating: 5
    },
    {
      name: "Tyler R.",
      role: "Tournament Player",
      avatar: "TR",
      content: "Been using AimEdge Pro for 3 months now. Literally took me from average to top-tier in Fortnite. The tracking assist is so smooth.",
      rating: 5
    },
    {
      name: "Sophia L.",
      role: "Casual Gamer",
      avatar: "SL",
      content: "Super easy to set up even for someone non-technical like me. Finally feel like I can keep up with my friends who play on console.",
      rating: 4
    },
    {
      name: "Marcus D.",
      role: "eSports Coach",
      avatar: "MD",
      content: "I recommend this to all my students who play on PC. It levels the playing field against controller players while maintaining all the advantages of KBM.",
      rating: 5
    },
    {
      name: "Ryan T.",
      role: "FPS Enthusiast",
      avatar: "RT",
      content: "Been switching between controller and KBM for years. This lets me stick with KBM permanently while getting the aim assist benefits. Best of both worlds.",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-background to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-amber-500/30 bg-amber-500/10 text-amber-400">
            Player Feedback
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied gamers who have improved their gameplay with AimEdge Pro
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/40 bg-card/50 backdrop-blur-sm shadow-sm">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-muted-foreground/20'}`} 
                      fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t border-border">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-muted">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-card/30 border border-border backdrop-blur-sm">
            <span className="text-muted-foreground">Trusted by</span>
            <span className="font-bold text-foreground">15,000+</span>
            <span className="text-muted-foreground">gamers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
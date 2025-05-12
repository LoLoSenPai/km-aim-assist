import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ShieldCheck, Clock } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-md border border-indigo-500/20 rounded-lg p-6 md:p-10 shadow-xl shadow-indigo-500/5">
          <div className="flex flex-col items-center text-center">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              Limited Time Offer
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Dominate Your Competition?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of gamers who have already gained the competitive edge with AimEdge Pro.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-indigo-400" />
                <span>Instant Digital Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-indigo-400" />
                <span>7-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-400" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
            
            <div className="bg-background/50 backdrop-blur-md border border-border rounded-lg p-6 mb-8 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">AimEdge Pro License</div>
                <div className="text-muted-foreground text-sm">Lifetime Access</div>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold">$29.99</div>
                <div className="text-muted-foreground line-through">$49.99</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Full Software License</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lifetime Updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Premium Support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Works with All Major Games</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                <Link href="/buy" className="w-full flex items-center justify-center">
                  Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              By purchasing, you agree to our <Link href="/terms" className="underline underline-offset-4">Terms of Service</Link> and <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
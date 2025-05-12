"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, CreditCard, ShieldCheck, Clock, Download } from "lucide-react";
import { loadStripe } from '@stripe/stripe-js';
import { products } from '@/lib/stripe-config';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function BuyPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: products['K/M Aim Assist'].priceId,
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container px-4 md:px-6">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">Checkout</h1>
              <p className="text-muted-foreground mb-8">Complete your purchase to get instant access to AimEdge Pro</p>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">We'll send your download link to this email</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <RadioGroup 
                      defaultValue="creditCard"
                      onValueChange={(value) => setPaymentMethod(value)}
                    >
                      <div className="flex items-center space-x-2 border border-border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="creditCard" id="creditCard" />
                        <Label htmlFor="creditCard" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                        <div className="flex gap-1">
                          <div className="w-8 h-5 bg-gray-200 rounded"></div>
                          <div className="w-8 h-5 bg-gray-200 rounded"></div>
                          <div className="w-8 h-5 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 border border-border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex-1 cursor-pointer">PayPal</Label>
                        <div className="w-8 h-5 bg-blue-600 rounded"></div>
                      </div>
                      
                      <div className="flex items-center space-x-2 border border-border rounded-lg p-3 cursor-pointer hover:bg-muted/50">
                        <RadioGroupItem value="crypto" id="crypto" />
                        <Label htmlFor="crypto" className="flex-1 cursor-pointer">Cryptocurrency</Label>
                        <div className="w-8 h-5 bg-amber-400 rounded"></div>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Continue to Payment'}
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <ShieldCheck className="h-4 w-4 mr-1" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div>
              <Card className="border border-indigo-500/20 bg-card/50 backdrop-blur-sm shadow-xl shadow-indigo-500/5">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>AimEdge Pro - Lifetime License</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="rounded-lg overflow-hidden border border-border mb-6">
                    <Image 
                      src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="AimEdge Pro" 
                      width={500} 
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-border pb-4">
                      <span>AimEdge Pro License</span>
                      <span>$29.99</span>
                    </div>
                    
                    <div className="flex justify-between text-muted-foreground">
                      <span>Original Price</span>
                      <span className="line-through">$49.99</span>
                    </div>
                    
                    <div className="flex justify-between text-green-500">
                      <span>Discount (40% off)</span>
                      <span>-$20.00</span>
                    </div>
                    
                    <div className="flex justify-between pt-4 border-t border-border font-bold">
                      <span>Total</span>
                      <span>$29.99</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col space-y-4">
                  <div className="w-full p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">40% OFF</Badge>
                      <span className="text-sm">Limited time offer!</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Instant digital delivery</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>7-day money-back guarantee</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Lifetime updates & support</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
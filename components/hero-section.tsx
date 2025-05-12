"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer, Gamepad } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background z-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge variant="outline" className="px-3 py-1 border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
            Competitive Edge For PC Gamers
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Get Console-Level{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Aim Assist
            </span>{" "}
            On Your PC
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-4">
            Play with your keyboard and mouse while simulating a controller to unlock aim assist in your favorite games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
              <Link href="/buy" className="flex items-center">
                Buy Now - $29.99 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative">
          <div className="relative mx-auto max-w-5xl rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AimEdge Pro interface" 
              width={1200} 
              height={675}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center">
                <div className="bg-background/40 backdrop-blur-md rounded-lg p-4 border border-white/10 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5 text-indigo-400" />
                    <span>Keyboard & Mouse Input</span>
                  </div>
                  <div className="text-2xl text-indigo-400">→</div>
                  <div className="flex items-center gap-2">
                    <Gamepad className="h-5 w-5 text-green-400" />
                    <span>Controller Simulation</span>
                  </div>
                  <div className="text-2xl text-indigo-400">→</div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span>
                    <span>Aim Assist Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-5 md:bottom-5 right-5 md:right-10 bg-background/80 backdrop-blur-md border border-indigo-500/30 rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">Undetectable by Anti-Cheat</span>
            </div>
          </div>
        </div>
        
        {/* Clients/Games */}
        <div className="mt-20">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Works with popular games including
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="text-lg font-semibold">Fortnite</span>
            <span className="text-lg font-semibold">Call of Duty</span>
            <span className="text-lg font-semibold">Apex Legends</span>
            <span className="text-lg font-semibold">Destiny 2</span>
            <span className="text-lg font-semibold">Valorant</span>
            <span className="text-lg font-semibold">PUBG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
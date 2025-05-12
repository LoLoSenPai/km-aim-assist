"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link 
          href="/" 
          className="flex items-center space-x-2 text-xl font-bold tracking-tighter"
        >
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text dark:from-indigo-400 dark:to-purple-400">
            AimEdge Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button asChild key={link.href} variant="ghost" className="px-4">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button variant="default" className="ml-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
            <Link href="/buy">Buy Now</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="ml-2"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="mr-2"
          >
            {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className="justify-start w-full text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button 
            className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link href="/buy" className="w-full">Buy Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
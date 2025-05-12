import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General",
      faqs: [
        {
          question: "What is AimEdge Pro?",
          answer: "AimEdge Pro is a controller remapper for PC that allows you to use keyboard and mouse while simulating a controller input. This gives you access to aim assist in games that offer it for controller players, while maintaining the precision of mouse aiming."
        },
        {
          question: "Is using AimEdge Pro considered cheating?",
          answer: "AimEdge Pro simply simulates a controller input device, which is a legitimate input method supported by all games. It doesn't modify game files or inject code into games. You're simply using an alternative input method that the game already supports."
        },
        {
          question: "Will this get me banned?",
          answer: "AimEdge Pro is designed to be undetectable by anti-cheat systems as it operates at the driver level, similar to how your actual input devices work. Thousands of users have been using our tool without issues in competitive games."
        },
        {
          question: "What games are compatible with AimEdge Pro?",
          answer: "AimEdge Pro works with most popular FPS and third-person shooter games including Fortnite, Call of Duty, Apex Legends, Destiny 2, Valorant, PUBG, and many more. Any game that supports controller input and provides aim assist can work with our tool."
        }
      ]
    },
    {
      title: "Technical",
      faqs: [
        {
          question: "How does the installation process work?",
          answer: "After purchase, you'll receive an immediate download link. Run the installer, follow the simple setup wizard, and you'll be ready to go in minutes. The installer handles all driver installations automatically."
        },
        {
          question: "Do I need to use an actual controller?",
          answer: "No! That's the beauty of AimEdge Pro. You continue using your keyboard and mouse as normal, while our software simulates controller inputs to the game, giving you aim assist benefits."
        },
        {
          question: "Will this work on any PC?",
          answer: "AimEdge Pro works on Windows 10 and 11 (64-bit) systems. You'll need a minimum of 4GB RAM and DirectX 11 support. Most gaming PCs easily meet these requirements."
        },
        {
          question: "What happens if a game updates and breaks compatibility?",
          answer: "We provide regular updates to maintain compatibility with game updates. In the rare case that a game update affects functionality, we typically release a patch within 24-48 hours."
        }
      ]
    },
    {
      title: "Purchase & Support",
      faqs: [
        {
          question: "Do you offer refunds?",
          answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with AimEdge Pro. Simply contact our support team with your purchase details to process a refund."
        },
        {
          question: "How long does it take to receive the download after purchase?",
          answer: "You'll receive the download link immediately after your purchase is confirmed. It will be displayed on the confirmation page and also sent to your email address."
        },
        {
          question: "Do I get free updates?",
          answer: "Yes, all AimEdge Pro purchases include lifetime updates. You'll always have access to the latest version with bug fixes and compatibility improvements."
        },
        {
          question: "How can I contact support if I have issues?",
          answer: "You can reach our support team via email at support@aimedgepro.com or through our contact form on the website. We typically respond within 24 hours."
        }
      ]
    },
    {
      title: "Advanced Usage",
      faqs: [
        {
          question: "Can I customize the controller simulation settings?",
          answer: "Yes, AimEdge Pro offers extensive customization options including stick sensitivity, deadzone adjustments, button mapping, and more to tailor the experience to your preferences."
        },
        {
          question: "Is there a way to quickly toggle the remapper on and off?",
          answer: "Yes, you can set up custom hotkeys to enable or disable the remapper instantly during gameplay, allowing you to switch between native KBM and controller simulation seamlessly."
        },
        {
          question: "Can I create different profiles for different games?",
          answer: "Absolutely! AimEdge Pro supports multiple profiles, so you can create optimized settings for each game you play and switch between them easily."
        },
        {
          question: "Does AimEdge Pro affect system performance?",
          answer: "AimEdge Pro is optimized to use minimal system resources and has negligible impact on game performance. It typically uses less than 1% CPU and under 100MB of RAM."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 pt-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-blue-500/30 bg-blue-500/10 text-blue-400">
              Support Center
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about AimEdge Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-20 space-y-2">
                <h3 className="font-medium mb-4">Categories</h3>
                {faqCategories.map((category, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    asChild
                  >
                    <a href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      {category.title}
                    </a>
                  </Button>
                ))}
                
                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Can't find what you're looking for?
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                  <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b border-border"
                      >
                        <AccordionTrigger className="text-left font-medium py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
              
              <div className="mt-12 p-6 border border-border rounded-lg bg-muted/20">
                <h3 className="font-medium mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our support team is ready to help you with any issues or questions you might have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/documentation">View Documentation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
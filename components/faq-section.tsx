import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is using AimEdge Pro considered cheating?",
      answer: "AimEdge Pro simply simulates a controller input device, which is a legitimate input method supported by all games. It doesn't modify game files or inject code into games. You're simply using an alternative input method that the game already supports."
    },
    {
      question: "Will this get me banned?",
      answer: "AimEdge Pro is designed to be undetectable by anti-cheat systems as it operates at the driver level, similar to how your actual input devices work. Thousands of users have been using our tool without issues in competitive games."
    },
    {
      question: "How does the installation process work?",
      answer: "After purchase, you'll receive an immediate download link. Run the installer, follow the simple setup wizard, and you'll be ready to go in minutes. The installer handles all driver installations automatically."
    },
    {
      question: "What games are compatible with AimEdge Pro?",
      answer: "AimEdge Pro works with most popular FPS and third-person shooter games including Fortnite, Call of Duty, Apex Legends, Destiny 2, Valorant, PUBG, and many more. Any game that supports controller input and provides aim assist can work with our tool."
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
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with AimEdge Pro. Simply contact our support team with your purchase details to process a refund."
    }
  ];
  
  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-background to-background z-0" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 border-blue-500/30 bg-blue-500/10 text-blue-400">
            Common Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about AimEdge Pro
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
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
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? <a href="/contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
}
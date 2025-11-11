import glutathioneHero from "@/assets/glutathione-hero.jpg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Testimonials } from "@/components/Testimonials";
import { SocialCTA } from "@/components/SocialCTA";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Sparkles, 
  Heart, 
  Zap,
  CheckCircle2,
  FileText,
  TrendingUp,
  Activity,
  AlertCircle,
  Package,
  Droplet
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const benefits = [
  "Master antioxidant protection against free radicals",
  "Supports liver detoxification pathways",
  "Promotes radiant, even-toned skin",
  "Strengthens immune system function",
  "Enhances energy and athletic recovery",
  "Reduces oxidative stress",
  "Supports cellular health and longevity"
];

const keyBenefits = [
  "Neutralizes free radicals and oxidative stress",
  "Essential for liver detoxification",
  "Supports immune cell function",
  "Promotes healthy skin and collagen production"
];

const howItWorksSteps = [
  {
    icon: FileText,
    title: "Simple consultation",
    description: "Complete a brief consultation to determine if Glutathione therapy is right for you."
  },
  {
    icon: TrendingUp,
    title: "Personalized plan",
    description: "Receive your customized treatment plan based on your health goals."
  },
  {
    icon: Activity,
    title: "Track your progress",
    description: "Experience the benefits and track your improvements over time."
  }
];

const faqs = [
  {
    question: "How do I administer Glutathione?",
    answer: "Glutathione is administered via intramuscular injection. Our medical team will provide detailed instructions and guidance on proper administration technique to ensure safe and effective treatment."
  },
  {
    question: "How often should I receive Glutathione treatments?",
    answer: "Treatment frequency varies based on individual goals and needs. Many patients start with 1-2 injections per week for the first month, then transition to maintenance dosing. Your healthcare provider will recommend the optimal schedule for you."
  },
  {
    question: "What are the side effects?",
    answer: "Glutathione is generally well-tolerated. Some patients may experience mild injection site reactions, temporary flushing, or mild digestive discomfort. Serious side effects are rare. Always discuss any concerns with your healthcare provider."
  },
  {
    question: "How quickly will I see results?",
    answer: "Results vary by individual and treatment goals. Some patients notice increased energy within days, while skin brightening effects may take 3-4 weeks of consistent treatment. Detoxification and immune benefits build over time with regular use."
  },
  {
    question: "Is Glutathione therapy safe?",
    answer: "Glutathione is a naturally occurring compound in your body and is generally considered safe when administered properly. However, it's important to consult with a healthcare provider to ensure it's appropriate for your individual health status."
  },
  {
    question: "Who is a good candidate for Glutathione therapy?",
    answer: "Good candidates include those seeking antioxidant support, detoxification assistance, immune system enhancement, skin health improvement, or increased energy levels. Those with certain medical conditions or taking specific medications should consult their healthcare provider first."
  },
  {
    question: "Can Glutathione help with skin brightening?",
    answer: "Yes, Glutathione is known for its skin brightening effects. It works by inhibiting melanin production and promoting an even skin tone. Results are typically visible after several weeks of consistent treatment."
  }
];

export default function Glutathione() {
  const whatsappNumber = "19548164002";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in learning more about Glutathione therapy.");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/10">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                {/* Hero Image */}
                <div className="order-2 lg:order-1">
                  <img 
                    src={glutathioneHero} 
                    alt="Glutathione molecular structure and liver health visualization - master antioxidant therapy"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Product Info */}
                <div className="order-1 lg:order-2">
                  <Badge variant="outline" className="mb-4">
                    Master Antioxidant
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                    Glutathione Therapy
                  </h1>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Harness the power of your body's master antioxidant. Glutathione is a tripeptide that plays a crucial role in cellular protection, detoxification, and immune function.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 flex items-center gap-2">
                    <span className="inline-block animate-bounce">↓</span>
                    See all treatment options and pricing below
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Start Your Consultation
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Treatment Options & Pricing Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-secondary/5">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Treatment Options & Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the glutathione therapy format that works best for your lifestyle
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="grid gap-8 md:grid-cols-3">
                {/* 10-Week Therapy Plan */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-4">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      10-Week Therapy Plan
                    </h3>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $120
                    </p>
                    <p className="text-muted-foreground mb-6">
                      2000mg vial - Perfect for 10-week at-home or office use
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Complete 10-week supply
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Self-administered or clinic visits
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Comprehensive detox program
                      </li>
                    </ul>
                    <Button 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in the 10-Week Glutathione Therapy Plan ($120).")}`, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Monthly Shots */}
                <Card className="hover:shadow-lg transition-shadow border-primary/50">
                  <CardContent className="pt-6">
                    <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-4">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Monthly Shots
                    </h3>
                    <p className="text-4xl font-bold text-primary mb-4">
                      $60<span className="text-lg font-normal text-muted-foreground">/month</span>
                    </p>
                    <p className="text-muted-foreground mb-6">
                      4 shots per month - Convenient monthly plan for regular detox and antioxidant boost
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        4 shots per month
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Consistent antioxidant support
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Flexible scheduling
                      </li>
                    </ul>
                    <Button 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in the Monthly Glutathione Shots ($60/month).")}`, '_blank')}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* IV Glutathione */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-6 inline-flex items-center justify-center rounded-lg bg-primary/10 p-4">
                      <Droplet className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      IV Glutathione
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      Available upon request
                    </p>
                    <p className="text-muted-foreground mb-6">
                      Ideal for rapid absorption and enhanced effects - Contact us for pricing and details
                    </p>
                    <ul className="space-y-3 mb-6 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Maximum bioavailability
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Faster results
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        Direct cellular delivery
                      </li>
                    </ul>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in IV Glutathione therapy. Can you provide pricing and details?")}`, '_blank')}
                    >
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-secondary/5">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Why Choose Glutathione Therapy?
              </h2>
              <p className="text-lg text-muted-foreground">
                Take charge of your wellness with your body's most powerful antioxidant
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-lg text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* What Is Glutathione Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                What Is Glutathione and Why It Matters
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Glutathione is a tripeptide naturally produced in every cell of your body, composed of three amino acids: glutamine, cysteine, and glycine. It's your body's most important antioxidant and plays a critical role in protecting cells from oxidative damage.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Key Benefits Backed by Research
                </h3>
                <ul className="space-y-4">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground">
                  Unfortunately, glutathione levels naturally decline with age, stress, poor diet, environmental toxins, and illness. Supplementation through injection therapy can help restore optimal levels and support your body's natural defense systems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-primary/5">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Ready to experience Glutathione therapy?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start your journey to enhanced detoxification, immune support, and radiant skin today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                >
                  <span className="mr-2">💬</span>
                  Chat on WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = 'tel:+19548164002'}
                >
                  Call (954) 816-4002
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Science of Glutathione Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-secondary/5">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                The Science of Glutathione
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <AspectRatio ratio={16/9} className="bg-muted rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Heart className="h-16 w-16 mx-auto mb-4 text-primary/40" />
                      <p className="text-sm text-muted-foreground">Cellular Protection</p>
                    </div>
                  </AspectRatio>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Essential for cellular protection
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      At the cellular level, glutathione works as a powerful reducing agent, neutralizing harmful free radicals and reactive oxygen species that can damage DNA, proteins, and cellular membranes. This antioxidant action is fundamental to preventing cellular aging and maintaining optimal health.
                    </p>
                    <p>
                      Glutathione also plays a critical role in detoxification by binding to toxins, heavy metals, and harmful compounds, making them water-soluble so they can be eliminated from the body through urine or bile. This is particularly important for liver function, where glutathione helps process and remove environmental toxins, medications, and metabolic waste products.
                    </p>
                    <p>
                      Additionally, glutathione supports immune function by maintaining the health of immune cells and regulating inflammatory responses. It helps regenerate other important antioxidants like vitamins C and E, creating a comprehensive antioxidant network throughout your body.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <Testimonials />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-secondary/5">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How it works
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="grid gap-8 md:grid-cols-3">
                {howItWorksSteps.map((step, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={100}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Social Media CTA */}
        <SocialCTA />
      </main>

      <Footer />
    </div>
  );
}

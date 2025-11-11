import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { ProgressJourney } from "@/components/ui/ProgressJourney";
import { SocialCTA } from "@/components/SocialCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import liquidLipoInjection from "@/assets/liquid-lipo-injection.jpg";
import liquidLipoResults from "@/assets/liquid-lipo-results.jpg";
import { 
  Scissors,
  Clock,
  Target,
  Sparkles,
  Droplet,
  Zap,
  Radio,
  CheckCircle2,
  Phone,
  Shield
} from "lucide-react";

export default function BodyContouring() {
  const benefits = [
    {
      icon: Scissors,
      title: "Non-Surgical",
      description: "No surgery, needles, or anesthesia required. Safe, FDA-cleared technologies for peace of mind."
    },
    {
      icon: Clock,
      title: "Zero Downtime",
      description: "Return to normal activities immediately. Most treatments take 30-60 minutes during your lunch break."
    },
    {
      icon: Target,
      title: "Targeted Results",
      description: "Precisely target stubborn fat deposits and problem areas that resist diet and exercise."
    },
    {
      icon: Sparkles,
      title: "Natural-Looking",
      description: "Gradual, natural-looking results as your body processes treated fat over 8-12 weeks."
    },
    {
      icon: Shield,
      title: "Permanent Fat Loss",
      description: "Once fat cells are eliminated, they're gone for good. Maintain results with healthy lifestyle."
    }
  ];

  const treatments = [
    {
      title: "Liquid Lipo",
      subtitle: "Non-Surgical Injectable Fat Reduction",
      description: "Sculpt your body without surgery with Liquid Lipo at Vitality Wellness Clinic FL in Weston, Florida. Using PC/DC (phosphatidylcholine/deoxycholate) injections, Liquid Lipo permanently destroys fat cells for a smoother, more contoured silhouette — all with minimal downtime. This advanced treatment targets stubborn fat that doesn't respond to diet or exercise.",
      benefits: [
        "Permanently destroys fat cells",
        "Targets stubborn resistant fat",
        "Non-surgical with minimal downtime",
        "Results visible in weeks"
      ],
      icon: Droplet,
      badge: "Most Popular"
    },
    {
      title: "RF Skin Tightening",
      subtitle: "Collagen-Boosting Technology",
      description: "Radiofrequency energy stimulates collagen production for firmer, tighter skin. Treats sagging skin on face, neck, arms, and abdomen. Progressive improvements over 3-6 months. Perfect for post-weight loss or natural aging concerns.",
      benefits: [
        "Stimulates collagen production",
        "Tightens loose, sagging skin",
        "Face, neck, arms, abdomen",
        "Progressive improvements"
      ],
      icon: Radio
    },
    {
      title: "Ultrasonic Cavitation",
      subtitle: "Cellulite Smoothing & Inch Loss",
      description: "Low-frequency ultrasound breaks down fat cells and smooths cellulite. Non-invasive alternative to liposuction with immediate inch loss and continued improvement. Ideal for circumference reduction and body sculpting.",
      benefits: [
        "Breaks down stubborn fat cells",
        "Smooths cellulite appearance",
        "Immediate inch loss",
        "No surgery or recovery time"
      ],
      icon: Zap
    }
  ];

  const processSteps = [
    {
      title: "Consultation & Mapping",
      description: "We assess your goals and create a customized treatment plan targeting your specific concerns and problem areas.",
      completed: true
    },
    {
      title: "Treatment Sessions",
      description: "Most sessions last 30-60 minutes. You can read, work, or relax during treatment with minimal to no discomfort.",
      completed: true
    },
    {
      title: "Visible Results",
      description: "Initial results appear within 2-4 weeks, with optimal results at 8-12 weeks as your body continues to process treated fat.",
      completed: false
    }
  ];

  const expectations = [
    "No surgery, needles, or anesthesia required",
    "Little to no downtime - return to normal activities immediately",
    "Natural-looking, gradual results",
    "Permanent fat cell reduction in treated areas",
    "Safe, FDA-cleared technologies",
    "Customized treatment plans for your body goals"
  ];

  const pricingOptions = [
    {
      name: "Single Area",
      price: "$299",
      features: [
        "One treatment area",
        "Consultation included",
        "30-60 minute session",
        "Professional assessment"
      ],
      cta: "Book Treatment",
      variant: "default" as const
    },
    {
      name: "Combo Trio",
      price: "$799",
      savings: "Best Value",
      badge: "Popular",
      features: [
        "Three treatment areas",
        "Comprehensive body mapping",
        "Customized treatment plan",
        "Follow-up consultations included"
      ],
      cta: "Start Contouring",
      variant: "strong" as const,
      highlighted: true
    },
    {
      name: "Multi-Area Package",
      price: "Custom",
      features: [
        "5+ treatment areas",
        "Maximum savings",
        "Priority scheduling",
        "Personalized protocol"
      ],
      cta: "Get Quote",
      variant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection animation="fade-in">
                <Badge variant="outline" className="mb-6 bg-white border-vitality-teal text-vitality-teal">
                  Non-Surgical Body Sculpting
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Sculpt Your Ideal Silhouette
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Non-surgical solutions for targeted fat reduction and skin tightening
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our advanced body contouring technologies offer non-invasive alternatives to surgery. Target stubborn fat deposits, tighten loose skin, and smooth cellulite without downtime or incisions. Achieve your body goals with FDA-cleared treatments that deliver real, visible results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#treatments">View Treatments</a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">The Non-Surgical Advantage</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Why Choose Non-Invasive Contouring?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transform your body without surgery, scars, or significant downtime. Modern technology makes body sculpting safer and more accessible than ever.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <GlassmorphicCard className="h-full hover-scale">
                    <GlassmorphicCardContent className="p-6">
                      <benefit.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </GlassmorphicCardContent>
                  </GlassmorphicCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section id="treatments" className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Advanced Technologies</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Our Non-Surgical Solutions
              </h2>
            </AnimatedSection>

            {/* Liquid Lipo Image - Before Treatments */}
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="mb-12 flex justify-center">
                <div className="max-w-3xl w-full">
                  <img 
                    src={liquidLipoInjection} 
                    alt="Liquid Lipo injection treatment procedure - non-surgical fat reduction"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Treatment Cards in 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {treatments.map((treatment, index) => {
                const Icon = treatment.icon;
                
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        {treatment.badge && (
                          <Badge className="mb-4 bg-vitality-gold text-white">
                            {treatment.badge}
                          </Badge>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="h-10 w-10 text-primary" />
                          <div>
                            <h3 className="text-2xl font-serif font-semibold">{treatment.title}</h3>
                            <p className="text-sm text-primary font-semibold">{treatment.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {treatment.description}
                        </p>
                        <div className="space-y-2">
                          {treatment.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>

            {/* Liquid Lipo Results Image - After Treatments */}
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex justify-center">
                <div className="max-w-3xl w-full">
                  <img 
                    src={liquidLipoResults} 
                    alt="Liquid Lipo treatment results - body contouring before and after"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Call to Action Button */}
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="mt-12 text-center">
                <Button variant="metallic" size="lg" asChild>
                  <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                    Schedule Your Consultation
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Your Journey</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                The Body Contouring Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From your first consultation to visible results, we guide you through every step of your body transformation.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ProgressJourney steps={processSteps} />
            </AnimatedSection>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Set Your Expectations</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                What to Expect
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expectations.map((expectation, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{expectation}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Liquid Lipo FAQ Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Everything You Need to Know</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Liquid Lipo Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about this innovative treatment
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Is Liquid Lipo the same as liposuction?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    No, Liquid Lipo is a non-surgical injectable treatment that permanently destroys fat cells. Liposuction is a surgical procedure that manually removes fat cells through suction. Liquid Lipo is ideal for smaller, localized areas of fat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What is deoxycholic acid, and how does it work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Deoxycholic acid is a naturally occurring molecule in the body that helps break down and absorb fat. When used in a cosmetic injectable, it destroys fat cells in the treated area, which are then cleared away by the body over time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Is Liquid Lipo a one-time treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    It depends on the amount of fat being treated. While the treated fat cells are destroyed permanently, multiple sessions (typically 3-4) spaced several weeks apart are often needed to achieve the desired level of fat reduction and contouring.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    Will I have loose skin after Liquid Lipo?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Liquid Lipo is most effective for individuals with good skin elasticity. For those with a significant amount of loose skin in the treatment area, the skin may not retract fully, and other procedures may be recommended to achieve a tighter, smoother result.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    What are some common side effects after the injections?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    The most common side effects are swelling, bruising, and some temporary numbness in the treated area. This is a normal part of the process as the deoxycholic acid works to destroy the fat cells. These effects typically subside over a few weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    How soon can I return to exercise after Liquid Lipo?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    Most patients can resume normal activities the same day, with light exercise typically acceptable within 24-48 hours. Strenuous exercise should be avoided for about a week to allow proper healing and minimize swelling.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Affordable Options</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Packages That Work For You
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Flexible pricing options for every body goal. All packages include comprehensive consultation and personalized treatment plans.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {pricingOptions.map((option, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <GlassmorphicCard 
                    variant={option.variant} 
                    className={`h-full flex flex-col ${option.highlighted ? 'scale-105 shadow-glow' : ''}`}
                  >
                    <GlassmorphicCardContent className="p-8 flex flex-col flex-1">
                      {option.badge && (
                        <Badge className="mb-4 bg-vitality-gold text-white self-start">
                          {option.badge}
                        </Badge>
                      )}
                      <h3 className="text-2xl font-serif font-semibold mb-2">{option.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold">{option.price}</span>
                      </div>
                      {option.savings && (
                        <p className="text-sm text-vitality-teal font-semibold mb-4">{option.savings}</p>
                      )}
                      <ul className="space-y-3 mb-8 flex-1">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        variant={option.highlighted ? "metallic" : "metallic-outline"} 
                        size="lg" 
                        className="w-full"
                        asChild
                      >
                        <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">{option.cta}</a>
                      </Button>
                    </GlassmorphicCardContent>
                  </GlassmorphicCard>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={300}>
              <p className="text-sm text-center text-muted-foreground mt-8">
                Save more with multi-area packages. Financing options available for qualified patients.
              </p>
            </AnimatedSection>
          </div>
        </section>



        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/50 via-background to-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-in">
              <p className="font-script text-primary text-2xl mb-4">Your Body, Your Way</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Contour Your Body Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Transform stubborn areas without surgery or downtime. Book your complimentary consultation to create your personalized body contouring plan.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Free Consultation</a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call us at <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a> to discuss your goals
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Ready to Transform Your Body?</h2>
              <p className="text-lg text-muted-foreground">
                Get in touch for a complimentary consultation. We'll assess your goals and create a personalized treatment plan just for you.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <Card>
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
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

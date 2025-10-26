import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { SocialCTA } from "@/components/SocialCTA";
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  Wallet,
  Heart,
  Activity,
  Shield,
  Dumbbell,
  Sparkles,
  CheckCircle2,
  Phone
} from "lucide-react";

export default function VitaminShots() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Bioavailability",
      description: "Bypasses digestive system for maximum nutrient absorption directly into your bloodstream."
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description: "Feel the difference within hours. No waiting days or weeks for effects to accumulate."
    },
    {
      icon: Clock,
      title: "Quick & Convenient",
      description: "5-minute appointments fit seamlessly into your busy schedule. In and out, energized."
    },
    {
      icon: Wallet,
      title: "Cost-Effective",
      description: "Affordable wellness solution that delivers professional-grade nutrients without the premium price."
    }
  ];

  const shots = [
    {
      title: "B12 Energy Boost",
      subtitle: "Combat Fatigue & Brain Fog",
      description: "Supports metabolism and combats fatigue. Ideal for vegetarians and those with absorption issues who need enhanced energy and mental clarity. Essential for red blood cell production and neurological function.",
      benefits: [
        "Increases energy and reduces fatigue",
        "Enhances mental clarity and focus",
        "Supports metabolism and weight management",
        "Improves mood and sleep quality"
      ],
      icon: Zap,
      image: "/placeholder.svg",
      imageAlt: "B12 Energy Boost vitamin shot injection"
    },
    {
      title: "L-Arginine Circulation",
      subtitle: "Blood Flow & Performance",
      description: "Enhances blood flow and cardiovascular health. Supports exercise performance and may help with erectile dysfunction. A natural vasodilator that promotes healthy circulation throughout the body.",
      benefits: [
        "Improves blood flow and circulation",
        "Supports cardiovascular health",
        "Enhances exercise performance",
        "May help with erectile function"
      ],
      icon: Heart,
      badge: "Popular",
      image: "/placeholder.svg",
      imageAlt: "L-Arginine circulation support injection"
    },
    {
      title: "L-Glutamine Gut Care",
      subtitle: "Digestive Health & Healing",
      description: "Promotes digestive health and intestinal lining repair. May help with IBS symptoms and support gut barrier function. Essential for immune system support and protein synthesis.",
      benefits: [
        "Repairs intestinal lining",
        "Reduces IBS symptoms",
        "Supports immune function",
        "Enhances gut barrier integrity"
      ],
      icon: Shield,
      image: "/placeholder.svg",
      imageAlt: "L-Glutamine gut health injection"
    },
    {
      title: "Lipotropic Blend (MIC)",
      subtitle: "Fat Metabolism & Liver Support",
      description: "Targets fat metabolism and supports weight loss efforts. Aids liver function and helps break down fatty deposits naturally. Combination of Methionine, Inositol, and Choline for optimal metabolic support.",
      benefits: [
        "Enhances fat metabolism",
        "Supports liver detoxification",
        "Boosts energy levels",
        "Aids weight management goals"
      ],
      icon: Activity,
      image: "/placeholder.svg",
      imageAlt: "Lipotropic MIC injection for metabolism"
    },
    {
      title: "Amino Acid Complex",
      subtitle: "Muscle Recovery & Performance",
      description: "Supports muscle recovery and athletic endurance. Reduces post-workout soreness and enhances protein synthesis. Essential building blocks for optimal physical performance and recovery.",
      benefits: [
        "Accelerates muscle recovery",
        "Reduces post-workout soreness",
        "Enhances protein synthesis",
        "Improves athletic endurance"
      ],
      icon: Dumbbell,
      image: "/placeholder.svg",
      imageAlt: "Amino acid complex for athletic performance"
    },
    {
      title: "Alpha-Lipoic Acid (ALA)",
      subtitle: "Universal Antioxidant",
      description: "Universal antioxidant that supports blood sugar regulation and enhances nutrient absorption throughout the body. Protects against oxidative stress and supports healthy aging at the cellular level.",
      benefits: [
        "Powerful antioxidant protection",
        "Supports blood sugar regulation",
        "Enhances nutrient absorption",
        "Promotes cellular health"
      ],
      icon: Sparkles,
      image: "/placeholder.svg",
      imageAlt: "Alpha-lipoic acid antioxidant injection"
    }
  ];

  const pricingOptions = [
    {
      name: "Single Shot",
      price: "$25",
      features: [
        "Any IM vitamin shot",
        "Quick 5-minute appointment",
        "Professional administration",
        "Immediate energy boost"
      ],
      cta: "Get Your Shot",
      variant: "default" as const
    },
    {
      name: "4-Shot Pack",
      price: "$89",
      savings: "Save $11",
      badge: "Best Value",
      features: [
        "4 shots of your choice",
        "Mix and match formulas",
        "Priority scheduling",
        "3-month validity"
      ],
      cta: "Buy 4-Pack",
      variant: "strong" as const,
      highlighted: true
    },
    {
      name: "8-Shot Pack",
      price: "$159",
      savings: "Save $41",
      features: [
        "8 shots - ultimate savings",
        "Perfect for monthly routine",
        "Mix and match any formulas",
        "6-month validity"
      ],
      cta: "Buy 8-Pack",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <AnimatedSection animation="fade-in">
                <Badge variant="outline" className="mb-6 bg-white border-vitality-teal text-vitality-teal">
                  Quick IM Injections
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Powerful Nutrients in Minutes
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Targeted wellness shots for immediate energy and vitality support
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our intramuscular (IM) vitamin shots deliver concentrated nutrients directly into your muscle tissue for rapid absorption. Perfect for busy lifestyles, these quick injections provide targeted support without the time commitment of an IV drip. Feel the difference in hours, not days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Your Shot</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#shots">Explore Options</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Image */}
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src="/placeholder.svg" 
                    alt="Professional vitamin shot injection at Vitality Wellness Clinic"
                    className="w-full h-full object-cover"
                  />
                  {/* TODO: Replace with professional image of vitamin shot being administered, close-up of injection vial, or patient receiving treatment */}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">The Injection Advantage</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Why Choose Shots Over Oral Supplements?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Intramuscular injections deliver nutrients where your body can use them immediately, bypassing digestive breakdown for superior results.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
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

        {/* IM Shot Options Section */}
        <section id="shots" className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Targeted Solutions</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Our IM Shot Options
              </h2>
            </AnimatedSection>

            <div className="space-y-16">
              {shots.map((shot, index) => {
                const isEven = index % 2 === 0;
                const Icon = shot.icon;
                
                return (
                  <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Image */}
                      <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={shot.image} 
                            alt={shot.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          {/* TODO: Replace with professional images for each vitamin shot */}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <Card className="h-full">
                          <CardContent className="p-8">
                            {shot.badge && (
                              <Badge className="mb-4 bg-vitality-gold text-white">
                                {shot.badge}
                              </Badge>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                              <Icon className="h-8 w-8 text-primary" />
                              <div>
                                <h3 className="text-2xl font-serif font-semibold">{shot.title}</h3>
                                <p className="text-sm text-primary font-semibold">{shot.subtitle}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {shot.description}
                            </p>
                            <div className="space-y-2 mb-6">
                              {shot.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                            {index === shots.length - 1 && (
                              <Button variant="metallic" size="lg" className="w-full sm:w-auto" asChild>
                                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Get Your Boost</a>
                              </Button>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Simple Pricing</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Packages That Fit Your Routine
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the option that works best for your wellness goals. All shots include professional consultation and administration.
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
                Perfect for weekly or bi-weekly wellness routines. Combine with IV therapy for comprehensive support.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Patient Stories</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Real Energy, Real Results
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in">
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "The B12 shots transformed my energy levels. I was always tired as a vegetarian, but now I feel like myself again. Quick, easy, and effective."
                    </p>
                    <p className="font-semibold">- Jennifer, 38</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "I get the Lipotropic shot weekly as part of my weight loss journey. Combined with diet and exercise, I'm seeing real results. Love the convenience!"
                    </p>
                    <p className="font-semibold">- David, 45</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "The amino acid complex is perfect for my training schedule. I recover faster and my endurance has improved significantly. My secret weapon!"
                    </p>
                    <p className="font-semibold">- Maria, 29</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/50 via-background to-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-in">
              <p className="font-script text-primary text-2xl mb-4">Energize Today</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Get Your Boost in Minutes
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Walk-ins welcome for vitamin shots. No appointment needed—just stop by during business hours and leave feeling revitalized.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Your Shot</a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call us at <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a> for same-day availability
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Questions About Vitamin Shots?</h2>
              <p className="text-lg text-muted-foreground">
                Our wellness team is here to help you choose the right shot for your needs. Consultations are always complimentary.
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

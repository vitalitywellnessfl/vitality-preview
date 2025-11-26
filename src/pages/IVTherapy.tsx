import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { ProgressJourney } from "@/components/ui/ProgressJourney";
import { SocialCTA } from "@/components/SocialCTA";
import ivGlutaglowHero from "@/assets/iv-glutaglow-hero.jpg";
import ivReasonsImage from "@/assets/iv-reasons.jpg";
import { 
  Droplets, 
  Zap, 
  Shield, 
  Sparkles, 
  Star, 
  Activity, 
  Dumbbell,
  ClipboardCheck,
  Armchair,
  CheckCircle2,
  Phone
} from "lucide-react";

export default function IVTherapy() {
  const benefits = [
    {
      icon: Droplets,
      title: "100% Bioavailability",
      description: "Nutrients bypass the digestive system for complete absorption and instant cellular delivery."
    },
    {
      icon: Zap,
      title: "Rapid Energy Boost",
      description: "Feel revitalized within hours. B vitamins and amino acids restore energy at the cellular level."
    },
    {
      icon: Shield,
      title: "Strengthen Defenses",
      description: "High-dose vitamin C and antioxidants fortify your immune system against illness and stress."
    },
    {
      icon: Sparkles,
      title: "Glow from Within",
      description: "Glutathione and vitamin C promote skin radiance, reduce inflammation, and support detoxification."
    }
  ];

  const formulas = [
    {
      title: "Modified Myers Cocktail",
      subtitle: "The Gold Standard",
      description: "B vitamins, magnesium, calcium, and vitamin C work synergistically to support overall wellness, boost energy, and enhance immune function. Perfect for busy professionals, stressed parents, or anyone seeking comprehensive nutritional support.",
      benefits: [
        "Combats fatigue and brain fog",
        "Supports immune function",
        "Reduces inflammation",
        "Enhances mood and focus"
      ],
      icon: Star,
      badge: "Most Popular"
    },
    {
      title: "Inner Radiance",
      subtitle: "Skin Brightening & Anti-Aging",
      description: "High-dose glutathione combined with vitamin C for powerful antioxidant protection. Brightens skin, reduces inflammation, and promotes that coveted healthy glow from within. The ultimate beauty drip.",
      benefits: [
        "Reduces hyperpigmentation",
        "Powerful antioxidant protection",
        "Supports liver detoxification",
        "Enhances skin luminosity"
      ],
      icon: Sparkles
    },
    {
      title: "Slim Fit IV",
      subtitle: "Metabolism & Weight Support",
      description: "L-Carnitine and amino acid blend designed to support metabolism and weight management goals. Helps convert fat into energy while preserving lean muscle mass. Ideal complement to diet and exercise programs.",
      benefits: [
        "Supports fat metabolism",
        "Preserves lean muscle",
        "Boosts energy for workouts",
        "Enhances body composition"
      ],
      icon: Activity
    },
    {
      title: "Athlete Performance",
      subtitle: "Recovery & Endurance",
      description: "Electrolyte-rich formula with amino acids for optimal recovery. Reduces muscle soreness, replenishes depleted nutrients, and accelerates post-workout healing. Used by professional athletes and weekend warriors alike.",
      benefits: [
        "Accelerates muscle recovery",
        "Replenishes electrolytes",
        "Reduces inflammation",
        "Enhances endurance"
      ],
      icon: Dumbbell
    },
    {
      title: "High-Dose Vitamin C",
      subtitle: "Immune System Powerhouse",
      description: "Mega-dose antioxidant therapy for immune system support. May help reduce cold duration, support collagen production, and provide powerful cellular protection. Essential during flu season or times of stress.",
      benefits: [
        "Boosts immune response",
        "Supports collagen synthesis",
        "Powerful antioxidant",
        "Reduces illness duration"
      ],
      icon: Shield
    },
    {
      title: "Hangover Hydration",
      subtitle: "Rapid Rehydration & Relief",
      description: "Rapid rehydration with B-complex vitamins, electrolytes, and anti-nausea medication. Alleviates headache, fatigue, and dehydration symptoms fast. Feel like yourself again in under an hour.",
      benefits: [
        "Immediate rehydration",
        "Relieves headache and nausea",
        "Restores electrolyte balance",
        "Detoxifies and energizes"
      ],
      icon: Droplets
    }
  ];

  const experienceSteps = [
    {
      title: "Personalized Assessment",
      description: "We discuss your wellness goals and recommend the ideal formula for your needs.",
      completed: true
    },
    {
      title: "Relax in Comfort",
      description: "Settle into our luxurious IV lounge with complimentary beverages and entertainment.",
      completed: true
    },
    {
      title: "Gentle IV Administration",
      description: "Our skilled nurses gently insert the IV. Most patients feel minimal discomfort and immediate relaxation.",
      completed: true
    },
    {
      title: "Feel the Benefits",
      description: "Many patients report feeling energized, refreshed, and revitalized within hours of treatment.",
      completed: false
    }
  ];

  const pricingOptions = [
    {
      name: "Single Session",
      price: "$149",
      features: [
        "Any signature formula",
        "Professional consultation",
        "30-45 minute session",
        "Complimentary refreshments"
      ],
      cta: "Book Now",
      variant: "default" as const
    },
    {
      name: "4-Session Bundle",
      price: "$499",
      savings: "Save $97",
      badge: "Best Value",
      features: [
        "Mix and match any formulas",
        "Priority booking",
        "3-month validity",
        "Complimentary add-ons available"
      ],
      cta: "Get Started",
      variant: "strong" as const,
      highlighted: true
    },
    {
      name: "Monthly Membership",
      price: "$79/mo",
      badge: "VIP",
      features: [
        "1 IV session per month",
        "15% off all additional services",
        "Priority booking access",
        "Exclusive member events",
        "Cancel anytime"
      ],
      cta: "Become a VIP",
      variant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBreadcrumb currentPage="IV Therapy" parent={{ name: "Services", path: "/services" }} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <AnimatedSection animation="fade-in">
                <Badge variant="outline" className="mb-6 bg-white border-vitality-teal text-vitality-teal">
                  Advanced Nutrient Therapy
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Transform Your Wellness from Within
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Direct nutrient infusion for optimal absorption and immediate results
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Experience the power of intravenous nutrient therapy. Our IV drips deliver vitamins, minerals, and antioxidants directly into your bloodstream, bypassing the digestive system for 100% absorption and immediate benefits. Whether you're seeking energy, immunity, recovery, or radiance—we have a formula designed for your unique wellness goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Your IV Session</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#formulas">View Our Formulas</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Image */}
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src={ivGlutaglowHero} 
                    alt="IV Drip for Skin - The GlutaGlow Benefits including luminous skin, liver detoxification, and immunity boost"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">The Vitality Difference</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Benefits You Can Feel Immediately
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unlike oral supplements that lose potency through digestion, IV therapy delivers nutrients directly where your body needs them most.
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

        {/* Signature IV Formulas Section */}
        <section id="formulas" className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Personalized Solutions</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Our Signature IV Formulas
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formulas.map((formula, index) => {
                const Icon = formula.icon;
                
                return (
                  <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-8">
                        {formula.badge && (
                          <Badge className="mb-4 bg-vitality-gold text-white">
                            {formula.badge}
                          </Badge>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                          <Icon className="h-10 w-10 text-primary" />
                          <div>
                            <h3 className="text-2xl font-serif font-semibold">{formula.title}</h3>
                            <p className="text-sm text-primary font-semibold">{formula.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {formula.description}
                        </p>
                        <div className="space-y-2">
                          {formula.benefits.map((benefit, i) => (
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

            {/* 3 Reasons to Try IV Therapy */}
            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="mt-16 flex justify-center">
                <div className="max-w-2xl w-full">
                  <img 
                    src={ivReasonsImage} 
                    alt="3 Reasons to Try IV Therapy: Increase Hydration, Maximize Focus, Boost Mood and Energy"
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
                    Schedule Your IV Session
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* The IV Therapy Experience Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">What to Expect</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                The IV Therapy Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Your session begins in our relaxing IV lounge, designed for your comfort and privacy. Each treatment takes approximately 30-45 minutes.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ProgressJourney steps={experienceSteps} />
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing & Packages Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Flexible Options</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Pricing & Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your wellness journey. All formulas include professional consultation and post-treatment support.
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
                Add-ons available: B12 boost ($25), Extra Glutathione ($35), NAD+ ($50)
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Real Results</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                What Our Patients Experience
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in">
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-vitality-gold text-vitality-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "Lina and Dr. Xochi, Without a doubt I recommend you!! Best prices and service!! the IV hydration will make miracles in your skin. If you are in your late 40's like me.. is a must to do it!!!"
                    </p>
                    <p className="font-semibold">- Yeny</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-vitality-gold text-vitality-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "As an athlete, recovery is everything. The Athlete Performance IV has become part of my routine. I bounce back faster and feel stronger. Game changer."
                    </p>
                    <p className="font-semibold">- Marcus, 34</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-vitality-gold text-vitality-gold" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "The Inner Radiance drip transformed my skin. Friends ask what I'm doing differently—my secret weapon is Vitality Wellness IV therapy. The glow is real!"
                    </p>
                    <p className="font-semibold">- Sofia, 42</p>
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
              <p className="font-script text-primary text-2xl mb-4">Your Wellness Awaits</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Book Your IV Therapy Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the immediate benefits of direct nutrient infusion. Whether you're seeking energy, immunity, beauty, or recovery—your personalized wellness journey begins here.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Your Session</a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call us at <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a> for same-day appointments
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Questions About IV Therapy?</h2>
              <p className="text-lg text-muted-foreground">
                Our wellness experts are here to help you choose the perfect formula. All consultations are complimentary and confidential.
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

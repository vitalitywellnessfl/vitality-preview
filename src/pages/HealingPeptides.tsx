import { Navbar } from "@/components/Navbar";
import peptidesHeroImage from "@/assets/peptides-hero.png";
import bpc157Image from "@/assets/bpc-157.png";
import tb500Image from "@/assets/tb-500.png";
import semaxImage from "@/assets/semax.png";
import { Footer } from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { SocialCTA } from "@/components/SocialCTA";
import { 
  Activity,
  Heart,
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
  Phone
} from "lucide-react";

export default function HealingPeptides() {
  const benefits = [
    {
      icon: Activity,
      title: "Accelerated Healing",
      description: "Speed up recovery from injuries and wounds with targeted peptide signaling that activates natural repair mechanisms."
    },
    {
      icon: TrendingUp,
      title: "Enhanced Performance",
      description: "Optimize athletic performance and recovery. Improve endurance, strength, and post-workout regeneration."
    },
    {
      icon: Shield,
      title: "Reduced Inflammation",
      description: "Lower systemic inflammation naturally. Support chronic pain management and joint health without harsh medications."
    },
    {
      icon: Brain,
      title: "Cognitive Enhancement",
      description: "Sharpen mental clarity, focus, and memory. Protect brain health with neuroprotective peptide therapy."
    },
    {
      icon: Heart,
      title: "Connective Tissue Support",
      description: "Strengthen joints, tendons, and ligaments. Essential for athletes and those with repetitive strain injuries."
    }
  ];

  const peptides = [
    {
      title: "BPC-157",
      subtitle: "Body Protection Compound",
      description: "Promotes rapid tissue repair and healing. Supports joint health, tendon recovery, and gut lining repair. Popular among athletes for injury recovery and chronic pain management. Known as the 'Wolverine peptide' for its remarkable regenerative properties.",
      benefits: [
        "Accelerates soft tissue healing",
        "Repairs tendons and ligaments",
        "Supports gut lining integrity",
        "Reduces chronic inflammation"
      ],
      icon: Shield,
      badge: "Most Popular",
      image: bpc157Image,
      imageAlt: "BPC-157 healing peptide therapy"
    },
    {
      title: "TB-500",
      subtitle: "Thymosin Beta-4",
      description: "Reduces inflammation and accelerates wound healing. Improves flexibility, promotes new blood vessel growth, and supports muscle recovery after intense training or injury. Particularly effective for chronic injuries that won't heal with conventional treatment.",
      benefits: [
        "Accelerates wound healing",
        "Promotes new blood vessel formation",
        "Improves flexibility and range of motion",
        "Reduces acute and chronic inflammation"
      ],
      icon: Activity,
      image: tb500Image,
      imageAlt: "TB-500 recovery peptide therapy"
    },
    {
      title: "Semax",
      subtitle: "Cognitive Enhancement Peptide",
      description: "Cognitive enhancement peptide that supports brain health. Improves focus, memory, and mental clarity while providing neuroprotective benefits and mood stabilization. Developed in Russia for cosmonauts and now available for optimal mental performance.",
      benefits: [
        "Enhances focus and concentration",
        "Improves memory and learning",
        "Provides neuroprotective benefits",
        "Stabilizes mood and reduces anxiety"
      ],
      icon: Brain,
      image: semaxImage,
      imageAlt: "Semax cognitive enhancement peptide"
    }
  ];

  const idealCandidates = [
    "Athletes recovering from acute or chronic injuries",
    "Individuals with persistent inflammation or pain",
    "Those seeking cognitive performance enhancement",
    "People with joint or connective tissue concerns",
    "Anyone optimizing their body's natural healing",
    "Biohackers seeking cutting-edge wellness solutions"
  ];

  const pricingOptions = [
    {
      name: "Starter Vial",
      price: "$199",
      features: [
        "Single peptide vial",
        "Comprehensive consultation",
        "Injection training included",
        "Follow-up support"
      ],
      cta: "Start Healing",
      variant: "default" as const
    },
    {
      name: "3-Vial Bundle",
      price: "$549",
      savings: "Save $48",
      badge: "Best Value",
      features: [
        "Three peptide vials",
        "Mix and match formulas",
        "Extended consultation",
        "Injection supplies included",
        "Priority support"
      ],
      cta: "Get Bundle",
      variant: "strong" as const,
      highlighted: true
    },
    {
      name: "Custom Protocol",
      price: "Custom",
      features: [
        "Personalized peptide stack",
        "6+ month protocol",
        "Monthly check-ins",
        "Performance tracking",
        "Optimal results"
      ],
      cta: "Consult Now",
      variant: "default" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageBreadcrumb currentPage="Healing Peptides" parent={{ name: "Services", path: "/services" }} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <AnimatedSection animation="fade-in">
                <Badge variant="outline" className="mb-6 bg-white border-vitality-teal text-vitality-teal">
                  Advanced Regenerative Therapy
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Unlock Your Body's Healing Potential
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Accelerated healing and enhanced performance through therapeutic peptides
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Peptides are short chains of amino acids that act as signaling molecules in the body. Our therapeutic peptides support natural healing processes, enhance recovery, and optimize physical and cognitive performance. Experience cutting-edge regenerative medicine that works with your biology, not against it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#peptides">Explore Peptides</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Image */}
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src={peptidesHeroImage} 
                    alt="Therapeutic peptide healing therapy at Vitality Wellness Clinic"
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
              <p className="font-script text-primary text-2xl mb-4">The Peptide Advantage</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Benefits of Peptide Therapy
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Natural, targeted healing without harsh side effects. Peptides work with your body's existing systems to optimize performance and recovery.
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

        {/* Peptide Offerings Section */}
        <section id="peptides" className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Therapeutic Solutions</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Our Peptide Offerings
              </h2>
            </AnimatedSection>

            <div className="space-y-16">
              {peptides.map((peptide, index) => {
                const isEven = index % 2 === 0;
                const Icon = peptide.icon;
                
                return (
                  <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Image */}
                      <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={peptide.image} 
                            alt={peptide.imageAlt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <Card className="h-full">
                          <CardContent className="p-8">
                            {peptide.badge && (
                              <Badge className="mb-4 bg-vitality-gold text-white">
                                {peptide.badge}
                              </Badge>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                              <Icon className="h-8 w-8 text-primary" />
                              <div>
                                <h3 className="text-2xl font-serif font-semibold">{peptide.title}</h3>
                                <p className="text-sm text-primary font-semibold">{peptide.subtitle}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {peptide.description}
                            </p>
                            <div className="space-y-2 mb-6">
                              {peptide.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                            {index === peptides.length - 1 && (
                              <Button variant="metallic" size="lg" className="w-full sm:w-auto" asChild>
                                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Start Peptide Therapy</a>
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

        {/* Who Benefits Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Is Peptide Therapy Right for You?</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Who Benefits from Peptide Therapy?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {idealCandidates.map((candidate, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{candidate}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-center text-muted-foreground">
                      Peptide therapy is ideal for anyone interested in optimizing their body's natural healing capabilities through targeted, science-backed interventions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Investment in Healing</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All packages include comprehensive consultation, injection training, and ongoing support. Start your regenerative journey today.
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
                All vials include injection training and supplies. Self-administration at home for your convenience.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Real Healing Stories</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Patient Experiences
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in">
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "BPC-157 healed my chronic shoulder injury that plagued me for years. Physical therapy helped, but peptides took my recovery to the next level. I'm pain-free now."
                    </p>
                    <p className="font-semibold">- Derek, 35</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "Semax transformed my mental clarity. As a busy entrepreneur, I need to be sharp all day. This peptide gives me an edge without jitters or crashes."
                    </p>
                    <p className="font-semibold">- Sarah, 42</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "TB-500 accelerated my post-surgery recovery dramatically. My surgeon was impressed with how quickly I healed. Peptides are the real deal."
                    </p>
                    <p className="font-semibold">- Michael, 48</p>
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
              <p className="font-script text-primary text-2xl mb-4">Regenerate & Optimize</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Explore Peptide Therapy Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover how therapeutic peptides can accelerate your healing, enhance performance, and optimize your body's natural capabilities. Start your consultation today.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call us at <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a> to discuss peptide options
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Questions About Peptide Therapy?</h2>
              <p className="text-lg text-muted-foreground">
                Our regenerative medicine specialists are here to answer your questions and create a personalized peptide protocol for your needs.
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

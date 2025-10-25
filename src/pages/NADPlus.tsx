import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  Zap, 
  Brain, 
  Heart,
  Clock,
  Shield,
  CheckCircle2,
  Phone,
  Sparkles,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Cellular Energy Production",
    description: "NAD+ is essential for mitochondrial function, helping your cells produce energy more efficiently for sustained vitality throughout the day."
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    description: "Support mental clarity, focus, and memory by optimizing brain cell function and protecting against age-related cognitive decline."
  },
  {
    icon: Clock,
    title: "Anti-Aging Benefits",
    description: "Activate sirtuins, proteins that regulate cellular aging, DNA repair, and metabolic health to promote healthy longevity."
  },
  {
    icon: Heart,
    title: "Metabolic Support",
    description: "Improve metabolic function, support healthy weight management, and enhance your body's ability to convert food into usable energy."
  },
  {
    icon: Shield,
    title: "Cellular Repair & Recovery",
    description: "NAD+ plays a crucial role in DNA repair mechanisms, helping your body recover from stress and damage at the cellular level."
  }
];

const administrationMethods = [
  {
    title: "NAD+ IV Therapy",
    description: "Direct intravenous infusion for maximum bioavailability and rapid results. Sessions typically last 2-4 hours.",
    benefits: [
      "100% absorption directly into bloodstream",
      "Immediate cellular benefits",
      "Optimal for intensive therapy protocols",
      "Customizable dosing based on your needs"
    ]
  },
  {
    title: "NAD+ Injections",
    description: "Intramuscular or subcutaneous injections offer a convenient middle ground with excellent absorption.",
    benefits: [
      "Faster administration than IV",
      "High bioavailability",
      "Perfect for maintenance therapy",
      "Can be self-administered at home"
    ]
  }
];

export default function NADPlus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-vitality-sky/20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <AnimatedSection animation="fade-in">
                <Badge className="mb-4 bg-vitality-teal text-white">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Cellular Rejuvenation
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  NAD+ Therapy
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Restore cellular energy and optimize biological function
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell of your body, essential for energy production, DNA repair, and cellular communication. As we age, NAD+ levels naturally decline, contributing to fatigue, cognitive decline, and accelerated aging. Our NAD+ therapy replenishes these vital levels to help you feel energized, focused, and revitalized.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book NAD+ Therapy</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#benefits">Explore Benefits</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Stats Card */}
              <AnimatedSection animation="scale-in" delay={200}>
                <Card className="border-2 border-primary/20 shadow-elevated">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">Essential Coenzyme</div>
                        <p className="text-muted-foreground">Present in every living cell in your body</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">50% Decline</div>
                        <p className="text-muted-foreground">NAD+ levels can drop by 50% between ages 40-60</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-primary mb-2">400+ Functions</div>
                        <p className="text-muted-foreground">NAD+ is involved in over 400 biological processes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-vitality-teal" />
                <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                  The Power of NAD+ Therapy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience comprehensive cellular rejuvenation with science-backed NAD+ supplementation
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-2">
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-lg bg-vitality-teal/10 p-3 inline-block">
                        <benefit.icon className="h-8 w-8 text-vitality-teal" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Administration Methods */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Choose Your Method</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                NAD+ Administration Options
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer flexible administration methods to fit your lifestyle and therapeutic goals
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {administrationMethods.map((method, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                  <Card className="h-full border-2 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                      <div className="space-y-3">
                        {method.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <Card className="border-2 border-primary/20 shadow-elevated">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                      NAD+ Therapy Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Transparent pricing for premium cellular rejuvenation therapy
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">NAD+ IV Therapy</h3>
                        <p className="text-sm text-muted-foreground">250mg-500mg per session</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">Starting at $350</div>
                        <p className="text-sm text-muted-foreground">per session</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-muted/30 rounded-lg">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">NAD+ Injections</h3>
                        <p className="text-sm text-muted-foreground">Intramuscular or subcutaneous</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">Starting at $150</div>
                        <p className="text-sm text-muted-foreground">per injection</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-vitality-teal/5 rounded-lg border border-vitality-teal/20">
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Package pricing available for multi-session protocols. Many patients see optimal results with a series of 4-6 treatments.
                    </p>
                    <div className="text-center">
                      <Button variant="metallic" size="lg" asChild>
                        <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                          Schedule Consultation
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-vitality-charcoal text-white">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fade-in">
              <p className="font-script text-vitality-teal text-2xl mb-4">Cellular Optimization</p>
              <h2 className="text-3xl font-serif font-semibold text-white sm:text-4xl mb-6">
                Experience the NAD+ Difference
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to boost your cellular energy, enhance mental clarity, and support healthy aging? Schedule your NAD+ therapy consultation today.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Start NAD+ Therapy</a>
              </Button>
              <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Questions? Call us at <a href="tel:9548164002" className="text-vitality-teal hover:underline">(954) 816-4002</a>
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

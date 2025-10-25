import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  Shield, 
  Sparkles, 
  Heart,
  Droplet,
  Sun,
  CheckCircle2,
  Phone,
  Zap,
  ArrowRight
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Master Antioxidant",
    description: "Glutathione is your body's most powerful antioxidant, neutralizing free radicals and protecting cells from oxidative stress and damage."
  },
  {
    icon: Droplet,
    title: "Detoxification Support",
    description: "Essential for liver function and detoxification pathways, helping your body eliminate toxins, heavy metals, and harmful substances."
  },
  {
    icon: Sun,
    title: "Skin Brightening",
    description: "Promotes radiant, even-toned skin by reducing melanin production and supporting collagen synthesis for a healthy, youthful glow."
  },
  {
    icon: Heart,
    title: "Immune Enhancement",
    description: "Strengthens immune system function by supporting white blood cell production and optimizing immune response to pathogens."
  },
  {
    icon: Zap,
    title: "Energy & Recovery",
    description: "Reduces oxidative stress in muscles, enhances athletic performance, and accelerates post-workout recovery."
  }
];

const administrationMethods = [
  {
    title: "Glutathione IV Push",
    description: "Rapid intravenous administration for immediate bioavailability and maximum impact. The gold standard for glutathione supplementation.",
    benefits: [
      "100% absorption directly into bloodstream",
      "Quick 15-20 minute administration",
      "Immediate antioxidant effects",
      "Optimal for skin brightening goals"
    ]
  },
  {
    title: "Glutathione Injections",
    description: "Intramuscular injections provide excellent absorption with convenient administration for regular maintenance therapy.",
    benefits: [
      "Fast 5-minute procedure",
      "High bioavailability",
      "Perfect for ongoing wellness",
      "Easy to incorporate into routine"
    ]
  },
  {
    title: "IV Therapy Add-On",
    description: "Add glutathione to any of our IV therapy formulas for enhanced antioxidant protection and complementary benefits.",
    benefits: [
      "Synergistic with vitamin therapies",
      "Enhances overall treatment benefits",
      "Cost-effective combination option",
      "Customizable dosing"
    ]
  }
];

export default function Glutathione() {
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
                <Badge className="mb-4 bg-vitality-gold text-white">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Master Antioxidant
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Glutathione Therapy
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Your body's most powerful antioxidant for detox, immunity, and radiant skin
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Glutathione is a tripeptide composed of three amino acids (glutamine, cysteine, and glycine) naturally produced in your cells. It's your body's primary defense against oxidative stress, toxins, and cellular damage. Our glutathione therapy replenishes and optimizes your levels for enhanced detoxification, immune function, and skin radiance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Glutathione Therapy</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#benefits">Learn More</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Highlight Card */}
              <AnimatedSection animation="scale-in" delay={200}>
                <Card className="border-2 border-vitality-gold/20 shadow-elevated">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <div className="text-4xl font-bold text-vitality-gold mb-2">Master Antioxidant</div>
                        <p className="text-muted-foreground">The most important molecule for maintaining cellular health</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-vitality-gold mb-2">Every Cell</div>
                        <p className="text-muted-foreground">Produced naturally in every cell of your body</p>
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-vitality-gold mb-2">$120/Vial</div>
                        <p className="text-muted-foreground">Premium therapeutic-grade glutathione</p>
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
                <Shield className="h-8 w-8 text-vitality-gold" />
                <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                  Benefits of Glutathione Therapy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience comprehensive cellular protection and rejuvenation with the body's master antioxidant
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Card className="h-full hover:shadow-lg transition-shadow border-2">
                    <CardContent className="p-6">
                      <div className="mb-4 rounded-lg bg-vitality-gold/10 p-3 inline-block">
                        <benefit.icon className="h-8 w-8 text-vitality-gold" />
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

        {/* Who Benefits Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <Card className="border-2">
                <CardContent className="p-8 lg:p-12">
                  <h2 className="text-3xl font-serif font-semibold text-foreground mb-6 text-center">
                    Who Benefits from Glutathione?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Individuals seeking skin brightening and anti-aging benefits",
                      "Those exposed to environmental toxins or pollutants",
                      "People with chronic fatigue or low energy",
                      "Athletes looking to enhance recovery",
                      "Anyone supporting liver health and detoxification",
                      "Individuals with compromised immune systems",
                      "Those managing oxidative stress from illness",
                      "People seeking overall wellness optimization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Administration Methods */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-vitality-gold text-2xl mb-4">Flexible Options</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                How to Receive Glutathione
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the administration method that best fits your wellness goals and lifestyle
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                            <span className="text-sm text-muted-foreground">{benefit}</span>
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
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <Card className="border-2 border-vitality-gold/20 shadow-elevated">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
                      Glutathione Pricing
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Premium therapeutic-grade glutathione therapy
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 bg-white rounded-lg border-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">Glutathione IV Push</h3>
                        <p className="text-sm text-muted-foreground">200mg-600mg per session</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-vitality-gold">$120</div>
                        <p className="text-sm text-muted-foreground">per vial</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-white rounded-lg border-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">Glutathione Injections</h3>
                        <p className="text-sm text-muted-foreground">Intramuscular administration</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-vitality-gold">$100</div>
                        <p className="text-sm text-muted-foreground">per injection</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-6 bg-white rounded-lg border-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">IV Therapy Add-On</h3>
                        <p className="text-sm text-muted-foreground">Add to any IV formula</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-vitality-gold">$80</div>
                        <p className="text-sm text-muted-foreground">per dose</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-vitality-gold/5 rounded-lg border border-vitality-gold/20">
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      Package discounts available for series treatments. Many patients choose weekly or bi-weekly sessions for optimal results.
                    </p>
                    <div className="text-center">
                      <Button variant="metallic" size="lg" asChild>
                        <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                          Book Your Session
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
              <p className="font-script text-vitality-gold text-2xl mb-4">Radiant From Within</p>
              <h2 className="text-3xl font-serif font-semibold text-white sm:text-4xl mb-6">
                Experience Glutathione Therapy
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to enhance your body's natural defense system, support detoxification, and achieve radiant skin? Start your glutathione therapy today.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Your Session</a>
              </Button>
              <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Questions? Call us at <a href="tel:9548164002" className="text-vitality-gold hover:underline">(954) 816-4002</a>
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

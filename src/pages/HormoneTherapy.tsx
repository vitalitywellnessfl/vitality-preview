import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { ProgressJourney } from "@/components/ui/ProgressJourney";
import { 
  Heart,
  Smile,
  Zap,
  Moon,
  Brain,
  TrendingUp,
  Activity,
  Sparkles,
  CheckCircle2,
  Phone,
  Users
} from "lucide-react";
import hrtHeroImage from "@/assets/hrt-hero.jpg";

export default function HormoneTherapy() {
  const benefits = [
    {
      icon: Smile,
      title: "Balanced Mood",
      description: "Emotional stability and wellbeing. Reduce mood swings, irritability, and anxiety through optimal hormone levels."
    },
    {
      icon: Zap,
      title: "Increased Energy",
      description: "Combat chronic fatigue and restore vitality. Feel like yourself again with optimized hormone balance."
    },
    {
      icon: Heart,
      title: "Enhanced Libido",
      description: "Restore sexual function and desire. Address intimacy concerns with targeted hormone optimization."
    },
    {
      icon: Activity,
      title: "Muscle & Bone Health",
      description: "Improved bone density and muscle mass. Protect against age-related decline and osteoporosis."
    },
    {
      icon: Moon,
      title: "Better Sleep",
      description: "Deeper, more restorative sleep quality. Wake refreshed as hormones regulate your sleep cycle."
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Sharper focus and cognitive function. Clear the brain fog that comes with hormone imbalance."
    }
  ];

  const treatments = [
    {
      title: "Bioidentical Estrogen/Progesterone",
      subtitle: "For Women",
      description: "Address symptoms of perimenopause and menopause including hot flashes, mood swings, sleep disturbances, and decreased libido. Restore hormonal balance for improved quality of life. Our bioidentical hormones are structurally identical to your body's natural hormones, offering a safer and more effective alternative to synthetic hormones.",
      benefits: [
        "Eliminates hot flashes and night sweats",
        "Stabilizes mood and reduces anxiety",
        "Improves sleep quality",
        "Restores sexual function and desire",
        "Supports bone density and heart health",
        "Enhances skin health and vitality"
      ],
      icon: Sparkles,
      badge: "Women's Health",
      image: "/placeholder.svg",
      imageAlt: "Bioidentical hormone therapy for women at Vitality Wellness"
    },
    {
      title: "Testosterone Therapy",
      subtitle: "For Men",
      description: "Combat low testosterone (Low T) symptoms including fatigue, decreased muscle mass, low libido, and mood changes. Optimize testosterone levels for enhanced vitality and performance. Whether you're experiencing age-related decline or other causes of Low T, we create personalized protocols to restore your masculine vitality.",
      benefits: [
        "Increases energy and reduces fatigue",
        "Builds lean muscle mass",
        "Enhances libido and sexual performance",
        "Improves mood and confidence",
        "Sharpens mental clarity and focus",
        "Supports healthy weight management"
      ],
      icon: TrendingUp,
      badge: "Men's Health",
      image: "/placeholder.svg",
      imageAlt: "Testosterone replacement therapy for men at Vitality Wellness"
    }
  ];

  const processSteps = [
    {
      title: "Lab Testing",
      description: "Comprehensive hormone panel to establish baseline levels and identify deficiencies or imbalances.",
      completed: true
    },
    {
      title: "Personalized Protocol",
      description: "Custom dosing based on your lab results, symptoms, and wellness goals. We optimize rather than simply replace.",
      completed: true
    },
    {
      title: "Delivery Options",
      description: "Choose from monthly injections, topical creams, or other delivery methods based on your lifestyle and preferences.",
      completed: true
    },
    {
      title: "Ongoing Monitoring",
      description: "Regular follow-up labs and consultations to adjust dosing and ensure optimal results.",
      completed: false
    }
  ];

  const symptoms = [
    "Chronic fatigue or low energy",
    "Mood changes, irritability, or anxiety",
    "Unexplained weight gain or difficulty losing weight",
    "Decreased libido or sexual dysfunction",
    "Sleep disturbances or insomnia",
    "Brain fog or memory issues",
    "Hot flashes or night sweats (women)",
    "Loss of muscle mass or bone density",
    "Depression or lack of motivation",
    "Hair loss or thinning"
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
                  Bioidentical Hormone Optimization
                </Badge>
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Restore Your Hormonal Balance
                </h1>
                <p className="text-xl font-serif text-muted-foreground mb-6">
                  Personalized bioidentical hormone replacement for balanced wellness
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Hormone imbalances can significantly impact quality of life. Our bioidentical hormone replacement therapy uses hormones structurally identical to those your body produces naturally, offering a personalized approach to hormone optimization. Experience renewed vitality, balanced mood, and restored wellbeing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="metallic" size="lg" asChild>
                    <a href="/book">Book Consultation</a>
                  </Button>
                  <Button variant="metallic-outline" size="lg" asChild>
                    <a href="#treatments">View Options</a>
                  </Button>
                </div>
              </AnimatedSection>

              {/* Right Column - Image */}
              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img 
                    src={hrtHeroImage} 
                    alt="Bioidentical hormone replacement therapy at Vitality Wellness Clinic"
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
              <p className="font-script text-primary text-2xl mb-4">The Benefits of Balance</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Benefits of HRT
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Optimize your hormones, transform your life. Experience the profound impact of balanced hormones on your physical, mental, and emotional wellbeing.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
              <p className="font-script text-primary text-2xl mb-4">Personalized Solutions</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Treatment Options
              </h2>
            </AnimatedSection>

            <div className="space-y-16">
              {treatments.map((treatment, index) => {
                const isEven = index % 2 === 0;
                const Icon = treatment.icon;
                
                return (
                  <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* Image */}
                      <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                          <img 
                            src={treatment.image} 
                            alt={treatment.imageAlt}
                            className="w-full h-full object-cover"
                          />
                          {/* TODO: Replace with professional images for each treatment type */}
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <Card className="h-full">
                          <CardContent className="p-8">
                            <Badge className="mb-4 bg-vitality-gold text-white">
                              {treatment.badge}
                            </Badge>
                            <div className="flex items-center gap-3 mb-4">
                              <Icon className="h-8 w-8 text-primary" />
                              <div>
                                <h3 className="text-2xl font-serif font-semibold">{treatment.title}</h3>
                                <p className="text-sm text-primary font-semibold">{treatment.subtitle}</p>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {treatment.description}
                            </p>
                            <div className="space-y-2 mb-6">
                              {treatment.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                            {index === treatments.length - 1 && (
                              <Button variant="metallic" size="lg" className="w-full sm:w-auto" asChild>
                                <a href="/book">Start Your Journey</a>
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

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Your Path to Balance</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Our Comprehensive Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From initial testing to ongoing optimization, we guide you through every step of your hormone therapy journey.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ProgressJourney steps={processSteps} />
            </AnimatedSection>
          </div>
        </section>

        {/* Is HRT Right for You Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Could This Be You?</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Is HRT Right for You?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                If you're experiencing any of these symptoms of hormone imbalance, HRT may help restore your quality of life.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <Card className="max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {symptoms.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-border text-center">
                    <p className="text-muted-foreground mb-6">
                      Schedule a consultation to discuss your symptoms and determine if hormone optimization is appropriate for your wellness journey.
                    </p>
                    <Button variant="metallic" size="lg" asChild>
                      <a href="/book">Schedule Your Consultation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Investment in Vitality</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Get Started
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Pricing customized based on your lab results and treatment protocol. We create personalized plans that fit your needs and budget.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={200}>
              <GlassmorphicCard variant="strong" className="max-w-2xl mx-auto">
                <GlassmorphicCardContent className="p-10">
                  <div className="text-center mb-8">
                    <Badge className="mb-4 bg-vitality-gold text-white">
                      Comprehensive Care
                    </Badge>
                    <h3 className="text-3xl font-serif font-semibold mb-4">Personalized HRT Program</h3>
                    <p className="text-4xl font-bold mb-2">Custom Pricing</p>
                    <p className="text-sm text-muted-foreground">Based on your unique needs</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Comprehensive lab work and hormone panel</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">In-depth consultation with hormone specialist</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Personalized treatment plan and protocol</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Bioidentical hormones and delivery supplies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Ongoing monitoring and dosage adjustments</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Regular follow-up labs and consultations</span>
                    </div>
                  </div>

                  <Button variant="metallic" size="lg" className="w-full" asChild>
                    <a href="/book">Start HRT Consultation</a>
                  </Button>
                </GlassmorphicCardContent>
              </GlassmorphicCard>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Life-Changing Results</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Patient Success Stories
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="scale-in">
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "Bioidentical HRT changed my life. The hot flashes are gone, I sleep through the night, and I feel like myself again. Menopause doesn't have to be miserable!"
                    </p>
                    <p className="font-semibold">— Patricia, 52</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={100}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "Testosterone therapy gave me my energy back. I'm building muscle again, my mood is stable, and my confidence is through the roof. Worth every penny."
                    </p>
                    <p className="font-semibold">— James, 47</p>
                  </GlassmorphicCardContent>
                </GlassmorphicCard>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <GlassmorphicCard className="h-full">
                  <GlassmorphicCardContent className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-4 italic">
                      "I wish I'd started HRT sooner. The brain fog lifted, my sleep improved, and I finally feel balanced emotionally. This is what optimal feels like."
                    </p>
                    <p className="font-semibold">— Michelle, 49</p>
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
              <p className="font-script text-primary text-2xl mb-4">Reclaim Your Vitality</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Start Your HRT Consultation Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Don't let hormone imbalance control your life. Discover how bioidentical hormone therapy can restore your energy, mood, and overall wellness. Your transformation begins with a simple consultation.
              </p>
              <Button variant="metallic" size="lg" className="mb-6" asChild>
                <a href="/book">Schedule Consultation</a>
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                Call us at <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a> to discuss your symptoms
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-background">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in" className="text-center mb-8">
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Ready to Restore Balance?</h2>
              <p className="text-lg text-muted-foreground">
                Get in touch to schedule your comprehensive hormone evaluation. Our specialists will create a personalized protocol tailored to your unique needs.
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
      </main>

      <Footer />
    </div>
  );
}

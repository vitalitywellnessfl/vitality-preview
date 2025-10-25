import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { ProgressJourney } from "@/components/ui/ProgressJourney";
import { 
  Heart, 
  Users, 
  Trophy, 
  Pill, 
  Calendar, 
  Syringe, 
  Activity, 
  Brain, 
  ClipboardCheck,
  Quote,
  ArrowRight
} from "lucide-react";

export default function ErectileDysfunction() {
  const stats = [
    {
      icon: Users,
      value: "1 in 4",
      label: "Men under 40 experience ED",
      delay: 0
    },
    {
      icon: Trophy,
      value: "85%",
      label: "Success rate with treatment",
      delay: 100
    },
    {
      icon: Heart,
      value: "Thousands",
      label: "Men regained confidence",
      delay: 200
    }
  ];

  const treatments = [
    {
      icon: Pill,
      title: "Oral Medications",
      description: "Reliable, on-demand results with medications like Viagra, Cialis, and Levitra. Perfect for men seeking proven solutions with flexible timing.",
      imageAlt: "FDA-approved oral medications for erectile dysfunction",
      imageLeft: true
    },
    {
      icon: Calendar,
      title: "Daily Treatments",
      description: "Low-dose daily medications for spontaneous intimacy without the need to plan ahead. Restore natural confidence and eliminate performance pressure.",
      imageAlt: "Daily medication regimen for spontaneous intimacy",
      imageLeft: false
    },
    {
      icon: Syringe,
      title: "Injection Therapy",
      description: "Rapid, effective erections when oral medications aren't suitable. Medically supervised treatment with proven results.",
      imageAlt: "Medical injection therapy for erectile dysfunction",
      imageLeft: true
    },
    {
      icon: Activity,
      title: "Lifestyle Optimization",
      description: "Personalized plans for diet, exercise, sleep, and stress management to enhance sexual health naturally. Address root causes for lasting improvement.",
      imageAlt: "Healthy lifestyle choices supporting sexual wellness",
      imageLeft: false
    },
    {
      icon: Brain,
      title: "Psychological Support",
      description: "Guidance for performance anxiety, relationship stress, or porn-induced ED. Mental health is integral to sexual wellness.",
      imageAlt: "Mental health counseling for sexual performance",
      imageLeft: true
    },
    {
      icon: ClipboardCheck,
      title: "Comprehensive Evaluation",
      description: "Identify underlying causes such as hormonal imbalances or cardiovascular issues. Our thorough approach ensures the right treatment for your unique situation.",
      imageAlt: "Comprehensive medical evaluation for ED treatment",
      imageLeft: false,
      showCTA: true
    }
  ];

  const testimonials = [
    {
      quote: "I was embarrassed to seek help in my late 20s. Vitality Wellness made it simple and discreet. The daily Cialis transformed my confidence and relationship.",
      name: "Mark, 32",
      delay: 0
    },
    {
      quote: "I thought my ED was just psychological until a full evaluation revealed a hormonal imbalance. Testosterone therapy combined with counseling restored my sexual function and overall energy.",
      name: "James, 45",
      delay: 100
    },
    {
      quote: "Lifestyle changes alongside medication made all the difference. I lost weight, improved my cardiovascular health, and rarely need medication now. This holistic approach addressed the root cause.",
      name: "Robert, 38",
      delay: 200
    }
  ];

  const journeySteps = [
    {
      title: "Online Consultation",
      description: "Complete a secure, discreet health assessment from home.",
      completed: true
    },
    {
      title: "Physician Review",
      description: "Board-certified doctors craft a personalized treatment plan based on your unique needs.",
      completed: true
    },
    {
      title: "Discreet Delivery",
      description: "FDA-approved medications arrive directly at your door in plain packaging.",
      completed: true
    },
    {
      title: "Ongoing Support",
      description: "Regular follow-ups ensure optimal results and address any concerns.",
      completed: false
    }
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection animation="fade-in" delay={0}>
                <div className="space-y-6">
                  <Badge className="bg-white text-vitality-coral border-2 border-vitality-coral">
                    Men's Sexual Health
                  </Badge>
                  <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Rediscover Confidence and Vitality with Personalized Sexual Health Care
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Vitality Wellness Clinic, we understand that erectile dysfunction (ED) isn't just a physical challenge. It affects confidence, relationships, and the way you experience life. That's why our care isn't one-size-fits-all. We blend science-backed treatments with compassionate, discreet support to help you regain control and confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="metallic" size="lg" asChild>
                      <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                        Start Your Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="metallic-outline" size="lg" asChild>
                      <a href="#treatments">Explore Treatments</a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="scale-in" delay={200}>
                <div className="relative">
                  {/* TODO: Replace with professional image of confident mature man, outdoor activity, or couple embracing */}
                  <img 
                    src="/placeholder.svg" 
                    alt="Confident man living life fully with restored vitality"
                    className="w-full aspect-[4/5] object-cover rounded-2xl shadow-elevated"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <p className="font-script text-primary text-2xl mb-4">Understanding ED</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                You're Not Alone
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                ED affects men of all ages. Whether it's stress, performance anxiety, hormonal changes, or lifestyle factors, ED is often more complex than it seems. At Vitality Wellness, we look at the whole picture: your body, mind, and relationships to deliver lasting results.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={stat.delay}>
                  <GlassmorphicCard className="p-8 text-center hover:shadow-glow transition-all duration-300">
                    <GlassmorphicCardContent className="p-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-4xl font-display font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <p className="text-muted-foreground">{stat.label}</p>
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
              <p className="font-script text-primary text-2xl mb-4">Personalized Care</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                A Complete, Personalized Approach
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our approach combines FDA-approved medications with lifestyle guidance and psychological support. Here's how we help:
              </p>
            </AnimatedSection>

            <div className="space-y-16 lg:space-y-24">
              {treatments.map((treatment, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!treatment.imageLeft ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`${!treatment.imageLeft ? 'lg:order-2' : ''}`}>
                      {/* TODO: Replace with appropriate treatment image */}
                      <img 
                        src="/placeholder.svg" 
                        alt={treatment.imageAlt}
                        className="w-full h-64 object-cover rounded-2xl shadow-elevated"
                      />
                    </div>
                    <div className={`space-y-4 ${!treatment.imageLeft ? 'lg:order-1' : ''}`}>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-2">
                        <treatment.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-foreground">
                        {treatment.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {treatment.description}
                      </p>
                      {treatment.showCTA && (
                        <Button variant="metallic" className="mt-4" asChild>
                          <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                            Schedule Your Evaluation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Journey */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Simple Process</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Our discreet, doctor-led process meets you where you are: physically, mentally, and emotionally.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in" delay={200}>
              <ProgressJourney steps={journeySteps} />
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <AnimatedSection animation="fade-in" className="text-center mb-16">
              <p className="font-script text-primary text-2xl mb-4">Real Stories, Real Confidence</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl">
                Thousands Have Reclaimed Their Confidence
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index} animation="scale-in" delay={testimonial.delay}>
                  <GlassmorphicCard className="h-full p-8 hover:-translate-y-2 transition-all duration-300">
                    <GlassmorphicCardContent className="p-0 space-y-4">
                      <Quote className="h-10 w-10 text-primary/30" />
                      <p className="text-muted-foreground leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-foreground">- {testimonial.name}</p>
                    </GlassmorphicCardContent>
                  </GlassmorphicCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* Final CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-muted/50 via-background to-muted/30">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <AnimatedSection animation="fade-in">
              <p className="font-script text-primary text-2xl mb-4">Your Journey Starts Today</p>
              <h2 className="text-3xl font-serif font-semibold text-foreground sm:text-4xl mb-6">
                Take the First Step Toward Confidence
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Thousands of men have reclaimed their sexual health and confidence with Vitality Wellness. Our discreet, doctor-led care meets you where you are: physically, mentally, and emotionally.
              </p>
              <Button variant="metallic" size="lg" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                  Start Your Confidential Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Confidential Consultation Available</h2>
              <p className="text-lg text-muted-foreground">
                Take the first step toward restoring confidence. All inquiries are handled with complete discretion.
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

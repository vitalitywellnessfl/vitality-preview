import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Scale, CheckCircle2, Stethoscope, TrendingUp, Shield, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { BlobBackground } from "@/components/ui/BlobBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";

const WeightLossProgram = () => {
  const benefits = [
    "Personalized nutrition, fitness, and stress management guidance",
    "Comprehensive lab testing and ongoing health tracking",
    "Medication management and clinical supervision",
    "One-on-one consultations with your dedicated clinician",
    "Simple, transparent pricing with no hidden fees"
  ];

  const patientQuotes = [
    { quote: "The food noise is finally quiet.", delay: 0 },
    { quote: "I do not think about food all the time anymore.", delay: 100 },
    { quote: "For the first time in years, my brain and body are working together.", delay: 200 }
  ];

  const victories = [
    { text: "My wedding ring fits again.", icon: Heart, delay: 0 },
    { text: "I can keep up with my kids.", icon: TrendingUp, delay: 100 },
    { text: "I can finally sit in a booth comfortably.", icon: Sparkles, delay: 200 },
    { text: "For the first time in thirteen years, I am at a normal weight.", icon: Scale, delay: 300 }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section with Blob Background */}
        <section className="relative pt-32 pb-20 px-4">
          <BlobBackground variant="hero" />
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <AnimatedSection animation="fade-in">
              <Badge variant="secondary" className="mb-6 shadow-glow">
                Medical Weight Loss
              </Badge>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Your Personalized Path to{" "}
                <span className="gradient-text">Weight Loss</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                Because Real Change Deserves Real Care
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground mb-10">
                <p>
                  For many people, weight loss is not about vanity. It is about being able to walk upstairs without pain, feeling comfortable in your own clothes again, and making peace with food after years of struggle.
                </p>
                <p>
                  At Vitality Wellness Clinic, we help patients achieve meaningful and lasting results through clinically guided care and advanced treatments such as Semaglutide and Tirzepatide. These medications, combined with personalized nutrition and lifestyle guidance, help quiet the constant "food noise" and bring your body and mind back into balance.
                </p>
                <p className="font-medium text-foreground">
                  This is not a quick fix. It is a calm, steady return to feeling like yourself again.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <MagneticButton asChild size="lg" className="text-lg">
                <Link to="/book">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <GlassmorphicCard variant="strong" className="overflow-hidden">
                <GlassmorphicCardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-primary/10 animate-glow-pulse">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Why Our Medical Weight Loss Program Works
                    </h2>
                  </div>
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      If you have tried every diet, app, or workout trend and still feel stuck, you are not alone. The problem is not willpower.{" "}
                      <span className="font-semibold text-foreground gradient-text">It is biology.</span>
                    </p>
                    <p>
                      Our program targets the hormonal and metabolic patterns that make losing weight so difficult. Under the care of a licensed clinician, you will receive a plan designed for your unique health history, lifestyle, and goals.
                    </p>
                    <p>
                      We track your progress carefully, make adjustments as your body responds, and help you stay supported at every step.
                    </p>
                  </div>
                  <MagneticButton asChild variant="secondary" size="lg" className="mt-8">
                    <Link to="/book">
                      Find Out If You're a Candidate <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </MagneticButton>
                </GlassmorphicCardContent>
              </GlassmorphicCard>
            </AnimatedSection>
          </div>
        </section>

        {/* Understanding Medications Section with Mesh Gradient */}
        <section className="relative py-20 px-4 mesh-gradient">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10 animate-float">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Understanding Semaglutide and Tirzepatide
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground mb-10">
                <p>
                  These GLP-1 based medications have reshaped how people experience weight loss. They help regulate appetite, reduce cravings, and stabilize blood sugar, allowing your natural hunger signals to return.
                </p>
                <p className="font-medium text-foreground">
                  Many patients describe a quiet but life-changing shift:
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {patientQuotes.map((item, index) => (
                <AnimatedSection key={index} delay={item.delay} animation="scale-in">
                  <GlassmorphicCard className="h-full group hover:scale-105 transition-all duration-300 preserve-3d">
                    <GlassmorphicCardContent className="p-6 flex items-center justify-center min-h-[140px]">
                      <p className="text-lg italic text-foreground text-center">
                        "{item.quote}"
                      </p>
                    </GlassmorphicCardContent>
                  </GlassmorphicCard>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <p className="text-lg text-muted-foreground text-center">
                These treatments are prescribed only after a full clinical evaluation to ensure they are safe, appropriate, and effective for your individual needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="relative py-20 px-4">
          <BlobBackground />
          <div className="container mx-auto max-w-4xl relative z-10">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10 animate-glow-pulse">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Real Results, Real Relief</h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground mb-10">
                Weight loss is only part of the story. Our patients share deeply human victories that go far beyond the scale.
              </p>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {victories.map((victory, index) => {
                const Icon = victory.icon;
                return (
                  <AnimatedSection key={index} delay={victory.delay}>
                    <GlassmorphicCard variant="strong" className="h-full group hover:shadow-glow transition-all duration-500">
                      <GlassmorphicCardContent className="p-6 flex items-start gap-4">
                        <div className="p-2 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-lg font-medium text-foreground">
                          {victory.text}
                        </p>
                      </GlassmorphicCardContent>
                    </GlassmorphicCard>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection delay={400}>
              <p className="text-lg text-muted-foreground mb-8">
                These non-scale victories mark the quiet return of confidence, energy, and dignity. They are reminders that progress is not only physical but emotional too.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="text-center">
                <MagneticButton asChild variant="outline" size="lg">
                  <Link to="/glp1">
                    Read Patient Stories <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Membership Benefits Section */}
        <section className="relative py-20 px-4 mesh-gradient-hero">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10 animate-float">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Your Membership Includes</h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground mb-10">
                When you join Vitality Wellness Clinic, you receive complete care designed around your needs.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <GlassmorphicCard variant="strong">
                <GlassmorphicCardContent className="p-8 md:p-12">
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <AnimatedSection key={index} delay={50 * index} animation="fade-in">
                        <div className="flex items-start gap-4 group">
                          <div className="p-1.5 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          </div>
                          <p className="text-lg text-foreground">{benefit}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 glass rounded-lg border border-primary/20">
                    <p className="text-lg font-medium text-foreground text-center">
                      No copays. No confusion. Only compassionate, evidence-based care focused on helping you feel your best.
                    </p>
                  </div>

                  <div className="mt-8 text-center">
                    <MagneticButton asChild size="lg">
                      <Link to="/services">
                        View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </MagneticButton>
                  </div>
                </GlassmorphicCardContent>
              </GlassmorphicCard>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 px-4">
          <BlobBackground variant="hero" />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-4 rounded-full bg-primary/10 animate-glow-pulse">
                  <Scale className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  A Return to <span className="gradient-text">Feeling Like Yourself</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground mb-10">
                <p className="text-xl font-medium text-foreground">
                  Our patients often say, "I feel like myself again."
                </p>
                <p>
                  That single sentence captures everything we believe in.
                </p>
                <p>
                  At Vitality Wellness Clinic, we combine science with kindness to help you build lasting confidence in your body and peace with food. This is not about becoming someone new. It is about returning to the version of yourself that feels strong, steady, and free.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton asChild size="lg" className="text-lg">
                  <Link to="/book">
                    Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </MagneticButton>
                <MagneticButton asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/contact">
                    Ask a Question
                  </Link>
                </MagneticButton>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WeightLossProgram;

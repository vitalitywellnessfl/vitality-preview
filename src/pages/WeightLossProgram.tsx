import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Scale, CheckCircle2, Stethoscope, TrendingUp, Shield, Sparkles, Calendar, Users, ClipboardCheck, Trophy, Target, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassmorphicCard, GlassmorphicCardContent } from "@/components/ui/GlassmorphicCard";
import { BlobBackground } from "@/components/ui/BlobBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProgressJourney } from "@/components/ui/ProgressJourney";
import { Card, CardContent } from "@/components/ui/card";

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

  const journeySteps = [
    {
      title: "Initial Consultation",
      description: "Meet with our clinician to discuss your health history, goals, and create your personalized plan.",
      completed: true
    },
    {
      title: "Medical Evaluation",
      description: "Comprehensive lab testing and health assessment to ensure safe, effective treatment.",
      completed: true
    },
    {
      title: "Treatment Begins",
      description: "Start your GLP-1 medication with ongoing guidance on nutrition, lifestyle, and wellness.",
      completed: true
    },
    {
      title: "Progress Tracking",
      description: "Regular check-ins and adjustments to optimize your results and support your journey.",
      completed: false
    },
    {
      title: "Sustainable Success",
      description: "Achieve lasting results with continued support and maintenance strategies.",
      completed: false
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Patients Transformed" },
    { icon: Trophy, value: "85%", label: "Success Rate" },
    { icon: Target, value: "15-20%", label: "Avg. Weight Loss" }
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen overflow-hidden">
        {/* Hero Section - Asymmetric Layout */}
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-vitality-grey-light via-white to-vitality-teal/5">
          <BlobBackground variant="hero" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="text-left">
                <AnimatedSection animation="fade-in">
                  <Badge className="mb-6">
                    Medical Weight Loss
                  </Badge>
                </AnimatedSection>
                
                <AnimatedSection delay={100}>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                    Your Personalized Path to{" "}
                    <span className="gradient-text">Lasting Wellness</span>
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection delay={200}>
                  <p className="text-xl text-muted-foreground mb-8">
                    Because Real Change Deserves Real Care
                  </p>
                </AnimatedSection>
                
                <AnimatedSection delay={300}>
                  <div className="space-y-4 text-base mb-10">
                    <p className="text-muted-foreground">
                      For many people, weight loss is not about vanity. Imagine being able to walk upstairs without pain, feeling comfortable in your own clothes again, and making peace with food after years of struggle.
                    </p>
                    <p className="font-medium text-foreground">
                      This is not a quick fix. It is a calm, steady return to feeling like yourself again.
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={400}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <MagneticButton asChild size="lg" className="text-base">
                      <Link to="/book">
                        Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </MagneticButton>
                    <MagneticButton asChild size="lg" variant="outline" className="text-base">
                      <Link to="/glp1">
                        Learn More
                      </Link>
                    </MagneticButton>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right: Hero Image */}
              <AnimatedSection delay={200} className="hidden lg:block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated border border-border">
                  <img 
                    src="/placeholder.svg" 
                    alt="Person looking hopeful and confident on their wellness journey"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vitality-charcoal/20 to-transparent" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why It Works Section - Zig-zag Layout */}
        <section className="relative py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            {/* Row 1: Icon Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src="/placeholder.svg" 
                      alt="Medical illustration of metabolic health and hormonal balance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Biology, Not Willpower
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    If you have tried every diet, app, or workout trend and still feel stuck, you are not alone. The problem is not willpower—<span className="font-semibold gradient-text">it is biology</span>. Our program targets the hormonal and metabolic patterns that make losing weight so difficult.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Row 2: Text Left, Icon Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <AnimatedSection delay={100} className="lg:order-1 order-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Clinically Guided Plan
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Under the care of a licensed clinician, you will receive a plan designed for your unique health history, lifestyle, and goals. Every step is personalized to ensure safe and effective results.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection className="lg:order-2 order-1">
                <div className="flex justify-center lg:justify-start">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src="/placeholder.svg" 
                      alt="Healthcare provider consulting with patient in modern clinic"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Row 3: Icon Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-elevated">
                    <img 
                      src="/placeholder.svg" 
                      alt="Patient tracking progress on health journey with supportive care team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Continuous Support
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    We track your progress carefully, make adjustments as your body responds, and help you stay supported at every step. You're never alone on this journey.
                  </p>
                  <MagneticButton asChild size="lg">
                    <Link to="/book">
                      Find Out If You're a Candidate <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Success Stats Section */}
        <section className="relative py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <AnimatedSection key={index} delay={index * 100} animation="scale-in">
                    <Card className="text-center border hover:border-primary hover:shadow-elevated transition-all duration-300 bg-card">
                      <CardContent className="p-8">
                        <div className="mx-auto mb-4 w-fit p-4 rounded-full bg-primary/10 animate-float">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Your Journey Section */}
        <section className="relative py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 animate-float">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Your Personalized Journey</h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every step is designed with your success in mind. Here's what to expect on your transformation journey.
                </p>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <ProgressJourney steps={journeySteps} />
            </div>

            <AnimatedSection delay={500}>
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full">
                  <Zap className="h-5 w-5 text-primary animate-pulse" />
                  <span className="font-medium">Start your journey today</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Understanding Medications Section */}
        <section className="relative py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-secondary/10 animate-float">
                    <Stethoscope className="h-8 w-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Quiet the "Food Noise." Reconnect with Your Body.
                  </h2>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  GLP-1 based medications like Semaglutide and Tirzepatide have reshaped how people experience weight loss. They help regulate appetite, reduce cravings, and stabilize blood sugar, allowing your natural hunger signals to return.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {patientQuotes.map((item, index) => (
                <AnimatedSection key={index} delay={item.delay} animation="scale-in">
                  <Card className="h-full hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-primary">
                    <CardContent className="p-6 flex items-center justify-center min-h-[140px]">
                      <p className="text-base italic text-foreground text-center leading-relaxed">
                        "{item.quote}"
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
                These treatments are prescribed only after a full clinical evaluation to ensure they are safe, appropriate, and effective for your individual needs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="relative py-20 px-4 bg-muted">
          <div className="container mx-auto max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 animate-glow-pulse">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Real Results, Real Relief</h2>
                </div>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  Weight loss is only part of the story. Our patients share deeply human victories that go far beyond the scale.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {victories.map((victory, index) => {
                const Icon = victory.icon;
                return (
                  <AnimatedSection key={index} delay={victory.delay}>
                    <Card className="h-full hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-card">
                      <CardContent className="p-6 flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-base font-medium text-foreground leading-relaxed">
                          {victory.text}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection delay={400}>
              <p className="text-sm text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
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
        <section className="relative py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-accent/10 animate-float">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Your Membership Includes</h2>
                </div>
                <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                  When you join Vitality Wellness Clinic, you receive complete care designed around your needs.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="border shadow-elevated">
                <CardContent className="p-8 md:p-12">
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <AnimatedSection key={index} delay={50 * index} animation="fade-in">
                        <div className="flex items-start gap-4 group">
                          <div className="p-2 rounded-full bg-primary/10 group-hover:scale-110 transition-transform duration-300 mt-1">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-base text-foreground leading-relaxed">{benefit}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
                    <p className="text-base font-medium text-foreground text-center leading-relaxed">
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
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 px-4 bg-vitality-charcoal text-white overflow-hidden">
          <BlobBackground />
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-4 rounded-full bg-vitality-teal/20 animate-glow-pulse">
                  <Scale className="h-10 w-10 text-vitality-teal" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  A Return to <span className="text-vitality-teal">Feeling Like Yourself</span>
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="space-y-6 text-base mb-10">
                <p className="text-xl font-medium text-white">
                  Our patients often say, "I feel like myself again."
                </p>
                <p className="text-white/90">
                  That single sentence captures everything we believe in.
                </p>
                <p className="text-white/80 leading-relaxed">
                  At Vitality Wellness Clinic, we combine science with kindness to help you build lasting confidence in your body and peace with food. This is not about becoming someone new. It is about returning to the version of yourself that feels strong, steady, and free.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <MagneticButton asChild size="lg" className="bg-white text-vitality-charcoal hover:bg-white/90">
                <Link to="/book">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WeightLossProgram;

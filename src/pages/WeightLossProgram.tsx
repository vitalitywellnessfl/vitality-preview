import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Scale, CheckCircle2, Stethoscope, TrendingUp, Shield } from "lucide-react";

const WeightLossProgram = () => {
  const benefits = [
    "Personalized nutrition, fitness, and stress management guidance",
    "Comprehensive lab testing and ongoing health tracking",
    "Medication management and clinical supervision",
    "One-on-one consultations with your dedicated clinician",
    "Simple, transparent pricing with no hidden fees"
  ];

  const victories = [
    "My wedding ring fits again.",
    "I can keep up with my kids.",
    "I can finally sit in a booth comfortably.",
    "For the first time in thirteen years, I am at a normal weight."
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              Medical Weight Loss
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Personalized Path to Weight Loss
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Because Real Change Deserves Real Care
            </p>
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
            <Button asChild size="lg" className="text-lg">
              <Link to="/book">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">Why Our Medical Weight Loss Program Works</h2>
                </div>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    If you have tried every diet, app, or workout trend and still feel stuck, you are not alone. The problem is not willpower. <span className="font-semibold text-foreground">It is biology.</span>
                  </p>
                  <p>
                    Our program targets the hormonal and metabolic patterns that make losing weight so difficult. Under the care of a licensed clinician, you will receive a plan designed for your unique health history, lifestyle, and goals.
                  </p>
                  <p>
                    We track your progress carefully, make adjustments as your body responds, and help you stay supported at every step.
                  </p>
                </div>
                <Button asChild variant="secondary" size="lg" className="mt-8">
                  <Link to="/book">
                    Find Out If You're a Candidate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Understanding Medications Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Stethoscope className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Understanding Semaglutide and Tirzepatide</h2>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                These GLP-1 based medications have reshaped how people experience weight loss. They help regulate appetite, reduce cravings, and stabilize blood sugar, allowing your natural hunger signals to return.
              </p>
              <p className="font-medium text-foreground">
                Many patients describe a quiet but life-changing shift:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg italic text-foreground">
                    "The food noise is finally quiet."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg italic text-foreground">
                    "I do not think about food all the time anymore."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-lg italic text-foreground">
                    "For the first time in years, my brain and body are working together."
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground">
              These treatments are prescribed only after a full clinical evaluation to ensure they are safe, appropriate, and effective for your individual needs.
            </p>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Real Results, Real Relief</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-10">
              Weight loss is only part of the story. Our patients share deeply human victories that go far beyond the scale.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {victories.map((victory, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg font-medium text-foreground">
                      {victory}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              These non-scale victories mark the quiet return of confidence, energy, and dignity. They are reminders that progress is not only physical but emotional too.
            </p>

            <Button asChild variant="outline" size="lg">
              <Link to="/glp1">
                Read Patient Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Membership Benefits Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Your Membership Includes</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-10">
              When you join Vitality Wellness Clinic, you receive complete care designed around your needs.
            </p>
            
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 p-6 bg-primary/5 rounded-lg">
                  <p className="text-lg font-medium text-foreground text-center">
                    No copays. No confusion. Only compassionate, evidence-based care focused on helping you feel your best.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Button asChild size="lg">
                    <Link to="/services">
                      View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="h-10 w-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">A Return to Feeling Like Yourself</h2>
            </div>
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
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/book">
                  Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/contact">
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default WeightLossProgram;
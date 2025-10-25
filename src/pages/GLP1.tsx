import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Syringe, Activity, Shield, Users, TrendingDown, Heart, Phone, Lightbulb, Dumbbell, Settings, Leaf, MessageCircle, Calendar, Zap, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import glp1MedicationsImage from "@/assets/glp1-medications.png";
import tirzepatideImage from "@/assets/tirzepatide.png";
import semaglutideImage from "@/assets/semaglutide.png";

export default function WeightLoss() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Syringe className="h-8 w-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">GLP-1 Weight Loss Therapy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Medical Weight Loss with Semaglutide & Tirzepatide
            </h1>
            <div className="mb-8 flex justify-center">
              <img 
                src={glp1MedicationsImage} 
                alt="Semaglutide and Tirzepatide injection vials" 
                className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Take control of your health and achieve sustainable, evidence-based weight loss with GLP-1 therapy at Vitality Wellness Clinic in Weston, Florida. Led by Dr. Xochil Echeona, DNP, our medical team provides FDA-approved treatments using semaglutide (Ozempic®, Wegovy®) and tirzepatide (Mounjaro®, Zepbound®) to help you lose weight safely and effectively under medical supervision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Your Consultation Today</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:9548164002">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (954) 816-4002
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Cards - Choose Your Medication */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your GLP-1 Medication</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Affordable, transparent pricing for medical weight loss therapy
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Tirzepatide Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2">
                <div className="aspect-square w-full bg-white p-6 flex items-center justify-center">
                  <img 
                    src={tirzepatideImage} 
                    alt="Tirzepatide medication" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Tirzepatide</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">$175</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Dual-action GLP-1 medication for enhanced weight loss results
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Semaglutide Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2">
                <div className="aspect-square w-full bg-white p-6 flex items-center justify-center">
                  <img 
                    src={semaglutideImage} 
                    alt="Semaglutide medication" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Semaglutide</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">$300</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Proven GLP-1 medication for effective appetite control and weight loss
                  </p>
                  <Button size="lg" className="w-full" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                      Book Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What Are GLP-1 Medications */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">What Are GLP-1 Medications?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                GLP-1 receptor agonists are a breakthrough in medical weight management. These medications mimic your body's natural hormones that regulate blood sugar, appetite, and metabolism, helping you achieve lasting weight loss without extreme diets or surgery.
              </p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">How GLP-1 Medications Work</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex gap-4">
                    <Activity className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Appetite Regulation</h4>
                      <p className="text-muted-foreground">Slows digestion and helps you feel full longer.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TrendingDown className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Blood Sugar Control</h4>
                      <p className="text-muted-foreground">Improves insulin sensitivity and glucose metabolism.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cravings Reduction</h4>
                      <p className="text-muted-foreground">Decreases food cravings and emotional eating.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Sustainable Results</h4>
                      <p className="text-muted-foreground">Promotes gradual, consistent weight loss while supporting long-term maintenance.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t space-y-2">
                  <p className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Average weight loss: 15-20% of total body weight (clinical studies)</span>
                  </p>
                  <p className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Weekly self-administered injections under physician supervision</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Addressing Common Concerns */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Addressing Common Concerns</h2>
                    <h3 className="text-xl font-semibold text-foreground mb-3">"Is this just the easy way out?"</h3>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p className="font-semibold text-foreground">Absolutely not.</p>
                  <p>
                    Obesity is a complex medical condition influenced by hormones, genetics, and environment, not just willpower. GLP-1 medications treat the biological barriers that make long-term weight management difficult.
                  </p>
                  <p>
                    Patients still make lifestyle changes, but now, your body has the biological support to sustain them.
                  </p>
                  <p className="italic">
                    Just like we use insulin for diabetes or medication for high blood pressure, GLP-1 therapy supports your health from the inside out.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Medication Access */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">Medication Access & Availability</h2>
                    <p className="text-muted-foreground mb-4">
                      We understand that national supply shortages can be frustrating. At Vitality Wellness, we ensure reliable access by:
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Partnering with multiple licensed pharmacies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Prioritizing patients with medical necessity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Offering alternative medication options when needed</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    Your health comes first. We'll find a treatment plan that fits your needs and budget.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Protecting Muscle */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Dumbbell className="h-7 w-7 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Protecting Muscle While Losing Fat</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Research shows that up to 39% of weight loss may come from muscle mass. That's why our program includes body composition monitoring and muscle-preserving strategies, such as:
                </p>
                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Protein Optimization</h4>
                    <p className="text-muted-foreground">Personalized macronutrient planning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Resistance Training</h4>
                    <p className="text-muted-foreground">Tailored fitness recommendations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">DEXA or Bioimpedance Scans</h4>
                    <p className="text-muted-foreground">Regular body composition tracking</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Supplement Support</h4>
                    <p className="text-muted-foreground">Targeted amino acid and creatine supplementation</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">
                    Lose fat, not muscle. We help you maintain strength, energy, and vitality throughout your journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Managing Side Effects */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-7 w-7 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Managing Side Effects</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Mild side effects such as nausea, bloating, or injection-site irritation are common but temporary. Our step-by-step medical supervision ensures your comfort and safety:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Gradual Dose Titration to minimize GI symptoms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Nutrition Guidance to reduce nausea</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Injection Technique Training for smooth administration</span>
                  </li>
                </ul>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium">We're with you every step of the way.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Start Your Weight Loss Journey Today</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Your healthiest body begins here. Join hundreds of patients who have transformed their lives through GLP-1 medical weight loss therapy at Vitality Wellness Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Your Consultation</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:9548164002">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (954) 816-4002
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground text-center">Quick Facts</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">FDA-approved for weight management</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Syringe className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">Weekly self-administered injections</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">Medically supervised by Dr. Xochil Echeona, DNP</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <TrendingDown className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">Average 15-20% total body weight reduction</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">Transparent, affordable self-pay pricing</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Heart className="h-6 w-6 text-primary mb-3" />
                  <p className="font-medium text-foreground">Comprehensive support for nutrition, exercise, and mindset</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials testimonials={[
          {
            name: "Gonzalo",
            text: "I have always tried to lose weight... I found Vitality wellness and they helped me lose 40 pounds and for the first time in my life I am no longer a size XL but a medium. They followed…",
            rating: 5,
            category: "weight-loss"
          },
          {
            name: "Shuki",
            text: "Both Lina and Dr. Xochi were always kind, caring, and made me feel very comfortable as I went through my weight loss journey. I've lost 14 pounds so far and I'm still going. 100% recommended!",
            rating: 5,
            category: "weight-loss"
          }
        ]} />

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Weight Loss Journey?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us today to schedule your consultation and learn more about GLP-1 therapy options.
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

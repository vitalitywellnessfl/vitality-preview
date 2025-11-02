import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Syringe, Activity, Shield, Users, TrendingDown, Heart, Phone, Lightbulb, Dumbbell, Settings, Leaf, MessageCircle, Calendar, Zap, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Testimonials } from "@/components/Testimonials";
import { SocialCTA } from "@/components/SocialCTA";
import whatsappQR from "@/assets/whatsapp-qr.jpg";
import glp1MedicationsImage from "@/assets/glp1-medications.png";
import tirzepatideImage from "@/assets/tirzepatide-new.png";
import semaglutideImage from "@/assets/semaglutide-new.png";
import microdosingImage from "@/assets/microdosing-glp1.png";

export default function WeightLoss() {
  const journeySteps = [
    {
      title: "Initial Consultation",
      description: "Meet with the doctor to discuss your health history, goals, and create your personalized plan."
    },
    {
      title: "Medical Evaluation",
      description: "Comprehensive lab testing and health assessment to ensure safe, effective treatment."
    },
    {
      title: "Treatment Begins",
      description: "Start your GLP-1 medication with ongoing guidance on nutrition, lifestyle, and wellness."
    },
    {
      title: "Progress Tracking",
      description: "Regular check-ins and adjustments to optimize your results and support your journey."
    },
    {
      title: "Sustainable Success",
      description: "Achieve lasting results with continued support and maintenance strategies."
    }
  ];

  useEffect(() => {
    document.title = "Weight Loss Therapy - GLP-1 | Vitality Wellness Clinic";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Syringe className="h-8 w-8 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">GLP-1 Weight Loss Therapy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Get Medical Weight Loss with Semaglutide & Tirzepatide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Affordable, transparent pricing for medical weight loss therapy
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#db9925' }}>
                No hidden fees
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#db9925' }}>
                No subscriptions
              </span>
            </div>
            
            {/* Price Rectangles */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="bg-white border border-border rounded-lg px-6 py-4 flex items-center gap-4 shadow-sm">
                <div>
                  <p className="font-semibold text-foreground">Tirzepatide</p>
                  <p className="text-2xl font-bold text-primary">Starting at $300/month at the Office</p>
                </div>
                <Button size="sm" asChild>
                  <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
              
              <div className="bg-white border border-border rounded-lg px-6 py-4 flex items-center gap-4 shadow-sm">
                <div>
                  <p className="font-semibold text-foreground">Semaglutide</p>
                  <p className="text-2xl font-bold text-primary">Starting at $175/month at the Office</p>
                </div>
                <Button size="sm" asChild>
                  <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Your Personalized Journey */}
        <section className="py-10 px-6 lg:px-8" style={{ backgroundColor: '#70B4B5' }}>
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Your Personalized Journey</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Every step is designed with your success in mind. Here's what to expect on your transformation journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4 mb-8">
              {journeySteps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                  Start Your Journey Today
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Cards - Choose Your Medication */}
        <section className="py-10 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your GLP-1 Medication</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Tirzepatide Card */}
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2">
                <div className="w-full bg-white p-6 flex items-center justify-center h-64">
                  <img 
                    src={tirzepatideImage} 
                    alt="Tirzepatide medication" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Tirzepatide</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">Starting at $300/month at the Office</span>
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
                <div className="w-full bg-white p-6 flex items-center justify-center h-64">
                  <img 
                    src={semaglutideImage} 
                    alt="Semaglutide medication" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Semaglutide</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">Starting at $175/month at the Office</span>
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

        {/* Microdosing GLP-1s */}
        <section className="py-10 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Microdosing GLP-1s</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Microdosing GLP-1 medications offers a personalized approach to weight loss therapy. By starting with smaller doses and gradually increasing, patients can minimize side effects while still achieving effective results.
                </p>
                <p className="text-lg text-muted-foreground">
                  This approach allows your body to adjust more comfortably to the medication, reducing common side effects like nausea while maintaining the appetite suppression and metabolic benefits that make GLP-1 therapy so effective.
                </p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">Reduced side effects with gradual dose escalation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">Personalized dosing tailored to your body's response</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">Sustainable weight loss with improved tolerability</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={microdosingImage}
                  alt="Microdosing GLP-1 therapy" 
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-10 px-6 lg:px-8">
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
            
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#db9925' }}>
                No hidden fees
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: '#db9925' }}>
                No subscriptions
              </span>
            </div>
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
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:9548164002">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (954) 816-4002
                </a>
              </Button>
            </div>
            
            {/* WhatsApp QR Code */}
            <div className="flex flex-col items-center gap-3 pt-6 border-t">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={whatsappQR} 
                  alt="WhatsApp QR Code" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Or scan to chat on WhatsApp
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about GLP-1 weight loss therapy
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="what-are-glp1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                  What Are GLP-1 Medications?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-6">
                    <p className="text-muted-foreground">
                      GLP-1 receptor agonists are a breakthrough in medical weight management. These medications mimic your body's natural hormones that regulate blood sugar, appetite, and metabolism, helping you achieve lasting weight loss without extreme diets or surgery.
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">How GLP-1 Medications Work</h3>
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
                      <div className="mt-6 pt-6 border-t space-y-2">
                        <p className="flex items-center gap-2 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Average weight loss: 15-20% of total body weight (clinical studies)</span>
                        </p>
                        <p className="flex items-center gap-2 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span className="font-medium">Weekly self-administered injections under physician supervision</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="common-concerns" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                  Is this just the easy way out?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    <div className="flex items-start gap-4">
                      <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
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
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="medication-access" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                  Medication Access & Availability
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <div className="flex items-start gap-4 mb-6">
                      <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                      <div>
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
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="protecting-muscle" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                  How do I protect muscle while losing fat?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Dumbbell className="h-7 w-7 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Protecting Muscle While Losing Fat</h3>
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
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="side-effects" className="border rounded-lg px-6">
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:no-underline">
                  What about side effects?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Leaf className="h-7 w-7 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">Managing Side Effects</h3>
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
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

        {/* Social Media CTA */}
        <SocialCTA />

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

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Testimonials } from "@/components/Testimonials";
import { SocialCTA } from "@/components/SocialCTA";
import { ContactForm } from "@/components/ContactForm";
import nadScienceDiagram from "@/assets/nad-science-diagram.png";
import nadHero from "@/assets/nad-hero.png";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Zap, 
  Brain, 
  Heart,
  Clock,
  Shield,
  CheckCircle2,
  Users,
  FileText,
  TrendingUp,
  Activity,
  ArrowRight
} from "lucide-react";

const benefits = [
  "Increase energy and reduce fatigue",
  "Enhance mental focus and cognitive clarity",
  "Promote cellular repair and DNA health",
  "Accelerate athletic recovery and performance",
  "Lift mood and reduce brain fog",
  "Improve sleep quality",
  "Support healthy aging and longevity",
  "Assist in addiction recovery and withdrawal management"
];

const backgroundFacts = [
  "Stimulates sirtuins — proteins linked to longevity and DNA repair",
  "Enhances metabolic efficiency and energy conversion",
  "Supports brain health and neurotransmitter balance",
  "Promotes detoxification and recovery at the cellular level"
];

const resultsStats = [
  { percentage: "93%", description: "noticed improvements in overall energy levels" },
  { percentage: "87%", description: "reported better mental clarity and focus" },
  { percentage: "81%", description: "experienced enhanced mood and well-being" },
  { percentage: "78%", description: "saw improvements in sleep quality" }
];

const howItWorksSteps = [
  {
    icon: FileText,
    title: "Simple consultation",
    description: "Complete a brief online consultation or speak with one of our healthcare providers to determine if NAD+ therapy is right for you."
  },
  {
    icon: CheckCircle2,
    title: "Personalized plan",
    description: "Receive a customized treatment plan based on your health goals, whether it's IV infusions, injections, or a combination approach."
  },
  {
    icon: TrendingUp,
    title: "Track your progress",
    description: "Experience the benefits and track your improvements in energy, mental clarity, and overall wellness over time."
  }
];

const faqs = [
  {
    question: "How do I administer NAD+ Injections?",
    answer: "NAD+ injections are administered either intramuscularly (into the muscle) or subcutaneously (under the skin). After consultation, our medical team will provide detailed instructions and, if appropriate, teach you how to self-administer at home."
  },
  {
    question: "How often should I receive NAD+ treatments?",
    answer: "Treatment frequency varies based on individual needs and goals. Many patients start with 1-2 IV infusions per week for 4-6 weeks, then transition to maintenance therapy. For injections, 2-3 times per week is common. Your provider will create a personalized schedule."
  },
  {
    question: "What are the side effects of NAD+ therapy?",
    answer: "NAD+ therapy is generally well-tolerated. Some patients may experience mild side effects during IV infusions including flushing, mild cramping, or nausea. These typically resolve by slowing the infusion rate. Injection site reactions are rare and mild."
  },
  {
    question: "How quickly will I see results?",
    answer: "Many patients notice improved energy and mental clarity within the first few treatments. Optimal results typically develop over 4-6 weeks as cellular NAD+ levels are restored. Individual response times vary."
  },
  {
    question: "Is NAD+ therapy safe?",
    answer: "NAD+ is a naturally occurring coenzyme in your body and has an excellent safety profile. Our medical team screens all patients before treatment and monitors throughout your therapy. NAD+ therapy has been used for decades with minimal side effects."
  },
  {
    question: "Who is a good candidate for NAD+ therapy?",
    answer: "NAD+ therapy may benefit individuals experiencing fatigue, brain fog, age-related decline, or those seeking enhanced wellness and longevity. It's also used in addiction recovery. Your healthcare provider will evaluate your specific situation during consultation."
  }
];

export default function NADPlus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-vitality-sky/20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Product Image Placeholder */}
              <AnimatedSection animation="fade-in">
                <img 
                  src={nadHero} 
                  alt="NAD+ Injection Therapy - Cellular renewal formula starting at $250 USD for 10-week vial"
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </AnimatedSection>

              {/* Right Column - Product Info */}
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="lg:pt-8">
                  <div className="inline-block px-3 py-1 bg-vitality-teal/10 text-vitality-teal text-sm font-medium rounded-full mb-4">
                    Injection
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                    NAD⁺ Injection Therapy
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Revitalize your energy, sharpen your mind, and slow the effects of aging with advanced NAD⁺ therapy. NAD⁺ (Nicotinamide Adenine Dinucleotide) is an essential coenzyme that fuels your cells, supports DNA repair, and enhances overall vitality. Restore balance, boost focus, and feel your best from the inside out.
                  </p>
                  <div className="mb-8">
                    <p className="text-3xl font-bold text-foreground">Starting at <span className="text-primary">$250</span></p>
                  </div>
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                      Start Your Online Consultation
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">
                Why Choose NAD⁺ Injections?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take charge of your long-term wellness with a treatment designed to renew your cellular energy and longevity.
              </p>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <a href="#science" className="text-primary hover:underline font-medium inline-flex items-center gap-2">
                Learn About the Science of NAD⁺ Therapy
                <ArrowRight className="h-4 w-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                What Is NAD⁺ and Why It Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                NAD⁺ is a naturally occurring molecule found in every cell of your body. It converts food into energy (ATP), supports mitochondrial health, and powers over 400 biological reactions. However, NAD⁺ levels decline by up to 50% by age 60, contributing to fatigue, cognitive decline, and aging. By restoring NAD⁺ through injections or IV therapy, you can reignite your body's energy systems and promote healthy cellular function.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 gap-12 items-center mt-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <p className="font-bold text-foreground text-lg mb-4">Key benefits backed by research:</p>
                <ul className="space-y-3">
                  {backgroundFacts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{fact}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Science-backed treatment, real results
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resultsStats.map((stat, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Card className="text-center p-6">
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <Activity className="h-12 w-12 text-primary mx-auto" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{stat.percentage}</div>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Science Section */}
        <section id="science" className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                The science of NAD+
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="fade-in">
                <img 
                  src={nadScienceDiagram} 
                  alt="NAD+ benefits diagram showing how NAD+ from exercise, diet, and NAD boosters affects various body systems including brain, liver, heart, and muscles"
                  className="rounded-lg w-full h-auto"
                />
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={100}>
                <div>
                  <p className="font-bold text-foreground text-lg mb-4">Essential for cellular function:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays a fundamental role in energy metabolism and cellular health. It acts as a crucial electron carrier in metabolic reactions, particularly in the mitochondria where ATP (cellular energy) is produced. Beyond energy production, NAD+ activates sirtuins—proteins that regulate cellular aging, DNA repair, and metabolic processes. Research shows that NAD+ levels decline significantly with age, contributing to reduced cellular function, decreased energy, and accelerated aging. Supplementing NAD+ through injections or IV therapy can help restore optimal cellular function, improve energy levels, enhance cognitive performance, and support healthy aging processes.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                Real results from people like you
              </h2>
            </AnimatedSection>
            <Testimonials />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                How it works
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                  <Card className="text-center p-6 h-full">
                    <CardContent className="p-0">
                      <div className="mb-4">
                        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-left">{step.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8">FAQs</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      <span className="font-bold text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* Safety Information Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection animation="fade-in">
              <p className="font-bold text-foreground text-xl mb-6">Important safety information and common side effects</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong>Common Side Effects:</strong> NAD+ therapy is generally well-tolerated. During IV infusions, some patients may experience mild flushing, warmth, tingling sensations, mild cramping, or nausea. These effects are typically temporary and can be managed by adjusting the infusion rate. For injections, mild injection site reactions such as redness or tenderness may occur.
                </p>
                <p>
                  <strong>Who Should Not Use NAD+:</strong> NAD+ therapy may not be appropriate for individuals who are pregnant or breastfeeding, have certain medical conditions, or are taking specific medications. A thorough medical consultation is required before starting treatment.
                </p>
                <p>
                  <strong>Important Precautions:</strong> Always inform your healthcare provider of all medications, supplements, and medical conditions before beginning NAD+ therapy. Treatment should be administered under medical supervision, especially for first-time patients. If you experience severe side effects, discontinue treatment and contact your healthcare provider immediately.
                </p>
                <p>
                  This information is not intended to replace professional medical advice. Consult with a qualified healthcare provider to determine if NAD+ therapy is appropriate for your individual health needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-vitality-charcoal text-white">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedSection animation="fade-in">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                Ready to experience NAD+ therapy?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Start your journey to enhanced energy, mental clarity, and optimal cellular health today.
              </p>
              <Button size="lg" asChild>
                <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                  Book Your Consultation
                </a>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-3xl">
            <AnimatedSection animation="fade-in" className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions about NAD+ therapy? Fill out the form below and our team will get back to you shortly.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={100}>
              <ContactForm />
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

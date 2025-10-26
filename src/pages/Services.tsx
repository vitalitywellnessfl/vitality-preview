import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SocialCTA } from "@/components/SocialCTA";
import { 
  Syringe, 
  HeartPulse, 
  Droplet, 
  Activity, 
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Syringe,
    title: "GLP-1's",
    description: "FDA-approved medical weight loss with semaglutide and tirzepatide under expert supervision for sustainable results.",
    link: "/glp1",
    color: "vitality-teal"
  },
  {
    icon: Sparkles,
    title: "Healing Peptides",
    description: "Personalized peptide therapy for recovery, performance optimization, and overall wellness enhancement.",
    link: "/healing-peptides",
    color: "vitality-gold"
  },
  {
    icon: Droplet,
    title: "IV Therapy",
    description: "Replenish and rejuvenate with customized IV vitamin therapy for hydration, immunity, and energy.",
    link: "/iv-therapy",
    color: "vitality-sky"
  },
  {
    icon: Activity,
    title: "Vitamin Shots",
    description: "Targeted intramuscular injections including B12, vitamin D, and lipotropic formulas for energy and metabolism.",
    link: "/vitamin-shots",
    color: "vitality-purple"
  },
  {
    icon: Zap,
    title: "Body Contouring",
    description: "Non-invasive body sculpting treatments to help you achieve your ideal physique.",
    link: "/body-contouring",
    color: "vitality-tan"
  },
  {
    icon: HeartPulse,
    title: "Hormone Replacement Therapy",
    description: "Restore balance and vitality through bioidentical hormone therapy for optimal health and well-being.",
    link: "/hormone-therapy",
    color: "vitality-teal"
  },
  {
    icon: Zap,
    title: "NAD+ Therapy",
    description: "Boost cellular energy, enhance mental clarity, and support healthy aging with advanced NAD+ injections and IV therapy.",
    link: "/nad-plus",
    color: "vitality-gold"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-vitality-sky/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Our Wellness Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive, medically supervised treatments designed to help you achieve optimal health and vitality. 
                Led by Dr. Xochil Echeona, DNP.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary">
                  <CardContent className="p-6">
                    <div className={`mb-4 rounded-lg bg-${service.color}/10 p-4 inline-block group-hover:scale-110 transition-transform`}>
                      <service.icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="ghost" asChild className="group/btn p-0 h-auto font-medium">
                      <Link to={service.link} className="flex items-center gap-2">
                        Learn More 
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-vitality-teal/5 to-vitality-sky/5 border-vitality-teal/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Ready to Start Your Wellness Journey?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Schedule a consultation with Dr. Echeona to discuss which services are right for you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Book Consultation</a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="tel:9548164002">Call (954) 816-4002</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Social Media CTA */}
        <SocialCTA />
      </main>

      <Footer />
    </div>
  );
}

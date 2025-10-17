import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Award, 
  Shield, 
  Target, 
  Sparkles, 
  Stethoscope,
  Brain,
  CheckCircle2,
  Phone,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, respect, and personalized attention because your wellness journey is uniquely yours."
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "Evidence-based treatments backed by science and proven to deliver meaningful, lasting results for your health goals."
  },
  {
    icon: Users,
    title: "Accessible Wellness",
    description: "Quality healthcare should be within reach. We're committed to making transformative wellness solutions accessible to our community."
  },
  {
    icon: Sparkles,
    title: "Holistic Vitality",
    description: "True wellness encompasses mind, body, and spirit. We address the whole person, not just symptoms."
  }
];

const services = [
  "GLP-1 Medical Weight Loss",
  "IV Vitamin Therapy",
  "Healing Peptides",
  "Hormone Replacement Therapy",
  "Vitamin & Wellness Shots",
  "Body Contouring",
  "Erectile Dysfunction Treatment"
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-vitality-cream via-white to-vitality-sky/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl text-center">
                About Vitality Wellness Clinic
              </h1>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-vitality-teal/10 text-vitality-teal border-vitality-teal/20 hover:bg-vitality-teal/20">
                <Award className="h-3 w-3 mr-1" />
                Minority-Owned
              </Badge>
              <Badge variant="secondary" className="bg-vitality-gold/10 text-vitality-gold border-vitality-gold/20 hover:bg-vitality-gold/20">
                <Users className="h-3 w-3 mr-1" />
                Woman-Owned
              </Badge>
              <Badge variant="secondary" className="bg-vitality-charcoal/10 text-vitality-charcoal border-vitality-charcoal/20 hover:bg-vitality-charcoal/20">
                <Shield className="h-3 w-3 mr-1" />
                Veteran-Owned
              </Badge>
            </div>
            
            <Card>
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    At <strong className="text-foreground">Vitality Wellness FL</strong>, we're dedicated to helping you achieve your healthiest, happiest self through compassionate, science-backed care in a warm and empowering environment. We believe in treating every individual with the respect, dignity, and personalized attention they deserve.
                  </p>
                  <p>
                    Founded out of a passion for accessible, results-driven health solutions, we specialize in transformative wellness services including medical weight loss with GLP-1 therapy, rejuvenating IV therapy, targeted vitamin and wellness shots, hormone optimization, and advanced treatments designed to enhance energy, restore vitality, and help you glow from the inside out.
                  </p>
                  <p>
                    Whether you're seeking a boost in energy, support in achieving your wellness goals, support for intimate health, or simply a moment of rejuvenation, our team is committed to crafting tailored treatment plans that deliver meaningful, lasting impact on your quality of life.
                  </p>
                  <p className="font-semibold text-foreground">
                    From your first consultation to each renewed step forward, Vitality Wellness FL is by your side—empowering you to feel better, look brighter, and live life at your fullest potential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl">
                  Our Core Values
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Vitality Wellness Clinic
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-vitality-cream/30 to-white">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">What Makes Us Different</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      As a proud Minority-, Woman-, and Veteran-owned wellness clinic, we bring unique perspectives and unwavering dedication to serving our community.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Culturally Competent Care</h4>
                      <p className="text-muted-foreground">We understand diverse backgrounds and tailor our approach to honor your unique needs and experiences.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service-Minded Excellence</h4>
                      <p className="text-muted-foreground">Our veteran leadership brings discipline, integrity, and a mission-focused commitment to your health outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Empowerment-First Philosophy</h4>
                      <p className="text-muted-foreground">We believe in empowering you with knowledge, support, and tools to take control of your wellness journey.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Community-Centered Practice</h4>
                      <p className="text-muted-foreground">Based in Weston, FL, we're proud to serve our local community and surrounding areas with accessible, quality care.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meet Dr. Echeona */}
        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Brain className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl text-center">
                Meet Dr. Xochil Echeona, DNP
              </h2>
            </div>
            
            <Card className="border-2">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Stethoscope className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Board-Certified Family Nurse Practitioner</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dr. Xochil Echeona is a <strong className="text-foreground">Doctor of Nursing Practice (DNP)</strong> and board-certified <strong className="text-foreground">Family Nurse Practitioner</strong> specializing in preventive health, metabolic wellness, hormone optimization, and medical weight management.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With a passion for empowering patients through education and evidence-based medicine, Dr. Echeona brings compassionate, personalized care to every consultation. She believes that lasting wellness comes from understanding the root causes of health challenges and addressing them holistically.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Dr. Echeona is committed to staying at the forefront of medical advancements, ensuring her patients have access to the latest, most effective treatments available. Her approach combines clinical expertise with genuine care for each patient's individual journey toward optimal health.
                  </p>
                  
                  <div className="pt-6 border-t mt-8">
                    <p className="text-script text-foreground text-xl leading-relaxed">
                      "My mission is to help you not just feel better, but to <span className="text-primary">truly thrive</span>. Together, we'll create a wellness plan that fits your life, your goals, and your vision for your healthiest self."
                    </p>
                    <p className="text-muted-foreground mt-2">— Dr. Xochil Echeona, DNP, FNP-BC</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Services Overview */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-vitality-sky/10 to-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl">
                  Comprehensive Wellness Services
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                From weight loss to vitality optimization, we offer a full spectrum of wellness solutions
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t text-center">
                  <p className="text-muted-foreground mb-6">
                    Ready to explore how we can support your wellness goals?
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/services">View All Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-vitality-charcoal text-white">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-10 w-10 text-vitality-teal" />
              <h2 className="text-3xl font-serif font-semibold sm:text-4xl">
                Ready to Start Your Wellness Journey?
              </h2>
            </div>
            
            <p className="text-lg mb-8 text-white/90">
              Schedule your consultation with Dr. Echeona today and take the first step toward becoming your healthiest, most vibrant self.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/book">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-vitality-charcoal">
                <a href="tel:9548164002">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (954) 816-4002
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
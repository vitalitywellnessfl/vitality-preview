import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Stethoscope, 
  Users, 
  Award, 
  MapPin,
  Phone,
  Clock,
  Syringe,
  HeartPulse,
  Sparkles,
  Pill,
  Droplet,
  Activity,
  Star,
  Shield,
  Leaf,
  Brain,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Testimonials } from "@/components/Testimonials";
import { SocialCTA } from "@/components/SocialCTA";
import vitalityLogo from "@/assets/vitality-logo.gif";
import hrtHeroImage from "@/assets/hrt-hero.jpg";
import ivHeroImage from "@/assets/iv-hero.jpg";
import vitaminHeroImage from "@/assets/vitamin-hero.jpg";
import contourHeroImage from "@/assets/contour-hero.jpg";
import glp1HeroImage from "@/assets/glp1-hero.jpg";
import peptideHeroImage from "@/assets/peptide-hero.jpg";
import edHeroImage from "@/assets/ed-hero.jpg";
import homepageGlp1Image from "@/assets/homepage-glp1.png";
import glp1DiscountImage from "@/assets/glp1-discount.png";
import drEcheonaHomepage from "@/assets/dr-echeona-new.png";

const services = [
  {
    icon: Syringe,
    title: "GLP-1 Medical Weight Loss",
    description: "Transform your body safely with FDA-approved GLP-1 medications like semaglutide and tirzepatide, prescribed under expert medical guidance for sustainable results.",
    link: "/glp1",
    image: glp1HeroImage
  },
  {
    icon: Pill,
    title: "Healing Peptides",
    description: "Advanced peptide therapies designed to accelerate healing, enhance recovery, and optimize your body's natural regenerative processes.",
    link: "/healing-peptides",
    image: peptideHeroImage
  },
  {
    icon: Droplet,
    title: "IV Therapy",
    description: "Replenish and rejuvenate with IV vitamin therapy in our Weston clinic. Perfect for hydration, immune support, and post-travel recovery.",
    link: "/iv-therapy",
    image: ivHeroImage
  },
  {
    icon: Activity,
    title: "Vitamin Shots",
    description: "Quick and effective vitamin injections to boost energy, support immunity, and enhance overall wellness with targeted nutrition.",
    link: "/vitamin-shots",
    image: vitaminHeroImage
  },
  {
    icon: Sparkles,
    title: "Body Contouring",
    description: "Non-invasive body sculpting treatments to help you achieve your ideal physique and enhance your natural beauty.",
    link: "/body-contouring",
    image: contourHeroImage
  },
  {
    icon: HeartPulse,
    title: "Hormone Replacement Therapy",
    description: "Restore balance and vitality through bioidentical hormone therapy for men and women. Improve energy, mood, libido, and overall well-being.",
    link: "/hormone-therapy",
    image: hrtHeroImage
  }
];

const features = [
  {
    icon: Stethoscope,
    title: "Licensed & Certified",
    description: "All treatments are delivered under medical supervision by a licensed practitioner."
  },
  {
    icon: Users,
    title: "Telehealth Available",
    description: "Convenient virtual consultations for patients across Florida."
  },
  {
    icon: Award,
    title: "Accepting New Clients",
    description: "Personalized, compassionate care tailored to your health goals."
  }
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">
              <div className="flex justify-center mb-8">
                <img src={vitalityLogo} alt="Vitality Wellness FL" className="h-32 sm:h-48 lg:h-64 w-auto drop-shadow-2xl" />
              </div>
              <div className="flex flex-col items-center gap-3 mb-6">
                <Leaf className="h-10 w-10 text-[#54a0e7]" />
                <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-6xl text-center">
                  The Body You<br />
                  DESERVE<br />
                  Starts Here
                </h1>
              </div>
              <div className="mb-8 flex justify-center">
                <img 
                  src={homepageGlp1Image} 
                  alt="Semaglutide and Tirzepatide GLP-1 weight loss medications" 
                  className="rounded-lg shadow-lg max-w-2xl w-full h-auto"
                />
              </div>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Vitality Wellness Clinic in Weston, FL provides science-backed treatments for lasting weight loss, hormone balance, and total body wellness.
              </p>
              <p className="text-base leading-7 text-muted-foreground mb-6">
                Our medical team, led by <strong>Dr. Xochil Echeona, DNP</strong>, offers FDA-approved GLP-1 medications like semaglutide and tirzepatide, personalized hormone replacement therapy for men and women, advanced IV therapy, body contouring, peptide treatments, vitamin injections, and erectile dysfunction care, all designed to help you look, feel, and perform at your best.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                <Badge className="bg-white text-[#A39070] border-2 border-[#A39070] font-semibold">
                  <Users className="h-3 w-3 mr-1" />
                  Woman-Owned
                </Badge>
                <Badge className="bg-white text-vitality-teal border-2 border-vitality-teal font-semibold">
                  <Award className="h-3 w-3 mr-1" />
                  Minority-Owned
                </Badge>
                <Badge className="bg-white text-vitality-charcoal border-2 border-vitality-charcoal font-semibold">
                  <Shield className="h-3 w-3 mr-1" />
                  Veteran-Owned
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="metallic" asChild className="text-lg px-8">
                  <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Schedule Consultation</a>
                </Button>
                <Button size="lg" variant="metallic-outline" asChild className="text-lg px-8">
                  <a href="tel:9548164002">Call (954) 816-4002</a>
                </Button>
                <Button size="lg" variant="cream" asChild className="text-lg px-8">
                  <Link to="/glp1">Join our Weight Loss Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <p className="text-script text-[#A39070] text-sm mb-2">Your Partner in <span className="font-hurricane text-2xl">Wellness</span></p>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Stethoscope className="h-8 w-8 text-[#70B4B5]" />
                <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl">
                  Why Choose Vitality Wellness Clinic?
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Proudly serving Weston, FL and surrounding areas including Davie, Pembroke Pines, and Sunrise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 rounded-full bg-primary/10 p-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Syringe className="h-8 w-8 text-[#70B4B5]" />
                <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl">
                  Our Wellness Services
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {service.image && (
                      <div className="mb-4">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <div className="mb-4 rounded-lg bg-secondary/10 p-3 inline-block">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link to={service.link} className="text-primary font-medium hover:underline">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
              
              {/* GLP-1 Promotional Card */}
              <Link to="/glp1" className="hover:scale-105 transition-transform lg:col-span-2">
                <Card className="h-full hover:shadow-xl transition-shadow border-4 border-dashed border-primary/70 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <img 
                      src={glp1DiscountImage} 
                      alt="GLP-1 Weight Loss Special Offer - Act Now" 
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* About Dr. Echeona */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-[#70B4B5]" />
                  <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground sm:text-4xl">
                    Meet Dr. Xochil Echeona, DNP, APRN, FNP-BC, PMHNP-BC, GNP-BC
                  </h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center order-2 md:order-1 gap-4">
                  <img 
                    src={drEcheonaHomepage} 
                    alt="Dr. Xochil Echeona, DNP - Family Nurse Practitioner" 
                    className="rounded-lg shadow-xl w-full max-w-md object-cover"
                  />
                  <Button 
                    size="lg" 
                    className="bg-[#70B4B5] hover:bg-[#5da3a4] text-white w-full max-w-md"
                    asChild
                  >
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                      Schedule a Virtual Consultation
                    </a>
                  </Button>
                </div>
                <Card className="border-2 order-1 md:order-2">
                  <CardContent className="p-6 sm:p-8">
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                      Dr. Echeona is a Doctorally prepared, triple board-certified Nurse Practitioner specializing in Geriatric, Family, and Psychiatric Medicine. With over 15 years of experience in healthcare and clinical practice across diverse medical settings, including cardiology, internal medicine, and family practice. Her mission is to empower patients to feel and look their best (inside and out) through compassionate guidance.
                    </p>
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <Link to="/about#dr-echeona">
                        Learn More About Dr. Echeona
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Location & Contact */}
        <section className="py-16 bg-vitality-charcoal text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-8 w-8 text-vitality-teal" />
                  <h2 className="text-3xl font-serif font-semibold">Visit Us in Weston, FL</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-vitality-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Vitality Wellness Clinic</p>
                      <p>1500 Weston Rd, Weston, FL 33326</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-vitality-teal flex-shrink-0" />
                    <a href="tel:9548164002" className="hover:text-vitality-teal transition-colors">
                      (954) 816-4002
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-vitality-teal flex-shrink-0 mt-1" />
                    <div>
                        <p>Mon-Fri: 9 AM - 6 PM</p>
                        <p>Sat: 9 AM - 2 PM</p>
                      <p>Sun: Closed</p>
                      <p className="mt-2 text-vitality-sky flex items-center gap-2">
                        <ArrowRight className="h-5 w-5" />
                        Telehealth Appointments Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <p className="text-script text-vitality-teal text-sm mb-3">Begin Your <span className="font-hurricane text-2xl">Journey</span></p>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="h-7 w-7 text-vitality-gold fill-vitality-gold" />
                  <h3 className="text-2xl font-serif font-semibold">Start Your Wellness Journey Today</h3>
                </div>
                <p className="mb-6">
                  Ready to achieve lasting weight loss and optimal vitality? Schedule your consultation with Dr. Echeona today and discover why Vitality Wellness Clinic is Weston's trusted choice for medical wellness and longevity care.
                </p>
                <div className="flex flex-col gap-3">
                  <Button size="lg" variant="metallic" asChild className="w-full">
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="metallic-outline" asChild className="w-full bg-transparent text-white border-white hover:bg-white hover:text-vitality-charcoal">
                    <a href="https://wa.me/message/T42QKKUODLMXK1" target="_blank" rel="noopener noreferrer">Contact Us</a>
                  </Button>
                  <Button size="lg" variant="metallic-outline" asChild className="w-full bg-transparent text-white border-white hover:bg-white hover:text-vitality-charcoal">
                    <a href="tel:9548164002">Call (954) 816-4002</a>
                  </Button>
                </div>
              </div>
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

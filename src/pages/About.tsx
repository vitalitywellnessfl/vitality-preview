import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import drEcheonaImage from "@/assets/dr-echeona.png";
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
  Calendar,
  Zap,
  Leaf,
  Syringe,
  Activity,
  Wind,
  Flame,
  Droplet,
  Smile
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
              <Heart className="h-10 w-10 text-[#70B4B5]" />
              <h1 className="text-4xl font-display font-bold tracking-tight text-foreground sm:text-5xl text-center">
                About Vitality Wellness Clinic
              </h1>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-vitality-teal/10 text-vitality-teal border-vitality-teal/20 hover:bg-vitality-teal/20">
                <Award className="h-3 w-3 mr-1" />
                Minority-Owned
              </Badge>
              <Badge variant="secondary" className="bg-[#A39070]/10 text-[#A39070] border-[#A39070]/20 hover:bg-[#A39070]/20">
                <Users className="h-3 w-3 mr-1" />
                Woman-Owned
              </Badge>
              <Badge variant="secondary" className="bg-vitality-charcoal/10 text-vitality-charcoal border-vitality-charcoal/20 hover:bg-vitality-charcoal/20">
                <Shield className="h-3 w-3 mr-1" />
                Veteran-Owned
              </Badge>
            </div>
            
            <Card className="overflow-hidden border-2">
              <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-white to-vitality-sky/5">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    At <strong className="text-foreground">Vitality Wellness FL</strong>, transformation begins the moment you walk through our doors. We are dedicated to helping you reclaim your vitality through integrative medicine that honors the whole person: body, mind, and spirit.
                  </p>
                  <p className="text-muted-foreground">
                    Founded on the belief that wellness should be accessible, personalized, and rooted in science, we offer comprehensive services from GLP-1 medical weight loss and bioidentical hormone therapy to regenerative aesthetics and IV wellness treatments. Every plan is designed around your unique goals, lifestyle, and health story.
                  </p>
                  <p className="text-muted-foreground">
                    Whether you are seeking renewed energy, hormonal balance, confident aesthetics, or support in your wellness journey, our team provides compassionate, evidence-based care tailored to deliver real, lasting results.
                  </p>
                  <p className="text-xl font-semibold text-foreground">
                    Your health story doesn't have to be about symptoms. It can be about renewal.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Meet Dr. Echeona */}
        <section id="dr-echeona" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-vitality-cream/40 via-white to-vitality-sky/10 relative overflow-visible">
          <div className="mx-auto max-w-6xl">
            {/* Main Header with Photo */}
            <div className="mb-12 relative">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Photo on left */}
                <div className="flex-shrink-0 relative z-10">
                  <img 
                    src={drEcheonaImage} 
                    alt="Dr. Xochil Echeona" 
                    className="h-[400px] lg:h-[550px] xl:h-[650px] w-auto object-contain drop-shadow-2xl"
                  />
                </div>
                
                {/* Text on right */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <Brain className="h-10 w-10 text-[#70B4B5]" />
                    <h2 className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl">
                      Meet Dr. Xochil Echeona
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium tracking-wide mb-3">
                    DNP, APRN, FNP-BC, PMHNP-BC, GNP-BC
                  </p>
                  <p className="text-2xl font-script text-primary mb-6">
                    Where Medicine, Mind, and Aesthetic Wellness Meet
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Narrative */}
            <Card className="border-2 mb-8 overflow-hidden">
              <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-white to-vitality-teal/5">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-xl font-semibold text-foreground">
                    The story of your health doesn't have to be about symptoms. It can be about renewal.
                  </p>
                  <p className="text-muted-foreground">
                    At her integrative medicine clinic, Dr. Xochil Echeona blends science and holistic care to help patients rediscover balance inside and out. She is a functional medicine nurse practitioner with over 15 years of experience guiding individuals toward better energy, confidence, and longevity.
                  </p>
                  <p className="text-muted-foreground">
                    Every treatment begins with listening: to your goals, your habits, your stress, your hormones. Then, together, you and Dr. Echeona build a plan that reconnects you to feeling your best, whether through bioidentical hormone replacement therapy (HRT), medical weight loss peptides, or regenerative aesthetic treatments that enhance natural beauty rather than replace it.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Two Column Layout for Specialties */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Functional & Holistic Wellness */}
              <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 bg-gradient-to-br from-vitality-teal/5 to-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-vitality-teal/10">
                      <Leaf className="h-7 w-7 text-vitality-teal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Functional & Holistic Wellness</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    True wellness is not one-size-fits-all. In her holistic wellness and hormone therapy programs, Dr. Echeona integrates evidence-based medicine with homeopathic and functional approaches.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Bioidentical Hormone Replacement Therapy (HRT)</p>
                        <p className="text-sm text-muted-foreground">for men and women</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">GLP-1 and peptide-based weight loss programs</p>
                        <p className="text-sm text-muted-foreground">tailored to your metabolism</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplet className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">IV therapy and vitamin shots</p>
                        <p className="text-sm text-muted-foreground">for energy, immunity, and recovery</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Mind-body stress management</p>
                        <p className="text-sm text-muted-foreground">and psychiatric nurse practitioner care</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-vitality-teal/20">
                    <p className="text-sm font-semibold text-foreground">
                      The goal: restore balance, stabilize mood, and renew vitality without losing sight of the person behind the symptoms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Aesthetic & Regenerative Medicine */}
              <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 bg-gradient-to-br from-vitality-gold/5 to-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-vitality-gold/10">
                      <Sparkles className="h-7 w-7 text-vitality-gold" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">Aesthetic & Regenerative Medicine</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Your skin tells a story too, of time, health, and self-care. Through aesthetic medicine and facial contouring, Dr. Echeona helps patients refresh their appearance while supporting deeper wellness.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Syringe className="h-5 w-5 text-vitality-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Neurotoxin and dermal filler injections</p>
                        <p className="text-sm text-muted-foreground">for natural, youthful balance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smile className="h-5 w-5 text-vitality-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Facial harmonization and contouring</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wind className="h-5 w-5 text-vitality-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Sclerotherapy</p>
                        <p className="text-sm text-muted-foreground">for visible veins and vascular concerns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Flame className="h-5 w-5 text-vitality-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Body contouring and skin tightening solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-vitality-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Erectile dysfunction treatments</p>
                        <p className="text-sm text-muted-foreground">centered on regenerative health</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-vitality-gold/20">
                    <p className="text-sm font-semibold text-foreground">
                      Each treatment is performed with artistry and clinical precision because beauty should feel as good as it looks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* A New Kind of Care Experience */}
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 via-white to-vitality-sky/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Stethoscope className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">A New Kind of Care Experience</h3>
                </div>
                
                <div className="space-y-5 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    Dr. Echeona's background spans cardiology, internal medicine, and family health, giving her a 360-degree understanding of the human body. Her clinic offers more than treatment; it offers transformation through integrative medicine that supports physical, emotional, and aesthetic wellbeing.
                  </p>
                  
                  <p className="text-xl font-semibold text-foreground">
                    Every visit is an opportunity to feel understood, respected, and restored.
                  </p>
                  
                  <div className="pt-6 mt-6 border-t">
                    <Button size="lg" asChild className="w-full sm:w-auto">
                      <Link to="/book">Begin Your Wellness Journey</Link>
                    </Button>
                  </div>
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
                <Sparkles className="h-8 w-8 text-[#70B4B5]" />
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
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-vitality-charcoal via-vitality-charcoal to-vitality-teal/20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="h-12 w-12 text-vitality-teal" />
              <h2 className="text-4xl font-serif font-bold sm:text-5xl text-white">
                Begin Your Wellness Journey
              </h2>
            </div>
            
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation with Dr. Echeona today and discover what it means to feel understood, restored, and truly alive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-vitality-teal hover:bg-vitality-teal/90 text-white text-lg px-8 py-6" asChild>
                <Link to="/book">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-vitality-charcoal text-lg px-8 py-6">
                <a href="tel:9548164002">
                  <Phone className="mr-2 h-5 w-5" />
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
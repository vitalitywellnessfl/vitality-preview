import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

export default function HormoneTherapy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-vitality-cream via-white to-vitality-sky/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-center">
              Hormone Replacement Therapy
            </h1>
            <Card>
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Content coming soon. Discover how bioidentical hormone therapy can restore balance and vitality for men and women.
                  </p>
                  <p className="text-muted-foreground">
                    For more information, please <a href="/contact" className="text-primary hover:underline">contact us</a> or call <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Interested in Hormone Therapy?</h2>
              <p className="text-lg text-muted-foreground">
                Contact us to schedule a consultation and learn how we can help you restore hormonal balance.
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

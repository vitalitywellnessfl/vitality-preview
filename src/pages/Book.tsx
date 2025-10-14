import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Book() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-vitality-cream via-white to-vitality-sky/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-center">
              Book Your Consultation
            </h1>
            <Card>
              <CardContent className="p-12">
                <div className="text-center space-y-6">
                  <p className="text-lg text-muted-foreground">
                    Ready to start your wellness journey? Book your consultation with Dr. Xochil Echeona, DNP today.
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Online booking system coming soon. In the meantime, please call us to schedule your appointment.
                    </p>
                    
                    <Button size="lg" asChild>
                      <a href="tel:9548164002">Call (954) 816-4002</a>
                    </Button>
                  </div>

                  <div className="pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                      Telehealth appointments available for patients across Florida
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-vitality-cream via-white to-vitality-sky/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-center">
              Contact Us
            </h1>
            <Card>
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Address</h3>
                      <p className="text-muted-foreground">1500 Weston Rd, Weston, FL 33326</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:9548164002" className="text-muted-foreground hover:text-primary">
                        (954) 816-4002
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Mon–Fri: 9 AM – 6 PM</p>
                        <p>Sat: 9 AM – 2 PM</p>
                        <p>Sun: Closed</p>
                        <p className="mt-2 text-primary">👉 Telehealth Appointments Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-muted-foreground">
                      Additional contact form content coming soon.
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

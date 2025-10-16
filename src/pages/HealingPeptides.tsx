import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function HealingPeptides() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-vitality-cream via-white to-vitality-sky/20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-center">
              Healing Peptides
            </h1>
            <Card>
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-6">
                    Content coming soon. Discover our comprehensive healing peptide therapy services.
                  </p>
                  <p className="text-muted-foreground">
                    For more information, please <a href="/contact" className="text-primary hover:underline">contact us</a> or call <a href="tel:9548164002" className="text-primary hover:underline">(954) 816-4002</a>.
                  </p>
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

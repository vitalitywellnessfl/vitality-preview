import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const allTestimonials = [
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
  },
  {
    name: "Yeny",
    text: "Lina and Dr. Xochi, Without a doubt I recommend you!! Best prices and service!! the IV hydration will make miracles in your skin. If you are in your late 40's like me.. is a must to do it!!!",
    rating: 5,
    category: "iv-therapy"
  },
];

interface TestimonialsProps {
  testimonials?: typeof allTestimonials;
}

export const Testimonials = ({ testimonials = allTestimonials }: TestimonialsProps) => {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-vitality-cream/30 via-white to-vitality-sky/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-vitality-gold fill-vitality-gold" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Patients Say
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Real stories from real people who transformed their lives at Vitality Wellness Clinic
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-vitality-gold text-vitality-gold" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t">
                  <p className="font-semibold text-foreground text-lg">
                    — {testimonial.name}
                  </p>
                </div>
              </CardContent>
              
              {/* Decorative gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-vitality-teal to-vitality-sky" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
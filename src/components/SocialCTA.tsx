import { Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappQR from "@/assets/whatsapp-qr.jpg";

export function SocialCTA() {
  return (
    <section className="py-12 px-6 lg:px-8 bg-muted/30">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex flex-col items-center gap-6">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img 
              src={whatsappQR} 
              alt="WhatsApp QR Code" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Scan to chat on WhatsApp
          </p>
          
          {/* Social Media Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button 
              size="lg" 
              variant="outline" 
              className="flex-1 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-[#1877F2]"
              asChild
            >
              <a 
                href="https://www.facebook.com/share/15mPdw4RP2/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Follow on Facebook
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="flex-1 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] hover:opacity-90 text-white border-none"
              asChild
            >
              <a 
                href="https://www.instagram.com/vitalitywellnessfl" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

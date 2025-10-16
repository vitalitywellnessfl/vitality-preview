import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Facebook } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "GLP-1's", href: "/glp1" },
  { name: "Healing Peptides", href: "/healing-peptides" },
  { name: "IV Therapy", href: "/iv-therapy" },
  { name: "Vitamin Shots", href: "/vitamin-shots" },
  { name: "Body Contouring", href: "/body-contouring" },
  { name: "HRT", href: "/hormone-therapy" },
  { name: "Erectile Dysfunction", href: "/erectile-dysfunction" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img className="h-12 w-auto" src={logo} alt="Vitality Wellness Clinic" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3 lg:items-center">
          <a href="https://www.instagram.com/vitalitywellnessfl" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/share/15mPdw4RP2/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="tel:9548164002">
              <Phone className="h-4 w-4 mr-2" />
              (954) 816-4002
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://agelessrx.com/semaglutide-glp-1s/?utm_medium=paid-social&utm_source=facebook&utm_campaign=120227891751110575-cq:ldn-asc-july2025_ch:facebook_ct:ageless-custom-conversion_tx:asc_pr:energy-nad_c1:_c2:_jump%20-%20Copy&utm_term=120227891751090575-fb-Others&utm_content=120227891751270575-at:image_lg:x_hk:$25/month_pr:energy-ldn_th:internal-template_id:_lp:get.agelessrx.com/ldn-low-dose-naltrexone/ns_cu:_jump" target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <img className="h-10 w-auto" src={logo} alt="Vitality Wellness Clinic" />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-muted ${
                        location.pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <div className="flex gap-4 justify-center mb-4">
                    <a href="https://www.instagram.com/vitalitywellnessfl" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.facebook.com/share/15mPdw4RP2/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="tel:9548164002">
                      <Phone className="h-4 w-4 mr-2" />
                      (954) 816-4002
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <a href="https://agelessrx.com/semaglutide-glp-1s/?utm_medium=paid-social&utm_source=facebook&utm_campaign=120227891751110575-cq:ldn-asc-july2025_ch:facebook_ct:ageless-custom-conversion_tx:asc_pr:energy-nad_c1:_c2:_jump%20-%20Copy&utm_term=120227891751090575-fb-Others&utm_content=120227891751270575-at:image_lg:x_hk:$25/month_pr:energy-ldn_th:internal-template_id:_lp:get.agelessrx.com/ldn-low-dose-naltrexone/ns_cu:_jump" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                      Book Consultation
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

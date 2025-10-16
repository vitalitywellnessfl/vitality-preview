import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Instagram, Facebook, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const servicesFirst = true; // Flag to render Services after Home

const servicesNav = [
  { name: "GLP-1's", href: "/glp1" },
  { name: "Healing Peptides", href: "/healing-peptides" },
  { name: "IV Therapy", href: "/iv-therapy" },
  { name: "Vitamin Shots", href: "/vitamin-shots" },
  { name: "Body Contouring", href: "/body-contouring" },
  { name: "HRT", href: "/hormone-therapy" },
  { name: "Erectile Dysfunction", href: "/erectile-dysfunction" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-md transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img className="h-28 w-auto" src={logo} alt="Vitality Wellness Clinic" />
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
        
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Link
            to="/"
            className={`text-base font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-foreground"
            }`}
          >
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  <span className="text-base font-medium text-foreground hover:text-primary transition-colors">
                    Services
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {servicesNav.map((service) => (
                      <li key={service.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {navigation.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname === item.href ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a href="https://www.instagram.com/vitalitywellnessfl" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/share/15mPdw4RP2/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <Button variant="outline" size="sm" asChild>
            <a href="tel:9548164002">
              <Phone className="h-4 w-4 mr-2" />
              (954) 816-4002
            </a>
          </Button>
          <Button size="sm" asChild>
            <Link to="/book">
              Book Consultation
            </Link>
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
                <img className="h-12 w-auto" src={logo} alt="Vitality Wellness Clinic" />
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
                  
                  <div className="pt-2">
                    <div className="-mx-3 px-3 py-2 text-base font-medium text-muted-foreground">
                      Services
                    </div>
                    {servicesNav.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`-mx-3 block rounded-lg px-6 py-2 text-sm font-medium leading-7 hover:bg-muted ${
                          location.pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
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
                    <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                      Book Consultation
                    </Link>
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

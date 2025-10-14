import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-vitality-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Vitality Wellness Clinic" className="h-16 w-auto mb-4 bg-white p-2 rounded" />
            <p className="text-sm text-gray-300">
              Your trusted destination for medical weight loss, IV therapy, hormone replacement, and holistic wellness solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-vitality-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-vitality-gold">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/weight-loss" className="text-sm text-gray-300 hover:text-white transition-colors">Weight Loss</Link></li>
              <li><Link to="/hormone-therapy" className="text-sm text-gray-300 hover:text-white transition-colors">Hormone Therapy</Link></li>
              <li><Link to="/iv-therapy" className="text-sm text-gray-300 hover:text-white transition-colors">IV Therapy</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">View All</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-vitality-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">1500 Weston Rd, Weston, FL 33326</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-vitality-teal flex-shrink-0" />
                <a href="tel:9548164002" className="text-sm text-gray-300 hover:text-white transition-colors">(954) 816-4002</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-vitality-teal flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Mon-Fri: 9 AM – 6 PM</p>
                  <p>Sat: 9 AM – 2 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Vitality Wellness Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/hipaa" className="text-sm text-gray-400 hover:text-white transition-colors">HIPAA</Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

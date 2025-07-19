import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "IoT Implementation",
    "3D Printing",
    "Laser Cutting", 
    "CNC Machining",
    "Plasma Cutting",
    "Engineering Consultation"
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/0e91eb3c-86d9-4eda-9775-a134fae3c2c1.png" 
                alt="Reinutech Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-primary">REINUTECH</h3>
                <p className="text-xs text-secondary-foreground/80">Engineering Innovation</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 leading-relaxed mb-4">
              Professional engineering solutions including IoT implementation, 
              precision manufacturing, and technical consultation services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">Semarang, Jawa Tengah</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">+62 xxx-xxxx-xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-secondary-foreground/80">info@reinutech.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary smooth-transition hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-white mb-2">Business Hours</h5>
                <p className="text-sm text-secondary-foreground/80">
                  Monday - Saturday: 8:00 - 17:00<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-white mb-2">Online Store</h5>
                <a 
                  href="https://tokopedia.com/2YvCt7ROnNb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow smooth-transition"
                >
                  <span className="text-sm">Tokopedia Store</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              
              <div>
                <a 
                  href="https://www.google.com/maps/@-7.0465530,110.4624700,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow smooth-transition"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">View on Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-secondary-foreground/60">
            © {currentYear} Reinutech Engineering Innovation. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="#" 
              className="text-secondary-foreground/60 hover:text-primary smooth-transition"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-secondary-foreground/60 hover:text-primary smooth-transition"
            >
              Terms of Service
            </a>
            <span className="text-secondary-foreground/40">|</span>
            <span className="text-secondary-foreground/60">
              Made with ❤️ in Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
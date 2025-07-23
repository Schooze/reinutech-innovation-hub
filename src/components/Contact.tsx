import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "XF36+9XM, Mangunharjo",
      subtitle: "Kec. Tembalang, Kota Semarang, Jawa Tengah 50272, Indonesia"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+62 895-0480-8145",
      subtitle: "Available during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "reinutech@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 8:00 - 17:00",
      subtitle: "Sunday: Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your engineering project to life? Contact us today for a consultation 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="innovation-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+62 895-0480-8145" 
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Required
                  </label>
                  <select className="w-full p-3 border border-border rounded-md bg-background text-foreground focus:border-primary focus:outline-none">
                    <option value="">Select a service</option>
                    <option value="iot">IoT Implementation</option>
                    <option value="3d-printing">3D Printing</option>
                    <option value="laser-cutting">Laser Cutting</option>
                    <option value="cnc">CNC Machining</option>
                    <option value="plasma">Plasma Cutting</option>
                    <option value="consultation">Engineering Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                    rows={5}
                    className="border-border focus:border-primary"
                  />
                </div>
                
                <Button className="btn-engineering w-full text-lg py-3 group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title} 
                className="innovation-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map Link */}
            <Card className="innovation-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Find Us on Map
                </h3>
                <a 
                  href="https://www.google.com/maps/place/Reinutech+Engineering+Innovation/@-7.0465171,110.4622718,19.38z/data=!4m6!3m5!1s0x2e708d8fcd226875:0xca03344fd893532!8m2!3d-7.0465526!4d110.4624703!16s%2Fg%2F11vjg2g78d?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-glow smooth-transition font-medium"
                >
                  <MapPin className="h-4 w-4" />
                  <span>View on Google Maps</span>
                </a>
              </CardContent>
            </Card>

            {/* Tokopedia Link */}
            <Card className="innovation-card bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-4">
                  Visit Our Store
                </h3>
                <p className="mb-4 opacity-90">
                  Check out our products and services on Tokopedia
                </p>
                <a 
                  href="https://tokopedia.com/2YvCt7ROnNb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metallic inline-block"
                >
                  Visit Tokopedia Store
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
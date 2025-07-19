import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cpu, 
  Printer, 
  Scissors, 
  Settings, 
  Flame, 
  Zap,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "IoT Implementation",
      description: "Smart solutions for chicken farms and agricultural automation with real-time monitoring and control systems.",
      features: ["Real-time monitoring", "Remote control", "Data analytics", "Automated alerts"]
    },
    {
      icon: Printer,
      title: "3D Printing",
      description: "High-precision 3D printing services for prototypes, custom parts, and small-scale production.",
      features: ["Rapid prototyping", "Custom parts", "Multiple materials", "Post-processing"]
    },
    {
      icon: Scissors,
      title: "Laser Cutting",
      description: "Precision laser cutting for various materials with exceptional accuracy and clean finishes.",
      features: ["High precision", "Multiple materials", "Complex geometries", "Fast turnaround"]
    },
    {
      icon: Settings,
      title: "CNC Machining",
      description: "Computer-controlled machining for precise manufacturing of metal and plastic components.",
      features: ["High accuracy", "Metal & plastic", "Complex parts", "Quality assurance"]
    },
    {
      icon: Flame,
      title: "Plasma Cutting",
      description: "Industrial plasma cutting services for thick metal materials with superior edge quality.",
      features: ["Thick materials", "Fast cutting", "Clean edges", "Cost-effective"]
    },
    {
      icon: Cpu,
      title: "Engineering Consultation",
      description: "Expert engineering consultation for design optimization, manufacturing processes, and technical solutions.",
      features: ["Design review", "Process optimization", "Technical support", "Cost analysis"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Engineering Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions designed to meet your industrial and technological needs 
            with precision, innovation, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="engineering-grid">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="innovation-card group hover:border-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 smooth-transition">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="flex items-center space-x-2 text-primary font-medium hover:text-primary-glow smooth-transition group">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get a customized quote for your engineering needs today.
            </p>
            <button className="btn-metallic">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
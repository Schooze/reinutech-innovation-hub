import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, 
  Users, 
  Clock, 
  Shield,
  Target,
  Lightbulb
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project delivered with engineering precision and attention to detail."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that push the boundaries of what's possible."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Dependable engineering solutions you can trust for critical applications."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their expectations."
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "5+",
      label: "Years of Excellence",
      description: "Proven track record in engineering innovation"
    },
    {
      icon: Users,
      number: "100+",
      label: "Satisfied Clients",
      description: "Trusted by businesses across various industries"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Technical Support",
      description: "Round-the-clock assistance for your projects"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Quality Assurance",
      description: "Rigorous testing and quality control processes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Reinutech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineering innovation meets practical solutions. We are dedicated to transforming 
            ideas into reality through cutting-edge technology and precision manufacturing.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Engineering the Future, <span className="text-primary">One Innovation at a Time</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between traditional engineering and modern technology, 
              Reinutech has been at the forefront of engineering innovation. Based in Semarang, 
              Jawa Tengah, we specialize in providing comprehensive engineering solutions that range 
              from IoT implementations to precision manufacturing.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our expertise spans across multiple domains including agricultural automation, 
              precision manufacturing, and custom engineering solutions. Whether it's implementing 
              IoT systems for chicken farms or providing precision cutting services, we ensure 
              every project meets the highest standards of quality and innovation.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Innovation Driven</h4>
                <p className="text-sm text-muted-foreground">Constantly evolving with technology trends</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="bg-gradient-secondary rounded-2xl p-8 text-white">
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/0e91eb3c-86d9-4eda-9775-a134fae3c2c1.png" 
                  alt="Reinutech Logo" 
                  className="h-20 w-20 mx-auto mb-4"
                />
                <h4 className="text-2xl font-bold text-center">Our Mission</h4>
              </div>
              <p className="text-lg leading-relaxed opacity-90 text-center">
                To provide innovative engineering solutions that empower businesses 
                and individuals to achieve their technological goals through precision, 
                reliability, and cutting-edge innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-primary">Core Values</span>
          </h3>
          <div className="engineering-grid">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="innovation-card text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose <span className="text-primary">Reinutech</span>
          </h3>
          <div className="engineering-grid">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2 animate-engineering-pulse">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
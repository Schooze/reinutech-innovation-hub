import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Cog, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rotate-45"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-accent rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary-glow rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Engineering Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Engineering Innovation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight animate-slide-up">
            REINUTECH
            <span className="block text-primary mt-2">Engineering Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Professional engineering services including IoT implementation, 3D printing, 
            laser cutting, CNC machining, and plasma cutting solutions.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-slide-up">
            <div className="flex items-center space-x-2 text-accent">
              <Cog className="h-6 w-6" />
              <span className="text-sm font-medium">Precision Engineering</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Layers className="h-6 w-6" />
              <span className="text-sm font-medium">Advanced Manufacturing</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Zap className="h-6 w-6" />
              <span className="text-sm font-medium">IoT Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="btn-engineering text-lg px-8 py-4 group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth-transition" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-accent/20 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-400">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
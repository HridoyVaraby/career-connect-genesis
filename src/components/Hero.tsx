
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`CCID Bangladesh hero image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-10 shadow-lg">
              <span className="text-white/90 text-sm font-medium">Trusted by 500+ Students Worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Your Gateway to Global Opportunities
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connecting Bangladeshi students and professionals with world-class international 
              internships, training, and academic programs that transform careers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/global-programs">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  Explore Global Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/80 font-medium">Students Placed</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
                  <div className="text-white/80 font-medium">Countries</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/80 font-medium">Partner Institutions</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-lg">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
                  <div className="text-white/80 font-medium">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

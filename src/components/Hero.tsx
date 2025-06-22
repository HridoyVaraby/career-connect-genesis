
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232FC1FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Gateway to
              <span className="text-primary block">Global Opportunities</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              CCID Bangladesh connects ambitious Bangladeshi students with world-class international 
              programs, internships, and career opportunities across the globe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg"
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                Explore Programs
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-gray-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">25+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-bounce delay-300"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-primary/20 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;

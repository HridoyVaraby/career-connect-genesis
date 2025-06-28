
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import NationalProgramsSection from "@/components/NationalProgramsSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import UniversityPartners from "@/components/UniversityPartners";
import Partners from "@/components/Partners";
import AboutSection2 from "@/components/AboutSection2";
import WhyCCID from "@/components/WhyCCID";
import Testimonials from "@/components/Testimonials";
import SEOQuoteSection from "@/components/SEOQuoteSection";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ProgramCards />
      <NationalProgramsSection />
      <DestinationsSection />
      <AboutSection />
      <UniversityPartners />
      <Partners />
      <AboutSection2 />
      <WhyCCID />
      <Testimonials />
      {/*<SEOQuoteSection />*/}
      <Gallery />
      
      {/* Enhanced Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🚀 Start Your Journey Today
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Start Your 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Global Journey?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Bangladeshi students who have transformed their careers through our programs. 
              Your success story starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/global-programs">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🌟 Explore Programs
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  💬 Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

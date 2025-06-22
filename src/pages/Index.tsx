
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import NationalProgramsSection from "@/components/NationalProgramsSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import UniversityPartners from "@/components/UniversityPartners";
import Partners from "@/components/Partners";
import WhyCCID from "@/components/WhyCCID";
import Testimonials from "@/components/Testimonials";
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
      <WhyCCID />
      <Testimonials />
      <Gallery />
      
      {/* Final CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Bangladeshi students who have transformed their careers through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/global-programs">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                Explore Programs
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

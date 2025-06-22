
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating on laptops"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Bangladesh's Future Leaders
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception, CCID Bangladesh has been at the forefront of connecting 
                ambitious students and professionals with life-changing international opportunities. 
                We believe that talent knows no borders, and every Bangladeshi deserves access to 
                world-class education and career development.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive approach combines academic excellence with practical experience, 
                ensuring our participants not only gain valuable skills but also build networks 
                that last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/global-programs">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Our Story
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

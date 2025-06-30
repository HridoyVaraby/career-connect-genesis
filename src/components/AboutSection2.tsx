
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection2 = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Side First */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="max-w-2xl">
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Building Bridges to 
                <span className="bg-primary bg-clip-text text-transparent block">
                  Global Success
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At CCID, we don't just open doors—we build bridges. Our mission is to 
                create seamless pathways between Bangladeshi talent and global opportunities, 
                ensuring every student and professional can reach their full potential.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through our comprehensive support system, personalized guidance, and extensive 
                network of international partners, we've transformed the lives of hundreds of 
                ambitious individuals who now lead successful careers across the globe.
              </p>
              
              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Personalized Career Guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">24/7 Student Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Global Alumni Network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Post-Program Career Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/global-programs">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg text-white px-8 py-3 rounded-full">
                    Discover Our Impact
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/1844.webp"
                alt="Global networking and collaboration"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-3xl font-bold text-primary">97%</div>
                <div className="text-sm text-gray-600">Visa Success Rate</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-3xl font-bold text-secondary">$10k</div>
                <div className="text-sm text-gray-600">Average Starting Salary</div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-1/4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"></div>
              <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-secondary/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;

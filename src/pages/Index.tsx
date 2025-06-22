
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="pt-16">
      <Hero />
      <ProgramCards />
      
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CCID Bangladesh?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support to help Bangladeshi students access global opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <CardTitle>Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to universities and companies worldwide through our extensive partner network
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <CardTitle>Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional counseling and support throughout your application and program journey
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <CardTitle>Career Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Programs designed to enhance your career prospects and professional development
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Testimonials />
      <Partners />
      <Gallery />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Bangladeshi students who have transformed their careers through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;

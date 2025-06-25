
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, GraduationCap, MapPin, Globe, Award, Target, FileText, Briefcase, DollarSign, Building } from "lucide-react";
import DestinationsSection from "@/components/DestinationsSection";
import { Link } from "react-router-dom";

const Destinations = () => {
  const variationFactors = [
    { icon: FileText, title: "Visa Requirements", description: "Different documentation and processing times" },
    { icon: Briefcase, title: "Work Rights", description: "Part-time work permissions during study programs" },
    { icon: DollarSign, title: "Internship Stipends", description: "Compensation varies by country and industry" },
    { icon: Globe, title: "Language of Instruction", description: "English, local language, or bilingual programs" },
    { icon: Building, title: "Industry Focus", description: "Hospitality, IT, Business, Healthcare specializations" },
    { icon: Users, title: "Cultural Expectations", description: "Living standards and workplace cultures" }
  ];

  const matchingFactors = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      description: "We assess your education level and field of study to recommend suitable programs and destinations."
    },
    {
      icon: CheckCircle,
      title: "Eligibility Assessment",
      description: "Language proficiency, visa requirements, and qualification matching for each destination."
    },
    {
      icon: Target,
      title: "Career Preferences",
      description: "Your industry interests and long-term career goals guide our destination recommendations."
    },
    {
      icon: MapPin,
      title: "Budget & Logistics",
      description: "Program costs, living expenses, and financial planning for your chosen destination."
    }
  ];

  const networkAdvantages = [
    "Trusted global partners with proven track records",
    "Internships with real responsibility and industry recognition",
    "Study programs integrated with career development",
    "Local support teams and community connections",
    "High success rates in visa approvals and job placements"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              🌍 25+ Global Destinations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Explore Our Global
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Your career journey starts in the right country. From five-star hotels in the UAE to leading universities in Canada, we match your goals with the best global environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link to="/global-programs">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  Explore Program Types
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              At CCID Bangladesh, we believe your success isn't limited by borders. That's why our programs span 25+ international destinations, each carefully chosen to offer world-class internships, academic opportunities, and career growth. Whether you're studying, interning, or combining both, our destination network ensures your career begins with the right experience, in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* Global Program Destinations */}
      <DestinationsSection />
      
      {/* Additional Remote Option */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">🌐</div>
                <CardTitle>Remote Virtual Internship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Available in 70+ countries worldwide
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Varies by Destination */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Varies by Destination?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each destination offers unique opportunities and requirements. Here's what differs across our global network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {variationFactors.map((factor, index) => (
              <Card key={factor.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <factor.icon className="w-8 h-8 text-primary mb-3" />
                  <CardTitle className="text-lg">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{factor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help You Choose */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Help You Choose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team matches you with the perfect destination based on your unique profile and career aspirations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {matchingFactors.map((factor, index) => (
              <Card key={factor.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <factor.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{factor.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{factor.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Network Stands Out */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Our Destination Network Stands Out
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {networkAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🌟 Your Global Journey Awaits
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Don't Just Dream of Going Global—
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Plan It
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation to find out which destination aligns with your goals and profile. Your international career starts with the right choice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link to="/global-programs">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore Program Types
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

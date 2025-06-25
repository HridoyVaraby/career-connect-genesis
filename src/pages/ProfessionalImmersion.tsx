
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, GraduationCap, MapPin, Users, Globe, Award, BookOpen, Briefcase, Target, FileText, Calendar, Building, Service, Utensils, TrendingUp, Lightbulb, Network } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const ProfessionalImmersion = () => {
  const programPurpose = [
    "Introduce non-hospitality students to the principles, ethics, and operations of the industry",
    "Develop sensitivity to fine service, attention to detail, and teamwork",
    "Build cultural awareness of hospitality traditions and global practices",
    "Offer guided exposure to core hotel departments and roles",
    "Spark informed career planning through real-world immersion"
  ];

  const departments = [
    {
      icon: Service,
      title: "Front Office",
      description: "Guest engagement, check-ins, service standards",
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Housekeeping",
      description: "Cleanliness, organization, and quality control",
      color: "text-secondary"
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Kitchen-to-table operations, events, guest service",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Brand building, events, client acquisition",
      color: "text-blue-600"
    }
  ];

  const eligibility = [
    "Students in Bachelor's, Tourism, Business, or related degrees",
    "Individuals with no prior hospitality experience",
    "Motivated learners interested in pursuing a future in hospitality or global service industries",
    "Fluent in basic English and open to team-based learning"
  ];

  const inclusions = [
    "Full-day immersion with professional hotel access",
    "Hands-on observation across 4 hotel departments",
    "Thematic seminars on hospitality principles",
    "Round-trip transportation (school or airport pickup)",
    "Free accommodation and meals",
    "Certificate of Attendance",
    "Complimentary use of hotel gym, pool, and training facilities",
    "Free internet access during the program"
  ];

  const takeaways = [
    {
      icon: Target,
      title: "Career Clarity",
      description: "A clear view of career potential in hospitality",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Professional Skills",
      description: "Professional etiquette and soft skills",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "Cultural Awareness",
      description: "Cross-cultural service awareness",
      color: "text-green-600"
    },
    {
      icon: Network,
      title: "Industry Network",
      description: "A network of industry connections",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Confidence",
      description: "Confidence to pursue internships or work abroad",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🧭 Professional Gateway
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Professional Immersion Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              A Gateway Into the World of Hospitality for Non-Hospitality Students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                Register for Immersion Program
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              The Professional Immersion Program by CCID Bangladesh offers a powerful first step into the hospitality industry for students who haven't studied hospitality formally. This enriching and intensive experience is crafted to build awareness, appreciation, and applied understanding of hotel culture, operations, and service philosophy.
            </p>
            <p className="text-lg text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Through immersive hotel visits, role shadowing, and industry-led seminars, participants gain first-hand insight into what defines hospitality as both an art and a profession—setting the foundation for further career pathways or international internships.
            </p>
          </div>
        </div>
      </section>

      {/* Program Purpose */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎯 Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Purpose</h2>
            </div>
            
            <div className="space-y-4">
              {programPurpose.map((purpose, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🏨 Immersive Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Experience</h2>
              <p className="text-xl text-gray-600">Embedded within a functioning hotel environment</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <Card 
                  key={dept.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer border border-gray-100 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <dept.icon className={`w-8 h-8 ${dept.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{dept.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">{dept.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                In addition to shadowing, participants will attend seminars and lectures designed to explain the cultural and strategic elements of hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎓 Perfect For
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Should Join</h2>
            </div>
            
            <div className="space-y-4">
              {eligibility.map((requirement, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                📘 All-Inclusive Package
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {inclusions.map((inclusion, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{inclusion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Take Away */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                💬 Key Takeaways
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You'll Take Away</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {takeaways.map((takeaway, index) => (
                <Card 
                  key={takeaway.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <takeaway.icon className={`w-6 h-6 ${takeaway.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{takeaway.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{takeaway.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🧭 Your Hospitality Journey Starts Here
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              No Experience? 
              <span className="block bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                No Problem.
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              This is your chance to explore the hospitality industry—with support, structure, and certification.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🏨 Register for Immersion Program
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-red-600 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                📞 Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalImmersion;

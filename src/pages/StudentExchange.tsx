import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, GraduationCap, MapPin, Users, Globe, Award, BookOpen, Briefcase, Target, FileText, Calendar, Building, Utensils, TrendingUp, Heart, Plane, Languages } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";

const StudentExchange = () => {
  const programBenefits = [
    "Immerse yourself in diverse cultures and educational systems",
    "Develop language skills and cross-cultural communication abilities", 
    "Build an international network of friends and professional connections",
    "Gain academic credits while experiencing practical, hands-on learning",
    "Enhance your resume with valuable international experience"
  ];

  const programStructure = [
    {
      icon: Clock,
      title: "Duration",
      description: "2-6 months flexible programs",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Destinations", 
      description: "Multiple countries across Europe, Asia, and Americas",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Focus Areas",
      description: "Hospitality, culinary arts, business, and cultural studies",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Academic credits and completion certificates",
      color: "text-blue-600"
    }
  ];

  const exchangeAreas = [
    {
      icon: Building,
      title: "Hospitality Management",
      description: "Hotel operations, guest services, and tourism management",
      color: "text-primary"
    },
    {
      icon: Utensils,
      title: "Culinary Arts",
      description: "International cuisine, food preparation, and restaurant management",
      color: "text-secondary"
    },
    {
      icon: Briefcase,
      title: "Business Studies",
      description: "International business practices and entrepreneurship",
      color: "text-green-600"
    },
    {
      icon: Languages,
      title: "Language Immersion",
      description: "Native language learning and cultural communication",
      color: "text-blue-600"
    }
  ];

  const inclusions = [
    "Academic placement at partner institutions",
    "Accommodation arrangements and support",
    "Cultural orientation and integration programs",
    "Language support and tutoring",
    "24/7 emergency support and assistance",
    "Certificate of completion and academic credits",
    "Cultural excursions and local experiences",
    "Pre-departure preparation and guidance"
  ];

  const eligibility = [
    "Currently enrolled in undergraduate or graduate programs",
    "Strong academic standing with minimum GPA requirements",
    "Basic proficiency in English (and host country language if required)",
    "Cultural adaptability and openness to new experiences",
    "Valid passport and ability to obtain necessary visas"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/student-exchange-hero.jpg" 
            alt="Student Exchange Program" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white/80 to-red-50/80"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🌍 Global Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Student Exchange Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Expand Your Horizons Through International Education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Link to="/apply/student-exchange">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                  Apply for Exchange Program
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                  Book Free Consultation
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
            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
              Our Student Exchange Program opens doors to transformative international experiences that combine academic excellence with cultural immersion. Whether you're passionate about hospitality, culinary arts, business, or cultural studies, our partnerships with prestigious institutions worldwide provide you with opportunities to learn, grow, and build lifelong connections.
            </p>
            <p className="text-lg text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Experience education beyond borders while gaining practical skills, academic credits, and invaluable international perspective that will set you apart in today's global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                ✨ Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Exchange Program</h2>
            </div>
            
            <div className="space-y-4">
              {programBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🏛️ Program Structure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programStructure.map((item, index) => (
                <Card 
                  key={item.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Areas */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
                📚 Study Areas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Areas of Study</h2>
              <p className="text-xl text-gray-600">Diverse academic and practical learning opportunities</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {exchangeAreas.map((area, index) => (
                <Card 
                  key={area.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer border border-gray-100 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
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
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                📘 Program Inclusions
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

      {/* Eligibility */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                👥 Eligibility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Can Apply</h2>
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

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🌍 Your Global Journey Awaits
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience Education
              <span className="block bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                Beyond Borders
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their lives through international education.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/apply/student-exchange">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🌍 Apply for Exchange Program
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📞 Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentExchange;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, GraduationCap, MapPin, Users, Globe, Award, BookOpen, Briefcase, Target, FileText, Calendar, Building, Utensils, TrendingUp } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const HotelImmersion = () => {
  const programObjectives = [
    "Provide real-world exposure to hotel departments and functions",
    "Develop observation, problem-solving, and communication skills",
    "Help students align career goals with their strengths and preferences",
    "Deepen appreciation for the roles and responsibilities across hotel operations",
    "Offer a practical foundation for future internships or full-time roles in hospitality"
  ];

  const immersionStructure = [
    {
      icon: Clock,
      title: "Duration",
      description: "1 Full Day (On-site)",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Format",
      description: "Practical shadowing, guided observations, and written analysis",
      color: "text-secondary"
    },
    {
      icon: FileText,
      title: "Output",
      description: "Participant write-up with operational insights and reflections",
      color: "text-green-600"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Certificate of Attendance",
      color: "text-blue-600"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "Front Office",
      description: "Check-in/check-out, guest interaction, concierge duties",
      color: "text-primary"
    },
    {
      icon: Building,
      title: "Housekeeping",
      description: "Room preparation, hygiene protocols, housekeeping SOPs",
      color: "text-secondary"
    },
    {
      icon: Utensils,
      title: "Food & Beverage",
      description: "Table service, kitchen operations, event set-up",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing",
      description: "Client acquisition, event promotion, brand development",
      color: "text-blue-600"
    }
  ];

  const inclusions = [
    "On-site hospitality training and mini-lectures",
    "Free accommodation and full-board meals",
    "Round-trip transportation (school/airport pickup)",
    "Use of hotel amenities: pool, gym, function rooms",
    "Internet access during the program",
    "Certificate of Attendance issued upon completion"
  ];

  const eligibility = [
    "Open to students in Bachelor's in Hospitality, Tourism, or related programs",
    "Must have a basic understanding of hotel or tourism operations",
    "Strong interest in a hospitality-related career path"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hotel-immersion-hero.jpg" 
            alt="Hotel Immersion Program" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/80 to-orange-50/80"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🏨 Hospitality Immersion
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Hotel Immersion Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Step Behind the Scenes of World-Class Hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="bg-[#2FC1FF] hover:bg-[#2FC1FF]/90 text-white px-8">
                Apply for Immersion Program
              </Button>
              <Button size="lg" variant="outline" className="border-[#F89827] text-[#F89827] hover:bg-[#F89827] hover:text-white px-8">
                Book Free Consultation
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
              The Hotel Immersion Program (HIP) by CCID Bangladesh is a short, intensive training experience designed for students eager to understand the real-world operations of the hospitality industry. In just one full day, participants gain hands-on exposure in actual hotel settings—shadowing staff, observing workflows, and identifying improvement opportunities.
            </p>
            <p className="text-lg text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Whether you're a hospitality student preparing for your career or someone exploring a new industry, this immersion offers valuable insights into daily hotel operations, team dynamics, and customer service excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#2FC1FF]/10 text-[#2FC1FF] px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎯 Our Goals
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Objectives</h2>
            </div>
            
            <div className="space-y-4">
              {programObjectives.map((objective, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Target className="w-6 h-6 text-[#2FC1FF] mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immersion Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#F89827]/10 text-[#F89827] px-6 py-2 rounded-full text-sm font-medium mb-4">
                🏢 Program Structure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Immersion Structure</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {immersionStructure.map((item, index) => (
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

      {/* Key Departments */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
                🧪 Hands-On Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Students Will Experience</h2>
              <p className="text-xl text-gray-600">Core departments of hotel operations with professional guidance</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept, index) => (
                <Card 
                  key={dept.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer border border-gray-100 hover:border-[#2FC1FF]/20"
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
                Each department is presented by professionals and involves direct observation and interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#F89827]/10 text-[#F89827] px-6 py-2 rounded-full text-sm font-medium mb-4">
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

      {/* Who Can Apply */}
      <section className="py-16 bg-gradient-to-br from-[#2FC1FF]/5 to-[#F89827]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#2FC1FF]/10 text-[#2FC1FF] px-6 py-2 rounded-full text-sm font-medium mb-4">
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
      <section className="py-24 bg-gradient-to-br from-gray-900 via-[#2FC1FF] to-[#F89827] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🏨 Hospitality Awaits
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience the Hospitality Industry—
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Up Close
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our Hotel Immersion Program and see what a career in hospitality really looks like.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#2FC1FF] hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🏨 Apply for Immersion Program
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#2FC1FF] px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                📞 Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelImmersion;

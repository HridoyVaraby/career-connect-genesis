
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, GraduationCap, MapPin, Users, Globe, Award, BookOpen, Briefcase, Target, FileText, Calendar, ChefHat, Utensils } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const StudentExchange = () => {
  const learningPoints = [
    "Master 100+ traditional Thai dishes, sauces, dips, and curry pastes",
    "Learn 5–6 professional-level Thai dishes per day through live demonstration and hands-on practice",
    "English-translated recipes and meals provided daily",
    "Daily interaction with Thai chefs and instructors",
    "Culturally immersive culinary experience in the heart of Southeast Asia"
  ];

  const programOutcomes = [
    {
      icon: Award,
      title: "Diploma & Certificate",
      description: "Awarded upon successful completion",
      color: "text-primary"
    },
    {
      icon: ChefHat,
      title: "Thai Culinary Mastery",
      description: "Deep understanding of Thai culinary principles",
      color: "text-secondary"
    },
    {
      icon: Globe,
      title: "International Experience",
      description: "International hands-on training experience",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Cross-Cultural Skills",
      description: "Cross-cultural skill development in a professional kitchen",
      color: "text-blue-600"
    }
  ];

  const inclusions = [
    {
      icon: GraduationCap,
      title: "Training at Thai Chefs School",
      description: "Professional training facility in Bangkok",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Full Accommodation",
      description: "Complete housing during your stay",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "All Materials Included",
      description: "Instructional materials and cooking supplies",
      color: "text-green-600"
    },
    {
      icon: Utensils,
      title: "Daily Meals",
      description: "Based on prepared dishes you learn",
      color: "text-blue-600"
    },
    {
      icon: Users,
      title: "Cultural Support",
      description: "Orientation and support throughout",
      color: "text-purple-600"
    }
  ];

  const requirements = [
    "Minimum qualification: TESDA NC2 Cookery Certification",
    "Also open to higher-qualified chefs or culinary students",
    "Basic English proficiency",
    "Passion for culinary arts and global cuisine"
  ];

  const whyChoosePoints = [
    "Direct international placement with vetted institutions",
    "100% support from application to return",
    "Cultural, professional, and career growth in one program",
    "Proven success with other global initiatives",
    "Certification adds global weight to your culinary resume"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🌐 Cultural Exchange
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Student Exchange Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Explore Global Culture Through Skill-Based International Training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                Apply for Exchange Program
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
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
              The Student Exchange Program by CCID Bangladesh offers an immersive short-term international learning experience focused on cultural exchange, culinary mastery, and professional development. Our first destination: Bangkok, Thailand—a global hub for food innovation and culinary excellence.
            </p>
            <p className="text-lg text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              This program is ideal for aspiring chefs, hospitality students, and culinary professionals looking to enhance their expertise in authentic Thai cuisine while gaining international certification, networking with peers, and experiencing cultural enrichment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
                🇹🇭 Featured Program
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Thai Culinary Exchange (Bangkok, Thailand)</h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Program Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-gray-700"><strong>In Partnership With:</strong> Thai Chefs School, Bangkok</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="text-gray-700"><strong>Duration:</strong> 4 weeks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700"><strong>Location:</strong> Bangkok, Thailand</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700"><strong>Recognition:</strong> Certified by Thai Government's Education Department</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">🥢 Cultural Immersion</h4>
                  <p className="text-gray-700">
                    Experience authentic Thai culture while mastering traditional cooking techniques in the heart of Southeast Asia's culinary capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🥢 Learning Experience
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You Will Learn</h2>
            </div>
            
            <div className="space-y-4">
              {learningPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <ChefHat className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎓 Achievements
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Outcomes</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programOutcomes.map((outcome, index) => (
                <Card 
                  key={outcome.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{outcome.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{outcome.description}</p>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-medium mb-4">
                🏠 All-Inclusive
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What's Included</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inclusions.map((inclusion, index) => (
                <Card 
                  key={inclusion.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <inclusion.icon className={`w-6 h-6 ${inclusion.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{inclusion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{inclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Why Choose */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Requirements */}
              <div className="animate-fade-in">
                <div className="mb-8">
                  <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                    📝 Requirements
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Apply</h2>
                </div>
                
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose */}
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="mb-8">
                  <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                    🌍 Why Choose Us
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose CCID's Exchange Program?</h2>
                </div>
                
                <div className="space-y-4">
                  {whyChoosePoints.map((point, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
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
              🇹🇭 Culinary Adventure Awaits
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Master 
              <span className="block bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                Thai Cuisine in Bangkok?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Apply for our culinary exchange program and become a globally certified chef with authentic Thai cooking expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🍛 Apply for Exchange Program
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-orange-600 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
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

export default StudentExchange;

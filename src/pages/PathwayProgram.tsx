
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, GraduationCap, MapPin, Users, Globe, Award, BookOpen, Briefcase, Target, FileText, Calendar } from "lucide-react";
import DestinationsSection from "@/components/DestinationsSection";
import Testimonials from "@/components/Testimonials";

const PathwayProgram = () => {
  const programGoals = [
    "Prepare students for full-time international degrees with foundational academic and language support",
    "Embed industry training and internships as part of the academic journey",
    "Align education with global career standards in hospitality, business, tech, and more",
    "Support Bangladesh's national development by producing globally competitive graduates",
    "Create bridges between local colleges and top international universities"
  ];

  const formatDetails = [
    {
      icon: Calendar,
      title: "Duration",
      description: "1–2 academic years",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Format",
      description: "50% academic study + 50% paid internship",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Outcome",
      description: "Direct progression to bachelor's degree abroad",
      color: "text-green-600"
    },
    {
      icon: Briefcase,
      title: "Work Permission",
      description: "Part-time work while studying",
      color: "text-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Certification",
      description: "Internationally recognized transcripts",
      color: "text-purple-600"
    }
  ];

  const studyFields = [
    { name: "Culinary Arts", icon: "👨‍🍳" },
    { name: "Hospitality & Tourism", icon: "🏨" },
    { name: "Food & Beverage Management", icon: "🍽️" },
    { name: "Business & Entrepreneurship", icon: "💼" },
    { name: "Digital Marketing", icon: "📱" },
    { name: "Information Technology (IT)", icon: "💻" },
    { name: "Education & Early Childhood", icon: "👶" },
    { name: "Healthcare & Nursing", icon: "🏥" },
    { name: "Industrial Design & Engineering", icon: "⚙️" }
  ];

  const eligibilityPoints = [
    "Recent HSC, A-Level, or Diploma graduates",
    "Students seeking a study + internship education model",
    "Applicants who want to save time and money on direct university admission",
    "Anyone planning to migrate through skill-based education routes",
    "Students with basic English proficiency (IELTS may not be required for all destinations)"
  ];

  const requiredDocuments = [
    "Valid passport",
    "Academic transcripts & certificates",
    "Statement of Purpose (SOP)",
    "Resume / CV",
    "Bank solvency or sponsor letter",
    "Medical certificate",
    "English proficiency proof (if applicable)"
  ];

  const benefits = [
    "University-level academic preparation",
    "Hands-on work experience abroad",
    "Improved language, communication & cross-cultural skills",
    "Opportunity to transition into full-time employment after graduation",
    "Access to global credentials & career pathways"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-6">
                🧭 Academic Pathway
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Pathway Program
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bridge Your Way to Global Education & Employment
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                The Pathway Program by CCID Bangladesh is a structured academic and professional preparation route that helps students transition smoothly into international bachelor's or diploma programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                  Schedule Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=600&auto=format&fit=crop"
                alt="Academic pathway and education journey"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Study + Work</p>
                    <p className="text-sm text-gray-600">Blended Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Pathway Program by CCID Bangladesh is a structured academic and professional preparation route that helps students transition smoothly into international bachelor's or diploma programs. Designed for those who want both education and work experience abroad, the pathway offers a blended curriculum combining academic study with paid internship training.
              </p>
              <p className="text-lg text-gray-600">
                If you dream of upgrading your qualifications, improving employability, and accessing world-class institutions—this is your first step.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
                alt="International students and academic success"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Goals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎯 Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Goals</h2>
            </div>
            
            <div className="space-y-4">
              {programGoals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Target className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
              📘 Program Structure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Format</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
                alt="Academic studies and learning environment"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {formatDetails.slice(0, 4).map((detail, index) => (
                <Card 
                  key={detail.title}
                  className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <detail.icon className={`w-8 h-8 ${detail.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{detail.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card 
                className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(formatDetails[4].icon, { className: `w-8 h-8 ${formatDetails[4].color}` })}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{formatDetails[4].title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{formatDetails[4].description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                alt="Professional internship and work experience"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Study Fields */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
              🎓 Academic Focus
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Available Study Fields</h2>
            <p className="text-xl text-gray-600">Academic Pathway Focus Areas</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop"
                alt="Diverse academic fields and specializations"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {studyFields.slice(0, 6).map((field, index) => (
                <div 
                  key={field.name}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {field.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 text-sm">
                      {field.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {studyFields.slice(6).map((field, index) => (
                <div 
                  key={field.name}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-primary/20"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {field.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 text-sm">
                      {field.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                alt="Career guidance and professional development"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <DestinationsSection />
      
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Each country has unique program structures. Speak to our team to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Who Should Apply */}
              <div className="animate-fade-in">
                <div className="mb-8">
                  <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                    📄 Eligibility
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Apply</h2>
                </div>
                
                <div className="space-y-4">
                  {eligibilityPoints.map((point, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="mb-8">
                  <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                    📝 Documentation
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                </div>
                
                <div className="space-y-4">
                  {requiredDocuments.map((doc, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 animate-fade-in"
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
              🧠 Program Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You Gain</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
                alt="Global career success and opportunities"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🧭 Your Journey Starts Here
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Begin Your 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Study + Internship Journey?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Talk to us and take your first step toward a globally recognized education that combines academic excellence with real-world experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                🗓️ Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                🚀 Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathwayProgram;

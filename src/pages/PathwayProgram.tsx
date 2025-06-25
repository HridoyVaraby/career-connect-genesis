
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
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🧭 Academic Pathway
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Pathway Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Bridge Your Way to Global Education & Employment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
                Apply Now
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
              The Pathway Program by CCID Bangladesh is a structured academic and professional preparation route that helps students transition smoothly into international bachelor's or diploma programs. Designed for those who want both education and work experience abroad, the pathway offers a blended curriculum combining academic study with paid internship training.
            </p>
            <p className="text-lg text-gray-600 mt-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              If you dream of upgrading your qualifications, improving employability, and accessing world-class institutions—this is your first step.
            </p>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-medium mb-4">
                📘 Program Structure
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Program Format</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formatDetails.map((detail, index) => (
                <Card 
                  key={detail.title}
                  className="hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <detail.icon className={`w-8 h-8 ${detail.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{detail.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Fields */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-4">
                🎓 Academic Focus
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Available Study Fields</h2>
              <p className="text-xl text-gray-600">Academic Pathway Focus Areas</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyFields.map((field, index) => (
                <div 
                  key={field.name}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in group cursor-pointer border border-gray-100 hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {field.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {field.name}
                    </h3>
                  </div>
                </div>
              ))}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
                🧠 Program Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What You Gain</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
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

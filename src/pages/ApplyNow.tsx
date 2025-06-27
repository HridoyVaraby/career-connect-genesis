
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, Briefcase, Users, Laptop, Building, Plane } from "lucide-react";

const ApplyNow = () => {
  const programs = [
    {
      title: "International Internship Program",
      description: "Gain hands-on experience in world-class hotels, resorts, and companies abroad across hospitality, business, culinary, and more.",
      icon: <Globe className="w-8 h-8" />,
      link: "/apply/international-internship",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      title: "Pathway Program",
      description: "An academic bridging opportunity with global institutions offering study + work programs. Ideal for students seeking long-term global education paths.",
      icon: <GraduationCap className="w-8 h-8" />,
      link: "/apply/pathway-program",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      title: "Study Abroad Program",
      description: "Full-time academic opportunities at internationally recognized universities, with options to work part-time and gain global certification.",
      icon: <Briefcase className="w-8 h-8" />,
      link: "/apply/study-abroad",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      title: "Student Exchange Program",
      description: "Short-term international exchanges focused on practical learning, culture, and culinary/hospitality training.",
      icon: <Users className="w-8 h-8" />,
      link: "/apply/student-exchange",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100"
    },
    {
      title: "Virtual Internship Program",
      description: "Remote internships with global companies across 70+ countries. No relocation required—start building your digital career today.",
      icon: <Laptop className="w-8 h-8" />,
      link: "/apply/virtual-internship",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100"
    },
    {
      title: "Hotel Immersion Program",
      description: "1-day practical exposure inside hotel departments for real-world hospitality understanding.",
      icon: <Building className="w-8 h-8" />,
      link: "/apply/hotel-immersion",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100"
    },
    {
      title: "Professional Immersion Program",
      description: "Foundational hospitality training for students from non-hospitality backgrounds—includes seminars and site visits.",
      icon: <Plane className="w-8 h-8" />,
      link: "/apply/professional-immersion",
      gradient: "from-pink-500 to-red-500",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-100"
    }
  ];

  const requirements = [
    "Updated resume with a photo",
    "Video introduction",
    "Academic transcripts & diploma",
    "Passport (valid at least 2 years)",
    "Medical and police clearance",
    "Proof of funds",
    "Relevant certifications (if applicable)",
    "Motivation letter"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Updated to match other pages */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
              🌍 Global Opportunities Await
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Apply for a Global Program
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Select a Program That Matches Your Dreams and Begin Your Global Career Journey
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Your Gateway to Global Opportunities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              CCID Bangladesh offers life-changing global programs designed to prepare students and young professionals for the international workforce. Whether you're aiming to study abroad, intern remotely, or gain practical experience overseas—this is your gateway to a world of opportunities.
            </p>
            <p className="text-lg text-gray-600 mt-4 font-medium">
              Choose a program below to begin the application process.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Program
            </h2>
            <p className="text-xl text-gray-600">
              Explore our range of global programs and find the perfect fit for your career goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.title} 
                className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${program.bgColor} ${program.hoverColor} border-0 overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Link to={program.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105`}
                    >
                      Apply Now →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What You'll Need to Apply
              </h2>
              <p className="text-xl text-gray-600">
                Prepare these documents to complete your application
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Deciding Which Program Suits You Best?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our advisors are here to help. Schedule a free consultation and take the first step toward your global future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 rounded-full">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/destinations">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-3 rounded-full">
                Explore Global Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;

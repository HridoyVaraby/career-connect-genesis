
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  const programs = [
    {
      title: "International Internship Program",
      description: "Gain hands-on experience in world-class hotels, resorts, and companies abroad across hospitality, business, culinary, and more.",
      icon: "🎓",
      link: "/apply/international-internship"
    },
    {
      title: "Pathway Program",
      description: "An academic bridging opportunity with global institutions offering study + work programs. Ideal for students seeking long-term global education paths.",
      icon: "🎓",
      link: "/apply/pathway-program"
    },
    {
      title: "Study Abroad Program",
      description: "Full-time academic opportunities at internationally recognized universities, with options to work part-time and gain global certification.",
      icon: "🌍",
      link: "/apply/study-abroad"
    },
    {
      title: "Student Exchange Program",
      description: "Short-term international exchanges focused on practical learning, culture, and culinary/hospitality training.",
      icon: "🌏",
      link: "/apply/student-exchange"
    },
    {
      title: "Virtual Internship Program",
      description: "Remote internships with global companies across 70+ countries. No relocation required—start building your digital career today.",
      icon: "💻",
      link: "/apply/virtual-internship"
    },
    {
      title: "Hotel Immersion Program",
      description: "1-day practical exposure inside hotel departments for real-world hospitality understanding.",
      icon: "🏨",
      link: "/apply/hotel-immersion"
    },
    {
      title: "Professional Immersion Program",
      description: "Foundational hospitality training for students from non-hospitality backgrounds—includes seminars and site visits.",
      icon: "🧳",
      link: "/apply/professional-immersion"
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
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apply for a Global Program
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Select a Program That Matches Your Dreams and Begin Your Global Career Journey
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              CCID Bangladesh offers life-changing global programs designed to prepare students and young professionals for the international workforce. Whether you're aiming to study abroad, intern remotely, or gain practical experience overseas—this is your gateway to a world of opportunities.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Choose a program below to begin the application process.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card 
                key={program.title} 
                className="hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center text-3xl">
                    {program.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6 text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Link to={program.link}>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all duration-300"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What You'll Need to Apply</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need help deciding which program suits you best?
              </h3>
              <p className="text-gray-600 mb-8">
                Our advisors are here to help. Schedule a free consultation and take the first step toward your global future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/destinations">
                  <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold">
                    Explore Global Destinations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;

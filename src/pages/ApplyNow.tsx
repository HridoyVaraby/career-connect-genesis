import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  const programs = [
    {
      title: "International Internship Program",
      description: "Gain hands-on experience in world-class hotels, resorts, and companies abroad across hospitality, business, culinary, and more.",
      image: "/image 12.webp",
      link: "/apply/international-internship"
    },
    {
      title: "Pathway Program",
      description: "An academic bridging opportunity with global institutions offering study + work programs. Ideal for students seeking long-term global education paths.",
      image: "/image 3.webp",
      link: "/contact"
    },
    {
      title: "Study Abroad Program",
      description: "Full-time academic opportunities at internationally recognized universities, with options to work part-time and gain global certification.",
      image: "/image 5.webp",
      link: "/apply/study-abroad"
    },
    {
      title: "Student Exchange Program",
      description: "Short-term international exchanges focused on practical learning, culture, and culinary/hospitality training.",
      image: "/image 9.webp",
      link: "/contact"
    },
    {
      title: "Virtual Internship Program",
      description: "Remote internships with global companies across 70+ countries. No relocation required—start building your digital career today.",
      image: "/image 7.webp",
      link: "/contact"
    },
    {
      title: "Hotel Immersion Program",
      description: "1-day practical exposure inside hotel departments for real-world hospitality understanding.",
      image: "/image 10.webp",
      link: "/contact"
    },
    {
      title: "Professional Immersion Program",
      description: "Foundational hospitality training for students from non-hospitality backgrounds—includes seminars and site visits.",
      image: "/image 13.webp",
      link: "/contact"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Your Gateway to Global Success
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Overview</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/global-connection.png" alt="Global" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Global Opportunities</h3>
                      <p className="text-gray-600 leading-relaxed">
                        CCID Bangladesh offers life-changing global programs designed to prepare students and young professionals for the international workforce.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img src="/icons/advancement.png" alt="Global" className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Career Transformation</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Whether you're aiming to study abroad, intern remotely, or gain practical experience overseas—this is your gateway to a world of opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:text-left text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Journey?</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Choose a program below to begin the application process and take the first step toward your global future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">Expert Guidance</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">Global Network</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm">Proven Success</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                className="flex flex-col hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-full h-48 mx-auto mb-4 overflow-hidden rounded-lg shadow-sm">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow text-center">
                  <CardDescription className="mb-6 text-gray-600 text-sm leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <div className="mt-auto">
                    <Link to={program.link}>
                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition-all duration-300"
                      >
                        Apply Now →
                      </Button>
                    </Link>
                  </div>
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
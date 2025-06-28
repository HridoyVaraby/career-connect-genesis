
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award, MapPin, Briefcase, GraduationCap, Heart, Utensils, Monitor, Camera, BookOpen } from "lucide-react";
import DestinationsSection from "@/components/DestinationsSection";
import Testimonials from "@/components/Testimonials";

const InternationalInternship = () => {
  const providedServices = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "International Placement",
      description: "Top-tier hotels, resorts, and organizations worldwide"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Global Training",
      description: "Industry-specific training from international experts"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Multi-Role Exposure",
      description: "Culinary, F&B, Guest Relations, Tourism, Business, Education, IT"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Global Certifications",
      description: "Structured evaluation and internationally recognized credentials"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Career Pathways",
      description: "Job placement opportunities and work permit pathways"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Ongoing Support",
      description: "From application to completion and beyond"
    }
  ];

  const internshipRoles = [
    { name: "Culinary Arts", icon: <Utensils className="w-6 h-6" />, color: "bg-red-50 text-red-600 border-red-200" },
    { name: "Food & Beverage", icon: <Utensils className="w-6 h-6" />, color: "bg-orange-50 text-orange-600 border-orange-200" },
    { name: "Hotel Front Office", icon: <Briefcase className="w-6 h-6" />, color: "bg-blue-50 text-blue-600 border-blue-200" },
    { name: "Guest Relations", icon: <Users className="w-6 h-6" />, color: "bg-green-50 text-green-600 border-green-200" },
    { name: "Tourism Management", icon: <MapPin className="w-6 h-6" />, color: "bg-purple-50 text-purple-600 border-purple-200" },
    { name: "Business Development", icon: <Briefcase className="w-6 h-6" />, color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { name: "Marketing & PR", icon: <Camera className="w-6 h-6" />, color: "bg-pink-50 text-pink-600 border-pink-200" },
    { name: "Information Technology", icon: <Monitor className="w-6 h-6" />, color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { name: "Young Teachers", icon: <BookOpen className="w-6 h-6" />, color: "bg-yellow-50 text-yellow-600 border-yellow-200" }
  ];

  const eligibilityRequirements = [
    "University students (2nd year or above)",
    "Recent graduates (within the last 12 months)",
    "Motivated individuals aged 20–30",
    "Hospitality, business, IT, multimedia, and education majors",
    "No IELTS required—basic to intermediate English communication"
  ];

  const requiredDocuments = [
    "Valid passport (12+ months validity)",
    "University letter or graduation certificate",
    "Academic transcripts",
    "Updated resume or video CV",
    "Proof of funds (bank statement for visa)",
    "Medical certificate and police clearance"
  ];

  const investmentOverview = [
    {
      region: "USA / Europe",
      cost: "~$5000 USD",
      includes: "Program, visa guidance, placement, onboarding"
    },
    {
      region: "Asia / UAE",
      cost: "~$2000 USD",
      includes: "Full internship service & local coordination"
    },
    {
      region: "Virtual",
      cost: "Low to free",
      includes: "Matching and online experience support"
    }
  ];

  const applicationSteps = [
    {
      step: "01",
      title: "Apply Online",
      description: "Submit application with required documents"
    },
    {
      step: "02",
      title: "Interview & Review",
      description: "Eligibility assessment and personal interview"
    },
    {
      step: "03",
      title: "Internship Match",
      description: "Match with verified global partners"
    },
    {
      step: "04",
      title: "Visa Processing",
      description: "Documentation support and visa assistance"
    },
    {
      step: "05",
      title: "Pre-departure",
      description: "Orientation and travel assistance"
    },
    {
      step: "06",
      title: "Internship Start",
      description: "Begin internship with on-site support"
    },
    {
      step: "07",
      title: "Post-internship",
      description: "Support, job guidance, and certifications"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🌍 Global Career Opportunities
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                International Internship <span className="text-primary">Program</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bridge the Gap Between Education and Global Industry
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Connect with paid, real-world experiences in the global hospitality and service sector. Transform your career through internationally certified training and multicultural professional development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop"
                alt="International internship opportunities"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">20+ Countries</p>
                    <p className="text-sm text-gray-600">Internship Destinations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-primary">Provide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support and opportunities for your global career journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {providedServices.map((service, index) => (
              <Card key={service.title} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=600&auto=format&fit=crop"
                alt="Professional international work environment"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Gain Real <span className="text-primary">International Experience</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Work alongside international professionals in world-class organizations. Develop skills that global employers value while building an international network.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Paid Internships</h4>
                    <p className="text-gray-600">Earn while you learn in your international placement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Integration</h4>
                    <p className="text-gray-600">Immerse yourself in different cultures and work environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Career Advancement</h4>
                    <p className="text-gray-600">Build skills and connections for future opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Internship <span className="text-secondary">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diverse opportunities across multiple industries and departments
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop"
                alt="Hotel and hospitality internship"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internshipRoles.slice(0, 6).map((role, index) => (
                <div
                  key={role.name}
                  className={`${role.color} border-2 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-center space-x-3">
                    {role.icon}
                    <span className="font-semibold">{role.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
              {internshipRoles.slice(6).map((role, index) => (
                <div
                  key={role.name}
                  className={`${role.color} border-2 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-center space-x-3">
                    {role.icon}
                    <span className="font-semibold">{role.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
                alt="Business and IT internship opportunities"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-6 py-3 rounded-full shadow-md">
              <span className="font-semibold">Note:</span> Rotations across departments available based on host availability and performance
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <DestinationsSection />

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eligibility & <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple requirements for extraordinary opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Eligibility */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Who Is This For?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{document}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <span className="font-semibold">Note:</span> Some destinations may require additional documents such as vaccination records or language assessments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="text-secondary">Investment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for your global career investment
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Region</th>
                      <th className="px-6 py-4 text-left font-semibold">Estimated Cost</th>
                      <th className="px-6 py-4 text-left font-semibold">Includes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {investmentOverview.map((item, index) => (
                      <tr key={item.region} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.region}</td>
                        <td className="px-6 py-4 text-primary font-bold">{item.cost}</td>
                        <td className="px-6 py-4 text-gray-600">{item.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-yellow-50 border-t">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Important:</span> Flights, travel insurance, and personal expenses are not included in the program cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your step-by-step journey to global career success
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop"
                alt="Application and interview process"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              {applicationSteps.slice(0, 4).map((step, index) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              {applicationSteps.slice(4).map((step, index) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop"
                alt="International travel and departure"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Start Your Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Launch Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Career?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Let us help you find the right country, the right training, and the right path to international success.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-10 py-4 text-lg shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Download Program Brochure
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalInternship;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Globe, Users, Award, MapPin, Briefcase, GraduationCap, BookOpen, FileText, Shield, HeartHandshake, Star } from "lucide-react";
import DestinationsSection from "@/components/DestinationsSection";
import Testimonials from "@/components/Testimonials";

const StudyAbroad = () => {
  const whyChooseUs = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Direct University Admission",
      description: "Access to international universities & colleges without detours"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "No IELTS Always Required",
      description: "Flexible language requirements based on destination"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Scholarship Guidance",
      description: "Expert support for funding and scholarship applications"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Full Visa Documentation",
      description: "Complete embassy preparation and visa support"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "All Program Levels",
      description: "Undergraduate, postgraduate & transfer programs"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "Transparent Approach",
      description: "Student-first service with no hidden costs"
    }
  ];

  const whatWeOffer = [
    {
      number: "01",
      title: "University & Course Matching",
      description: "Get matched with institutions based on your academic profile, goals, and budget.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      number: "02", 
      title: "Application & Admission Processing",
      description: "We help you compile documents, prepare SOPs, and submit complete, error-free applications.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Visa Support", 
      description: "Expert guidance for documentation, embassy interviews, financial prep, and approval strategy.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Pre-departure Orientation",
      description: "Cultural prep, housing tips, airport pickup, and essential do's & don'ts.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      number: "05",
      title: "Onward Support",
      description: "Need to switch majors or apply for post-study work visas? We're still with you.",
      icon: <HeartHandshake className="w-6 h-6" />
    }
  ];

  const eligibilityRequirements = [
    "Students completing HSC, A-Levels, Diploma, Bachelor's, or Master's",
    "Strong academic record or relevant background", 
    "Basic communication skills in English",
    "Motivated to study abroad and adapt to a new culture",
    "No age limit for most destinations"
  ];

  const requiredDocuments = [
    "Valid Passport",
    "Academic Transcripts & Certificates", 
    "English Proficiency Test (if applicable)",
    "Statement of Purpose (SOP)",
    "Bank Solvency & Sponsor Letters",
    "Resume / CV",
    "Passport-size Photos",
    "Experience Certificates (for postgraduate applicants)"
  ];

  const comparisonData = [
    {
      criteria: "Entry Point",
      studyAbroad: "Direct to University",
      pathway: "Via local/international partner campus"
    },
    {
      criteria: "Flexibility", 
      studyAbroad: "High",
      pathway: "Moderate (requires transfer)"
    },
    {
      criteria: "Visa Type",
      studyAbroad: "Student Visa", 
      pathway: "Conditional Student Visa"
    },
    {
      criteria: "Duration",
      studyAbroad: "1–4 years",
      pathway: "6 months – 2 years then transfer"
    },
    {
      criteria: "Cost",
      studyAbroad: "Higher upfront",
      pathway: "Often lower initial cost"
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
                🎓 Transform Your Future
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Study <span className="text-primary">Abroad</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Begin Your International Education Journey with Confidence
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                At CCID Bangladesh, we believe that studying abroad is more than earning a degree—it's about transforming your future. Our Study Abroad Program connects Bangladeshi students with globally ranked universities and pathway providers across North America, Europe, Asia, and Oceania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  Book a Free Consultation
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop"
                alt="Students studying abroad"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">50+ Countries</p>
                    <p className="text-sm text-gray-600">Study Destinations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Study Abroad with <span className="text-primary">CCID?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From your first consultation to your first day on campus, our expert team supports every step
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <Card key={benefit.title} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Benefits with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                alt="International university campus"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Experience World-Class <span className="text-primary">Education</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Study at internationally recognized universities with cutting-edge facilities, renowned faculty, and diverse student communities from around the world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Recognition</h4>
                    <p className="text-gray-600">Degrees recognized worldwide by employers and institutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Diversity</h4>
                    <p className="text-gray-600">Learn alongside students from different cultures and backgrounds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Career Opportunities</h4>
                    <p className="text-gray-600">Access to global job markets and international networks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <DestinationsSection />
      
      {/* Additional Note after Destinations */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 bg-white/80 backdrop-blur-sm inline-block px-6 py-3 rounded-full shadow-md">
              <span className="font-semibold">Note:</span> Some universities offer study + internship pathways or credit transfer options.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="text-secondary">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for your international education journey
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                alt="Student guidance and counseling"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              {whatWeOffer.slice(0, 3).map((service, index) => (
                <div key={service.number} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {service.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary">{service.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              {whatWeOffer.slice(3).map((service, index) => (
                <div key={service.number} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {service.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-secondary">{service.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop"
                alt="Visa and documentation support"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Can Apply & <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple eligibility criteria and document requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Eligibility */}
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Who Can Apply?</CardTitle>
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
                  <FileText className="w-8 h-8 text-blue-600" />
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
                    <span className="font-semibold">Note:</span> Exact documents vary based on country and institution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Study Abroad vs <span className="text-secondary">Pathway Program</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right path for your educational journey
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Criteria</th>
                      <th className="px-6 py-4 text-left font-semibold">Study Abroad Program</th>
                      <th className="px-6 py-4 text-left font-semibold">Pathway Program</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={item.criteria} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{item.criteria}</td>
                        <td className="px-6 py-4 text-gray-700">{item.studyAbroad}</td>
                        <td className="px-6 py-4 text-gray-700">{item.pathway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding & Scholarships */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-yellow-100 p-4 rounded-full mb-6">
                <Star className="w-12 h-12 text-yellow-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Funding & <span className="text-secondary">Scholarships</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Many of our partner institutions offer partial scholarships, early-bird discounts, or work-study options. We also guide students in preparing for external scholarships and provide templates and tips to improve chances of approval.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
                alt="Scholarship and funding opportunities"
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
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Start Your Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-primary">Study Abroad?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Let's find the right country, the right university, and the best outcome—for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;

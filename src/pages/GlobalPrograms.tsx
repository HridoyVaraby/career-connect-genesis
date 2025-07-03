import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { FileText, CheckCircle } from "lucide-react";
import DestinationsSection from "@/components/DestinationsSection";
import Testimonials from "@/components/Testimonials";
import ProgramCards from "@/components/ProgramCards";

const GlobalPrograms = () => {
  const programs = [
    {
      title: "International Internship",
      description: "Paid, structured internships in hospitality, culinary arts, business, IT, and teaching across USA, UAE, Europe, and Asia.",
      details: "Includes stipend, visa support, accommodation, and job placement pathways.",
      icon: "🌍",
      link: "/global-programs/international-internship",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Study Abroad",
      description: "Bachelor's and Master's degree pathways at partner universities in the USA, Canada, UK, France, Malaysia, and Australia.",
      details: "IELTS sometimes not required. Includes application, visa, and settlement support.",
      icon: "🎓",
      link: "/global-programs/study-abroad",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Virtual Internship Programs",
      description: "Global work experience without leaving Bangladesh.",
      details: "Connect with international organizations remotely in business, tech, marketing, and more.",
      icon: "💻",
      link: "/global-programs/virtual-internship",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Pathway Programs",
      description: "Begin studies in Bangladesh or a partner campus, then transfer abroad.",
      details: "Smooth transition to full-time international study with visa and credit support.",
      icon: "🛤️",
      link: "/global-programs/pathway-program",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Student Exchange",
      description: "Short-term cultural and academic exchange programs for immersive learning.",
      details: "Experience new cultures, languages, and international classrooms.",
      icon: "✈️",
      link: "/global-programs/student-exchange",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Professional Immersion",
      description: "Programs designed for fresh graduates and early-career professionals seeking global skill development.",
      details: "Often tied to paid placements and post-program job offers.",
      icon: "💼",
      link: "/global-programs/professional-immersion",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Hotel Immersion",
      description: "Intensive training in 4-star and 5-star hotels abroad for students of hospitality and tourism.",
      details: "Culinary, guest relations, front desk, F&B, event management, and more.",
      icon: "🏨",
      link: "/global-programs/hotel-immersion",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const eligibilityCards = [
    { title: "University Students", description: "2nd year or above", icon: "🎓" },
    { title: "Recent Graduates", description: "Within 12 months", icon: "👨‍🎓" },
    { title: "Target Majors", description: "Hospitality, Agriculture, Medical", icon: "📚" },
    { title: "Young Professionals", description: "Aged 18-35 Years Old", icon: "💼" },
    { title: "Students Worldwide", description: "With basic English & motivation", icon: "🌍" }

  ];

  const includedFeatures = [
    "Program Matching & Application Support",
    "Visa & Interview Preparation", 
    "Accommodation & Travel Coordination",
    "Onboarding & Pre-Departure Orientation",
    "Emergency Contact & Ongoing Support",
    "International Certification",
    "Post-program Job Matching / TRC Opportunities"
  ];

  const costData = [
    {
      region: "USA / Europe",
      cost: "~$5000 USD",
      inclusions: "Visa, program fee, placement, coordination"
    },
    {
      region: "Asia / UAE", 
      cost: "~$2000 USD",
      inclusions: "Full support, placement, orientation"
    },
    {
      region: "Virtual",
      cost: "Minimal or no cost",
      inclusions: "Application fee only (if any)"
    }
  ];

  const metrics = [
    { number: "500+", label: "Successful International Placements", icon: "🎓" },
    { number: "25+", label: "Country Partners & Institutions", icon: "🌎" },
    { number: "70%", label: "Internship-to-Job Conversion", icon: "💼" },
    { number: "5+", label: " Years of Experience in Career Consulting", icon: "📅" }
  ];

  const requiredDocuments = [
    {
      title: "Valid Passport",
      description: "Minimum 12 months validity",
      icon: "📄"
    },
    {
      title: "University Letter",
      description: "Verifying student status or graduation",
      icon: "🎓"
    },
    {
      title: "Academic Transcripts",
      description: "& Certificates",
      icon: "📜"
    },
    {
      title: "Proof of Funds",
      description: "Bank statement for visa purposes",
      icon: "💰"
    },
    {
      title: "Updated Resume/CV",
      description: "Video CV recommended for internships",
      icon: "📝"
    },
    {
      title: "Medical Certificate",
      description: "Fitness to travel/work",
      icon: "🏥"
    },
    {
      title: "Police Clearance",
      description: "Certificate",
      icon: "🔍"
    }
  ];

  const faqs = [
    {
      question: "What is the typical duration of international internship programs?",
      answer: "Program duration varies by destination and type. Most internships range from 3-12 months, with some extending up to 18 months for specialized programs. Study abroad programs typically last 1-4 years depending on the degree level."
    },
    {
      question: "Do I need IELTS for all study abroad programs?",
      answer: "Not always! Many of our partner universities offer pathway programs or accept alternative English proficiency tests. We also have partnerships that waive IELTS requirements for qualified students. Our team will assess your specific situation and recommend the best options."
    },
    {
      question: "What support do you provide during my time abroad?",
      answer: "We provide comprehensive ongoing support including emergency contact services, regular check-ins, assistance with workplace or academic issues, help with visa extensions if needed, and guidance for post-program opportunities including job placements or permanent residency pathways."
    },
    {
      question: "Are the internships paid?",
      answer: "Yes! Most of our international internship programs are paid positions that provide stipends or salaries. The compensation varies by destination, industry, and role type. We ensure all placements meet fair labor standards and provide livable wages."
    },
    {
      question: "What happens if I face problems during my program?",
      answer: "We have 24/7 emergency support and dedicated country coordinators who can assist with any issues. Whether it's workplace concerns, accommodation problems, or personal emergencies, our team is always available to help resolve situations quickly and effectively."
    },
    {
      question: "Can I extend my stay after completing the program?",
      answer: "Many of our programs offer pathways to permanent employment or further study opportunities. We provide guidance on visa extensions, job searching, and immigration processes. Approximately 70% of our participants in select destinations successfully transition to longer-term opportunities."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              25+ Countries • 500+ Success Stories
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Global Programs
            </h1>
            <p className="text-2xl text-primary font-medium mb-4 animate-fade-in">
              Your Pathway to the World Starts Here.
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
              At CCID Bangladesh, we believe that talent knows no borders. Our Global Programs connect Bangladeshi students with world-class international opportunities across 25+ countries—providing global exposure, workplace readiness, and pathways to international careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl">
                Browse Programs
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Categories Grid */}
      {/*<section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 7 Program Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From international internships to study abroad opportunities—find the perfect program for your career goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.title} 
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden animate-fade-in bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 text-center group-hover:text-gray-800">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="mb-4 text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <div className="bg-gray-50 p-3 rounded-lg mb-6">
                    <p className="text-sm text-primary font-medium">💡 {program.details}</p>
                  </div>
                  <Link to={program.link}>
                    <Button 
                      className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105`}
                    >
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* Program Cards */}
      <ProgramCards />
      {/* Destinations Section */}
      <DestinationsSection />

      {/* Who Is This For Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/10 text-secondary px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Eligibility
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Is This <span className="bg-primary bg-clip-text text-transparent">For?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {eligibilityCards.map((card, index) => (
              <Card 
                key={card.title}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Full Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's <span className="bg-primary bg-clip-text text-transparent">Included?</span>

            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Investment Table */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Investment Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program <span className="bg-primary bg-clip-text text-transparent">Investment</span>

            </h2>
            <p className="text-gray-600 mb-8">Cost varies by destination, duration, and program type. Flights and insurance are usually not included.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-secondary p-6">
                <div className="grid grid-cols-3 text-white font-bold text-lg">
                  <div>Region</div>
                  <div>Typical Cost</div>
                  <div>Inclusions</div>
                </div>
              </div>
              {costData.map((row, index) => (
                <div 
                  key={row.region}
                  className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}
                >
                  <div className="font-semibold text-gray-900">{row.region}</div>
                  <div className="text-primary font-bold text-lg">{row.cost}</div>
                  <div className="text-gray-600">{row.inclusions}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Success Metrics
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Track Record
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl font-bold mb-4">{metric.number}</div>
                <div className="text-xl">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Application Requirements Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Application Requirements
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Required <span className="bg-primary bg-clip-text text-transparent">Documents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Prepare these essential documents to ensure a smooth application process for your global program.
            </p>
            <p className="text-gray-500 italic">
              Note: Some destinations may require additional documents such as vaccination records or language assessments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {requiredDocuments.map((doc, index) => (
              <Card 
                key={doc.title}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary/20 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{doc.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 text-sm">{doc.description}</p>
                  <div className="mt-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Got <span className="bg-secondary bg-clip-text text-transparent">Questions?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our global programs and application process.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Ready to Start?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Are You Ready to Take Your <span className="bg-primary bg-clip-text text-transparent">First Step Abroad?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Explore global programs tailored to your goals—and let us guide the way to your international success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/apply">
                <Button size="lg" className="bg-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  Schedule Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPrograms;

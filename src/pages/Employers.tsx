
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2,
  Users,
  UserCheck,
  FileText,
  Presentation,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Heart,
  Lightbulb,
  GraduationCap,
  Coffee,
  Monitor
} from "lucide-react";

const Employers = () => {
  const benefits = [
    "Access to a pool of job-ready youth from colleges and universities",
    "Streamlined internship and volunteer recruitment",
    "Direct promotion of roles to campuses nationwide",
    "Support with onboarding and work experience management",
    "Employer branding opportunities through events and campus talks",
    "Cost-effective, efficient hiring support"
  ];

  const services = [
    {
      icon: UserCheck,
      title: "Talent Sourcing & Shortlisting",
      description: "We identify and recommend candidates based on your job description, values, and role type—saving you time and resources."
    },
    {
      icon: Building2,
      title: "Internship & Volunteer Program Support",
      description: "Whether you need short-term interns or long-term volunteers, we handle outreach, vetting, and scheduling."
    },
    {
      icon: Presentation,
      title: "Career Talks & Brand Visibility",
      description: "Represent your organization through student-focused seminars, career fairs, and info sessions hosted online or at institutions."
    },
    {
      icon: Users,
      title: "HR Training for Managers",
      description: "We help line managers better support interns, apprentices, and first-time employees with clear onboarding and feedback systems."
    },
    {
      icon: FileText,
      title: "CV Access & Candidate Profiles",
      description: "Tap into our database of vetted, skilled, and motivated candidates—complete with resumes and optional video profiles."
    }
  ];

  const idealPartners = [
    { icon: Building2, text: "Corporate & SME employers" },
    { icon: Heart, text: "NGOs & nonprofits" },
    { icon: Lightbulb, text: "Startups & innovation hubs" },
    { icon: GraduationCap, text: "Educational service providers" },
    { icon: Monitor, text: "Hospitality, IT, business, and retail sectors" }
  ];

  const processSteps = [
    { title: "Register Your Interest", description: "Submit your company information and hiring needs" },
    { title: "Submit Requirements", description: "Provide detailed internship or job specifications" },
    { title: "Receive Recommendations", description: "Get curated candidate profiles matching your criteria" },
    { title: "Interview & Finalize", description: "Select and onboard your chosen candidates" },
    { title: "Monitor Progress", description: "Ongoing support throughout the placement period" }
  ];

  const partnerLogos = [
    "photo-1560472354-b33ff0c44a43",
    "photo-1486312338219-ce68d2c6f44d",
    "photo-1556761175-5973dc0f32e7",
    "photo-1551434678-e076c223a692",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1553877522-43269d4ea984"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              National Programs for Employers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Recruit, Train, and Grow with Bangladesh's Future Workforce.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              At CCID Bangladesh, we connect visionary employers with emerging talent across Bangladesh. Our National Employer Program is built to support your recruitment, branding, and workforce development goals by sourcing and preparing high-potential students and graduates—ready to contribute from day one.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
              Whether you're seeking interns, entry-level employees, or volunteers, our team streamlines the process while delivering a meaningful experience for both your organization and the candidates.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-secondary" />
                <span className="text-secondary font-semibold">Why Partner with CCID</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Why Partner with CCID?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-secondary/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                What We Offer Employers
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Comprehensive solutions to meet your talent acquisition and development needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Ideal Employer Partners
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {idealPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <partner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{partner.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Simple steps to connect with top talent
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full">
                        <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Previous Employer Engagements
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Trusted by leading organizations across Bangladesh
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partnerLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={`https://images.unsplash.com/${logo}?w=200&h=120&fit=crop&crop=center`}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to find your next great hire?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Partner with CCID to access Bangladesh's brightest emerging professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-secondary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Contact Our Placement Team
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-secondary px-8 py-3 text-lg font-semibold"
              >
                Register as Employer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Users, GraduationCap, FileText, Video, Presentation, Code, UserCheck, Building, Heart, Briefcase } from "lucide-react";

const Services = () => {
  const internshipBenefits = [
    { icon: CheckCircle, text: "Paid internships with food & lodging" },
    { icon: Globe, text: "Pathways to work permits and TRC" },
    { icon: FileText, text: "No IELTS required" },
    { icon: Users, text: "Visa & travel guidance" },
    { icon: Briefcase, text: "Internship → Job conversion" },
    { icon: GraduationCap, text: "Industry certification" }
  ];

  const services = [
    {
      title: "Internship & Work Experience",
      description: "Connects students with local businesses for hands-on experience and confidence-building.",
      icon: Briefcase,
      category: "Students"
    },
    {
      title: "Job Placement Support",
      description: "We bridge the gap between talent and hiring industries through curated job matching.",
      icon: UserCheck,
      category: "Students"
    },
    {
      title: "Career Assessment & Counseling",
      description: "Scientifically-backed career tools to discover strengths, interests, and suitable professions.",
      icon: Users,
      category: "Students"
    },
    {
      title: "Resume & Video CV Development",
      description: "Modern CV coaching and video profile support to attract top recruiters.",
      icon: Video,
      category: "Students"
    },
    {
      title: "Workshops & Seminars",
      description: "Live sessions with HR experts, entrepreneurs, and academic leaders to inspire and guide.",
      icon: Presentation,
      category: "All"
    },
    {
      title: "App & Website Training & Development",
      description: "Guided digital training for aspiring developers and freelancers entering the global market.",
      icon: Code,
      category: "Students"
    },
    {
      title: "Teacher Training & Capacity Building",
      description: "Professional training for teachers and educators using global classroom best practices.",
      icon: GraduationCap,
      category: "Institutions"
    },
    {
      title: "Customized Training Programs",
      description: "Tailored, goal-specific corporate or institutional training designed with measurable outcomes.",
      icon: Building,
      category: "Employers"
    },
    {
      title: "Human Capital Development & Management",
      description: "End-to-end recruitment, training, and retention planning for modern organizations.",
      icon: Users,
      category: "Employers"
    },
    {
      title: "Health & Wellbeing Counseling",
      description: "Career-focused mental health, productivity, and lifestyle coaching for long-term success.",
      icon: Heart,
      category: "All"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232FC1FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Our Services
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 mb-8 space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <p className="font-semibold text-primary">Skill-driven. Globally connected. Purpose-built.</p>
              <p>We offer services that empower students, graduates, and employers through impactful training, development, and global opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section: International Internship Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Featured Program</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Launch Your Global Career with Our <span className="text-primary">International Internship Program</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Gain paid, hands-on experience in hospitality, business, IT, or education across 25+ countries—including the USA, Europe, UAE, Australia, and Asia. No IELTS required. We guide you through the full journey: matching, visa, travel, and onboarding.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {internshipBenefits.map((benefit, index) => (
                <div 
                  key={benefit.text}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg">
                Learn More About the Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore All Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🧭 Explore All Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                In addition to global internships, CCID provides a robust set of services to support professional development, employment readiness, and institutional capacity building.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {service.category}
                    </Badge>
                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Not sure which service is right for you?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Speak to our expert advisors to explore what best fits your career goals.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

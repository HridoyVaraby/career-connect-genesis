
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";


const VirtualInternship = () => {
  const benefits = [
    {
      icon: "🌍",
      title: "Guaranteed Placement",
      description: "Placement in a company aligned with your career goals"
    },
    {
      icon: "💼",
      title: "4,000+ Host Companies",
      description: "Work with companies across 70+ countries"
    },
    {
      icon: "✈️",
      title: "No Travel Required",
      description: "No visas, no travel, no relocation—start immediately"
    },
    {
      icon: "📚",
      title: "Career Bridge Curriculum",
      description: "Direct access to comprehensive learning materials"
    },
    {
      icon: "👥",
      title: "Personal Coaching",
      description: "Assigned Internship Coach and Experience Manager"
    },
    {
      icon: "🎓",
      title: "Global Certificate",
      description: "Receive Global Employability Certificate and portfolio"
    },
    {
      icon: "🧠",
      title: "Community Engagement",
      description: "Group discussions, webinars & peer networking"
    },
    {
      icon: "⏳",
      title: "Flexible Schedule",
      description: "10, 20, or 30 hours/week for 1–4 months"
    }
  ];

  const supportPoints = [
    {
      title: "Weekly Check-ins",
      description: "Regular meetings with your Intern Experience Manager",
      src: "/icons/calendar.png"
    },
    {
      title: "Coaching Calls",
      description: "Midpoint & end-of-program coaching with your Internship Coach",
      src: "/icons/telephone.png"
    },
    {
      title: "Career Management Plan",
      description: "Delivery of your Global Career Management Plan (GCMP)",
      src: "/icons/clipboard.png"
    },
    {
      title: "Group Discussions",
      description: "Weekly moderated discussions with peer interns",
      src: "/icons/chat.png"
    },
    {
      title: "Business Webinars",
      description: "Bi-weekly webinars on global career topics",
      src: "/icons/goal.png"
    },
    {
      title: "Intern Community",
      description: "Access to supportive intern community throughout",
      src: "/icons/community.png"
    }
  ];

  const careerFields = [
    "Business & Entrepreneurship",
    "Marketing & Communications", 
    "Computer Science & IT",
    "Hospitality & Tourism",
    "Banking & Finance",
    "Media, Publishing & Journalism",
    "Engineering",
    "Healthcare & Pharmaceuticals",
    "Logistics & Supply Chain",
    "Urban Planning & Real Estate",
    "Creative Design & Fashion",
    "Human Resources & Recruitment",
    "Sport, Health & Wellness",
    "Green Tech & Sustainability",
    "Legal Services & Compliance",
    "More industries added regularly"
  ];

  const eligibilityItems = [
    { category: "Who It's For", items: [
      "University students or recent graduates",
      "Young professionals seeking international experience", 
      "Career changers preparing for remote work roles",
      "Anyone wanting global credentials without traveling"
    ]},
    { category: "Requirements", items: [
      "Basic English communication",
      "Access to internet & a computer",
      "Commitment to remote work culture", 
      "Passion to grow professionally in a global setting"
    ]}
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
                Remote Work Revolution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-secondary">Virtual</span> Internship Program
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Gain Global Work Experience—From Anywhere in the World
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                The future of work is already here. With remote-first industries, digital workplaces, and borderless careers on the rise, CCID Bangladesh's Virtual Internship Program equips you with the skills, structure, and support to succeed from wherever you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply/virtual-internship">
                <Button size="lg" className="bg-[#2FC1FF] hover:bg-[#2FC1FF]/90 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-[#2FC1FF]/25 transition-all duration-300 transform hover:scale-105">
                  Apply for Virtual Internship
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-[#F89827] text-[#F89827] hover:bg-[#F89827] hover:text-white px-10 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
                  Talk To A Consultant
                </Button>
              </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/image 7.webp"
                alt="Students studying abroad"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">20+ Countries</p>
                    <p className="text-sm text-gray-600">Virtual Internships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#2FC1FF]/10 text-[#2FC1FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Program Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Virtual Internship Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've partnered with thousands of companies across 70+ countries to offer fully remote internships with comprehensive support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Experience */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#F89827]/10 text-[#F89827] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Full Support Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works: Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support system with dedicated coaching and community engagement throughout your internship.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {supportPoints.map((point, index) => (
                <div key={point.title} className="flex items-start gap-6 group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img src={point.src} alt={point.title} className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Fields */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#2FC1FF]/10 text-[#2FC1FF] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Career Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Career Field
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Career Field Focus Track guarantees placement in your area of interest from diverse industries.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="fields" className="border border-gray-200 rounded-2xl px-6 shadow-md hover:shadow-lg transition-all duration-300">
                <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-[#2FC1FF] transition-colors duration-300">
                  View All 15+ Career Fields Available
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {careerFields.map((field, index) => (
                      <div key={field} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#2FC1FF]/5 transition-colors duration-300 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                        <div className="w-2 h-2 bg-gradient-to-r from-[#2FC1FF] to-[#F89827] rounded-full"></div>
                        <span className="text-gray-700 font-medium">{field}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#F89827]/10 text-[#F89827] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who Can Apply?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {eligibilityItems.map((section, sectionIndex) => (
              <Card key={section.category} className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${sectionIndex * 200}ms` }}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{section.category}</CardTitle>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#2FC1FF] to-[#F89827] rounded-full mx-auto"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={item} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${(sectionIndex * 200) + (index * 100)}ms` }}>
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2FC1FF]/10 via-white to-[#F89827]/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#2FC1FF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F89827]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              Transform Your Career
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ready to Build Your Global Career—Remotely?
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              Get started with an international internship that fits your future and your schedule.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-[#2FC1FF]/25 transition-all duration-300 transform hover:scale-105">
                  Apply for Virtual Internship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualInternship;

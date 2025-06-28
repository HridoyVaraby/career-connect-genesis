
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Video, 
  Presentation, 
  UserCheck, 
  Building, 
  Heart, 
  Globe, 
  Calendar,
  Check,
  ClipboardCheck,
  MessageSquare,
  Award,
  ArrowRight
} from "lucide-react";
import React, { useState, useEffect } from "react";

const Students = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if viewport is mobile size
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  const benefits = [
    { icon: Building, text: "Build real-world experience through local internships" },
    { icon: Users, text: "Get career guidance from industry professionals" },
    { icon: Presentation, text: "Boost your confidence with soft skills and public speaking" },
    { icon: FileText, text: "Prepare job-winning resumes and video CVs" },
    { icon: UserCheck, text: "Attend workshops led by corporate HRs and entrepreneurs" },
    { icon: Globe, text: "Connect with top employers across Bangladesh" }
  ];

  const programFeatures = [
    {
      icon: Building,
      title: "Internship & Volunteer Placement",
      description: "Get hands-on experience by working with local businesses, NGOs, and community initiatives that align with your interests."
    },
    {
      icon: Users,
      title: "Personal Development Workshops",
      description: "Participate in seminars covering leadership, communication, mindset, and motivation—hosted at schools, colleges, and online."
    },
    {
      icon: UserCheck,
      title: "Career Counseling & Domain Discovery",
      description: "Through structured assessments and expert sessions, discover your passion and map out the path to your ideal career."
    },
    {
      icon: FileText,
      title: "Resume & Video CV Support",
      description: "Create professional, standout resumes and dynamic video profiles that help you get noticed by recruiters."
    },
    {
      icon: Presentation,
      title: "Industry Interaction",
      description: "Attend meet-and-greet sessions with corporate HR leaders and guest lectures by successful professionals."
    }
  ];

  const applicationSteps = [
    { icon: ClipboardCheck, title: "Fill out the Student Registration Form", description: "Complete our comprehensive application" },
    { icon: MessageSquare, title: "Attend an informal interview or orientation session", description: "Meet our team and learn more about opportunities" },
    { icon: UserCheck, title: "Get matched with opportunities", description: "We'll connect you with suitable internships or training programs" },
    { icon: Award, title: "Receive certification", description: "Get a certificate of participation or work experience" }
  ];

  const eligibilityPoints = [
    "Students aged 18–25",
    "Enrolled in a college, university, or English-medium school in Bangladesh",
    "Committed to developing professional skills and gaining experience",
    "Must complete a short application form"
  ];

  const galleryImages = [
    "photo-1649972904349-6e44c42644a7",
    "photo-1488590528505-98d2b5aba04b",
    "photo-1581091226825-a6a2a5aee158",
    "photo-1500673922987-e212871fec22",
    "photo-1506744038136-46273834b3fb",
    "photo-1518495973542-4542c06a5843"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232FC1FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              National Programs for Students
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Your future starts here—with guidance, experience, and real-world readiness.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              CCID Bangladesh believes that every student deserves a career-ready future. Our national programs provide college, university, and school students across Bangladesh with structured, impactful, and personalized opportunities to grow—academically, professionally, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Why Join Our Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Why Join Our National Program?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.text}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                What's Included?
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                We bridge the gap between education and employment through a proven model of local internships, workshops, skill development, and career counseling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programFeatures.map((feature, index) => (
                <Card key={feature.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Eligibility
              </h2>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {eligibilityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Student Registration Form
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Take the first step towards your future career
              </p>
            </div>

            <Card className="p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="relative">
                {/* Loading indicator */}
                <div id="formLoadingIndicator" className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
                
                {/* WordPress Form Iframe */}
                <div className="w-full overflow-hidden">
                  <iframe 
                    src="https://wp.ccidbd.com/student-form/" 
                    title="Student Registration Form"
                    className="w-full border-0" 
                    style={{ 
                      minHeight: isMobile ? '3300px' : '3000px'
                    }} 
                    frameBorder="0"
                    scrolling="no"
                    onLoad={() => {
                      const loadingIndicator = document.getElementById('formLoadingIndicator');
                      if (loadingIndicator) loadingIndicator.style.display = 'none';
                    }}
                  ></iframe>
                </div>
                
                {/* Fallback message */}
                <div className="text-center mt-4 text-gray-600">
                  <p>If the form doesn't load, <a href="https://wp.ccidbd.com/student-form/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">click here to open it in a new tab</a></p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Program Gallery
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                See our students in action - from workshops to internships
              </p>
            </div>

            <Carousel className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-0">
                          <img
                            src={`https://images.unsplash.com/${image}?w=400&h=300&fit=crop&crop=faces`}
                            alt={`Program activity ${index + 1}`}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to take your first step toward success?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Join our National Student Program and prepare for your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-[#F89827] hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
              >
                Talk to a Program Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;

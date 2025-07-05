
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, FileText, Video, Presentation, UserCheck, Building, Heart, Globe, Calendar } from "lucide-react";
import nationalProgramsHero from "@/assets/national-programs-hero.jpg";
import studentsCollaboration from "@/assets/students-collaboration.jpg";

const NationalPrograms = () => {
  const studentServices = [
    { icon: Building, text: "Local internship & volunteer placement" },
    { icon: Users, text: "Personal development workshops" },
    { icon: UserCheck, text: "Career counseling & domain discovery" },
    { icon: Video, text: "Video resume creation" },
    { icon: Presentation, text: "Industry-specific seminars and bootcamps" },
    { icon: Heart, text: "Engagements with corporate HR teams" }
  ];

  const employerServices = [
    { icon: UserCheck, text: "Job-ready student sourcing" },
    { icon: FileText, text: "Shortlisting & CV bank access" },
    { icon: Building, text: "Volunteer and internship program support" },
    { icon: Presentation, text: "Employer branding on campuses" },
    { icon: Users, text: "HR training for managing new talent" },
    { icon: Globe, text: "Access to career fairs and industry talks" }
  ];

  const institutionServices = [
    { icon: GraduationCap, text: "Custom career programming" },
    { icon: Presentation, text: "Industry-expert lectures" },
    { icon: Building, text: "Campus-based internship placement" },
    { icon: FileText, text: "Monitoring & evaluation support" },
    { icon: Users, text: "Capacity-building for coordinators" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={nationalProgramsHero} 
            alt="Students in training session" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/85 to-accent/5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              National Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Empowering Bangladeshi Youth and Employers, Locally.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              At CCID Bangladesh, our mission to connect education with real-world experience begins right here at home. Our National Programs are designed for students, institutions, and employers across Bangladesh—focusing on internships, personal development, recruitment, and industry collaboration.
            </p>
          </div>
        </div>
      </section>
      
      {/* For Students Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">For Students</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                  Career Building Starts Here
                </h2>
                <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  Our student-focused initiatives include internship placements, seminars, training sessions, and soft skill development programs aimed at preparing you for the local and global job market.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={studentsCollaboration} 
                  alt="Students collaborating on projects" 
                  className="rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {studentServices.map((service, index) => (
                <div 
                  key={service.text}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{service.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/national-programs/students">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Explore Student Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Building className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold">For Employers</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Hire, Train, and Grow with Confidence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                Our national employer services help organizations recruit emerging talent, host work experience programs, and develop their HR strategies. We streamline student-industry engagement and offer value-driven partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {employerServices.map((service, index) => (
                <div 
                  key={service.text}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl hover:bg-accent/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-gray-700 font-medium">{service.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/national-programs/employers">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
                  Register as Employer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Institutional Partnerships</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                Building Bridges Between Classrooms and Careers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
                We collaborate with schools, colleges, and universities to ensure students are guided, assessed, and equipped to meet market demands.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {institutionServices.map((service, index) => (
                <div 
                  key={service.text}
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary/5 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{service.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Want to Bring CCID Programs to Your Campus or Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              We're just a message away from creating meaningful impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-primary text-white hover:bg-secondary px-8 py-3 text-lg font-semibold"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-primary hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalPrograms;

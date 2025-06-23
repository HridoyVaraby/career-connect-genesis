
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Users, GraduationCap, Building, Target, Eye, MapPin, Phone, Mail, Award } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const services = [
    { icon: Globe, text: "International Internships & Global Job Placement" },
    { icon: Users, text: "Career Counseling & Assessment" },
    { icon: GraduationCap, text: "University Pathway Support" },
    { icon: Building, text: "Teacher Training & Capacity Development" },
    { icon: Award, text: "Corporate and HR Solutions" },
    { icon: Users, text: "National student and employer programs" },
    { icon: Globe, text: "Digital skill development & wellness coaching" }
  ];

  const processSteps = [
    { number: "01", title: "Discover", description: "Assess goals, challenges, and opportunities" },
    { number: "02", title: "Define", description: "Set objectives and measurable outcomes" },
    { number: "03", title: "Design", description: "Create tailored program plans" },
    { number: "04", title: "Develop", description: "Execute training, placement, or guidance" },
    { number: "05", title: "Deploy", description: "Launch real-world application" },
    { number: "06", title: "Deliver", description: "Track results, provide feedback and support" }
  ];

  const whyChooseUs = [
    "Trusted by leading universities, embassies & corporate partners",
    "Strong presence across Asia, Europe, North America, and the Middle East",
    "End-to-end placement, visa, and training support",
    "A student-first philosophy backed by measurable outcomes"
  ];

  const affiliations = [
    { name: "UNWTO", logo: "/placeholder.svg" },
    { name: "ILO", logo: "/placeholder.svg" },
    { name: "British Council", logo: "/placeholder.svg" },
    { name: "Embassy Partners", logo: "/placeholder.svg" },
    { name: "University Partners", logo: "/placeholder.svg" },
    { name: "Corporate Partners", logo: "/placeholder.svg" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/20 via-primary/5 to-secondary/10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium animate-fade-in" style={{ animationDelay: '200ms' }}>
              Bridging the gap between education and employment—locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  🧭 Who We Are
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Canvas for Career and Individual Development (CCID) is a purpose-driven organization founded by visionary entrepreneurs with one goal: to align the talents of Bangladeshi youth with real-world opportunities. Since our inception, we've worked to close the gap between what students learn and what industries demand—both in Bangladesh and abroad.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in career-focused programs, global internships, and professional development, all designed to support young people as they transition into confident professionals.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating in a modern workspace"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    🎯 Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-base">
                    To empower students and job-seekers with practical, skill-based education, international exposure, and industry mentorship—so they can thrive in a competitive global workforce.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    🌍 Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed text-base">
                    To become the leading Bangladeshi platform for global and national career development—producing confident, skilled individuals and creating sustainable links between academia and industry.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                💡 What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a unique blend of local and international career-building services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
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
          </div>
        </div>
      </section>

      {/* Our 6-D Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🔷 Our 6-D Process
              </h2>
              <p className="text-xl text-gray-600">
                A structured approach to development and delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <Card 
                  key={step.number}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white animate-fade-in hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CCID Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🌐 Why Choose CCID?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div 
                  key={reason}
                  className="flex items-start gap-4 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Affiliations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤝 Membership & Affiliations
            </h2>
            <p className="text-xl text-gray-600">
              Connected to reputable organizations that strengthen our global reach
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {affiliations.map((partner, index) => (
              <div 
                key={partner.name}
                className="flex flex-col items-center p-6 bg-white rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-w-full max-h-full object-contain" 
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-gray-600 text-center font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                📍 Our Office
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <Card className="p-8 shadow-lg border-0">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Akram Tower (13th Floor), 199 Shaid Nazrul Islam Srani,<br />
                          15/5 Bijoy Nagar, Dhaka-1000
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">+8801723-234301</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">info@ccidbd.com</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8970040902994!2d90.39168791498193!3d23.75398898459194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5db4d6b8c7%3A0x7b5b3b5b3b5b3b5b!2sBijoy%20Nagar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625097600000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CCID Bangladesh Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Want to work with us or join a program?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Let's discuss how CCID can help you achieve your career goals.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold animate-fade-in transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: '400ms' }}
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

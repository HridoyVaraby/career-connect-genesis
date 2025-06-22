
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramCards = () => {
  const programs = [
    {
      title: "Study Abroad",
      description: "Access top universities worldwide with our comprehensive study abroad programs",
      icon: "🎓",
      link: "/global-programs/study-abroad",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      title: "Virtual Internship",
      description: "Gain international work experience through our virtual internship opportunities",
      icon: "💻",
      link: "/global-programs/virtual-internship",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      title: "International Internship",
      description: "Work abroad with leading companies through our international internship programs",
      icon: "🌍",
      link: "/global-programs/international-internship",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      title: "Hotel Immersion",
      description: "Specialized hospitality training programs with leading hotels worldwide",
      icon: "🏨",
      link: "/global-programs/hotel-immersion",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100"
    },
    {
      title: "Professional Immersion",
      description: "Immerse yourself in international business environments and practices",
      icon: "💼",
      link: "/global-programs/professional-immersion",
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100"
    },
    {
      title: "Pathway Program",
      description: "Structured pathways to international education and career opportunities",
      icon: "🛤️",
      link: "/global-programs/pathway-program",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100"
    },
    {
      title: "Student Exchange",
      description: "Experience different cultures while continuing your education abroad",
      icon: "✈️",
      link: "/global-programs/student-exchange",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 Global Career Programs
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Explore Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Global Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from a wide range of international opportunities designed to elevate your career and transform your future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={program.title} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${program.bgColor} ${program.hoverColor} border-0 overflow-hidden animate-fade-in relative`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center relative z-10 pb-4">
                <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <CardDescription className="mb-8 text-gray-600 text-lg leading-relaxed">
                  {program.description}
                </CardDescription>
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
        
        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
            <p className="text-white/90 mb-6">Join thousands of successful graduates worldwide</p>
            <Link to="/global-programs">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 rounded-full">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;

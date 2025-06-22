
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
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Virtual Internships",
      description: "Gain international work experience through our virtual internship opportunities",
      icon: "💻",
      link: "/global-programs/virtual-internship",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "International Internships",
      description: "Work abroad with leading companies through our international internship programs",
      icon: "🌍",
      link: "/global-programs/international-internship",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Student Exchange",
      description: "Experience different cultures while continuing your education abroad",
      icon: "✈️",
      link: "/global-programs/student-exchange",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "Professional Immersion",
      description: "Immerse yourself in international business environments and practices",
      icon: "💼",
      link: "/global-programs/professional-immersion",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Hotel Immersion",
      description: "Specialized hospitality training programs with leading hotels worldwide",
      icon: "🏨",
      link: "/global-programs/hotel-immersion",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of international programs designed to boost your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.title} 
              className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${program.color} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{program.icon}</div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-gray-600">
                  {program.description}
                </CardDescription>
                <Link to={program.link}>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/global-programs">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;

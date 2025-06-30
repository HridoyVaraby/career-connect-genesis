
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramCards = () => {
  const programs = [
    {
      title: "Study Abroad",
      description: "Access top universities worldwide with our comprehensive study abroad programs",
      image: "/image 5.webp",
      link: "/global-programs/study-abroad"
    },
    {
      title: "Virtual Internship",
      description: "Gain international work experience through our virtual internship opportunities",
      image: "/image 7.webp",
      link: "/global-programs/virtual-internship"
    },
    {
      title: "International Internship",
      description: "Work abroad with leading companies through our international internship programs",
      image: "/image 12.webp",
      link: "/global-programs/international-internship"
    },
    {
      title: "Hotel Immersion",
      description: "Specialized hospitality training programs with leading hotels worldwide",
      image: "/image 10.webp",
      link: "/global-programs/hotel-immersion"
    },
    {
      title: "Professional Immersion",
      description: "Immerse yourself in international business environments and practices",
      image: "/image 13.webp",
      link: "/global-programs/professional-immersion"
    },
    {
      title: "Pathway Program",
      description: "Structured pathways to international education and career opportunities",
      image: "/image 3.webp",
      link: "/global-programs/pathway-program"
    },
    {
      title: "Student Exchange",
      description: "Experience different cultures while continuing your education abroad",
      image: "/image 9.webp",
      link: "/global-programs/student-exchange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Grow Globally, Succeed Professionally
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Global Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose from a wide range of international opportunities designed to elevate your career and transform your future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={program.title} 
              className={`group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-full h-32 mx-auto mb-6 overflow-hidden rounded-lg shadow-sm">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-8 text-gray-600 text-base leading-relaxed">
                  {program.description}
                </CardDescription>
                <Link to={program.link}>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Career?</h3>
            <p className="text-gray-600 mb-6">Join thousands of successful graduates worldwide</p>
            <Link to="/global-programs">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-lg">
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

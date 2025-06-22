
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GlobalPrograms = () => {
  const programs = [
    {
      title: "Study Abroad",
      description: "Access top universities worldwide with comprehensive support",
      icon: "🎓",
      link: "/global-programs/study-abroad"
    },
    {
      title: "Virtual Internship Programs",
      description: "Gain international work experience remotely",
      icon: "💻",
      link: "/global-programs/virtual-internship"
    },
    {
      title: "International Internship",
      description: "Work abroad with leading global companies",
      icon: "🌍",
      link: "/global-programs/international-internship"
    },
    {
      title: "Pathway Program",
      description: "Bridge programs to international education",
      icon: "🛤️",
      link: "/global-programs/pathway-program"
    },
    {
      title: "Student Exchange",
      description: "Cultural immersion through student exchange programs",
      icon: "✈️",
      link: "/global-programs/student-exchange"
    },
    {
      title: "Professional Immersion",
      description: "Intensive professional development programs",
      icon: "💼",
      link: "/global-programs/professional-immersion"
    },
    {
      title: "Hotel Immersion",
      description: "Specialized hospitality industry training",
      icon: "🏨",
      link: "/global-programs/hotel-immersion"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock international opportunities with our comprehensive global programs designed 
              for Bangladeshi students seeking world-class education and career experiences.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-6">
                    {program.description}
                  </CardDescription>
                  <Link to={program.link}>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPrograms;

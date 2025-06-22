
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Application Support",
      description: "Complete assistance with university and program applications",
      icon: "📝"
    },
    {
      title: "Visa Assistance",
      description: "Expert guidance through the visa application process",
      icon: "🛂"
    },
    {
      title: "Career Counseling",
      description: "Professional career guidance and planning sessions",
      icon: "💼"
    },
    {
      title: "Scholarship Guidance",
      description: "Help finding and applying for scholarships and funding",
      icon: "💰"
    },
    {
      title: "Test Preparation",
      description: "IELTS, TOEFL, GRE, and other standardized test prep",
      icon: "📚"
    },
    {
      title: "Cultural Orientation",
      description: "Preparation for living and studying abroad",
      icon: "🌍"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive support services to ensure your success in international programs.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Destinations = () => {
  const destinations = [
    { name: "United States", flag: "🇺🇸", programs: "Study Abroad, Internships", universities: "50+" },
    { name: "United Kingdom", flag: "🇬🇧", programs: "Study Abroad, Exchange", universities: "30+" },
    { name: "Canada", flag: "🇨🇦", programs: "Study Abroad, Work Programs", universities: "25+" },
    { name: "Australia", flag: "🇦🇺", programs: "Study Abroad, Internships", universities: "20+" },
    { name: "Germany", flag: "🇩🇪", programs: "Study Abroad, Research", universities: "15+" },
    { name: "Netherlands", flag: "🇳🇱", programs: "Study Abroad, Exchange", universities: "12+" },
    { name: "Singapore", flag: "🇸🇬", programs: "Internships, Business", universities: "8+" },
    { name: "Japan", flag: "🇯🇵", programs: "Cultural Exchange, Tech", universities: "10+" }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Destinations
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore opportunities across 25+ countries with our extensive global network.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Card key={destination.name} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="text-6xl mb-4">{destination.flag}</div>
                  <CardTitle>{destination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-2">
                    {destination.programs}
                  </CardDescription>
                  <p className="text-primary font-semibold">
                    {destination.universities} Universities
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

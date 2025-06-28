
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const UniversityPartners = () => {
  const universities = [
    { name: "Oxford University", logo: "/placeholder.svg" },
    { name: "MIT", logo: "/placeholder.svg" },
    { name: "University of Toronto", logo: "/placeholder.svg" },
    { name: "Auckland University", logo: "/placeholder.svg" },
    { name: "Trinity College Dublin", logo: "/placeholder.svg" },
    { name: "University of Melbourne", logo: "/placeholder.svg" },
    { name: "ETH Zurich", logo: "/placeholder.svg" },
    { name: "Sciences Po Paris", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner Universities Across the Globe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted academic pathways with top international universities.
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {universities.map((university, index) => (
              <CarouselItem key={university.name} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow animate-fade-in h-40"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={university.logo} 
                      alt={`${university.name} logo`} 
                      className="max-w-full max-h-full object-contain" 
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-gray-600 text-center leading-tight font-medium">{university.name}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default UniversityPartners;

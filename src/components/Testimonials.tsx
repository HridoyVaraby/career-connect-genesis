
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Farhan R.",
      program: "USA Internship",
      quote: "Thanks to CCID, my USA internship turned into a full-time offer!",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Fatima Rahman",
      program: "Study Abroad - UK",
      quote: "CCID Bangladesh made my dream of studying at Oxford a reality.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Mohammad Hassan",
      program: "International Internship - USA",
      quote: "The program opened doors I never thought possible at Fortune 500 companies.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Rashida Khan",
      program: "Virtual Internship - Canada",
      quote: "CCID helped me gain international experience even during the pandemic.",
      image: "/api/placeholder/100/100"
    },
    {
      name: "Ahmed Ali",
      program: "Hotel Immersion - UAE",
      quote: "The hospitality training in Dubai transformed my career completely.",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📢 Hear From Our Achievers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students who transformed their careers through CCID programs.
          </p>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <Card className="bg-gray-50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-primary text-sm">{testimonial.program}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
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

export default Testimonials;

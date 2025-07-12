
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Partners = () => {
  const partners = [
    { name: "Welkin Vision", logo: "/welkin.png" },
    { name: "Skill Development Institute", logo: "https://static.wixstatic.com/media/a6f2f1_9f9fe3bd177741afbc1bdebe70476f44~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6f2f1_9f9fe3bd177741afbc1bdebe70476f44~mv2.jpg" },
    { name: "TeachSmart", logo: "https://static.wixstatic.com/media/a6f2f1_b8a94b52f3364dbbb01ce641d95127ef~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6f2f1_b8a94b52f3364dbbb01ce641d95127ef~mv2.jpg" },
    { name: "Hotel Propical Daisy", logo: "https://static.wixstatic.com/media/a6f2f1_c209f17412ac41d39f20d46efcb24d11~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6f2f1_c209f17412ac41d39f20d46efcb24d11~mv2.jpg" },
    { name: "Advanced Global Skills", logo: "https://static.wixstatic.com/media/a6f2f1_485854585ad94987bd14cc8ce345da18~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6f2f1_485854585ad94987bd14cc8ce345da18~mv2.jpg" },
    { name: "Global Education", logo: "https://static.wixstatic.com/media/a6f2f1_7bfc2f84b0224a419c90538488e6cb35~mv2.jpg/v1/fill/w_169,h_169,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a6f2f1_7bfc2f84b0224a419c90538488e6cb35~mv2.jpg" },
    { name: "Teach Smart", logo: "/teachsmart.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recognized by Global Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud members and collaborators of prestigious international bodies and corporations.
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
            {partners.map((partner, index) => (
              <CarouselItem key={partner.name} className="md:basis-1/3 lg:basis-1/6">
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in h-40"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-32 h-32 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-w-full max-h-full object-contain" 
                      loading="lazy"
                    />
                  </div>
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

export default Partners;

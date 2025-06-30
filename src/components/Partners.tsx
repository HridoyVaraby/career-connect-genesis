
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Partners = () => {
  const partners = [
    { name: "Welkin Vision", logo: "https://i0.wp.com/ccidbd.com/wp-content/uploads/2022/11/Shozib.png" },
    { name: "Skill Development Institute", logo: "https://i0.wp.com/ccidbd.com/wp-content/uploads/2022/11/Picture41.png" },
    { name: "TeachSmart", logo: "/teachsmart.png" },
    { name: "Hotel Propical Daisy", logo: "https://i0.wp.com/ccidbd.com/wp-content/uploads/2022/11/logo-150x150-2.png" },
    { name: "Advanced Global Skills", logo: "https://static.wixstatic.com/media/618403_e17a07fa4abc4f62bf6455950956ae08~mv2.png/v1/fill/w_251,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20small.png" },
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
              <CarouselItem key={partner.name} className="md:basis-1/3 lg:basis-1/4">
                <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in h-40"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-w-full max-h-full object-contain" 
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm text-gray-600 text-center font-medium">{partner.name}</span>
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

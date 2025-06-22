
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Farhan Rahman",
      program: "USA International Internship",
      company: "Google",
      quote: "CCID Bangladesh transformed my career completely. The internship program at Google led to my full-time offer. The support and guidance throughout the process was exceptional.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "San Francisco, USA"
    },
    {
      name: "Fatima Khan",
      program: "Study Abroad - Oxford University",
      company: "Oxford University",
      quote: "Thanks to CCID's comprehensive support, my dream of studying at Oxford became reality. The application guidance and visa support were flawless.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "Oxford, UK"
    },
    {
      name: "Mohammad Hassan",
      program: "Professional Immersion - Canada",
      company: "Microsoft",
      quote: "The program opened doors I never thought possible. Working at Microsoft through CCID's program was a life-changing experience that accelerated my career.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "Toronto, Canada"
    },
    {
      name: "Rashida Ahmed",
      program: "Virtual Internship - Germany",
      company: "SAP",
      quote: "Even during the pandemic, CCID helped me gain international experience with SAP. The virtual program was incredibly well-structured and valuable.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "Berlin, Germany"
    },
    {
      name: "Ahmed Ali",
      program: "Hotel Immersion - UAE",
      company: "Marriott International",
      quote: "The hospitality training in Dubai completely transformed my understanding of the industry. Now I'm leading a team at Marriott International.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "Dubai, UAE"
    },
    {
      name: "Nusrat Jahan",
      program: "Pathway Program - Australia",
      company: "University of Melbourne",
      quote: "CCID's pathway program made my transition to studying in Australia seamless. The pre-departure orientation was incredibly helpful.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      location: "Melbourne, Australia"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            📢 Success Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real stories from students who transformed their careers through CCID programs and are now leading successful careers worldwide.
          </p>
        </div>
        
        <Carousel className="max-w-7xl mx-auto">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden group">
                  <CardContent className="p-8 h-full flex flex-col">
                    {/* Header with Avatar and Info */}
                    <div className="flex items-start mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-1">{testimonial.name}</h3>
                        <p className="text-primary font-semibold text-sm mb-1">{testimonial.program}</p>
                        <p className="text-gray-600 text-sm mb-2">{testimonial.company}</p>
                        <div className="flex items-center">
                          <div className="flex space-x-1 mr-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-sm">⭐</span>
                            ))}
                          </div>
                          <span className="text-gray-500 text-xs">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <div className="flex-1">
                      <div className="text-6xl text-primary/20 font-serif leading-none">"</div>
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed -mt-4 mb-4">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    
                    {/* Bottom Decoration */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="bg-white border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-white" />
        </Carousel>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-6">Join our community of global achievers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Share Your Story
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

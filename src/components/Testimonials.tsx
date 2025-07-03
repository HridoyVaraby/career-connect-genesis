
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Farhan Rahman",
      program: "USA International Internship",
      company: "Google",
      quote: "CCID Bangladesh transformed my career completely. The internship program at Google led to my full-time offer. The support and guidance throughout the process was exceptional.",
      image: "/image81.webp",
      rating: 5,
      location: "San Francisco, USA"
    },
    {
      name: "Farhana Khan",
      program: "Study Abroad - Oxford University",
      company: "Oxford University",
      quote: "Thanks to CCID's comprehensive support, my dream of studying at Oxford became reality. The application guidance and visa support were flawless.",
      image: "/image82.webp",
      rating: 5,
      location: "Oxford, UK"
    },
    {
      name: "Mohammad Hassan",
      program: "Professional Immersion - Canada",
      company: "Microsoft",
      quote: "The program opened doors I never thought possible. Working at Microsoft through CCID's program was a life-changing experience that accelerated my career.",
      image: "/image83.webp",
      rating: 5,
      location: "Toronto, Canada"
    },
    {
      name: "Rashida Ahmed",
      program: "Virtual Internship - Germany",
      company: "SAP",
      quote: "Even during the pandemic, CCID helped me gain international experience with SAP. The virtual program was incredibly well-structured and valuable.",
      image: "/image84.webp",
      rating: 5,
      location: "Berlin, Germany"
    },
    {
      name: "Ahmed Ali",
      program: "Hotel Immersion - UAE",
      company: "Marriott International",
      quote: "The hospitality training in Dubai completely transformed my understanding of the industry. Now I'm leading a team at Marriott International.",
      image: "/image85.webp",
      rating: 5,
      location: "Dubai, UAE"
    },
    {
      name: "Nishat Zaman",
      program: "Pathway Program - Australia",
      company: "University of Melbourne",
      quote: "CCID's pathway program made my transition to studying in Australia seamless. The pre-departure orientation was incredibly helpful.",
      image: "/image86.webp",
      rating: 5,
      location: "Melbourne, Australia"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Achievers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real stories from students who transformed their careers through CCID programs and are now leading successful careers worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="h-full bg-white hover:shadow-lg transition-all duration-300 border border-gray-200">
              <CardContent className="p-8 h-full flex flex-col">
                {/* Header with Avatar and Info */}
                <div className="flex items-start mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
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
                  <div className="text-6xl text-gray-200 font-serif leading-none">"</div>
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed -mt-4 mb-4">
                    {testimonial.quote}
                  </blockquote>
                </div>
                
                {/* Bottom Line */}
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

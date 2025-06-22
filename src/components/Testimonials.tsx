
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Fatima Rahman",
      program: "Study Abroad - UK",
      image: "/api/placeholder/100/100",
      quote: "CCID Bangladesh made my dream of studying at Oxford a reality. Their guidance was invaluable throughout the entire process."
    },
    {
      name: "Mohammad Hassan",
      program: "International Internship - USA",
      image: "/api/placeholder/100/100",
      quote: "The internship program opened doors I never thought possible. I'm now working full-time at a Fortune 500 company."
    },
    {
      name: "Rashida Khan",
      program: "Virtual Internship - Canada",
      image: "/api/placeholder/100/100",
      quote: "Even during the pandemic, CCID helped me gain international experience through their virtual internship program."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers through our programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="bg-white hover:shadow-lg transition-shadow animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
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
                <blockquote className="text-gray-600 italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

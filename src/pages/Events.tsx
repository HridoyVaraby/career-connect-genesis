
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      title: "Study Abroad Fair 2024",
      date: "March 15, 2024",
      location: "Dhaka Convention Center",
      description: "Meet representatives from 50+ international universities and explore study abroad opportunities.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    },
    {
      title: "Virtual Career Summit",
      date: "April 20, 2024",
      location: "Online Event",
      description: "Connect with global employers and learn about international career opportunities.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846"
    },
    {
      title: "Scholarship Workshop",
      date: "May 10, 2024",
      location: "CCID Office",
      description: "Learn how to secure scholarships for international education programs.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Events & Updates
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with our latest events, workshops, and program announcements.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.title} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gray-200 bg-cover bg-center" 
                     style={{backgroundImage: `url(${event.image})`}}>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="text-primary font-semibold">{event.date}</div>
                  <div className="text-gray-500 text-sm">{event.location}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {event.description}
                  </CardDescription>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
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

export default Events;

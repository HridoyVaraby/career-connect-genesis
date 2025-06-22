
import { Button } from "@/components/ui/button";

const HotelImmersion = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hotel Immersion
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized hospitality training programs with leading hotels and resorts worldwide.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelImmersion;

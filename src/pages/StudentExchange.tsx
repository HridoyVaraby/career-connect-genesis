
import { Button } from "@/components/ui/button";

const StudentExchange = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Student Exchange
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience different cultures and educational systems through our student exchange programs.
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

export default StudentExchange;

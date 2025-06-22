
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VirtualInternship = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Virtual Internship Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Gain valuable international work experience from Bangladesh through our innovative virtual internship programs.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Remote Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work with international companies while staying in Bangladesh, gaining global work experience.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Participate in internships that accommodate your academic schedule and time zone.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Industry Exposure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gain exposure to various industries including tech, finance, marketing, and consulting.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualInternship;

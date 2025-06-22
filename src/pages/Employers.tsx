
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Employers = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Solutions for Employers
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Partner with us to access top talent and develop your workforce through our comprehensive employer programs.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Talent Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to a pool of qualified candidates and streamlined recruitment processes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Customized training programs to upskill your existing workforce.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Consultation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  HR and workforce development consultation to optimize your human resources.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;

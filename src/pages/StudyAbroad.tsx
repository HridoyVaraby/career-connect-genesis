
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StudyAbroad = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Study Abroad Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access world-renowned universities and transform your academic journey through our comprehensive study abroad programs.
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
                <CardTitle>University Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to 100+ partner universities across the globe with guaranteed admission pathways.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scholarship Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive scholarship guidance and application support to reduce your financial burden.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Visa Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Complete visa application support with 95% success rate for student visa approvals.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;

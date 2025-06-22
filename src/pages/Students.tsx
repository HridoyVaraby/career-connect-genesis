
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Students = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Programs for Students
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive career development and skill-building programs designed for Bangladeshi students.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Career Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  One-on-one career guidance and planning sessions with industry experts.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Technical and soft skills training programs aligned with industry requirements.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Local Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Internship opportunities with leading Bangladeshi companies and organizations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;

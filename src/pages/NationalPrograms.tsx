
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NationalPrograms = () => {
  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              National Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Supporting both students and employers in Bangladesh with comprehensive career development programs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🎓</div>
                <CardTitle className="text-2xl">For Students</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-lg">
                  Career development, skill building, and local internship opportunities for Bangladeshi students.
                </CardDescription>
                <Link to="/national-programs/students">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <CardTitle className="text-2xl">For Employers</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-6 text-lg">
                  Talent acquisition, training programs, and workforce development solutions for Bangladeshi companies.
                </CardDescription>
                <Link to="/national-programs/employers">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalPrograms;

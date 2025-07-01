
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NationalProgramsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            National Initiatives for Local Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students through expert-driven, industry-aligned programs designed to drive focused outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <div className="w-full h-32 mx-auto mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src="https://i0.wp.com/wp.ccidbd.com/wp-content/uploads/2022/11/Picture12.png" 
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">For Students</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg mb-6">
                Local internships, seminars, and guidance for early career development
              </CardDescription>
              <Link to="/national-programs/students">
                <Button className="bg-primary hover:bg-primary/90">
                  Explore Student Programs
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow text-center">
            <CardHeader>
              <div className="w-full h-32 mx-auto mb-6 overflow-hidden rounded-lg shadow-sm">
                <img 
                  src="https://i0.wp.com/wp.ccidbd.com/wp-content/uploads/2023/01/Image-7.png" 
                  alt="Business professionals in meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-2xl">For Employers</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg mb-6">
                Talent acquisition, campus talks, and HR development solutions
              </CardDescription>
              <Link to="/national-programs/employers">
                <Button className="bg-secondary hover:bg-secondary/90">
                  Explore Employer Solutions
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/national-programs">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              View National Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NationalProgramsSection;

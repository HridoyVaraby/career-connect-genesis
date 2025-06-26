
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Calendar, MapPin, DollarSign, Briefcase, Users, Award, FileText, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface Program {
  title: string;
  description: string;
  duration: string;
  positions: string;
  stipend: string;
  location: string;
  image?: string;
}

interface EligibilityGroup {
  title: string;
  requirements: string[];
}

interface DestinationData {
  country: string;
  flag: string;
  subheadline: string;
  overview: string[];
  heroImage?: string;
  programs: Program[];
  eligibility: EligibilityGroup[];
  documents: {
    required: string[];
    programSpecific: string[];
    visa: string[];
  };
  benefits: string[];
  included: string[];
  notIncluded: string[];
  testimonials?: {
    quote: string;
    author: string;
    program: string;
    year: string;
  }[];
}

interface DestinationTemplateProps {
  data: DestinationData;
}

const DestinationTemplate = ({ data }: DestinationTemplateProps) => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              {data.flag} Destination
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {data.country}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              {data.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/destinations">
                <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                  View Other Destinations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Overview
            </h2>
            <div className="space-y-6">
              {data.overview.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available Programs
            </h2>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {data.programs.map((program, index) => (
              <Card key={program.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="md:flex">
                  <div className="md:w-1/3 p-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg h-48 flex items-center justify-center">
                      <Briefcase className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Duration</p>
                          <p className="text-sm text-gray-600">{program.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Positions</p>
                          <p className="text-sm text-gray-600">{program.positions}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Stipend</p>
                          <p className="text-sm text-gray-600">{program.stipend}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-semibold text-sm">Location</p>
                          <p className="text-sm text-gray-600">{program.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eligibility Requirements
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.eligibility.map((group, index) => (
              <Card key={group.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span>{group.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {group.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Required Documents
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-primary" />
                  <span>Required for All</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {data.documents.required.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-secondary" />
                  <span>Program-Specific</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {data.documents.programSpecific.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span>Visa Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {data.documents.visa.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Program Benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions/Exclusions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What's Included & Not Included
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="included" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="included">What's Included</TabsTrigger>
                <TabsTrigger value="not-included">Not Included</TabsTrigger>
              </TabsList>
              <TabsContent value="included" className="mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      {data.included.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="not-included" className="mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid gap-4">
                      {data.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-red-300 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Our Students Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {data.testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{data.flag}</div>
                      <div>
                        <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">— {testimonial.author}</p>
                          <p className="text-gray-600">{testimonial.program} ({testimonial.year})</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              {data.flag} Ready to Start Your Journey?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Launch Your Global Career from
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {data.country}?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Apply now to kickstart your international career through CCID's expert placement and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Talk to an Advisor
                </Button>
              </Link>
              <Link to="/destinations">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Explore More Countries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationTemplate;

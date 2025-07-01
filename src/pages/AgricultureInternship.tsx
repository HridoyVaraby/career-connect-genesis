
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, Sprout, Globe, FileText, Phone, Mail } from "lucide-react";

const AgricultureInternship = () => {
  const highlights = [
    "Contract: 1 year (extendable) with monthly allowance",
    "Duration: 18 months with 5 weeks of paid holidays",
    "Stipend: €1600 – €2130/month + overtime",
    "Housing: €200 – €250/month",
    "Language Requirement: IELTS A2 Level or Higher",
    "Job Activities: Livestock feeding, herd management, farm maintenance, crop support, data logging, and farm tech operation"
  ];

  const internshipFields = [
    "Organic Farming",
    "Livestock Management", 
    "Horticulture & Greenhouse Agriculture",
    "Agri-Tech and Smart Farming",
    "Dairy and Poultry Management",
    "Farm Logistics & Processing",
    "Sustainable Resource Use"
  ];

  const eligibilityRequirements = [
    "Aged 18–35",
    "Background in agriculture or animal science (academic or work)",
    "Good physical health and outdoor work readiness",
    "Basic English (IELTS A2 or equivalent)",
    "Valid passport (min. 2 years)",
    "Strong motivation to learn and adapt to new cultures"
  ];

  const requiredDocuments = [
    "Resume with photo",
    "Academic documents (transcript, diploma, or certificate)",
    "Motivation letter",
    "Passport copy",
    "Police clearance",
    "IELTS result (if available)",
    "Medical clearance",
    "Proof of funds or financial sponsor",
    "Any agricultural experience letters or photos"
  ];

  const benefits = [
    "Monthly paid internship",
    "Exposure to European farming models",
    "Work with animals and cutting-edge farm tools",
    "Accommodation assistance",
    "Visa & travel guidance",
    "Cultural experience & language exposure",
    "Completion certificate & potential job pathway"
  ];

  const exclusions = [
    "Flight costs",
    "Visa application and embassy fees",
    "Personal daily expenses",
    "Insurance (unless covered by host)",
    "Local commuting (if not included in placement)"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&h=800&fit=crop" 
            alt="Agriculture background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Sprout className="w-5 h-5" />
              <span>Agriculture Internship Program</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hands-On Global Farming Experience for Future Agri-Leaders
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Build a meaningful international career in agriculture through immersive, skill-building internships with farms, greenhouses, and agribusinesses across Europe, the Americas, and Oceania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply/agriculture-internship">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-bold rounded-lg">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-bold rounded-lg">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900">Program Overview</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              The Agriculture Internship Program by CCID Bangladesh is designed for students and young professionals who want to build a meaningful international career in agriculture. This program offers access to immersive, skill-building internships with farms, greenhouses, and agribusinesses across Europe, the Americas, and Oceania.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Participants gain real-life experience in modern, sustainable farming practices, livestock management, and agri-tech operations while building global connections in the agri sector.
            </p>
          </div>
        </div>
      </section>

      {/* Denmark Agriculture Internship */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-4">
                <img src="https://flagcdn.com/w40/dk.png" alt="Denmark flag" className="w-6 h-4 rounded" />
                <span>Denmark Agriculture Internship</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Danish Livestock Traineeship Program</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This is the flagship offering under the Agriculture Internship umbrella. It places participants on modern Danish farms to gain in-depth, real-world experience in livestock and agricultural operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop" 
                  alt="Danish farm"
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span>Program Highlights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 mt-6 p-4 bg-gray-50 rounded-lg">
                    This program offers exposure to world-leading Danish agricultural standards, sustainability models, and farm technologies in a supportive and structured environment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Fields */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Internship Fields Covered</h2>
              <p className="text-lg text-gray-600">
                Gain expertise across diverse agricultural specializations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internshipFields.map((field, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Sprout className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">{field}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Eligibility Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <span>Eligibility Requirements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {eligibilityRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <span>Required Documents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requiredDocuments.map((document, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Exclusions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Program Benefits */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-700">
                    <CheckCircle className="w-6 h-6" />
                    <span>Program Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Exclusions */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-700">
                    <XCircle className="w-6 h-6" />
                    <span>Exclusions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-green-600 via-primary to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🌱 Ready to Begin Your Agriculture Journey Abroad?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your Global Agriculture Career
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              The Denmark Agriculture Internship is your chance to work with expert farmers, boost your global experience, and grow your career from the ground up.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link to="/apply/agriculture-internship">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🔗 Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📞 Book Free Consultation
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>agsfilinquiry@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgricultureInternship;

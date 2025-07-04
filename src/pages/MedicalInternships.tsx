
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Globe, Heart, Users, Award, CheckCircle, X } from "lucide-react";

const MedicalInternships = () => {
  const destinations = [
    "Greece", "Argentina", "Mexico", "Peru", "Jamaica", 
    "Cambodia", "Mongolia", "Nepal", "Sri Lanka", 
    "Ghana", "Kenya", "Tanzania"
  ];

  const activities = [
    "Shadow medical professionals in hospitals, clinics, and rural health centers",
    "Learn about international healthcare practices and systems",
    "Gain exposure to general medicine, pediatrics, gynecology, dentistry, and surgery (depending on location)",
    "Develop basic skills such as vital signs monitoring, first aid, blood pressure and sugar level checks",
    "Participate in public health education, hygiene campaigns, and vaccination drives",
    "Assist with non-clinical administrative and support tasks when appropriate"
  ];

  const eligibilityRequirements = [
    "Age 18+",
    "Background in biology, health sciences, medicine, or nursing (preferred)",
    "Intermediate English communication",
    "Strong motivation to learn and serve",
    "Willingness to adapt to basic or under-resourced settings",
    "Valid passport",
    "Medical clearance and travel readiness"
  ];

  const requiredDocuments = [
    "Updated resume/CV",
    "Letter of motivation",
    "Academic transcript (if available)",
    "Passport copy",
    "Police clearance",
    "Medical fitness certificate",
    "Proof of funds (if visa required)",
    "Emergency contact information"
  ];

  const benefits = [
    "Real-life clinical observation and training",
    "Hands-on community health work",
    "Cross-cultural immersion",
    "Flexible durations (2–12 weeks)",
    "Certificate of completion",
    "Career recommendation (on request)",
    "Enhanced global awareness and empathy",
    "Boosted medical school or job application profile"
  ];

  const inclusions = [
    "Placement at a local hospital/clinic",
    "Orientation and support",
    "Accommodation (varies by country)",
    "Local team access",
    "Pre-departure guidance",
    "Cultural activities (in some destinations)"
  ];

  const exclusions = [
    "Flights and visa",
    "Insurance",
    "Meals (unless included at placement)",
    "Local transport",
    "Personal expenses"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/medical-internships-hero.jpg" 
            alt="Medical Internships Abroad" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-white/80 to-blue-50/80"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              🩺 Medical Internships Abroad
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Medical Internships Abroad
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              Global Health Experience. Clinical Insight. Career Impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Link to="/apply/medical-internships">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                  Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🩺 Program Overview</h2>
            </div>
            <div>
              <img 
                src="/84770.webp"
                alt="International university campus"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="pt-10 prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                The Medical Internships Abroad program is an immersive opportunity for students and aspiring healthcare professionals to gain practical, international clinical experience while making a meaningful impact in underserved communities around the world. Participants will shadow doctors and nurses, assist in clinics and hospitals, and participate in public health outreach projects—strengthening both their skills and global perspective.
              </p>
              <p className="text-lg leading-relaxed">
                This program helps you explore your passion for medicine, build confidence, and boost your medical school or residency applications with real-world, cross-cultural healthcare experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🌐 Internship Destinations</h2>
              <p className="text-lg text-gray-600">
                Participants can choose to intern in any of the following countries:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <Card key={destination} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">{destination}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto">
              Each location offers a unique cultural, clinical, and community health landscape—providing interns with diverse perspectives on global health systems.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">💉 What You'll Do</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🎯 Who Should Apply?</h2>
              <p className="text-lg text-gray-600 mb-8">This program is ideal for:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Pre-med, nursing, and public health students</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Medical and dental school applicants</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Healthcare graduates seeking international experience</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Anyone looking to explore medical careers in a real-world context</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Eligibility Requirements */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Eligibility Requirements</h2>
                <div className="space-y-4">
                  {eligibilityRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">🗃 Required Documents</h2>
                <div className="space-y-4">
                  {requiredDocuments.map((document, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{document}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">✅ Program Benefits</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions and Exclusions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Inclusions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">💸 Inclusions</h2>
                <div className="space-y-4">
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{inclusion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">❌ Exclusions</h2>
                <div className="space-y-4">
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-600">{exclusion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">🎓 Why Choose This Program?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Explore global healthcare systems</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Learn from skilled international professionals</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Serve in high-need communities</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Grow your clinical and interpersonal skills</h3>
                </CardContent>
              </Card>
              <Card className="text-center md:col-span-2 lg:col-span-2">
                <CardContent className="p-6">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Stand out in future applications with global medical experience</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
              🩺 Global Health Awaits
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Step Into
              <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Global Health?
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Start your international medical journey today and make a difference in communities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/apply/medical-internships">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  🩺 Apply Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-green-600 px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  📞 Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalInternships;

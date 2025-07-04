import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Clock, MapPin, Stethoscope } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";

const MedicalInternshipsApply = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/medical-internships-hero.jpg" 
            alt="Medical Internships Program" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-6">
            <Link to="/apply">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <Stethoscope className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for Medical Internships Abroad
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Global health experience with clinical insight and career impact through international medical internships.
            </p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Program Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">2-12 weeks</p>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Locations</h3>
                <p className="text-gray-600">12+ Countries</p>
              </div>
              <div className="text-center p-6 bg-primary/5 rounded-lg">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600">Life-Changing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ApplicationForm 
            programTitle="Medical Internships Abroad"
            programDescription="Global health experience with clinical insight and career impact through international medical internships."
          />
        </div>
      </section>
    </div>
  );
};

export default MedicalInternshipsApply;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Clock, MapPin, BookOpen } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";

const StudyAbroadApply = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4">
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
              <Briefcase className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for Study Abroad Program
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Full-time academic opportunities at internationally recognized universities, with options to work part-time and gain global certification.
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
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">6-24 months</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Universities</h3>
                <p className="text-gray-600">Top Ranked Global</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <BookOpen className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Study + Work</h3>
                <p className="text-gray-600">Part-time Work Allowed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ApplicationForm 
            programTitle="Study Abroad Program"
            programDescription="Full-time academic opportunities at internationally recognized universities, with options to work part-time and gain global certification."
          />
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadApply;


import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Globe, Clock, MapPin, GraduationCap } from "lucide-react";
import React, { useState, useEffect } from "react";

const InternationalInternshipApply = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Function to check if viewport is mobile size
    const checkIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
              <Globe className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for International Internship Program
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Gain hands-on experience in world-class hotels, resorts, and companies abroad across hospitality, business, culinary, and more.
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
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-600">3-24 months</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Destinations</h3>
                <p className="text-gray-600">20+ Countries</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Certificate</h3>
                <p className="text-gray-600">Global Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
                International Internship Application Form
              </h2>
              <p className="text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '200ms' }}>
                Please wait for the application to load.
              </p>
            </div>

            <Card className="p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="relative">
                {/* Loading indicator */}
                <div id="formLoadingIndicator" className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
                
                {/* WordPress Form Iframe */}
                <div className="w-full overflow-hidden">
                  <iframe 
                    src="https://wp.ccidbd.com/international-internship-form/" 
                    title="International Internship Application Form"
                    className="w-full border-0" 
                    style={{ 
                      minHeight: isMobile ? '6200px' : '6000px'
                    }} 
                    frameBorder="0"
                    scrolling="no"
                    onLoad={() => {
                      const loadingIndicator = document.getElementById('formLoadingIndicator');
                      if (loadingIndicator) loadingIndicator.style.display = 'none';
                    }}
                  ></iframe>
                </div>
                
                {/* Fallback message */}
                <div className="text-center mt-4 text-gray-600">
                  <p>If the form doesn't load, <a href="https://wp.ccidbd.com/international-internship-form/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">click here to open it in a new tab</a></p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalInternshipApply;


import { Link } from "react-router-dom";
import { Mail, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.webp" 
                alt="CCID Bangladesh" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Connecting Bangladeshi students with global career and internship opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Global Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Global Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/global-programs/study-abroad" className="text-gray-400 hover:text-white transition-colors">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link to="/global-programs/virtual-internship" className="text-gray-400 hover:text-white transition-colors">
                  Virtual Internship
                </Link>
              </li>
              <li>
                <Link to="/global-programs/international-internship" className="text-gray-400 hover:text-white transition-colors">
                  International Internship
                </Link>
              </li>
              <li>
                <Link to="/global-programs/student-exchange" className="text-gray-400 hover:text-white transition-colors">
                  Student Exchange
                </Link>
              </li>
            </ul>
          </div>

          {/* National Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">National Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/national-programs/students" className="text-gray-400 hover:text-white transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link to="/national-programs/employers" className="text-gray-400 hover:text-white transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Dhaka, Bangladesh</p>
              <p>contact@ccidbangladesh.com</p>
              <p>+880 1234 567890</p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CCID Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

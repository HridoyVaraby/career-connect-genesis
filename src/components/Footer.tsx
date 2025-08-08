
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";


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
              CCID connects students with global study and internship opportunities, helping them unlock their full potential and build successful international careers.
            </p>
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <div className="flex space-x-4">
              <a href="mailto:ccid@ccidbd.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ccid_bangladesh_ltd/" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/CCIDBangladesh" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/ccid-bangladesh/" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
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
              <p><span className="font-semibold">BD Office: </span>Mohakhali DOHS, Dhaka</p>
              <p><span className="font-semibold">Phone: </span>+88 01723 234301</p>
              <p><span className="font-semibold">UK Office: </span>Unit-331, Stratford Workshops. Burford Rd, London E15 2SP</p>
              <p><span className="font-semibold">Phone: </span>+447551960006</p>
              <p><span className="font-semibold">Email: </span>ccid@ccidbd.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 - {new Date().getFullYear()} CCID Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

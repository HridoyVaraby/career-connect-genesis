
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const globalProgramsItems = [
    { name: "Study Abroad", path: "/global-programs/study-abroad" },
    { name: "Virtual Internship Programs", path: "/global-programs/virtual-internship" },
    { name: "International Internship", path: "/global-programs/international-internship" },
    { name: "Pathway Program", path: "/global-programs/pathway-program" },
    { name: "Student Exchange", path: "/global-programs/student-exchange" },
    { name: "Professional Immersion", path: "/global-programs/professional-immersion" },
    { name: "Hotel Immersion", path: "/global-programs/hotel-immersion" },
  ];

  const nationalProgramsItems = [
    { name: "Students", path: "/national-programs/students" },
    { name: "Employers", path: "/national-programs/employers" },
  ];

  const destinationItems = [
    { name: "USA", path: "/destinations/usa", flag: "🇺🇸" },
    { name: "France", path: "/destinations/france", flag: "🇫🇷" },
    { name: "Italy", path: "/destinations/italy", flag: "🇮🇹" },
    { name: "Spain", path: "/destinations/spain", flag: "🇪🇸" },
    { name: "Portugal", path: "/destinations/portugal", flag: "🇵🇹" },
    { name: "United Kingdom", path: "/destinations/united-kingdom", flag: "🇬🇧" },
    { name: "Netherlands", path: "/destinations/netherlands", flag: "🇳🇱" },
    { name: "New Zealand", path: "/destinations/new-zealand", flag: "🇳🇿" },
    { name: "Czech Republic", path: "/destinations/czech-republic", flag: "🇨🇿" },
    { name: "Croatia", path: "/destinations/croatia", flag: "🇭🇷" },
    { name: "Montenegro", path: "/destinations/montenegro", flag: "🇲🇪" },
    { name: "Malta", path: "/destinations/malta", flag: "🇲🇹" },
    { name: "Greece", path: "/destinations/greece", flag: "🇬🇷" },
    { name: "Thailand", path: "/destinations/thailand", flag: "🇹🇭" },
    { name: "Vietnam", path: "/destinations/vietnam", flag: "🇻🇳" },
    { name: "Indonesia", path: "/destinations/indonesia", flag: "🇮🇩" },
    { name: "Malaysia", path: "/destinations/malaysia", flag: "🇲🇾" },
    { name: "Hong Kong", path: "/destinations/hong-kong", flag: "🇭🇰" },
    { name: "UAE", path: "/destinations/uae", flag: "🇦🇪" },
    { name: "Bahrain", path: "/destinations/bahrain", flag: "🇧🇭" },
  ];

  // Split destinations into 4 columns for mega menu
  const getDestinationColumns = () => {
    const itemsPerColumn = Math.ceil(destinationItems.length / 4);
    const columns = [];
    for (let i = 0; i < 4; i++) {
      columns.push(destinationItems.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return columns;
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.webp" 
              alt="CCID Bangladesh" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary font-medium" : ""
              }`}
            >
              Home
            </Link>

            {/* Global Programs Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors ${
                  location.pathname.startsWith("/global-programs") ? "text-primary font-medium" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("global")}
              >
                <span>Global Programs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border transition-all duration-200 ${
                  activeDropdown === "global" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    to="/global-programs"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    Overview
                  </Link>
                  {globalProgramsItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Destinations Mega Menu */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors ${
                  location.pathname.startsWith("/destinations") ? "text-primary font-medium" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("destinations")}
              >
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border transition-all duration-200 z-50 ${
                  activeDropdown === "destinations" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="p-6 w-[800px]">
                  {/* Header */}
                  <div className="mb-4 pb-4 border-b">
                    <Link
                      to="/destinations"
                      className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
                    >
                      All Destinations
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">Choose your next adventure</p>
                  </div>
                  
                  {/* 4-Column Grid */}
                  <div className="grid grid-cols-4 gap-6">
                    {getDestinationColumns().map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-2">
                        {column.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 hover:text-primary transition-colors group"
                          >
                            <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                              {item.flag}
                            </span>
                            <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* National Programs Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors ${
                  location.pathname.startsWith("/national-programs") ? "text-primary font-medium" : ""
                }`}
                onMouseEnter={() => setActiveDropdown("national")}
              >
                <span>National Programs</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border transition-all duration-200 ${
                  activeDropdown === "national" ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    to="/national-programs"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                  >
                    Overview
                  </Link>
                  {nationalProgramsItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className={`text-gray-700 hover:text-primary transition-colors ${
                location.pathname === "/services" ? "text-primary font-medium" : ""
              }`}
            >
              Services
            </Link>

            <Link
              to="/events"
              className={`text-gray-700 hover:text-primary transition-colors ${
                location.pathname === "/events" ? "text-primary font-medium" : ""
              }`}
            >
              Events
            </Link>

            <Link
              to="/contact"
              className={`text-gray-700 hover:text-primary transition-colors ${
                location.pathname === "/contact" ? "text-primary font-medium" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/global-programs"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Global Programs
              </Link>
              <Link
                to="/destinations"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                to="/national-programs"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                National Programs
              </Link>
              <Link
                to="/services"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/events"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

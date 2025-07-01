
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
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
    { name: "Agriculture Internship Program", path: "/global-programs/agriculture-internship" },
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
    { name: "USA", path: "/destinations/usa", countryCode: "us" },
    { name: "France", path: "/destinations/france", countryCode: "fr" },
    { name: "Italy", path: "/destinations/italy", countryCode: "it" },
    { name: "Spain", path: "/destinations/spain", countryCode: "es" },
    { name: "Portugal", path: "/destinations/portugal", countryCode: "pt" },
    { name: "United Kingdom", path: "/destinations/united-kingdom", countryCode: "gb" },
    { name: "Netherlands", path: "/destinations/netherlands", countryCode: "nl" },
    { name: "New Zealand", path: "/destinations/new-zealand", countryCode: "nz" },
    { name: "Czech Republic", path: "/destinations/czech-republic", countryCode: "cz" },
    { name: "Croatia", path: "/destinations/croatia", countryCode: "hr" },
    { name: "Montenegro", path: "/destinations/montenegro", countryCode: "me" },
    { name: "Malta", path: "/destinations/malta", countryCode: "mt" },
    { name: "Greece", path: "/destinations/greece", countryCode: "gr" },
    { name: "Thailand", path: "/destinations/thailand", countryCode: "th" },
    { name: "Vietnam", path: "/destinations/vietnam", countryCode: "vn" },
    { name: "Indonesia", path: "/destinations/indonesia", countryCode: "id" },
    { name: "Malaysia", path: "/destinations/malaysia", countryCode: "my" },
    { name: "Hong Kong", path: "/destinations/hong-kong", countryCode: "hk" },
    { name: "UAE", path: "/destinations/uae", countryCode: "ae" },
    { name: "Bahrain", path: "/destinations/bahrain", countryCode: "bh" },
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

  const handleMobileSubmenuToggle = (submenu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === submenu ? null : submenu);
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
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50 transition-all duration-200 ${
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
                            <div className="w-6 h-4 flex-shrink-0 overflow-hidden rounded shadow-sm">
                              <img 
                                src={`https://flagcdn.com/w40/${item.countryCode}.png`}
                                alt={`${item.name} flag`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
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
                className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50 transition-all duration-200 ${
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
              to="/blog"
              className={`text-gray-700 hover:text-primary transition-colors ${
                location.pathname.startsWith("/blog") ? "text-primary font-medium" : ""
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
            <Link to="/apply">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                Apply Now
              </Button>
            </Link>
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
          <div className="lg:hidden py-4 border-t bg-white">
            <div className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Global Programs Mobile Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => handleMobileSubmenuToggle("global")}
                >
                  <span>Global Programs</span>
                  {activeMobileSubmenu === "global" ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
                {activeMobileSubmenu === "global" && (
                  <div className="ml-4 space-y-2 mt-2">
                    <Link
                      to="/global-programs"
                      className="block py-1 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    {globalProgramsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-1 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Destinations Mobile Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => handleMobileSubmenuToggle("destinations")}
                >
                  <span>Destinations</span>
                  {activeMobileSubmenu === "destinations" ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
                {activeMobileSubmenu === "destinations" && (
                  <div className="ml-4 space-y-2 mt-2 max-h-48 overflow-y-auto">
                    <Link
                      to="/destinations"
                      className="block py-1 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Destinations
                    </Link>
                    {destinationItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center space-x-2 py-1 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="w-4 h-3 flex-shrink-0 overflow-hidden rounded shadow-sm">
                          <img 
                            src={`https://flagcdn.com/w40/${item.countryCode}.png`}
                            alt={`${item.name} flag`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* National Programs Mobile Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => handleMobileSubmenuToggle("national")}
                >
                  <span>National Programs</span>
                  {activeMobileSubmenu === "national" ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
                {activeMobileSubmenu === "national" && (
                  <div className="ml-4 space-y-2 mt-2">
                    <Link
                      to="/national-programs"
                      className="block py-1 text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Overview
                    </Link>
                    {nationalProgramsItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block py-1 text-gray-600 hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/blog"
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
              <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-white">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


const DestinationsSection = () => {
  // Helper function to get flag image URL from country code
  const getFlagImageUrl = (countryCode: string) => {
    // Convert country code to lowercase for the API
    const code = countryCode.toLowerCase();
    // Using flagcdn.com for flag images
    return `https://flagcdn.com/w80/${code}.png`;
  };

  // Destinations organized by region with country codes for flag images
  const regions = [
    {
      name: "USA",
      emoji: "🌎",
      destinations: [
        { name: "USA (J1 Internship)", countryCode: "us" },
        { name: "USA (J1 Traineeship)", countryCode: "us" }
      ]
    },
    {
      name: "EUROPE",
      emoji: "🌍",
      destinations: [
        { name: "France", countryCode: "fr" },
        { name: "Italy", countryCode: "it" },
        { name: "Spain", countryCode: "es" },
        { name: "Portugal", countryCode: "pt" },
        { name: "United Kingdom", countryCode: "gb" },
        { name: "Ireland", countryCode: "ie" },
        { name: "Netherlands", countryCode: "nl" },
        { name: "New Zealand", countryCode: "nz" },
        { name: "Czech Republic", countryCode: "cz" },
        { name: "Croatia", countryCode: "hr" },
        { name: "Montenegro", countryCode: "me" },
        { name: "Malta", countryCode: "mt" },
        { name: "Greece", countryCode: "gr" }
      ]
    },
    {
      name: "ASIA & MIDDLE EAST",
      emoji: "🌏",
      destinations: [
        { name: "Thailand", countryCode: "th" },
        { name: "Vietnam", countryCode: "vn" },
        { name: "Indonesia", countryCode: "id" },
        { name: "Malaysia", countryCode: "my" },
        { name: "Hong Kong", countryCode: "hk" },
        { name: "United Arab Emirates (UAE)", countryCode: "ae" },
        { name: "Bahrain", countryCode: "bh" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            International Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our Global Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover where your CCID journey can take you—beyond borders, into opportunity.
          </p>
        </div>
        
        <div className="space-y-16">
          {regions.map((region, regionIndex) => (
            <div key={region.name} className="animate-fade-in" style={{ animationDelay: `${regionIndex * 200}ms` }}>
              <div className="flex items-center mb-8">
                <div className="text-3xl mr-3">{region.emoji}</div>
                <h3 className="text-3xl font-bold text-gray-800">{region.name}</h3>
                <div className="ml-4 flex-grow h-px bg-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {region.destinations.map((destination, index) => (
                  <div 
                    key={`${region.name}-${destination.name}`}
                    className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in bg-white"
                    style={{ animationDelay: `${(regionIndex * 200) + (index * 100)}ms` }}
                  >
                    {/* Card background with subtle pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-90"></div>
                    
                    {/* Card content */}
                    <div className="relative p-6 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-16 h-12 overflow-hidden rounded shadow-sm">
                            <img 
                              src={getFlagImageUrl(destination.countryCode)} 
                              alt={`${destination.name} flag`} 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {destination.name}
                        </h4>
                      </div>
                      
                      {/* Hover effect line */}
                      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

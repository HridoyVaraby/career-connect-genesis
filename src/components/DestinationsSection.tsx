
const DestinationsSection = () => {
  const destinations = [
    { country: "USA", flag: "🇺🇸", focus: "Tech & Innovation" },
    { country: "UAE", flag: "🇦🇪", focus: "Business & Hospitality" },
    { country: "France", flag: "🇫🇷", focus: "Culinary & Arts" },
    { country: "New Zealand", flag: "🇳🇿", focus: "Agriculture & Tourism" },
    { country: "Ireland", flag: "🇮🇪", focus: "Tech & Pharmaceuticals" },
    { country: "Mauritius", flag: "🇲🇺", focus: "Finance & Tourism" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧭 Global Reach, Local Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover where your CCID journey can take you—beyond borders, into opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {destinations.map((destination, index) => (
            <div 
              key={destination.country}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{destination.flag}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{destination.country}</h3>
              <p className="text-sm text-gray-600">{destination.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

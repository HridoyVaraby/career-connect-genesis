
const UniversityPartners = () => {
  const universities = [
    { name: "Oxford University", logo: "🎓" },
    { name: "MIT", logo: "🔬" },
    { name: "University of Toronto", logo: "🍁" },
    { name: "Auckland University", logo: "🏔️" },
    { name: "Trinity College Dublin", logo: "☘️" },
    { name: "University of Melbourne", logo: "🦘" },
    { name: "ETH Zurich", logo: "⚡" },
    { name: "Sciences Po Paris", logo: "🗼" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🎓 Partner Universities Across the Globe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted academic pathways with top international universities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {universities.map((university, index) => (
            <div 
              key={university.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2">{university.logo}</div>
              <span className="text-xs text-gray-600 text-center leading-tight">{university.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners;

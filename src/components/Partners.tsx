
const Partners = () => {
  const partners = [
    { name: "Apple", logo: "🍎" },
    { name: "Amazon", logo: "📦" },
    { name: "Google", logo: "🔍" },
    { name: "UNWTO", logo: "🌍" },
    { name: "ILO", logo: "⚖️" },
    { name: "Marriott", logo: "🏨" },
    { name: "Microsoft", logo: "💻" },
    { name: "Tesla", logo: "⚡" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🤝 Recognized by Global Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud members and collaborators of prestigious international bodies and corporations.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{partner.logo}</div>
              <span className="text-sm text-gray-600 text-center">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

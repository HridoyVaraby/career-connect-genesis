
import DestinationTemplate from "@/components/DestinationTemplate";

const CzechRepublic = () => {
  const czechData = {
    country: "Czech Republic",
    flag: "🇨🇿",
    subheadline: "Discover Central European Culture and Business Opportunities",
    overview: ["The Czech Republic offers growing opportunities in hospitality, business, and technology sectors with its rich culture and strategic location in Central Europe."],
    programs: [{ title: "Hospitality Program", description: "Work in Czech hotels and tourism sector.", duration: "6-12 months", positions: "Hotel Operations, Tourism", stipend: "€600-900/month", location: "Prague, Brno, Cesky Krumlov" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Basic English", "EU eligibility"] }],
    documents: { required: ["CV", "Passport", "Certificates"], programSpecific: ["Language skills"], visa: ["Work permit"] },
    benefits: ["Central European experience", "Cultural immersion", "Career development"],
    included: ["Job placement", "Support", "Certificate"],
    notIncluded: ["Visa fees", "Travel", "Housing"]
  };

  return <DestinationTemplate data={czechData} />;
};

export default CzechRepublic;


import DestinationTemplate from "@/components/DestinationTemplate";

const Malta = () => {
  const maltaData = {
    country: "Malta",
    flag: "🇲🇹",
    subheadline: "Experience Mediterranean Island Life and Business Growth",
    overview: ["Malta offers unique opportunities in tourism, hospitality, and emerging business sectors on this beautiful Mediterranean island."],
    programs: [{ title: "Island Tourism", description: "Work in Malta's vibrant tourism and hospitality sector.", duration: "6-12 months", positions: "Tourism, Hospitality, Events", stipend: "€700-1000/month", location: "Valletta, Sliema, St. Julian's" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "English proficiency", "EU work rights"] }],
    documents: { required: ["CV", "Passport", "Qualifications"], programSpecific: ["Experience letters"], visa: ["EU work permit"] },
    benefits: ["Island lifestyle", "English-speaking environment", "Mediterranean culture"],
    included: ["Job placement", "Orientation", "Support"],
    notIncluded: ["Visa fees", "Transport", "Accommodation"]
  };

  return <DestinationTemplate data={maltaData} />;
};

export default Malta;

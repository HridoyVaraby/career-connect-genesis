
import DestinationTemplate from "@/components/DestinationTemplate";

const UAE = () => {
  const uaeData = {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    subheadline: "Experience Middle Eastern Luxury and Global Business Excellence",
    overview: ["The UAE offers exceptional opportunities in luxury hospitality, international business, and tourism with world-class facilities and global connectivity."],
    programs: [{ title: "Luxury Hospitality", description: "Work in the UAE's world-famous luxury hotels and resorts.", duration: "12-24 months", positions: "Luxury Hotel Operations, Tourism, Events", stipend: "AED 4,000-8,000/month", location: "Dubai, Abu Dhabi, Sharjah" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 21-35", "Hospitality degree/experience", "English proficiency"] }],
    documents: { required: ["CV", "Passport", "Degree", "Experience certificates"], programSpecific: ["Hospitality background"], visa: ["Employment visa"] },
    benefits: ["Luxury hospitality experience", "Middle Eastern culture", "Tax-free income", "Global networking"],
    included: ["Job placement", "Visa processing", "Accommodation assistance", "Medical insurance"],
    notIncluded: ["Visa fees", "Travel costs", "Personal expenses"]
  };

  return <DestinationTemplate data={uaeData} />;
};

export default UAE;

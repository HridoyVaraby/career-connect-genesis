
import DestinationTemplate from "@/components/DestinationTemplate";

const Indonesia = () => {
  const indonesiaData = {
    country: "Indonesia",
    flag: "🇮🇩",
    subheadline: "Experience Indonesian Hospitality and Island Paradise",
    overview: ["Indonesia offers unique opportunities in tourism and hospitality across its thousands of beautiful islands and growing economy."],
    programs: [{ title: "Island Tourism", description: "Work in Indonesia's tropical tourism and resort industry.", duration: "6-12 months", positions: "Resort Operations, Tourism, Hospitality", stipend: "$700-1100/month", location: "Bali, Jakarta, Yogyakarta, Lombok" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Tourism background", "English proficiency"] }],
    documents: { required: ["CV", "Passport", "Health docs"], programSpecific: ["Tourism experience"], visa: ["Work visa application"] },
    benefits: ["Tropical island experience", "Indonesian culture", "Tourism expertise"],
    included: ["Job placement", "Visa support", "Cultural orientation"],
    notIncluded: ["Visa costs", "Transportation", "Accommodation"]
  };

  return <DestinationTemplate data={indonesiaData} />;
};

export default Indonesia;

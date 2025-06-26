
import DestinationTemplate from "@/components/DestinationTemplate";

const Croatia = () => {
  const croatiaData = {
    country: "Croatia",
    flag: "🇭🇷",
    subheadline: "Experience Adriatic Hospitality and Mediterranean Culture",
    overview: ["Croatia offers excellent opportunities in coastal tourism and hospitality with its stunning Adriatic coastline and growing tourism industry."],
    programs: [{ title: "Coastal Tourism", description: "Work in Croatia's booming coastal tourism sector.", duration: "4-8 months", positions: "Resort Management, Tourism Services", stipend: "€500-800/month", location: "Dubrovnik, Split, Zagreb" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-29", "Tourism background", "English skills"] }],
    documents: { required: ["CV", "Passport", "Health docs"], programSpecific: ["Tourism experience"], visa: ["EU work permit"] },
    benefits: ["Adriatic coast experience", "Mediterranean culture", "Tourism expertise"],
    included: ["Placement", "Support", "Certificate"],
    notIncluded: ["Visa fees", "Travel", "Accommodation"]
  };

  return <DestinationTemplate data={croatiaData} />;
};

export default Croatia;

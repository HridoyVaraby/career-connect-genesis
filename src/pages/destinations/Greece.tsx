
import DestinationTemplate from "@/components/DestinationTemplate";

const Greece = () => {
  const greeceData = {
    country: "Greece",
    flag: "🇬🇷",
    subheadline: "Experience Ancient Culture and Modern Hospitality",
    overview: ["Greece offers rich opportunities in tourism and hospitality with its ancient heritage, beautiful islands, and warm Mediterranean culture."],
    programs: [{ title: "Greek Tourism", description: "Work in Greece's historic and island tourism sector.", duration: "4-8 months", positions: "Tourism, Island Resorts, Cultural Sites", stipend: "€600-900/month", location: "Athens, Santorini, Mykonos, Crete" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Tourism background", "Basic English"] }],
    documents: { required: ["CV", "Passport", "Health certificate"], programSpecific: ["Tourism experience"], visa: ["EU work permit"] },
    benefits: ["Greek island experience", "Ancient culture immersion", "Mediterranean lifestyle"],
    included: ["Placement assistance", "Cultural orientation", "Certificate"],
    notIncluded: ["Visa costs", "Travel expenses", "Housing"]
  };

  return <DestinationTemplate data={greeceData} />;
};

export default Greece;


import DestinationTemplate from "@/components/DestinationTemplate";

const Montenegro = () => {
  const montenegroData = {
    country: "Montenegro",
    flag: "🇲🇪",
    subheadline: "Discover Balkan Beauty and Emerging Tourism Opportunities",
    overview: ["Montenegro offers emerging opportunities in tourism and hospitality with its stunning mountains, pristine coastline, and growing economy."],
    programs: [{ title: "Tourism Development", description: "Be part of Montenegro's growing tourism industry.", duration: "4-8 months", positions: "Tourism Operations, Hospitality", stipend: "€400-700/month", location: "Podgorica, Budva, Kotor" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Basic English", "Tourism interest"] }],
    documents: { required: ["CV", "Passport", "Certificates"], programSpecific: ["Language skills"], visa: ["Work permit"] },
    benefits: ["Emerging market experience", "Natural beauty", "Cultural diversity"],
    included: ["Job placement", "Support", "Training"],
    notIncluded: ["Visa costs", "Travel", "Housing"]
  };

  return <DestinationTemplate data={montenegroData} />;
};

export default Montenegro;


import DestinationTemplate from "@/components/DestinationTemplate";

const Vietnam = () => {
  const vietnamData = {
    country: "Vietnam",
    flag: "🇻🇳",
    subheadline: "Discover Vietnamese Culture and Growing Business Opportunities",
    overview: ["Vietnam offers emerging opportunities in hospitality, manufacturing, and business with its rapidly growing economy and rich cultural heritage."],
    programs: [{ title: "Business Development", description: "Work in Vietnam's growing business and hospitality sectors.", duration: "6-12 months", positions: "Business Operations, Tourism, Manufacturing", stipend: "$800-1200/month", location: "Ho Chi Minh City, Hanoi, Da Nang" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Business background", "English skills"] }],
    documents: { required: ["CV", "Passport", "Degree"], programSpecific: ["Work experience"], visa: ["Work permit application"] },
    benefits: ["Emerging market experience", "Vietnamese culture", "Business growth"],
    included: ["Job placement", "Visa assistance", "Cultural training"],
    notIncluded: ["Visa fees", "Travel", "Living expenses"]
  };

  return <DestinationTemplate data={vietnamData} />;
};

export default Vietnam;

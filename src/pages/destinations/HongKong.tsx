
import DestinationTemplate from "@/components/DestinationTemplate";

const HongKong = () => {
  const hongKongData = {
    country: "Hong Kong",
    flag: "🇭🇰",
    subheadline: "Experience Asia's Financial Hub and International Business Center",
    overview: ["Hong Kong offers world-class opportunities in finance, business, and hospitality as Asia's premier international business and financial center."],
    programs: [{ title: "Financial Services", description: "Work in Hong Kong's leading financial and business sectors.", duration: "6-12 months", positions: "Finance, Banking, International Business", stipend: "HK$15,000-25,000/month", location: "Central, Tsim Sha Tsui, Admiralty" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Finance/business degree", "English proficiency"] }],
    documents: { required: ["CV", "Passport", "Degree"], programSpecific: ["Financial background"], visa: ["Work visa"] },
    benefits: ["Financial sector experience", "International business hub", "East-West cultural bridge"],
    included: ["Job placement", "Visa support", "Professional orientation"],
    notIncluded: ["Visa fees", "Travel", "Accommodation"]
  };

  return <DestinationTemplate data={hongKongData} />;
};

export default HongKong;

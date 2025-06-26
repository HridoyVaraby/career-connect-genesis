
import DestinationTemplate from "@/components/DestinationTemplate";

const Bahrain = () => {
  const bahrainData = {
    country: "Bahrain",
    flag: "🇧🇭",
    subheadline: "Discover Gulf Hospitality and Financial Excellence",
    overview: ["Bahrain offers opportunities in hospitality, finance, and business as a growing Gulf destination with rich cultural heritage and modern infrastructure."],
    programs: [{ title: "Gulf Hospitality", description: "Work in Bahrain's growing hospitality and business sectors.", duration: "12-18 months", positions: "Hotel Management, Finance, Business Operations", stipend: "BHD 400-700/month", location: "Manama, Muharraq, Riffa" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 21-35", "Relevant degree", "English/Arabic skills"] }],
    documents: { required: ["CV", "Passport", "Certificates"], programSpecific: ["Work experience"], visa: ["Work permit"] },
    benefits: ["Gulf region experience", "Cultural diversity", "Career advancement"],
    included: ["Job placement", "Visa support", "Orientation"],
    notIncluded: ["Visa fees", "Travel", "Accommodation"]
  };

  return <DestinationTemplate data={bahrainData} />;
};

export default Bahrain;

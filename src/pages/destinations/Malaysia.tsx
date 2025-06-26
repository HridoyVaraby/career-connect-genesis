
import DestinationTemplate from "@/components/DestinationTemplate";

const Malaysia = () => {
  const malaysiaData = {
    country: "Malaysia",
    flag: "🇲🇾",
    subheadline: "Discover Malaysian Diversity and Business Excellence",
    overview: ["Malaysia offers excellent opportunities in hospitality, business, and technology with its multicultural environment and strategic location in Southeast Asia."],
    programs: [{ title: "Malaysian Business", description: "Work in Malaysia's diverse business and hospitality sectors.", duration: "6-12 months", positions: "Business Operations, Hospitality, Technology", stipend: "RM2500-3500/month", location: "Kuala Lumpur, Penang, Johor Bahru" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Business/hospitality background", "English skills"] }],
    documents: { required: ["CV", "Passport", "Certificates"], programSpecific: ["Work experience"], visa: ["Work permit"] },
    benefits: ["Multicultural experience", "Strategic Asian location", "Business networking"],
    included: ["Job placement", "Visa assistance", "Orientation"],
    notIncluded: ["Visa fees", "Travel costs", "Housing"]
  };

  return <DestinationTemplate data={malaysiaData} />;
};

export default Malaysia;

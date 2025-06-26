
import DestinationTemplate from "@/components/DestinationTemplate";

const Thailand = () => {
  const thailandData = {
    country: "Thailand",
    flag: "🇹🇭",
    subheadline: "Experience Thai Hospitality and Southeast Asian Culture",
    overview: ["Thailand offers excellent opportunities in hospitality, tourism, and business with its world-famous service culture and booming tourism industry."],
    programs: [{ title: "Thai Hospitality", description: "Work in Thailand's world-renowned hospitality sector.", duration: "6-12 months", positions: "Hotel Operations, Resort Management, Tourism", stipend: "฿25,000-35,000/month", location: "Bangkok, Phuket, Pattaya, Chiang Mai" }],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "Hospitality background", "English proficiency"] }],
    documents: { required: ["CV", "Passport", "Health check"], programSpecific: ["Work experience"], visa: ["Work permit", "Non-immigrant visa"] },
    benefits: ["Thai service excellence", "Southeast Asian experience", "Cultural immersion"],
    included: ["Job placement", "Visa support", "Orientation"],
    notIncluded: ["Visa fees", "Travel costs", "Accommodation"]
  };

  return <DestinationTemplate data={thailandData} />;
};

export default Thailand;

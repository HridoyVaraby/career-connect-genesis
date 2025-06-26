
import DestinationTemplate from "@/components/DestinationTemplate";

const NewZealand = () => {
  const newZealandData = {
    country: "New Zealand",
    flag: "🇳🇿",
    subheadline: "Experience Kiwi Hospitality and Natural Beauty",
    overview: [
      "New Zealand offers unique opportunities in hospitality, tourism, and agriculture. With stunning landscapes and friendly culture, New Zealand provides an ideal environment for career growth."
    ],
    programs: [
      {
        title: "Tourism & Hospitality",
        description: "Work in New Zealand's world-renowned tourism industry.",
        duration: "6-12 months",
        positions: "Tourism, Hotel Management, Adventure Tourism",
        stipend: "NZ$1200-1600/month",
        location: "Auckland, Wellington, Queenstown"
      }
    ],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "English proficiency", "Working holiday visa eligible"] }],
    documents: { required: ["CV", "Passport", "Health check"], programSpecific: ["Tourism background"], visa: ["Working holiday visa"] },
    benefits: ["Adventure tourism experience", "English immersion", "Outdoor lifestyle"],
    included: ["Job placement", "Visa guidance", "Orientation"],
    notIncluded: ["Visa fees", "Travel", "Accommodation"]
  };

  return <DestinationTemplate data={newZealandData} />;
};

export default NewZealand;

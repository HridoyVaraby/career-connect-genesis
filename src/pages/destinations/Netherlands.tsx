
import DestinationTemplate from "@/components/DestinationTemplate";

const Netherlands = () => {
  const netherlandsData = {
    country: "Netherlands",
    flag: "🇳🇱",
    subheadline: "Discover Dutch Innovation and International Business Excellence",
    overview: [
      "The Netherlands offers exceptional opportunities in international business, technology, and hospitality. Known for its innovative economy and multicultural environment, the Netherlands is perfect for global career development."
    ],
    programs: [
      {
        title: "Business Internship",
        description: "Work with international companies in the Dutch business sector.",
        duration: "6-12 months",
        positions: "International Business, Logistics, Finance",
        stipend: "€1000-1400/month",
        location: "Amsterdam, Rotterdam, The Hague"
      }
    ],
    eligibility: [{ title: "Requirements", requirements: ["Age 18-30", "University education", "English proficiency"] }],
    documents: { required: ["CV", "Certificates", "Passport"], programSpecific: ["Work experience"], visa: ["Visa application", "Financial proof"] },
    benefits: ["International business experience", "Dutch work culture", "European networking"],
    included: ["Job placement", "Visa support", "Orientation"],
    notIncluded: ["Visa fees", "Travel costs", "Housing"]
  };

  return <DestinationTemplate data={netherlandsData} />;
};

export default Netherlands;

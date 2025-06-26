
import DestinationTemplate from "@/components/DestinationTemplate";

const UnitedKingdom = () => {
  const ukData = {
    country: "United Kingdom",
    flag: "🇬🇧",
    subheadline: "Experience British Excellence in Education and Professional Development",
    overview: [
      "The United Kingdom offers world-class opportunities in education, hospitality, and business sectors. With its rich history, prestigious institutions, and global business connections, the UK provides exceptional career development opportunities.",
      "Our UK programs focus on professional internships, study opportunities, and cultural immersion in one of the world's leading economies."
    ],
    programs: [
      {
        title: "Professional Internship",
        description: "Gain experience in British companies and organizations.",
        duration: "6-12 months",
        positions: "Business, Finance, Marketing, Tech",
        stipend: "£1200-1800/month",
        location: "London, Manchester, Edinburgh, Birmingham"
      },
      {
        title: "Hospitality Program",
        description: "Work in the UK's prestigious hospitality sector.",
        duration: "6-12 months",
        positions: "Hotel Management, Tourism, Events",
        stipend: "£1000-1500/month",
        location: "London, Bath, Edinburgh, York"
      }
    ],
    eligibility: [
      {
        title: "Requirements",
        requirements: [
          "Age 18-30",
          "University degree or equivalent",
          "English proficiency",
          "Valid visa eligibility"
        ]
      }
    ],
    documents: {
      required: ["CV", "Cover letter", "Degree certificate", "Passport", "English test"],
      programSpecific: ["Work experience", "References", "Portfolio"],
      visa: ["Visa application", "Sponsorship letter", "Financial proof"]
    },
    benefits: [
      "British work experience",
      "English language immersion",
      "European market access",
      "Professional networking",
      "Cultural heritage exposure"
    ],
    included: [
      "Job placement",
      "Visa assistance",
      "Orientation program",
      "Ongoing support",
      "Completion certificate"
    ],
    notIncluded: [
      "Visa fees",
      "Travel costs",
      "Accommodation",
      "Living expenses",
      "Health insurance"
    ]
  };

  return <DestinationTemplate data={ukData} />;
};

export default UnitedKingdom;

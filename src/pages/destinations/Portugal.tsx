
import DestinationTemplate from "@/components/DestinationTemplate";

const Portugal = () => {
  const portugalData = {
    country: "Portugal",
    flag: "🇵🇹",
    subheadline: "Discover Portuguese Hospitality and Atlantic Beauty",
    overview: [
      "Portugal offers excellent opportunities in hospitality and tourism with its stunning coastline, historic cities, and growing economy. Experience Portuguese culture while building international career skills.",
      "Our Portuguese programs focus on coastal resorts, urban hospitality, and the country's emerging tech and business sectors."
    ],
    programs: [
      {
        title: "Coastal Resort Program",
        description: "Work in Portugal's beautiful Atlantic coast resorts and hotels.",
        duration: "6-12 months",
        positions: "Hotel Operations, Beach Resort Management",
        stipend: "€650-950/month",
        location: "Algarve, Porto, Lisbon Coast"
      },
      {
        title: "City Hospitality Program",
        description: "Experience urban hospitality in Portugal's historic cities.",
        duration: "6-12 months",
        positions: "Hotel Management, Tourism Services",
        stipend: "€700-1000/month",
        location: "Lisbon, Porto, Coimbra"
      }
    ],
    eligibility: [
      {
        title: "Requirements",
        requirements: [
          "Age 18-30",
          "Educational qualification",
          "Basic Portuguese or English",
          "EU work eligibility"
        ]
      }
    ],
    documents: {
      required: ["CV", "Cover letter", "Certificates", "Passport", "Health docs"],
      programSpecific: ["Language certificates", "Work experience"],
      visa: ["Work permit", "Accommodation proof", "Financial docs"]
    },
    benefits: [
      "Portuguese language skills",
      "Atlantic coastal experience",
      "European hospitality training",
      "Cultural immersion",
      "Career development"
    ],
    included: [
      "Job placement",
      "Visa support",
      "Orientation",
      "Language basics",
      "Certificate"
    ],
    notIncluded: [
      "Visa fees",
      "Travel costs",
      "Housing",
      "Personal expenses",
      "Insurance"
    ]
  };

  return <DestinationTemplate data={portugalData} />;
};

export default Portugal;

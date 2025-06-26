
import DestinationTemplate from "@/components/DestinationTemplate";

const France = () => {
  const franceData = {
    country: "France",
    flag: "🇫🇷",
    subheadline: "Experience French Excellence in Hospitality and Culinary Arts",
    overview: [
      "France offers exceptional opportunities for Bangladeshi students to immerse themselves in world-renowned hospitality, culinary arts, and business programs. With its rich cultural heritage and global industry standards, France provides the perfect environment for career development.",
      "Our French programs combine practical experience with cultural immersion, offering internships and study opportunities in luxury hotels, Michelin-starred restaurants, and international business environments."
    ],
    programs: [
      {
        title: "Hospitality Internship Program",
        description: "Gain experience in France's world-class hospitality industry with luxury hotels and resorts.",
        duration: "6-12 months",
        positions: "Hotel Management, Front Office, Food & Beverage, Events",
        stipend: "€800-1200/month",
        location: "Paris, Nice, Lyon, and major tourist destinations"
      },
      {
        title: "Culinary Arts Program",
        description: "Train with French chefs in renowned kitchens and culinary institutions.",
        duration: "3-18 months",
        positions: "Kitchen Operations, Pastry, Restaurant Service",
        stipend: "€700-1000/month",
        location: "Paris, Lyon, Marseille"
      },
      {
        title: "Business Internship",
        description: "Professional internships in international companies and French corporations.",
        duration: "3-12 months",
        positions: "Marketing, Finance, International Business",
        stipend: "€900-1400/month",
        location: "Paris, Lyon, Toulouse"
      }
    ],
    eligibility: [
      {
        title: "General Requirements",
        requirements: [
          "Age 18-30",
          "Bachelor's degree or enrolled student",
          "Basic French language skills (A2 level minimum)",
          "EU work permit or student visa eligibility"
        ]
      }
    ],
    documents: {
      required: [
        "Updated CV in French format",
        "Motivation letter in French",
        "Academic transcripts",
        "Valid passport",
        "Health insurance proof"
      ],
      programSpecific: [
        "Language proficiency certificate",
        "Portfolio (for culinary programs)",
        "Work experience certificates"
      ],
      visa: [
        "Student/work visa application",
        "Proof of accommodation",
        "Financial statements"
      ]
    },
    benefits: [
      "Work in world-renowned French establishments",
      "Learn French language and culture",
      "European work experience",
      "Networking in luxury industry",
      "Career advancement opportunities"
    ],
    included: [
      "Program placement",
      "Visa application support",
      "Orientation program",
      "Language support",
      "Certificate of completion"
    ],
    notIncluded: [
      "Visa fees",
      "Travel costs",
      "Accommodation",
      "Personal expenses",
      "Insurance costs"
    ]
  };

  return <DestinationTemplate data={franceData} />;
};

export default France;

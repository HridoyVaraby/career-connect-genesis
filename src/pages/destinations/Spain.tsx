
import DestinationTemplate from "@/components/DestinationTemplate";

const Spain = () => {
  const spainData = {
    country: "Spain",
    flag: "🇪🇸",
    subheadline: "Experience Spanish Culture Through Hospitality and Tourism",
    overview: [
      "Spain offers vibrant opportunities in hospitality, tourism, and business sectors. With its rich culture, beautiful coastlines, and dynamic cities, Spain provides an ideal environment for international career development.",
      "Our Spanish programs offer experiences in beach resorts, city hotels, cultural tourism, and business environments across this diverse and welcoming country."
    ],
    programs: [
      {
        title: "Resort Management Program",
        description: "Work in Spain's beautiful coastal resorts and holiday destinations.",
        duration: "6-12 months",
        positions: "Resort Operations, Guest Services, Entertainment",
        stipend: "€750-1150/month",
        location: "Costa del Sol, Balearic Islands, Canary Islands"
      },
      {
        title: "Urban Hospitality Program",
        description: "Experience city hospitality in Spain's major urban centers.",
        duration: "6-12 months",
        positions: "Hotel Management, Food & Beverage, Events",
        stipend: "€800-1200/month",
        location: "Madrid, Barcelona, Valencia, Seville"
      },
      {
        title: "Cultural Tourism Program",
        description: "Work in Spain's rich cultural and heritage tourism sector.",
        duration: "3-9 months",
        positions: "Tour Guiding, Cultural Sites, Museum Operations",
        stipend: "€700-1000/month",
        location: "Madrid, Barcelona, Seville, Granada"
      }
    ],
    eligibility: [
      {
        title: "Application Requirements",
        requirements: [
          "Age 18-30",
          "Educational qualification (high school+)",
          "Basic Spanish or English skills",
          "EU work authorization or student status"
        ]
      }
    ],
    documents: {
      required: [
        "Spanish format CV",
        "Motivation letter",
        "Academic records",
        "Valid identification",
        "Health clearance"
      ],
      programSpecific: [
        "Language proficiency proof",
        "Tourism/hospitality background",
        "Character references"
      ],
      visa: [
        "Work permit application",
        "Residence documentation",
        "Financial statements"
      ]
    },
    benefits: [
      "Spanish language immersion",
      "Mediterranean lifestyle experience",
      "International hospitality skills",
      "Cultural diversity exposure",
      "European market knowledge"
    ],
    included: [
      "Position placement",
      "Visa processing help",
      "Spanish orientation",
      "Basic language training",
      "Completion certification"
    ],
    notIncluded: [
      "Government fees",
      "Travel expenses",
      "Accommodation costs",
      "Living expenses",
      "Personal insurance"
    ]
  };

  return <DestinationTemplate data={spainData} />;
};

export default Spain;

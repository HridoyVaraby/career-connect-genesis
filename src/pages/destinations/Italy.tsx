
import DestinationTemplate from "@/components/DestinationTemplate";

const Italy = () => {
  const italyData = {
    country: "Italy",
    flag: "🇮🇹",
    subheadline: "Discover Italian Hospitality and Culinary Excellence",
    overview: [
      "Italy offers unique opportunities to experience authentic hospitality, world-class cuisine, and rich cultural heritage. Our programs connect Bangladeshi students with Italy's thriving tourism and hospitality sectors.",
      "From luxury resorts on the Amalfi Coast to historic hotels in Rome and Florence, Italy provides diverse experiences in hospitality management, culinary arts, and tourism."
    ],
    programs: [
      {
        title: "Hotel Management Program",
        description: "Work in Italy's luxury hotels and boutique properties across major tourist destinations.",
        duration: "6-12 months",
        positions: "Front Office, Guest Relations, Hotel Operations",
        stipend: "€700-1100/month",
        location: "Rome, Florence, Venice, Amalfi Coast"
      },
      {
        title: "Culinary Internship",
        description: "Learn authentic Italian cuisine in restaurants and culinary schools.",
        duration: "3-9 months",
        positions: "Kitchen Assistant, Pasta Making, Italian Cuisine",
        stipend: "€600-900/month",
        location: "Rome, Milan, Bologna, Tuscany"
      },
      {
        title: "Tourism Management",
        description: "Gain experience in Italy's vibrant tourism industry.",
        duration: "6-12 months",
        positions: "Tour Operations, Travel Planning, Cultural Tourism",
        stipend: "€800-1200/month",
        location: "Rome, Florence, Venice, Milan"
      }
    ],
    eligibility: [
      {
        title: "Program Requirements",
        requirements: [
          "Age 18-29",
          "High school diploma or higher",
          "Basic Italian or English proficiency",
          "EU citizenship or valid work permit"
        ]
      }
    ],
    documents: {
      required: [
        "CV in European format",
        "Cover letter",
        "Educational certificates",
        "Valid passport",
        "Health documentation"
      ],
      programSpecific: [
        "Language certificates",
        "Previous work experience proof",
        "Reference letters"
      ],
      visa: [
        "Work/study visa application",
        "Accommodation proof",
        "Financial documentation"
      ]
    },
    benefits: [
      "Experience authentic Italian culture",
      "Work in historic and luxury properties",
      "Learn Italian cuisine and language",
      "European hospitality experience",
      "Cultural immersion opportunities"
    ],
    included: [
      "Job placement assistance",
      "Visa support",
      "Cultural orientation",
      "Language basics training",
      "Program completion certificate"
    ],
    notIncluded: [
      "Visa application fees",
      "Transportation costs",
      "Housing arrangements",
      "Meals and personal expenses",
      "Travel insurance"
    ]
  };

  return <DestinationTemplate data={italyData} />;
};

export default Italy;

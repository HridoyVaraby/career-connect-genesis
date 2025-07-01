
import DestinationTemplate from "@/components/DestinationTemplate";

const Denmark = () => {
  const denmarkData = {
    country: "Denmark",
    flag: "🇩🇰",
    subheadline: "Advance Your Future with Europe's Most Sustainable & Student-Friendly Country",
    overview: [
      "Denmark is renowned for its innovation in education, agriculture, and hospitality. With high-quality living standards, excellent public services, and structured training programs, it's one of the best destinations for students and professionals seeking practical, paid experience in a globally competitive environment.",
      "Whether you're passionate about livestock, food production, hospitality, or vocational pathways, Denmark provides structured internship and traineeship programs that are hands-on, highly respected, and often lead to further employment or European residency opportunities."
    ],
    programs: [
      {
        title: "Danish Agriculture Internship Program",
        description: "Focus on organic farming, greenhouse management, and livestock operations. Ideal for agriculture students and young professionals.",
        duration: "12–18 months (with 5 weeks paid holidays)",
        positions: "Farm operations",
        stipend: "€1600–€2130/month + overtime",
        location: "Rural farms with city access"
      },
      {
        title: "Danish Livestock Traineeship Program",
        description: "Specialized program focusing on livestock feeding, care, farm data monitoring, dairy & pig farm operations. Ideal for applicants with prior farming or animal science experience.",
        duration: "18 months",
        positions: "Livestock management",
        stipend: "€1600–€2130/month",
        location: "Modern Danish farms"
      },
      {
        title: "Hospitality Internship",
        description: "Food & beverage, front desk, kitchen operations. Limited availability - check with counselor for open slots.",
        duration: "6–12 months",
        positions: "Hospitality sector",
        stipend: "Competitive stipend + benefits",
        location: "Hotels and restaurants"
      }
    ],
    eligibility: [
      {
        title: "General Requirements",
        requirements: [
          "Age 18–35",
          "Basic English (IELTS A2 or higher recommended)",
          "Related academic or practical background in agriculture, veterinary, or hospitality",
          "Medical fitness",
          "Valid passport (2+ years)",
          "Willingness to adapt to Danish culture and climate"
        ]
      }
    ],
    documents: {
      required: [
        "Updated resume with photo",
        "Passport copy",
        "Motivation letter",
        "IELTS/English language certificate"
      ],
      programSpecific: [
        "Police clearance",
        "Medical clearance",
        "Academic transcripts/certificates",
        "Farm/animal care experience (if applicable)"
      ],
      visa: [
        "Proof of funds",
        "Work contract from Danish employer"
      ]
    },
    benefits: [
      "Paid, hands-on international work experience",
      "Pathway to European jobs and permanent residence",
      "Certificate of completion & skill validation",
      "Exposure to Denmark's sustainable agriculture and hospitality sectors",
      "Affordable living costs & inclusive community",
      "Cultural immersion with structured support"
    ],
    included: [
      "Paid internship placement",
      "Accommodation assistance (€200–€250/month)",
      "Visa support and guidance",
      "Cultural orientation",
      "5 weeks paid holidays (agriculture program)",
      "Certificate of completion"
    ],
    notIncluded: [
      "Flight costs",
      "Visa application fees",
      "Personal daily expenses",
      "Health insurance",
      "Local transportation"
    ],
    testimonials: [
      {
        quote: "Working on a Danish farm taught me sustainable agriculture practices that I'll use back home. The experience was life-changing.",
        author: "Karim Ahmed",
        program: "Agriculture Internship",
        year: "2023"
      },
      {
        quote: "The livestock program in Denmark gave me hands-on experience with modern farming technology. Highly recommended!",
        author: "Nusrat Jahan",
        program: "Livestock Traineeship",
        year: "2022"
      }
    ]
  };

  return <DestinationTemplate data={denmarkData} />;
};

export default Denmark;

import DestinationTemplate from "@/components/DestinationTemplate";

const China = () => {
  const chinaData = {
    country: "China",
    flag: "🇨🇳",
    subheadline: "Get Ready for the Hospitality Adventure of a Lifetime",
    overview: [
      "Explore China through a 10-month paid internship that blends world-class hospitality experience with rich cultural immersion. CCID Bangladesh offers a unique opportunity for students and young professionals to work in prestigious 4- and 5-star hotels across Eastern China while growing their global career potential."
    ],
    programs: [
      {
        title: "Front Office",
        description: "Guest Check-in, Concierge Services",
        duration: "10 months",
        positions: "32–40 hours/week",
        stipend: "1,800 RMB/month (~30,000 BDT)",
        location: "Eastern China – top-tier hotel chains",
        image: "/hotel.webp"
      },
      {
        title: "Food & Beverage",
        description: "Restaurant Staff, Room Service",
        duration: "10 months", 
        positions: "32–40 hours/week",
        stipend: "1,800 RMB/month (~30,000 BDT)",
        location: "Eastern China – top-tier hotel chains",
        image: "/hotel.webp"
      },
      {
        title: "Housekeeping",
        description: "Room Attendants, Quality Control",
        duration: "10 months",
        positions: "32–40 hours/week", 
        stipend: "1,800 RMB/month (~30,000 BDT)",
        location: "Eastern China – top-tier hotel chains",
        image: "/hotel.webp"
      },
      {
        title: "Customer Service",
        description: "Guest Relations, Service Support",
        duration: "10 months",
        positions: "32–40 hours/week",
        stipend: "1,800 RMB/month (~30,000 BDT)", 
        location: "Eastern China – top-tier hotel chains",
        image: "/hotel.webp"
      }
    ],
    eligibility: [
      {
        title: "Requirements",
        requirements: [
          "Aged 20–30",
          "Hospitality/Hotel Management students or recent graduates",
          "Basic English communication skills",
          "Passion for hospitality and cultural exploration"
        ]
      }
    ],
    documents: {
      required: [
        "Valid Passport",
        "Resume with Photo",
        "Academic Transcript and Certificate",
        "Health and Medical Clearance",
        "Police Clearance",
        "Proof of Funds (as needed)",
        "Statement of Purpose"
      ],
      programSpecific: [
        "Hospitality or Hotel Management Certificate/Diploma",
        "English Proficiency Test (if required)",
        "Reference Letter from Institution",
        "Accommodation Preference Form"
      ],
      visa: [
        "X1/X2 Visa Application Form",
        "JW202 Form (provided by host organization)",
        "Invitation Letter from Chinese Partner Institution",
        "Medical Examination Report",
        "Financial Guarantee Statement"
      ]
    },
    benefits: [
      "Paid Internship (monthly stipend)",
      "Accommodation & Daily Meals Provided", 
      "Certificate upon Completion",
      "International Work Experience",
      "Cultural Exchange & Growth",
      "No IELTS Required",
      "2-months basic Mandarin language training included (free)"
    ],
    included: [
      "Internship placement & orientation",
      "Accommodation and meals",
      "Mandarin language training",
      "Certificate and end-of-program report",
      "Onboarding support and ongoing check-ins"
    ],
    notIncluded: [
      "Flight tickets",
      "Visa processing fees", 
      "Personal expenses",
      "Travel insurance (optional but recommended)"
    ],
    testimonials: [
      {
        quote: "The China hospitality program provided incredible cultural immersion while developing my professional skills in world-class hotels.",
        author: "Sarah Ahmed",
        program: "China Hospitality Internship",
        year: "2024"
      }
    ]
  };

  return <DestinationTemplate data={chinaData} />;
};

export default China;
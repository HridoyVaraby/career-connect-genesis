
import DestinationTemplate from "@/components/DestinationTemplate";

const Germany = () => {
  const germanyData = {
    country: "Germany",
    flag: "🇩🇪",
    subheadline: "Advance Your Future in Europe's Industrial & Academic Powerhouse",
    overview: [
      "Germany is one of the most sought-after destinations for international students, interns, and professionals due to its cutting-edge industries, tuition-free education system, and strong economic infrastructure. Known for its excellence in engineering, IT, hospitality, healthcare, and vocational training, Germany offers both academic and practical pathways to global success.",
      "Whether you're looking to study, train, or intern, Germany is the perfect gateway to long-term professional growth and European residency opportunities."
    ],
    programs: [
      {
        title: "Ausbildung Program (Vocational Apprenticeship)",
        description: "A structured dual education model that combines on-the-job training with classroom learning at a vocational school. Available in Hospitality, Healthcare, IT & Engineering, Logistics & Retail, and Automotive Technology.",
        duration: "2–3.5 years",
        positions: "Multiple sectors",
        stipend: "€800 – €1,300/month",
        location: "Multiple cities across Germany"
      },
      {
        title: "Pathway to Higher Education",
        description: "Ideal for Bangladeshi students seeking Bachelors or Masters degrees in Engineering, Computer Science, Business, Health Sciences, and Environmental Studies.",
        duration: "3-4 years (Bachelor), 1-2 years (Master)",
        positions: "University programs",
        stipend: "Work part-time during studies",
        location: "Universities nationwide"
      },
      {
        title: "Paid Internship & Industry Placement",
        description: "Project-based or seasonal internships for students and graduates in Hospitality, Business Administration, Engineering, Tech Startups, and Healthcare Support.",
        duration: "6–12 months",
        positions: "Multiple industries",
        stipend: "€800–€1,200/month",
        location: "Major cities and industrial centers"
      }
    ],
    eligibility: [
      {
        title: "General Requirements",
        requirements: [
          "Age 18–35",
          "Relevant academic or training background",
          "Language proficiency (German B1 or IELTS for some programs)",
          "Clean police record",
          "Physically and mentally fit",
          "Motivation letter and intent to return or grow within Germany"
        ]
      }
    ],
    documents: {
      required: [
        "Resume with photo",
        "Valid passport",
        "Academic transcripts & certificates",
        "Motivation letter"
      ],
      programSpecific: [
        "Language certificates (German/English)",
        "Medical and police clearance",
        "Birth certificate"
      ],
      visa: [
        "Proof of financial means (if applicable)",
        "Acceptance letter from institution/employer"
      ]
    },
    benefits: [
      "Earn while you learn",
      "Work legally with visa support",
      "High standard of living",
      "Exposure to Europe's best industries",
      "Opportunity to transition to long-term residence",
      "International diploma or certificate"
    ],
    included: [
      "Visa support and guidance",
      "Placement assistance",
      "Pre-departure orientation",
      "Legal work authorization",
      "Access to public services",
      "Certificate of completion"
    ],
    notIncluded: [
      "Flight costs",
      "Initial accommodation deposit",
      "Personal daily expenses",
      "Health insurance (first month)",
      "Local transport costs"
    ],
    testimonials: [
      {
        quote: "The Ausbildung program in Germany changed my life. I'm now working as a certified nurse with permanent residency prospects.",
        author: "Fatima Rahman",
        program: "Healthcare Ausbildung",
        year: "2023"
      },
      {
        quote: "Studying engineering in Germany was the best decision. Free tuition and excellent job prospects after graduation.",
        author: "Ahmed Hassan",
        program: "Engineering Pathway",
        year: "2022"
      }
    ]
  };

  return <DestinationTemplate data={germanyData} />;
};

export default Germany;


import DestinationTemplate from "@/components/DestinationTemplate";

const USA = () => {
  const usaData = {
    country: "United States of America",
    flag: "🇺🇸",
    subheadline: "Gain Real-World Career Experience in the World's Most Dynamic Market",
    overview: [
      "The United States offers unmatched opportunities for Bangladeshi students and young professionals to launch their international careers through paid internships, traineeships, and teaching roles. With global industry exposure, cultural immersion, and hands-on learning, CCID Bangladesh helps you take the first step toward a career that crosses borders.",
      "Whether you're pursuing hospitality, education, culinary arts, or business administration—our U.S. programs offer the experience, structure, and support to succeed."
    ],
    programs: [
      {
        title: "J1 Internship Program",
        description: "Applicants must be currently enrolled or recent graduates (within 12 months) looking for their first work experience in the industry.",
        duration: "6, 9, 12 & 18 months (32–40 hours/week)",
        positions: "Hospitality & Tourism, Business Administration, Marketing & Finance",
        stipend: "$1200 – $2400/month (varies by employer)",
        location: "Various cities in the USA (flexibility required)"
      },
      {
        title: "Traineeship Program",
        description: "Ideal for graduates with 12+ months of relevant work experience seeking career advancement in the U.S.",
        duration: "6, 9, 12 & 18 months (32–40 hours/week)",
        positions: "Hospitality & Tourism, Business Administration, Marketing & Finance",
        stipend: "$1200 – $2400/month (company-dependent)",
        location: "Flexible placement across U.S. cities"
      },
      {
        title: "Teacher Internship Program",
        description: "For licensed educators aiming to teach in the U.S. with strong English proficiency and relevant classroom experience.",
        duration: "1–3 years (40 hours/week)",
        positions: "Math, Science, Spanish, Mandarin, Special Education, Classroom Teaching",
        stipend: "$38,000/year or higher (based on school contract)",
        location: "Multiple U.S. school districts"
      }
    ],
    eligibility: [
      {
        title: "For Interns",
        requirements: [
          "Age 18+",
          "Enrolled or recent graduates (within 12 months)",
          "Upper-intermediate English"
        ]
      },
      {
        title: "For Trainees",
        requirements: [
          "Bachelor's degree or higher",
          "At least 12 months of related professional experience"
        ]
      },
      {
        title: "For Teachers",
        requirements: [
          "Bachelor's or Master's in education-related field",
          "2+ years of verified teaching experience",
          "English fluency (TOEFL 550+ or waived with English teaching experience)",
          "Valid teaching certification in home country"
        ]
      }
    ],
    documents: {
      required: [
        "Updated resume with photo",
        "Video introduction",
        "Medical & police clearance",
        "Valid passport (min. 2 years)",
        "Academic transcripts and diploma"
      ],
      programSpecific: [
        "Employment/reference letter",
        "Proof of teaching certification (teachers)",
        "Proof of funds & return ticket"
      ],
      visa: [
        "Visa application documents",
        "DS-2019 form",
        "SEVIS fee payment"
      ]
    },
    benefits: [
      "Paid international experience",
      "Exposure to global service standards",
      "Cultural exchange and personal growth",
      "Boosted employability & leadership skills",
      "Networking across global industries"
    ],
    included: [
      "Internship/job placement",
      "DS-2019 & visa processing assistance",
      "Pre-departure orientation",
      "In-program support",
      "Certificate of completion"
    ],
    notIncluded: [
      "SEVIS, MRV visa fee, PDOS",
      "Travel and health insurance",
      "Personal expenses, meals & housing",
      "Airfare and proof of funds"
    ],
    testimonials: [
      {
        quote: "CCID's J1 program helped me work in a 4-star U.S. hotel. The experience changed my life!",
        author: "Nazia",
        program: "Hospitality Intern",
        year: "2023"
      },
      {
        quote: "Teaching in the U.S. gave me access to global education standards. Highly recommend it.",
        author: "Farhan",
        program: "Teacher Intern",
        year: "2022"
      }
    ]
  };

  return <DestinationTemplate data={usaData} />;
};

export default USA;

export interface OfficialDocument {
  sNo: number;
  subject: string;
  downloadUrl: string;
  fileType: "PDF" | "DOCX" | "ZIP";
  fileSize?: string;
  category?: string;
}

export const officialDocumentsDatabase: OfficialDocument[] = [
  {
    sNo: 1,
    subject: "Advance Program in Financial Market (APFM) — Comprehensive Course Curriculum & Practical Lab Syllabus",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "2.4 MB",
    category: "Academic Curriculum",
  },
  {
    sNo: 2,
    subject: "Basic Program in Financial Market (BPFM) — Foundation Syllabus & Stock Market Terminology Guide",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "1.8 MB",
    category: "Academic Curriculum",
  },
  {
    sNo: 3,
    subject: "Institutional Student Enrollment Form & Academic Code of Conduct Guidelines (ISO 9001:2015 Standard)",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "1.1 MB",
    category: "Institutional Forms",
  },
  {
    sNo: 4,
    subject: "National Education Policy (NEP 2020) Higher Education Add-on Financial Literacy Module Prospectus",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "3.2 MB",
    category: "University Desk",
  },
  {
    sNo: 5,
    subject: "SEG Academy Institutional Franchise Association & Infrastructure Accreditation Application Brochure",
    downloadUrl: "#",
    fileType: "PDF",
    fileSize: "4.1 MB",
    category: "Franchise Information",
  },
];

export interface StudentAdmitCard {
  registrationNo: string;
  rollNo: string;
  candidateName: string;
  fatherName?: string;
  dob: string;
  gender: string;
  courseName: string;
  batchSession: string;
  examCenter: string;
  examCenterAddress: string;
  examDate: string;
  reportingTime: string;
  examTiming: string;
  paperTitle: string;
  candidatePhoto?: string;
  verificationHash: string;
}

export const admitCardDatabase: Record<string, StudentAdmitCard> = {
  "SEG/2024/0142": {
    registrationNo: "SEG/2024/0142",
    rollNo: "24-APFM-0142",
    candidateName: "Amogha Sriteja",
    fatherName: "S. K. Sriteja",
    dob: "15-Aug-2001",
    gender: "Female",
    courseName: "Advance Program in Financial Market (APFM)",
    batchSession: "2024-2025 Cohort",
    examCenter: "SEG Academy Headquarters (Main Examination Hall - Lab 1)",
    examCenterAddress:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM, Varanasi, UP - 221002",
    examDate: "28-Nov-2026",
    reportingTime: "09:30 AM IST",
    examTiming: "10:00 AM - 01:00 PM (3 Hours)",
    paperTitle: "Derivatives, Options Volatility & Live Price Action Execution",
    verificationHash: "SHA256:7f9a2e8810b4c8d9e2a1b948",
  },
  "SEG/2024/0285": {
    registrationNo: "SEG/2024/0285",
    rollNo: "24-BPFM-0285",
    candidateName: "Astha Gupta",
    fatherName: "R. P. Gupta",
    dob: "22-Apr-2002",
    gender: "Female",
    courseName: "Basic Program in Financial Market (BPFM - 30 Hours)",
    batchSession: "2024-2025 Cohort",
    examCenter: "SEG Academy Kolkata Center (Auditorium Hall)",
    examCenterAddress:
      "53 Station Road, Rahara Bazar, Near Daruchini Restaurant, Khardah, Kolkata, West Bengal - 700118",
    examDate: "02-Dec-2026",
    reportingTime: "01:30 PM IST",
    examTiming: "02:00 PM - 05:00 PM (3 Hours)",
    paperTitle: "Equity Microstructure, Chart Geometry & Technical Indicators",
    verificationHash: "SHA256:88a1b4d092ef55b7c89104fa",
  },
  "SEG/2023/0741": {
    registrationNo: "SEG/2023/0741",
    rollNo: "23-PTS-0741",
    candidateName: "Shardendu Prakash",
    fatherName: "V. N. Prakash",
    dob: "11-Dec-1999",
    gender: "Male",
    courseName: "Pro Trading Secret (Advanced Technical Analysis Setup)",
    batchSession: "2023-2024 Advanced Desk",
    examCenter: "SEG Academy Headquarters (Trading Lab 2)",
    examCenterAddress:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM, Varanasi, UP - 221002",
    examDate: "15-Dec-2026",
    reportingTime: "09:30 AM IST",
    examTiming: "10:00 AM - 01:00 PM (3 Hours)",
    paperTitle: "High-Probability Order Flow & Smart Money Confluence",
    verificationHash: "SHA256:4b91ce07f822189a5e80dc91",
  },
  "SEG/2024/0399": {
    registrationNo: "SEG/2024/0399",
    rollNo: "24-MMP-0399",
    candidateName: "Rohan Verma",
    fatherName: "M. L. Verma",
    dob: "05-Jun-2003",
    gender: "Male",
    courseName: "Money Matrix Program (MMP Flagship)",
    batchSession: "2024-2025 Cohort",
    examCenter: "SEG Academy Headquarters (Main Examination Hall - Lab 1)",
    examCenterAddress:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM, Varanasi, UP - 221002",
    examDate: "20-Dec-2026",
    reportingTime: "09:30 AM IST",
    examTiming: "10:00 AM - 01:00 PM (3 Hours)",
    paperTitle: "Multi-Asset Smart Money Logic & Risk Management Architecture",
    verificationHash: "SHA256:c3d9a108be64e2f91a5518dc",
  },
  "SEG/2024/0204": {
    registrationNo: "SEG/2024/0204",
    rollNo: "24-CEDA-0204",
    candidateName: "Rohit Sharma",
    fatherName: "K. K. Sharma",
    dob: "15-Jan-2002",
    gender: "Male",
    courseName: "Certified Equity & Derivative Analyst (CEDA)",
    batchSession: "2024-2025 Cohort",
    examCenter: "SEG Academy Headquarters (Main Examination Hall - Lab 1)",
    examCenterAddress:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM, Varanasi, UP - 221002",
    examDate: "22-Dec-2026",
    reportingTime: "01:30 PM IST",
    examTiming: "02:00 PM - 05:00 PM (3 Hours)",
    paperTitle: "Options Greeks, Neutral Strategies & Volatility Arbitrage",
    verificationHash: "SHA256:39a7b008dc68e1fa2419a711",
  },
};

export async function fetchAdmitCardByRegNo(
  rawRegNo: string
): Promise<StudentAdmitCard | null> {
  const normalized = rawRegNo.trim().toUpperCase();

  // Simulate network latency for authentic API request
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Check exact or normalized registration number match
  for (const [key, record] of Object.entries(admitCardDatabase)) {
    if (
      key.toUpperCase() === normalized ||
      key.replace(/\//g, "").toUpperCase() === normalized.replace(/\//g, "") ||
      record.rollNo.toUpperCase() === normalized
    ) {
      return record;
    }
  }

  return null;
}


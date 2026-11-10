import academyExteriorImg from "@/assets/academy-exterior.jpg";
import academyInteriorImg from "@/assets/academy-interior.jpg";
import learningJourneyImg from "@/assets/learning-journey.jpg";
import heroClassroomImg from "@/assets/hero-classroom.jpg";
import mentorImg from "@/assets/mentor.jpg";

export interface FranchiseCentre {
  code: string;
  name: string;
  head: string;
  address: string;
  state: string;
  district: string;
  photo: string;
  type: "Headquarters" | "Affiliated Institute" | "Regional Center" | "Study Center";
  phone?: string;
  pincode: string;
}

export const franchiseCentres: FranchiseCentre[] = [
  {
    code: "SEG",
    name: "SEG Academy (Headquarters)",
    head: "Sandeep Chatterjee",
    address:
      "3rd Floor, Sampoornand, D 59/98, Sigra - Mahmoorganj Rd, Near Punjab National Bank Mahmoorganj ATM, Varanasi, Uttar Pradesh - 221002",
    state: "Uttar Pradesh",
    district: "Varanasi",
    pincode: "221002",
    photo: academyExteriorImg,
    type: "Headquarters",
    phone: "094549 45992 / 096160 51355",
  },
  {
    code: "SWCV",
    name: "Sunbeam Womens College Varuna",
    head: "Rinki Singh",
    address: "Central Jail Rd, Sikraul, Varanasi, Uttar Pradesh - 221002",
    state: "Uttar Pradesh",
    district: "Varanasi",
    pincode: "221002",
    photo: academyInteriorImg,
    type: "Affiliated Institute",
    phone: "094549 45992",
  },
  {
    code: "WB",
    name: "SEGACADEMY_KOL",
    head: "Satyajeet Biswas",
    address:
      "53 Station Road, Rahara Bazar, Near Daruchini Restaurant, Khardah, Kolkata, West Bengal - 700118",
    state: "West Bengal",
    district: "Kolkata",
    pincode: "700118",
    photo: learningJourneyImg,
    type: "Regional Center",
    phone: "096160 51355",
  },
  {
    code: "SMS",
    name: "SMS – School of Management Sciences",
    head: "Academic Desk Coordinator",
    address: "SMS Campus, Khushipur, P.O- Bachhaon, Varanasi, Uttar Pradesh - 221011",
    state: "Uttar Pradesh",
    district: "Varanasi",
    pincode: "221011",
    photo: heroClassroomImg,
    type: "Affiliated Institute",
    phone: "094549 45992",
  },
];

export const indianStates = [
  "Uttar Pradesh",
  "West Bengal",
  "Bihar",
  "Delhi NCR",
  "Maharashtra",
  "Madhya Pradesh",
  "Rajasthan",
  "Haryana",
  "Punjab",
  "Uttarakhand",
  "Jharkhand",
  "Gujarat",
  "Karnataka",
  "Telangana",
  "Tamil Nadu",
  "Odisha",
  "Assam",
  "Chhattisgarh",
];

export interface FranchiseEnquirySubmission {
  id: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  gender: string;
  organizationDetails: string;
  addressLocation: string;
  addressBlock: string;
  state: string;
  district: string;
  pincode: string;
  submittedAt: string;
}

const STORAGE_KEY = "seg_franchise_enquiries";

export function saveFranchiseEnquiry(
  data: Omit<FranchiseEnquirySubmission, "id" | "submittedAt">
): FranchiseEnquirySubmission {
  const id = `SEG-FRN-${new Date().getFullYear()}-${Math.floor(
    10000 + Math.random() * 90000
  )}`;
  const record: FranchiseEnquirySubmission = {
    ...data,
    id,
    submittedAt: new Date().toISOString(),
  };

  try {
    const existingStr = localStorage.getItem(STORAGE_KEY);
    const existing: FranchiseEnquirySubmission[] = existingStr
      ? JSON.parse(existingStr)
      : [];
    existing.unshift(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // Silently continue if localStorage is restricted
  }

  return record;
}


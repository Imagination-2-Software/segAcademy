import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  Check,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  IdCard,
  MapPin,
  Phone,
  Printer,
  RefreshCw,
  RotateCcw,
  ShieldCheck,
  Upload,
  User,
  X,
} from "lucide-react";
import { StudentPortalLayout } from "@/components/student-portal/StudentPortalLayout";

const title = "Student Registration | Student Zone | SEG Academy";
const description =
  "Begin your learning journey with SEG Academy. Complete the official registration form below to enrol in your preferred financial market program.";

export const Route = createFileRoute("/student-zone/registration")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/student-zone/registration" },
    ],
    links: [{ rel: "canonical", href: "/student-zone/registration" }],
  }),
  component: StudentRegistrationPage,
});

/* =========================================================================
   Location Data
   ========================================================================= */

interface DistrictData {
  name: string;
  centres: string[];
}

interface StateData {
  state: string;
  districts: DistrictData[];
}

const locationData: StateData[] = [
  {
    state: "Uttar Pradesh",
    districts: [
      {
        name: "Varanasi",
        centres: [
          "SEG Academy Headquarters (Sigra - Mahmoorganj Rd, D 59/98)",
          "Sunbeam Women's College Varuna (Institutional Partner, Sikraul)",
          "SEG Academy Lanka Extension Center",
        ],
      },
      {
        name: "Prayagraj",
        centres: ["SEG Academy Prayagraj Study Center (Civil Lines)"],
      },
      {
        name: "Lucknow",
        centres: ["SEG Academy Lucknow Regional Center (Hazratganj)"],
      },
      {
        name: "Gorakhpur",
        centres: ["SEG Academy Gorakhpur Center (Golghar)"],
      },
      {
        name: "Kanpur",
        centres: ["SEG Academy Kanpur Extension (Swaroop Nagar)"],
      },
      {
        name: "Gautam Buddha Nagar (Noida)",
        centres: ["SEG Academy Noida Digital Study Center (Sector 62)"],
      },
      {
        name: "Mirzapur",
        centres: ["SEG Academy Mirzapur Affiliated Study Unit"],
      },
      {
        name: "Chandauli",
        centres: ["SEG Academy Chandauli Learning Point"],
      },
      {
        name: "Jaunpur",
        centres: ["SEG Academy Jaunpur Study Center"],
      },
      {
        name: "Ghazipur",
        centres: ["SEG Academy Ghazipur Affiliated Center"],
      },
      {
        name: "Ballia",
        centres: ["SEG Academy Ballia Regional Learning Point"],
      },
      {
        name: "Azamgarh",
        centres: ["SEG Academy Azamgarh Center"],
      },
      {
        name: "Bhadohi",
        centres: ["SEG Academy Bhadohi Center"],
      },
    ],
  },
  {
    state: "West Bengal",
    districts: [
      {
        name: "Kolkata",
        centres: [
          "SEG Academy Kolkata Center (53 Station Road, Rahara Bazar, Khardah)",
        ],
      },
      {
        name: "North 24 Parganas",
        centres: [
          "SEG Academy Kolkata Center (53 Station Road, Rahara Bazar, Khardah)",
        ],
      },
      {
        name: "Howrah",
        centres: ["SEG Academy Howrah Affiliated Center"],
      },
      {
        name: "Siliguri / Darjeeling",
        centres: ["SEG Academy North Bengal Center (Siliguri)"],
      },
      {
        name: "Hooghly",
        centres: ["SEG Academy Hooghly Study Unit"],
      },
    ],
  },
  {
    state: "Bihar",
    districts: [
      {
        name: "Patna",
        centres: ["SEG Academy Patna Learning Hub (Fraser Road / Boring Road)"],
      },
      {
        name: "Muzaffarpur",
        centres: ["SEG Academy Muzaffarpur Study Center"],
      },
      {
        name: "Gaya",
        centres: ["SEG Academy Gaya Regional Point"],
      },
      {
        name: "Bhagalpur",
        centres: ["SEG Academy Bhagalpur Learning Unit"],
      },
    ],
  },
  {
    state: "Delhi NCR",
    districts: [
      {
        name: "New Delhi (Central / South)",
        centres: ["SEG Academy Connaught Place Learning Suite"],
      },
      {
        name: "Gurugram",
        centres: ["SEG Academy Cyber City Corporate Suite"],
      },
      {
        name: "Noida / Ghaziabad",
        centres: ["SEG Academy Noida Digital Study Center (Sector 62)"],
      },
    ],
  },
  {
    state: "Maharashtra",
    districts: [
      {
        name: "Mumbai",
        centres: ["SEG Academy BKC Institutional Center"],
      },
      {
        name: "Pune",
        centres: ["SEG Academy Pune Camp Study Center"],
      },
    ],
  },
  {
    state: "Pan-India (Online / Remote Interactive)",
    districts: [
      {
        name: "Virtual Interactive Classrooms",
        centres: [
          "SEG Academy Virtual Live Terminal (Pan-India / Remote Interactive Batch)",
        ],
      },
    ],
  },
];

/* =========================================================================
   Courses Data
   ========================================================================= */

interface CourseCategoryData {
  category: string;
  courses: string[];
}

const courseCategoryData: CourseCategoryData[] = [
  {
    category: "Featured Flagship Programs",
    courses: [
      "Money Matrix Program (One Program | All Markets | Zero Confusion)",
    ],
  },
  {
    category: "Professional Certification Programs",
    courses: [
      "APMF (Advance Program in Financial Market)",
      "Certified Equity & Derivative Analyst (CEDA)",
      "Research Analyst & Terminal Operations Bootcamp",
    ],
  },
  {
    category: "Foundation & Beginner Courses",
    courses: [
      "Basic Program in Financial Market (30 Hours Foundation Course)",
      "Introduction to Stock Exchanges & Mutual Funds",
    ],
  },
  {
    category: "Advanced Trading & Technical Analysis",
    courses: [
      "Pro Trading Secret (Mr. M. S. Mehdadi - Swing, Trend & MARS Setup)",
      "Price Action & Candlestick Pattern Mastery",
    ],
  },
  {
    category: "Specialized Derivatives & Options",
    courses: [
      "Trade with Satya (Options Trading & Expiry Day Strategies)",
      "Advanced Option Greeks & Non-Directional Hedging",
    ],
  },
];

const sessionOptions = ["2025-2026", "2026-2027", "2024-2025"];
const genderOptions = ["Select Gender", "Male", "Female", "Other", "Prefer not to say"];
const maritalStatusOptions = ["Select Marital Status", "Single / Unmarried", "Married", "Other"];
const identityTypeOptions = [
  "Select Identity Type",
  "Aadhaar Card",
  "PAN Card",
  "Voter ID Card",
  "Passport",
  "Driving License",
  "College / Student ID Card",
];
const qualificationOptions = [
  "Select Qualification",
  "10th Standard / Matriculation",
  "12th Standard / Intermediate",
  "Graduation (B.A. / B.Sc. / B.Com / B.Tech / BBA)",
  "Post Graduation (M.A. / M.Sc. / M.Com / MBA / M.Tech)",
  "Diploma / Polytechnic",
  "Professional Qualification (CA / CS / CMA / CFA)",
  "Other",
];
const enquirySourceOptions = [
  "Select Enquiry Source",
  "Google Search",
  "Social Media (Instagram / YouTube / Facebook)",
  "Friend / Family Recommendation",
  "Campus Seminar / College Workshop",
  "Hoarding / Newspaper / Print Media",
  "Existing Student Referral",
  "Direct Website Visit",
  "Other",
];

interface RegistrationReceipt {
  applicationNumber: string;
  registrationDate: string;
  state: string;
  district: string;
  studyCentre: string;
  courseCategory: string;
  courseName: string;
  session: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  identityType: string;
  idNumber: string;
  qualification: string;
  contactNumber: string;
  email: string;
  address: string;
  pincode: string;
  enquirySource: string;
  photoUrl: string | null;
  photoFileName: string;
}

export function StudentRegistrationPage() {
  // Location States
  const [selectedState, setSelectedState] = useState<string>("Uttar Pradesh");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("Varanasi");
  const [selectedStudyCentre, setSelectedStudyCentre] = useState<string>(
    "SEG Academy Headquarters (Sigra - Mahmoorganj Rd, D 59/98)"
  );

  // Course States
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Featured Flagship Programs"
  );
  const [selectedCourse, setSelectedCourse] = useState<string>(
    "Money Matrix Program (One Program | All Markets | Zero Confusion)"
  );
  const [selectedSession, setSelectedSession] = useState<string>("2025-2026");

  // Personal Info States
  const [fullName, setFullName] = useState<string>("");
  const [fatherName, setFatherName] = useState<string>("");
  const [motherName, setMotherName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [identityType, setIdentityType] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [enquirySource, setEnquirySource] = useState<string>("");

  // Profile Picture State
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [photoFileName, setPhotoFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // CAPTCHA State
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Declaration State
  const [agreedDeclaration, setAgreedDeclaration] = useState<boolean>(false);

  // Status States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<RegistrationReceipt | null>(null);

  const availableDistricts =
    locationData.find((item) => item.state === selectedState)?.districts || [];
  const availableCentres =
    availableDistricts.find((d) => d.name === selectedDistrict)?.centres || [];
  const availableCourses =
    courseCategoryData.find((c) => c.category === selectedCategory)?.courses || [];

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setEnteredCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !captchaCode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 160;
    const height = 48;
    canvas.width = width;
    canvas.height = height;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#F7F3FC");
    gradient.addColorStop(1, "#E8DCF5");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(53, 22, 80, ${Math.random() * 0.15 + 0.05})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = `rgba(255, 138, 36, ${Math.random() * 0.4 + 0.3})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * 20, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
        width - Math.random() * 20,
        Math.random() * height
      );
      ctx.stroke();
    }

    ctx.font = "bold 26px 'Courier New', monospace";
    ctx.textBaseline = "middle";
    for (let i = 0; i < captchaCode.length; i++) {
      ctx.save();
      const x = 20 + i * 26;
      const y = height / 2;
      const angle = (Math.random() - 0.5) * 0.35;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = i % 2 === 0 ? "#351650" : "#241038";
      ctx.fillText(captchaCode[i], -10, 0);
      ctx.restore();
    }
  }, [captchaCode]);

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const stateObj = locationData.find((s) => s.state === newState);
    if (stateObj && stateObj.districts.length > 0) {
      const firstDistrict = stateObj.districts[0];
      setSelectedDistrict(firstDistrict.name);
      if (firstDistrict.centres.length > 0) {
        setSelectedStudyCentre(firstDistrict.centres[0]);
      } else {
        setSelectedStudyCentre("");
      }
    } else {
      setSelectedDistrict("");
      setSelectedStudyCentre("");
    }
  };

  const handleDistrictChange = (newDistrict: string) => {
    setSelectedDistrict(newDistrict);
    const distObj = availableDistricts.find((d) => d.name === newDistrict);
    if (distObj && distObj.centres.length > 0) {
      setSelectedStudyCentre(distObj.centres[0]);
    } else {
      setSelectedStudyCentre("");
    }
  };

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    const catObj = courseCategoryData.find((c) => c.category === newCategory);
    if (catObj && catObj.courses.length > 0) {
      setSelectedCourse(catObj.courses[0]);
    } else {
      setSelectedCourse("");
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        photo: "Invalid file type. Please upload a JPG, JPEG, or PNG image.",
      }));
      return;
    }

    const maxSizeInBytes = 500 * 1024;
    if (file.size > maxSizeInBytes) {
      const fileSizeInKB = Math.round(file.size / 1024);
      setErrors((prev) => ({
        ...prev,
        photo: `File size exceeds the 500 KB limit (selected file is ${fileSizeInKB} KB). Please upload a smaller image.`,
      }));
      return;
    }

    setErrors((prev) => {
      const next = { ...prev };
      delete next.photo;
      return next;
    });

    setPhotoFile(file);
    setPhotoFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
    setPhotoFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedState) newErrors.state = "Please select your state.";
    if (!selectedDistrict) newErrors.district = "Please select your district.";
    if (!selectedStudyCentre)
      newErrors.studyCentre = "Please select your study centre.";

    if (!selectedCategory)
      newErrors.category = "Please select a course category.";
    if (!selectedCourse) newErrors.course = "Please select a course name.";
    if (!selectedSession) newErrors.session = "Please select your session.";

    if (!fullName.trim()) newErrors.fullName = "Your full name is required.";
    if (!fatherName.trim()) newErrors.fatherName = "Father's name is required.";
    if (!motherName.trim()) newErrors.motherName = "Mother's name is required.";
    if (!dob) newErrors.dob = "Date of birth is required.";
    if (!gender || gender.startsWith("Select"))
      newErrors.gender = "Please select gender.";
    if (!maritalStatus || maritalStatus.startsWith("Select"))
      newErrors.maritalStatus = "Please select marital status.";
    if (!identityType || identityType.startsWith("Select"))
      newErrors.identityType = "Please select your identity type.";
    if (!idNumber.trim()) newErrors.idNumber = "Identity number is required.";
    if (!qualification || qualification.startsWith("Select"))
      newErrors.qualification = "Please select your last qualification.";

    const cleanedContact = contactNumber.replace(/\D/g, "");
    if (!cleanedContact) {
      newErrors.contactNumber = "Contact number is required.";
    } else if (cleanedContact.length < 10 || cleanedContact.length > 12) {
      newErrors.contactNumber =
        "Please enter a valid 10-digit Indian mobile number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email account is required.";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!address.trim()) newErrors.address = "Address is required.";

    const cleanedPincode = pincode.replace(/\D/g, "");
    if (!cleanedPincode) {
      newErrors.pincode = "PINCODE is required.";
    } else if (cleanedPincode.length !== 6) {
      newErrors.pincode = "PINCODE must be exactly 6 digits.";
    }

    if (!enquirySource || enquirySource.startsWith("Select"))
      newErrors.enquirySource = "Please select enquiry source.";

    if (!photoFile) {
      newErrors.photo = "Please upload a candidate profile photograph.";
    }

    if (!enteredCaptcha.trim()) {
      newErrors.captcha = "Please enter the verification code.";
    } else if (
      enteredCaptcha.trim().toUpperCase() !== captchaCode.toUpperCase()
    ) {
      newErrors.captcha =
        "Verification code is incorrect. Please try again with the new code.";
      generateCaptcha();
    }

    if (!agreedDeclaration) {
      newErrors.declaration =
        "You must agree to the student declaration to proceed.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const appNum = `SEG-2025-${Math.floor(100000 + Math.random() * 900000)}`;
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newReceipt: RegistrationReceipt = {
        applicationNumber: appNum,
        registrationDate: `${formattedDate} at ${formattedTime}`,
        state: selectedState,
        district: selectedDistrict,
        studyCentre: selectedStudyCentre,
        courseCategory: selectedCategory,
        courseName: selectedCourse,
        session: selectedSession,
        fullName: fullName.trim(),
        fatherName: fatherName.trim(),
        motherName: motherName.trim(),
        dob,
        gender,
        maritalStatus,
        identityType,
        idNumber: idNumber.trim(),
        qualification,
        contactNumber: contactNumber.trim(),
        email: email.trim(),
        address: address.trim(),
        pincode: pincode.trim(),
        enquirySource,
        photoUrl: photoPreview,
        photoFileName,
      };

      try {
        const existing = JSON.parse(
          localStorage.getItem("seg_student_registrations") || "[]"
        );
        existing.unshift(newReceipt);
        localStorage.setItem(
          "seg_student_registrations",
          JSON.stringify(existing)
        );
      } catch (err) {
        console.warn("Storage exception", err);
      }

      setReceipt(newReceipt);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 750);
  };

  const handleReset = () => {
    setReceipt(null);
    setFullName("");
    setFatherName("");
    setMotherName("");
    setDob("");
    setGender("");
    setMaritalStatus("");
    setIdentityType("");
    setIdNumber("");
    setQualification("");
    setContactNumber("");
    setEmail("");
    setAddress("");
    setPincode("");
    setEnquirySource("");
    setPhotoFile(null);
    setPhotoPreview(null);
    setPhotoFileName("");
    setAgreedDeclaration(false);
    setErrors({});
    generateCaptcha();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StudentPortalLayout
      pageTitle="Student Registration"
      pageSubtitle="Begin your learning journey with SEG Academy. Complete the registration form below to enrol in your preferred program."
      activePath="/student-zone/registration"
    >
      {receipt ? (
        /* Acknowledgement Receipt */
        <div className="overflow-hidden rounded-3xl border border-purple-900/15 bg-white shadow-2xl print:shadow-none print:border-none">
          <div className="bg-[#351650] px-6 py-8 text-white sm:px-10 border-b-4 border-[#FF8A24]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <CheckCircle2 className="h-6 w-6 text-[#FF8A24]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/70">
                      SEG Academy Admission Cell
                    </span>
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      Registration Acknowledgement
                    </h2>
                  </div>
                </div>
                <p className="mt-2 text-xs text-white/75 sm:text-sm">
                  Your online application has been successfully submitted and registered in our academic records.
                </p>
              </div>

              <div className="text-left sm:text-right rounded-2xl bg-white/10 p-4 border border-white/15 backdrop-blur-sm">
                <span className="block text-[11px] uppercase tracking-wider text-[#FF8A24] font-bold">
                  Application Reference ID
                </span>
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-white">
                  {receipt.applicationNumber}
                </span>
                <span className="block text-[11px] text-white/70 mt-0.5">
                  Submitted on: {receipt.registrationDate}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8 bg-[#FAF7FC]">
            {/* Candidate Overview Card */}
            <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-purple-900/10 bg-white p-6 shadow-sm">
              {receipt.photoUrl ? (
                <div className="h-28 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-[#351650]/20 shadow-md">
                  <img
                    src={receipt.photoUrl}
                    alt="Candidate Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-28 w-24 shrink-0 rounded-xl bg-[#F7F3FC] border-2 border-dashed border-[#351650]/20 flex items-center justify-center">
                  <User className="h-10 w-10 text-purple-900/40" />
                </div>
              )}

              <div className="flex-1 text-center md:text-left space-y-1">
                <span className="inline-block rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-0.5 border border-emerald-300">
                  STATUS: SUBMITTED (VERIFICATION PENDING)
                </span>
                <h3 className="font-display text-2xl font-bold text-[#351650]">
                  {receipt.fullName}
                </h3>
                <p className="text-sm text-foreground/80">
                  Father: <span className="font-semibold">{receipt.fatherName}</span> | Mother:{" "}
                  <span className="font-semibold">{receipt.motherName}</span>
                </p>
                <p className="text-xs text-foreground/70">
                  DOB: <span className="font-medium">{receipt.dob}</span> • Gender:{" "}
                  <span className="font-medium">{receipt.gender}</span> • Status:{" "}
                  <span className="font-medium">{receipt.maritalStatus}</span>
                </p>
              </div>
            </div>

            {/* Grid Details */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-purple-900/10 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-900/10 pb-2">
                  <MapPin className="h-4 w-4 text-[#FF8A24]" />
                  <h4 className="font-display font-bold text-sm text-[#351650] uppercase tracking-wide">
                    Allotted Study Centre
                  </h4>
                </div>
                <dl className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">State:</dt>
                    <dd className="font-semibold text-foreground">{receipt.state}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">District:</dt>
                    <dd className="font-semibold text-foreground">{receipt.district}</dd>
                  </div>
                  <div className="pt-1 border-t border-dashed border-gray-200">
                    <dt className="text-muted-foreground">Study Centre:</dt>
                    <dd className="font-bold text-[#351650] mt-0.5 leading-snug">
                      {receipt.studyCentre}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-purple-900/10 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-900/10 pb-2">
                  <GraduationCap className="h-4 w-4 text-[#FF8A24]" />
                  <h4 className="font-display font-bold text-sm text-[#351650] uppercase tracking-wide">
                    Course &amp; Academic Session
                  </h4>
                </div>
                <dl className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Category:</dt>
                    <dd className="font-semibold text-foreground">{receipt.courseCategory}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Session:</dt>
                    <dd className="font-bold text-[#FF8A24]">{receipt.session}</dd>
                  </div>
                  <div className="pt-1 border-t border-dashed border-gray-200">
                    <dt className="text-muted-foreground">Enrolled Program:</dt>
                    <dd className="font-bold text-[#351650] mt-0.5 leading-snug">
                      {receipt.courseName}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-purple-900/10 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-900/10 pb-2">
                  <IdCard className="h-4 w-4 text-[#FF8A24]" />
                  <h4 className="font-display font-bold text-sm text-[#351650] uppercase tracking-wide">
                    Identification &amp; Qualification
                  </h4>
                </div>
                <dl className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Identity Document:</dt>
                    <dd className="font-semibold text-foreground">{receipt.identityType}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">ID Number:</dt>
                    <dd className="font-mono font-semibold text-foreground">{receipt.idNumber}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Last Qualification:</dt>
                    <dd className="font-semibold text-foreground">{receipt.qualification}</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-purple-900/10 bg-white p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2 border-b border-purple-900/10 pb-2">
                  <Phone className="h-4 w-4 text-[#FF8A24]" />
                  <h4 className="font-display font-bold text-sm text-[#351650] uppercase tracking-wide">
                    Contact &amp; Address
                  </h4>
                </div>
                <dl className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Contact No:</dt>
                    <dd className="font-semibold text-foreground">+91 {receipt.contactNumber}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Email:</dt>
                    <dd className="font-semibold text-foreground">{receipt.email}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">PINCODE:</dt>
                    <dd className="font-semibold text-foreground">{receipt.pincode}</dd>
                  </div>
                  <div className="pt-1 border-t border-dashed border-gray-200">
                    <dt className="text-muted-foreground">Permanent Address:</dt>
                    <dd className="font-medium text-foreground mt-0.5">{receipt.address}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-5 text-amber-900 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <ShieldCheck className="h-4 w-4 text-amber-700" />
                <span>Next Steps for Registered Students:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-amber-900/90">
                <li>
                  An admission counsellor from your selected study centre will contact you at <strong>+91 {receipt.contactNumber}</strong> within 24 business hours to guide you through batch timings and study materials.
                </li>
                <li>
                  Please carry 2 passport-size photographs and your original identity proof (<strong>{receipt.identityType}</strong>) at the time of campus orientation.
                </li>
                <li>
                  Save or print this acknowledgement slip for your personal records.
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-900/10 print:hidden">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#351650] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#241038] transition-colors cursor-pointer"
                >
                  <Printer className="h-4 w-4" /> Print Acknowledgement
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-xl border border-purple-900/20 bg-white px-5 py-3 text-sm font-semibold text-[#351650] hover:bg-[#F7F3FC] transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" /> Register Another Student
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Form */
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-xl sm:p-10 lg:p-12 space-y-12"
        >
          <div className="rounded-2xl border border-purple-500/20 bg-[#F7F3FC] p-4 sm:p-5 flex items-start gap-3.5">
            <ShieldCheck className="h-6 w-6 text-[#351650] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-foreground/85">
              <span className="font-bold text-[#351650]">
                SEG Academy Verified Admission Form:
              </span>{" "}
              All fields marked with an asterisk (<span className="text-[#FF8A24] font-bold">*</span>) are mandatory. Please provide accurate details matching your government identity documents for admission records.
            </div>
          </div>

          {/* SECTION 1: CHOOSE YOUR LOCATION */}
          <section className="space-y-6">
            <div className="border-b border-purple-900/10 pb-3 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[#351650] text-white flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650]">
                  Choose Your Location
                </h2>
                <p className="text-xs text-muted-foreground">
                  Select your state, district and preferred SEG Academy campus or affiliate center.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5" id="field-state">
                <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>
                    STATE <span className="text-[#FF8A24]">*</span>
                  </span>
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.state ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {locationData.map((item) => (
                    <option key={item.state} value={item.state}>
                      {item.state}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.state}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-district">
                <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>
                    DISTRICT <span className="text-[#FF8A24]">*</span>
                  </span>
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.district ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {availableDistricts.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.district}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5" id="field-studyCentre">
              <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                <span>
                  Select Your Study Centre <span className="text-[#FF8A24]">*</span>
                </span>
              </label>
              <select
                value={selectedStudyCentre}
                onChange={(e) => setSelectedStudyCentre(e.target.value)}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                  errors.studyCentre ? "border-red-500" : "border-[#E5DDF0]"
                }`}
              >
                {availableCentres.length > 0 ? (
                  availableCentres.map((centre) => (
                    <option key={centre} value={centre}>
                      {centre}
                    </option>
                  ))
                ) : (
                  <option value="">No study centre available for this selection</option>
                )}
              </select>
              {errors.studyCentre && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.studyCentre}
                </p>
              )}
              {selectedStudyCentre && (
                <div className="mt-2 rounded-xl bg-[#F7F3FC] px-4 py-2.5 text-xs text-[#351650] border border-purple-500/15 flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-[#FF8A24] shrink-0" />
                  <span>
                    Assigned Campus: <strong className="font-semibold">{selectedStudyCentre}</strong>
                  </span>
                </div>
              )}
            </div>
          </section>

          {/* SECTION 2: CHOOSE YOUR COURSE */}
          <section className="space-y-6">
            <div className="border-b border-purple-900/10 pb-3 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[#351650] text-white flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650]">
                  Choose Your Course
                </h2>
                <p className="text-xs text-muted-foreground">
                  Pick your desired curriculum, program specialization, and academic year session.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-category">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Course Category <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.category ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {courseCategoryData.map((cat) => (
                    <option key={cat.category} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.category}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-course">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Course Name <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.course ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {availableCourses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.course}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-session">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Choose Your Session <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.session ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {sessionOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.session && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.session}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* SECTION 3: PERSONAL INFORMATION */}
          <section className="space-y-6">
            <div className="border-b border-purple-900/10 pb-3 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[#351650] text-white flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650]">
                  Personal Information
                </h2>
                <p className="text-xs text-muted-foreground">
                  Provide verified candidate identity, parentage, contact info, and upload candidate profile picture.
                </p>
              </div>
            </div>

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-fullName">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Your Full Name <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Candidate's full legal name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.fullName ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-fatherName">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Father's Name <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter father's name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.fatherName ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.fatherName && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.fatherName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-motherName">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Mother's Name <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter mother's name"
                  value={motherName}
                  onChange={(e) => setMotherName(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.motherName ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.motherName && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.motherName}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-dob">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Date of Birth <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.dob ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.dob && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.dob}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-gender">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Gender <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.gender ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {genderOptions.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {errors.gender && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.gender}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-maritalStatus">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Marital Status <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.maritalStatus ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {maritalStatusOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                {errors.maritalStatus && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.maritalStatus}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-identityType">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Choose Your Identity Type <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={identityType}
                  onChange={(e) => setIdentityType(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.identityType ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {identityTypeOptions.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
                {errors.identityType && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.identityType}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-idNumber">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Id Number <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12-digit Aadhaar / 10-char PAN"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.idNumber ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.idNumber && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.idNumber}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-qualification">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Last General Qualification <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.qualification ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {qualificationOptions.map((q) => (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
                {errors.qualification && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.qualification}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 4 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-contactNumber">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Contact Number <span className="text-[#FF8A24]">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3.5 text-xs font-bold text-muted-foreground select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength={12}
                    placeholder="10-digit mobile number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className={`w-full rounded-xl border bg-white pl-12 pr-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                      errors.contactNumber ? "border-red-500" : "border-[#E5DDF0]"
                    }`}
                  />
                </div>
                {errors.contactNumber && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.contactNumber}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-email">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Email Account <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="student@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.email ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-address">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Address <span className="text-[#FF8A24]">*</span>
                </label>
                <textarea
                  rows={1}
                  placeholder="House / Flat No., Street, Landmark, City"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.address ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.address && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.address}
                  </p>
                )}
              </div>
            </div>

            {/* ROW 5 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-1.5" id="field-pincode">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  PINCODE <span className="text-[#FF8A24]">*</span>
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="6-digit postal code"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value.replace(/\D/g, ""))
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.pincode ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                />
                {errors.pincode && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.pincode}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-enquirySource">
                <label className="text-xs sm:text-sm font-semibold text-foreground">
                  Enquiry Source <span className="text-[#FF8A24]">*</span>
                </label>
                <select
                  value={enquirySource}
                  onChange={(e) => setEnquirySource(e.target.value)}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                    errors.enquirySource ? "border-red-500" : "border-[#E5DDF0]"
                  }`}
                >
                  {enquirySourceOptions.map((src) => (
                    <option key={src} value={src}>
                      {src}
                    </option>
                  ))}
                </select>
                {errors.enquirySource && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.enquirySource}
                  </p>
                )}
              </div>

              <div className="space-y-1.5" id="field-photo">
                <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>
                    Profile Picture <span className="text-[#FF8A24]">*</span>
                  </span>
                  <span className="text-[11px] text-muted-foreground font-normal">
                    Max 500 KB (JPG, PNG)
                  </span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".jpg,.jpeg,.png,image/jpeg,image/png"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="profile-picture-upload"
                />

                {photoPreview ? (
                  <div className="flex items-center gap-3 rounded-xl border border-purple-500/30 bg-[#F7F3FC] p-2.5">
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-purple-300">
                      <img
                        src={photoPreview}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-[#351650]">
                        {photoFileName}
                      </p>
                      <span className="text-[10px] text-emerald-700 font-medium flex items-center gap-1">
                        <Check className="h-3 w-3" /> Image validated (≤ 500 KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="rounded-lg p-1.5 text-muted-foreground hover:bg-white hover:text-red-600 transition-colors cursor-pointer"
                      title="Remove uploaded photo"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                      errors.photo
                        ? "border-red-400 bg-red-50 text-red-700 hover:bg-red-100"
                        : "border-purple-300/80 bg-[#F7F3FC] text-[#351650] hover:bg-[#EFE7F8] hover:border-[#351650]"
                    }`}
                  >
                    <Upload className="h-4 w-4 text-[#FF8A24]" />
                    <span>Upload Candidate Photograph</span>
                  </button>
                )}

                {errors.photo && (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.photo}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* SECTION 4: VERIFICATION CODE */}
          <section className="space-y-6">
            <div className="border-b border-purple-900/10 pb-3 flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-[#351650] text-white flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650]">
                  VERIFICATION CODE
                </h2>
                <p className="text-xs text-muted-foreground">
                  Security validation: enter the exact characters displayed in the anti-bot verification canvas.
                </p>
              </div>
            </div>

            <div className="max-w-md space-y-3" id="field-captcha">
              <label className="text-xs sm:text-sm font-semibold text-foreground">
                Enter Verification code <span className="text-[#FF8A24]">*</span>
              </label>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative shrink-0 overflow-hidden rounded-xl border-2 border-purple-900/20 shadow-inner bg-white flex items-center justify-center">
                  <canvas
                    ref={canvasRef}
                    className="h-12 w-40 select-none block"
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    title="Generate a new verification code"
                    className="absolute right-1.5 top-1.5 rounded-lg bg-white/80 p-1 text-[#351650] hover:bg-white hover:text-[#FF8A24] shadow-sm transition-colors cursor-pointer"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="flex-1">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Type the 5 code characters"
                    value={enteredCaptcha}
                    onChange={(e) => setEnteredCaptcha(e.target.value)}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-mono tracking-widest uppercase transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                      errors.captcha ? "border-red-500" : "border-[#E5DDF0]"
                    }`}
                  />
                </div>
              </div>

              {errors.captcha && (
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.captcha}
                </p>
              )}
            </div>
          </section>

          {/* SECTION 5: DECLARATION BY STUDENT */}
          <section className="space-y-4 rounded-2xl border border-purple-900/15 bg-[#F7F3FC] p-5 sm:p-6" id="field-declaration">
            <div className="flex items-center gap-2">
              <FileCheck2 className="h-5 w-5 text-[#351650]" />
              <h2 className="font-display text-base sm:text-lg font-bold text-[#351650] uppercase tracking-wide">
                DECLARATION BY STUDENT
              </h2>
            </div>

            <blockquote className="rounded-xl bg-white p-4 text-xs sm:text-sm leading-relaxed text-foreground/80 border-l-4 border-[#351650] italic">
              "I hereby declare that all the above statements are true and correct to the best of my knowledge and belief. I shall obey all the Rules and Regulations of the organization."
            </blockquote>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreedDeclaration}
                  onChange={(e) => setAgreedDeclaration(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-purple-300 text-[#FF8A24] focus:ring-[#FF8A24] cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-semibold text-[#351650] group-hover:text-black transition-colors select-none">
                  I Agree to the above declaration. <span className="text-[#FF8A24]">*</span>
                </span>
              </label>
              {errors.declaration && (
                <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.declaration}
                </p>
              )}
            </div>
          </section>

          {/* REGISTER BUTTON */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-purple-900/10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground text-center sm:text-left">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Secure 256-bit encrypted student admission registry transmission</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FF8A24] px-9 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:bg-[#e67718] hover:shadow-orange-500/35 active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="h-5 w-5 animate-spin" />
                  <span>Processing Application...</span>
                </>
              ) : (
                <>
                  <span>Register Me</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </StudentPortalLayout>
  );
}


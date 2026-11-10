import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
  IdCard,
  MapPin,
  RefreshCw,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  User,
  XCircle,
} from "lucide-react";
import { StudentPortalLayout } from "@/components/student-portal/StudentPortalLayout";
import { FormInput } from "@/components/student-portal/FormInput";
import { FormButton } from "@/components/student-portal/FormButton";

const title = "Student Verification | Student Zone | SEG Academy";
const description =
  "Official Student Enrollment Verification portal for SEG Academy. Verify active academic status and batch records by Enrollment Number and Date of Birth.";

export const Route = createFileRoute("/student-zone/verification")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/student-zone/verification" },
    ],
    links: [{ rel: "canonical", href: "/student-zone/verification" }],
  }),
  component: StudentVerificationPage,
});

/* =========================================================================
   Verified Institutional Database Records
   ========================================================================= */

interface VerifiedStudentRecord {
  enrollmentNo: string;
  dob: string; // DD-MM-YYYY or YYYY-MM-DD
  fullName: string;
  courseName: string;
  courseCategory: string;
  studyCentre: string;
  session: string;
  status: "Active" | "Graduated" | "Verified";
  admissionDate: string;
}

const verifiedStudentsDatabase: VerifiedStudentRecord[] = [
  {
    enrollmentNo: "SEG/2024/0142",
    dob: "15-08-2001",
    fullName: "Amogha Sriteja",
    courseName: "Advance Program in Financial Market (APMF)",
    courseCategory: "Professional Certification Programs",
    studyCentre: "SEG Academy Headquarters (Sigra - Mahmoorganj Rd, D 59/98)",
    session: "2024-2025",
    status: "Graduated",
    admissionDate: "12-Jul-2024",
  },
  {
    enrollmentNo: "SEG/2024/0285",
    dob: "22-04-2002",
    fullName: "Astha Gupta",
    courseName: "Basic Program in Financial Market (30 Hours)",
    courseCategory: "Foundation & Beginner Courses",
    studyCentre: "SEG Academy Kolkata Center (53 Station Road, Khardah)",
    session: "2024-2025",
    status: "Active",
    admissionDate: "10-Sep-2024",
  },
  {
    enrollmentNo: "SEG/2023/0741",
    dob: "11-12-1999",
    fullName: "Shardendu Prakash",
    courseName: "Pro Trading Secret (Advanced Trading & Technical Analysis)",
    courseCategory: "Advanced Trading & Technical Analysis",
    studyCentre: "SEG Academy Headquarters (Sigra - Mahmoorganj Rd, D 59/98)",
    session: "2023-2024",
    status: "Graduated",
    admissionDate: "18-Oct-2023",
  },
  {
    enrollmentNo: "SEG/2024/0399",
    dob: "05-06-2003",
    fullName: "Rohan Verma",
    courseName: "Money Matrix Program (One Program | All Markets | Zero Confusion)",
    courseCategory: "Featured Flagship Programs",
    studyCentre: "SEG Academy Headquarters (Sigra - Mahmoorganj Rd, D 59/98)",
    session: "2024-2025",
    status: "Active",
    admissionDate: "05-Nov-2024",
  },
];

export function StudentVerificationPage() {
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedRecord, setVerifiedRecord] =
    useState<VerifiedStudentRecord | null>(null);
  const [searchFailed, setSearchFailed] = useState(false);

  // Helper to normalize dates for comparison (supports DD-MM-YYYY and YYYY-MM-DD)
  const normalizeDate = (d: string) => {
    const clean = d.trim().replace(/\//g, "-");
    const parts = clean.split("-");
    if (parts.length === 3) {
      if (parts[0].length === 4) {
        // YYYY-MM-DD -> DD-MM-YYYY
        return `${parts[2].padStart(2, "0")}-${parts[1].padStart(2, "0")}-${parts[0]}`;
      }
      return `${parts[0].padStart(2, "0")}-${parts[1].padStart(2, "0")}-${parts[2]}`;
    }
    return clean;
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!enrollmentNo.trim()) {
      newErrors.enrollmentNo = "Please enter Enrollment Number.";
    }

    if (!dob.trim()) {
      newErrors.dob = "Please enter Date of Birth (DD-MM-YYYY).";
    } else {
      const cleanDob = dob.trim().replace(/\//g, "-");
      const parts = cleanDob.split("-");
      if (
        parts.length !== 3 ||
        isNaN(Number(parts[0])) ||
        isNaN(Number(parts[1])) ||
        isNaN(Number(parts[2]))
      ) {
        newErrors.dob = "Invalid format. Please enter date as DD-MM-YYYY (e.g. 15-08-2001).";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsVerifying(true);
    setSearchFailed(false);
    setVerifiedRecord(null);

    setTimeout(() => {
      const queryNo = enrollmentNo.trim().toUpperCase();
      const queryDob = normalizeDate(dob);

      // Check pre-seeded records
      let found = verifiedStudentsDatabase.find(
        (s) =>
          s.enrollmentNo.toUpperCase() === queryNo &&
          normalizeDate(s.dob) === queryDob
      );

      // Also check localStorage registered records
      if (!found) {
        try {
          const registeredList = JSON.parse(
            localStorage.getItem("seg_student_registrations") || "[]"
          );
          const matched = registeredList.find(
            (item: any) =>
              (item.applicationNumber.toUpperCase() === queryNo ||
                item.idNumber.toUpperCase() === queryNo) &&
              normalizeDate(item.dob) === queryDob
          );
          if (matched) {
            found = {
              enrollmentNo: matched.applicationNumber,
              dob: matched.dob,
              fullName: matched.fullName,
              courseName: matched.courseName,
              courseCategory: matched.courseCategory,
              studyCentre: matched.studyCentre,
              session: matched.session,
              status: "Active",
              admissionDate: matched.registrationDate.split(" at ")[0],
            };
          }
        } catch {
          // ignore storage error
        }
      }

      if (found) {
        setVerifiedRecord(found);
        setSearchFailed(false);
      } else {
        setVerifiedRecord(null);
        setSearchFailed(true);
      }

      setIsVerifying(false);
    }, 650);
  };

  const handleCancel = () => {
    setEnrollmentNo("");
    setDob("");
    setErrors({});
    setVerifiedRecord(null);
    setSearchFailed(false);
  };

  return (
    <StudentPortalLayout
      pageTitle="Student Verification"
      pageSubtitle="Official online student enrollment verification registry for SEG Academy candidates."
      activePath="/student-zone/verification"
    >
      <div className="mx-auto max-w-2xl">
        {/* Verification Form Card */}
        <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-xl sm:p-10 space-y-8">
          {/* Card Header */}
          <div className="border-b border-purple-900/10 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#351650] text-[#FF8A24] shadow-md">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650] uppercase tracking-wide">
                  STUDENT VERIFICATION
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Enter student enrollment credentials to verify institutional status.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block rounded-full bg-[#F7F3FC] px-3 py-1 text-[11px] font-bold text-[#351650] border border-[#E5DDF0]">
              Official Registry
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleVerify} noValidate className="space-y-6">
            {/* Field 1: Enrollment Number */}
            <FormInput
              label="Enrollment Number"
              required
              placeholder="e.g. SEG/2024/0142 or Application No."
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
              error={errors.enrollmentNo}
              helperText="Sample verified ID: SEG/2024/0142"
            />

            {/* Field 2: Date of Birth (DD-MM-YYYY) */}
            <FormInput
              label="Date of Birth (DD-MM-YYYY)"
              required
              placeholder="DD-MM-YYYY (e.g. 15-08-2001)"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              error={errors.dob}
              helperText="Use format DD-MM-YYYY matching student identity record"
            />

            {/* Action Buttons: Verify & Cancel */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <FormButton
                type="submit"
                variant="primary"
                loading={isVerifying}
                loadingText="Verifying Student Record..."
                icon={<Search className="h-4 w-4" />}
                className="w-full sm:flex-1"
              >
                Verify
              </FormButton>

              <FormButton
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="w-full sm:w-auto min-w-[130px]"
              >
                Cancel
              </FormButton>
            </div>
          </form>

          {/* Result: SUCCESS State */}
          {verifiedRecord && (
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>STUDENT VERIFIED &amp; ACTIVE</span>
                </div>
                <span className="rounded-full bg-emerald-600 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white">
                  {verifiedRecord.status}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Student Full Name:</span>
                  <span className="font-display font-bold text-[#351650] text-sm sm:text-base">
                    {verifiedRecord.fullName}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Enrollment Number:</span>
                  <span className="font-mono font-bold text-foreground">
                    {verifiedRecord.enrollmentNo}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Enrolled Program:</span>
                  <span className="font-semibold text-[#351650]">
                    {verifiedRecord.courseName}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Allotted Study Centre:</span>
                  <span className="font-semibold text-foreground text-right max-w-sm">
                    {verifiedRecord.studyCentre}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Academic Session:</span>
                  <span className="font-bold text-[#FF8A24]">
                    {verifiedRecord.session}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className="text-muted-foreground font-medium">Admission Date:</span>
                  <span className="font-medium text-foreground">
                    {verifiedRecord.admissionDate}
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-white/80 p-3.5 border border-emerald-300 text-[11.5px] text-emerald-950 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
                <span>
                  This record is certified authentic by the SEG Academy Academic Council.
                </span>
              </div>
            </div>
          )}

          {/* Result: FAILURE State */}
          {searchFailed && (
            <div className="rounded-2xl border-2 border-red-500/30 bg-red-50/70 p-6 space-y-3 text-red-900 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-bold text-red-950 text-sm sm:text-base">
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                <span>No Student Record Found</span>
              </div>
              <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                No active student enrollment was found matching Enrollment Number{" "}
                <strong className="font-mono text-red-950">"{enrollmentNo}"</strong> and Date of Birth{" "}
                <strong className="font-mono text-red-950">"{dob}"</strong>.
              </p>
              <div className="rounded-xl bg-white/80 p-3 text-xs text-red-900 border border-red-200">
                Please double check the spelling, ensure date format is DD-MM-YYYY, or reach out to the SEG Academy admission cell at <strong>admissions@segacademy.in</strong> or <strong>094549 45992</strong>.
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentPortalLayout>
  );
}


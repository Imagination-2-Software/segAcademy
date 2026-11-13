import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  Award,
  Calendar,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Printer,
  RefreshCw,
  Search,
  ShieldCheck,
  User,
  XCircle,
} from "lucide-react";
import { StudentPortalLayout } from "@/components/student-portal/StudentPortalLayout";
import { FormInput } from "@/components/student-portal/FormInput";
import { FormButton } from "@/components/student-portal/FormButton";

const title = "Certificate Verification | Student Zone | SEG Academy";
const description =
  "Official Certificate Verification Portal for SEG Academy. Authenticate course completion certificates and academic credentials.";

export const Route = createFileRoute("/student-zone/certificate-verification")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/student-zone/certificate-verification" },
    ],
    links: [{ rel: "canonical", href: "/student-zone/certificate-verification" }],
  }),
  component: CertificateVerificationPage,
});

/* =========================================================================
   Verified Certificate Registry
   ========================================================================= */

interface CertificateRecord {
  regsnoNo: string;
  candidateName: string;
  courseTitle: string;
  performanceGrade: string;
  issueDate: string;
  accreditedBy: string;
  verificationHash: string;
  studyCenter: string;
}

const verifiedCertificatesDatabase: CertificateRecord[] = [
  {
    regsnoNo: "SEG/CERT/2024/0084",
    candidateName: "Amogha Sriteja",
    courseTitle: "Advance Program in Financial Market (APFM)",
    performanceGrade: "Distinction (Grade A+)",
    issueDate: "18-Dec-2024",
    accreditedBy: "SEG Academy Academic Council • ISO 9001:2015",
    verificationHash: "SHA256:7f9a2e8810b4c8d9e2a1b948",
    studyCenter: "SEG Academy Headquarters (Sigra - Mahmoorganj)",
  },
  {
    regsnoNo: "SEG/CERT/2024/0112",
    candidateName: "Astha Gupta",
    courseTitle: "Basic Program in Financial Market (30-Hour Foundation)",
    performanceGrade: "Grade A",
    issueDate: "12-Nov-2024",
    accreditedBy: "SEG Academy Academic Council • ISO 9001:2015",
    verificationHash: "SHA256:88a1b4d092ef55b7c89104fa",
    studyCenter: "SEG Academy Kolkata Center (Khardah)",
  },
  {
    regsnoNo: "SEG/CERT/2023/0550",
    candidateName: "Shardendu Prakash",
    courseTitle: "Pro Trading Secret (Advanced Technical Analysis Setup)",
    performanceGrade: "Distinction (Grade A+)",
    issueDate: "25-Oct-2023",
    accreditedBy: "SEG Academy Academic Council • DPIIT Recognized",
    verificationHash: "SHA256:4b91ce07f822189a5e80dc91",
    studyCenter: "SEG Academy Headquarters (Sigra - Mahmoorganj)",
  },
  {
    regsnoNo: "SEG/CERT/2024/0204",
    candidateName: "Rohit Sharma",
    courseTitle: "Certified Equity & Derivative Analyst (CEDA)",
    performanceGrade: "Grade A",
    issueDate: "15-Jan-2025",
    accreditedBy: "SEG Academy Academic Council • ISO 9001:2015",
    verificationHash: "SHA256:39a7b008dc68e1fa2419a711",
    studyCenter: "SEG Academy Headquarters (Sigra - Mahmoorganj)",
  },
];

export function CertificateVerificationPage() {
  const [regsnoNo, setRegsnoNo] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [certificateRecord, setCertificateRecord] =
    useState<CertificateRecord | null>(null);
  const [searchFailed, setSearchFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!regsnoNo.trim()) {
      setError("Please enter Regsno No.");
      return;
    }

    setError(null);
    setIsSearching(true);
    setSearchFailed(false);
    setCertificateRecord(null);

    setTimeout(() => {
      const query = regsnoNo.trim().toUpperCase();
      const found = verifiedCertificatesDatabase.find(
        (c) => c.regsnoNo.toUpperCase() === query
      );

      if (found) {
        setCertificateRecord(found);
        setSearchFailed(false);
      } else {
        setCertificateRecord(null);
        setSearchFailed(true);
      }

      setIsSearching(false);
    }, 650);
  };

  const handleCancel = () => {
    setRegsnoNo("");
    setError(null);
    setCertificateRecord(null);
    setSearchFailed(false);
  };

  return (
    <StudentPortalLayout
      pageTitle="Certificate Verification"
      pageSubtitle="Verify the authenticity of graduation certificates and professional market credentials issued by SEG Academy."
      activePath="/student-zone/certificate-verification"
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-xl sm:p-10 space-y-8">
          {/* Card Header */}
          <div className="border-b border-purple-900/10 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#351650] text-[#FF8A24] shadow-md">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650] uppercase tracking-wide">
                  CERTIFICATE VERIFICATION
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Enter certificate registration number to verify authenticity.
                </p>
              </div>
            </div>
            <span className="hidden sm:inline-block rounded-full bg-[#F7F3FC] px-3 py-1 text-[11px] font-bold text-[#351650] border border-[#E5DDF0]">
              Council Registry
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Field: Regsno No. */}
            <FormInput
              label="Regsno No."
              required
              placeholder="e.g. SEG/CERT/2024/0084"
              value={regsnoNo}
              onChange={(e) => {
                setRegsnoNo(e.target.value);
                if (error) setError(null);
              }}
              error={error || undefined}
              helperText="Sample verified certificate: SEG/CERT/2024/0084"
            />

            {/* Action Buttons: Submit & Cancel */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <FormButton
                type="submit"
                variant="primary"
                loading={isSearching}
                loadingText="Verifying Certificate..."
                icon={<Search className="h-4 w-4" />}
                className="w-full sm:flex-1"
              >
                Submit
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
          {certificateRecord && (
            <div className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50/50 p-6 space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>CERTIFICATE VERIFIED &amp; AUTHENTIC</span>
                </div>
                <span className="rounded-full bg-emerald-600 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Candidate Name:</span>
                  <span className="font-display font-bold text-[#351650] text-sm sm:text-base">
                    {certificateRecord.candidateName}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Registration No. (Regsno):</span>
                  <span className="font-mono font-bold text-foreground">
                    {certificateRecord.regsnoNo}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Program Completed:</span>
                  <span className="font-semibold text-[#351650]">
                    {certificateRecord.courseTitle}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Grade / Division:</span>
                  <span className="font-bold text-[#FF8A24]">
                    {certificateRecord.performanceGrade}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Issue Date:</span>
                  <span className="font-medium text-foreground">
                    {certificateRecord.issueDate}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-emerald-200/60">
                  <span className="text-muted-foreground font-medium">Study Centre / Campus:</span>
                  <span className="font-medium text-foreground">
                    {certificateRecord.studyCenter}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between py-1">
                  <span className="text-muted-foreground font-medium">Accreditation:</span>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {certificateRecord.accreditedBy}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-emerald-200">
                <span className="text-[10px] font-mono text-emerald-900/70">
                  {certificateRecord.verificationHash}
                </span>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#351650] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#241038] transition-colors cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" /> Print Verification Slip
                </button>
              </div>
            </div>
          )}

          {/* Result: FAILURE State */}
          {searchFailed && (
            <div className="rounded-2xl border-2 border-red-500/30 bg-red-50/70 p-6 space-y-3 text-red-900 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 font-bold text-red-950 text-sm sm:text-base">
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
                <span>Certificate Not Found</span>
              </div>
              <p className="text-xs sm:text-sm text-red-800 leading-relaxed">
                No verified certificate record was found matching Regsno No.{" "}
                <strong className="font-mono text-red-950">"{regsnoNo}"</strong>.
              </p>
              <div className="rounded-xl bg-white/80 p-3 text-xs text-red-900 border border-red-200">
                Certificates are typically published within 15 working days following final assessment. If you believe this is an error, please contact <strong>certificate.verification@segacademy.in</strong> or call the administrative desk at <strong>094549 45992</strong>.
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentPortalLayout>
  );
}


import React, { useState } from "react";
import {
  Award,
  Calendar,
  Clock,
  MapPin,
  Printer,
  RefreshCw,
  Search,
  ShieldCheck,
  User,
  AlertCircle,
  FileCheck2,
  XCircle,
  Download,
  Building2,
  BookOpen,
} from "lucide-react";
import {
  StudentAdmitCard,
  fetchAdmitCardByRegNo,
} from "./downloadData";

export function AdmitCardForm() {
  const [regsno, setRegsno] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [admitCard, setAdmitCard] = useState<StudentAdmitCard | null>(null);

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanRegNo = regsno.trim();

    if (!cleanRegNo) {
      setError("Please enter your Registration Number.");
      setAdmitCard(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    setAdmitCard(null);

    try {
      const result = await fetchAdmitCardByRegNo(cleanRegNo);
      setIsLoading(false);

      if (result) {
        setAdmitCard(result);
        setError(null);
      } else {
        setAdmitCard(null);
        setError(
          "No admit card found for this registration number. Please verify your details or contact SEG Academy."
        );
      }
    } catch {
      setIsLoading(false);
      setError(
        "A network error occurred while retrieving your admit card. Please try again."
      );
    }
  };

  // Cancel Handler
  const handleCancel = () => {
    setRegsno("");
    setError(null);
    setAdmitCard(null);
  };

  // Printable Admit Card Result View
  if (admitCard) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(53,22,80,0.08)] space-y-8">
        {/* Signature subtle orange ambient glow */}
        <div className="seg-ambient-glow-subtle" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          {/* Top Action Bar (Non-Printable when printing) */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5DDF0] pb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              Official Examination Hall Ticket Verified
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:scale-[1.02] transition-all cursor-pointer"
              >
                <Printer className="h-4 w-4" />
                <span>Print / Download Admit Card</span>
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl border border-[#E5DDF0] bg-white px-4 py-2.5 text-xs font-semibold text-[#351650] hover:bg-[#F7F3FC] transition-colors cursor-pointer"
              >
                Search Another
              </button>
            </div>
          </div>

          {/* Official Admit Card Paper Container */}
          <div
            id="printable-admit-card"
            className="rounded-2xl border-2 border-[#351650] bg-white p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Admit Card Header */}
            <div className="border-b-2 border-[#351650] pb-5 text-center space-y-1.5">
              <div className="inline-block rounded-md bg-[#351650] px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#FF8A24]">
                Skill &amp; Employability Generation Academy
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650] tracking-tight">
                SEG ACADEMY
              </h2>
              <p className="text-xs font-semibold text-[#351650]">
                Institutional Examination Cell • Academic Session {admitCard.batchSession}
              </p>
              <p className="text-[11px] text-muted-foreground">
                ISO 9001:2015 Certified Financial Market Institute • MCA Reg. CIN: U80902UP2021PTC147746
              </p>
              <div className="pt-2">
                <span className="inline-block rounded-full bg-[#F7F3FC] px-4 py-1 font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
                  Official Examination Admit Card / Hall Ticket
                </span>
              </div>
            </div>

            {/* Candidate & Exam Metadata Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
              {/* Left Candidate Details (2 cols) */}
              <div className="sm:col-span-2 space-y-3 text-xs sm:text-sm">
                <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                  <span className="text-muted-foreground font-medium">Registration No.:</span>
                  <strong className="font-mono font-bold text-[#351650]">
                    {admitCard.registrationNo}
                  </strong>
                </div>

                <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                  <span className="text-muted-foreground font-medium">Roll Number:</span>
                  <strong className="font-mono font-extrabold text-[#FF8A24]">
                    {admitCard.rollNo}
                  </strong>
                </div>

                <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                  <span className="text-muted-foreground font-medium">Candidate Name:</span>
                  <strong className="font-bold text-[#351650] uppercase">
                    {admitCard.candidateName}
                  </strong>
                </div>

                {admitCard.fatherName && (
                  <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                    <span className="text-muted-foreground font-medium">Father&apos;s Name:</span>
                    <strong className="text-[#351650]">{admitCard.fatherName}</strong>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                  <span className="text-muted-foreground font-medium">Date of Birth / Gender:</span>
                  <span className="font-semibold text-[#351650]">
                    {admitCard.dob} • {admitCard.gender}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 border-b border-slate-100 pb-2">
                  <span className="text-muted-foreground font-medium">Enrolled Course:</span>
                  <strong className="text-[#351650]">{admitCard.courseName}</strong>
                </div>
              </div>

              {/* Right Candidate Photo & Seal (1 col) */}
              <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-dashed border-[#E5DDF0] bg-[#F7F3FC] text-center space-y-2">
                <div className="h-28 w-24 rounded-lg border-2 border-[#E5DDF0] bg-white flex flex-col items-center justify-center text-muted-foreground shadow-2xs">
                  <User className="h-10 w-10 text-[#351650]/40" />
                  <span className="text-[9px] uppercase font-bold text-muted-foreground mt-1">
                    Photo Verified
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#351650] uppercase">
                  Candidate ID Verified
                </span>
                <span className="font-mono text-[9px] text-muted-foreground truncate max-w-[160px]">
                  {admitCard.verificationHash}
                </span>
              </div>
            </div>

            {/* Exam Schedule & Venue Box */}
            <div className="rounded-xl border border-[#E5DDF0] bg-[#FAF7FC] p-4 sm:p-5 space-y-3">
              <div className="border-b border-[#E5DDF0] pb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A24]">
                  Examination Schedule &amp; Center
                </span>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#351650]">
                  {admitCard.paperTitle}
                </h4>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 text-xs">
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-bold">
                      Exam Date
                    </span>
                    <strong className="text-[#351650]">{admitCard.examDate}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-bold">
                      Timing &amp; Reporting
                    </span>
                    <strong className="text-[#351650]">{admitCard.examTiming}</strong>
                    <span className="block text-[10px] text-amber-700">
                      Reporting: {admitCard.reportingTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 sm:col-span-1">
                  <MapPin className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase font-bold">
                      Exam Center
                    </span>
                    <strong className="text-[#351650] block">{admitCard.examCenter}</strong>
                    <span className="text-[10px] text-muted-foreground leading-tight block mt-0.5">
                      {admitCard.examCenterAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Candidate Rules & Verification Seal */}
            <div className="border-t border-[#E5DDF0] pt-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-[10px] text-muted-foreground">
              <div className="space-y-1 max-w-md">
                <p className="font-bold uppercase tracking-wider text-[#351650]">
                  Important Instructions for Candidate:
                </p>
                <ol className="list-decimal pl-3 space-y-0.5 leading-relaxed">
                  <li>Candidates must carry a printed physical copy of this Admit Card along with a valid Govt. ID (Aadhaar / Voter ID).</li>
                  <li>Entry to the examination lab will close 15 minutes before the scheduled exam start time.</li>
                  <li>No electronic gadgets or unauthorized study materials are permitted inside the terminal room.</li>
                </ol>
              </div>

              <div className="text-center sm:text-right shrink-0 pt-2 sm:pt-0">
                <div className="h-10 w-28 border-b border-slate-400 mx-auto sm:ml-auto flex items-end justify-center pb-1">
                  <span className="text-[9px] font-mono italic text-slate-500">Controller of Exams</span>
                </div>
                <span className="text-[9px] font-bold text-[#351650] uppercase mt-1 block">
                  Academic Head, SEG Academy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(53,22,80,0.06)] max-w-xl mx-auto space-y-6">
      {/* Signature subtle orange ambient glow */}
      <div className="seg-ambient-glow-subtle" aria-hidden="true" />

      {/* Form Container Header */}
      <div className="relative z-10 text-center space-y-2 border-b border-[#E5DDF0] pb-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
          <Award className="h-6 w-6 text-[#FF8A24]" />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650] tracking-tight uppercase">
          Download <span className="seg-gradient-heading">Admit Card</span>
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Enter your official institutional registration number to access your examination hall ticket.
        </p>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} noValidate className="relative z-10 space-y-5">
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold text-[#351650]">
            Registration No. <span className="text-[#FF8A24]">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              name="regsno"
              id="regsno"
              placeholder="Registration No."
              value={regsno}
              onChange={(e) => {
                setRegsno(e.target.value);
                if (error) setError(null);
              }}
              className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-[#351650] font-mono transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] placeholder:font-sans placeholder:text-muted-foreground ${
                error ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
          </div>
          <p className="text-[11px] text-muted-foreground">
            Sample format: <code className="font-mono text-[#351650] font-bold">SEG/2024/0142</code> or <code className="font-mono text-[#351650] font-bold">SEG/2024/0285</code>
          </p>
        </div>

        {/* Error Feedback Message */}
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-3.5 text-xs text-red-700 flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
            <span className="leading-relaxed">{error}</span>
          </div>
        )}

        {/* Buttons Strip: Submit & Cancel */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_12px_36px_-8px_rgba(245,130,32,0.65)] hover:shadow-[0_16px_48px_-6px_rgba(245,130,32,0.85)] hover:scale-[1.02] transition-all disabled:opacity-60 cursor-pointer"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Fetching your admit card...</span>
              </>
            ) : (
              <>
                <span>Submit</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto rounded-full border border-[#E5DDF0] bg-white px-6 py-3.5 text-sm font-semibold text-[#351650] hover:bg-[#F7F3FC] transition-colors cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Security & Help Footer */}
      <div className="relative z-10 pt-4 border-t border-[#E5DDF0] text-center text-xs text-muted-foreground space-y-1">
        <p>
          Need assistance with your registration credentials?
        </p>
        <p>
          Call the SEG Academy Student Desk at{" "}
          <strong className="text-[#351650]">094549 45992</strong> or visit the Mahmoorganj campus.
        </p>
      </div>
    </div>
  );
}


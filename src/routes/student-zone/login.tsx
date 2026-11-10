import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  AlertCircle,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  EyeOff,
  GraduationCap,
  KeyRound,
  Lock,
  LogIn,
  LogOut,
  Phone,
  ShieldCheck,
  User,
  Video,
} from "lucide-react";
import { StudentPortalLayout } from "@/components/student-portal/StudentPortalLayout";
import { FormButton } from "@/components/student-portal/FormButton";

const title = "Student Login | Student Zone | SEG Academy";
const description =
  "Official Student Learning Portal login for SEG Academy students. Access course curriculum, batch schedules, lecture recordings, and study notes.";

export const Route = createFileRoute("/student-zone/login")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/student-zone/login" },
    ],
    links: [{ rel: "canonical", href: "/student-zone/login" }],
  }),
  component: StudentLoginPage,
});

export function StudentLoginPage() {
  const [registrationNo, setRegistrationNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggedInStudent, setLoggedInStudent] = useState<{
    registrationNo: string;
    studentName: string;
    courseName: string;
    batchTiming: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!registrationNo.trim()) {
      newErrors.registrationNo = "Registration No. is required.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    if (!validate()) return;

    setIsLoading(true);

    setTimeout(() => {
      const reg = registrationNo.trim().toUpperCase();

      // Check registered students in localStorage or demo credentials
      let studentName = "SEG Academy Student";
      let course = "Advance Program in Financial Market (APMF)";

      try {
        const stored = JSON.parse(
          localStorage.getItem("seg_student_registrations") || "[]"
        );
        const match = stored.find(
          (s: any) =>
            s.applicationNumber.toUpperCase() === reg ||
            s.idNumber.toUpperCase() === reg
        );
        if (match) {
          studentName = match.fullName;
          course = match.courseName;
        }
      } catch {
        // ignore
      }

      // Demo credential checks or valid format
      if (
        reg.startsWith("SEG") ||
        reg.includes("2024") ||
        reg.includes("2025") ||
        password === "Student@123"
      ) {
        setLoggedInStudent({
          registrationNo: reg,
          studentName: studentName || "Aditya Sharma",
          courseName: course,
          batchTiming: "Batch B3: Mon - Fri | 10:00 AM - 12:30 PM",
        });
        setLoginError(null);
      } else {
        setLoginError(
          "Invalid Registration No. or password. Please verify your credentials or check with the SEG Academy student coordinator."
        );
      }

      setIsLoading(false);
    }, 600);
  };

  const handleCancel = () => {
    setRegistrationNo("");
    setPassword("");
    setErrors({});
    setLoginError(null);
  };

  const handleLogout = () => {
    setLoggedInStudent(null);
    setRegistrationNo("");
    setPassword("");
    setLoginError(null);
  };

  return (
    <StudentPortalLayout
      pageTitle="Student Login"
      pageSubtitle="Sign in to your SEG Academy student learning dashboard to access batch materials, live terminals, and mock test exams."
      activePath="/student-zone/login"
    >
      <div className="mx-auto max-w-xl">
        {loggedInStudent ? (
          /* =============================================================
             LOGGED-IN DASHBOARD VIEW
             ============================================================= */
          <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-xl sm:p-10 space-y-8 animate-in fade-in duration-300">
            {/* Header */}
            <div className="border-b border-purple-900/10 pb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#351650] text-[#FF8A24] shadow-md">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                    Active Session
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650]">
                    Welcome, {loggedInStudent.studentName}
                  </h2>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700 hover:bg-red-100 transition-colors cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </div>

            {/* Student Info Card */}
            <div className="rounded-2xl bg-[#F7F3FC] p-5 border border-[#E5DDF0] space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-muted-foreground font-medium">Registration ID:</span>
                <span className="font-mono font-bold text-[#351650]">
                  {loggedInStudent.registrationNo}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-muted-foreground font-medium">Course:</span>
                <span className="font-semibold text-foreground text-right">
                  {loggedInStudent.courseName}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-muted-foreground font-medium">Batch Timing:</span>
                <span className="font-semibold text-[#FF8A24] text-right">
                  {loggedInStudent.batchTiming}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://www.segacademy.in/download.php"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-purple-900/10 bg-white p-4 shadow-sm hover:border-[#FF8A24] hover:shadow-md transition-all group"
              >
                <div className="h-9 w-9 rounded-lg bg-[#351650]/10 flex items-center justify-center text-[#351650] group-hover:bg-[#FF8A24] group-hover:text-white transition-colors">
                  <Download className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#351650]">
                    Study Materials
                  </h4>
                  <p className="text-[11px] text-muted-foreground">Download notes &amp; slides</p>
                </div>
              </a>

              <a
                href="https://www.segacademy.in/page.php?id=TXpZdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-purple-900/10 bg-white p-4 shadow-sm hover:border-[#FF8A24] hover:shadow-md transition-all group"
              >
                <div className="h-9 w-9 rounded-lg bg-[#351650]/10 flex items-center justify-center text-[#351650] group-hover:bg-[#FF8A24] group-hover:text-white transition-colors">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#351650]">
                    Online Mock Test
                  </h4>
                  <p className="text-[11px] text-muted-foreground">Practice chapter exams</p>
                </div>
              </a>
            </div>

            {/* Help Callout */}
            <div className="rounded-xl border border-purple-200 bg-[#FAF7FC] p-4 text-xs text-muted-foreground flex items-center justify-between">
              <span>Need academic assistance or batch rescheduling?</span>
              <span className="font-bold text-[#351650]">094549 45992</span>
            </div>
          </div>
        ) : (
          /* =============================================================
             LOGIN FORM VIEW
             ============================================================= */
          <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-xl sm:p-10 space-y-8">
            {/* Form Header */}
            <div className="border-b border-purple-900/10 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#351650] text-[#FF8A24] shadow-md">
                  <LogIn className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#351650] uppercase tracking-wide">
                    STUDENT LOGIN
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Authorized access for enrolled SEG Academy students.
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-[#F7F3FC] px-3 py-1 text-[11px] font-bold text-[#351650] border border-[#E5DDF0]">
                Student Portal
              </span>
            </div>

            {/* Global Error Banner */}
            {loginError && (
              <div className="rounded-2xl border-2 border-red-500/30 bg-red-50 p-4 text-xs text-red-900 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">{loginError}</div>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} noValidate className="space-y-6">
              {/* Field 1: Registration No. */}
              <div className="space-y-1.5" id="field-registrationNo">
                <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>
                    Registration No. <span className="text-[#FF8A24]">*</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. SEG2025 or Application ID"
                    value={registrationNo}
                    onChange={(e) => setRegistrationNo(e.target.value)}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-foreground transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                      errors.registrationNo ? "border-red-500" : "border-[#E5DDF0]"
                    }`}
                  />
                </div>
                {errors.registrationNo ? (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.registrationNo}
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Demo student ID: <strong className="text-[#351650]">SEG2025</strong>
                  </p>
                )}
              </div>

              {/* Field 2: Password */}
              <div className="space-y-1.5" id="field-password">
                <label className="text-xs sm:text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>
                    Password <span className="text-[#FF8A24]">*</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your student password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full rounded-xl border bg-white pl-4 pr-11 py-3 text-sm text-foreground transition-all outline-none focus:ring-2 focus:ring-[#351650]/20 focus:border-[#351650] ${
                      errors.password ? "border-red-500" : "border-[#E5DDF0]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-[#351650] transition-colors p-1 cursor-pointer"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {errors.password ? (
                  <p className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.password}
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Demo password: <strong className="text-[#351650]">Student@123</strong>
                  </p>
                )}
              </div>

              {/* Action Buttons: Submit & Cancel */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <FormButton
                  type="submit"
                  variant="primary"
                  loading={isLoading}
                  loadingText="Signing In..."
                  icon={<LogIn className="h-4 w-4" />}
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

              {/* Assistance Footer */}
              <div className="pt-4 border-t border-purple-900/10 text-center space-y-1 text-xs text-muted-foreground">
                <p>
                  Forgot your password or haven't received initial login credentials?
                </p>
                <p className="font-semibold text-[#351650]">
                  Contact SEG Academy Support:{" "}
                  <a href="tel:09454945992" className="text-[#FF8A24] hover:underline">
                    094549 45992
                  </a>{" "}
                  /{" "}
                  <a href="tel:09616051355" className="text-[#FF8A24] hover:underline">
                    096160 51355
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </StudentPortalLayout>
  );
}


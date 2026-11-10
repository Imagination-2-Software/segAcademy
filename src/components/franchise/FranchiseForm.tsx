import React, { useState, useEffect, useRef } from "react";
import {
  User,
  Building2,
  MapPin,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  Printer,
  FileCheck2,
} from "lucide-react";
import {
  indianStates,
  saveFranchiseEnquiry,
  FranchiseEnquirySubmission,
} from "./franchiseData";

export function FranchiseForm() {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    gender: "Male",
    organizationDetails: "",
    addressLocation: "",
    addressBlock: "",
    state: "Uttar Pradesh",
    district: "",
    pincode: "",
  });

  // CAPTCHA State
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [receipt, setReceipt] = useState<FranchiseEnquirySubmission | null>(null);

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
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

  // Render CAPTCHA on Canvas
  useEffect(() => {
    if (!canvasRef.current || !captchaCode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 160;
    const height = 48;
    canvas.width = width;
    canvas.height = height;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#F7F3FC");
    gradient.addColorStop(0.5, "#EAE0F5");
    gradient.addColorStop(1, "#F3EBF9");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative distortion lines
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.bezierCurveTo(
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height,
        Math.random() * width,
        Math.random() * height
      );
      ctx.strokeStyle = `rgba(255, 122, 0, ${0.15 + Math.random() * 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 28; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1.5,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(53, 22, 80, 0.25)";
      ctx.fill();
    }

    // Render Characters with slight jitter
    ctx.font = "bold 24px 'Courier New', monospace";
    ctx.textBaseline = "middle";
    for (let i = 0; i < captchaCode.length; i++) {
      ctx.save();
      const x = 20 + i * 26;
      const y = height / 2;
      const angle = (Math.random() - 0.5) * 0.35;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = i % 2 === 0 ? "#351650" : "#FF791F";
      ctx.fillText(captchaCode[i], -10, 0);
      ctx.restore();
    }
  }, [captchaCode]);

  // Input change handler
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Indian Mobile Validation (10 digits)
    const mobileDigits = formData.mobile.replace(/\D/g, "");
    if (!mobileDigits) {
      newErrors.mobile = "Mobile number is required";
    } else if (mobileDigits.length !== 10) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Organization Details
    if (!formData.organizationDetails.trim()) {
      newErrors.organizationDetails = "Organization details are required";
    }

    // Address
    if (!formData.addressLocation.trim()) {
      newErrors.addressLocation = "Address village/area/location is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.district.trim()) {
      newErrors.district = "District is required";
    }

    // Pincode (6 digits)
    const pincodeDigits = formData.pincode.replace(/\D/g, "");
    if (!pincodeDigits) {
      newErrors.pincode = "Pincode is required";
    } else if (pincodeDigits.length !== 6) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    // Captcha validation
    if (!enteredCaptcha.trim()) {
      newErrors.captcha = "Please enter the verification code";
    } else if (
      enteredCaptcha.trim().toUpperCase() !== captchaCode.toUpperCase()
    ) {
      newErrors.captcha = "Verification code did not match. Please try again";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to the first error field smoothly
      const firstKey = Object.keys(newErrors)[0];
      const el = document.getElementById(`field-${firstKey}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return false;
    }

    return true;
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate reliable backend processing
    setTimeout(() => {
      const savedRecord = saveFranchiseEnquiry(formData);
      setIsSubmitting(false);
      setReceipt(savedRecord);
    }, 700);
  };

  // Reset for another submission
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      gender: "Male",
      organizationDetails: "",
      addressLocation: "",
      addressBlock: "",
      state: "Uttar Pradesh",
      district: "",
      pincode: "",
    });
    setReceipt(null);
    generateCaptcha();
    setErrors({});
  };

  // Confirmation / Receipt View
  if (receipt) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(53,22,80,0.08)]">
        <div className="seg-ambient-glow-subtle" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm border border-emerald-200">
            <CheckCircle2 className="h-9 w-9" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 border border-emerald-200">
              Application Submitted Successfully
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#351650]">
              Thank You for Your <span className="seg-gradient-heading">Partnership</span> Interest
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Your official franchise enquiry has been recorded with the SEG Academy Directorate. Our institutional expansion team will evaluate your profile and contact you within 24 to 48 business hours.
            </p>
          </div>

          {/* Acknowledgement Slip */}
          <div className="text-left rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E5DDF0] pb-4">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-[#351650]/60">
                  Enquiry Reference Code
                </p>
                <p className="font-mono text-lg font-extrabold text-[#FF8A24]">
                  {receipt.id}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase font-bold tracking-wider text-[#351650]/60">
                  Date of Submission
                </p>
                <p className="text-xs font-semibold text-[#351650]">
                  {new Date(receipt.submittedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
              <div>
                <span className="text-[#351650]/60 font-medium">Applicant Name:</span>{" "}
                <strong className="text-[#351650]">{receipt.firstName} {receipt.lastName}</strong>
              </div>
              <div>
                <span className="text-[#351650]/60 font-medium">Gender:</span>{" "}
                <strong className="text-[#351650]">{receipt.gender}</strong>
              </div>
              <div>
                <span className="text-[#351650]/60 font-medium">Mobile:</span>{" "}
                <strong className="text-[#351650]">+91 {receipt.mobile}</strong>
              </div>
              <div>
                <span className="text-[#351650]/60 font-medium">Email:</span>{" "}
                <strong className="text-[#351650]">{receipt.email}</strong>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#351650]/60 font-medium">Organization:</span>{" "}
                <strong className="text-[#351650]">{receipt.organizationDetails}</strong>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#351650]/60 font-medium">Location:</span>{" "}
                <strong className="text-[#351650]">
                  {receipt.addressLocation}
                  {receipt.addressBlock ? `, Block: ${receipt.addressBlock}` : ""},{" "}
                  {receipt.district}, {receipt.state} - {receipt.pincode}
                </strong>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5DDF0] bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#351650] hover:bg-[#F7F3FC] transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="h-4 w-4 text-[#FF8A24]" />
              <span>Print Acknowledgement</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Submit Another Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(53,22,80,0.06)] space-y-10"
    >
      {/* Signature subtle orange ambient glow in background */}
      <div className="seg-ambient-glow-subtle" aria-hidden="true" />

      {/* Top Banner Notice */}
      <div className="relative z-10 border-b border-[#E5DDF0] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
            Official Partnership Desk
          </span>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
            Franchise Application &amp; Association <span className="seg-gradient-heading">Form</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Please fill out all the mandatory fields below accurately. All submissions are reviewed directly by the SEG Academy administrative directorate.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3.5 py-1.5 text-xs font-medium text-[#351650] border border-[#E5DDF0]">
          <ShieldCheck className="h-4 w-4 text-[#FF8A24]" />
          <span>Strict Privacy &amp; Data Protection</span>
        </div>
      </div>

      {/* =========================================================================
          SECTION A: PERSONAL INFORMATION
         ========================================================================= */}
      <section className="relative z-10 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#E5DDF0] pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#FF8A24] border border-[#E5DDF0]">
            <User className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#351650] uppercase tracking-wide">
              A. Personal Information
            </h3>
            <p className="text-xs text-muted-foreground">
              Contact credentials of the primary authorized applicant
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Field 1: First Name */}
          <div id="field-firstName" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Your First Name <span className="text-[#FF8A24]">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g. Ramesh"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.firstName ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
            {errors.firstName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.firstName}
              </p>
            )}
          </div>

          {/* Field 2: Last Name */}
          <div id="field-lastName" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Your Last Name <span className="text-[#FF8A24]">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="e.g. Sharma"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.lastName ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
            {errors.lastName && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.lastName}
              </p>
            )}
          </div>

          {/* Field 3: Mobile Number */}
          <div id="field-mobile" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Mobile Number <span className="text-[#FF8A24]">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground select-none">
                +91
              </span>
              <input
                type="tel"
                name="mobile"
                maxLength={10}
                placeholder="10-digit mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`w-full rounded-xl border bg-white pl-12 pr-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                  errors.mobile ? "border-red-500" : "border-[#E5DDF0]"
                }`}
              />
            </div>
            {errors.mobile && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.mobile}
              </p>
            )}
          </div>

          {/* Field 4: Email Account */}
          <div id="field-email" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Email Account <span className="text-[#FF8A24]">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="email"
                name="email"
                placeholder="e.g. contact@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full rounded-xl border bg-white pl-10 pr-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                  errors.email ? "border-red-500" : "border-[#E5DDF0]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
              </p>
            )}
          </div>

          {/* Field 5: Gender */}
          <div id="field-gender" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Gender <span className="text-[#FF8A24]">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-[#E5DDF0] bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24]"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION B: ORGANIZATION INFORMATION
         ========================================================================= */}
      <section className="relative z-10 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#E5DDF0] pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#FF8A24] border border-[#E5DDF0]">
            <Building2 className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#351650] uppercase tracking-wide">
              B. Organization Information
            </h3>
            <p className="text-xs text-muted-foreground">
              Institutional entity, business profile, educational background, or infrastructure status
            </p>
          </div>
        </div>

        <div id="field-organizationDetails" className="space-y-1.5">
          <label className="text-xs sm:text-sm font-semibold text-[#351650]">
            Organization Details <span className="text-[#FF8A24]">*</span>
          </label>
          <textarea
            name="organizationDetails"
            rows={3}
            placeholder="Please provide the name of your organization / institute / existing coaching center, available carpet area, number of computers / terminals, and current business background..."
            value={formData.organizationDetails}
            onChange={handleInputChange}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
              errors.organizationDetails ? "border-red-500" : "border-[#E5DDF0]"
            }`}
          />
          {errors.organizationDetails && (
            <p className="text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3.5 w-3.5" /> {errors.organizationDetails}
            </p>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION C: CONTACT INFORMATION
         ========================================================================= */}
      <section className="relative z-10 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#E5DDF0] pb-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#FF8A24] border border-[#E5DDF0]">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#351650] uppercase tracking-wide">
              C. Contact Information
            </h3>
            <p className="text-xs text-muted-foreground">
              Proposed center location, postal address, and verification security code
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Field 1: Address Village/Area/Location */}
          <div id="field-addressLocation" className="sm:col-span-2 space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Address Village/Area/Location <span className="text-[#FF8A24]">*</span>
            </label>
            <input
              type="text"
              name="addressLocation"
              placeholder="e.g. 1st Floor, City Center Mall, Main Market Road"
              value={formData.addressLocation}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.addressLocation ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
            {errors.addressLocation && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.addressLocation}
              </p>
            )}
          </div>

          {/* Field 2: Address Block */}
          <div id="field-addressBlock" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Address Block
            </label>
            <input
              type="text"
              name="addressBlock"
              placeholder="e.g. Block A / Tehsil / Zone"
              value={formData.addressBlock}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-[#E5DDF0] bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24]"
            />
          </div>

          {/* Field 3: State */}
          <div id="field-state" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              State <span className="text-[#FF8A24]">*</span>
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.state ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            >
              {indianStates.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.state}
              </p>
            )}
          </div>

          {/* Field 4: District */}
          <div id="field-district" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              District <span className="text-[#FF8A24]">*</span>
            </label>
            <input
              type="text"
              name="district"
              placeholder="e.g. Varanasi, Patna, Kolkata"
              value={formData.district}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.district ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
            {errors.district && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.district}
              </p>
            )}
          </div>

          {/* Field 5: Pincode */}
          <div id="field-pincode" className="space-y-1.5">
            <label className="text-xs sm:text-sm font-semibold text-[#351650]">
              Pincode <span className="text-[#FF8A24]">*</span>
            </label>
            <input
              type="text"
              name="pincode"
              maxLength={6}
              placeholder="6-digit postal code"
              value={formData.pincode}
              onChange={handleInputChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
                errors.pincode ? "border-red-500" : "border-[#E5DDF0]"
              }`}
            />
            {errors.pincode && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.pincode}
              </p>
            )}
          </div>
        </div>

        {/* Field 6: Verification Code (CAPTCHA) */}
        <div id="field-captcha" className="pt-2 max-w-md space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-[#351650]">
            Enter Verification Code <span className="text-[#FF8A24]">*</span>
          </label>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative shrink-0 overflow-hidden rounded-xl border-2 border-purple-900/15 shadow-inner bg-white flex items-center justify-center">
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
                placeholder="Enter 5-character code"
                maxLength={5}
                value={enteredCaptcha}
                onChange={(e) => setEnteredCaptcha(e.target.value)}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-sm font-mono tracking-widest uppercase transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] ${
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

      {/* Global Error Banner */}
      {Object.keys(errors).length > 0 && (
        <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-700 flex items-start gap-2">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            Please review the highlighted fields above and ensure all required information is entered accurately before submitting.
          </span>
        </div>
      )}

      {/* Submit Action Strip */}
      <div className="relative z-10 pt-4 border-t border-[#E5DDF0] flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground text-center sm:text-left">
          By clicking <strong>REGISTER ME</strong>, you authorize SEG Academy to contact you via telephone, WhatsApp or email regarding franchise opportunities.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-10 py-4 text-sm font-bold text-white shadow-[0_12px_36px_-8px_rgba(245,130,32,0.65)] hover:shadow-[0_16px_48px_-6px_rgba(245,130,32,0.85)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>PROCESSING APPLICATION...</span>
            </>
          ) : (
            <>
              <span>REGISTER ME</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}


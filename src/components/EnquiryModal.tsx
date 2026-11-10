import React, { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { brand } from "@/data/seg";

interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  enquiryFor: string;
}

interface SubmittedEnquiry extends EnquiryFormData {
  id: string;
  createdAt: string;
}

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedEnquiry | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const [form, setForm] = useState<EnquiryFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    enquiryFor: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // 1. Automatic 5-second delay popup (only once per session)
  useEffect(() => {
    // Check if already shown during this browser session
    try {
      const hasSeen = sessionStorage.getItem("seg_enquiry_popup_seen");
      if (hasSeen) return;
    } catch {
      // Ignore storage restrictions
    }

    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem("seg_enquiry_popup_seen")) {
          sessionStorage.setItem("seg_enquiry_popup_seen", "true");
          previousFocusRef.current = document.activeElement as HTMLElement;
          setIsOpen(true);
        }
      } catch {
        setIsOpen(true);
      }
    }, 5000);

    // Support manual trigger via custom event
    const handleManualOpen = () => {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setIsOpen(true);
    };
    window.addEventListener("open-seg-enquiry-modal", handleManualOpen);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-seg-enquiry-modal", handleManualOpen);
    };
  }, []);

  // 2. Lock background scroll & handle focus when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus first input after animation
      const focusTimer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 150);
      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      if (previousFocusRef.current) {
        previousFocusRef.current.focus?.();
      }
    }
  }, [isOpen]);

  // 3. Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen so closing never triggers it again in this session
    try {
      sessionStorage.setItem("seg_enquiry_popup_seen", "true");
    } catch {}
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    // 1. Name validation
    if (!form.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 3. Phone validation (Indian 10-digit mobile)
    const cleanPhone = form.phone.replace(/[\s\-\+]/g, "").replace(/^91/, "").replace(/^0/, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    // 4. Address validation
    if (!form.address.trim()) {
      newErrors.address = "Please enter your city or address.";
    }

    // 5. Enquiry For validation
    if (!form.enquiryFor.trim()) {
      newErrors.enquiryFor = "Please tell us what you're interested in.";
    } else if (form.enquiryFor.trim().length < 5) {
      newErrors.enquiryFor = "Please provide at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Build submitted object
      const cleanPhone = form.phone.replace(/[\s\-\+]/g, "").replace(/^91/, "").replace(/^0/, "");
      const newEnquiry: SubmittedEnquiry = {
        id: `ENQ-2025-${Math.floor(10000 + Math.random() * 90000)}`,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: cleanPhone,
        address: form.address.trim(),
        enquiryFor: form.enquiryFor.trim(),
        createdAt: new Date().toISOString(),
      };

      // Persist to localStorage
      try {
        const stored = JSON.parse(localStorage.getItem("seg_enquiries") || "[]");
        stored.push(newEnquiry);
        localStorage.setItem("seg_enquiries", JSON.stringify(stored));
      } catch (storageErr) {
        console.warn("Storage warning:", storageErr);
      }

      // Smooth simulated latency for backend receipt
      await new Promise((resolve) => setTimeout(resolve, 650));

      setSubmittedData(newEnquiry);
      setIsSuccess(true);
    } catch (err) {
      console.error("Enquiry submission error:", err);
      setGeneralError("An error occurred while submitting your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      {/* 1. Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-[#0c0418]/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* 2. Modal Dialog Container (Max width ~760px) */}
      <div
        ref={modalRef}
        className="relative w-full max-w-[760px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5DDF0] bg-white shadow-[0_25px_60px_-15px_rgba(53,22,80,0.25)] transition-all duration-300 animate-in fade-in zoom-in-95 my-auto z-10"
      >
        {/* Close Button (X) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close enquiry popup"
          className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7F3FC] text-[#351650] hover:bg-[#FF8A24] hover:text-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#FF8A24] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {isSuccess && submittedData ? (
          /* =============================================================
             SUCCESS STATE PANEL
             ============================================================= */
          <div className="p-8 sm:p-12 text-center bg-white">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F3FC] border-2 border-[#FF8A24] text-[#FF8A24] shadow-md">
              <CheckCircle2 className="h-9 w-9 text-[#FF8A24]" />
            </div>

            <div className="mt-5 max-w-md mx-auto">
              <span className="rounded-full bg-[#FF8A24]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30">
                Enquiry Received • Ref: {submittedData.id}
              </span>

              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                Thank You for Contacting SEG Academy!
              </h2>

              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                Thank you for contacting SEG Academy! Our admissions and academic counselling team will get in touch with you shortly.
              </p>

              <div className="mt-6 rounded-2xl bg-[#F7F3FC] p-4 text-left border border-[#E5DDF0] text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Full Name:</span>
                  <span className="font-semibold text-[#351650]">{submittedData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mobile Contact:</span>
                  <span className="font-semibold text-[#351650]">{submittedData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-semibold text-[#351650]">{submittedData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">City / Address:</span>
                  <span className="font-semibold text-[#351650]">{submittedData.address}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#351650] px-7 py-3 text-sm font-bold text-white shadow-md hover:bg-[#241038] transition-colors cursor-pointer"
                >
                  <span>Close Window</span>
                </button>
                <a
                  href={`tel:${brand.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5DDF0] bg-white px-5 py-3 text-sm font-semibold text-[#351650] hover:bg-[#F7F3FC] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#FF8A24]" />
                  <span>Call Us: {brand.phone}</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* =============================================================
             TWO-PANEL CORPORATE LIGHT THEME FORM
             ============================================================= */
          <div className="grid md:grid-cols-[280px_1fr]">
            {/* LEFT AREA: Light Lavender Branding & Features Panel */}
            <div className="bg-[#F7F3FC] p-6 sm:p-7 border-b md:border-b-0 md:border-r border-[#E5DDF0] flex flex-col justify-between">
              <div>
                {/* Brand Mark */}
                <div className="flex items-center gap-2.5">
                  <img
                    src="/seg-mark.png"
                    alt="SEG Academy"
                    className="h-9 w-auto shrink-0"
                  />
                  <div className="leading-none">
                    <span className="font-display text-base font-bold text-[#351650]">
                      SEG<span className="text-[#FF8A24]"> Academy</span>
                    </span>
                    <span className="block text-[9px] uppercase tracking-wider text-[#351650]/60 mt-0.5 font-medium">
                      Est. 2017 • Varanasi
                    </span>
                  </div>
                </div>

                {/* Left Heading & Supporting Copy */}
                <div className="mt-6">
                  <span className="inline-block rounded-full bg-[#FF8A24]/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30">
                    Quick Consultation
                  </span>
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-extrabold text-[#351650] leading-tight">
                    Let&apos;s Connect
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#351650]/80">
                    Have questions about our programs? Our team is here to help you.
                  </p>
                </div>

                {/* Academic Highlights List */}
                <div className="mt-6 space-y-3.5 hidden sm:block">
                  <div className="flex items-start gap-2.5 text-xs text-[#351650]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E5DDF0] text-[#FF8A24]">
                      <GraduationCap className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-bold block leading-tight">Course Counselling</span>
                      <span className="text-[11px] text-muted-foreground">Find the ideal program for your trading goals</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#351650]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E5DDF0] text-[#FF8A24]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-bold block leading-tight">Live Trading Lab</span>
                      <span className="text-[11px] text-muted-foreground">Hands-on terminal sessions in Varanasi</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-[#351650]">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E5DDF0] text-[#FF8A24]">
                      <Clock className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <span className="font-bold block leading-tight">Fast Response</span>
                      <span className="text-[11px] text-muted-foreground">We typically connect within a few hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Campus Support Line */}
              <div className="mt-6 pt-4 border-t border-[#E5DDF0] text-xs text-[#351650]">
                <div className="flex items-center gap-1.5 font-semibold">
                  <Phone className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>Direct Desk:</span>
                  <a href={`tel:${brand.phone}`} className="text-[#FF8A24] hover:underline">
                    {brand.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT AREA: White Form Panel */}
            <div className="p-6 sm:p-7 bg-white">
              <div>
                <h2
                  id="enquiry-modal-title"
                  className="font-display text-xl sm:text-2xl font-extrabold text-[#351650]"
                >
                  Enquiry Form
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Share your details and we&apos;ll get in touch with you.
                </p>
              </div>

              {generalError && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                  <span>{generalError}</span>
                </div>
              )}

              {/* Form Grid */}
              <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3.5">
                {/* Row 1: Name | Email */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {/* 1. Name */}
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-semibold text-[#351650]"
                    >
                      Name <span className="text-[#FF8A24]">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="enquiry-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                          : "border-[#E5DDF0] focus:border-[#FF8A24] focus:ring-[#FF8A24]/15"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* 2. Email */}
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-email"
                      className="block text-xs font-semibold text-[#351650]"
                    >
                      Email <span className="text-[#FF8A24]">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                          : "border-[#E5DDF0] focus:border-[#FF8A24] focus:ring-[#FF8A24]/15"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Contact No. | Address */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {/* 3. Contact No. */}
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-semibold text-[#351650]"
                    >
                      Contact No. <span className="text-[#FF8A24]">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                          : "border-[#E5DDF0] focus:border-[#FF8A24] focus:ring-[#FF8A24]/15"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* 4. Address */}
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-address"
                      className="block text-xs font-semibold text-[#351650]"
                    >
                      Address <span className="text-[#FF8A24]">*</span>
                    </label>
                    <input
                      id="enquiry-address"
                      name="address"
                      type="text"
                      placeholder="Enter your city or address"
                      value={form.address}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground/60 transition-all focus:outline-none focus:ring-2 ${
                        errors.address
                          ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                          : "border-[#E5DDF0] focus:border-[#FF8A24] focus:ring-[#FF8A24]/15"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3 shrink-0" /> {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: 5. Enquiry For (Multi-line textarea) */}
                <div className="space-y-1">
                  <label
                    htmlFor="enquiry-for"
                    className="block text-xs font-semibold text-[#351650]"
                  >
                    Enquiry For <span className="text-[#FF8A24]">*</span>
                  </label>
                  <textarea
                    id="enquiry-for"
                    name="enquiryFor"
                    rows={3}
                    placeholder="Tell us what you're interested in"
                    value={form.enquiryFor}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-white px-3 py-2 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground/60 transition-all resize-none focus:outline-none focus:ring-2 ${
                      errors.enquiryFor
                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                        : "border-[#E5DDF0] focus:border-[#FF8A24] focus:ring-[#FF8A24]/15"
                    }`}
                  />
                  {errors.enquiryFor && (
                    <p className="text-[11px] font-medium text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 shrink-0" /> {errors.enquiryFor}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A24] to-[#E05F00] px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#e67718] hover:to-[#c85200] hover:shadow-orange-500/35 active:scale-[0.99] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry →</span>
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-[10px] text-center text-muted-foreground">
                    Your details are safe. We respect your privacy and never spam.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


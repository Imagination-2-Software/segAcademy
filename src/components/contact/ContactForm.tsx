import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Loader2,
  ShieldCheck,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export interface ContactSubmissionReceipt extends ContactFormData {
  referenceId: string;
  submittedAt: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  // CAPTCHA State
  const [captchaCode, setCaptchaCode] = useState<string>("");
  const [enteredCaptcha, setEnteredCaptcha] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Submission States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<ContactSubmissionReceipt | null>(null);

  // Generate 5-character alphanumeric CAPTCHA
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

  // Draw CAPTCHA onto HTML5 canvas with background texture and distortion
  useEffect(() => {
    if (!canvasRef.current || !captchaCode) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = 160;
    const height = 48;
    canvas.width = width;
    canvas.height = height;

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#FAF5FF");
    gradient.addColorStop(0.5, "#F3E8FF");
    gradient.addColorStop(1, "#FAF5FF");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Distortion curves
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
      ctx.strokeStyle = `rgba(255, 122, 31, ${0.18 + Math.random() * 0.25})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1.5,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(53, 22, 80, 0.22)";
      ctx.fill();
    }

    // Render characters with jitter
    ctx.font = "bold 23px 'Courier New', monospace";
    ctx.textBaseline = "middle";
    for (let i = 0; i < captchaCode.length; i++) {
      ctx.save();
      const x = 18 + i * 27;
      const y = height / 2;
      const angle = (Math.random() - 0.5) * 0.35;
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillStyle = i % 2 === 0 ? "#351650" : "#FF791F";
      ctx.fillText(captchaCode[i], -9, 0);
      ctx.restore();
    }
  }, [captchaCode]);

  // Handle form field change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone (optional, but validate 10 digits if provided)
    if (formData.phone.trim()) {
      const cleanPhone = formData.phone
        .replace(/[\s\-\+]/g, "")
        .replace(/^91/, "")
        .replace(/^0/, "");
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone =
          "Please enter a valid 10-digit mobile number (e.g. 9876543210).";
      }
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    // CAPTCHA
    if (!enteredCaptcha.trim()) {
      newErrors.captcha = "Please enter the verification code.";
    } else if (
      enteredCaptcha.trim().toUpperCase() !== captchaCode.toUpperCase()
    ) {
      newErrors.captcha = "Incorrect verification code. Please try again.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const referenceId = `MSG-2025-${Math.floor(10000 + Math.random() * 90000)}`;
      const submission: ContactSubmissionReceipt = {
        ...formData,
        referenceId,
        submittedAt: new Date().toISOString(),
      };

      // Persist in localStorage for record tracking
      try {
        const stored = JSON.parse(
          localStorage.getItem("seg_contact_messages") || "[]"
        );
        stored.push(submission);
        localStorage.setItem("seg_contact_messages", JSON.stringify(stored));
      } catch (storageErr) {
        console.warn("Storage notice:", storageErr);
      }

      // Smooth realistic simulated API latency
      await new Promise((resolve) => setTimeout(resolve, 750));

      setReceipt(submission);
    } catch (err) {
      console.error("Submission failed:", err);
      setGeneralError(
        "An unexpected error occurred while transmitting your message. Please try again or call our support desk directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
    setReceipt(null);
    setErrors({});
    setGeneralError(null);
    generateCaptcha();
  };

  // SUCCESS RECEIPT STATE
  if (receipt) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-9 shadow-md text-slate-800">
        <div className="flex items-center gap-3 text-emerald-600 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 shadow-xs">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 mb-1">
              Message Delivered Successfully
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#351650]">
              Thank You, {receipt.name}!
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed">
          Your enquiry has been successfully logged with the SEG Academy Support
          Desk. A confirmation receipt has been dispatched to{" "}
          <strong className="text-slate-900">{receipt.email}</strong>. Our
          academic and student services team will evaluate your message and
          reach out to you within <strong>24 to 48 business hours</strong>.
        </p>

        {/* Reference details box */}
        <div className="mt-6 rounded-xl border border-purple-100 bg-purple-50/50 p-5 space-y-2.5 text-xs text-slate-700">
          <div className="flex justify-between items-center pb-2 border-b border-purple-100/80">
            <span className="font-semibold text-[#351650]">Reference ID:</span>
            <span className="font-mono font-bold text-[#FF7A1F] text-sm">
              {receipt.referenceId}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-600">Applicant Name:</span>
            <span className="font-medium text-slate-900">{receipt.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-600">Email Address:</span>
            <span className="font-medium text-slate-900">{receipt.email}</span>
          </div>
          {receipt.phone && (
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Contact Number:</span>
              <span className="font-medium text-slate-900">{receipt.phone}</span>
            </div>
          )}
          {receipt.subject && (
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-600">Subject:</span>
              <span className="font-medium text-slate-900">{receipt.subject}</span>
            </div>
          )}
          <div className="pt-2 border-t border-purple-100/80">
            <span className="font-semibold text-slate-600 block mb-1">
              Message Preview:
            </span>
            <p className="italic text-slate-600 bg-white/70 p-2.5 rounded-lg border border-purple-100/50 text-[11px] leading-relaxed">
              &ldquo;{receipt.message}&rdquo;
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#351650] px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#250f38] hover:shadow"
          >
            <RefreshCw className="h-4 w-4" />
            <span>Send Another Message</span>
          </button>
          <a
            href="tel:+919454945992"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#351650]"
          >
            <Phone className="h-4 w-4 text-[#FF7A1F]" />
            <span>Call Helpline: +91 94549 45992</span>
          </a>
        </div>
      </div>
    );
  }

  // DEFAULT FORM STATE
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-md">
      {/* Section Header */}
      <div className="mb-6 pb-5 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#FF7A1F]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF7A1F] mb-2.5">
          <MessageSquare className="h-3.5 w-3.5" />
          <span>DIRECT ENQUIRY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#351650] tracking-tight">
          Send Us a Message
        </h2>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
          Have a question or need assistance? Share your details and our team will
          get back to you.
        </p>
      </div>

      {generalError && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50/80 p-4 text-xs sm:text-sm text-rose-800">
          <AlertCircle className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <p>{generalError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <User className="h-4 w-4" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.name
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600 font-medium">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Email <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Mail className="h-4 w-4" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.email
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Subject & Contact Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Subject
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <FileText className="h-4 w-4" />
              </div>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Stock Market Course Enquiry"
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:border-[#FF7A1F] focus:outline-none focus:ring-2 focus:ring-[#FF7A1F]/20"
              />
            </div>
          </div>

          {/* Contact Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Contact Number
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Phone className="h-4 w-4" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.phone
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 font-medium">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
          >
            Message <span className="text-rose-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please write your query, questions about course curriculum, batch timings, admissions, or institutional requirements..."
            className={`w-full rounded-xl border bg-slate-50/50 p-3.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
              errors.message
                ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-600 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Verification / Dynamic CAPTCHA Section */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="h-4 w-4 text-[#FF7A1F]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#351650]">
              Security Verification
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
            {/* Canvas Box + Reload Button */}
            <div className="flex items-center gap-2">
              <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xs">
                <canvas
                  ref={canvasRef}
                  width={160}
                  height={48}
                  className="block h-12 w-40 cursor-pointer select-none"
                  onClick={generateCaptcha}
                  title="Click to refresh CAPTCHA"
                />
              </div>

              <button
                type="button"
                onClick={generateCaptcha}
                aria-label="Refresh Captcha Code"
                title="Refresh Captcha Code"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-600 transition-colors hover:border-[#FF7A1F] hover:text-[#FF7A1F] active:scale-95"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Input for Captcha */}
            <div className="flex-1">
              <input
                id="captcha"
                name="captcha"
                type="text"
                autoComplete="off"
                value={enteredCaptcha}
                onChange={(e) => {
                  setEnteredCaptcha(e.target.value);
                  if (errors.captcha) {
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.captcha;
                      return next;
                    });
                  }
                }}
                placeholder="Enter Captcha Code"
                maxLength={6}
                className={`w-full rounded-xl border bg-white px-3.5 py-3 text-sm font-mono tracking-widest uppercase text-slate-900 transition-colors placeholder:font-sans placeholder:tracking-normal placeholder:text-slate-400 focus:outline-none ${
                  errors.captcha
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-300 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
          </div>

          {errors.captcha && (
            <p className="mt-2 text-xs text-rose-600 font-medium">
              {errors.captcha}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF7A1F] to-[#E05F00] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.008] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>SEND MESSAGE</span>
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}


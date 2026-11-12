import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Briefcase,
  GraduationCap,
  Building2,
  Phone,
  User,
  Calendar,
  Send,
  Sparkles,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CareersFormData {
  name: string;
  phone: string;
  degree: string;
  college: string;
  year: string;
  segment: "Internship" | "Trainer" | "Operations" | "";
}

export function CareersModal({ isOpen, onClose }: CareersModalProps) {
  const [formData, setFormData] = useState<CareersFormData>({
    name: "",
    phone: "",
    degree: "",
    college: "",
    year: "Final Year",
    segment: "Internship",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CareersFormData, string>>>({});
  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus first input when opened & lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 150);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof CareersFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof CareersFormData];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CareersFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "").replace(/^91/, "").replace(/^0/, "");
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.degree.trim()) {
      newErrors.degree = "Please enter your degree / course.";
    }

    if (!formData.college.trim()) {
      newErrors.college = "Please enter your college name.";
    }

    if (!formData.year.trim()) {
      newErrors.year = "Please select your year.";
    }

    if (!formData.segment) {
      newErrors.segment = "Please select a segment.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, "").replace(/^91/, "").replace(/^0/, "");
    const name = formData.name.trim();
    const degree = formData.degree.trim();
    const year = formData.year.trim();
    const college = formData.college.trim();
    const segment = formData.segment;

    // Formatted WhatsApp message:
    // "Hello, SEG Academy, My name is + name + "I am pursuing" +degree+ year+ "from" + college + , "I am interested in the" + domain+ "segment in your organizatoion. My phone number is this "
    const message = `Hello, SEG Academy, My name is ${name}. I am pursuing ${degree} ${year} from ${college}, I am interested in the ${segment} segment in your organization. My phone number is ${cleanPhone}.`;

    // Persist to localStorage for record keeping
    try {
      const records = JSON.parse(localStorage.getItem("seg_careers_enquiries") || "[]");
      records.push({
        name,
        phone: cleanPhone,
        degree,
        year,
        college,
        segment,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("seg_careers_enquiries", JSON.stringify(records));
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    // WhatsApp URL: +91 94549 45992
    const whatsappUrl = `https://wa.me/919454945992?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new browser tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Close the popup modal
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="careers-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
      >
        {/* Header with SEG Purple Gradient & Ambient Glow */}
        <div className="relative bg-[#1c0b2b] px-6 py-5 sm:px-8 sm:py-6 text-white border-b border-purple-500/20 overflow-hidden">
          {/* Subtle Ambient Orange Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF8A24]/20 blur-2xl"
          />

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-[#FF8A24] border border-white/15 backdrop-blur-xs mb-2">
                <Briefcase className="h-3 w-3" />
                <span>Careers & Internship Application</span>
                <Sparkles className="h-2.5 w-2.5 text-amber-300" />
              </div>
              <h2
                id="careers-modal-title"
                className="text-xl sm:text-2xl font-black tracking-tight text-white"
              >
                Apply to{" "}
                <span className="bg-gradient-to-r from-[#FF7A1F] via-[#FFAE34] to-[#FF7A1F] bg-clip-text text-transparent">
                  SEG Academy
                </span>
              </h2>
              <p className="mt-1 text-xs text-slate-300">
                Provide your details below to connect directly with our hiring desk via WhatsApp.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Name Field */}
          <div>
            <label
              htmlFor="careers-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Full Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <User className="h-4 w-4" />
              </div>
              <input
                ref={nameInputRef}
                id="careers-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.name
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{errors.name}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="careers-phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              Phone Number <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Phone className="h-4 w-4" />
              </div>
              <input
                id="careers-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 98765 43210"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.phone
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone}</p>
            )}
          </div>

          {/* Degree & Year (2 Columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Degree */}
            <div>
              <label
                htmlFor="careers-degree"
                className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
              >
                Degree / Course <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <GraduationCap className="h-4 w-4" />
                </div>
                <input
                  id="careers-degree"
                  name="degree"
                  type="text"
                  value={formData.degree}
                  onChange={handleChange}
                  placeholder="e.g. B.Com, BBA, B.Tech"
                  className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                    errors.degree
                      ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                  }`}
                />
              </div>
              {errors.degree && (
                <p className="mt-1 text-xs text-rose-600 font-medium">{errors.degree}</p>
              )}
            </div>

            {/* Year */}
            <div>
              <label
                htmlFor="careers-year"
                className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
              >
                Year <span className="text-rose-600">*</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <select
                  id="careers-year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors focus:bg-white focus:outline-none ${
                    errors.year
                      ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                  }`}
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="Final Year">Final Year</option>
                  <option value="Passout / Graduate">Passout / Graduate</option>
                </select>
              </div>
              {errors.year && (
                <p className="mt-1 text-xs text-rose-600 font-medium">{errors.year}</p>
              )}
            </div>
          </div>

          {/* College Name Field */}
          <div>
            <label
              htmlFor="careers-college"
              className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-1.5"
            >
              College Name <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400">
                <Building2 className="h-4 w-4" />
              </div>
              <input
                id="careers-college"
                name="college"
                type="text"
                value={formData.college}
                onChange={handleChange}
                placeholder="e.g. Banaras Hindu University (BHU)"
                className={`w-full rounded-xl border bg-slate-50/50 pl-10 pr-4 py-2.5 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:bg-white focus:outline-none ${
                  errors.college
                    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                    : "border-slate-200 focus:border-[#FF7A1F] focus:ring-2 focus:ring-[#FF7A1F]/20"
                }`}
              />
            </div>
            {errors.college && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{errors.college}</p>
            )}
          </div>

          {/* Segment (Internship, Trainer, Operations) */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#351650] mb-2">
              Interested Segment <span className="text-rose-600">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["Internship", "Trainer", "Operations"] as const).map((seg) => {
                const isSelected = formData.segment === seg;
                return (
                  <button
                    key={seg}
                    type="button"
                    onClick={() => {
                      setFormData((p) => ({ ...p, segment: seg }));
                      if (errors.segment) {
                        setErrors((p) => {
                          const n = { ...p };
                          delete n.segment;
                          return n;
                        });
                      }
                    }}
                    className={`flex flex-col items-center justify-center rounded-xl p-3 border text-center transition-all ${
                      isSelected
                        ? "border-[#351650] bg-[#351650] text-white shadow-xs font-bold"
                        : "border-slate-200 bg-slate-50/70 text-slate-700 hover:bg-slate-100 font-medium"
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{seg}</span>
                  </button>
                );
              })}
            </div>
            {errors.segment && (
              <p className="mt-1 text-xs text-rose-600 font-medium">{errors.segment}</p>
            )}
          </div>

          {/* Preview / WhatsApp Notice */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 flex items-start gap-2.5 text-xs text-emerald-900">
            <MessageCircle className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
            <p className="leading-relaxed">
              Clicking <strong>Send</strong> will open WhatsApp with your pre-filled details to contact our official careers desk at <strong>+91 94549 45992</strong>.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-lg hover:shadow-emerald-600/30 active:scale-[0.99]"
            >
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

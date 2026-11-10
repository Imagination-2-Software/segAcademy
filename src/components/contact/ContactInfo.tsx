import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  PhoneCall,
  Clock,
  Compass,
  ArrowUpRight,
} from "lucide-react";

export function ContactInfo() {
  const mapsEmbedUrl =
    "https://www.google.com/maps?q=SEG+Academy+D+59%2F98+Sigra+Mahmoorganj+Varanasi+Uttar+Pradesh+221002&output=embed";

  const getDirectionsUrl =
    "https://www.google.com/maps/search/?api=1&query=SEG+Academy+D+59%2F98+Sigra+Mahmoorganj+Varanasi+Uttar+Pradesh+221002";

  return (
    <div className="space-y-6 sm:space-y-7">
      {/* 1. Main Contact Information Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-md">
        {/* Header */}
        <div className="mb-6 pb-5 border-b border-slate-100">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#351650]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#351650] mb-2.5">
            <Compass className="h-3.5 w-3.5 text-[#FF7A1F]" />
            <span>INSTITUTE HEADQUARTERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#351650] tracking-tight">
            CONTACT INFO
          </h2>
          <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
            Welcome to SEG Academy. We are glad to have you around.
          </p>
        </div>

        {/* Contact Details List */}
        <div className="space-y-5">
          {/* Phone Numbers */}
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF7A1F] border border-orange-200/60 shadow-2xs mt-0.5">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#351650]">
                Phone
              </span>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-900">
                <a
                  href="tel:+919454945992"
                  className="transition-colors hover:text-[#FF7A1F]"
                >
                  +91 94549 45992
                </a>
                <span className="text-slate-300 font-normal">|</span>
                <a
                  href="tel:+919616051355"
                  className="transition-colors hover:text-[#FF7A1F]"
                >
                  +91 96160 51355
                </a>
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Direct Academic & Admissions Helpline (Mon–Sat, 9 AM – 7 PM)
              </span>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#351650] border border-purple-200/60 shadow-2xs mt-0.5">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#351650]">
                Email
              </span>
              <a
                href="mailto:info@segacademy.com"
                className="mt-1 block text-sm font-semibold text-slate-900 transition-colors hover:text-[#FF7A1F]"
              >
                info@segacademy.com
              </a>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Official enquiries, support & university tie-ups
              </span>
            </div>
          </div>

          {/* Official Location */}
          <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF7A1F] border border-orange-200/60 shadow-2xs mt-0.5">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#351650]">
                Location
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                SEG Academy
              </p>
              <address className="not-italic mt-0.5 text-xs text-slate-600 leading-relaxed">
                3rd Floor, Sampoorna, D 59/98, Sigra - Mahmoorganj Road,
                <br />
                Near Punjab National Bank ATM, Mahmoorganj,
                <br />
                Varanasi, Uttar Pradesh 221002.
              </address>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 shadow-2xs mt-0.5">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#351650]">
                Trading Lab & Campus Hours
              </span>
              <p className="mt-1 text-xs text-slate-700 font-medium">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Live Market Hours: 9:15 AM – 3:30 PM (Sunday Closed)
              </span>
            </div>
          </div>
        </div>

        {/* 2. Embedded Google Map */}
        <div className="mt-7 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#351650]">
              Campus Map & Location
            </span>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
              Verified Head Office
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm bg-slate-100">
            <iframe
              src={mapsEmbedUrl}
              title="SEG Academy Varanasi Campus Map"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[280px] sm:h-[320px]"
            />
          </div>

          {/* GET DIRECTIONS Button */}
          <div className="mt-4">
            <a
              href={getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#351650] bg-[#351650] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#250f38] hover:border-[#250f38] hover:shadow"
            >
              <span>GET DIRECTIONS</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Additional Contact Option Cards (Call Us, Email Us, Find Us) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Card 1: Call Us */}
        <a
          href="tel:+919454945992"
          className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all duration-200 hover:border-[#FF7A1F] hover:shadow-md hover:-translate-y-0.5"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-[#FF7A1F] transition-colors group-hover:bg-[#FF7A1F] group-hover:text-white mb-2.5">
              <PhoneCall className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#351650] group-hover:text-[#FF7A1F] transition-colors">
              Call Us
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-snug">
              Speak directly with our academic team.
            </p>
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#FF7A1F]">
            Dial +91 94549 45992 <ExternalLink className="h-3 w-3" />
          </span>
        </a>

        {/* Card 2: Email Us */}
        <a
          href="mailto:info@segacademy.com"
          className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all duration-200 hover:border-[#351650] hover:shadow-md hover:-translate-y-0.5"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-[#351650] transition-colors group-hover:bg-[#351650] group-hover:text-white mb-2.5">
              <Mail className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#351650] group-hover:text-purple-700 transition-colors">
              Email Us
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-snug">
              Send your questions through email.
            </p>
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#351650]">
            info@segacademy.com <ExternalLink className="h-3 w-3" />
          </span>
        </a>

        {/* Card 3: Find Us */}
        <a
          href={getDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all duration-200 hover:border-emerald-500 hover:shadow-md hover:-translate-y-0.5"
        >
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white mb-2.5">
              <MapPin className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold text-[#351650] group-hover:text-emerald-700 transition-colors">
              Find Us
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-snug">
              Visit SEG Academy at our Varanasi location.
            </p>
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
            Open in Maps <ExternalLink className="h-3 w-3" />
          </span>
        </a>
      </div>
    </div>
  );
}


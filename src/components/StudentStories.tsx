import { useState, useRef } from "react";
import { Star, ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { testimonials, rating, type Testimonial } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

function GoogleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Testimonial }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-[#F8F9FE] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:border-[#1e1b4b]/30 hover:shadow-md">
      <div>
        {/* Top Badges: 5 Golden Stars + Google Verified Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star
                key={s}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-2xs border border-slate-200/60">
            <GoogleIcon className="h-3.5 w-3.5" />
            <span>Google Review</span>
          </div>
        </div>

        {/* Review Quote Text */}
        <p className="mt-5 text-[14px] sm:text-[15px] leading-relaxed text-slate-800 line-clamp-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Reviewer Profile at the Bottom */}
      <div className="mt-6 flex items-center gap-3.5 border-t border-slate-200/70 pt-4">
        {/* Circular Avatar with white ring */}
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-white font-display text-sm font-bold text-white shadow-xs"
          style={{ backgroundColor: review.avatarBg }}
        >
          {review.avatarText}
        </div>

        {/* Reviewer Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="truncate font-display text-[15px] font-bold text-slate-900">
              {review.name}
            </h4>
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
          </div>
          <p className="truncate text-xs text-slate-600 sm:text-[13px]">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function StudentStories() {
  // Mobile single-card state (strictly no auto-movement, purely manual buttons)
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevMobileReview = () => {
    setMobileIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextMobileReview = () => {
    setMobileIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextMobileReview();
      } else {
        prevMobileReview();
      }
    }
    touchStartX.current = null;
  };

  const currentMobileReview = testimonials[mobileIndex];
  const mobileFormatted = String(mobileIndex + 1).padStart(2, "0");
  const totalFormatted = String(testimonials.length).padStart(2, "0");

  return (
    <section id="reviews" className="bg-white py-18 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-semibold text-amber-800 border border-amber-200/60 mb-3">
                <GoogleIcon className="h-3.5 w-3.5" />
                <span>Verified Google Reviews • {rating.score} Rating ({rating.reviews}+ Reviews)</span>
              </div>
            </Reveal>
            <Reveal delay={40}>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Student Stories &amp; Real Reviews
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-2 text-sm text-slate-600 sm:text-base max-w-2xl">
                Real feedback from learners across Varanasi, Eastern UP, and all over India who built practical trading skills with SEG Academy.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="shrink-0">
            <a
              href={rating.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs hover:bg-slate-50 hover:border-slate-400 transition-all"
            >
              <GoogleIcon className="h-4 w-4" />
              <span>Read All on Google</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500" />
            </a>
          </Reveal>
        </div>
      </div>

      {/* DESKTOP & TABLET: Smooth Continuous Right-to-Left Flow, Stops on Hover */}
      <div className="hidden md:block relative w-full overflow-hidden reviews-marquee-container pt-2 pb-4">
        {/* Soft edge gradient masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 lg:w-40 z-10 bg-gradient-to-r from-white via-white/80 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 lg:w-40 z-10 bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        {/* Marquee Track: Seamless 18 duplicated reviews (36 total), pauses on hover */}
        <div className="animate-reviews-marquee gap-6 px-4">
          {/* Group 1: 18 reviews */}
          {testimonials.map((review) => (
            <div
              key={`grp1-${review.id}`}
              className="w-[360px] lg:w-[410px] shrink-0 select-none cursor-pointer"
            >
              <ReviewCard review={review} />
            </div>
          ))}

          {/* Group 2 (duplicate for seamless loop): 18 reviews */}
          {testimonials.map((review) => (
            <div
              key={`grp2-${review.id}`}
              className="w-[360px] lg:w-[410px] shrink-0 select-none cursor-pointer"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE UI: Strictly NO auto-movement. Exactly ONE card visible with arrow buttons below */}
      <div className="block md:hidden px-5">
        <div
          className="w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <ReviewCard review={currentMobileReview} />
        </div>

        {/* Arrow Navigation Buttons Directly Below the Card */}
        <div className="mt-6 flex items-center justify-center gap-5">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={prevMobileReview}
            aria-label="Previous review"
            className="flex h-12 w-20 items-center justify-center rounded-full border border-[#1e1b4b] bg-white text-[#1e1b4b] shadow-2xs transition-all active:scale-95 hover:bg-slate-50 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          {/* Review Counter */}
          <span className="min-w-[65px] text-center font-display text-sm font-bold text-[#1e1b4b]">
            {mobileFormatted} / {totalFormatted}
          </span>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={nextMobileReview}
            aria-label="Next review"
            className="flex h-12 w-20 items-center justify-center rounded-full bg-[#1e1b4b] text-white shadow-2xs transition-all active:scale-95 hover:bg-[#2d2963] cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

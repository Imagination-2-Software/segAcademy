import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Clock,
  MonitorSmartphone,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { courses, type Course } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

export function CourseCard({
  course,
  onSelect,
}: {
  course: Course;
  onSelect: () => void;
}) {
  const isFeatured = course.id === "money-matrix";

  return (
    <article
      onClick={onSelect}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-lift cursor-pointer"
    >
      {/* Official Portrait Course Poster Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-3xl bg-[#0b0318] p-2 flex items-center justify-center border-b border-border/40">
        <img
          src={course.image}
          alt={`${course.fullName || course.name} - Official course poster at SEG Academy`}
          width={600}
          height={750}
          loading="lazy"
          className="h-full w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
              isFeatured
                ? "border border-gold/40 bg-gold/15 text-gold-strong"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {course.level}
          </span>
          {course.duration && (
            <span className="text-xs font-bold text-gold-strong">
              {course.duration}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl font-bold text-ink">{course.name}</h3>
        {course.fullName && (
          <p
            className={`text-xs font-medium ${
              isFeatured ? "font-semibold text-gold-strong" : "text-brand"
            }`}
          >
            {course.fullName}
          </p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MonitorSmartphone className="h-3.5 w-3.5" /> {course.mode}
          </span>
          {course.trainer ? (
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />{" "}
              {course.trainer.name} ({course.trainer.credentials[0]})
            </span>
          ) : course.duration ? (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {course.duration}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Structured Cohort
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`mt-6 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
            isFeatured
              ? "bg-gold text-ink shadow-sm hover:bg-gold-strong"
              : "bg-gold/15 text-gold-strong hover:bg-gold hover:text-ink shadow-2xs"
          }`}
        >
          Explore Course
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
}

export function CourseGrid() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isAnimatingRef = useRef(false);

  // Touch swipe support on mobile
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Responsive dimension and step calculation
  const updateDimensions = () => {
    if (!viewportRef.current) return;
    const width = viewportRef.current.clientWidth;
    let count = 1;
    if (width >= 1024) {
      count = 3;
    } else if (width >= 640) {
      count = 2;
    }
    setVisibleCount(count);

    const gap = 24; // gap-6 is 24px
    const computedCardWidth = (width - gap * (count - 1)) / count;
    setCardStep(computedCardWidth + gap);

    // Keep index clamped within bounds on window resize
    const maxIdx = Math.max(0, courses.length - count);
    setCurrentIndex((prev) => Math.min(prev, maxIdx));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxIndex = Math.max(0, courses.length - visibleCount);

  const handlePrev = () => {
    if (isAnimatingRef.current || currentIndex <= 0) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  const handleNext = () => {
    if (isAnimatingRef.current || currentIndex >= maxIndex) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 500);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const swipeThreshold = 45;
    if (touchDeltaX.current < -swipeThreshold) {
      handleNext();
    } else if (touchDeltaX.current > swipeThreshold) {
      handlePrev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const translateX = currentIndex * cardStep;

  return (
    <section id="courses" className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            Explore Our Featured Courses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Build your understanding of financial markets through structured learning designed for
            every stage of your journey.
          </p>
        </Reveal>

        {/* Carousel Container with Left and Right Side Arrow Buttons */}
        <div className="relative mt-12 sm:mt-16 px-6 sm:px-14 lg:px-16">
          {/* Left Side Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex <= 0}
            aria-label="Previous courses slide"
            className={`group absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-border bg-card/95 text-ink shadow-lift backdrop-blur-md transition-all duration-200 ${
              currentIndex <= 0
                ? "opacity-35 cursor-not-allowed pointer-events-none"
                : "hover:border-gold hover:bg-gold hover:text-ink hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronLeft className="h-6 w-6 stroke-[2.2] transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* Smooth Sliding Track Viewport */}
          <div
            ref={viewportRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="overflow-hidden py-4 px-1"
          >
            <div
              style={{
                transform: `translate3d(-${translateX}px, 0, 0)`,
                transition: prefersReducedMotion
                  ? "none"
                  : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              className="flex gap-6 will-change-transform"
            >
              {courses.map((c) => (
                <div
                  key={c.id}
                  className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <CourseCard course={c} onSelect={() => setSelectedCourse(c)} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next courses slide"
            className={`group absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-border bg-card/95 text-ink shadow-lift backdrop-blur-md transition-all duration-200 ${
              currentIndex >= maxIndex
                ? "opacity-35 cursor-not-allowed pointer-events-none"
                : "hover:border-gold hover:bg-gold hover:text-ink hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronRight className="h-6 w-6 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Pagination Indicator Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-brand"
                  : "w-2.5 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Course Core Modules & Enrollment Modal Popup */}
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </section>
  );
}

// Course Core Modules & Enrollment Popup Modal Dialog
export function CourseModal({
  course,
  onClose,
}: {
  course: Course | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (course) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  if (!course) return null;

  const handleEnrollWhatsApp = () => {
    // Pre-written message format: "Hello, SEG Academy. I am Interested in " + courseName + ". Please tell me more about this."
    const message = `Hello, SEG Academy. I am Interested in ${course.name}. Please tell me more about this.`;
    const whatsappUrl = `https://wa.me/919454945992?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-card border border-border p-6 sm:p-7 shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close course details"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 flex h-9 w-9 items-center justify-center rounded-full bg-sand hover:bg-sand/80 text-muted-foreground hover:text-ink transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-strong">
            <Sparkles className="h-3 w-3" /> {course.level}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            <MonitorSmartphone className="h-3 w-3" /> {course.mode}
          </span>
          {course.duration && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink">
              <Clock className="h-3 w-3" /> {course.duration}
            </span>
          )}
        </div>

        {/* Course Title & Subtitle */}
        <h3 id="course-modal-title" className="mt-3.5 font-display text-2xl font-bold text-ink sm:text-3xl">
          {course.name}
        </h3>
        {course.fullName && (
          <p className="mt-1 text-sm font-semibold text-brand">
            {course.fullName}
          </p>
        )}

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {/* Core Modules Section */}
        {course.modules && course.modules.length > 0 && (
          <div className="mt-5 rounded-2xl bg-sand/60 p-4 sm:p-5 border border-border/80">
            <div className="flex items-center gap-2 text-ink">
              <BookOpen className="h-4 w-4 text-brand" />
              <h4 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-ink">
                Core Course Modules
              </h4>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Comprehensive curriculum &amp; practical topics covered:
            </p>
            <ul className="mt-3 space-y-2.5">
              {course.modules.map((mod, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand text-[11px] font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{mod}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lead Mentor info */}
        {course.trainer && (
          <div className="mt-4 flex items-center gap-3 rounded-xl bg-sand/40 p-3 border border-border/50 text-xs">
            <GraduationCap className="h-4 w-4 text-brand shrink-0" />
            <div className="min-w-0">
              <span className="text-muted-foreground">
                Lead Mentor: <strong className="text-ink">{course.trainer.name}</strong>
                {course.trainer.credentials?.length > 0 && ` (${course.trainer.credentials.join(", ")})`}
              </span>
              <p className="text-[11px] text-muted-foreground/80 mt-0.5">
                {course.trainer.experience}
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5 pt-4 border-t border-border">
          <button
            type="button"
            onClick={handleEnrollWhatsApp}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 text-sm shadow-sm transition-all hover:shadow-md cursor-pointer active:scale-[0.99]"
          >
            <MessageCircle className="h-4 w-4 fill-white" /> Enroll Course
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-sand transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

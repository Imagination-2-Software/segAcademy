import { useState, useRef, useEffect } from "react";
import { ArrowRight, Clock, MonitorSmartphone, ChevronLeft, ChevronRight } from "lucide-react";
import { courses, discoveryCategories, type Course } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

export function CourseCard({ course }: { course: Course }) {
  const isFeatured = course.id === "money-matrix";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
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

        {course.modules && course.modules.length > 0 && (
          <div className="mt-4 rounded-xl bg-sand/60 p-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
              {isFeatured ? "Program Highlights:" : "Core Modules:"}
            </p>
            <ul className="mt-1.5 space-y-1 text-xs text-muted-foreground">
              {course.modules.slice(0, 3).map((m) => (
                <li key={m} className="flex items-center gap-1.5">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isFeatured ? "bg-gold" : "bg-brand"
                    }`}
                  />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        )}

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

        <a
          href={course.ctaHref || "#contact"}
          className={`mt-6 inline-flex w-fit items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            course.ctaHref && course.ctaHref !== "#contact"
              ? "bg-gold text-ink shadow-sm hover:bg-gold-strong"
              : "bg-gold/15 text-gold-strong hover:bg-gold hover:text-ink shadow-2xs"
          }`}
        >
          {course.ctaText || "Explore Course"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export function CourseGrid() {
  const viewportRef = useRef<HTMLDivElement>(null);
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
                  <CourseCard course={c} />
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
    </section>
  );
}

export function CourseDiscovery() {
  const [active, setActive] = useState<string>(discoveryCategories[0] ?? "Beginner");
  const filtered = courses.filter((c) => c.categories.includes(active));

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Find the Right Path for Your Trading Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose a focus area and see which SEG Academy programs cover it.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {discoveryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? "border-ink bg-ink text-ink-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-brand hover:text-brand-strong"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="grid gap-5 rounded-3xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-lift sm:grid-cols-[180px_minmax(0,1fr)_auto] sm:items-center"
            >
              <img
                src={c.image}
                alt={`${c.name} program`}
                width={900}
                height={700}
                loading="lazy"
                className="h-36 w-full rounded-2xl object-cover sm:h-28"
              />
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold text-ink">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {c.level} · {c.mode}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand-strong"
              >
                View Course <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Check,
  Star,
  Phone,
  MapPin,
  ArrowRight,
  Award,
  Building,
  Mail,
  Clock,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Globe,
  Sparkles,
  Building2,
} from "lucide-react";
import marketInterface from "@/assets/market-interface.jpg";
import mentor from "@/assets/mentor.jpg";
import learningJourney from "@/assets/learning-journey.jpg";
import academyExterior from "@/assets/academy-exterior.jpg";
import academyInterior from "@/assets/academy-interior.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";
import courseHedging from "@/assets/course-hedging.jpg";
import indianStockMarket from "@/assets/blogs/indian-stock-market-cat.jpg";
import globalStockMarket from "@/assets/blogs/global-stock-market-cat.jpg";
import howStockMarketWorks from "@/assets/blogs/how-stock-market-works.jpg";
import oneLakhPortfolio from "@/assets/blogs/one-lakh-portfolio.jpg";
import {
  accreditations,
  brand,
  darkFeatures,
  learningAreas,
  learningPath,
  rating,
  reviewThemes,
  testimonials,
  whyBenefits,
} from "@/data/seg";
import { Reveal } from "@/components/Reveal";

const featureIcons = [LineChart, GraduationCap, BookOpen, ShieldCheck];

export function DarkValueSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-ink-foreground lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgb(255_255_255/0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.35)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(80%_70%_at_30%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Learn the Market.
            <span className="block text-gold">Understand the Move.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-foreground/70">
            Go beyond theory with practical market learning, structured courses and experienced
            guidance.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {darkFeatures.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length] ?? LineChart;
              return (
                <li
                  key={f.title}
                  className="rounded-2xl border border-white/12 bg-white/6 p-5 backdrop-blur-md transition-colors hover:border-gold/40"
                >
                  <Icon className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/60">{f.body}</p>
                </li>
              );
            })}
          </ul>
        </Reveal>


        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img
              src={marketInterface}
              alt="Market analysis interface reviewed during a SEG Academy session"
              width={900}
              height={700}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-ink-soft p-5 sm:left-10 sm:right-auto sm:w-72">
            <p className="font-display text-sm font-bold">Structured, session by session</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-foreground/60">
              Every concept is taught, demonstrated and then practised.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function WhySeg() {
  return (
    <section id="why-seg" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-start gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={mentor}
              alt="Mentor guiding learners through market concepts at SEG Academy"
              width={1000}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
              Why Learn With SEG Academy?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A learning environment built around clarity, discipline and genuine market
              understanding.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {whyBenefits.map((b, i) => (
              <Reveal as="li" key={b.n} delay={i * 60}>
                <span className="font-display text-sm font-bold text-gold-strong">{b.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LearningExperience() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={learningJourney}
              alt="Learners attending a structured stock market session at SEG Academy"
              width={1000}
              height={1100}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
              From Market Basics to Advanced Strategies
            </h2>
            <p className="mt-4 text-muted-foreground">
              A learning journey that moves in order, so each stage builds on the one before it.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-0">
            {learningPath.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 60}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 bg-card text-xs font-bold text-gold-strong">
                      {step.n}
                    </span>
                    {i < learningPath.length - 1 && <span className="w-px flex-1 bg-border" />}
                  </div>
                  <p className="pb-7 pt-1.5 font-display text-base font-semibold text-ink">
                    {step.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const learningAreasDetailed = [
  {
    title: "Equity Markets",
    tag: "Cash & Equities",
    body: "Cash segments, swing setups, and long-term portfolio selection.",
    image: indianStockMarket,
    icon: LineChart,
  },
  {
    title: "Futures & Derivatives",
    tag: "F&O Derivatives",
    body: "Leverage mechanics, margin rules, and contract roll-overs.",
    image: marketInterface,
    icon: TrendingUp,
  },
  {
    title: "Options Strategies",
    tag: "Hedging & Greeks",
    body: "Buying vs selling, Greeks management, and multi-leg delta-neutral spreads.",
    image: courseHedging,
    icon: ShieldCheck,
  },
  {
    title: "Forex & Global Markets",
    tag: "Global Macro",
    body: "Currency pairs, global macro indicators, and commodity behavior.",
    image: globalStockMarket,
    icon: Globe,
  },
  {
    title: "Smart Money Concepts",
    tag: "Smart Money Logic",
    body: "Identifying institutional liquidity, order blocks, and market structures.",
    image: howStockMarketWorks,
    icon: Sparkles,
  },
  {
    title: "Tally GST & Finance",
    tag: "Accounting & GST",
    body: "Financial accounting, GST compliance, and corporate financial workflows.",
    image: academyInterior,
    icon: Building2,
  },
  {
    title: "University Skill Add-ons",
    tag: "University Add-ons",
    body: "NEP-aligned credit courses conducted for top degree colleges.",
    image: heroClassroom,
    icon: GraduationCap,
  },
  {
    title: "Capital Protection",
    tag: "Risk & Capital",
    body: "Discipline systems, position sizing calculators, and drawdown control.",
    image: oneLakhPortfolio,
    icon: Award,
  },
];

export function LearningAreas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardStep, setCardStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  // Touch Swipe Handlers for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

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

    const maxIdx = Math.max(0, learningAreasDetailed.length - count);
    setCurrentIndex((prev) => Math.min(prev, maxIdx));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxIndex = Math.max(0, learningAreasDetailed.length - visibleCount);

  // 3-second automatic moving carousel with pause
  useEffect(() => {
    if (isHovered || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 450);
  };

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 450);
  };

  const goToSlide = (idx: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentIndex(Math.min(Math.max(0, idx), maxIndex));
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 450);
  };

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
    <section id="services" className="py-20 lg:py-28 overflow-hidden bg-sand/30">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Multi-Market Curricula
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
            Understand More Than Just the Charts
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Build a broader understanding of financial markets through structured learning across
            multiple market concepts.
          </p>
        </Reveal>

        {/* Carousel Container with Left and Right Moving Arrow Buttons */}
        <div
          className="relative mt-12 sm:mt-16 px-3 sm:px-12 lg:px-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow Moving Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous learning area"
            className="group absolute -left-2 sm:-left-3 lg:-left-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-card/95 text-ink shadow-lift backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 stroke-[2.2] transition-transform duration-200 group-hover:-translate-x-0.5" />
          </button>

          {/* Smooth Sliding Viewport */}
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
                transition: "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              className="flex gap-6 will-change-transform"
            >
              {learningAreasDetailed.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.title}
                    className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  >
                    <article className="group relative flex h-full flex-col items-center justify-between text-center overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift">
                      {/* Ambient card top border glow on hover */}
                      <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-gold/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Top Domain Badge */}
                      <div className="relative z-10 flex items-center gap-1.5 rounded-full bg-sand/80 px-3 py-1 text-[11px] font-bold text-brand uppercase tracking-wider">
                        <IconComponent className="h-3.5 w-3.5 text-gold-strong" />
                        <span>{area.tag}</span>
                      </div>

                      {/* Middle Content Section */}
                      <div className="relative z-10 my-4 flex flex-col items-center w-full">
                        {/* 1. Card Name in Middle */}
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-ink transition-colors group-hover:text-brand">
                          {area.title}
                        </h3>

                        {/* 2. Image Related to It in Middle */}
                        <div className="relative my-4 aspect-[16/10] w-full max-w-[280px] overflow-hidden rounded-2xl bg-black/10 border border-border/60 shadow-sm transition-transform duration-500 group-hover:scale-[1.03]">
                          <img
                            src={area.image}
                            alt={`${area.title} at SEG Academy`}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                            loading="lazy"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                        </div>

                        {/* 3. Text Related to It */}
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground px-2">
                          {area.body}
                        </p>
                      </div>

                      {/* Bottom Footer Accent */}
                      <div className="relative z-10 pt-3 border-t border-border/50 w-full flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-brand/80 group-hover:text-brand transition-colors flex items-center gap-1">
                          Core Practical Domain <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow Moving Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next learning area"
            className="group absolute -right-2 sm:-right-3 lg:-right-4 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-card/95 text-ink shadow-lift backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
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

export function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Authentic Student Feedback
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-ink sm:text-5xl">
              Verified Google Reviews
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Real experiences from learners across Varanasi and Eastern India at SEG Academy.
            </p>
          </div>
          <a
            href={rating.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-xs hover:border-brand/40 transition-colors"
          >
            <p className="font-display text-3xl font-extrabold text-ink">{rating.score}</p>
            <div>
              <div className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-brand flex items-center gap-1">
                {rating.reviews}+ Google Reviews <ExternalLink className="h-3 w-3" />
              </p>
            </div>
          </a>
        </Reveal>

        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.initials}
              delay={i * 80}
              className="w-[85%] shrink-0 snap-start lg:w-auto"
            >
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                    {t.initials}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{t.label}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-wrap gap-2.5">
          {reviewThemes.map((theme) => (
            <span
              key={theme}
              className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground"
            >
              {theme}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background border-t border-border">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Institutional Profile
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              About SEG Academy
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="text-ink font-semibold">{brand.legalName}</strong> (Skill and
              Employability Generation Academy) is an EdTech and life-skills institute providing
              rigorous classroom, seminar, and live terminal training programs in financial markets,
              technical analysis, and institutional trade execution.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Since 2017, SEG Academy has been conducting structured sessions across universities and
              colleges, offering skill-based add-on courses complying with NAAC norms and current
              National Education Policy (NEP) standards, eligible for students&apos; Academic Bank of
              Credits (ABC).
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-bold text-ink">Our Mission</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  To equip individuals with actionable financial, analytical, and professional
                  skills necessary for sustained socioeconomic independence and disciplined market
                  success.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-bold text-ink">Our Vision</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  To serve as India&apos;s foremost driver of ethical, accessible, and practical
                  market education through tailored, inclusive, and terminal-grade training.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                <Award className="h-5 w-5 text-gold-strong" /> Government Accreditations & Approvals
              </h3>
              <ul className="mt-6 space-y-4">
                {accreditations.map((acc) => (
                  <li key={acc.title} className="flex items-start gap-3 text-sm">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    <div>
                      <span className="font-bold text-ink">{acc.title}</span> —{" "}
                      <span className="font-semibold text-brand text-xs">{acc.subtitle}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{acc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                <div>
                  <span className="font-semibold text-ink">Corporate CIN:</span> {brand.cin}
                </div>
                <div>
                  <span className="font-semibold text-ink">Est. Heritage:</span> Since 2017
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  const mapsLink = brand.googleShareLink;
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-border bg-card p-6 shadow-card lg:grid-cols-2 lg:gap-16 lg:p-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Main Campus & Admissions
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Visit Our Varanasi Headquarters
            </h2>
            <p className="mt-4 text-muted-foreground">
              Visit our primary trading lab and executive training center in Sigra - Mahmoorganj,
              Varanasi. Experience our live market environment and consult directly with our mentors.
            </p>

            <address className="mt-8 not-italic space-y-3.5">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <p className="text-sm leading-relaxed text-foreground">
                  {brand.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <div className="text-sm">
                  <a href={brand.phoneHref} className="font-semibold text-foreground hover:underline">
                    {brand.phone}
                  </a>
                  <span className="text-muted-foreground mx-2">|</span>
                  <a href={`tel:+919616051355`} className="font-semibold text-foreground hover:underline">
                    096160 51355
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <a
                  href={`mailto:${brand.email}`}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  {brand.email}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">{brand.businessHours}</p>
              </div>
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold to-gold-strong px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:shadow-lift"
              >
                Get Directions <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-brand-strong"
              >
                <Phone className="h-4 w-4" /> Call SEG Academy
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <img
                src={academyExterior}
                alt="Exterior of the SEG Academy building in Mahmoorganj, Varanasi"
                width={1200}
                height={900}
                loading="lazy"
                className="h-32 w-full rounded-2xl border border-border object-cover sm:h-40"
              />
              <img
                src={academyInterior}
                alt="Classroom interior at the SEG Academy campus"
                width={900}
                height={700}
                loading="lazy"
                className="h-32 w-full rounded-2xl border border-border object-cover sm:h-40"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl border border-border relative">
              <iframe
                title="SEG Academy location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full border-0"
              />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-card/95 backdrop-blur-md p-3 border border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-ink">Verified Google Business Profile</span>
                <a
                  href={brand.googleShareLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                >
                  View on Google Maps <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import { Star, Users, GraduationCap, Heart } from "lucide-react";
import { stats } from "@/data/seg";
import { useInView } from "@/components/Reveal";

export interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  useIndianFormat?: boolean;
}

/**
 * SEG Academy - Reusable Animated Statistics Counter
 * Smooth count-up animation using requestAnimationFrame and easeOutQuart easing.
 */
export function AnimatedCounter({
  end,
  start = 0,
  duration = 1800,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  useIndianFormat = false,
}: AnimatedCounterProps) {
  const { ref, visible } = useInView<HTMLSpanElement>(true);
  const [displayValue, setDisplayValue] = useState(start);
  const frameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!visible) return;

    // Respect prefers-reduced-motion: display final value immediately
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayValue(end);
      return;
    }

    // easeOutQuart: starts quickly, gradually slows down as it approaches final value
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const current = start + (end - start) * easedProgress;

      setDisplayValue(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(end); // Stop precisely at target value
      }
    };

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [visible, end, start, duration, delay]);

  const formattedNumber =
    decimals > 0
      ? displayValue.toFixed(decimals)
      : useIndianFormat
      ? new Intl.NumberFormat("en-IN").format(Math.round(displayValue))
      : Math.round(displayValue).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}

/**
 * Trust & Achievement Statistics Bar
 */
export function TrustBar() {
  return (
    <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
      <div className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border bg-card px-6 py-4 shadow-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {/* Stat 1: Google Rating + Reviews */}
        <div className="flex items-center justify-center gap-3 px-4 py-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
            <Star className="h-5 w-5 fill-gold" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-extrabold text-gold">
              <AnimatedCounter end={4.9} decimals={1} suffix="/5" delay={0} />
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              <AnimatedCounter end={508} suffix="+" delay={80} /> Google Reviews
            </p>
          </div>
        </div>

        {/* Stat 2: Students Trained */}
        <div className="flex items-center justify-center gap-3 px-4 py-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Users className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-extrabold text-ink">
              <AnimatedCounter end={2000} suffix="+" delay={140} />
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Students Trained
            </p>
          </div>
        </div>

        {/* Stat 3: Verified Faculty */}
        <div className="flex items-center justify-center gap-3 px-4 py-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-extrabold text-ink">
              <AnimatedCounter end={10} suffix="+" delay={200} />
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              Verified Faculty
            </p>
          </div>
        </div>

        {/* Stat 4: Established Since (Static - Not animated) */}
        <div className="flex items-center justify-center gap-3 px-4 py-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
            <Heart className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-extrabold text-ink">
              Since 2017
            </p>
            <p className="text-xs font-medium text-muted-foreground">
              DPIIT & MSME Govt. Reg.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full Achievement Statistics Section
 */
export function StatsSection() {
  return (
    <section className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-display text-5xl font-extrabold tracking-tight text-ink lg:text-6xl">
                <AnimatedCounter
                  end={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                  delay={idx * 80}
                />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

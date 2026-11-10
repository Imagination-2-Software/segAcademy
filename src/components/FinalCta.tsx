import { ArrowRight, Phone } from "lucide-react";
import { brand } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-ink-foreground sm:px-12 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-brand/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Your Journey in the Stock Market Starts Here.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-foreground/70">
              Build your market knowledge with structured learning, practical guidance and
              experienced mentors at SEG Academy.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#courses"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-gold to-gold-strong px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-16px_var(--gold)] transition-all hover:shadow-[0_18px_50px_-12px_var(--gold)]"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={brand.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-semibold text-ink-foreground backdrop-blur-md transition-colors hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

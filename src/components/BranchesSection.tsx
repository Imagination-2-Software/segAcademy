import { useState, useRef } from "react";
import { MapPin, Phone, Building2, ExternalLink, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { branches, type BranchLocation } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

function BranchCard({ branch }: { branch: BranchLocation }) {
  const isHq = branch.type === "Headquarters";
  return (
    <div
      className={`flex h-full flex-col justify-between rounded-3xl border bg-card p-6 sm:p-7 shadow-card transition-all duration-300 hover:-translate-y-1 ${
        isHq ? "border-gold ring-2 ring-gold/20" : "border-border"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
              isHq
                ? "bg-gold/20 text-gold-strong"
                : branch.type === "Regional Center"
                ? "bg-brand/15 text-brand"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <Building2 className="h-3.5 w-3.5" />
            {branch.type}
          </span>
          {isHq && (
            <span className="flex items-center gap-1 text-[11px] font-semibold text-gold-strong">
              <ShieldCheck className="h-3.5 w-3.5" /> Main Campus
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-xl font-bold text-ink">{branch.name}</h3>

        <address className="mt-4 space-y-2 not-italic text-sm text-muted-foreground">
          <div className="flex items-start gap-2.5">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />
            <span>
              {branch.address}, {branch.city}, {branch.state} - {branch.pincode}
            </span>
          </div>
          {branch.phone && (
            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              <span className="font-semibold text-foreground">{branch.phone}</span>
            </div>
          )}
          {branch.head && (
            <div className="text-xs pt-1 text-muted-foreground/80">
              <span className="font-semibold text-foreground">Lead / Coordinator:</span>{" "}
              {branch.head}
            </div>
          )}
        </address>

        {branch.note && (
          <p className="mt-4 rounded-xl bg-sand/60 p-3 text-xs leading-relaxed text-muted-foreground">
            {branch.note}
          </p>
        )}
      </div>

      <div className="mt-6 pt-5 border-t border-border">
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all ${
            isHq
              ? "bg-linear-to-r from-gold to-gold-strong text-ink hover:shadow-lift"
              : "border border-border text-foreground hover:border-brand hover:text-brand"
          }`}
        >
          Get Directions / View Map
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function BranchesSection() {
  // Mobile Single Card State (1 card at a time with arrow controls)
  const [mobileBranchIdx, setMobileBranchIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prevBranch = () => {
    setMobileBranchIdx((prev) =>
      prev === 0 ? branches.length - 1 : prev - 1
    );
  };

  const nextBranch = () => {
    setMobileBranchIdx((prev) =>
      prev === branches.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextBranch();
      } else {
        prevBranch();
      }
    }
    touchStartX.current = null;
  };

  const currentBranch = branches[mobileBranchIdx];

  return (
    <section id="branches" className="bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Physical Presence &amp; Campuses
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Branches &amp; Academic Centers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From our primary headquarters and trading terminal lab in Varanasi to regional centers
            and institutional university tie-ups.
          </p>
        </Reveal>

        {/* DESKTOP & TABLET: 3-Column Grid */}
        <div className="hidden md:grid mt-14 gap-8 lg:grid-cols-3">
          {branches.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 70} className="h-full">
              <BranchCard branch={branch} />
            </Reveal>
          ))}
        </div>

        {/* MOBILE UI: Strictly ONE Card at a time, perfectly centered, with arrow controls below */}
        <div className="block md:hidden mt-10">
          <div
            className="w-full max-w-sm mx-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <BranchCard branch={currentBranch} />
          </div>

          {/* Navigation Controls Directly Below the Card */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prevBranch}
              aria-label="Previous branch"
              className="flex h-12 w-20 items-center justify-center rounded-full border border-border bg-card text-ink shadow-2xs transition-all active:scale-95 hover:bg-muted cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="min-w-[65px] text-center font-display text-sm font-bold text-ink">
              {String(mobileBranchIdx + 1).padStart(2, "0")} / {String(branches.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextBranch}
              aria-label="Next branch"
              className="flex h-12 w-20 items-center justify-center rounded-full bg-brand text-white shadow-2xs transition-all active:scale-95 hover:bg-brand-strong cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Dots Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {branches.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMobileBranchIdx(idx)}
                aria-label={`Go to branch ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileBranchIdx === idx ? "w-6 bg-brand" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

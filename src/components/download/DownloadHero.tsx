import React from "react";
import { Link } from "@tanstack/react-router";
import { Home, ChevronRight, Download, FileText, Award, ShieldCheck } from "lucide-react";

interface DownloadHeroProps {
  title: string;
  highlightedWord: string;
  subtitle: string;
  badge?: string;
  currentPageLabel: string;
  currentPageHref: string;
}

export function DownloadHero({
  title,
  highlightedWord,
  subtitle,
  badge = "OFFICIAL ACADEMIC RESOURCES",
  currentPageLabel,
  currentPageHref,
}: DownloadHeroProps) {
  return (
    <div className="relative overflow-hidden bg-[#0b0318] py-14 text-white lg:py-20 border-b border-purple-500/20">
      {/* Signature Top-Right Orange Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/18 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(255,121,31,0.22)_0%,rgba(255,121,31,0.08)_35%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(124,58,237,0.22),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-white/70">
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li className="flex items-center gap-1.5">
              <Link
                to="/"
                className="inline-flex items-center gap-1 text-white/75 hover:text-white transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                <span>Home</span>
              </Link>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-white/40" />
              <span className="text-white/60">More</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-white/40" />
              <span className="text-white/60">Download</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-white/40" />
              <Link
                to={currentPageHref}
                className="font-bold text-[#FF8A24] hover:underline"
              >
                {currentPageLabel}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-white/15 backdrop-blur-xs mb-4">
            <Download className="h-3.5 w-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
            {title}{" "}
            <span className="seg-gradient-heading-light">{highlightedWord}</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-purple-100/90 font-medium max-w-2xl">
            {subtitle}
          </p>

          {/* Quick Credential Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/10">
              <ShieldCheck className="h-3.5 w-3.5 text-[#FF8A24]" />
              <span>Verified Institutional Repository</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 border border-white/10">
              <Award className="h-3.5 w-3.5 text-[#FF8A24]" />
              <span>Official Academic Directorate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


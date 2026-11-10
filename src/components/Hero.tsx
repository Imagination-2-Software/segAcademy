import { useState } from "react";
import { ArrowRight, Play, BookOpen, TrendingUp, Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FDFBF7] pt-36 pb-16 lg:pt-40 lg:pb-22 xl:pt-44 xl:pb-26"
    >
      {/* 1. Atmospheric Editorial Soft Lavender & Off-White Gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-15%,#F0EBF5_0%,#F8F5FB_45%,#FDFBF7_100%)]"
      />

      {/* 2. Delicate Radial Light Blurs (Soft & Non-Intrusive) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/4 -translate-y-1/3 h-[450px] w-[550px] rounded-full bg-purple-300/8 blur-[150px] z-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[520px] rounded-full bg-orange-300/8 blur-[150px] z-0"
      />

      {/* 3. Subtle Edge Vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(253,251,247,0.7)_100%)]"
      />

      {/* 4. Refined Floating Curved Accent Lines */}
      {/* Top-Left Curve */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -top-12 -left-12 h-64 w-80 lg:h-80 lg:w-[420px] opacity-20 z-0 select-none"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -20 180 C 140 180, 240 100, 280 -20"
          stroke="url(#heroOrangeGrad1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M -20 220 C 170 220, 280 120, 320 -20"
          stroke="url(#heroPurpleGrad1)"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="heroOrangeGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f58220" />
            <stop offset="60%" stopColor="#e05f00" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroPurpleGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7e22ce" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-Right Curve */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-88 lg:h-96 lg:w-[460px] opacity-18 z-0 select-none"
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 420 80 C 260 80, 150 180, 100 340"
          stroke="url(#heroOrangeGrad2)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="heroOrangeGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f58220" />
            <stop offset="60%" stopColor="#e05f00" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* 5. Sophisticated & De-Cluttered Financial Candlestick Background */}
      {/* Opacity calibrated to 10-14% so it forms a beautiful subtle watermark without visual clutter */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none"
        viewBox="0 0 1440 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle Bullish Green Gradient */}
          <linearGradient id="calmBullGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.08" />
          </linearGradient>

          {/* Subtle Bearish Red Gradient */}
          <linearGradient id="calmBearGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.08" />
          </linearGradient>

          {/* Subtle SEG Orange Accent Gradient */}
          <linearGradient id="calmOrangeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8A24" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#E05F00" stopOpacity="0.10" />
          </linearGradient>
        </defs>

        {/* --- Extremely Subtle Grid Lines (Minimal & Elegant) --- */}
        {[140, 240, 340, 440, 540].map((y) => (
          <line
            key={`grid-h-${y}`}
            x1="0"
            y1={y}
            x2="1440"
            y2={y}
            stroke="#351650"
            strokeOpacity="0.025"
            strokeWidth="0.75"
            strokeDasharray="4 10"
          />
        ))}

        {[240, 480, 720, 960, 1200].map((x) => (
          <line
            key={`grid-v-${x}`}
            x1={x}
            y1="80"
            x2={x}
            y2="600"
            stroke="#351650"
            strokeOpacity="0.02"
            strokeWidth="0.75"
            strokeDasharray="3 12"
          />
        ))}

        {/* --- Subtle Moving Average Lines (Smooth Harmonic Curves) --- */}
        <path
          d="M 30 395 C 100 390, 160 340, 240 330 S 360 320, 440 270 S 560 250, 640 280 S 780 300, 880 260 S 1000 220, 1100 180 S 1240 150, 1420 110"
          stroke="#FF8A24"
          strokeOpacity="0.15"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M 30 425 C 120 420, 200 385, 290 375 S 460 360, 560 330 S 720 310, 820 300 S 960 270, 1080 240 S 1240 210, 1440 155"
          stroke="#7C3AED"
          strokeOpacity="0.11"
          strokeWidth="1.4"
          strokeDasharray="6 6"
          fill="none"
          strokeLinecap="round"
        />

        {/* --- Concentrated Edge Candlestick Clusters (No Noise Behind Text) --- */}
        {[
          // Outer Left Formation (x: 40 - 240)
          [48, 385, 412, 424, 375, "bear"],
          [70, 410, 390, 418, 378, "bull"],
          [92, 392, 416, 426, 382, "bear"],
          [114, 414, 365, 420, 350, "bull"],
          [136, 368, 342, 375, 330, "bull"],
          [158, 344, 358, 366, 335, "bear"],
          [180, 356, 318, 362, 305, "bull"],
          [202, 320, 275, 326, 262, "accent"],
          [224, 278, 296, 304, 270, "bear"],

          // Transition Bottom Cluster (x: 480 - 620, low opacity, low height)
          [480, 340, 312, 346, 302, "bull"],
          [502, 314, 328, 334, 306, "bear"],
          [524, 326, 290, 332, 280, "bull"],
          [546, 292, 265, 298, 255, "bull"],
          [568, 268, 285, 292, 260, "bear"],
          [590, 282, 248, 288, 238, "bull"],

          // Outer Right Formation (x: 1040 - 1380)
          [1040, 160, 138, 166, 130, "bull"],
          [1062, 140, 154, 160, 132, "bear"],
          [1084, 152, 126, 158, 118, "bull"],
          [1106, 128, 105, 134, 98, "bull"],
          [1128, 108, 122, 128, 102, "bear"],
          [1150, 120, 95, 126, 88, "bull"],
          [1172, 98, 75, 104, 68, "accent"],
          [1194, 78, 92, 98, 72, "bear"],
          [1216, 90, 65, 96, 58, "bull"],
          [1238, 68, 48, 74, 40, "bull"],
          [1260, 50, 64, 70, 44, "bear"],
          [1282, 62, 42, 68, 34, "bull"],
          [1304, 44, 56, 62, 38, "bear"],
          [1326, 54, 32, 58, 25, "bull"],
          [1348, 35, 46, 50, 28, "bear"],
          [1370, 44, 25, 48, 18, "bull"],
        ].map(([x, open, close, high, low, type], idx) => {
          const isBull = type === "bull";
          const isAccent = type === "accent";
          const isBear = type === "bear";

          const topY = Math.min(Number(open), Number(close));
          const botY = Math.max(Number(open), Number(close));
          const bodyH = Math.max(botY - topY, 8);
          const candleW = 11;
          const candleX = Number(x) - candleW / 2;

          let strokeColor = "#059669";
          let fillColor = "url(#calmBullGrad)";
          let wickColor = "#10B981";

          if (isBear) {
            strokeColor = "#DC2626";
            fillColor = "url(#calmBearGrad)";
            wickColor = "#F43F5E";
          } else if (isAccent) {
            strokeColor = "#FF8A24";
            fillColor = "url(#calmOrangeGrad)";
            wickColor = "#FF8A24";
          }

          return (
            <g key={`calm-candle-${idx}`}>
              {/* Upper Wick */}
              <line
                x1={x}
                y1={high}
                x2={x}
                y2={topY}
                stroke={wickColor}
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeOpacity={0.22}
              />
              {/* Lower Wick */}
              <line
                x1={x}
                y1={botY}
                x2={x}
                y2={low}
                stroke={wickColor}
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeOpacity={0.22}
              />
              {/* Real Candle Body */}
              <rect
                x={candleX}
                y={topY}
                width={candleW}
                height={bodyH}
                rx={1.5}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={0.8}
                strokeOpacity={0.18}
              />
            </g>
          );
        })}
      </svg>

      {/* 6. Centered Two-Column Layout Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] items-center gap-10 lg:gap-8 xl:gap-14 w-full">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: 43% width — Typography Hierarchy & Actions */}
          {/* ========================================================= */}
          <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* 1. Small Eyebrow Badge */}
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#351650]/10 bg-[#351650]/[0.05] px-3.5 py-1 backdrop-blur-sm shadow-none">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24] animate-pulse" />
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#351650]/80">
                  INDIA&apos;S TRUSTED STOCK MARKET INSTITUTE
                </p>
              </div>
            </Reveal>

            {/* 2. Cohesive Editorial Headline */}
            <Reveal delay={80}>
              <h1 className="mt-5 font-display tracking-tight text-[#351650]">
                {/* Primary Heading: 58-68px on desktop */}
                <span className="block text-[2.5rem] sm:text-[3.25rem] lg:text-[3.65rem] xl:text-[4.15rem] font-extrabold leading-[1.08]">
                  Master the Stock Market
                </span>
                {/* Secondary Heading: 34-42px on desktop */}
                <span className="mt-1.5 sm:mt-2.5 block text-[1.65rem] sm:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] font-bold leading-[1.15] text-[#FF7A00]">
                  From Basics to Pro Level
                </span>
              </h1>
            </Reveal>

            {/* 3. Supporting Description: 18-20px on desktop */}
            <Reveal delay={150}>
              <p className="mt-5 max-w-xl text-base sm:text-lg lg:text-[1.15rem] leading-relaxed text-[#351650]/75">
                Learn the markets with structured courses, practical guidance and experienced mentorship
                at SEG Academy.
              </p>
            </Reveal>

            {/* 4. Action Buttons */}
            <Reveal delay={220}>
              <div className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:flex-row lg:justify-start">
                {/* Primary CTA: Explore Courses */}
                <a
                  href="#courses"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-8 py-3.5 sm:py-4 text-sm font-bold text-white shadow-[0_10px_25px_-5px_rgba(245,130,32,0.45)] transition-all duration-300 hover:shadow-[0_14px_35px_-5px_rgba(245,130,32,0.65)] hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                {/* Secondary CTA: Talk to an Expert */}
                <a
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#351650] px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#241038] hover:shadow-[0_8px_20px_rgba(53,22,80,0.25)] hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            {/* 5. Desktop Learning Highlights Strip (Clean & Minimal Supporting Elements) */}
            <Reveal delay={280} className="w-full hidden lg:block">
              <div className="mt-9 pt-7 border-t border-[#351650]/10 grid grid-cols-3 gap-3 w-full">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#351650]/[0.06] text-[#351650]">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <span className="text-[12.5px] font-semibold text-[#351650]/80 leading-tight">
                    Structured Learning Programs
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF8A24]/10 text-[#FF8A24]">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <span className="text-[12.5px] font-semibold text-[#351650]/80 leading-tight">
                    Practical Market Education
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#351650]/[0.06] text-[#351650]">
                    <Award className="h-4 w-4" />
                  </div>
                  <span className="text-[12.5px] font-semibold text-[#351650]/80 leading-tight">
                    Expert-Led Mentorship
                  </span>
                </div>
              </div>
            </Reveal>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 57% width — Custom Video Preview Showcase */}
          {/* ========================================================= */}
          <div className="w-full flex flex-col items-center justify-center lg:justify-end min-w-0">
            <Reveal delay={240} className="w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[760px] min-w-0 lg:min-w-[560px]">
                
                {/* Subtle Ambient Glow behind Video Frame */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-purple-400/10 via-purple-200/5 to-orange-300/10 blur-2xl -z-10"
                />

                {/* 16:9 Custom Video Showcase Container */}
                <div className="relative aspect-video w-full overflow-hidden rounded-[24px] border border-[#E5DDF0] bg-[#16062b] shadow-[0_24px_60px_-12px_rgba(53,22,80,0.18),0_10px_25px_-5px_rgba(0,0,0,0.06)] transition-all duration-300">
                  
                  {isPlaying ? (
                    /* Active Video Player on Click (Autoplay with normal controls) */
                    <iframe
                      src="https://www.youtube.com/embed/7OxiQUjzONQ?autoplay=1&rel=0"
                      title="SEG Academy Stock Market Learning Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-full w-full border-0 block"
                    />
                  ) : (
                    /* Custom Interactive Video Preview Card */
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play SEG Academy Learning Experience Video"
                      className="group relative h-full w-full block text-left focus:outline-none cursor-pointer select-none"
                    >
                      {/* High-Quality Thumbnail Image */}
                      <img
                        src="https://img.youtube.com/vi/7OxiQUjzONQ/maxresdefault.jpg"
                        alt="SEG Academy Stock Market Training Experience"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://img.youtube.com/vi/7OxiQUjzONQ/hqdefault.jpg";
                        }}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Smooth Dark Gradient Overlay for Contrast & Elegance */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35 transition-opacity duration-300 group-hover:opacity-90" />

                      {/* Top Header Badge */}
                      

                      {/* Large Custom Circular Play Button in Center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative flex items-center justify-center">
                          {/* Ambient glow behind play icon */}
                          <div className="absolute h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#FF8A24]/30 blur-xl transition-all duration-300 group-hover:scale-125 group-hover:bg-[#FF8A24]/50" />
                          
                          {/* Main Play Circle */}
                          <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-tr from-[#FF7A00] to-[#FFA842] flex items-center justify-center text-white shadow-[0_10px_35px_rgba(255,122,0,0.55)] ring-4 sm:ring-8 ring-white/35 transition-all duration-300 group-hover:scale-110 group-hover:ring-white/50">
                            <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-white translate-x-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Title & Supporting Caption */}
                      <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 flex items-end justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                            A Glimpse Into Our Learning Experience
                          </p>
                          <p className="text-[11px] sm:text-xs text-white/80 mt-0.5 truncate">
                            Live Market Practical Training & Mentorship
                          </p>
                        </div>
                        <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-[11px] font-bold text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                          <span>Watch Video</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Mobile Learning Highlights Strip (Placed below the video on mobile screens) */}
            <div className="mt-8 pt-6 border-t border-[#351650]/10 flex flex-col gap-3 w-full lg:hidden">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#351650]/[0.06] text-[#351650]">
                  <BookOpen className="h-4 w-4" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#351650]/80">
                  Structured Learning Programs
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF8A24]/10 text-[#FF8A24]">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#351650]/80">
                  Practical Market Education
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#351650]/[0.06] text-[#351650]">
                  <Award className="h-4 w-4" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#351650]/80">
                  Expert-Led Mentorship
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

import React, { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  Quote,
} from "lucide-react";
import { teamMembers, brand } from "@/data/seg";

interface MentorSpotlightProps {
  showFullMessageLink?: boolean;
  className?: string;
}

export function MentorSpotlight({
  showFullMessageLink = true,
  className = "",
}: MentorSpotlightProps) {
  const director = teamMembers[0]; // Sandeep Chatterjee (Sandeep Sir)
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // High-performance Cloudinary video stream & verified continuous GIF source
  const videoMp4 =
    "https://res.cloudinary.com/zvlxacfu/video/upload/f_auto,q_auto/v1793607980/Video-46005.mp4";
  const videoMp4Fallback =
    "https://res.cloudinary.com/zvlxacfu/video/upload/v1793607980/Video-46005.mp4";
  const videoGif =
    "https://res.cloudinary.com/zvlxacfu/video/upload/w_600,fps_12,f_gif,q_auto/v1793607980/Video-46005.gif";
  const posterSrc =
    "https://res.cloudinary.com/zvlxacfu/video/upload/so_1,f_auto,q_auto/v1793607980/Video-46005.jpg";

  // Ensure continuous autoplay like a GIF with zero pause/play controls
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback: ensure muted and re-try
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    startPlayback();

    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);

    const onVisibilityChange = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      video.removeEventListener("loadeddata", startPlayback);
      video.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <section
      aria-label="Mentor Spotlight: Sandeep Sir"
      className={`relative rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 lg:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)] overflow-hidden ${className}`}
    >
      {/* Signature subtle orange ambient glow */}
      <div className="seg-ambient-glow-subtle" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#351650]/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#FF8A24]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
        {/* Mobile Header: Visible only on mobile/tablet to give Sandeep Sir immediate prominence */}
        <div className="lg:hidden space-y-2 text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F3FC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
            MEET THE MENTOR
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#351650] tracking-tight">
            Sandeep Sir
          </h2>
          <p className="text-sm font-semibold text-[#FF8A24]">
            {director.designation} • {brand.name}
          </p>
        </div>

        {/* LEFT COLUMN: Large Continuous Looping Video (55% on desktop: 7 cols) */}
        <div className="lg:col-span-7">
          <div className="group relative">
            {/* Ambient soft glow ring */}
            <div
              className="absolute -inset-1.5 rounded-[28px] bg-gradient-to-tr from-[#351650]/20 via-[#FF8A24]/20 to-[#351650]/10 blur-lg opacity-70 transition-opacity duration-300"
              aria-hidden="true"
            />

            {/* Video Container - No buttons, plays nonstop like a GIF */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E5DDF0] bg-[#1a0a2a] shadow-[0_16px_40px_rgba(53,22,80,0.14)] select-none pointer-events-none">
              {/* Aspect Ratio 16:9 container matching the 1280x720 footage */}
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  ref={videoRef}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  aria-label="Sandeep Sir mentoring students in live trading classroom"
                  className="h-full w-full object-cover object-center pointer-events-none transition-transform duration-500 will-change-transform"
                >
                  <source src={videoMp4} type="video/mp4" />
                  <source src={videoMp4Fallback} type="video/mp4" />
                  {/* Continuous Animated GIF Fallback */}
                  <img
                    src={videoGif}
                    alt="Sandeep Sir in Live Trading Session"
                    className="h-full w-full object-cover object-center"
                  />
                </video>

                {/* Bottom editorial gradient for caption contrast */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a0a2a]/80 via-[#1a0a2a]/30 to-transparent"
                  aria-hidden="true"
                />

                {/* Caption Strip (Bottom on Video) */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 pointer-events-none flex items-end justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md">
                      Sandeep Sir in Live Trading Session
                    </p>
                    <p className="text-[10px] sm:text-xs text-white/80 drop-shadow-sm">
                      SEG Academy Trading Lab • Mahmoorganj, Varanasi
                    </p>
                  </div>

                  <span className="inline-flex items-center rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-xs border border-white/10">
                    Continuous Feed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Content & Sandeep Sir Profile (45% on desktop: 5 cols) */}
        <div className="lg:col-span-5 space-y-5 flex flex-col justify-center text-left">
          {/* Desktop Eyebrow & Name: Hidden on mobile to avoid duplication */}
          <div className="hidden lg:block space-y-1.5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F3FC] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
              MEET THE MENTOR
            </div>
            <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-[#351650] tracking-tight leading-none pt-1">
              Sandeep Sir
            </h2>
            <p className="text-sm font-semibold text-[#FF8A24]">
              {director.designation} • {brand.legalName}
            </p>
          </div>

          {/* Supporting Heading */}
          <div className="border-l-2 border-[#FF8A24] pl-3.5">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#351650] leading-snug">
              Guidance. <span className="seg-gradient-heading">Experience.</span> A Better Way to Understand the Markets.
            </h3>
          </div>

          {/* Exact Required Description Quote */}
          <div className="rounded-2xl bg-[#F7F3FC] p-4 sm:p-5 border border-[#E5DDF0] relative">
            <Quote className="h-5 w-5 text-[#351650]/20 absolute top-3 right-3" />
            <p className="text-sm sm:text-base leading-relaxed text-[#351650]/90 font-medium italic">
              “At SEG Academy, learning the stock market goes beyond
              understanding charts and numbers. Get a glimpse of Sandeep Sir and
              the learning environment that makes practical market education an
              important part of the SEG Academy experience.”
            </p>
          </div>

          {/* Credential Tags */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#E5DDF0] shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650]">
                <Award className="h-4 w-4 text-[#FF8A24]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Experience
                </p>
                <p className="truncate text-xs font-bold text-[#351650]">
                  {director.experience}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#E5DDF0] shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650]">
                <ShieldCheck className="h-4 w-4 text-[#351650]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Governance
                </p>
                <p className="truncate text-xs font-bold text-[#351650]">
                  Academic Oversight
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#E5DDF0] shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650]">
                <GraduationCap className="h-4 w-4 text-[#351650]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Pedagogy
                </p>
                <p className="truncate text-xs font-bold text-[#351650]">
                  NEP & Practical Lab
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white p-2.5 border border-[#E5DDF0] shadow-2xs">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650]">
                <TrendingUp className="h-4 w-4 text-[#FF8A24]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Community
                </p>
                <p className="truncate text-xs font-bold text-[#351650]">
                  2000+ Students Mentored
                </p>
              </div>
            </div>
          </div>

          {/* Action Link (when displayed on pages other than director's message) */}
          {showFullMessageLink && (
            <div className="pt-2">
              <Link
                to="/about/directors-message"
                className="inline-flex items-center gap-2 rounded-xl bg-[#351650] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:bg-[#4a1f6d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#351650] focus:ring-offset-2"
              >
                <span>Read Director's Official Address</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

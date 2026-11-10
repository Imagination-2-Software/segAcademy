import React, { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Home,
  UserCheck,
  Award,
  Compass,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brand } from "@/data/seg";

export interface AboutTabItem {
  label: string;
  href: string;
  description: string;
}

export const aboutNavItems: AboutTabItem[] = [
  {
    label: "Director's Message",
    href: "/about/directors-message",
    description: "Official address by Sandeep Chatterjee",
  },
  {
    label: "Why Choose SEG Academy?",
    href: "/about/why-choose-seg-academy",
    description: "Pedagogy, live trading lab & institutional advantages",
  },
  {
    label: "Mission & Vision",
    href: "/about/mission-vision",
    description: "Institutional charter, core values & accreditations",
  },
  {
    label: "About SEG Academy",
    href: "/about/overview",
    description: "Heritage, establishment & institutional profile",
  },
];

interface AboutPageLayoutProps {
  pageTitle: React.ReactNode;
  pageSubtitle: string;
  badge?: string;
  currentPath: string;
  heroMedia?: React.ReactNode;
  useVideoBackground?: boolean;
  children: React.ReactNode;
}

export function AboutPageLayout({
  pageTitle,
  pageSubtitle,
  badge = "INSTITUTIONAL PROFILE",
  currentPath,
  heroMedia,
  useVideoBackground = false,
  children,
}: AboutPageLayoutProps) {
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!useVideoBackground) return;
    const v = bgVideoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.volume = 0;

    const startPlayback = () => {
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {
          v.muted = true;
          v.play().catch(() => {});
        });
      }
    };

    startPlayback();
    v.addEventListener("loadeddata", startPlayback);
    v.addEventListener("canplay", startPlayback);

    const onVisibilityChange = () => {
      if (!document.hidden) {
        startPlayback();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      v.removeEventListener("loadeddata", startPlayback);
      v.removeEventListener("canplay", startPlayback);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [useVideoBackground]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Top Academic Hero Header */}
          <div
            className={`relative overflow-hidden ${
              useVideoBackground
                ? "bg-[#120520]"
                : "bg-gradient-to-b from-[#241038] via-[#2f1347] to-[#1c0c2d]"
            } py-14 lg:py-20 text-white border-b border-purple-500/20`}
          >
            {useVideoBackground ? (
              /* Full-Bleed Continuous Running Video / GIF replacing entire purple screen */
              <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
                <video
                  ref={bgVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  poster="https://res.cloudinary.com/zvlxacfu/video/upload/so_1,f_auto,q_auto/v1793607980/Video-46005.jpg"
                  className="h-full w-full object-cover object-center scale-105"
                  aria-label="Sandeep Sir live stock market mentorship video background"
                >
                  <source
                    src="https://res.cloudinary.com/zvlxacfu/video/upload/f_auto,q_auto/v1793607980/Video-46005.mp4"
                    type="video/mp4"
                  />
                  {/* High quality continuous GIF fallback */}
                  <img
                    src="https://res.cloudinary.com/zvlxacfu/video/upload/w_600,fps_12,f_gif,q_auto/v1793607980/Video-46005.gif"
                    alt="Sandeep Sir live stock market mentorship continuous GIF"
                    className="h-full w-full object-cover object-center"
                  />
                </video>

                {/* Balanced cinematic tint: clear, vivid video visibility while ensuring text readability on left */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#120520]/80 via-[#120520]/35 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#120520]/90 via-[#120520]/40 to-transparent"
                  aria-hidden="true"
                />
                {/* Signature Top-Right Ambient Orange Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(255,121,31,0.22)_0%,rgba(255,121,31,0.08)_35%,transparent_70%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/18 blur-3xl"
                />
              </div>
            ) : (
              <>
                {/* Ambient Background Accents & Signature Top-Right Orange Glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_30%,rgba(124,58,237,0.25),transparent_70%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(255,121,31,0.22)_0%,rgba(255,121,31,0.08)_35%,transparent_70%)]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/18 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl"
                />
              </>
            )}

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
                    <Link
                      to="/about/overview"
                      className="text-white/75 hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5 font-semibold text-[#FF8A24]">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <span>{pageTitle}</span>
                  </li>
                </ol>
              </nav>

              {/* Title, Eyebrow & Hero Media */}
              {heroMedia ? (
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2.5 mb-3">
                      <span className="rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40 backdrop-blur-md">
                        {badge}
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90 border border-white/15 backdrop-blur-md">
                        Est. 2017 • ISO 9001:2015
                      </span>
                      {useVideoBackground && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30 shadow-xs">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A24] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A24]" />
                          </span>
                          Live Mentorship Lab
                        </span>
                      )}
                    </div>

                    <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white drop-shadow-md">
                      {pageTitle}
                    </h1>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 font-normal drop-shadow-xs max-w-2xl">
                      {pageSubtitle}
                    </p>
                  </div>

                  <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                    {heroMedia}
                  </div>
                </div>
              ) : (
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40 backdrop-blur-md">
                      {badge}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90 border border-white/15 backdrop-blur-md">
                      Est. 2017 • ISO 9001:2015
                    </span>
                    {useVideoBackground && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30 shadow-xs">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A24] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A24]" />
                        </span>
                        Live Mentorship Lab
                      </span>
                    )}
                  </div>

                  <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white drop-shadow-md">
                    {pageTitle}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 font-normal drop-shadow-xs max-w-2xl">
                    {pageSubtitle}
                  </p>
                </div>
              )}

              {/* Quick Navigation Tabs */}
              <div className="mt-10 pt-4 border-t border-white/15">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {aboutNavItems.map((tab) => {
                    const isActive = currentPath === tab.href;
                    return (
                      <Link
                        key={tab.href}
                        to={tab.href}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#FF8A24] text-white shadow-md shadow-[#FF8A24]/30"
                            : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10 backdrop-blur-sm"
                        }`}
                      >
                        <span>{tab.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Page Body Content */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}


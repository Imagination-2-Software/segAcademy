import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ExternalLink,
  Home,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Building2,
  Layers,
  ArrowUpRight,
  Compass,
  GraduationCap,
  Cpu,
  Code2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brand } from "@/data/seg";

const title = "Our Ecosystem • Subsidiary Brands | SEG Academy";
const description =
  "Explore the diverse brands associated with SEG Academy: CareerDhara, Shorai, I2S – Imagination 2 Software, and Techogies – The Code School. Each building high-impact education, technology and software solutions.";

export const Route = createFileRoute("/subsidiary-brands")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/subsidiary-brands" },
    ],
    links: [{ rel: "canonical", href: "/subsidiary-brands" }],
  }),
  component: SubsidiaryBrandsPage,
});

export interface EcosystemBrand {
  id: string;
  number: string;
  name: string;
  tagline?: string;
  category: string;
  description: string;
  highlights: string[];
  logo: string;
  websiteUrl: string;
  buttonText: string;
  accentColor: string;
  glowColor: string;
  icon: typeof Compass;
  badgeLabel: string;
}

export const ecosystemBrands: EcosystemBrand[] = [
  {
    id: "careerdhara",
    number: "01",
    name: "CareerDhara",
    tagline: "Career with Clarity. Sahi College, Sahi Career.",
    category: "CAREER GUIDANCE & ADMISSIONS",
    description:
      "CareerDhara helps students and parents make informed education and career decisions through personalised counselling and college admission guidance. Its services cover programmes including B.Tech, MBA, PGDM, MBBS, BBA, BCA, M.Tech and MCA, with guidance around entrance exams, academic profiles, scholarships and college selection.",
    highlights: [
      "Career Counselling",
      "College Admissions",
      "Academic Guidance",
      "College Selection",
    ],
    logo: "/brands/careerdhara-logo.png",
    websiteUrl: "https://careerdhara.com/",
    buttonText: "VISIT CAREERDHARA ",
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.15)",
    icon: GraduationCap,
    badgeLabel: "Guidance & Admissions",
  },
  {
    id: "shorai",
    number: "02",
    name: "Shorai",
    tagline: "Innovation Labs, AI & K–12 STEM Excellence",
    category: "IT EDUCATION & DIGITAL SKILLS",
    description:
      "SHORAI helps K–12 schools build future-ready learning environments through AI, robotics, coding and STEM education, combining turnkey innovation labs, practical kits, project-based activities and teacher training programmes for educators.",
    highlights: [
      "Programming & Python",
      "Cybersecurity",
      "Data Analytics",
      "Digital Skills",
    ],
    logo: "/brands/shorai-logo.png",
    websiteUrl: "https://shorai.in/",
    buttonText: "VISIT Shorai",
    accentColor: "#7C3AED",
    glowColor: "rgba(124, 58, 237, 0.15)",
    icon: Cpu,
    badgeLabel: "K–12 STEM & Robotics",
  },
  {
    id: "i2s",
    number: "03",
    name: "I2S – Imagination 2 Software",
    tagline: "Build Faster. Grow Smarter. Scale with AI.",
    category: "SOFTWARE DEVELOPMENT & AI SOLUTIONS",
    description:
      "I2S transforms ideas into practical digital products through custom software development, AI-powered systems and business automation. Its services include web and mobile platforms, AI agents, custom business applications, workflow automation, digital growth solutions and AI integration.",
    highlights: [
      "Custom Software Development",
      "AI Systems & Automation",
      "Web & Mobile Applications",
      "Digital Growth Solutions",
    ],
    logo: "/brands/i2s-logo.png",
    websiteUrl: "https://imagination2software.com/",
    buttonText: "VISIT I2S",
    accentColor: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.15)",
    icon: Layers,
    badgeLabel: "Custom Software & AI",
  },
  {
    id: "techogies",
    number: "04",
    name: "Techogies – The Code School",
    tagline: "Industry-Ready Software Engineering & Mentorship",
    category: "DEVELOPER EDUCATION & CAREER DEVELOPMENT",
    description:
      "Techogies – The Code School focuses on helping aspiring developers build practical, industry-relevant technical skills. Through structured learning, real-world projects and mentor guidance, learners explore full-stack development, cybersecurity, APIs, databases, cloud deployment, collaborative development and production-oriented workflows.",
    highlights: [
      "Full Stack Development",
      "Cybersecurity & Ethical Hacking",
      "Real-World Projects",
      "Industry Mentorship",
    ],
    logo: "/brands/techogies-logo.png",
    websiteUrl: "https://techogies.online/",
    buttonText: "VISIT THE CODE SCHOOL",
    accentColor: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.15)",
    icon: Code2,
    badgeLabel: "Developer Academy",
  },
];

export function SubsidiaryBrandsPage() {
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (brandId: string) => {
    setLogoErrors((prev) => ({ ...prev, [brandId]: true }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between selection:bg-[#FF8A24]/20 selection:text-[#351650]">
      <div>
        {/* Global Navigation Bar */}
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Top Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#241038] via-[#2f1347] to-[#1c0c2d] py-16 sm:py-20 lg:py-24 text-white border-b border-purple-500/20">
            {/* Ambient Background Accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_25%,rgba(124,58,237,0.28),transparent_70%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/15 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl"
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
                    <span className="text-white/75">More</span>
                  </li>
                  <li className="flex items-center gap-1.5 font-semibold text-[#FF8A24]">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <span>Subsidiary Brands</span>
                  </li>
                </ol>
              </nav>

              {/* Eyebrow & Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40 backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-[#FF8A24]" />
                  THE SEG ACADEMY ECOSYSTEM
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 border border-white/15 backdrop-blur-md">
                  4 Associated Ventures
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm max-w-4xl leading-[1.12]">
                Our Ecosystem. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-white/95 to-[#FF8A24] bg-clip-text text-transparent">
                  Different Ideas. Shared Ambition.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-white/80 max-w-3xl font-normal">
                Explore the brands associated with SEG Academy, each building its own presence across
                education, technology, software and professional development.
              </p>

              {/* Quick Navigation Anchor Bar */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white/60 mr-1">
                  Jump to Brand:
                </span>
                {ecosystemBrands.map((b) => (
                  <a
                    key={b.id}
                    href={`#${b.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/90 hover:text-white border border-white/15 transition-all duration-150 backdrop-blur-sm"
                  >
                    <span className="text-[#FF8A24] font-bold text-[11px]">{b.number}.</span>
                    <span>{b.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Alternating Brand Ecosystem Showcase */}
          <section className="py-16 sm:py-24 lg:py-28 relative">
            <div className="mx-auto max-w-[1240px] px-5 lg:px-8 space-y-24 sm:space-y-32 lg:space-y-36">
              {ecosystemBrands.map((item, index) => {
                // Alternating layout:
                // Row 01 (index 0): Logo LEFT, Content RIGHT (isEven = false)
                // Row 02 (index 1): Content LEFT, Logo RIGHT (isEven = true)
                // Row 03 (index 2): Logo LEFT, Content RIGHT (isEven = false)
                // Row 04 (index 3): Content LEFT, Logo RIGHT (isEven = true)
                const isContentFirstOnDesktop = index % 2 === 1;
                const BrandIcon = item.icon;
                const hasLogoError = logoErrors[item.id];

                return (
                  <article
                    key={item.id}
                    id={item.id}
                    className="relative scroll-mt-28 transition-all duration-300"
                  >
                    {/* Connecting Marker Line (between sections on desktop) */}
                    {index < ecosystemBrands.length - 1 && (
                      <div
                        className="hidden lg:block absolute left-1/2 -bottom-20 w-px h-12 bg-gradient-to-b from-[#E5DDF0] to-transparent pointer-events-none"
                        aria-hidden="true"
                      />
                    )}

                    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16 items-center">
                      {/* ============================================================== */}
                      {/* VISUAL / LOGO CARD */}
                      {/* ============================================================== */}
                      <div
                        className={`w-full lg:col-span-5 ${
                          isContentFirstOnDesktop ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="relative group">
                          {/* Ambient Brand Color Glow */}
                          <div
                            className="absolute -inset-3 sm:-inset-4 rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-75 pointer-events-none"
                            style={{ backgroundColor: item.glowColor }}
                            aria-hidden="true"
                          />

                          {/* Authentic Logo Card Container */}
                          <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(53,22,80,0.06)] transition-all duration-500 group-hover:shadow-[0_22px_50px_rgba(53,22,80,0.12)] group-hover:-translate-y-1">
                            {/* Subtle Header Strip inside Card */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 sm:mb-8">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#351650] border border-[#E5DDF0]">
                                <BrandIcon className="h-3 w-3 text-[#FF8A24]" />
                                <span>{item.badgeLabel}</span>
                              </span>
                              <span className="font-display text-sm font-extrabold text-slate-400">
                                #{item.number}
                              </span>
                            </div>

                            {/* Centered Logo Display */}
                            <div className="relative h-44 sm:h-52 md:h-60 w-full flex items-center justify-center py-4 px-2">
                              {!hasLogoError ? (
                                <img
                                  src={item.logo}
                                  alt={`${item.name} official logo`}
                                  onError={() => handleImageError(item.id)}
                                  className="max-h-36 sm:max-h-44 md:max-h-48 max-w-[85%] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                                  loading={index === 0 ? "eager" : "lazy"}
                                />
                              ) : (
                                /* Clean Typographic Brand Fallback */
                                <div className="text-center space-y-2 p-4">
                                  <div
                                    className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md"
                                    style={{ backgroundColor: item.accentColor }}
                                  >
                                    <BrandIcon className="h-8 w-8" />
                                  </div>
                                  <h3 className="font-display text-2xl font-bold text-[#351650]">
                                    {item.name}
                                  </h3>
                                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                                    {item.category}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Card Footer: Domain hint & external badge */}
                            <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                              <span className="font-mono text-[11px] text-slate-400 truncate max-w-[200px]">
                                {item.websiteUrl.replace("https://", "").replace(/\/$/, "")}
                              </span>
                              <span className="inline-flex items-center gap-1 font-semibold text-[#FF8A24] group-hover:translate-x-0.5 transition-transform">
                                <span>Official Venture</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ============================================================== */}
                      {/* TEXTUAL CONTENT COLUMN */}
                      {/* ============================================================== */}
                      <div
                        className={`w-full lg:col-span-7 space-y-5 sm:space-y-6 ${
                          isContentFirstOnDesktop ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        {/* 1. Number Identifier & Category Label */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg px-2 text-xs font-extrabold text-white shadow-xs"
                            style={{ backgroundColor: item.accentColor }}
                          >
                            {item.number}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#FF8A24]">
                            {item.category}
                          </span>
                        </div>

                        {/* 2. Large Brand Name & Tagline */}
                        <div className="space-y-2">
                          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#351650]">
                            {item.name}
                          </h2>
                          {item.tagline && (
                            <p className="text-sm sm:text-base font-semibold text-[#FF8A24]">
                              {item.tagline}
                            </p>
                          )}
                        </div>

                        {/* 3. Short Description */}
                        <p className="text-sm sm:text-base leading-relaxed text-foreground/80 font-normal">
                          {item.description}
                        </p>

                        {/* 4. Supporting Highlights (Service Tags) */}
                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#351650]/60">
                            Key Focus & Core Offerings:
                          </p>
                          <div className="flex flex-wrap gap-2 sm:gap-2.5">
                            {item.highlights.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 rounded-xl bg-[#F7F3FC] px-3.5 py-1.5 text-xs font-semibold text-[#351650] border border-[#E5DDF0] transition-colors hover:bg-white hover:border-[#FF8A24]/40"
                              >
                                <CheckCircle2 className="h-3.5 w-3.5 text-[#FF8A24]" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* 5. Prominent Visit Website Button */}
                        <div className="pt-3">
                          <a
                            href={item.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit official ${item.name} website at ${item.websiteUrl} (opens in a new tab)`}
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#FF8A24] to-[#f97316] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(255,138,36,0.3)] hover:shadow-[0_8px_25px_rgba(255,138,36,0.45)] hover:from-[#e0771c] hover:to-[#ea580c] transition-all duration-300 w-full sm:w-auto"
                          >
                            <span>{item.buttonText}</span>
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                          </a>
                          <p className="mt-2 text-[11px] text-muted-foreground flex items-center gap-1">
                            <ExternalLink className="h-3 w-3" />
                            <span>Opens external official website in a new tab</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Bottom Ecosystem Synthesis Banner */}
          <section className="bg-gradient-to-br from-[#241038] to-[#351650] py-14 sm:py-16 text-white border-t border-purple-500/20">
            <div className="mx-auto max-w-[1240px] px-5 lg:px-8 text-center space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30">
                <Building2 className="h-3.5 w-3.5" />
                Collaborative Institutional Vision
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white max-w-2xl mx-auto">
                Bridging Financial Markets, Software & Practical Careers
              </h2>
              <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
                From technical stock market trading at SEG Academy to AI systems, K–12 innovation
                laboratories and career admissions, our ecosystem partners drive measurable real-world
                outcomes for learners and modern enterprises.
              </p>
              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#351650] hover:bg-slate-100 transition-colors shadow-sm"
                >
                  <Home className="h-3.5 w-3.5" />
                  <span>Return to Homepage</span>
                </Link>
                <a
                  href="/#courses"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FF8A24] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#e0771c] transition-colors shadow-sm"
                >
                  <span>Explore SEG Academy Programs</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}


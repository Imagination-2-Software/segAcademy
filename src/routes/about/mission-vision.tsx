import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  Compass,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Layers,
  Lightbulb,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { AboutPageLayout } from "@/components/about/AboutPageLayout";
import { accreditations, brand } from "@/data/seg";

const title = "Our Mission & Vision | SEG Academy Institutional Charter";
const description =
  "Discover the core mission, institutional vision, ethical values, and government accreditations that steer SEG Academy as a premier financial education institute.";

export const Route = createFileRoute("/about/mission-vision")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about/mission-vision" },
    ],
    links: [{ rel: "canonical", href: "/about/mission-vision" }],
  }),
  component: MissionVisionPage,
});

function MissionVisionPage() {
  const coreValues = [
    {
      title: "Integrity & Empirical Honesty",
      desc: "We prioritize raw mathematical reality over market hype. We never promise unrealistic overnight gains, grounding every lesson in verifiable probabilities and risk management.",
      icon: Scale,
    },
    {
      title: "Practical Market Competence",
      desc: "Education is only as valuable as its execution under live market conditions. We train students on real-time terminals, tick data, and institutional order book dynamics.",
      icon: TrendingUp,
    },
    {
      title: "Student-First Mentorship",
      desc: "Every learner possesses a unique psychological temperament. Our faculty provides individual journal reviews and personalized doubt clearance until independence is achieved.",
      icon: HeartHandshake,
    },
    {
      title: "Regulatory & Academic Compliance",
      desc: "Operating with corporate governance under MCA (Govt of India), ISO 9001:2015 quality norms, and National Education Policy (NEP) academic credit guidelines.",
      icon: ShieldCheck,
    },
  ];

  return (
    <AboutPageLayout
      pageTitle={
        <>
          Our Mission &amp;{" "}
          <span className="seg-gradient-heading-light">Vision</span>
        </>
      }
      pageSubtitle="The educational principles, core institutional values, and long-term vision guiding SEG Academy's commitment to Indian financial literacy."
      badge="INSTITUTIONAL CHARTER"
      currentPath="/about/mission-vision"
    >
      <div className="space-y-16">
        {/* Section 1 & 2: Two Distinct, Elegant Mission & Vision Panels */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)] flex flex-col justify-between">
            <div className="seg-ambient-glow-subtle" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#FF8A24] border border-[#E5DDF0]">
                  <Target className="h-6 w-6 text-[#FF8A24]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                    Institutional Mandate
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                    Our <span className="seg-gradient-heading">Mission</span>
                  </h2>
                </div>
              </div>

              {/* Mission Statement */}
              <blockquote className="mt-6 rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-base sm:text-lg font-semibold text-[#351650] leading-relaxed italic">
                “To equip individuals with actionable financial, analytical, and professional skills necessary for sustained socioeconomic independence and disciplined market success.”
              </blockquote>

              <p className="mt-6 text-sm text-foreground/80 leading-relaxed">
                SEG Academy exists to eradicate financial illiteracy and bridge the gulf between academic economics and real-time capital markets. By offering systematic, affordable, and accredited instruction, we transform aspiring students and professionals into disciplined market participants who manage capital with institutional prudence.
              </p>

              {/* Action Pillars */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF8A24] mt-0.5" />
                  <span><strong>Democratize Market Knowledge:</strong> Bring institutional-grade training to tier-2 and tier-3 cities across India.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF8A24] mt-0.5" />
                  <span><strong>Enforce Risk Discipline:</strong> Instill non-negotiable risk-to-reward ratios and capital preservation rules.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FF8A24] mt-0.5" />
                  <span><strong>Generate Employability:</strong> Prepare students for research analyst, advisory, and dealing roles in BFSI sector.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#E5DDF0] flex items-center justify-between text-xs text-muted-foreground">
              <span>Established 2017</span>
              <span className="font-semibold text-[#351650]">15,000+ Alumni</span>
            </div>
          </div>

          {/* Vision Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)] flex flex-col justify-between">
            <div className="seg-ambient-glow-subtle" aria-hidden="true" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <Compass className="h-6 w-6 text-[#351650]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#351650]">
                    Long-Term Aspiration
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                    Our <span className="seg-gradient-heading">Vision</span>
                  </h2>
                </div>
              </div>

              {/* Vision Statement */}
              <blockquote className="mt-6 rounded-2xl border-l-4 border-[#351650] bg-[#F7F3FC] p-5 text-base sm:text-lg font-semibold text-[#351650] leading-relaxed italic">
                “To serve as India&apos;s foremost driver of ethical, accessible, and practical market education through tailored, inclusive, and terminal-grade training.”
              </blockquote>

              <p className="mt-6 text-sm text-foreground/80 leading-relaxed">
                We envision a future where retail market participation in India is respected as a legitimate, professional skill founded upon empirical analysis and psychological maturity, rather than speculative gambling.
              </p>

              {/* Strategic Horizon */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#351650] mt-0.5" />
                  <span><strong>National Campus Network:</strong> Expand state-of-the-art live trading laboratories to 20+ regional centers.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#351650] mt-0.5" />
                  <span><strong>University Integration:</strong> Partner with 100+ colleges for NAAC/NEP accredited finance credit courses.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#351650] mt-0.5" />
                  <span><strong>Fintech & Algorithmic Innovation:</strong> Provide students hands-on access to quantitative modeling and automation tools.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5DDF0] flex items-center justify-between text-xs text-muted-foreground">
              <span>National Vision</span>
              <span className="font-semibold text-[#FF8A24]">NEP / NAAC Standardized</span>
            </div>
          </div>
        </div>

        {/* Section 3: Core Institutional Values */}
        <div className="rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Ethical Pillars
            </span>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
              The Core Values That Define Our Pedagogy
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Our culture is governed by ethical transparency, relentless discipline, and a deep sense of responsibility toward every learner&apos;s capital.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 transition-all duration-200 hover:border-[#FF8A24]/40 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#351650] border border-[#E5DDF0] shadow-xs">
                    <Icon className="h-5 w-5 text-[#FF8A24]" />
                  </div>
                  <h4 className="mt-4 font-display text-lg font-bold text-[#351650]">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4: Government Accreditations & Compliance */}
        <div className="rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Regulatory Trust & Governance
            </span>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
              Official Accreditations & Legal Compliance
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              SEG Academy complies with strict national corporate, quality management, and academic benchmarks.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accreditations.map((acc) => (
              <div
                key={acc.title}
                className="flex items-start gap-4 rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#FF8A24] border border-[#E5DDF0]">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-display text-base font-bold text-[#351650]">
                    {acc.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#FF8A24] mt-0.5">
                    {acc.subtitle}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {acc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E5DDF0] flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>
              <span className="font-semibold text-[#351650]">Corporate CIN:</span> {brand.cin}
            </div>
            <div>
              <span className="font-semibold text-[#351650]">Legal Entity:</span> {brand.legalName}
            </div>
            <div>
              <span className="font-semibold text-[#351650]">Quality Standard:</span> ISO 9001:2015
            </div>
          </div>
        </div>
      </div>
    </AboutPageLayout>
  );
}


import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  Cpu,
  GraduationCap,
  LineChart,
  Monitor,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { AboutPageLayout } from "@/components/about/AboutPageLayout";
import { brand, rating, whyBenefits } from "@/data/seg";
import mentorImg from "@/assets/mentor.jpg";
import academyInteriorImg from "@/assets/academy-interior.jpg";
import marketInterfaceImg from "@/assets/market-interface.jpg";

const title = "Why Choose SEG Academy? | Institutional Advantages";
const description =
  "Explore the verified institutional strengths of SEG Academy: experienced faculty, live trading labs, NEP-aligned curriculum, and disciplined stock market mentorship.";

export const Route = createFileRoute("/about/why-choose-seg-academy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about/why-choose-seg-academy" },
    ],
    links: [{ rel: "canonical", href: "/about/why-choose-seg-academy" }],
  }),
  component: WhyChooseSegPage,
});

function WhyChooseSegPage() {
  return (
    <AboutPageLayout
      pageTitle={
        <>
          Why Choose <span className="seg-gradient-heading-light">SEG Academy?</span>
        </>
      }
      pageSubtitle="Discover the academic rigor, live market trading laboratories, and verified institutional strengths that set SEG Academy apart."
      badge="ACADEMIC ADVANTAGES"
      currentPath="/about/why-choose-seg-academy"
      useVideoBackground={true}
    >
      <div className="space-y-16">
        {/* Core Institutional Stats Banner */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Institutional Heritage
            </span>
            <div className="mt-2 font-display text-3xl font-extrabold text-[#351650]">
              Since 2017
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              8+ years of dedicated financial market training
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Student Trust
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold text-[#351650]">
                {rating.score}
              </span>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FF8A24] text-[#FF8A24]" />
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Based on {rating.reviews}+ verified Google reviews
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Learners Empowered
            </span>
            <div className="mt-2 font-display text-3xl font-extrabold text-[#351650]">
              15,000+
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Graduates across classroom cohorts and university seminars
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Accredited Quality
            </span>
            <div className="mt-2 font-display text-3xl font-extrabold text-[#351650]">
              ISO 9001
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Certified Management System & MCA Registered CIN
            </p>
          </div>
        </div>

        {/* Feature Split 1: Live Market Laboratories & Infrastructure */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Practical Academic Infrastructure
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#351650]">
                  State-of-the-Art Live Market Trading <span className="seg-gradient-heading">Laboratories</span>
                </h2>
              </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              At SEG Academy, stock market education moves beyond passive slide presentations. Our primary campus in Sigra - Mahmoorganj, Varanasi houses high-speed, terminal-equipped trading stations with multi-monitor setups.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Students analyze institutional order flows, tick-by-tick volumes, and options volatility live as the market unfolds. This direct exposure desensitizes learners to market pressure and fosters the calculated composure required of professional traders.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FF8A24] mt-0.5" />
                <span>Dedicated multi-display trading stations for technical chart reading</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FF8A24] mt-0.5" />
                <span>Simulated algorithmic desks and risk-free test execution environments</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FF8A24] mt-0.5" />
                <span>Real-time mentor oversight during high-impact market events (RBI policy, earnings)</span>
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] shadow-xl">
            <img
              src={academyInteriorImg}
              alt="SEG Academy interior trading lab in Varanasi"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241038]/85 via-transparent to-transparent p-5 text-white">
              <p className="font-bold text-sm">Varanasi Flagship Trading Lab</p>
              <p className="text-xs text-white/80">Sigra - Mahmoorganj Executive Facility</p>
            </div>
          </div>
        </div>
      </div>

        {/* The 6 Verified Institutional Pillars */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                Pedagogical Framework
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                Six Pillars of the SEG Academy <span className="seg-gradient-heading">Learning</span> Advantage
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every course and workshop follows a proven educational methodology verified across 15,000+ alumni.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyBenefits.map((benefit, i) => (
                <div
                  key={benefit.n}
                  className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF8A24]/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white font-display text-xs font-bold text-[#FF8A24] shadow-xs border border-[#E5DDF0]">
                      {benefit.n}
                    </span>
                    <Award className="h-4 w-4 text-[#351650]/40" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {benefit.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Split 2: Experienced Faculty & Mentorship */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative overflow-hidden rounded-3xl border border-[#E5DDF0] shadow-xl">
              <img
                src={mentorImg}
                alt="Faculty mentoring student at SEG Academy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241038]/85 via-transparent to-transparent p-5 text-white">
                <p className="font-bold text-sm">Direct Mentorship Culture</p>
                <p className="text-xs text-white/80">Personal trade journal reviews and strategy refinement</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Faculty Excellence
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#351650]">
                  Mentorship Guided by Active Market <span className="seg-gradient-heading">Practitioners</span>
                </h2>
              </div>
              <p className="text-base text-foreground/80 leading-relaxed">
                Unlike academic institutions where instructors teach purely from textbooks, SEG Academy faculty members are active traders, technical research analysts, and derivatives specialists who navigate the markets daily.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Led by Director Sandeep Chatterjee (15+ years experience), along with senior trainers from institutions like IIT Kanpur and professional brokerage desks, learners benefit from battle-tested strategies and pragmatic market wisdom.
              </p>

              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#FF8A24]" />
                  <span className="text-sm font-bold text-[#351650]">
                    1-on-1 Doubt Resolution Clinics
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every batch includes dedicated revision clinics where mentors review student trade logs, correct psychological blind spots, and optimize risk parameters individually.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Split 3: NEP Alignment & University Add-ons */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-gradient-to-br from-[#241038] to-[#351650] p-8 sm:p-12 text-white shadow-xl">
          {/* Signature Top-Right Ambient Orange Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF8A24]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_15%,rgba(255,121,31,0.22)_0%,rgba(255,121,31,0.06)_40%,transparent_65%)]"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_360px] items-center">
            <div className="space-y-4">
              <span className="rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40">
                Academic Credibility
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Aligned with National Education Policy (NEP) &amp; <span className="seg-gradient-heading-light">NAAC Norms</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80">
                SEG Academy regularly conducts credit-eligible modular training in universities and colleges across Uttar Pradesh, Bihar, and Eastern India.
              </p>
              <p className="text-xs text-white/70 leading-relaxed">
                Our modules are structured in accordance with University Grants Commission (UGC) skill enhancement parameters and are eligible for Academic Bank of Credits (ABC) integration, empowering commerce and engineering students with tangible employability skills.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/15 space-y-4">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="h-6 w-6 text-[#FF8A24]" />
                <span className="font-display text-base font-bold text-white">
                  University Add-On Standards
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF8A24]" />
                  <span>College workshops & semester credit add-ons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF8A24]" />
                  <span>Academic Bank of Credits (ABC) compliance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FF8A24]" />
                  <span>Research analyst & dealership employability prep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AboutPageLayout>
  );
}


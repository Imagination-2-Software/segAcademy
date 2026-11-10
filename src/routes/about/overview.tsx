import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building,
  Building2,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  LineChart,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { AboutPageLayout } from "@/components/about/AboutPageLayout";
import { MentorSpotlight } from "@/components/about/MentorSpotlight";
import { accreditations, branches, brand, courses, rating, teamMembers } from "@/data/seg";
import academyExteriorImg from "@/assets/academy-exterior.jpg";
import academyInteriorImg from "@/assets/academy-interior.jpg";
import learningJourneyImg from "@/assets/learning-journey.jpg";

const title = "About SEG Academy | Institutional Overview & Heritage";
const description =
  "Comprehensive institutional profile of SEG Academy (Segacademy Private Limited): founded in 2017, ISO 9001:2015 certified, NEP-compliant trading laboratories and faculty leadership.";

export const Route = createFileRoute("/about/overview")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about/overview" },
    ],
    links: [{ rel: "canonical", href: "/about/overview" }],
  }),
  component: AboutOverviewPage,
});

function AboutOverviewPage() {
  const leadershipPreview = teamMembers.slice(0, 4);

  return (
    <AboutPageLayout
      pageTitle={
        <>
          About SEG Academy.{" "}
          <span className="seg-gradient-heading-light">
            Heritage &amp; Excellence.
          </span>
        </>
      }
      pageSubtitle="India's trusted stock market institute: our heritage, academic methodology, leadership governance, and institutional facilities."
      badge="INSTITUTIONAL PROFILE"
      currentPath="/about/overview"
    >
      <div className="space-y-16">
        {/* Section 1: Institutional Introduction & Heritage Split */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Foundational Background
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#351650]">
                  Shaping Disciplined Market Minds with{" "}
                  <span className="seg-gradient-heading">Excellence</span> Since 2017
                </h2>
              </div>

            <p className="text-base text-foreground/90 leading-relaxed">
              <strong className="text-[#351650] font-semibold">{brand.legalName}</strong> (Skill and Employability Generation Academy) is an EdTech and professional financial markets institute headquartered in Varanasi, Uttar Pradesh.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Established in 2017, the academy was founded on a singular premise: to replace uncalculated retail speculation with structured, institutional-grade price action analysis, disciplined risk management, and hands-on trading terminal practice.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Over the past 8+ years, SEG Academy has expanded beyond traditional classroom courses into formal academic add-on modules in higher educational institutions, complying with the National Education Policy (NEP) and NAAC norms, eligible for the Academic Bank of Credits (ABC).
            </p>

            {/* Quick Facts Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl bg-[#F7F3FC] p-3 border border-[#E5DDF0]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Incorporation
                </span>
                <p className="text-sm font-bold text-[#351650] mt-0.5">Est. 2017</p>
              </div>

              <div className="rounded-xl bg-[#F7F3FC] p-3 border border-[#E5DDF0]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Legal Entity
                </span>
                <p className="text-sm font-bold text-[#351650] mt-0.5">Pvt. Limited</p>
              </div>

              <div className="rounded-xl bg-[#F7F3FC] p-3 border border-[#E5DDF0] col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
                  Quality Audit
                </span>
                <p className="text-sm font-bold text-[#351650] mt-0.5">ISO 9001:2015</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] shadow-xl">
            <img
              src={academyExteriorImg}
              alt="SEG Academy Varanasi Headquarters exterior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241038]/90 via-[#241038]/40 to-transparent p-5 text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8A24] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Main Campus
              </span>
              <h3 className="mt-1 font-display text-base font-bold">
                Sigra - Mahmoorganj Academic Facility
              </h3>
              <p className="text-xs text-white/80">Varanasi, Uttar Pradesh - 221010</p>
            </div>
          </div>
        </div>
      </div>

        {/* Mentor Spotlight: Sandeep Sir Live Video Showcase */}
        <MentorSpotlight showFullMessageLink={true} />

        {/* Section 2: Educational Approach & 4-Stage Pedagogy */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                Pedagogical Framework
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                Our Four-Stage Academic <span className="seg-gradient-heading">Learning</span> Methodology
              </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We bridge theoretical finance and market reality through a sequential curriculum engineered for sustainable trading independence.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-sm font-bold text-[#FF8A24] shadow-xs border border-[#E5DDF0]">
                01
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                Theoretical Foundations
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Rigorous grounding in market microstructure, candlestick psychology, demand-supply imbalances, and macroeconomic drivers.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-sm font-bold text-[#FF8A24] shadow-xs border border-[#E5DDF0]">
                02
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                Live Terminal Demo
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Senior faculty dissect live market order book data, futures open interest, and options Greeks in real-time trading hours.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-sm font-bold text-[#FF8A24] shadow-xs border border-[#E5DDF0]">
                03
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                Simulated Lab Practice
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Students practice execution on paper simulation terminals under mentor observation without risking personal capital prematurely.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-display text-sm font-bold text-[#FF8A24] shadow-xs border border-[#E5DDF0]">
                04
              </div>
              <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                Journal Review & Alumni
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Continuous trade log audits, behavioral counseling, weekend revision masterclasses, and lifetime alumni access.
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Section 3: Flagship Courses & Academic Programs */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Curriculum Spectrum
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                  Comprehensive Market <span className="seg-gradient-heading">Education</span> Programs
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  From absolute beginner market literacy to advanced institutional options volatility strategies.
                </p>
              </div>
              <a
                href="/#courses"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF8A24] hover:underline"
              >
                Explore all courses <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <div
                key={course.code}
                className="flex flex-col justify-between rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5 transition-all duration-200 hover:border-[#FF8A24]/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-white px-2.5 py-1 text-[11px] font-bold text-[#351650] border border-[#E5DDF0]">
                      {course.code}
                    </span>
                    <span className="text-xs font-semibold text-[#FF8A24]">
                      {course.duration}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-[#351650]">
                    {course.name}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DDF0] flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium">{course.mode}</span>
                  <span className="text-[#351650] font-semibold">{course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Section 4: Leadership Preview & Directory Link */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Faculty & Governance
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                  Institutional <span className="seg-gradient-heading">Mentorship</span> &amp; Faculty
                </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Led by seasoned financial market analysts, educators, and institutional operations leads.
              </p>
            </div>
            <Link
              to="/leadership-team"
              className="inline-flex items-center gap-2 rounded-xl bg-[#351650] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#241038] transition-colors"
            >
              <span>View Full Team Directory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadershipPreview.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-3.5 rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-3.5"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-14 w-14 shrink-0 rounded-xl object-cover object-top border border-[#E5DDF0]"
                />
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-bold text-[#351650] truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#FF8A24] truncate mt-0.5">
                    {member.designation}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {member.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Section 5: Campuses, Regional Centers & Contact */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                Campus Network
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                Headquarters &amp; Regional Academic <span className="seg-gradient-heading">Campuses</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Visit our primary Varanasi trading laboratory or connect with our regional study centers across Uttar Pradesh and Bihar.
              </p>
            </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block rounded-md bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
                    {b.type}
                  </span>
                  <h4 className="mt-3 font-display text-base font-bold text-[#351650]">
                    {b.name}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {b.address}, {b.city}, {b.state} - {b.pincode}
                  </p>
                  {b.head && (
                    <p className="mt-2 text-[11px] font-medium text-[#351650]">
                      Center In-Charge: {b.head}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DDF0] flex items-center justify-between text-xs">
                  {b.phone ? (
                    <span className="font-semibold text-foreground">{b.phone}</span>
                  ) : (
                    <span className="text-muted-foreground">{brand.phone}</span>
                  )}
                  <a
                    href={b.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#FF8A24] hover:underline"
                  >
                    Directions <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Section 6: Corporate Divisions & Subsidiary Brands */}
        <div
          id="subsidiary-brands"
          className="relative overflow-hidden scroll-mt-32 rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)] space-y-8"
        >
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Corporate Divisions &amp; Specialized Entities
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                  Subsidiary Brands &amp; Multi-Brand <span className="seg-gradient-heading">Ecosystem</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Under the corporate governance of <strong>{brand.legalName}</strong> (CIN: {brand.cin}), we operate dedicated institutional initiatives spanning professional retail education, institutional partnerships, and specialized algorithmic curriculum tracks.
                </p>
              </div>
              <Link
                to="/subsidiary-brands"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#FF8A24] to-[#f97316] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:from-[#e0771c] hover:to-[#ea580c] transition-all"
              >
                <span>View Full Ecosystem</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Division 1: SEG Academy */}
            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#351650] text-[#FF8A24] font-display font-extrabold text-sm shadow-sm">
                  SEG
                </div>
                <h4 className="font-display text-lg font-bold text-[#351650]">
                  SEG Academy
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Premier physical and hybrid stock market training institute offering ISO 9001:2015 certified programs in technical analysis, options hedging, and live capital market lab handling.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DDF0] mt-4 flex items-center justify-between text-xs font-semibold text-[#FF8A24]">
                <span>Flagship Institute</span>
                <span>Varanasi HQ &amp; Centers</span>
              </div>
            </div>

            {/* Division 2: Money Matrix Program */}
            <div className="rounded-2xl border border-[#FF8A24]/40 bg-white p-6 shadow-sm flex flex-col justify-between ring-1 ring-[#FF8A24]/20">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF8A24] text-white font-display font-extrabold text-sm shadow-sm">
                  MMP
                </div>
                <h4 className="font-display text-lg font-bold text-[#351650]">
                  Money Matrix Program
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Specialized Smart Money Logic curriculum designed for intermediate traders navigating high-probability multi-asset setups across Indian indices, global markets, and digital assets.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-[#351650]">Specialized Division</span>
                <Link
                  to="/money-matrix"
                  className="inline-flex items-center gap-1 font-bold text-[#FF8A24] hover:underline"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Division 3: Higher Education NEP Academic Desk */}
            <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#351650] text-[#FF8A24] font-display font-extrabold text-sm shadow-sm">
                  NEP
                </div>
                <h4 className="font-display text-lg font-bold text-[#351650]">
                  Academic Add-On Division
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  University collaboration wing establishing NEP and NAAC aligned financial market literacy curricula eligible for the Academic Bank of Credits (ABC) across partner institutions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E5DDF0] mt-4 flex items-center justify-between text-xs font-semibold text-[#351650]">
                <span>University Tie-Ups</span>
                <span>Sunbeam Varuna &amp; Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AboutPageLayout>
  );
}


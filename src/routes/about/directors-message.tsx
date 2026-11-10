import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  CheckCircle2,
  FileText,
  GraduationCap,
  HeartHandshake,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { AboutPageLayout } from "@/components/about/AboutPageLayout";
import { MentorSpotlight } from "@/components/about/MentorSpotlight";
import { brand, teamMembers } from "@/data/seg";

const title = "Director's Message | About Us | SEG Academy";
const description =
  "Read the official institutional message from Sandeep Chatterjee, Director & Academic Head of SEG Academy, regarding ethical market education and student success.";

export const Route = createFileRoute("/about/directors-message")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about/directors-message" },
    ],
    links: [{ rel: "canonical", href: "/about/directors-message" }],
  }),
  component: DirectorsMessagePage,
});

function DirectorsMessagePage() {
  const director = teamMembers[0]; // Sandeep Chatterjee

  return (
    <AboutPageLayout
      pageTitle={
        <>
          A Message from Our{" "}
          <span className="seg-gradient-heading-light">Director</span>
        </>
      }
      pageSubtitle="A steadfast institutional commitment to transparent, disciplined, and practical financial market mentorship."
      badge="OFFICIAL DIRECTORATE"
      currentPath="/about/directors-message"
    >
      <div className="space-y-12">
        {/* Profile Card & Introduction */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[300px_1fr] items-start">
            {/* Director Portrait */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="relative overflow-hidden rounded-2xl border-4 border-[#F7F3FC] shadow-lg w-56 h-64 sm:w-64 sm:h-72">
                <img
                  src={director.image}
                  alt={director.name}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#241038]/90 via-[#241038]/40 to-transparent p-3 text-white">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#FF8A24] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    Verified Director
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="font-display text-2xl font-bold text-[#351650]">
                  {director.name}
                </h2>
                <p className="text-sm font-semibold text-[#FF8A24]">
                  {director.designation}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {brand.legalName}
                </p>

                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3.5 py-1.5 text-xs font-medium text-[#351650] border border-[#E5DDF0]">
                  <Award className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>{director.experience}</span>
                </div>
              </div>
            </div>

            {/* Professional Overview & Credentials */}
            <div className="space-y-5">
              <div className="border-b border-[#E5DDF0] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#351650]/60">
                  Institutional Leadership &amp; Governance
                </span>
                <p className="mt-2 text-base sm:text-lg leading-relaxed text-foreground font-medium">
                  {director.professionalBio}
                </p>
              </div>

              {/* Key Credentials Badges */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-[#F7F3FC] p-3.5 border border-[#E5DDF0]">
                  <GraduationCap className="h-5 w-5 shrink-0 text-[#351650] mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#351650]">
                      Academic Qualifications
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {director.credentials}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-[#F7F3FC] p-3.5 border border-[#E5DDF0]">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[#FF8A24] mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#351650]">
                      Institutional Oversight
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Curriculum architecture, NEP compliance & trading lab governance
                    </p>
                  </div>
                </div>
              </div>

              {/* Director's Core Mission Quote */}
              <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-gradient-to-r from-[#F7F3FC] to-white p-5">
                <Quote className="h-6 w-6 text-[#FF8A24]/40 mb-2" />
                <p className="text-sm sm:text-base font-semibold italic text-[#351650] leading-relaxed">
                  “{director.employeeTestimonial.quote}”
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                    {director.employeeTestimonial.focus}
                  </span>
                  <span className="text-xs text-muted-foreground">• Verified Official Statement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sandeep Sir Video Showcase */}
        <MentorSpotlight showFullMessageLink={false} />

        {/* Full Message Letter Surface */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-12 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="seg-ambient-glow-subtle" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="border-b border-[#E5DDF0] pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                Directorate Address • To Our Students &amp; Prospective Learners
              </span>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                Bridging the Chasm Between Market Theory and Trading <span className="seg-gradient-heading">Reality</span>
              </h3>
            </div>

            <div className="prose prose-purple max-w-none space-y-6 text-foreground/90 text-base leading-relaxed">
              <p>
                Dear Learners and Market Enthusiasts,
              </p>
              <p>
                When we established <strong>SEG Academy in 2017</strong>, Indian financial markets were undergoing a rapid evolution. Mobile connectivity and digital broking were introducing millions of new retail participants to the stock exchanges for the very first time. Yet, alongside this democratization came a sobering phenomenon: a high percentage of beginners were entering high-risk derivatives and volatile setups without formal grounding, risk architecture, or emotional discipline.
              </p>
              <p>
                From day one, our institutional objective at SEG Academy has been unambiguous: <strong>to replace uncalculated speculation with rigorous, rule-based methodology</strong>. The stock market is neither a lottery nor an impenetrable mystery; it is an auction driven by liquidity, institutional supply and demand, and probability. True market competence is not born from watching random videos on social media—it requires systematic study, dedicated mentor guidance, and hours of live terminal observation.
              </p>

              {/* Three Institutional Pillars */}
              <div className="grid gap-6 sm:grid-cols-3 my-8 pt-2">
                <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#351650] shadow-xs border border-[#E5DDF0]">
                    <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-[#351650]">
                    Capital Preservation First
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Profitability is a secondary byproduct of survival. Every curriculum at SEG Academy enforces non-negotiable stop-loss limits and strict position sizing.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#351650] shadow-xs border border-[#E5DDF0]">
                    <LineChart className="h-5 w-5 text-[#351650]" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-[#351650]">
                    Live Terminal Training
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Theoretical chart patterns look clear in retrospect; the real test is execution in ticking live markets. Our Varanasi trading labs simulate institutional desks.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#351650] shadow-xs border border-[#E5DDF0]">
                    <GraduationCap className="h-5 w-5 text-[#FF8A24]" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-[#351650]">
                    NEP & NAAC Standards
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    We actively partner with colleges and universities to provide Academic Bank of Credits (ABC) eligible add-on modules that build career employability.
                  </p>
                </div>
              </div>

              <p>
                As Director, my personal promise to every student who walks through our doors—whether at our flagship Sigra-Mahmoorganj campus or through our regional university programs—is that you will receive honest, transparent instruction. We do not sell false promises of guaranteed returns. Instead, we equip you with analytical clarity, psychological patience, and robust technical systems.
              </p>
              <p>
                Financial freedom is achievable, but it is earned through education, discipline, and perseverance. My entire faculty team and I look forward to guiding you on this rewarding journey.
              </p>
            </div>

            {/* Formal Institutional Sign-off */}
            <div className="pt-8 border-t border-[#E5DDF0] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="font-display text-xl font-bold text-[#351650]">
                  Sandeep Chatterjee
                </p>
                <p className="text-sm font-semibold text-[#FF8A24]">
                  Director & Academic Head
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {brand.legalName} • Corporate CIN: {brand.cin}
                </p>
                <p className="text-xs text-muted-foreground">
                  Headquarters: Sigra - Mahmoorganj, Varanasi, Uttar Pradesh
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F3FC] px-5 py-3 border border-[#E5DDF0] text-right">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#351650]">
                  Executive Office
                </span>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Email: {brand.email}
                </p>
                <p className="text-xs font-semibold text-[#351650]">
                  Tel: {brand.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Director's Key Responsibilities at SEG Academy */}
        <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Institutional Governance
            </span>
            <h3 className="mt-1 font-display text-2xl font-bold text-[#351650]">
              Director&apos;s Core Responsibilities & Focus Areas
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {director.responsibilities.map((resp, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-2xl bg-[#F7F3FC] p-4 border border-[#E5DDF0]"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FF8A24] mt-0.5" />
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {resp}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AboutPageLayout>
  );
}


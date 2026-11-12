import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Quote,
  ShieldCheck,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { teamMembers, type TeamMember, type TeamCategory } from "@/data/seg";

const title = "Meet Our Faculty | SEG Academy Varanasi";
const description =
  "Discover the market expertise, instructor credentials and dedication that drive SEG Academy forward. Meet Director Sandeep Chatterjee, lead faculty Ashish Sir, senior derivatives mentors, and technical analysts.";

export const Route = createFileRoute("/leadership-team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/leadership-team" },
    ],
    links: [{ rel: "canonical", href: "/leadership-team" }],
  }),
  component: LeadershipTeamPage,
});

export function LeadershipTeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };
    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  // Exclude Administration & Operations from Faculty Directory
  const facultyMembers = teamMembers.filter(
    (m) => m.category !== "Administration & Operations"
  );

  const categories: { label: string; value: string; count: number }[] = [
    { label: "All Faculty", value: "All", count: facultyMembers.length },
    {
      label: "Institutional Leadership",
      value: "Institutional Leadership",
      count: facultyMembers.filter((m) => m.category === "Institutional Leadership").length,
    },
    {
      label: "Academic Leadership & Faculty",
      value: "Academic Leadership & Faculty",
      count: facultyMembers.filter((m) => m.category === "Academic Leadership & Faculty").length,
    },
  ];

  const filteredMembers =
    activeTab === "All"
      ? facultyMembers
      : facultyMembers.filter((m) => m.category === activeTab);

  const institutionalLeadership = facultyMembers.filter(
    (m) => m.category === "Institutional Leadership"
  );
  const academicFaculty = facultyMembers.filter(
    (m) => m.category === "Academic Leadership & Faculty"
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden bg-[#0b0318] py-14 text-white lg:py-20 border-b border-purple-500/20">
          {/* Signature Top-Right Orange Ambient Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/18 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(255,121,31,0.22)_0%,rgba(255,121,31,0.08)_35%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(124,58,237,0.22),transparent_70%)]"
          />

          <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <div className="mt-6 max-w-3xl">
              <span className="rounded-full bg-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-strong border border-gold/30">
                Faculty Directory
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet Our <span className="seg-gradient-heading-light">Faculty</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/80 sm:text-xl">
                Discover the expert mentors, technical analysts, and educators who guide your learning at SEG Academy.
              </p>
              <p className="mt-2 text-sm text-white/60">
                Our institution is powered by active market strategists, certified educators, and quantitative analysts with verified institutional trading credentials.
              </p>
            </div>

            {/* Department Navigation Filter */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {categories.map((tab) => (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === tab.value
                      ? "bg-gold text-ink font-bold shadow-md"
                      : "border border-white/20 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Presentation Sections */}
        <div className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8 space-y-20">
            {/* If a specific category filter is chosen, show only that list */}
            {activeTab !== "All" ? (
              <div>
                <div className="border-b border-border pb-4">
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {activeTab}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Showing verified profiles ({filteredMembers.length})
                  </p>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredMembers.map((member) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      onSelect={() => setSelectedMember(member)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Section A: Institutional Leadership */}
                <div>
                  <div className="border-b border-border pb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-strong mb-2">
                      <Award className="h-3.5 w-3.5" /> Category A
                    </div>
                    <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      Institutional <span className="seg-gradient-heading">Leadership</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Executive governance, organizational roadmap, and institutional development.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {institutionalLeadership.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        onSelect={() => setSelectedMember(member)}
                      />
                    ))}
                  </div>
                </div>

                {/* Section B: Academic Leadership & Faculty */}
                <div>
                  <div className="border-b border-border pb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand/12 px-3 py-1 text-xs font-bold text-brand mb-2">
                      <GraduationCap className="h-3.5 w-3.5" /> Category B
                    </div>
                    <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                      Academic Leadership &amp; <span className="seg-gradient-heading">Faculty</span>
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lead instructors, technical analysts, derivatives mentors, and financial educators.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {academicFaculty.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        onSelect={() => setSelectedMember(member)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Expanded Profile Modal Dialog */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-member-name"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile details"
              className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-sand/80 text-ink hover:bg-sand transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header: Image + Essential Bio */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center pr-10">
              <div className="relative aspect-[4/4.5] w-28 sm:w-36 shrink-0 overflow-hidden rounded-2xl border-2 border-brand/20 bg-sand">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="rounded-full bg-brand/12 px-3 py-1 text-xs font-bold text-brand">
                  {selectedMember.category}
                </span>
                <h3 id="modal-member-name" className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-ink">
                  {selectedMember.name}
                </h3>
                <p className="text-sm font-semibold text-brand-strong">
                  {selectedMember.designation || selectedMember.role}
                </p>
                <p className="text-xs text-muted-foreground">{selectedMember.department}</p>
                <p className="mt-2 text-xs font-medium text-ink bg-sand/80 inline-block px-2.5 py-1 rounded-md">
                  ★ {selectedMember.experience}
                </p>
              </div>
            </div>

            {/* Professional Background */}
            <div className="mt-8">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                Professional Background
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {selectedMember.professionalBio || selectedMember.bio}
              </p>
            </div>

            {/* Areas of Expertise */}
            {selectedMember.expertise && selectedMember.expertise.length > 0 && (
              <div className="mt-6">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                  Areas of Expertise
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedMember.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="rounded-lg border border-border bg-sand/60 px-3 py-1 text-xs font-semibold text-ink"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Section 4: What I Do at SEG Academy */}
            <div className="mt-8 rounded-2xl border border-border bg-sand/40 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-brand" />
                <h4 className="font-display text-base font-bold text-ink">
                  What I Do at SEG Academy
                </h4>
              </div>
              <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-muted-foreground">
                {selectedMember.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: My Experience at SEG Academy (Employee Testimonial) */}
            <div className="mt-6 rounded-2xl border border-gold/40 bg-gold/5 p-5 sm:p-6 relative">
              <div className="flex items-center gap-2 text-gold-strong">
                <Quote className="h-4 w-4" />
                <h4 className="font-display text-base font-bold text-ink">
                  My Experience at SEG Academy
                </h4>
              </div>
              <p className="mt-3 text-sm italic leading-relaxed text-ink/90">
                &ldquo;{selectedMember.employeeTestimonial.quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t border-gold/20">
                <span>Theme: {selectedMember.employeeTestimonial.focus}</span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  ✓ Verified Team Review
                </span>
              </div>
            </div>

            {/* External Links */}
            {selectedMember.linkedin && (
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-brand hover:bg-sand transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-[#0A66C2]" /> Connect on LinkedIn
                </a>
                <span className="text-xs text-muted-foreground">
                  Official SEG Academy Faculty
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

// Sub-component: Individual Profile Card
function MemberCard({
  member,
  onSelect,
}: {
  member: TeamMember;
  onSelect: () => void;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
      {/* Photo with rounded rectangular frame */}
      <div className="relative aspect-[4/4.5] w-full overflow-hidden bg-sand/70 p-3">
        <div className="h-full w-full overflow-hidden rounded-2xl bg-black/10">
          <img
            src={member.image}
            alt={`${member.name} - ${member.role} at SEG Academy`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <span className="absolute bottom-5 left-5 rounded-md bg-ink/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xs">
          {member.experience.split(" ")[0]} Exp
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
            {member.category === "Institutional Leadership"
              ? "Leadership"
              : member.category === "Academic Leadership & Faculty"
              ? "Faculty & Mentor"
              : "Operations"}
          </span>
          {member.credentials && member.credentials.length > 0 && (
            <span className="text-[11px] font-bold text-gold-strong">
              {member.credentials[0]}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-bold text-ink">{member.name}</h3>
        <p className="text-xs font-semibold text-brand">{member.designation || member.role}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{member.department}</p>

        {/* Short Bio */}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground/90 line-clamp-3">
          {member.bio}
        </p>

        {/* Areas of Expertise Tags */}
        {member.expertise && (
          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {member.expertise.slice(0, 3).map((exp) => (
              <span
                key={exp}
                className="rounded-md bg-sand/80 px-2 py-0.5 text-[10.5px] font-medium text-ink/80"
              >
                {exp}
              </span>
            ))}
          </div>
        )}

        {/* What I Do at SEG Academy Preview */}
        <div className="mt-5 rounded-xl bg-sand/50 p-3.5 border border-border/60">
          <p className="text-[11px] font-bold uppercase tracking-wider text-ink/80 flex items-center gap-1.5">
            <Briefcase className="h-3 w-3 text-brand" /> What I Do at SEG Academy
          </p>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            {member.responsibilities.slice(0, 2).map((resp, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                <span className="line-clamp-1">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Corporate Employee Experience Quote Card */}
        <div className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-3.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-gold-strong flex items-center gap-1.5">
            <Quote className="h-3 w-3 text-gold-strong" /> My Experience at SEG Academy
          </p>
          <p className="mt-1.5 text-xs italic text-ink/80 line-clamp-2">
            &ldquo;{member.employeeTestimonial.quote}&rdquo;
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <button
            type="button"
            onClick={onSelect}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-strong transition-colors cursor-pointer"
          >
            View Full Profile →
          </button>

          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
              aria-label={`${member.name} LinkedIn profile`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          ) : (
            <span className="text-[11px] text-muted-foreground/60 italic">Verified Staff</span>
          )}
        </div>
      </div>
    </article>
  );
}


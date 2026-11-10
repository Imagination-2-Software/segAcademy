import { ArrowRight, Award, Linkedin, Users } from "lucide-react";
import { teamMembers } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

export function TeamSection() {
  // Curated spotlight of 4 core representatives for the homepage preview
  const previewMembers = [
    teamMembers.find((m) => m.id === "sandeep-chatterjee")!,
    teamMembers.find((m) => m.id === "ashish-kumar-gupta")!,
    teamMembers.find((m) => m.id === "satyajeet-biswas")!,
    teamMembers.find((m) => m.id === "arifa-samreen")!,
  ].filter(Boolean);

  return (
    <section id="team" className="relative overflow-hidden bg-sand/30 py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Verified Institutional Leadership &amp; Faculty
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Meet the People Behind SEG Academy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            SEG Academy is guided by experienced capital market practitioners, senior derivatives analysts, and dedicated student operations professionals committed to practical financial literacy.
          </p>
        </Reveal>

        {/* Selected Leadership & Mentors Preview Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 60} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                {/* Photo with rounded rectangular frame */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-xl bg-sand/80">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 left-2.5 rounded-md bg-ink/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-xs">
                    {member.category === "Institutional Leadership" ? "Leadership" : member.category === "Academic Leadership & Faculty" ? "Faculty" : "Operations"}
                  </span>
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="font-display text-lg font-bold text-ink">{member.name}</h3>
                  <p className="text-xs font-semibold text-brand">{member.role}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{member.department}</p>
                  
                  <p className="mt-3 flex-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {member.experience.split(" ")[0]} Experience
                    </span>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:underline flex items-center gap-1 font-semibold"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action to Dedicated Page */}
        <Reveal delay={150} className="mt-14 text-center">
          <a
            href="/leadership-team"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-strong hover:scale-105 shadow-md"
          >
            Meet Our Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Explore full faculty profiles, instructor credentials, and team responsibilities
          </p>
        </Reveal>
      </div>
    </section>
  );
}

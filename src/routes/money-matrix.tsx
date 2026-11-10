import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Globe, TrendingUp, ShieldCheck, UserCheck, Phone, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { brand, courses } from "@/data/seg";

const moneyMatrixCourse = courses.find((c) => c.id === "money-matrix")!;

const title = "Money Matrix Program | SEG Academy Varanasi";
const description =
  "Money Matrix Program at SEG Academy: One Program | All Markets | Zero Confusion. Learn smart money logic across Indian, global, and crypto markets with Ashish Sir (IIT Kanpur Alumni).";

export const Route = createFileRoute("/money-matrix")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/money-matrix" },
    ],
    links: [{ rel: "canonical", href: "/money-matrix" }],
  }),
  component: MoneyMatrixPage,
});

function MoneyMatrixPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32">
        {/* Breadcrumb Header */}
        <div className="bg-[#0b0318] border-b border-purple-500/20 py-8 lg:py-12">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Courses
            </Link>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-gold-strong border border-gold/30">
                FEATURED PROGRAM
              </span>
              <span className="text-xs text-white/60">
                SEG Academy Academic Offering
              </span>
            </div>

            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Money Matrix Program
            </h1>
            <p className="mt-2 text-lg font-medium text-gold sm:text-xl">
              One Program | All Markets | Zero Confusion
            </p>
            <p className="mt-1 text-sm text-white/70 sm:text-base">
              &quot;Learn One Trade Everywhere. Beat the Game with Smart Money Logic.&quot;
            </p>
          </div>
        </div>

        {/* Course Details Content */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: Official Program Poster */}
              <div className="lg:col-span-5">
                <div className="sticky top-28 overflow-hidden rounded-3xl border border-purple-500/25 bg-[#0e041d] p-3 shadow-lift">
                  <div className="overflow-hidden rounded-2xl bg-black/40">
                    <img
                      src={moneyMatrixCourse.image}
                      alt="Money Matrix Program Official Poster - SEG Academy"
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
                    />
                  </div>

                  <div className="mt-4 p-3 text-center">
                    <p className="text-xs font-medium text-muted-foreground">
                      Official SEG Academy Course Poster
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Program Specifications */}
              <div className="lg:col-span-7 space-y-10">
                {/* 1. Program Introduction */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    Program Introduction
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p className="text-lg font-medium text-foreground">
                      Explore Indian and global financial markets along with cryptocurrency through a structured learning approach.
                    </p>
                    <p>
                      The <strong>Money Matrix Program</strong> is structured around the principle of universal market logic: 
                      <em> &quot;Learn One Trade Everywhere. Beat the Game with Smart Money Logic.&quot;</em> Rather than forcing students to learn contradictory methods for each individual asset class, this program introduces a cohesive rule-based framework built to decode liquidity, institutional positioning, and smart money behavior.
                    </p>
                  </div>
                </div>

                {/* 2. Markets Covered */}
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">
                        Markets Covered
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Comprehensive exposure across active liquid trading venues
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl border border-border/80 bg-sand/60 p-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-brand" />
                        <h4 className="font-display text-sm font-bold text-ink">
                          Indian Market
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Equities, index derivatives (Nifty / Bank Nifty), and stock options.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/80 bg-sand/60 p-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-brand" />
                        <h4 className="font-display text-sm font-bold text-ink">
                          Global Market
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        International equity indices, commodities, and currency dynamics.
                      </p>
                    </div>

                    <div className="rounded-xl border border-border/80 bg-sand/60 p-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-gold-strong" />
                        <h4 className="font-display text-sm font-bold text-ink">
                          Cryptocurrency
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Major liquid digital asset pairs and technical cycle analysis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Trainer Profile */}
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold-strong">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">
                        Trainer Information
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Direct mentorship from an experienced market educator
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
                    <img
                      src="/team/ashish-gupta.jpeg"
                      alt="Ashish Sir - IIT Kanpur Alumni"
                      className="h-24 w-24 rounded-2xl object-cover border-2 border-brand/20 shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <h4 className="font-display text-2xl font-extrabold text-ink">
                          Ashish Sir
                        </h4>
                        <span className="rounded-full bg-brand/12 px-3 py-0.5 text-xs font-bold text-brand">
                          IIT Kanpur Alumni
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Lead Mentor &amp; Quantitative Market Trainer
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-ink">
                        <div className="rounded-lg bg-sand px-3 py-1.5">
                          ✓ 8000+ Students Trained
                        </div>
                        <div className="rounded-lg bg-sand px-3 py-1.5">
                          ✓ 10+ Years of Training Market Experience
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Verified Core Focus Areas */}
                <div className="rounded-2xl border border-border bg-sand/40 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-ink">
                    Core Learning Pillars
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>
                        <strong>Smart Money Logic:</strong> Identify where institutions accumulate and distribute liquidity without indicators clutter.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>
                        <strong>Unified Methodology:</strong> Apply one consistent decision framework across Indian stocks, global markets, and cryptocurrency.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                      <span>
                        <strong>Zero Confusion Execution:</strong> Eliminate conflicting indicators and emotional hesitation through rule-based setups.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 5. Admission & Inquiry CTA */}
                <div className="rounded-2xl border border-purple-500/30 bg-[#120526] p-6 text-white sm:p-8 shadow-card">
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    Enquire About Money Matrix Program
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Connect directly with the SEG Academy admissions desk for curriculum details, upcoming batch schedules, and seat availability.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href={brand.phoneHref}
                      className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-[1.02] shadow-sm"
                    >
                      <Phone className="h-4 w-4" /> Call: {brand.phone}
                    </a>
                    <a
                      href={brand.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
                    >
                      <MessageSquare className="h-4 w-4" /> Enquire via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


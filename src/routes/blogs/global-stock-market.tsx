import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Home,
  ChevronRight,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Mail,
  AlertCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getCategoryBySlug } from "@/data/blogs";

const title = "Global Stock Market Research & Indices | SEG Academy";
const description =
  "Explore upcoming educational research on international financial markets, US equities (S&P 500, Nasdaq), global interest rate cycles, and cross-border macroeconomic correlations.";

export const Route = createFileRoute("/blogs/global-stock-market")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs/global-stock-market" },
    ],
    links: [{ rel: "canonical", href: "/blogs/global-stock-market" }],
  }),
  component: GlobalStockMarketPage,
});

function GlobalStockMarketPage() {
  const category = getCategoryBySlug("global-stock-market")!;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Category Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#241038] via-[#2f1347] to-[#1c0c2d] py-14 lg:py-20 text-white border-b border-purple-500/20">
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-10 mx-auto max-w-[1240px] px-5 lg:px-8">
              {/* Breadcrumb */}
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
                      to="/blogs"
                      className="text-white/75 hover:text-white transition-colors"
                    >
                      Knowledge Hub
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5 text-[#FF8A24] font-semibold">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <span>Global Stock Market</span>
                  </li>
                </ol>
              </nav>

              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-white/15 backdrop-blur-md">
                    <Globe className="h-3.5 w-3.5 text-[#FF8A24]" />
                    <span>{category.badge}</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Global Stock Market
                  </h1>

                  <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl font-normal">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-amber-400" />
                      Editorial Syllabus in Preparation
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      NYSE, NASDAQ, LSE & Nikkei Indices
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-4 hidden lg:block">
                  <div className="overflow-hidden rounded-2xl border border-white/15 shadow-2xl aspect-[16/10]">
                    <img
                      src={category.coverImage}
                      alt={category.coverAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Intro & "Articles Coming Soon" State */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Column: Educational Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                    Curriculum In Focus
                  </span>
                  <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
                    Understanding International Macroeconomics & Capital Flows
                  </h2>
                </div>

                <p className="text-base text-foreground/85 leading-relaxed">
                  Indian markets do not operate in a vacuum. Decisions made by the US Federal Reserve, crude oil geopolitical shifts, currency movements (USD-INR), and foreign institutional investor (FII) flows profoundly impact domestic market sentiment.
                </p>

                <div className="space-y-3">
                  <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4 space-y-1">
                    <h3 className="font-display text-sm font-bold text-[#351650]">
                      1. US Markets & Federal Reserve Interest Rate Cycles
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Analysis of S&P 500, Nasdaq 100, and FOMC monetary policy transmission to emerging markets.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4 space-y-1">
                    <h3 className="font-display text-sm font-bold text-[#351650]">
                      2. Global Commodity & Currency Transmission
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Brent crude oil price action, dollar index (DXY) strength, and gold safe-haven dynamics.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4 space-y-1">
                    <h3 className="font-display text-sm font-bold text-[#351650]">
                      3. Cross-Border Technology Leaders
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Evaluating balance sheets and cash generation of semiconductor and AI infrastructure companies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Premium "Articles Coming Soon" Box */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-[#E5DDF0] bg-white p-8 sm:p-10 shadow-[0_16px_40px_rgba(53,22,80,0.08)] text-center space-y-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#351650] mx-auto border border-[#E5DDF0]">
                    <Clock className="h-8 w-8 text-[#FF8A24]" />
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-300">
                      Editorial Pipeline
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-extrabold text-[#351650]">
                      Global Market Articles Coming Soon
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                      Our research faculty is actively curating comprehensive, verified case studies on international stock markets and global ETFs.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/blogs/indian-stock-market"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#351650] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#241038] transition-colors"
                    >
                      <span>Explore Indian Equities Guides</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      to="/blogs"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      <span>Back to All Categories</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Statutory Disclaimer */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-16">
            <div className="rounded-2xl bg-amber-50/70 p-5 border border-amber-200/80 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <span className="font-bold">Statutory Educational Notice: </span>
                Cross-border equities and foreign index investing are governed by the Reserve Bank of India’s Liberalised Remittance Scheme (LRS) and international tax treaties. All educational material published by SEG Academy is strictly for conceptual understanding.
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}


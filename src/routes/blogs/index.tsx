import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Search,
  Sparkles,
  TrendingUp,
  Globe,
  Coins,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  AlertCircle,
  Home,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/blogs/CategoryCard";
import { BlogCard } from "@/components/blogs/BlogCard";
import { blogCategories, blogArticles, BlogCategorySlug } from "@/data/blogs";

const title = "Financial Knowledge Hub & Market Blogs | SEG Academy";
const description =
  "Explore institutional market research, Indian stock market fundamentals, FMCG distribution case studies, portfolio allocation frameworks, and cryptocurrency guides from SEG Academy.";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs" },
    ],
    links: [{ rel: "canonical", href: "/blogs" }],
  }),
  component: BlogHubLandingPage,
});

function BlogHubLandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = blogArticles.filter((art) => {
    const matchesCategory =
      selectedCategory === "all" || art.categorySlug === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      art.title.toLowerCase().includes(q) ||
      art.excerpt.toLowerCase().includes(q) ||
      art.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogArticles[0];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-[#241038] via-[#2f1347] to-[#1c0c2d] py-16 lg:py-24 text-white border-b border-purple-500/20">
            {/* Ambient Lighting */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl"
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
                  <li className="flex items-center gap-1.5 text-[#FF8A24] font-semibold">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <span>Knowledge Hub</span>
                  </li>
                </ol>
              </nav>

              <div className="max-w-3xl">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-white/15 backdrop-blur-md shadow-xs mb-4">
                  <Sparkles className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>SEG ACADEMY | KNOWLEDGE HUB</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Explore the World of <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-[#FF8A24]">
                    Financial Markets.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl font-normal">
                  Delve into Indian equity mechanics, macroeconomic forces, FMCG business moats, portfolio risk frameworks, and decentralized digital assets—authored with institutional clarity.
                </p>

                {/* Search Bar in Hero */}
                <div className="mt-8 relative max-w-xl">
                  <Search className="h-5 w-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by topic, stock name, FMCG, or crypto..."
                    className="w-full rounded-2xl border border-white/20 bg-white/10 pl-12 pr-4 py-3.5 text-sm font-medium text-white placeholder-white/50 backdrop-blur-md focus:border-[#FF8A24] focus:bg-white/15 focus:outline-hidden focus:ring-2 focus:ring-[#FF8A24]/30"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/60 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Category Showcase Section */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Browse by Market Domain
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650] mt-1">
                  Knowledge Hub Categories
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
                Select a domain below to access specialized research archives and practical guides.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </section>

          {/* Featured Deep-Dive Section */}
          {selectedCategory === "all" && !searchQuery && featuredArticle && (
            <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-12 lg:pb-16">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#FF8A24]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Editor's Featured Guide
                </span>
              </div>
              <BlogCard article={featuredArticle} featured={true} />
            </section>
          )}

          {/* Filter Bar & Articles Archive */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-16 lg:pb-24">
            {/* Filter Chips */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === "all"
                      ? "bg-[#351650] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-[#E5DDF0] hover:bg-[#F7F3FC]"
                  }`}
                >
                  All Categories ({blogArticles.length})
                </button>

                <button
                  onClick={() => setSelectedCategory("indian-stock-market")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === "indian-stock-market"
                      ? "bg-[#351650] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-[#E5DDF0] hover:bg-[#F7F3FC]"
                  }`}
                >
                  <TrendingUp className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>Indian Stock Market (4)</span>
                </button>

                <button
                  onClick={() => setSelectedCategory("cryptocurrency-market")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === "cryptocurrency-market"
                      ? "bg-[#351650] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-[#E5DDF0] hover:bg-[#F7F3FC]"
                  }`}
                >
                  <Coins className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>Cryptocurrency Market (1)</span>
                </button>

                <button
                  onClick={() => setSelectedCategory("global-stock-market")}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === "global-stock-market"
                      ? "bg-[#351650] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-[#E5DDF0] hover:bg-[#F7F3FC]"
                  }`}
                >
                  <Globe className="h-3.5 w-3.5 text-[#FF8A24]" />
                  <span>Global Markets (Coming Soon)</span>
                </button>
              </div>

              <div className="text-xs text-muted-foreground font-medium">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-[#E5DDF0] bg-white p-12 text-center space-y-4">
                <BookOpen className="h-12 w-12 text-slate-300 mx-auto" />
                <h3 className="font-display text-xl font-bold text-[#351650]">
                  No Articles Found
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                  {selectedCategory === "global-stock-market"
                    ? "Our Global Stock Market research syllabus is currently under preparation by our faculty desk. Guides on US equities and global indices will be published soon."
                    : `No guides match your search "${searchQuery}". Try searching for FMCG, Nifty, Bull Market, or Portfolio.`}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[#FF8A24] px-4 py-2 text-xs font-bold text-white hover:bg-[#e0771c] transition-colors"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </section>

          {/* In-Person Classroom Training Banner */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-16 lg:pb-24">
            <div className="rounded-3xl border border-[#E5DDF0] bg-gradient-to-r from-[#241038] via-[#351650] to-[#241038] p-8 sm:p-12 text-white shadow-xl">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40">
                    <GraduationCap className="h-4 w-4" />
                    <span>In-Person Classroom Cohorts • Varanasi</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    Translate Market Theory into Live Execution Rigor.
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                    Articles provide the conceptual blueprint. Real market competence is forged inside our live trading laboratory at Sigra - Mahmoorganj under the direct guidance of senior faculty mentors.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                  <a
                    href="/#courses"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF8A24] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#e0771c] transition-colors shadow-lg"
                  >
                    <span>Explore Training Programs</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="/about/why-choose-seg-academy"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-xs font-semibold text-white/90 hover:bg-white/20 transition-colors border border-white/15"
                  >
                    <span>Tour Live Trading Lab</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Statutory SEBI Disclaimer */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-16">
            <div className="rounded-2xl bg-amber-50/70 p-5 border border-amber-200/80 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <span className="font-bold">Statutory Educational Notice: </span>
                All articles, data tables, and diagrams published on the SEG Academy Knowledge Hub are developed strictly for academic, informational, and educational reference. SEG Academy does not provide personalized investment advisory or portfolio management services. Past performance of financial assets or indices is not indicative of future returns.
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}


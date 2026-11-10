import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Coins,
  Home,
  ChevronRight,
  ShieldCheck,
  Clock,
  Sparkles,
  AlertCircle,
  FileText,
  Lock,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blogs/BlogCard";
import { getCategoryBySlug, getArticlesByCategory } from "@/data/blogs";

const title = "Cryptocurrency Market & Blockchain Education | SEG Academy";
const description =
  "Educational guides on cryptocurrency architectures, Proof of Work vs Proof of Stake, token economics, and Indian tax compliance under Sections 115BBH & 194S.";

export const Route = createFileRoute("/blogs/cryptocurrency-market/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blogs/cryptocurrency-market" },
    ],
    links: [{ rel: "canonical", href: "/blogs/cryptocurrency-market" }],
  }),
  component: CryptoCategoryPage,
});

function CryptoCategoryPage() {
  const category = getCategoryBySlug("cryptocurrency-market")!;
  const articles = getArticlesByCategory("cryptocurrency-market");

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
                    <span>Cryptocurrency Market</span>
                  </li>
                </ol>
              </nav>

              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-white/15 backdrop-blur-md">
                    <Coins className="h-3.5 w-3.5 text-[#FF8A24]" />
                    <span>{category.badge}</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Cryptocurrency Market
                  </h1>

                  <p className="text-base sm:text-lg leading-relaxed text-white/85 max-w-2xl font-normal">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-[#FF8A24]" />
                      1 In-Depth Guide
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Lock className="h-3.5 w-3.5 text-emerald-400" />
                      Consensus Protocols & Self-Custody
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-amber-400" />
                      Indian 30% Tax & 1% TDS Architecture
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

          {/* Articles Grid */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                  Digital Asset Syllabus
                </span>
                <h2 className="font-display text-2xl font-extrabold text-[#351650]">
                  Published Digital Asset Guides ({articles.length})
                </h2>
              </div>
              <Link
                to="/blogs"
                className="text-xs font-bold text-[#FF8A24] hover:underline hidden sm:inline"
              >
                ← Back to All Categories
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {articles.map((art) => (
                <BlogCard key={art.id} article={art} />
              ))}
            </div>
          </section>

          {/* Statutory Notice */}
          <section className="mx-auto max-w-[1240px] px-5 lg:px-8 pb-16">
            <div className="rounded-2xl bg-amber-50/70 p-5 border border-amber-200/80 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <span className="font-bold">Indian Regulatory & Tax Advisory Notice: </span>
                In India, Virtual Digital Assets (VDAs) are subject to a flat 30% tax on net profits (Section 115BBH) without expense deductions or loss set-offs, plus 1% TDS on transactions (Section 194S). Crypto assets are highly volatile and unregulated by the Reserve Bank of India. SEG Academy publishes this guide strictly for technical and educational comprehension.
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}


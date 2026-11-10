import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Home,
  Clock,
  Calendar,
  Share2,
  Copy,
  Check,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  Quote,
  Sparkles,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogArticle, getRelatedArticles } from "@/data/blogs";
import { brand } from "@/data/seg";

interface BlogArticleLayoutProps {
  article: BlogArticle;
  children: React.ReactNode;
}

export function BlogArticleLayout({ article, children }: BlogArticleLayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  const relatedArticles = getRelatedArticles(article.slug, 3);

  // Scroll reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler for TOC clicks with URL hash sync
  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveHeadingId(targetId);
      if (typeof window !== "undefined" && window.history?.pushState) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    setMobileTocOpen(false);
  };

  // Initial load with hash or browser history back/forward navigation
  useEffect(() => {
    if (typeof window === "undefined") return;
    const scrollCurrentHash = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveHeadingId(targetId);
        }
      }
    };

    const timer = setTimeout(scrollCurrentHash, 300);
    window.addEventListener("hashchange", scrollCurrentHash);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollCurrentHash);
    };
  }, []);

  // IntersectionObserver for active TOC section with sticky header offset
  useEffect(() => {
    if (!article.tableOfContents || article.tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeadingId(entry.target.id);
          }
        });
      },
      { rootMargin: "-125px 0px -60% 0px" }
    );

    article.tableOfContents.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [article.tableOfContents]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== "undefined") {
      const text = encodeURIComponent(
        `${article.title} - Read on SEG Academy Financial Knowledge Hub: ${window.location.href}`
      );
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== "undefined") {
      const text = encodeURIComponent(`${article.title} via @SEGAcademy`);
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        "_blank"
      );
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      {/* Top Floating Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1.5 bg-transparent z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#FF8A24] via-[#e0771c] to-[#351650] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Article Header Hero */}
          <header className="relative bg-[#241038] text-white py-12 lg:py-16 border-b border-purple-500/20 overflow-hidden">
            {/* Ambient background blur */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FF8A24]/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto max-w-[1240px] px-5 lg:px-8">
              {/* Breadcrumbs */}
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
                  <li className="flex items-center gap-1.5">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <Link
                      to={`/blogs/${article.categorySlug}` as any}
                      className="text-white/75 hover:text-white transition-colors"
                    >
                      {article.categoryName}
                    </Link>
                  </li>
                  <li className="flex items-center gap-1.5 font-semibold text-[#FF8A24] truncate max-w-[200px] sm:max-w-[340px]">
                    <ChevronRight className="h-3 w-3 text-white/40" />
                    <span className="truncate">{article.title}</span>
                  </li>
                </ol>
              </nav>

              {/* Category & Read Time Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <Link
                  to={`/blogs/${article.categorySlug}` as any}
                  className="rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40 backdrop-blur-md hover:bg-[#FF8A24]/30 transition-colors"
                >
                  {article.categoryName}
                </Link>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90 border border-white/15 backdrop-blur-md">
                  <Clock className="h-3.5 w-3.5 text-[#FF8A24]" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/90 border border-white/15 backdrop-blur-md">
                  <Calendar className="h-3.5 w-3.5 text-slate-300" />
                  {article.publishedDate}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
                {article.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/85 max-w-3xl font-normal">
                {article.subtitle}
              </p>

              {/* Metadata & Share Bar */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/15 pt-6">
                <div className="flex items-center gap-2.5 text-xs text-white/75">
                  <span className="font-semibold text-white/90">SEG Academy Research Desk</span>
                  <span>•</span>
                  <span>Updated {article.updatedDate}</span>
                </div>

                {/* Social Share Bar */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/60 mr-1 hidden sm:inline">Share:</span>
                  <button
                    onClick={handleCopyLink}
                    title="Copy Article Link"
                    className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors border border-white/15"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleShareWhatsApp}
                    title="Share on WhatsApp"
                    className="rounded-lg bg-white/10 p-1.5 text-white hover:bg-emerald-600 transition-colors border border-white/15"
                  >
                    <Share2 className="h-4 w-4" />
                  </button>

                  <button
                    onClick={handleShareTwitter}
                    title="Share on X"
                    className="rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-white/20 transition-colors border border-white/15"
                  >
                    𝕏 Post
                  </button>

                  <button
                    onClick={handleShareLinkedIn}
                    title="Share on LinkedIn"
                    className="rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 transition-colors border border-white/15"
                  >
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Main Layout Container */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-10 lg:py-16">
            {/* Featured Editorial Hero Image */}
            <div className="mb-12 overflow-hidden rounded-3xl border border-[#E5DDF0] bg-slate-900 shadow-xl">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={article.coverImage}
                  alt={article.coverAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="border-t border-slate-100 bg-white px-5 py-3 text-xs text-muted-foreground flex items-center justify-between">
                <span>Illustration: {article.coverAlt}</span>
                <span className="font-semibold text-[#351650]">SEG Academy Research Desk</span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* LEFT COLUMN: Main Editorial Content (8 cols) */}
              <div className="lg:col-span-8 space-y-10">
                {/* Mobile Collapsible TOC */}
                {article.tableOfContents && article.tableOfContents.length > 0 && (
                  <div className="lg:hidden rounded-2xl border border-[#E5DDF0] bg-white p-4 shadow-sm">
                    <button
                      onClick={() => setMobileTocOpen((v) => !v)}
                      className="flex w-full items-center justify-between text-left font-display font-bold text-sm text-[#351650]"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#FF8A24]" />
                        Table of Contents ({article.tableOfContents.length} Sections)
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform ${
                          mobileTocOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileTocOpen && (
                      <nav className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                        {article.tableOfContents.map((item) => {
                          const isCurrent = activeHeadingId === item.id;
                          return (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              onClick={(e) => handleTocClick(e, item.id)}
                              className={`block text-xs py-1.5 px-2.5 rounded-lg transition-colors ${
                                isCurrent
                                  ? "bg-[#351650] text-[#FF8A24] font-bold"
                                  : "text-foreground/80 hover:bg-[#F7F3FC] hover:text-[#351650]"
                              }`}
                            >
                              {item.title}
                            </a>
                          );
                        })}
                      </nav>
                    )}
                  </div>
                )}

                {/* Article Prose Content */}
                <div className="blog-prose space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
                  {children}
                </div>

                {/* Frequently Asked Questions */}
                {article.faqs && article.faqs.length > 0 && (
                  <section id="faqs" className="mt-12 rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className="h-5 w-5 text-[#FF8A24]" />
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#351650]">
                        Frequently Asked Questions
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {article.faqs.map((faq, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-slate-200/80 bg-[#F7F3FC]/40 p-5 space-y-2"
                        >
                          <h4 className="font-display text-base font-bold text-[#351650]">
                            {faq.q}
                          </h4>
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Regulatory Citations & Official Sources */}
                {article.sources && article.sources.length > 0 && (
                  <section className="rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 shadow-sm space-y-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
                      <h3 className="font-display text-lg font-bold text-[#351650]">
                        Verified Regulatory Citations & Research Data
                      </h3>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
                      {article.sources.map((src, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold text-[#FF8A24]">•</span>
                          <div>
                            {src.url ? (
                              <a
                                href={src.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#351650] hover:text-[#FF8A24] underline inline-flex items-center gap-1"
                              >
                                <span>{src.title}</span>
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="font-semibold text-[#351650]">{src.title}</span>
                            )}
                            {src.note && <p className="text-xs text-slate-500 mt-0.5">{src.note}</p>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Mandatory SEBI Educational Disclaimer */}
                <div className="rounded-2xl bg-amber-50/80 p-5 border border-amber-200/80 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <span className="font-bold">SEBI Disclaimer & Statutory Warning: </span>
                    Investment in securities market are subject to market risks. Read all the related documents carefully before investing. This article is published purely for academic and educational purposes by SEG Academy and does not constitute investment advice, research report recommendation, or trade endorsement. Neither SEG Academy nor its mentors guarantee returns.
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Sticky Sidebar (4 cols) */}
              <aside className="lg:col-span-4 space-y-8 sticky top-28">
                {/* Desktop Sticky Table of Contents */}
                {article.tableOfContents && article.tableOfContents.length > 0 && (
                  <div className="hidden lg:block rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                      <BookOpen className="h-4 w-4 text-[#FF8A24]" />
                      <h4 className="font-display text-sm font-bold text-[#351650]">
                        Table of Contents
                      </h4>
                    </div>

                    <nav className="space-y-1 max-h-[360px] overflow-y-auto pr-1">
                      {article.tableOfContents.map((item) => {
                        const isCurrent = activeHeadingId === item.id;
                        return (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleTocClick(e, item.id)}
                            className={`block rounded-lg px-2.5 py-1.5 text-xs transition-all duration-150 ${
                              isCurrent
                                ? "bg-[#351650] text-[#FF8A24] font-bold border-l-4 border-[#FF8A24] pl-2 shadow-xs"
                                : "text-slate-600 hover:bg-[#F7F3FC] hover:text-[#351650]"
                            }`}
                          >
                            {item.title}
                          </a>
                        );
                      })}
                    </nav>
                  </div>
                )}

                {/* Classroom Mentorship Callout Widget */}
                <div className="rounded-3xl border border-[#E5DDF0] bg-gradient-to-br from-[#241038] to-[#351650] p-6 text-white shadow-xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF8A24]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/30">
                    <Sparkles className="h-3 w-3" />
                    Varanasi Classroom Batches
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-3">
                    Learn Live Market Trading at SEG Academy Lab
                  </h4>
                  <p className="mt-2 text-xs text-white/80 leading-relaxed">
                    Experience real-time chart analysis, order flow reading and live trading laboratories at our Sigra - Mahmoorganj campus.
                  </p>
                  <a
                    href="/#courses"
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#FF8A24] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#e0771c] transition-colors shadow-sm"
                  >
                    <span>Explore Training Programs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Quick Related Articles in Sidebar */}
                <div className="rounded-3xl border border-[#E5DDF0] bg-white p-6 shadow-sm space-y-4">
                  <h4 className="font-display text-sm font-bold text-[#351650] border-b border-slate-100 pb-3">
                    More Guides in This Knowledge Hub
                  </h4>

                  <div className="space-y-3">
                    {relatedArticles.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/blogs/${rel.categorySlug}/${rel.slug}` as any}
                        className="group block space-y-1 rounded-xl p-2 transition-colors hover:bg-[#F7F3FC]"
                      >
                        <span className="text-[10px] font-bold text-[#FF8A24] uppercase tracking-wider">
                          {rel.categoryName}
                        </span>
                        <h5 className="font-display text-xs font-bold text-slate-800 leading-snug group-hover:text-[#351650]">
                          {rel.title}
                        </h5>
                        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3 text-slate-400" />
                          {rel.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            {/* Bottom Full-Width Related Articles Grid */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
                    Continue Reading
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-[#351650]">
                    Related Articles & Market Deep-Dives
                  </h3>
                </div>
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A24] hover:underline"
                >
                  <span>Explore All Knowledge Hub Guides</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.id}
                    className="group flex flex-col justify-between rounded-2xl border border-[#E5DDF0] bg-white overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-900">
                        <img
                          src={rel.coverImage}
                          alt={rel.coverAlt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A24]">
                          {rel.categoryName}
                        </span>
                        <h4 className="font-display text-base font-bold text-[#351650] leading-snug group-hover:text-[#FF8A24] transition-colors">
                          <Link to={`/blogs/${rel.categorySlug}/${rel.slug}` as any}>
                            {rel.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {rel.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        to={`/blogs/${rel.categorySlug}/${rel.slug}` as any}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#FF8A24]"
                      >
                        <span>Read Guide</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}


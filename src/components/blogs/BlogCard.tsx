import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { BlogArticle } from "@/data/blogs";

interface BlogCardProps {
  article: BlogArticle;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ article, featured = false, className = "" }: BlogCardProps) {
  const articleHref = `/blogs/${article.categorySlug}/${article.slug}`;

  if (featured) {
    return (
      <div
        className={`group relative grid gap-6 overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white transition-all duration-300 hover:border-[#FF8A24]/40 hover:shadow-[0_20px_45px_rgba(53,22,80,0.1)] lg:grid-cols-12 items-center ${className}`}
      >
        {/* Featured 16:9 Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 lg:col-span-7 h-full min-h-[260px]">
          <img
            src={article.coverImage}
            alt={article.coverAlt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden"
            aria-hidden="true"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] backdrop-blur-md border border-white/10 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
              {article.categoryName}
            </span>
          </div>
        </div>

        {/* Featured Content Details */}
        <div className="p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between h-full space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1 font-medium">
                <Clock className="h-3.5 w-3.5 text-[#FF8A24]" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {article.publishedDate}
              </span>
            </div>

            <Link
              to={articleHref as any}
              className="block font-display text-2xl sm:text-3xl font-extrabold text-[#351650] leading-snug transition-colors group-hover:text-[#FF8A24]"
            >
              {article.title}
            </Link>

            <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
              {article.excerpt}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F7F3FC] text-[#351650] font-bold text-xs border border-[#E5DDF0]">
                SEG
              </div>
              <div>
                <p className="text-xs font-bold text-[#351650] flex items-center gap-1">
                  SEG Academy Research Desk
                  <CheckCircle2 className="h-3 w-3 text-[#FF8A24]" />
                </p>
                <p className="text-[10px] text-muted-foreground">Curriculum & Research Faculty</p>
              </div>
            </div>

            <Link
              to={articleHref as any}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#F7F3FC] px-4 py-2 text-xs font-bold text-[#351650] transition-colors group-hover:bg-[#FF8A24] group-hover:text-white"
            >
              <span>Read Guide</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8A24]/40 hover:shadow-[0_20px_45px_rgba(53,22,80,0.1)] ${className}`}
    >
      <div>
        {/* 16:9 Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={article.coverImage}
            alt={article.coverAlt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] backdrop-blur-md border border-white/10 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
              {article.categoryName}
            </span>
          </div>

          <div className="absolute bottom-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-xs">
              <Clock className="h-3 w-3 text-[#FF8A24]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 text-slate-400" />
            <span>{article.publishedDate}</span>
          </div>

          <Link
            to={articleHref as any}
            className="block font-display text-lg sm:text-xl font-bold text-[#351650] leading-snug transition-colors group-hover:text-[#FF8A24]"
          >
            {article.title}
          </Link>

          <p className="text-xs sm:text-sm leading-relaxed text-foreground/80 line-clamp-3">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 p-5 pt-3.5 bg-[#FDFBF7]/60 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
          <Clock className="h-3 w-3 text-[#FF8A24]" />
          {article.readTime}
        </span>

        <Link
          to={articleHref as any}
          className="inline-flex items-center gap-1 text-xs font-bold text-[#FF8A24] transition-transform duration-150 group-hover:translate-x-1"
        >
          <span>Read Full Article</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}


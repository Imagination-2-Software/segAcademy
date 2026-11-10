import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { BlogCategory } from "@/data/blogs";

interface CategoryCardProps {
  category: BlogCategory;
  className?: string;
}

export function CategoryCard({ category, className = "" }: CategoryCardProps) {
  const isComingSoon = category.isComingSoon;

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FF8A24]/40 hover:shadow-[0_20px_45px_rgba(53,22,80,0.1)] ${className}`}
    >
      <div>
        {/* Cover Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={category.coverImage}
            alt={category.coverAlt}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle gradient vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"
            aria-hidden="true"
          />

          {/* Category Top Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF8A24] backdrop-blur-md border border-white/10 shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
              {category.badge}
            </span>

            {isComingSoon && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/85 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 backdrop-blur-md">
                <Clock className="h-3 w-3" />
                Coming Soon
              </span>
            )}
          </div>

          {/* Bottom Overlay Title in Image */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
            <h3 className="font-display text-xl font-bold text-white drop-shadow-md">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
            {category.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-[#FF8A24]" />
            <span>{category.articleCountText}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="border-t border-slate-100 p-5 pt-4 bg-[#FDFBF7]/60">
        <Link
          to={`/blogs/${category.slug}` as any}
          className="inline-flex w-full items-center justify-between rounded-xl bg-[#F7F3FC] px-4 py-2.5 text-xs font-bold text-[#351650] transition-colors duration-150 group-hover:bg-[#FF8A24] group-hover:text-white"
        >
          <span>
            {isComingSoon ? "Explore Category Overview" : `View ${category.shortTitle} Guides`}
          </span>
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}


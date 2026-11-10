import { useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/seg";
import { Reveal } from "@/components/Reveal";

export function StudentStories() {
  const [currentPage, setCurrentPage] = useState(0);

  // We show 3 cards per view on desktop, 2 on tablet, 1 on mobile.
  // Standard chunking by 3 for desktop page indexing:
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const prevPage = () => {
    setCurrentPage((p) => Math.max(0, p - 1));
  };

  const nextPage = () => {
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const currentReviews = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Format 2-digit page string like 01 / 02 or 09 / 10 from reference
  const currentFormatted = String(currentPage + 1).padStart(2, "0");
  const totalFormatted = String(totalPages).padStart(2, "0");

  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Section Heading - Left-aligned, bold modern black typography */}
        <Reveal>
          <h2 className="text-left font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Student Stories
          </h2>
        </Reveal>

        {/* 3 Review Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentReviews.map((review, i) => (
            <Reveal key={review.id} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-[14px] bg-[#F5F5FF] p-7 sm:p-8 shadow-xs transition-transform duration-300 hover:-translate-y-1">
                <div>
                  {/* Five Indigo Stars */}
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-[#1e1b4b] text-[#1e1b4b]"
                      />
                    ))}
                  </div>

                  {/* Review Paragraph */}
                  <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-900">
                    {review.quote}
                  </p>
                </div>

                {/* Reviewer Profile at the Bottom */}
                <div className="mt-8 flex items-center gap-4 pt-4">
                  {/* Circular Avatar (approx 60-64px diameter with white border) */}
                  <div
                    className="grid h-14 w-14 sm:h-16 sm:w-16 shrink-0 place-items-center rounded-full border-2 border-white font-display text-base font-bold text-white shadow-xs"
                    style={{ backgroundColor: review.avatarBg }}
                  >
                    {review.avatarText}
                  </div>

                  {/* Reviewer Details */}
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-base font-bold text-slate-900">
                      {review.name}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-xs font-normal text-slate-600 sm:text-[13px]">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pagination Controls at Bottom Center */}
        {/* Layout: [ LEFT BUTTON ]   01 / 02   [ RIGHT BUTTON ] */}
        <div className="mt-14 flex items-center justify-center gap-6">
          {/* Left Arrow Button: White background, thin indigo border, rounded pill */}
          <button
            type="button"
            onClick={prevPage}
            disabled={currentPage === 0}
            aria-label="Previous reviews page"
            className={`flex h-[52px] w-[90px] items-center justify-center rounded-full border border-[#1e1b4b] bg-white transition-all duration-200 ${
              currentPage === 0
                ? "cursor-not-allowed opacity-35"
                : "cursor-pointer hover:bg-slate-50 hover:shadow-sm active:scale-95"
            }`}
          >
            <ArrowLeft className="h-5 w-5 text-[#1e1b4b]" />
          </button>

          {/* Dynamic Page Counter */}
          <span className="min-w-[70px] text-center font-display text-base font-bold text-[#1e1b4b]">
            {currentFormatted} / {totalFormatted}
          </span>

          {/* Right Arrow Button: Solid indigo background, rounded pill */}
          <button
            type="button"
            onClick={nextPage}
            disabled={currentPage >= totalPages - 1}
            aria-label="Next reviews page"
            className={`flex h-[52px] w-[90px] items-center justify-center rounded-full bg-[#1e1b4b] transition-all duration-200 ${
              currentPage >= totalPages - 1
                ? "cursor-not-allowed opacity-35"
                : "cursor-pointer hover:bg-[#2d2963] hover:shadow-sm active:scale-95"
            }`}
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}


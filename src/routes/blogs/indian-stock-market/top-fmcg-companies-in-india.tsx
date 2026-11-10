import { createFileRoute } from "@tanstack/react-router";
import { BlogArticleLayout } from "@/components/blogs/BlogArticleLayout";
import { FmcgDistributionTable } from "@/components/blogs/FmcgDistributionTable";
import { getArticleBySlug } from "@/data/blogs";
import { Store, TrendingUp, Truck, ShieldCheck, Zap } from "lucide-react";

const article = getArticleBySlug("top-fmcg-companies-in-india")!;

export const Route = createFileRoute(
  "/blogs/indian-stock-market/top-fmcg-companies-in-india"
)({
  head: () => ({
    meta: [
      { title: `${article.title} | SEG Academy` },
      { name: "description", content: article.excerpt },
      { property: "og:title", content: article.title },
      { property: "og:description", content: article.excerpt },
      { property: "og:type", content: "article" },
      { property: "og:image", content: article.coverImage },
      {
        property: "og:url",
        content: `/blogs/indian-stock-market/${article.slug}`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `/blogs/indian-stock-market/${article.slug}`,
      },
    ],
  }),
  component: TopFmcgCompaniesPage,
});

function TopFmcgCompaniesPage() {
  return (
    <BlogArticleLayout article={article}>
      {/* Editorial Quote */}
      <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-sm sm:text-base font-medium text-[#351650]">
        <p className="italic">
          “In the Indian consumer landscape, having a great product formulation is only 20% of the battle. The remaining 80% is the physical, irreplaceable distribution artery that places your ₹5 sachet into 9 million neighborhood kirana shops across 6,00,000 villages before 7:00 AM every single morning.”
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
          — SEG Academy Research & Faculty Desk
        </p>
      </div>

      {/* Section 1 */}
      <section id="understanding-the-fmcg-moat" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          1. The Distribution Moat: Why FMCG Outperforms In Volatile Markets
        </h2>
        <p>
          Fast-Moving Consumer Goods (FMCG) constitutes the fourth largest sector in the Indian economy. While consumer technology apps and capital-intensive manufacturing companies cycle through violent boom-and-bust phases, blue-chip FMCG leaders demonstrate unmatched earnings stability, high return on capital employed (RoCE), and near-zero long-term debt.
        </p>
        <p>
          At SEG Academy, when training students to analyze corporate financial statements, we emphasize that the true competitive moat of companies like Hindustan Unilever (HUL), ITC, Britannia, and Nestlé India is not merely their television marketing campaigns, but their <strong>physical distribution infrastructure</strong> built over six decades.
        </p>
      </section>

      {/* Section 2 */}
      <section id="the-kirana-distribution-power" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          2. The Mechanics of Kirana Network Penetration
        </h2>
        <p>
          India remains predominantly a general trade (GT) retail market, with over <strong>12 to 14 million traditional mom-and-pop kirana stores</strong> commanding over 75% of total grocery sales. To penetrate this decentralized network, leading FMCG companies operate multi-tiered distribution structures:
        </p>
        <div className="grid gap-4 sm:grid-cols-3 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Mother Depots & C&F</span>
            <p className="text-xs text-muted-foreground mt-1">
              Factories ship full truckloads to regional carrying and forwarding (C&F) distribution centers strategically located along key highway corridors.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Redistribution Stockists (RS)</span>
            <p className="text-xs text-muted-foreground mt-1">
              Thousands of exclusive local stockists maintain working inventory and extend 7-day to 14-day credit lines to urban and semi-urban grocers.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Rural Sub-Stockists & Shakti</span>
            <p className="text-xs text-muted-foreground mt-1">
              Feeder vans, localized distributors, and grassroots micro-entrepreneurs ensure direct replenishment in villages with populations under 2,000.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Table */}
      <section id="top-fmcg-leaders-breakdown" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          3. Comparative Analysis: Top FMCG Leaders by Retail Reach
        </h2>
        <p>
          Below is a detailed empirical breakdown comparing India’s foremost listed FMCG titans, their direct retail reach, total outlet footprint, and strategic moat, compiled from audited FY24 and FY25 annual reports:
        </p>

        {/* Embedded Interactive Table */}
        <FmcgDistributionTable />
      </section>

      {/* Section 4 */}
      <section id="financial-metrics-that-matter" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          4. Financial Metrics That Matter in FMCG Valuation
        </h2>
        <p>
          When evaluating an FMCG enterprise for long-term equity investment, standard metrics like Price-to-Earnings (P/E) tell only half the story. Sophisticated analysts inspect the following operational indicators:
        </p>
        <ul className="space-y-3 text-sm pl-4">
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#FF8A24]">•</span>
            <span><strong>Volume Growth vs. Value Growth:</strong> Healthy FMCG growth must be driven by underlying volume expansion (actual tonnage of goods sold) rather than solely passing on raw material price hikes to consumers.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#FF8A24]">•</span>
            <span><strong>Negative Working Capital Cycle:</strong> Elite FMCG operators receive cash upfront from stockists and consumers while enjoying 45-day to 90-day supplier credit terms, effectively financing their working capital using supplier capital.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-[#FF8A24]">•</span>
            <span><strong>Free Cash Flow Conversion:</strong> High-quality FMCG companies consistently convert over 80% to 100% of their net operating profit after tax (NOPAT) into real unencumbered free cash flow.</span>
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="rural-vs-urban-demand-cycles" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          5. Rural vs. Urban Demand Cycles & The Monsoon Factor
        </h2>
        <p>
          Rural India accounts for approximately 35% to 45% of total FMCG revenue across categories like laundry detergents, hair oils, biscuits, and skin care. Consequently, the performance of rural revenue is intimately tied to:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <h3 className="font-display text-sm font-bold text-[#351650]">
              Monsoon Spatial Distribution
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Timely southwest monsoons replenish agricultural output, farm income, and rural liquidity, triggering surges in mass discretionary consumption.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <h3 className="font-display text-sm font-bold text-[#351650]">
              Low Unit Price (LUP) Packs
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Sachets priced at ₹5, ₹10, and ₹20 allow rural consumers to manage daily household cash flow without committing to large upfront packaging expenses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="quick-commerce-disruption" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          6. The Rise of Quick Commerce (Blinkit, Zepto, Instamart)
        </h2>
        <p>
          The explosive growth of 10-minute quick-commerce dark stores in tier-1 and metro cities is altering channel dynamics. While modern quick-commerce represents less than 5% to 8% of national FMCG volumes today, it accounts for over 25% of incremental sales in premium urban segments such as chocolates, gourmet packaged snacks, and personal grooming.
        </p>
        <p>
          Established FMCG conglomerates have adapted swiftly by configuring specialized direct-to-dark-store pallet supply chains and launching premium, high-margin product variants exclusively tailored for digital app discovery.
        </p>
      </section>

      {/* Section 7 */}
      <section id="investment-framework-fmcg" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          7. The SEG Academy FMCG Investment Checklist
        </h2>
        <p>
          Before allocating long-term capital to an FMCG equity in your portfolio, verify these four non-negotiable quantitative criteria:
        </p>
        <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-5 space-y-3">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
            <span className="text-sm font-bold text-[#351650]">
              RoCE consistently above 25% across a 10-year rolling cycle.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
            <span className="text-sm font-bold text-[#351650]">
              Gross margins maintained above 40% even during commodity inflationary spikes.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
            <span className="text-sm font-bold text-[#351650]">
              Direct distribution footprint touching a minimum of 1.5 million retail stores.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
            <span className="text-sm font-bold text-[#351650]">
              Dividend payout ratio sustained at 50% or higher of reported net profit.
            </span>
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}


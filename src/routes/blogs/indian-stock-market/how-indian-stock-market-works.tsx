import { createFileRoute } from "@tanstack/react-router";
import { BlogArticleLayout } from "@/components/blogs/BlogArticleLayout";
import { InteractiveStockFlowchart } from "@/components/blogs/InteractiveStockFlowchart";
import { getArticleBySlug } from "@/data/blogs";
import {
  Landmark,
  ShieldCheck,
  Building2,
  Database,
  CheckCircle2,
  AlertOctagon,
  Layers,
} from "lucide-react";

const article = getArticleBySlug("how-indian-stock-market-works")!;

export const Route = createFileRoute(
  "/blogs/indian-stock-market/how-indian-stock-market-works"
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
  component: HowStockMarketWorksPage,
});

function HowStockMarketWorksPage() {
  return (
    <BlogArticleLayout article={article}>
      {/* Editorial Lead Quote */}
      <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-sm sm:text-base font-medium text-[#351650]">
        <p className="italic">
          “When you tap ‘BUY’ on your smartphone screen, your trade triggers an institutional symphony of microsecond algorithmic matching, legal novation, depository debits, and banking settlements across six regulated institutions. Understanding this mechanical architecture transforms you from a reckless speculator into a confident market participant.”
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
          — SEG Academy Research & Faculty Desk
        </p>
      </div>

      {/* Section 1 */}
      <section id="primary-vs-secondary-markets" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          1. Primary vs. Secondary Markets: Capital Formation
        </h2>
        <p>
          To understand the stock exchange, one must first distinguish between the two fundamental engines of capital:
        </p>
        <div className="grid gap-6 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
              Primary Market (IPOs & FPOs)
            </span>
            <h3 className="font-display text-lg font-bold text-[#351650]">
              Direct Corporate Capital Raising
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              In the primary market, a company sells newly created shares directly to public investors through an <strong>Initial Public Offering (IPO)</strong>. The subscription proceeds flow directly into the corporate treasury to fund new factories, repay institutional bank debt, or finance research.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#351650]/60">
              Secondary Market (NSE & BSE)
            </span>
            <h3 className="font-display text-lg font-bold text-[#351650]">
              Continuous Investor-to-Investor Trading
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Once shares are officially listed, they trade on the secondary market. Here, transactions occur purely between investors (seller to buyer). The issuing corporation receives no cash from these day-to-day trades, but benefits from accurate equity valuation and high liquidity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="key-market-participants" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          2. The 6 Pillars of the Indian Financial Architecture
        </h2>
        <p>
          The Indian securities ecosystem is recognized internationally as one of the most technologically advanced, fully dematerialized, and fraud-resistant financial systems in the world. It is powered by six interconnected institutional pillars:
        </p>
        <div className="grid gap-3 sm:grid-cols-2 pt-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">1. Stock Exchanges (NSE & BSE)</h4>
            <p className="text-[11px] text-muted-foreground">Electronic platforms hosting the continuous central limit order book where orders are matched on Price-Time Priority.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">2. SEBI Registered Brokers</h4>
            <p className="text-[11px] text-muted-foreground">Intermediaries (Zerodha, AngelOne, Groww, ICICI Direct) providing digital client trading terminals and margin management.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">3. Clearing Corporations (NSCCL / ICCL)</h4>
            <p className="text-[11px] text-muted-foreground">Institutions guaranteeing trade settlement via novation, absorbing all counterparty default risks.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">4. Depositories (NSDL & CDSL)</h4>
            <p className="text-[11px] text-muted-foreground">Electronic banks for shares holding electronic custody of your dematerialized securities.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">5. Clearing Banks (RBI Regulated)</h4>
            <p className="text-[11px] text-muted-foreground">Commercial banks executing funds transfers between broker accounts and clearing corporations.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3.5 space-y-1">
            <h4 className="font-bold text-xs text-[#351650]">6. The Regulator (SEBI)</h4>
            <p className="text-[11px] text-muted-foreground">Statutory regulatory body enforcing investor protection and market integrity under the SEBI Act, 1992.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Flowchart */}
      <section id="the-trade-lifecycle" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          3. Interactive Architecture: The End-to-End Trade Lifecycle
        </h2>
        <p>
          Click through each phase below to see what happens behind the scenes when a retail trade is submitted on the National Stock Exchange (NSE):
        </p>

        {/* Custom Flowchart Component */}
        <InteractiveStockFlowchart />
      </section>

      {/* Section 4 */}
      <section id="t-plus-one-settlement" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          4. India’s Global Leadership: The T+1 Settlement Cycle
        </h2>
        <p>
          Historically, stock trades settled on a T+5 (five days after trade date) or T+2 cycle. In January 2023, India achieved a historic financial milestone by migrating all equity shares to a <strong>full T+1 rolling settlement cycle</strong>—becoming the second major country globally after China to accomplish this feat, outpacing even the United States (which transitioned to T+1 in May 2024).
        </p>
        <p>
          Under T+1, if you purchase shares on Monday afternoon (T-Day), your demat account is electronically credited with authentic share ownership by Tuesday morning (T+1), dramatically reducing counterparty risk and freeing capital velocity.
        </p>
      </section>

      {/* Section 5 */}
      <section id="role-of-sebi" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          5. Regulatory Fortress: The Role of SEBI & Investor Protection
        </h2>
        <p>
          The Securities and Exchange Board of India (SEBI) operates as an autonomous statutory market supervisor with three primary mandates:
        </p>
        <ul className="space-y-2 text-sm pl-4">
          <li className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
            <span><strong>Investor Protection:</strong> Ensuring zero commingling of broker funds with client funds via strict upfront margin reporting and depository pledges.</span>
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
            <span><strong>Market Integrity & Surveillance:</strong> Algorithmic pattern detection to detect insider trading, circular front-running, and unauthorized bulk trading.</span>
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
            <span><strong>SCORES Portal Resolution:</strong> SEBI Complaints Redress System (SCORES 2.0) guaranteeing strict time-bound resolution for retail grievances.</span>
          </li>
        </ul>
      </section>

      {/* Section 6 */}
      <section id="demat-vs-trading-account" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          6. Demat Account vs. Trading Account vs. Bank Account
        </h2>
        <p>
          Retail beginners frequently confuse these three distinct accounts required to participate in Indian financial markets:
        </p>
        <div className="grid gap-4 sm:grid-cols-3 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">1. Bank Account</span>
            <p className="text-xs text-muted-foreground mt-1">
              Holds your cash savings (INR). Regulated by the Reserve Bank of India (RBI). Funds move into your trading balance via UPI or net banking.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">2. Trading Account</span>
            <p className="text-xs text-muted-foreground mt-1">
              Operated by your SEBI registered broker. Acts as the transaction interface where you submit buy, sell, limit, and stop-loss instructions.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">3. Demat Account</span>
            <p className="text-xs text-muted-foreground mt-1">
              Maintained with NSDL or CDSL. Holds your equity shares, government bonds, and ETFs in safe dematerialized electronic storage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="common-execution-errors" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          7. Critical Order Execution Errors to Avoid
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 space-y-3">
          <div className="flex items-start gap-3">
            <AlertOctagon className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-red-900">
                1. Placing Market Orders on Illiquid Small-Caps
              </h4>
              <p className="text-xs text-red-800/90 mt-0.5">
                Always use <strong>Limit Orders</strong> when trading thinly traded shares to avoid suffering massive price slippage against distant ask prices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <AlertOctagon className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-red-900">
                2. Confusing CNC (Cash & Carry) with MIS (Intraday)
              </h4>
              <p className="text-xs text-red-800/90 mt-0.5">
                MIS orders automatically square off at 3:15 PM with auto-square-off broker penalties. For long-term portfolio accumulation, always select <strong>CNC (Delivery)</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}


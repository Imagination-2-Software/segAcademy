import { createFileRoute } from "@tanstack/react-router";
import { BlogArticleLayout } from "@/components/blogs/BlogArticleLayout";
import { getArticleBySlug } from "@/data/blogs";
import {
  TrendingUp,
  TrendingDown,
  Activity,
  ShieldCheck,
  AlertTriangle,
  Compass,
  Zap,
} from "lucide-react";

const article = getArticleBySlug("bull-vs-bear-market")!;

export const Route = createFileRoute(
  "/blogs/indian-stock-market/bull-vs-bear-market"
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
  component: BullVsBearMarketPage,
});

function BullVsBearMarketPage() {
  return (
    <BlogArticleLayout article={article}>
      {/* Lead Quote */}
      <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-sm sm:text-base font-medium text-[#351650]">
        <p className="italic">
          “Bull markets are born on pessimism, grown on skepticism, mature on optimism, and die on euphoria. The investor who understands this cyclical rhythm ceases to fear market pullbacks and begins to recognize them as the greatest wealth-creation windows in financial history.”
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
          — SEG Academy Research & Faculty Desk
        </p>
      </div>

      {/* Section 1 */}
      <section id="origins-bull-bear-terms" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          1. The Anatomical Origins: Bull and Bear Metaphors
        </h2>
        <p>
          In global financial folklore, market directions are symbolized by the physical combat styles of two formidable animals:
        </p>
        <div className="grid gap-6 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
              <h3 className="font-display text-lg font-bold text-emerald-950">
                The Bull Thrusts Upward
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
              When a bull attacks, it lowers its head and thrusts its horns violently <strong>upward</strong> into the air. In equity parlance, a bull market describes sustained upward asset price momentum, expanding valuations, and widespread investor optimism.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-6 w-6 text-red-600" />
              <h3 className="font-display text-lg font-bold text-red-950">
                The Bear Swipes Downward
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed">
              When a bear engages in combat, it rears on its hind legs and swipes its heavy paws <strong>downward</strong> with overwhelming force. A bear market denotes a prolonged contraction—classically defined as a decline of <strong>20% or more</strong> from recent index peak levels.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="characteristics-bull-market" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          2. Anatomy of a Bull Market
        </h2>
        <p>
          A bull market is far more than a rising candlestick chart. It is an expansive macroeconomic phenomenon characterized by:
        </p>
        <ul className="space-y-2 text-sm pl-4">
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600">✓</span>
            <span><strong>Expanding Price-to-Earnings (P/E) Multiples:</strong> Investors become willing to pay higher multiples for future corporate earnings as risk appetite surges.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600">✓</span>
            <span><strong>Surge in Primary Offerings (IPOs):</strong> Promoters and private equity sponsors flood the market with initial public offerings, which are frequently oversubscribed 50x to 100x by retail participants.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-emerald-600">✓</span>
            <span><strong>High Domestic Retail Participation:</strong> Influx of first-time demat accounts, record systematic investment plan (SIP) inflows, and widespread casual stock discussions.</span>
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="characteristics-bear-market" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          3. Anatomy of a Bear Market
        </h2>
        <p>
          Bear markets are marked by widespread pessimism, severe capital contraction, and risk aversion triggered by economic shocks (such as interest rate hikes, banking liquidity crises, or geopolitical embargoes).
        </p>
        <ul className="space-y-2 text-sm pl-4">
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">✗</span>
            <span><strong>Sharp Multiple Compression:</strong> Even fundamentally strong companies experience stock price drops as foreign institutional investors (FIIs) liquidate equities to hold risk-free cash or treasury bills.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">✗</span>
            <span><strong>Negative Feedback Loops:</strong> Negative news cycles dominate media headlines; even healthy corporate earnings reports are sold off as market participants look for excuses to de-risk.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-red-600">✗</span>
            <span><strong>Liquidity Dry-Up in Small-Caps:</strong> Small and micro-cap stocks face steep bid-ask spreads, making it difficult for panic-stricken holders to exit positions without heavy slippage.</span>
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="psychology-market-cycles" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          4. The Psychological Cycle: From Hope to Capitulation
        </h2>
        <p>
          Renowned market psychologist Howard Marks observed that investor sentiment perpetually swings like a pendulum between greed and fear. In our SEG Academy classroom lectures, we map this cycle across five distinct emotional phases:
        </p>

        <div className="grid gap-3 sm:grid-cols-5 pt-2">
          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">Phase 1</span>
            <h4 className="font-bold text-xs text-[#351650] mt-1.5">Accumulation</h4>
            <p className="text-[11px] text-muted-foreground mt-1">Smart money quietly buys from exhausted sellers at bottom valuations.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Phase 2</span>
            <h4 className="font-bold text-xs text-[#351650] mt-1.5">Optimism</h4>
            <p className="text-[11px] text-muted-foreground mt-1">Broader public joins the uptrend; economic indicators turn decisively positive.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">Phase 3</span>
            <h4 className="font-bold text-xs text-[#351650] mt-1.5">Euphoria</h4>
            <p className="text-[11px] text-muted-foreground mt-1">“This time is different.” High leverage, penny stock frenzies, peak valuations.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Phase 4</span>
            <h4 className="font-bold text-xs text-[#351650] mt-1.5">Denial & Anxiety</h4>
            <p className="text-[11px] text-muted-foreground mt-1">Initial 10-15% correction is dismissed as a minor temporary dip.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <span className="text-[10px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">Phase 5</span>
            <h4 className="font-bold text-xs text-[#351650] mt-1.5">Capitulation</h4>
            <p className="text-[11px] text-muted-foreground mt-1">Retail investors panic-sell quality blue-chips right before the new cycle begins.</p>
          </div>
        </div>
      </section>

      {/* Section 5: Side-by-Side Comparison Table */}
      <section id="side-by-side-comparison" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          5. Side-by-Side Comparison: Bull vs. Bear Dynamics
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#351650] text-white uppercase text-[10px] tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Parameter</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-400">Bull Market Dynamic</th>
                <th className="py-3.5 px-4 font-semibold text-red-300">Bear Market Dynamic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Trend Duration</td>
                <td className="py-3 px-4 text-emerald-800 font-semibold">Extended (typically 3 to 7 years)</td>
                <td className="py-3 px-4 text-red-800 font-semibold">Compressed & violent (typically 8 to 18 months)</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Retail Sentiment</td>
                <td className="py-3 px-4">Euphoric, fear-of-missing-out (FOMO)</td>
                <td className="py-3 px-4">Fear, despair, disengagement</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">FII / DII Flow Behavior</td>
                <td className="py-3 px-4">Sustained net monthly institutional buying</td>
                <td className="py-3 px-4">Relentless net selling, flight to safe treasuries</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">IPO Market Activity</td>
                <td className="py-3 px-4">Frequent listings at premium valuations</td>
                <td className="py-3 px-4">IPO filings cancelled or severely postponed</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Optimal Strategy</td>
                <td className="py-3 px-4">Trend following, letting winners run, trailing stops</td>
                <td className="py-3 px-4">SIP accumulation, rebalancing, holding defensive cash</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 6 */}
      <section id="historical-indian-cycles" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          6. Historical Indian Market Cycles (2000 – Present)
        </h2>
        <p>
          Examining the history of the Nifty 50 and BSE Sensex illustrates a vital empirical truth: <strong>every Indian bear market has concluded with the index subsequently ascending to fresh all-time highs.</strong>
        </p>
        <div className="space-y-3 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-sm font-bold text-[#351650]">
                2008 Global Financial Crisis (Lehman Shock)
              </h4>
              <span className="text-xs font-mono font-bold text-red-600">-60% Nifty Drawdown</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Triggered by global subprime defaults. The Nifty fell from ~6,350 to 2,250 over 14 months, before rebounding 130% over the subsequent 18 months.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-sm font-bold text-[#351650]">
                March 2020 COVID-19 Flash Crash
              </h4>
              <span className="text-xs font-mono font-bold text-red-600">-38% Nifty Drawdown</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The fastest 38% contraction in Indian history occurring in under 30 trading sessions, followed by one of the strongest structural bull rallies in global market history.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="actionable-strategies" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          7. Actionable Strategies for Both Market Regimes
        </h2>
        <div className="rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC] p-6 space-y-4">
          <h3 className="font-display text-lg font-bold text-[#351650]">
            The Disciplined Investor’s Playbook
          </h3>
          <p className="text-sm text-foreground/85 leading-relaxed">
            1. <strong>Never exhaust 100% of your liquid emergency funds:</strong> Maintain 6 months of living expenses in liquid debt funds or fixed deposits so you never become a forced seller during a market correction.
          </p>
          <p className="text-sm text-foreground/85 leading-relaxed">
            2. <strong>Automate Rupee Cost Averaging:</strong> Continue SIPs into broad index funds mechanically throughout bear markets. Units acquired at discounted valuations generate superior internal rate of return (XIRR) when the next bull cycle takes flight.
          </p>
          <p className="text-sm text-foreground/85 leading-relaxed">
            3. <strong>Trim speculative froth in peak bull markets:</strong> When family relatives who never followed markets start giving penny stock tips, harvest profits from speculative high-beta holdings and reallocate into high-grade fixed income or defensive FMCG anchors.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  );
}


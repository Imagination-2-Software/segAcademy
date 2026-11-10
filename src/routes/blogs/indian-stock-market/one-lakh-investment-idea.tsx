import { createFileRoute } from "@tanstack/react-router";
import { BlogArticleLayout } from "@/components/blogs/BlogArticleLayout";
import { PortfolioAllocationTable } from "@/components/blogs/PortfolioAllocationTable";
import { getArticleBySlug } from "@/data/blogs";
import {
  TrendingUp,
  ShieldAlert,
  PieChart,
  CheckCircle2,
  AlertOctagon,
  Quote,
  Sparkles,
  Award,
} from "lucide-react";

const article = getArticleBySlug("one-lakh-investment-idea")!;

export const Route = createFileRoute(
  "/blogs/indian-stock-market/one-lakh-investment-idea"
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
  component: OneLakhInvestmentIdeaPage,
});

function OneLakhInvestmentIdeaPage() {
  return (
    <BlogArticleLayout article={article}>
      {/* Editorial Lead Note */}
      <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-sm sm:text-base font-medium text-[#351650]">
        <p className="italic">
          “Novice investors often ask: ‘Which single multibagger stock should I buy with my savings?’ Experienced market practitioners ask a fundamentally different question: ‘How should I allocate my capital so that no single market cycle can permanently damage my wealth?’”
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
          — SEG Academy Research & Faculty Desk
        </p>
      </div>

      {/* Section 1 */}
      <section id="why-asset-allocation-matters" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          1. Why Asset Allocation Determines Long-Term Success
        </h2>
        <p>
          A landmark study by Brinson, Hood, and Beebower published in the <em>Financial Analysts Journal</em> demonstrated that over <strong>91.5% of the variability</strong> in long-term portfolio performance is explained not by stock picking or short-term market timing, but by <strong>asset allocation</strong>—the deliberate distribution of capital across uncorrelated asset classes.
        </p>
        <p>
          In India, retail participants often enter equity markets during peak bull runs, allocate 100% of their savings into concentrated small-cap equities, and panic during inevitable 20% to 30% corrections. By establishing an illustrative ₹1 Lakh framework, beginners learn how institutional desks balance defensive anchors with aggressive compounding engines.
        </p>
      </section>

      {/* Section 2 */}
      <section id="power-of-diversification" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          2. The Mathematical Power of Diversification
        </h2>
        <p>
          Nobel laureate Harry Markowitz famously described diversification as <em>“the only free lunch in finance.”</em> When you combine assets with low or negative statistical correlation (such as Indian equities, government debt, and sovereign gold), the combined portfolio experiences lower aggregate volatility (standard deviation) without proportionally sacrificing compounding potential.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Uncorrelated Assets</span>
            <p className="text-xs text-muted-foreground mt-1">
              Equities thrive during economic expansions; gold acts as a purchasing-power hedge during geopolitical turmoil or currency debasement.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Reduced Drawdown</span>
            <p className="text-xs text-muted-foreground mt-1">
              A balanced portfolio experiences 10-15% peak-to-trough drawdowns during severe corrections, whereas concentrated equity holdings can drop 40%+.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <span className="text-xs font-bold text-[#FF8A24]">Behavioral Durability</span>
            <p className="text-xs text-muted-foreground mt-1">
              Investors who suffer manageable paper drawdowns are mathematically far less likely to sell at market bottoms due to emotional exhaustion.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Table */}
      <section id="deconstructing-one-lakh-portfolio" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          3. Deconstructing the Illustrative ₹1 Lakh Framework
        </h2>
        <p>
          Below is the model blueprint taught in SEG Academy’s foundational classroom modules. It divides ₹1,00,000 into six distinct strategic buckets, ensuring no individual sector or instrument can jeopardize the broader corpus:
        </p>

        {/* Embedded Custom Model Portfolio Allocation Component */}
        <PortfolioAllocationTable />
      </section>

      {/* Section 4 */}
      <section id="blue-chip-equities" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          4. Blue-Chip Large-Cap Equities (20% – ₹20,000)
        </h2>
        <p>
          Large-cap market leaders (companies ranking 1 to 100 by market capitalization) serve as the bedrock of your portfolio. In India, leaders such as Reliance Industries, HDFC Bank, TCS, and Infosys possess established revenue models, access to low-cost institutional capital, and defensive balance sheets capable of enduring multi-year macroeconomic recessions.
        </p>
        <ul className="space-y-2 text-sm pl-4">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
            <span><strong>High Institutional Ownership:</strong> Sustained foreign and domestic institutional liquidity ensures smooth trade execution with minimal bid-ask spread impact.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#FF8A24] shrink-0 mt-0.5" />
            <span><strong>Capital Preservation:</strong> Large-caps rarely face existential bankruptcy risks, making them the safest direct equity allocation for retail beginners.</span>
          </li>
        </ul>
      </section>

      {/* Section 5 */}
      <section id="consumer-staples" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          5. Consumer Staples & Defensive Plays (15% – ₹15,000)
        </h2>
        <p>
          Fast-Moving Consumer Goods (FMCG) corporations—including Hindustan Unilever (HUL), ITC, Britannia, and Nestlé—manufacture daily essentials such as soaps, packaged foods, tea, and biscuits. Regardless of macroeconomic GDP cycles, inflation rates, or geopolitical tensions, consumer demand for staple products remains remarkably inelastic.
        </p>
        <p>
          These businesses convert an immense percentage of their accounting profit into tangible operating cash flow, maintaining return on capital employed (RoCE) numbers exceeding 25% to 80% without incurring dangerous leverage.
        </p>
      </section>

      {/* Section 6 */}
      <section id="broad-index-funds" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          6. Broad Market Passive Index Funds (20% – ₹20,000)
        </h2>
        <p>
          A passive Nifty 50 or Nifty Next 50 index fund gives you automatic, low-cost exposure to India’s 50 largest listed corporations across 14 distinct economic sectors. Passive index investing carries an expense ratio as low as 0.05% to 0.15% per annum, completely eliminating individual company bankruptcy risk through the index's algorithmic semi-annual reconstitution.
        </p>
      </section>

      {/* Section 7 */}
      <section id="dividend-oriented-equities" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          7. Dividend & Cash-Flow Yield Equities (20% – ₹20,000)
        </h2>
        <p>
          Consistent dividend-paying stocks—often found in power utilities, transmission infrastructure, or mature consumer franchises (e.g., Power Grid, Coal India, ITC)—yield between 4% and 7% annual cash dividends. Reinvesting these dividend inflows back into your portfolio during market downturns accelerates the mathematical speed of compounding.
        </p>
      </section>

      {/* Section 8 */}
      <section id="growth-oriented-stocks" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          8. High-Conviction Growth Equities (20% – ₹20,000)
        </h2>
        <p>
          While defensive anchors protect your base capital, this bucket is designated to capture India’s transformative secular themes: industrial manufacturing, national capex, electronic manufacturing services (EMS), and green energy transitions. While short-term price volatility will be higher, these companies reinvest retained earnings into aggressive business expansion.
        </p>
      </section>

      {/* Section 9 */}
      <section id="gold-alternative-assets" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          9. Sovereign Gold / Precious Metal Hedge (5% – ₹5,000)
        </h2>
        <p>
          Holding 5% in Sovereign Gold Bonds (SGBs) or Gold Exchange Traded Funds (Gold BeES) serves as a strategic portfolio ballast. Over rolling 5-year periods in Indian rupee terms, gold has exhibited an inverse correlation to severe equity market drawdowns, shielding the investor from real purchasing power erosion.
        </p>
      </section>

      {/* Section 10 */}
      <section id="risk-management-first" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          10. Institutional Risk Architecture & Drawdown Control
        </h2>
        <p>
          The true test of an investment portfolio is not how fast it climbs during an euphoric bull market, but how effectively it insulates capital when the broader indices retrace 15% to 25%. Under this six-bucket allocation, even if high-growth stocks experience a 30% contraction, the steady cash flows from dividends, FMCG stability, and gold appreciation contain the total portfolio impact to a manageable drawdown.
        </p>
      </section>

      {/* Section 11 */}
      <section id="common-beginner-mistakes" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          11. 5 Critical Traps Retail Investors Must Avoid
        </h2>
        <div className="space-y-3 pt-2">
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
            <h3 className="font-display text-sm font-bold text-red-900">
              Trap 1: Putting 100% of Capital into Speculative Penny Stocks
            </h3>
            <p className="text-xs text-red-800/90 mt-1">
              Low share price (e.g., ₹5 or ₹10) does not mean cheap valuation. Penny companies frequently suffer from poor corporate governance, operator manipulation, and vanishing liquidity.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
            <h3 className="font-display text-sm font-bold text-red-900">
              Trap 2: Ignoring Portfolio Rebalancing
            </h3>
            <p className="text-xs text-red-800/90 mt-1">
              If an explosive growth stock runs up from 20% to 45% of your total corpus, your risk profile has inadvertently doubled. Perform an annual rebalancing review to harvest gains back into defensive anchors.
            </p>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4">
            <h3 className="font-display text-sm font-bold text-red-900">
              Trap 3: Stopping SIPs during Bear Market Corrections
            </h3>
            <p className="text-xs text-red-800/90 mt-1">
              Suspending index investments when market headlines turn negative destroys dollar-cost averaging. Market dips represent periods of accumulation at discounted price-to-earnings valuations.
            </p>
          </div>
        </div>
      </section>
    </BlogArticleLayout>
  );
}


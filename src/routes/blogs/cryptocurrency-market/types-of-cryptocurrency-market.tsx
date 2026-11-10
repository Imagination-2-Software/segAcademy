import { createFileRoute } from "@tanstack/react-router";
import { BlogArticleLayout } from "@/components/blogs/BlogArticleLayout";
import { getArticleBySlug } from "@/data/blogs";
import {
  Coins,
  Lock,
  FileText,
  ShieldAlert,
  Layers,
  KeyRound,
  AlertTriangle,
  Cpu,
  Database,
  CheckCircle2,
} from "lucide-react";

const article = getArticleBySlug("types-of-cryptocurrency-market")!;

export const Route = createFileRoute(
  "/blogs/cryptocurrency-market/types-of-cryptocurrency-market"
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
        content: `/blogs/cryptocurrency-market/${article.slug}`,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: `/blogs/cryptocurrency-market/${article.slug}`,
      },
    ],
  }),
  component: TypesOfCryptocurrencyPage,
});

function TypesOfCryptocurrencyPage() {
  return (
    <BlogArticleLayout article={article}>
      {/* Editorial Lead Note */}
      <div className="rounded-2xl border-l-4 border-[#FF8A24] bg-[#F7F3FC] p-5 text-sm sm:text-base font-medium text-[#351650]">
        <p className="italic">
          “In the realm of digital assets, financial literacy begins by distinguishing between genuine cryptographic infrastructure and speculative hype. If you cannot explain the difference between a native blockchain coin, an ERC-20 token, and the strict 30% Indian tax mandate under Section 115BBH, you are gambling with capital rather than investing.”
        </p>
        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
          — SEG Academy Research & Faculty Desk
        </p>
      </div>

      {/* Section 1 */}
      <section id="understanding-digital-assets" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          1. Understanding Digital Assets & Distributed Ledgers
        </h2>
        <p>
          At its foundational architectural level, a cryptocurrency is an immutable cryptographic entry stored across a decentralized, peer-to-peer distributed ledger known as a <strong>blockchain</strong>. Unlike fiat currency issued by central banks (such as the Reserve Bank of India or US Federal Reserve), decentralized cryptocurrencies rely on mathematical consensus mechanisms rather than central institutional intermediaries.
        </p>
        <p>
          However, the digital asset ecosystem is not a monolithic asset class. It spans distinct cryptographic architectures—from native store-of-value monetary experiments to programmable smart contract platforms, decentralized finance (DeFi) liquidity protocols, and fiat-collateralized stablecoins.
        </p>
      </section>

      {/* Section 2 */}
      <section id="coins-vs-tokens" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          2. The Crucial Distinction: Crypto Coins vs. Crypto Tokens
        </h2>
        <p>
          The most widespread mistake made by retail market participants is conflating <em>coins</em> and <em>tokens</em> as interchangeable terms. In computer science and financial engineering, they represent fundamentally different technical layers:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="h-6 w-6 text-blue-600" />
              <h3 className="font-display text-lg font-bold text-blue-950">
                Cryptocurrency Coins (Native Layer-1)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
              A <strong>coin</strong> operates natively on its own independent underlying blockchain network. It is utilized to pay transaction network fees (gas) and incentivize decentralized validators who secure the ledger.
            </p>
            <div className="pt-2 text-xs font-semibold text-blue-800">
              Key Examples: Bitcoin (BTC on Bitcoin Network), Ether (ETH on Ethereum), Solana (SOL on Solana Network).
            </div>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-purple-600" />
              <h3 className="font-display text-lg font-bold text-purple-950">
                Cryptocurrency Tokens (Smart Contracts)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
              A <strong>token</strong> does not have its own sovereign blockchain. Instead, it is deployed as a software smart contract (e.g. ERC-20 on Ethereum or SPL on Solana) utilizing the security and ledger architecture of an existing host blockchain.
            </p>
            <div className="pt-2 text-xs font-semibold text-purple-800">
              Key Examples: Uniswap (UNI), Chainlink (LINK), Tether (USDT on Ethereum).
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="major-cryptocurrency-categories" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          3. Taxonomy of the 5 Major Cryptocurrency Classes
        </h2>
        <div className="space-y-4 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">Class 1</span>
            <h3 className="font-display text-base font-bold text-[#351650]">
              Monetary & Store of Value Assets (Bitcoin)
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Bitcoin (BTC) was architected with a mathematically hard-capped supply of strictly 21 million units. With programmatic halving events every 210,000 blocks (~4 years), it is increasingly evaluated by global institutions as "Digital Gold" or an algorithmic hedge against fiat debasement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">Class 2</span>
            <h3 className="font-display text-base font-bold text-[#351650]">
              Smart Contract Infrastructure Platforms (Layer-1s)
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Platforms like Ethereum, Solana, and Avalanche serve as global decentralized computers. Developers build decentralized finance protocols, real-world asset (RWA) tokenization engines, and automated self-executing agreements on top of these networks.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">Class 3</span>
            <h3 className="font-display text-base font-bold text-[#351650]">
              Fiat-Collateralized Stablecoins (USDT, USDC)
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Tokens pegged 1:1 to fiat currencies (predominantly the US Dollar). Backed by commercial paper and short-term US Treasury bills held in custodian vaults, stablecoins provide a volatility-free bridge for global settlement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-5 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">Class 4</span>
            <h3 className="font-display text-base font-bold text-[#351650]">
              Decentralized Finance (DeFi) & Utility Tokens
            </h3>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Tokens conferring protocol governance voting rights or transaction fee share within decentralized exchanges (Uniswap, Aave) or decentralized oracle feeds (Chainlink).
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="consensus-pow-vs-pos" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          4. Consensus Mechanisms: Proof of Work (PoW) vs. Proof of Stake (PoS)
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#351650] text-white uppercase text-[10px] tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Parameter</th>
                <th className="py-3.5 px-4 font-semibold text-amber-300">Proof of Work (PoW)</th>
                <th className="py-3.5 px-4 font-semibold text-emerald-400">Proof of Stake (PoS)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Security Mechanism</td>
                <td className="py-3 px-4">Cryptographic computing energy (ASIC hardware hash rate)</td>
                <td className="py-3 px-4">Financial capital bonded as collateral (Staked coins)</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Primary Example</td>
                <td className="py-3 px-4 font-mono font-semibold">Bitcoin (BTC)</td>
                <td className="py-3 px-4 font-mono font-semibold">Ethereum (ETH), Solana (SOL)</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Environmental Footprint</td>
                <td className="py-3 px-4 text-amber-800">Energy-intensive hash computation</td>
                <td className="py-3 px-4 text-emerald-800">99.9% lower electrical consumption</td>
              </tr>
              <tr className="hover:bg-[#F7F3FC]/50">
                <td className="py-3 px-4 font-bold text-[#351650]">Malicious Attack Cost</td>
                <td className="py-3 px-4">Requires acquiring 51% of global physical computing hardware</td>
                <td className="py-3 px-4">Slashing: Protocol automatically destroys malicious validator's staked coins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: Indian Tax Law */}
      <section id="indian-crypto-tax-framework" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          5. Mandatory Indian Legal & Tax Architecture (Finance Act 2022)
        </h2>
        <p>
          In India, cryptocurrencies are legally classified as <strong>Virtual Digital Assets (VDAs)</strong> under Section 2(47A) of the Income Tax Act. Indian participants are subject to one of the most stringent and non-negotiable tax regimes in the world:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-red-300 bg-red-50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-700" />
              <h3 className="font-display text-base font-bold text-red-950">
                Section 115BBH: Flat 30% Tax
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-red-900/90 pl-3">
              <li>• Flat <strong>30% tax</strong> on all profits from the transfer of VDAs (plus applicable surcharge & 4% cess).</li>
              <li>• <strong>No deductions allowed</strong> for any expenses or trading commissions (only direct cost of acquisition).</li>
              <li>• <strong>Zero loss set-off:</strong> Loss incurred on one crypto trade CANNOT be set off against gains from another crypto asset or any other income source.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-amber-700" />
              <h3 className="font-display text-base font-bold text-amber-950">
                Section 194S: 1% TDS on Transfers
              </h3>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-900/90 pl-3">
              <li>• <strong>1% Tax Deducted at Source (TDS)</strong> on all transaction values exceeding ₹50,000 per financial year.</li>
              <li>• Designed to create an indelible digital audit trail with the Central Board of Direct Taxes (CBDT).</li>
              <li>• Compliance with <strong>Financial Intelligence Unit - India (FIU-IND)</strong> mandates under PMLA.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="security-and-self-custody" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          6. Security Imperatives: “Not Your Keys, Not Your Coins”
        </h2>
        <p>
          The collapse of centralized international crypto brokerages (such as FTX) underscored the foundational cryptographic maxim: <em>“Not your keys, not your coins.”</em>
        </p>
        <div className="grid gap-4 sm:grid-cols-2 pt-2">
          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <div className="flex items-center gap-2">
              <KeyRound className="h-4 w-4 text-[#FF8A24]" />
              <h4 className="font-bold text-xs text-[#351650]">Custodial Exchanges</h4>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              The exchange controls the private keys on your behalf. If the exchange suffers insolvency or security breaches, your assets are vulnerable.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E5DDF0] bg-white p-4">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-emerald-600" />
              <h4 className="font-bold text-xs text-[#351650]">Non-Custodial Hardware Cold Storage</h4>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Private keys are generated and stored offline on a physical cryptographic secure-element chip (Ledger, Trezor), insulated from internet attack vectors.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="institutional-risks-evaluation" className="space-y-4 scroll-mt-32 sm:scroll-mt-36">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
          7. The SEG Academy Institutional Risk Assessment
        </h2>
        <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 space-y-3">
          <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span>High Risk Warning for Retail Learners</span>
          </div>
          <p className="text-xs text-red-900/90 leading-relaxed">
            Unlike Indian equities governed by SEBI’s mature investor compensation funds and clearing house novation, cryptocurrency markets are characterized by 70% to 80% cyclical drawdowns, smart contract bugs, de-pegging risks, and absence of regulatory insurance in India. Never allocate capital that you cannot afford to lose entirely.
          </p>
        </div>
      </section>
    </BlogArticleLayout>
  );
}


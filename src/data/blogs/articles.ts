import { BlogArticle } from "./types";
import oneLakhImg from "@/assets/blogs/one-lakh-portfolio.jpg";
import fmcgImg from "@/assets/blogs/top-fmcg-india.jpg";
import bullBearImg from "@/assets/blogs/bull-vs-bear.jpg";
import stockWorksImg from "@/assets/blogs/how-stock-market-works.jpg";
import cryptoTypesImg from "@/assets/blogs/types-of-crypto.jpg";

export const blogArticles: BlogArticle[] = [
  {
    id: "one-lakh-investment-idea",
    slug: "one-lakh-investment-idea",
    categorySlug: "indian-stock-market",
    categoryName: "Indian Stock Market",
    title: "Build Your ₹1 Lakh Investment Portfolio: A Beginner's Guide",
    subtitle:
      "Understand diversification, asset allocation and risk management through an illustrative ₹1 lakh educational portfolio blueprint.",
    excerpt:
      "A structured pedagogical framework illustrating how a ₹1,00,000 capital base can be allocated across large-cap blue-chips, consumer staples, broad index funds, dividend payers, growth themes, and precious metals.",
    coverImage: oneLakhImg,
    coverAlt: "Diversified investment portfolio visual showing asset allocation across equity, index funds, and gold",
    readTime: "9 min read",
    publishedDate: "October 14, 2024",
    updatedDate: "November 2, 2026",
    author: {
      name: "SEG Academy Research Desk",
      role: "Faculty & Curriculum Desk",
      verified: true,
    },
    tableOfContents: [
      { id: "why-asset-allocation-matters", title: "1. Why Asset Allocation Determines Long-Term Success" },
      { id: "power-of-diversification", title: "2. The Mathematical Power of Diversification" },
      { id: "deconstructing-one-lakh-portfolio", title: "3. Deconstructing the Illustrative ₹1 Lakh Framework" },
      { id: "blue-chip-equities", title: "4. Blue-Chip Large-Cap Equities (20%)" },
      { id: "consumer-staples", title: "5. Consumer Staples & Defensive Plays (15%)" },
      { id: "broad-index-funds", title: "6. Broad Market Passive Index Funds (20%)" },
      { id: "dividend-oriented-equities", title: "7. Dividend & Cash-Flow Yield Equities (20%)" },
      { id: "growth-oriented-stocks", title: "8. High-Conviction Growth Equities (20%)" },
      { id: "gold-alternative-assets", title: "9. Sovereign Gold / Precious Metal Hedge (5%)" },
      { id: "risk-management-first", title: "10. Institutional Risk Architecture & Drawdown Control" },
      { id: "common-beginner-mistakes", title: "11. 5 Critical Traps Retail Investors Must Avoid" },
      { id: "faqs", title: "12. Frequently Asked Questions" },
    ],
    sources: [
      {
        title: "Securities and Exchange Board of India (SEBI) - Investor Education Portal",
        url: "https://investor.sebi.gov.in",
        note: "Guidelines on asset allocation, market risk disclosure and portfolio prudence.",
      },
      {
        title: "National Stock Exchange of India (NSE) - Nifty 50 Total Return Index Historical Data",
        url: "https://www.nseindia.com",
        note: "Historical index performance metrics and rolling risk parameters.",
      },
      {
        title: "Reserve Bank of India (RBI) - Sovereign Gold Bond & Sovereign Debt Documentation",
        url: "https://rbi.org.in",
        note: "Regulatory mechanics of gold bonds and alternative capital hedges.",
      },
    ],
    faqs: [
      {
        q: "Is this ₹1 lakh allocation a guaranteed-return investment portfolio?",
        a: "No. This is strictly a hypothetical, educational framework created by SEG Academy to teach the mechanics of asset allocation and diversification. Market investments are subject to capital fluctuations, and past performance is never a guarantee of future outcomes.",
      },
      {
        q: "Can I start investing with less than ₹1,00,000?",
        a: "Absolutely. The percentage proportions (e.g., 20% index funds, 15% consumer staples) scale linearly whether your initial capital is ₹10,000, ₹50,000 or ₹1,00,000 via systematic investment plans (SIPs) or fractional lot allocation.",
      },
      {
        q: "Why include Gold in an equity-oriented portfolio?",
        a: "Gold historically exhibits a low or negative correlation with equity indices during macroeconomic distress or currency devaluation. A 5% allocation acts as an institutional shock absorber, dampening portfolio drawdown during equity bear markets.",
      },
      {
        q: "How often should an equity investor rebalance their portfolio?",
        a: "Academic research and market best practices suggest reviewing and rebalancing every 6 to 12 months, or when any single asset class drifts by more than 5% from its target allocation weights.",
      },
    ],
    tags: ["Portfolio Management", "Asset Allocation", "Indian Equities", "Index Funds", "Risk Management"],
  },
  {
    id: "top-fmcg-companies-in-india",
    slug: "top-fmcg-companies-in-india",
    categorySlug: "indian-stock-market",
    categoryName: "Indian Stock Market",
    title: "Top FMCG Companies in India: Understanding Market Reach and Distribution",
    subtitle:
      "Explore India's consumer goods sector and understand how leading FMCG corporations build multi-generational economic moats through extensive retail distribution.",
    excerpt:
      "An in-depth analysis of India's fast-moving consumer goods industry, dissecting how FMCG titans like HUL, ITC, Dabur, Colgate and Godrej command millions of retail touchpoints across urban modern trade and rural Kirana networks.",
    coverImage: fmcgImg,
    coverAlt: "Indian FMCG consumer goods supply chain and distribution network logistics",
    readTime: "11 min read",
    publishedDate: "October 22, 2024",
    updatedDate: "November 5, 2026",
    author: {
      name: "SEG Academy Research Desk",
      role: "Faculty & Curriculum Desk",
      verified: true,
    },
    tableOfContents: [
      { id: "understanding-the-fmcg-moat", title: "1. The Distribution Moat: Why FMCG Outperforms" },
      { id: "the-kirana-distribution-power", title: "2. The Mechanics of Kirana Network Penetration" },
      { id: "top-fmcg-leaders-breakdown", title: "3. Comparative Analysis: Top FMCG Leaders by Retail Reach" },
      { id: "financial-metrics-that-matter", title: "4. Financial Metrics That Matter in FMCG Valuation" },
      { id: "rural-vs-urban-demand-cycles", title: "5. Rural vs. Urban Demand Cycles & The Monsoon Factor" },
      { id: "quick-commerce-disruption", title: "6. The Rise of Quick Commerce (Blinkit, Zepto, Instamart)" },
      { id: "investment-framework-fmcg", title: "7. The SEG Academy FMCG Investment Checklist" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sources: [
      {
        title: "Hindustan Unilever Limited (HUL) Annual Integrated Report (FY 2023-24 & FY 2024-25)",
        url: "https://www.hul.co.in",
        note: "Disclosures on retail outlet reach, rural coverage, and distributor infrastructure.",
      },
      {
        title: "ITC Limited Report and Accounts (FY 2023-24)",
        url: "https://www.itcportal.com",
        note: "Data on FMCG direct outlet servicing and supply chain footprint.",
      },
      {
        title: "Dabur India Limited Annual Disclosures & Investor Presentations",
        url: "https://www.dabur.com",
        note: "Official reporting on total direct and indirect rural village penetration.",
      },
      {
        title: "Federation of Indian Chambers of Commerce and Industry (FICCI) - FMCG Sectoral Outlook",
        url: "https://ficci.in",
        note: "Industry benchmarks on Kirana store density and retail point-of-sale volume metrics.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between direct and indirect distribution reach?",
        a: "Direct reach refers to retail stores that receive regular replenishment directly from the company's designated distributors or sales personnel. Indirect reach represents stores that procure the brand's products from intermediary wholesale markets or secondary sub-dealers without direct manufacturer visitation.",
      },
      {
        q: "Why do FMCG stocks trade at high Price-to-Earnings (P/E) multiples?",
        a: "FMCG leaders command premium valuations due to their predictable non-cyclical cash flows, minimal debt, high Return on Capital Employed (ROCE often exceeding 30-50%), and pricing power that allows passing inflationary raw material costs to end consumers.",
      },
      {
        q: "How are Quick-Commerce platforms (Blinkit, Zepto, Instamart) affecting traditional FMCG distribution?",
        a: "Quick-commerce is accelerating urban SKU replenishment and impulse categories (packaged snacks, personal care), currently contributing 10-20% of metro sales for top FMCG players while acting as a complementary high-frequency channel rather than replacing nationwide rural Kirana stores.",
      },
    ],
    tags: ["FMCG", "Supply Chain", "Indian Equities", "Fundamental Analysis", "Economic Moat"],
  },
  {
    id: "bull-vs-bear-market",
    slug: "bull-vs-bear-market",
    categorySlug: "indian-stock-market",
    categoryName: "Indian Stock Market",
    title: "Bull vs Bear Market: Understanding the Two Forces That Move Markets",
    subtitle:
      "Understand market cycles, investor sentiment and how ascending and declining phases shape capital allocation and behavioral psychology.",
    excerpt:
      "A comprehensive guide dissecting the mechanics, macroeconomic catalysts, sentiment swings, and institutional risk-management doctrines that govern both bull expansions and bear market contractions.",
    coverImage: bullBearImg,
    coverAlt: "Majestic bull and bear facing opposite directions symbolizing stock market momentum cycles",
    readTime: "8 min read",
    publishedDate: "October 29, 2024",
    updatedDate: "November 4, 2026",
    author: {
      name: "SEG Academy Research Desk",
      role: "Faculty & Curriculum Desk",
      verified: true,
    },
    tableOfContents: [
      { id: "origins-bull-bear-terms", title: "1. The Anatomical Origins: Bull and Bear Metaphors" },
      { id: "characteristics-bull-market", title: "2. Anatomy of a Bull Market" },
      { id: "characteristics-bear-market", title: "3. Anatomy of a Bear Market" },
      { id: "psychology-market-cycles", title: "4. The Psychological Cycle: From Hope to Capitulation" },
      { id: "side-by-side-comparison", title: "5. Side-by-Side Comparison: Bull vs. Bear Dynamics" },
      { id: "historical-indian-cycles", title: "6. Historical Indian Market Cycles (2000 – Present)" },
      { id: "actionable-strategies", title: "7. Actionable Strategies for Both Market Regimes" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sources: [
      {
        title: "National Stock Exchange of India (NSE) - Volatility Index (India VIX) Whitepaper",
        url: "https://www.nseindia.com",
        note: "Empirical relationship between India VIX spikes and equity drawdown phases.",
      },
      {
        title: "Reserve Bank of India (RBI) - Financial Stability Reports",
        url: "https://rbi.org.in",
        note: "Systemic liquidity conditions and credit cycle correlations with broader market indices.",
      },
      {
        title: "CFA Institute - Behavioral Finance & Market Cycles Research",
        url: "https://www.cfainstitute.org",
        note: "Analysis of cognitive biases (loss aversion, recency bias) during market extremes.",
      },
    ],
    faqs: [
      {
        q: "What technical threshold defines an official bear market?",
        a: "By conventional international and Indian market consensus, a bear market is defined as a sustained decline of 20% or more in a broad benchmark index (such as the Nifty 50 or Sensex) from its most recent peak, typically accompanied by negative market sentiment and economic deceleration.",
      },
      {
        q: "How long do bull and bear markets typically last in India?",
        a: "Historically in Indian capital markets, bull expansions have tended to last longer (typically 3 to 6 years) reflecting ongoing economic GDP growth, whereas bear markets and corrections tend to be sharper but more condensed (usually 8 to 18 months). However, every market cycle possesses unique macroeconomic catalysts.",
      },
      {
        q: "Should an investor sell everything when a bear market starts?",
        a: "Panicked wholesale liquidation frequently locks in paper losses near cyclical bottoms. Disciplined investors maintain predefined asset allocations, utilize systematic rebalancing, preserve an emergency cash reserve, and focus on companies with rock-solid balance sheets and pricing power.",
      },
    ],
    tags: ["Market Cycles", "Bull Market", "Bear Market", "Technical Analysis", "Market Psychology"],
  },
  {
    id: "how-indian-stock-market-works",
    slug: "how-indian-stock-market-works",
    categorySlug: "indian-stock-market",
    categoryName: "Indian Stock Market",
    title: "How Does the Indian Stock Market Work? A Beginner's Guide",
    subtitle:
      "Understand the regulatory pillars, exchange matching engines, order execution pathways, and settlement clearing that power India's capital markets.",
    excerpt:
      "A comprehensive foundational masterclass explaining the seamless journey of a stock market transaction—from Demat and trading accounts, through NSE and BSE matching engines, to NSCCL clearing and NSDL/CDSL custody settlement.",
    coverImage: stockWorksImg,
    coverAlt: "Indian stock market trading infrastructure, digital order matching terminals and exchange floor",
    readTime: "12 min read",
    publishedDate: "November 1, 2024",
    updatedDate: "November 6, 2026",
    author: {
      name: "SEG Academy Research Desk",
      role: "Faculty & Curriculum Desk",
      verified: true,
    },
    tableOfContents: [
      { id: "primary-vs-secondary-markets", title: "1. Primary vs. Secondary Markets: Capital Formation" },
      { id: "key-market-participants", title: "2. The 6 Pillars of the Indian Financial Architecture" },
      { id: "the-trade-lifecycle", title: "3. Interactive Architecture: The End-to-End Trade Lifecycle" },
      { id: "t-plus-one-settlement", title: "4. India’s Global Leadership: The T+1 Settlement Cycle" },
      { id: "role-of-sebi", title: "5. Regulatory Fortress: The Role of SEBI & Investor Protection" },
      { id: "demat-vs-trading-account", title: "6. Demat Account vs. Trading Account Explained" },
      { id: "common-execution-errors", title: "7. Critical Order Execution Errors to Avoid" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sources: [
      {
        title: "Securities and Exchange Board of India (SEBI) - Master Circular for Stock Exchanges and Clearing Corporations",
        url: "https://www.sebi.gov.in",
        note: "Statutory framework, settlement cycles, and surveillance mechanisms.",
      },
      {
        title: "National Stock Exchange of India (NSE) - Trading & Settlement Mechanics Documentation",
        url: "https://www.nseindia.com",
        note: "Detailed guidelines on order types, price bands, and clearing corporation obligations.",
      },
      {
        title: "National Securities Depository Limited (NSDL) & CDSL Official Operational Manuals",
        url: "https://nsdl.co.in",
        note: "Demat share accounting, pledge systems, and electronic book-entry mechanics.",
      },
    ],
    faqs: [
      {
        q: "When was SEBI established and what is its legal mandate?",
        a: "SEBI was initially constituted by an administrative resolution of the Government of India in 1988, and was granted statutory autonomy with comprehensive regulatory powers through the landmark SEBI Act passed by Parliament in 1992.",
      },
      {
        q: "What is the difference between a Demat account and a Trading account?",
        a: "A Trading Account acts as the transactional interface that communicates with the stock exchange to place buy or sell orders. A Demat (Dematerialized) Account is an electronic repository (maintained with NSDL or CDSL) that securely stores your purchased share certificates and securities in digital form.",
      },
      {
        q: "What is the settlement cycle currently followed in Indian equity markets?",
        a: "India operates primarily on a cutting-edge T+1 (Trade date + 1 business day) settlement cycle across all equity shares, meaning shares and funds are formally exchanged and credited within 24 hours of trade execution. Additionally, an optional T+0 (same-day) settlement is being phased in for selected liquid stocks.",
      },
      {
        q: "What happens when an index hits a circuit breaker in India?",
        a: "When benchmark indices (Nifty 50 or Sensex) move by 10%, 15%, or 20% from the previous close, SEBI-mandated market-wide circuit breakers trigger nationwide trading halts ranging from 45 minutes to the remainder of the trading day depending on the time of the breach, allowing market participants to absorb information calmly.",
      },
    ],
    tags: ["Indian Stock Market", "NSE", "BSE", "SEBI", "Trading Mechanics", "Market Infrastructure"],
  },
  {
    id: "types-of-cryptocurrency-market",
    slug: "types-of-cryptocurrency-market",
    categorySlug: "cryptocurrency-market",
    categoryName: "Cryptocurrency Market",
    title: "Types of Cryptocurrency and How Digital Asset Markets Work",
    subtitle:
      "Explore blockchain technology, digital asset taxonomies, decentralized protocols, and the Indian regulatory and tax landscape.",
    excerpt:
      "A comprehensive, fact-based educational guide analyzing the architectural differences between Bitcoin, altcoins, tokens, and stablecoins—along with consensus mechanisms, self-custody security, and India's 30% VDA taxation rules under Section 115BBH.",
    coverImage: cryptoTypesImg,
    coverAlt: "Cryptocurrency blockchain ecosystem showing cryptographic tokens, decentralized networks, and digital ledgers",
    readTime: "11 min read",
    publishedDate: "November 4, 2024",
    updatedDate: "November 8, 2026",
    author: {
      name: "SEG Academy Research Desk",
      role: "Faculty & Curriculum Desk",
      verified: true,
    },
    tableOfContents: [
      { id: "understanding-digital-assets", title: "1. Understanding Digital Assets & Distributed Ledgers" },
      { id: "coins-vs-tokens", title: "2. The Crucial Distinction: Crypto Coins vs. Crypto Tokens" },
      { id: "major-cryptocurrency-categories", title: "3. Taxonomy of the 5 Major Cryptocurrency Classes" },
      { id: "consensus-pow-vs-pos", title: "4. Consensus Mechanisms: Proof of Work vs. Proof of Stake" },
      { id: "indian-crypto-tax-framework", title: "5. Mandatory Indian Legal & Tax Architecture (Section 115BBH)" },
      { id: "security-and-self-custody", title: "6. Security Imperatives: “Not Your Keys, Not Your Coins”" },
      { id: "institutional-risks-evaluation", title: "7. The SEG Academy Institutional Risk Assessment" },
      { id: "faqs", title: "8. Frequently Asked Questions" },
    ],
    sources: [
      {
        title: "Income Tax Department, Government of India - Finance Act Provisions on Virtual Digital Assets (VDA)",
        url: "https://incometaxindia.gov.in",
        note: "Section 115BBH (30% tax on net VDA gains) & Section 194S (1% TDS on transfers).",
      },
      {
        title: "Financial Intelligence Unit - India (FIU-IND) Compliance Directives for VDA Service Providers",
        url: "https://fiuindia.gov.in",
        note: "Anti-Money Laundering (PMLA) and mandatory KYC registration requirements for crypto platforms.",
      },
      {
        title: "Bank for International Settlements (BIS) - Bulletins on Decentralized Finance & Stablecoin Mechanics",
        url: "https://www.bis.org",
        note: "Analysis of collateral liquidation cascades, de-pegging risks, and run dynamics.",
      },
    ],
    faqs: [
      {
        q: "What is the tax rate on cryptocurrency gains in India?",
        a: "Under Section 115BBH of the Indian Income Tax Act (introduced in Finance Act 2022), profits from the transfer of Virtual Digital Assets (VDAs) are taxed at a flat rate of 30% (plus applicable surcharge and cess). Importantly, no deduction is permitted for expenses other than the direct cost of acquisition, and losses incurred on one crypto trade cannot be set off against gains from other crypto assets or any other income.",
      },
      {
        q: "What is the 1% TDS rule (Section 194S) on crypto transactions in India?",
        a: "Section 194S requires buyers or reporting crypto exchanges to deduct 1% Tax Deducted at Source (TDS) on all cryptocurrency transfer transactions exceeding ₹50,000 in a financial year (or ₹10,000 for specified persons), designed to create an auditable transaction trail.",
      },
      {
        q: "What is the difference between a crypto coin and a crypto token?",
        a: "A coin (such as Bitcoin or Ethereum) operates natively on its own independent underlying blockchain. A token (such as ERC-20 tokens) is created using smart contracts on top of an existing host blockchain without maintaining its own sovereign network.",
      },
      {
        q: "Are staking rewards equivalent to bank interest or fixed deposits?",
        a: "No. Staking rewards are cryptographic protocol emissions awarded to network validators for securing a proof-of-stake blockchain. They carry distinct smart contract risks, slashing penalties for validator failure, and extreme underlying asset price volatility unlike government-insured bank fixed deposits.",
      },
    ],
    tags: ["Cryptocurrency", "Blockchain", "Bitcoin", "Smart Contracts", "Indian Crypto Tax", "Digital Assets"],
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((art) => art.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): BlogArticle[] {
  return blogArticles.filter((art) => art.categorySlug === categorySlug);
}

export function getRelatedArticles(currentSlug: string, limit = 3): BlogArticle[] {
  return blogArticles.filter((art) => art.slug !== currentSlug).slice(0, limit);
}


import { PieChart, ShieldAlert, Award, AlertCircle } from "lucide-react";

interface AllocationItem {
  segment: string;
  percentage: number;
  amount: string;
  rationale: string;
  sampleInstruments: string[];
  riskProfile: "Low" | "Moderate" | "Moderate-High" | "High";
  bgColor: string;
}

const allocations: AllocationItem[] = [
  {
    segment: "Large-Cap Blue-Chips",
    percentage: 20,
    amount: "₹20,000",
    rationale:
      "Capital preservation anchor. Robust balance sheets, dominant market capitalization, high institutional liquidity.",
    sampleInstruments: ["Reliance Industries", "HDFC Bank", "Infosys", "TCS"],
    riskProfile: "Moderate",
    bgColor: "bg-blue-500",
  },
  {
    segment: "Consumer Staples & Defensive Plays",
    percentage: 15,
    amount: "₹15,000",
    rationale:
      "Inelastic everyday demand cushion. High pricing power through inflation cycles, consistent cash conversion.",
    sampleInstruments: ["Hindustan Unilever (HUL)", "ITC", "Nestlé India", "Britannia"],
    riskProfile: "Low",
    bgColor: "bg-emerald-500",
  },
  {
    segment: "Broad Market Passive Index Funds",
    percentage: 20,
    amount: "₹20,000",
    rationale:
      "Zero-fund-manager-bias core exposure. Eliminates individual stock risk and captures broad Indian GDP expansion.",
    sampleInstruments: ["Nifty 50 Index Fund", "Nifty Next 50 ETF", "BSE Sensex Index Fund"],
    riskProfile: "Moderate",
    bgColor: "bg-purple-600",
  },
  {
    segment: "Dividend & Cash-Flow Yield Equities",
    percentage: 20,
    amount: "₹20,000",
    rationale:
      "Psychological buffer and compounding fuel. Reinvested dividend cash flow reduces downside volatility in bear markets.",
    sampleInstruments: ["Coal India", "Power Grid Corporation", "ITC", "REC Ltd"],
    riskProfile: "Moderate",
    bgColor: "bg-amber-500",
  },
  {
    segment: "High-Conviction Growth Equities",
    percentage: 20,
    amount: "₹20,000",
    rationale:
      "Alpha engine for portfolio acceleration. Sectors benefiting from national capex, digitization, and export tailwinds.",
    sampleInstruments: ["L&T", "Tata Motors", "Electronics / EMS leaders", "Specialty Chemicals"],
    riskProfile: "Moderate-High",
    bgColor: "bg-[#FF8A24]",
  },
  {
    segment: "Sovereign Gold / Liquid Metal Hedge",
    percentage: 5,
    amount: "₹5,000",
    rationale:
      "Negative correlation shock absorber. Protects real purchasing power during macroeconomic turmoil or currency depreciation.",
    sampleInstruments: ["Sovereign Gold Bonds (SGB)", "Nippon India Gold BeES ETF", "ICICI Gold ETF"],
    riskProfile: "Low",
    bgColor: "bg-yellow-500",
  },
];

export function PortfolioAllocationTable() {
  return (
    <div className="my-10 rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
            <PieChart className="h-3 w-3" />
            Hypothetical Model Framework
          </span>
          <h3 className="font-display text-2xl font-extrabold text-[#351650] mt-2">
            Illustrative ₹1,00,000 Asset Allocation Blueprint
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Structured diversification model balancing capital security, yield reinvestment, and long-term equity compounding.
          </p>
        </div>

        <div className="rounded-2xl bg-[#351650] p-4 text-white text-center self-start md:self-auto min-w-[150px]">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#FF8A24]">
            Total Capital Base
          </span>
          <div className="font-display text-2xl font-extrabold mt-0.5">₹1,00,000</div>
          <span className="text-[10px] text-white/70">100% Deployed</span>
        </div>
      </div>

      {/* Visual Allocation Stack Bar */}
      <div className="mt-6">
        <div className="h-5 w-full rounded-full overflow-hidden flex shadow-inner">
          {allocations.map((item) => (
            <div
              key={item.segment}
              style={{ width: `${item.percentage}%` }}
              className={`${item.bgColor} h-full transition-all duration-300 hover:opacity-90 relative group`}
              title={`${item.segment}: ${item.percentage}% (${item.amount})`}
            />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-slate-600">
          {allocations.map((item) => (
            <div key={item.segment} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${item.bgColor}`} />
              <span className="font-semibold text-slate-800">{item.segment}:</span>
              <span>{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/90">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#351650] text-white uppercase text-[10px] tracking-wider font-bold">
            <tr>
              <th className="py-3.5 px-4 font-semibold">Asset Segment</th>
              <th className="py-3.5 px-4 font-semibold text-right">Target Weight</th>
              <th className="py-3.5 px-4 font-semibold text-right">Rupee Value</th>
              <th className="py-3.5 px-4 font-semibold">Strategic Rationale</th>
              <th className="py-3.5 px-4 font-semibold">Sample Instruments</th>
              <th className="py-3.5 px-4 font-semibold">Risk Classification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {allocations.map((item) => (
              <tr key={item.segment} className="hover:bg-[#F7F3FC]/50 transition-colors">
                <td className="py-3.5 px-4 font-bold text-[#351650] whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.bgColor}`} />
                    <span>{item.segment}</span>
                  </div>
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-slate-900 text-right whitespace-nowrap">
                  {item.percentage}%
                </td>
                <td className="py-3.5 px-4 font-mono font-bold text-[#FF8A24] text-right whitespace-nowrap">
                  {item.amount}
                </td>
                <td className="py-3.5 px-4 text-xs text-foreground/80 max-w-[280px]">
                  {item.rationale}
                </td>
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {item.sampleInstruments.map((inst) => (
                      <span
                        key={inst}
                        className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-700"
                      >
                        {inst}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      item.riskProfile === "Low"
                        ? "bg-emerald-100 text-emerald-800"
                        : item.riskProfile === "Moderate"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {item.riskProfile}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mandatory SEBI / Educational Disclaimer Box */}
      <div className="mt-6 rounded-2xl bg-amber-50 p-4 border border-amber-200 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 leading-relaxed">
          <span className="font-bold">Educational & Pedagogical Purpose Only: </span>
          The above allocation is a conceptual classroom simulation created by SEG Academy to illustrate diversification theory. It does NOT constitute investment advice, financial planning, or a solicitation to buy or sell securities. Individual investors must evaluate their personal risk tolerance, financial liabilities, and consult a SEBI-registered investment advisor before deploying capital.
        </div>
      </div>
    </div>
  );
}


import { useState } from "react";
import { Search, Building2, Store, Sparkles, ShieldCheck } from "lucide-react";

interface FmcgCompany {
  name: string;
  ticker: string;
  flagshipBrands: string[];
  directReach: string;
  totalOutlets: string;
  ruralRevenueShare: string;
  financialMoat: string;
  annualReportSource: string;
}

const fmcgCompanies: FmcgCompany[] = [
  {
    name: "Hindustan Unilever Ltd (HUL)",
    ticker: "NSE: HINDUNILVR",
    flagshipBrands: ["Surf Excel", "Lifebuoy", "Dove", "Horlicks", "Bru", "Knorr"],
    directReach: "3.5 Million+ Stores",
    totalOutlets: "9.0+ Million Outlets",
    ruralRevenueShare: "~35-40%",
    financialMoat: "Scale-driven logistics, Shakti Amma rural entrepreneur network (1.9L+ micro-distributors)",
    annualReportSource: "HUL Integrated Annual Report FY24",
  },
  {
    name: "ITC Limited",
    ticker: "NSE: ITC",
    flagshipBrands: ["Aashirvaad", "Sunfeast", "Bingo!", "Classmate", "Yippee!"],
    directReach: "2.6 Million+ Stores",
    totalOutlets: "7.0+ Million Outlets",
    ruralRevenueShare: "~40-45%",
    financialMoat: "e-Choupal rural direct procurement, cigarette cash generation subsidizing food expansion",
    annualReportSource: "ITC Report and Accounts FY24",
  },
  {
    name: "Nestlé India",
    ticker: "NSE: NESTLEIND",
    flagshipBrands: ["Maggi", "Nescafé", "KitKat", "Milkybar", "Cerelac"],
    directReach: "1.8 Million+ Stores",
    totalOutlets: "5.1+ Million Outlets",
    ruralRevenueShare: "~20-25%",
    financialMoat: "Inimitable brand equity in instant noodles and infant nutrition, rapid RURBAN village cluster penetration",
    annualReportSource: "Nestlé India Annual Report CY23 / FY24",
  },
  {
    name: "Britannia Industries",
    ticker: "NSE: BRITANNIA",
    flagshipBrands: ["Good Day", "Marie Gold", "50-50", "NutriChoice", "Jim Jam"],
    directReach: "2.7 Million+ Stores",
    totalOutlets: "6.8+ Million Outlets",
    ruralRevenueShare: "~30-33%",
    financialMoat: "Dense direct bakery distribution network ensuring zero stale stock on kirana shelves",
    annualReportSource: "Britannia Annual Report FY24",
  },
  {
    name: "Dabur India",
    ticker: "NSE: DABUR",
    flagshipBrands: ["Dabur Chyawanprash", "Real Juices", "Vatika", "Hajmola", "Red Paste"],
    directReach: "1.4 Million+ Stores",
    totalOutlets: "7.7+ Million Outlets",
    ruralRevenueShare: "~45-48%",
    financialMoat: "Dominant herbal/Ayurvedic moat across 1.2 Lakh villages (Project YODHA village network)",
    annualReportSource: "Dabur Annual Report FY24",
  },
  {
    name: "Marico Limited",
    ticker: "NSE: MARICO",
    flagshipBrands: ["Parachute", "Saffola", "Livon", "Set Wet", "Nihar Naturals"],
    directReach: "1.0 Million+ Stores",
    totalOutlets: "5.8+ Million Outlets",
    ruralRevenueShare: "~32-35%",
    financialMoat: "Copra procurement supply-chain superiority; Saffola premium healthy edible oil positioning",
    annualReportSource: "Marico Integrated Report FY24",
  },
  {
    name: "Tata Consumer Products",
    ticker: "NSE: TATACONSUM",
    flagshipBrands: ["Tata Salt", "Tata Tea", "Sampann", "Ching's Secret", "Soulfull"],
    directReach: "1.6 Million+ Stores",
    totalOutlets: "4.0+ Million Outlets",
    ruralRevenueShare: "~30%",
    financialMoat: "Tata brand trust in unbranded-to-branded staple transitions (Salt & Pulses)",
    annualReportSource: "Tata Consumer Products Annual Report FY24",
  },
  {
    name: "Godrej Consumer Products",
    ticker: "NSE: GODREJCP",
    flagshipBrands: ["Good Knight", "HIT", "Godrej Expert", "Cinthol", "Godrej No.1"],
    directReach: "1.4 Million+ Stores",
    totalOutlets: "6.0+ Million Outlets",
    ruralRevenueShare: "~28-30%",
    financialMoat: "Near-monopoly in home insecticides; disruptive sachet hair color formulations",
    annualReportSource: "GCPL Integrated Annual Report FY24",
  },
];

export function FmcgDistributionTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = fmcgCompanies.filter((comp) => {
    const q = searchQuery.toLowerCase();
    return (
      comp.name.toLowerCase().includes(q) ||
      comp.flagshipBrands.some((b) => b.toLowerCase().includes(q)) ||
      comp.financialMoat.toLowerCase().includes(q)
    );
  });

  return (
    <div className="my-10 rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
      {/* Table Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
            <Store className="h-3 w-3" />
            Verified Empirical Data
          </span>
          <h3 className="font-display text-2xl font-extrabold text-[#351650] mt-2">
            Top Indian FMCG Distribution Footprints (FY24 Disclosures)
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Data sourced directly from audited company annual reports and investor presentations.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search company or brand..."
            className="w-full rounded-xl border border-slate-200 bg-[#FDFBF7] pl-10 pr-4 py-2 text-xs font-medium focus:border-[#FF8A24] focus:outline-hidden focus:ring-2 focus:ring-[#FF8A24]/20"
          />
        </div>
      </div>

      {/* Scrollable Table */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200/90">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#351650] text-white uppercase text-[10px] tracking-wider font-bold">
            <tr>
              <th className="py-3.5 px-4 font-semibold">Company & Ticker</th>
              <th className="py-3.5 px-4 font-semibold">Flagship Brands</th>
              <th className="py-3.5 px-4 font-semibold">Direct Kirana Reach</th>
              <th className="py-3.5 px-4 font-semibold">Total Retail Outlets</th>
              <th className="py-3.5 px-4 font-semibold">Rural Rev Share</th>
              <th className="py-3.5 px-4 font-semibold">Structural Moat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {filtered.length > 0 ? (
              filtered.map((comp) => (
                <tr key={comp.ticker} className="hover:bg-[#F7F3FC]/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-[#351650] whitespace-nowrap">
                    <div>{comp.name}</div>
                    <span className="font-mono text-[10px] text-[#FF8A24] font-semibold">
                      {comp.ticker}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {comp.flagshipBrands.map((b) => (
                        <span
                          key={b}
                          className="inline-block rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                    {comp.directReach}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#351650] whitespace-nowrap">
                    {comp.totalOutlets}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#FF8A24] whitespace-nowrap">
                    {comp.ruralRevenueShare}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-600 max-w-[260px]">
                    {comp.financialMoat}
                    <div className="mt-1 text-[10px] text-slate-400 italic">
                      Source: {comp.annualReportSource}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-xs text-muted-foreground">
                  No FMCG company or brand matching "{searchQuery}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>* Direct Reach refers to stores serviced directly through company redistribution stockists.</span>
        <span className="font-semibold text-[#351650]">Updated: FY2024-25 Analysis</span>
      </div>
    </div>
  );
}


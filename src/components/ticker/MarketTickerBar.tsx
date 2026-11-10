import { useMemo } from "react";
import { useMarketData } from "./MarketDataProvider";
import { MarketTickerItem } from "./MarketTickerItem";
import { AlertCircle } from "lucide-react";

/**
 * SEG Academy - Compact Indian Stock Market Ticker
 *
 * Height: 38px desktop, 36px tablet, 34px mobile.
 * Features 25 unique NSE equities moving continuously from right to left,
 * with pause on hover and seamless infinite marquee loop.
 */
export function MarketTickerBar() {
  const { quotes, isLoading, isError } = useMarketData();

  // Exactly 25 unique NSE stocks (excluding indices)
  const stocks = useMemo(() => {
    const equities = quotes.filter((q) => q.type === "EQUITY");
    const seen = new Set<string>();
    const uniqueList = [];

    for (const item of equities) {
      if (!seen.has(item.symbol)) {
        seen.add(item.symbol);
        uniqueList.push(item);
      }
      if (uniqueList.length === 25) break;
    }
    return uniqueList;
  }, [quotes]);

  return (
    <div
      role="region"
      aria-label="Indian Stock Market Continuous Tape"
      data-ticker-tape
      className="group-ticker relative z-50 w-full h-[34px] sm:h-[36px] md:h-[38px] bg-white border-b border-slate-200 text-slate-900 flex items-center overflow-hidden select-none"
    >
      {/* 1. Left Gradient Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-gradient-to-r from-white via-white/80 to-transparent"
      />

      {/* 2. Right Gradient Fade Mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 z-10 bg-gradient-to-l from-white via-white/80 to-transparent"
      />

      {/* 3. Ticker Viewport */}
      <div className="relative flex-1 overflow-hidden h-full flex items-center">
        {isError && stocks.length === 0 ? (
          <div className="flex items-center gap-2 px-3 text-[11px] text-amber-700 font-medium">
            <AlertCircle className="h-3 w-3" />
            <span>Market data reconnecting — showing closing reference quotes.</span>
          </div>
        ) : isLoading && stocks.length === 0 ? (
          <div className="flex items-center gap-3 px-4 text-[11px] text-slate-400 animate-pulse font-medium">
            <span>Loading 25 Indian Market Equities (NSE)...</span>
          </div>
        ) : (
          /* Animated Track: 0% to -50% continuous linear loop, pauses on hover */
          <div className="flex flex-row flex-nowrap items-center w-max shrink-0 animate-ticker-tape h-full">
            {/* Stock Group A (25 unique stocks) */}
            <div className="flex flex-row flex-nowrap items-center shrink-0 h-full">
              {stocks.map((stock) => (
                <MarketTickerItem key={`grpA-${stock.symbol}`} quote={stock} />
              ))}
            </div>

            {/* Stock Group B (Identical duplicate of Group A for seamless loop) */}
            <div
              aria-hidden="true"
              className="flex flex-row flex-nowrap items-center shrink-0 h-full"
            >
              {stocks.map((stock) => (
                <MarketTickerItem key={`grpB-${stock.symbol}`} quote={stock} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 4. Small, Unobtrusive Compliance Disclosure */}
      <div className="hidden lg:flex items-center shrink-0 h-full px-3 bg-white border-l border-slate-200 text-slate-400 z-20 text-[9.5px] font-semibold tracking-wider uppercase select-none">
        30D Delayed
      </div>
    </div>
  );
}

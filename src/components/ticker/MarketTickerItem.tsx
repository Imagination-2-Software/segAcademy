import { memo } from "react";
import { MarketQuote } from "@/services/marketDataService";
import { CompanyLogo } from "./CompanyLogo";

interface MarketTickerItemProps {
  quote: MarketQuote;
}

/**
 * Compact TradingView-style Indian Stock Market Ticker Item:
 * [Company Logo] [Stock Name] [Current Price] [Absolute Change] [Percentage Change]
 *
 * Designed for 36-38px compact ticker bar.
 * Typography: 12-13px. Logo: 19px.
 */
export const MarketTickerItem = memo(function MarketTickerItem({
  quote,
}: MarketTickerItemProps) {
  const isPositive = quote.changePercent > 0;
  const isNegative = quote.changePercent < 0;

  // Format numbers in Indian comma system
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(quote.price);

  const sign = isPositive ? "+" : isNegative ? "-" : "";
  const formattedChange = `${sign}${new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Math.abs(quote.change))}`;

  const formattedPercent = `(${sign}${Math.abs(quote.changePercent).toFixed(2)}%)`;

  const changeColor = isPositive
    ? "text-emerald-600"
    : isNegative
    ? "text-rose-600"
    : "text-slate-500";

  return (
    <a
      href={quote.chartUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center shrink-0 h-full px-3 sm:px-4 transition-colors duration-150 hover:bg-slate-50 focus-visible:outline-none focus-visible:bg-slate-100 select-none whitespace-nowrap border-r border-slate-200/80"
      title={`${quote.name} (${quote.exchange}) - Click to view chart`}
    >
      {/* 1. Company / Exchange Logo (18-20px) */}
      <div className="shrink-0 mr-2 flex items-center">
        <CompanyLogo symbol={quote.symbol} name={quote.name} size={19} />
      </div>

      {/* 2. Stock Name (Bold, 12-13px, Dark Charcoal) */}
      <span className="font-bold text-[12px] sm:text-[12.5px] text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors mr-2">
        {quote.name}
      </span>

      {/* 3. Current Price (Regular/Medium, 12-13px, Dark Charcoal) */}
      <span className="font-medium text-[12px] sm:text-[12.5px] text-slate-800 tabular-nums mr-1.5 sm:mr-2">
        {formattedPrice}
      </span>

      {/* 4. Absolute Change (11.5-12px, Green/Red) */}
      <span className={`font-semibold text-[11.5px] sm:text-[12px] tabular-nums mr-1 ${changeColor}`}>
        {formattedChange}
      </span>

      {/* 5. Percentage Change (11.5-12px, Green/Red with parentheses) */}
      <span className={`font-semibold text-[11.5px] sm:text-[12px] tabular-nums ${changeColor}`}>
        {formattedPercent}
      </span>
    </a>
  );
});

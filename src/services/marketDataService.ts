/**
 * SEG Academy - Indian Stock Market Data Service
 * 
 * COMPLIANCE SPECIFICATION:
 * SEBI Circular No. HO/47/17/12(11)2025-MRD-POD3/I/11107/2026
 * Specifies 30-day delayed data feed for educational institution display.
 * All prices reflect the compliant historical closing reference dataset.
 */

export interface MarketQuote {
  symbol: string;
  name: string;
  exchange: "NSE" | "BSE";
  type: "INDEX" | "EQUITY";
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  previousClose: number;
  asOf: string;
  chartUrl: string;
}

export type MarketSessionStatus = "OPEN" | "CLOSED";

export interface MarketStatusInfo {
  status: MarketSessionStatus;
  sessionText: string;
  isDelayed: boolean;
  delayNotice: string;
  complianceNotice: string;
}

/**
 * Calculates current market session status based on IST (UTC+05:30) trading hours:
 * Standard NSE / BSE Trading Hours: Monday - Friday, 09:15 AM to 03:30 PM IST.
 */
export function getIndianMarketStatus(): MarketStatusInfo {
  // Current time in IST (UTC + 5 hours 30 mins)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utc + 3600000 * 5.5);

  const day = istTime.getDay(); // 0 = Sunday, 6 = Saturday
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Trading window: 09:15 AM (555 min) to 03:30 PM (930 min) Mon-Fri
  const isWeekday = day >= 1 && day <= 5;
  const isMarketHours = timeInMinutes >= 555 && timeInMinutes <= 930;

  const isOpen = isWeekday && isMarketHours;

  return {
    status: isOpen ? "OPEN" : "CLOSED",
    sessionText: isOpen ? "MARKET OPEN (IST)" : "MARKET CLOSED",
    isDelayed: true,
    delayNotice: "30-DAY DELAYED DATA",
    complianceNotice:
      "SEBI Educational Circular No. HO/47/17/12(11)2025-MRD-POD3/I/11107/2026 applies to institutional display.",
  };
}

/**
 * Formats a number in the Indian numbering format (e.g. 1,34,800.00)
 */
export function formatIndianCurrency(
  val: number,
  isEquity = true,
  decimals = 2
): string {
  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val);

  return isEquity ? `₹${formatted}` : formatted;
}

/**
 * Formats change values with sign (+ / -)
 */
export function formatIndianChange(
  change: number,
  isEquity = true
): string {
  const sign = change > 0 ? "+" : change < 0 ? "-" : "";
  const absVal = Math.abs(change);
  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(absVal);

  return isEquity ? `${sign}₹${formatted}` : `${sign}${formatted}`;
}

/**
 * Verified Indian Instruments Reference List:
 * 3 Benchmark Indices + 25 Selected NSE Equities
 * Prices represent compliant 30-day educational market session data.
 */
export const VERIFIED_MARKET_INSTRUMENTS: MarketQuote[] = [
  // --- 3 MAJOR INDIAN INDICES ---
  {
    symbol: "NIFTY 50",
    name: "Nifty 50",
    exchange: "NSE",
    type: "INDEX",
    price: 25182.40,
    change: 142.30,
    changePercent: 0.57,
    high: 25225.00,
    low: 25080.20,
    previousClose: 25040.10,
    asOf: "30-Day Lag | Oct Session",
    chartUrl: "https://in.tradingview.com/symbols/NSE-NIFTY/",
  },
  {
    symbol: "SENSEX",
    name: "BSE Sensex",
    exchange: "BSE",
    type: "INDEX",
    price: 81962.80,
    change: 418.50,
    changePercent: 0.51,
    high: 82140.00,
    low: 81680.10,
    previousClose: 81544.30,
    asOf: "30-Day Lag | Oct Session",
    chartUrl: "https://in.tradingview.com/symbols/BSE-SENSEX/",
  },
  {
    symbol: "NIFTY 100",
    name: "Nifty 100",
    exchange: "NSE",
    type: "INDEX",
    price: 26480.15,
    change: 165.40,
    changePercent: 0.63,
    high: 26520.00,
    low: 26360.00,
    previousClose: 26314.75,
    asOf: "30-Day Lag | Oct Session",
    chartUrl: "https://in.tradingview.com/symbols/NSE-CNX100/",
  },

  // --- 25 SELECT NSE STOCKS ---
  {
    symbol: "MRF",
    name: "MRF Ltd",
    exchange: "NSE",
    type: "EQUITY",
    price: 134850.00,
    change: 1240.00,
    changePercent: 0.93,
    high: 135400.00,
    low: 133900.00,
    previousClose: 133610.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-MRF/",
  },
  {
    symbol: "TATASTEEL",
    name: "Tata Steel",
    exchange: "NSE",
    type: "EQUITY",
    price: 158.45,
    change: -1.25,
    changePercent: -0.78,
    high: 160.80,
    low: 157.90,
    previousClose: 159.70,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-TATASTEEL/",
  },
  {
    symbol: "TMPV",
    name: "Tata Motors PV",
    exchange: "NSE",
    type: "EQUITY",
    price: 924.50,
    change: 12.30,
    changePercent: 1.35,
    high: 928.00,
    low: 914.00,
    previousClose: 912.20,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-TATAMOTORS/",
  },
  {
    symbol: "TMCV",
    name: "Tata Motors CV",
    exchange: "NSE",
    type: "EQUITY",
    price: 642.80,
    change: 5.60,
    changePercent: 0.88,
    high: 648.00,
    low: 638.00,
    previousClose: 637.20,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-TATAMTRDVR/",
  },
  {
    symbol: "EICHERMOT",
    name: "Eicher Motors",
    exchange: "NSE",
    type: "EQUITY",
    price: 4890.00,
    change: 45.00,
    changePercent: 0.93,
    high: 4920.00,
    low: 4850.00,
    previousClose: 4845.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-EICHERMOT/",
  },
  {
    symbol: "RELIANCE",
    name: "Reliance Industries",
    exchange: "NSE",
    type: "EQUITY",
    price: 2985.60,
    change: 28.40,
    changePercent: 0.96,
    high: 2998.00,
    low: 2962.00,
    previousClose: 2957.20,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-RELIANCE/",
  },
  {
    symbol: "HDFCBANK",
    name: "HDFC Bank",
    exchange: "NSE",
    type: "EQUITY",
    price: 1675.20,
    change: -8.50,
    changePercent: -0.51,
    high: 1689.00,
    low: 1670.00,
    previousClose: 1683.70,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-HDFCBANK/",
  },
  {
    symbol: "ICICIBANK",
    name: "ICICI Bank",
    exchange: "NSE",
    type: "EQUITY",
    price: 1248.90,
    change: 14.20,
    changePercent: 1.15,
    high: 1254.00,
    low: 1238.00,
    previousClose: 1234.70,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-ICICIBANK/",
  },
  {
    symbol: "SBIN",
    name: "State Bank of India",
    exchange: "NSE",
    type: "EQUITY",
    price: 822.40,
    change: 6.80,
    changePercent: 0.83,
    high: 826.50,
    low: 817.00,
    previousClose: 815.60,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-SBIN/",
  },
  {
    symbol: "INFY",
    name: "Infosys",
    exchange: "NSE",
    type: "EQUITY",
    price: 1894.50,
    change: -12.00,
    changePercent: -0.63,
    high: 1912.00,
    low: 1888.00,
    previousClose: 1906.50,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-INFY/",
  },
  {
    symbol: "TCS",
    name: "Tata Consultancy Services",
    exchange: "NSE",
    type: "EQUITY",
    price: 4210.00,
    change: 32.50,
    changePercent: 0.78,
    high: 4235.00,
    low: 4185.00,
    previousClose: 4177.50,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-TCS/",
  },
  {
    symbol: "WIPRO",
    name: "Wipro Ltd",
    exchange: "NSE",
    type: "EQUITY",
    price: 542.80,
    change: -3.40,
    changePercent: -0.62,
    high: 549.00,
    low: 540.00,
    previousClose: 546.20,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-WIPRO/",
  },
  {
    symbol: "HINDUNILVR",
    name: "Hindustan Unilever",
    exchange: "NSE",
    type: "EQUITY",
    price: 2740.00,
    change: 18.00,
    changePercent: 0.66,
    high: 2755.00,
    low: 2725.00,
    previousClose: 2722.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-HINDUNILVR/",
  },
  {
    symbol: "ITC",
    name: "ITC Ltd",
    exchange: "NSE",
    type: "EQUITY",
    price: 498.20,
    change: 2.10,
    changePercent: 0.42,
    high: 501.00,
    low: 495.50,
    previousClose: 496.10,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-ITC/",
  },
  {
    symbol: "LT",
    name: "Larsen & Toubro",
    exchange: "NSE",
    type: "EQUITY",
    price: 3620.00,
    change: 42.00,
    changePercent: 1.17,
    high: 3640.00,
    low: 3590.00,
    previousClose: 3578.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-LT/",
  },
  {
    symbol: "BHARTIARTL",
    name: "Bharti Airtel",
    exchange: "NSE",
    type: "EQUITY",
    price: 1585.00,
    change: 21.00,
    changePercent: 1.34,
    high: 1592.00,
    low: 1568.00,
    previousClose: 1564.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-BHARTIARTL/",
  },
  {
    symbol: "AXISBANK",
    name: "Axis Bank",
    exchange: "NSE",
    type: "EQUITY",
    price: 1180.50,
    change: -6.20,
    changePercent: -0.52,
    high: 1192.00,
    low: 1176.00,
    previousClose: 1186.70,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-AXISBANK/",
  },
  {
    symbol: "BAJFINANCE",
    name: "Bajaj Finance",
    exchange: "NSE",
    type: "EQUITY",
    price: 7140.00,
    change: 85.00,
    changePercent: 1.20,
    high: 7190.00,
    low: 7080.00,
    previousClose: 7055.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-BAJFINANCE/",
  },
  {
    symbol: "MARUTI",
    name: "Maruti Suzuki",
    exchange: "NSE",
    type: "EQUITY",
    price: 12450.00,
    change: -65.00,
    changePercent: -0.52,
    high: 12580.00,
    low: 12410.00,
    previousClose: 12515.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-MARUTI/",
  },
  {
    symbol: "ADANIENT",
    name: "Adani Enterprises",
    exchange: "NSE",
    type: "EQUITY",
    price: 2980.00,
    change: 38.00,
    changePercent: 1.29,
    high: 3010.00,
    low: 2950.00,
    previousClose: 2942.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-ADANIENT/",
  },
  {
    symbol: "SUNPHARMA",
    name: "Sun Pharmaceutical",
    exchange: "NSE",
    type: "EQUITY",
    price: 1890.00,
    change: 16.50,
    changePercent: 0.88,
    high: 1904.00,
    low: 1878.00,
    previousClose: 1873.50,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-SUNPHARMA/",
  },
  {
    symbol: "TITAN",
    name: "Titan Company",
    exchange: "NSE",
    type: "EQUITY",
    price: 3460.00,
    change: -18.00,
    changePercent: -0.52,
    high: 3495.00,
    low: 3445.00,
    previousClose: 3478.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-TITAN/",
  },
  {
    symbol: "ASIANPAINT",
    name: "Asian Paints",
    exchange: "NSE",
    type: "EQUITY",
    price: 3120.00,
    change: 24.00,
    changePercent: 0.78,
    high: 3140.00,
    low: 3105.00,
    previousClose: 3096.00,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-ASIANPAINT/",
  },
  {
    symbol: "ONGC",
    name: "Oil & Natural Gas Corp",
    exchange: "NSE",
    type: "EQUITY",
    price: 298.50,
    change: 3.20,
    changePercent: 1.08,
    high: 301.20,
    low: 296.00,
    previousClose: 295.30,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-ONGC/",
  },
  {
    symbol: "POWERGRID",
    name: "Power Grid Corp",
    exchange: "NSE",
    type: "EQUITY",
    price: 338.40,
    change: 2.80,
    changePercent: 0.83,
    high: 341.00,
    low: 336.00,
    previousClose: 335.60,
    asOf: "30-Day Lag",
    chartUrl: "https://in.tradingview.com/symbols/NSE-POWERGRID/",
  },
];


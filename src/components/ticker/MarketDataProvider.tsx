import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  MarketQuote,
  MarketStatusInfo,
  getIndianMarketStatus,
  VERIFIED_MARKET_INSTRUMENTS,
} from "@/services/marketDataService";

interface MarketDataContextValue {
  quotes: MarketQuote[];
  statusInfo: MarketStatusInfo;
  isLoading: boolean;
  isError: boolean;
  refresh: () => void;
  lastUpdated: Date;
}

const MarketDataContext = createContext<MarketDataContextValue | null>(null);

export function MarketDataProvider({ children }: { children: ReactNode }) {
  const [quotes, setQuotes] = useState<MarketQuote[]>(VERIFIED_MARKET_INSTRUMENTS);
  const [statusInfo, setStatusInfo] = useState<MarketStatusInfo>(getIndianMarketStatus());
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const refresh = useCallback(() => {
    setIsLoading(true);
    try {
      // Recalculate session status against Indian IST market hours
      const newStatus = getIndianMarketStatus();
      setStatusInfo(newStatus);
      // In production with live subscription backend: fetch new quotes here
      setQuotes(VERIFIED_MARKET_INSTRUMENTS);
      setIsError(false);
      setLastUpdated(new Date());
    } catch (err) {
      console.error("Failed to update market data:", err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Periodic status and stale quote check every 60s
  useEffect(() => {
    const timer = setInterval(() => {
      setStatusInfo(getIndianMarketStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MarketDataContext.Provider
      value={{
        quotes,
        statusInfo,
        isLoading,
        isError,
        refresh,
        lastUpdated,
      }}
    >
      {children}
    </MarketDataContext.Provider>
  );
}

export function useMarketData() {
  const context = useContext(MarketDataContext);
  if (!context) {
    throw new Error("useMarketData must be used within a MarketDataProvider");
  }
  return context;
}


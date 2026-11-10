import { memo } from "react";

interface CompanyLogoProps {
  symbol: string;
  name: string;
  className?: string;
  size?: number;
}

/**
 * High-fidelity vector logos for Indian Market Indices & NSE Equities
 * Designed strictly to authentic corporate brand guidelines.
 */
export const CompanyLogo = memo(function CompanyLogo({
  symbol,
  name,
  className = "",
  size = 24,
}: CompanyLogoProps) {
  const s = symbol.toUpperCase();

  // Helper for consistent circular container
  const baseClass = `inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden shadow-xs border border-black/5 select-none ${className}`;

  switch (s) {
    // --- INDICES ---
    case "NIFTY 50":
    case "NIFTY 100":
    case "NSE":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#0C2340" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.8} height={size * 0.8} fill="none">
            {/* NSE Tri-petal signature */}
            <circle cx="12" cy="12" r="9" stroke="#E65100" strokeWidth="1.6" />
            <path
              d="M 8 15 L 12 7 L 16 15 L 14 15 L 12 10.5 L 10 15 Z"
              fill="#FFFFFF"
            />
            <circle cx="12" cy="7" r="1.5" fill="#43A047" />
          </svg>
        </span>
      );

    case "SENSEX":
    case "BSE":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#7B1123" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.8} height={size * 0.8} fill="none">
            <text
              x="12"
              y="15"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="8"
              fontWeight="900"
              letterSpacing="0.5"
            >
              BSE
            </text>
          </svg>
        </span>
      );

    // --- TATA COMPANIES ---
    case "TATASTEEL":
    case "TMPV":
    case "TMCV":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#0054A6" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Tata Arches Monogram */}
            <path
              d="M 6.5 16 C 6.5 11, 8.5 8, 12 8 C 15.5 8, 17.5 11, 17.5 16 M 9 16 C 9 12.5, 10.2 10, 12 10 C 13.8 10, 15 12.5, 15 16 M 12 8 L 12 16"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );

    case "TCS":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#001A3A" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="15.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="system-ui, sans-serif"
              fontSize="7.5"
              fontWeight="800"
              letterSpacing="0.5"
            >
              TCS
            </text>
          </svg>
        </span>
      );

    // --- RELIANCE ---
    case "RELIANCE":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#002F6C" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Reliance RIL crest flame & R */}
            <circle cx="12" cy="12" r="9.5" stroke="#D32F2F" strokeWidth="1.5" />
            <path
              d="M 10 7.5 L 13.5 7.5 C 14.8 7.5, 15.8 8.4, 15.8 9.6 C 15.8 10.8, 14.8 11.6, 13.5 11.6 L 10 11.6 Z M 10 6 L 10 18 M 13 11.6 L 16 18"
              stroke="#FFFFFF"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );

    // --- STATE BANK OF INDIA ---
    case "SBIN":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#008ECF" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* SBI Keyhole */}
            <circle cx="12" cy="12" r="9" fill="#008ECF" />
            <circle cx="12" cy="12" r="5" fill="#FFFFFF" />
            <rect x="11.1" y="12" width="1.8" height="8" fill="#008ECF" />
          </svg>
        </span>
      );

    // --- HDFC BANK ---
    case "HDFCBANK":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#004C8F" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.8} height={size * 0.8} fill="none">
            {/* HDFC Grid Cross */}
            <rect x="4" y="4" width="6" height="6" fill="#004C8F" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="14" y="4" width="6" height="6" fill="#004C8F" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="4" y="14" width="6" height="6" fill="#004C8F" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="14" y="14" width="6" height="6" fill="#004C8F" stroke="#FFFFFF" strokeWidth="1.2" />
            <rect x="9" y="9" width="6" height="6" fill="#ED232A" />
          </svg>
        </span>
      );

    // --- ICICI BANK ---
    case "ICICIBANK":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#931A1D" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* ICICI orange arc + 'i' */}
            <path
              d="M 6 12 C 6 8.5, 8.8 5.8, 12.3 5.8 C 15.5 5.8, 17.5 7.8, 18 10"
              stroke="#F37021"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <circle cx="12" cy="9" r="1.3" fill="#FFFFFF" />
            <rect x="11" y="11.5" width="2" height="6" rx="0.8" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // --- INFOSYS ---
    case "INFY":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#007CC3" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="16.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Georgia, serif"
              fontSize="12.5"
              fontWeight="bold"
              fontStyle="italic"
            >
              i
            </text>
          </svg>
        </span>
      );

    // --- WIPRO ---
    case "WIPRO":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#FFFFFF" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Wipro rainbow sunflower dots */}
            <circle cx="12" cy="6" r="2" fill="#E4002B" />
            <circle cx="16.5" cy="8.5" r="2" fill="#FDB813" />
            <circle cx="17.5" cy="13.5" r="2" fill="#78BE20" />
            <circle cx="14" cy="17.5" r="2" fill="#00A3E0" />
            <circle cx="8.5" cy="17" r="2" fill="#00857C" />
            <circle cx="6.5" cy="12" r="2" fill="#582C83" />
            <circle cx="12" cy="12" r="1.8" fill="#2D2926" />
          </svg>
        </span>
      );

    // --- BHARTI AIRTEL ---
    case "BHARTIARTL":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#E60000" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Airtel lowercase 'a' flourish */}
            <path
              d="M 8 14 C 8 11.5, 10 9.5, 12.8 9.5 C 15.2 9.5, 16.5 11, 16.5 13.5 L 16.5 17 M 16.5 13 C 15 12.2, 10 12.8, 10 15 C 10 16.5, 11.5 17.2, 13.5 17.2 C 15.5 17.2, 16.5 16, 16.5 14.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );

    // --- HINDUSTAN UNILEVER ---
    case "HINDUNILVR":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#001F60" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Unilever 'U' */}
            <path
              d="M 6.5 7 L 6.5 13 C 6.5 16.5, 9 18.5, 12 18.5 C 15 18.5, 17.5 16.5, 17.5 13 L 17.5 7"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="13" r="1.5" fill="#58B947" />
          </svg>
        </span>
      );

    // --- ITC ---
    case "ITC":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#0A2540" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* ITC triangular crest */}
            <polygon points="12,5 19,17 5,17" stroke="#C59B27" strokeWidth="1.8" fill="none" />
            <text
              x="12"
              y="15.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="6"
              fontWeight="900"
            >
              ITC
            </text>
          </svg>
        </span>
      );

    // --- LARSEN & TOUBRO ---
    case "LT":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#003D7A" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="15.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="7"
              fontWeight="900"
              letterSpacing="0.2"
            >
              L&T
            </text>
          </svg>
        </span>
      );

    // --- MARUTI SUZUKI ---
    case "MARUTI":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#FFFFFF" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Suzuki red 'S' */}
            <path
              d="M 16 7 L 8.5 7 L 8 10.5 L 13.5 12 L 8 16.5 L 15.5 16.5 L 16 13 L 10.5 11.5 Z"
              fill="#E60012"
            />
          </svg>
        </span>
      );

    // --- MRF ---
    case "MRF":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#D11212" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="15.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="7.5"
              fontWeight="900"
              fontStyle="italic"
              letterSpacing="0.2"
            >
              MRF
            </text>
          </svg>
        </span>
      );

    // --- AXIS BANK ---
    case "AXISBANK":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#97144D" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Axis Bank polygon */}
            <polygon points="12,6 18,17 14,17 12,12 10,17 6,17" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // --- BAJAJ FINANCE ---
    case "BAJFINANCE":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#00509A" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="16.5"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="12"
              fontWeight="900"
            >
              B
            </text>
          </svg>
        </span>
      );

    // --- TITAN COMPANY ---
    case "TITAN":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#1F2421" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill="#E5C158"
              fontFamily="serif"
              fontSize="11.5"
              fontWeight="bold"
            >
              T
            </text>
          </svg>
        </span>
      );

    // --- ASIAN PAINTS ---
    case "ASIANPAINT":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#FFFFFF" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* 4-color splash */}
            <circle cx="9" cy="9" r="3.2" fill="#E60000" />
            <circle cx="15" cy="9" r="3.2" fill="#FFCC00" />
            <circle cx="9" cy="15" r="3.2" fill="#0066CC" />
            <circle cx="15" cy="15" r="3.2" fill="#339933" />
          </svg>
        </span>
      );

    // --- SUN PHARMA ---
    case "SUNPHARMA":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#F26522" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Sun rays */}
            <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
            <circle cx="12" cy="4" r="1.2" fill="#FFFFFF" />
            <circle cx="12" cy="20" r="1.2" fill="#FFFFFF" />
            <circle cx="4" cy="12" r="1.2" fill="#FFFFFF" />
            <circle cx="20" cy="12" r="1.2" fill="#FFFFFF" />
            <circle cx="6.5" cy="6.5" r="1.2" fill="#FFFFFF" />
            <circle cx="17.5" cy="17.5" r="1.2" fill="#FFFFFF" />
            <circle cx="6.5" cy="17.5" r="1.2" fill="#FFFFFF" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // --- ONGC ---
    case "ONGC":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#A6192E" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <path
              d="M 12 5 C 10 8, 8 10, 8 13 C 8 16, 9.8 18, 12 18 C 14.2 18, 16 16, 16 13 C 16 10, 14 8, 12 5 Z"
              fill="#FDB913"
            />
            <circle cx="12" cy="13.5" r="2" fill="#FFFFFF" />
          </svg>
        </span>
      );

    // --- POWER GRID ---
    case "POWERGRID":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#004B49" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            {/* Power Grid transmission pylon */}
            <path
              d="M 12 4 L 8 18 M 12 4 L 16 18 M 7 9 L 17 9 M 6 14 L 18 14"
              stroke="#00E676"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      );

    // --- ADANI ENTERPRISES ---
    case "ADANIENT":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#0D47A1" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="11"
              fontWeight="900"
            >
              A
            </text>
          </svg>
        </span>
      );

    // --- EICHER MOTORS ---
    case "EICHERMOT":
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#B01A1E" }}
          title={name}
        >
          <svg viewBox="0 0 24 24" width={size * 0.85} height={size * 0.85} fill="none">
            <circle cx="12" cy="12" r="8.5" stroke="#D4AF37" strokeWidth="1.5" />
            <text
              x="12"
              y="16"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="sans-serif"
              fontSize="9"
              fontWeight="900"
            >
              E
            </text>
          </svg>
        </span>
      );

    // --- DEFAULT CLEAN INITIALS FALLBACK ---
    default: {
      const initials = s.slice(0, 2);
      return (
        <span
          className={baseClass}
          style={{ width: size, height: size, backgroundColor: "#1E293B" }}
          title={name}
        >
          <span className="text-[8.5px] font-bold text-white tracking-tighter leading-none">
            {initials}
          </span>
        </span>
      );
    }
  }
});


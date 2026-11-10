import { useState } from "react";
import {
  Smartphone,
  ShieldAlert,
  ArrowRight,
  Landmark,
  Building2,
  Database,
  CheckCircle2,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface StepDetail {
  number: string;
  title: string;
  subtitle: string;
  icon: typeof Smartphone;
  description: string;
  regulator: string;
  settlementRole: string;
  timeline: string;
}

const steps: StepDetail[] = [
  {
    number: "01",
    title: "Retail Investor",
    subtitle: "Order Placement",
    icon: Smartphone,
    description:
      "The investor logs into their registered broker's trading terminal or mobile app (Zerodha, Groww, AngelOne, etc.) and specifies order parameters: Instrument (e.g. RELIANCE), Type (Market / Limit), and Product Code (CNC for delivery or MIS for intraday).",
    regulator: "KYC verified by SEBI KRA & UIDAI",
    settlementRole: "Initiates buy/sell instruction with funded trading balance",
    timeline: "Real-time (milliseconds)",
  },
  {
    number: "02",
    title: "SEBI Registered Broker",
    subtitle: "RMS & Pre-Trade Validation",
    icon: ShieldAlert,
    description:
      "Before routing the order to the exchange, the broker's Order Management System (OMS) and Risk Management System (RMS) execute microsecond checks: margin adequacy, circuit limit compliance, and security ban periods.",
    regulator: "SEBI Stock Broker Regulations",
    settlementRole: "Acts as licensed intermediary between client and stock exchange",
    timeline: "< 2 milliseconds",
  },
  {
    number: "03",
    title: "Stock Exchange (NSE / BSE)",
    subtitle: "Electronic Order Matching",
    icon: Landmark,
    description:
      "Orders hit the central limit order book (CLOB) running on high-speed matching engines. Trades execute automatically strictly on Price-Time Priority. Once matched, the exchange generates a cryptographically stamped Trade Confirmation ID.",
    regulator: "Securities Contracts (Regulation) Act, SEBI",
    settlementRole: "Transparent price discovery and fair liquidity pool",
    timeline: "Microsecond execution (Co-location architecture)",
  },
  {
    number: "04",
    title: "Clearing Corporation",
    subtitle: "Trade Novation & Settlement Guarantee",
    icon: Building2,
    description:
      "NSE Clearing (NSCCL) or Indian Clearing Corporation (ICCL) steps in as Central Counterparty (CCP) via legal novation. It becomes the buyer to every seller and the seller to every buyer, eliminating counterparty default risk entirely.",
    regulator: "SEBI Clearing Corporation Norms & Core SGF",
    settlementRole: "Calculates net funds and securities obligations across all brokers",
    timeline: "Continuous post-market netting (Evening of T-Day)",
  },
  {
    number: "05",
    title: "Depositories (NSDL & CDSL)",
    subtitle: "Electronic Demat Asset Transfer",
    icon: Database,
    description:
      "The clearing house issues electronic debit and credit instructions to India's two depositories. Shares are debited from the seller's Pool/Demat account and credited into the buyer's Demat account as electronic beneficial ownership entries.",
    regulator: "Depositories Act, 1996 & SEBI",
    settlementRole: "Custody and dematerialized ledger of all equity ownership",
    timeline: "T+1 Morning pay-in / pay-out cycle",
  },
  {
    number: "06",
    title: "Final Settlement (T+1)",
    subtitle: "Demat Credit & Payout",
    icon: CheckCircle2,
    description:
      "India became the world's second major market to transition to full T+1 settlement. By approximately 11:00 AM on T+1 (the next working day), shares reflect in the buyer's permanent demat holdings and sales proceeds are credited to the seller's bank account.",
    regulator: "SEBI Circular on T+1 Rolling Settlement",
    settlementRole: "Unencumbered ownership rights, voting power & corporate benefits",
    timeline: "T+1 Working Day (11:00 AM - 1:00 PM)",
  },
];

export function InteractiveStockFlowchart() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const current = steps[activeStep];

  return (
    <div className="my-10 rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3FC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#E5DDF0]">
            <Sparkles className="h-3 w-3" />
            Interactive Pedagogical Architecture
          </span>
          <h3 className="font-display text-2xl font-extrabold text-[#351650] mt-2">
            The Indian Stock Market Trade Life Cycle (T+1 Settlement)
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Follow a single share purchase from your smartphone click to permanent electronic Demat custody.
          </p>
        </div>

        <button
          onClick={() => setActiveStep(0)}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-[#FF8A24] hover:text-white transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset Journey</span>
        </button>
      </div>

      {/* Steps Navigation Bar */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep === index;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(index)}
              className={`flex flex-col items-start rounded-2xl p-3 text-left transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-[#351650] text-white border-[#351650] shadow-md ring-2 ring-[#FF8A24]"
                  : "bg-[#FDFBF7] text-slate-700 border-[#E5DDF0] hover:bg-white hover:border-[#FF8A24]/40"
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span
                  className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-white/20 text-[#FF8A24]" : "bg-slate-200/80 text-slate-600"
                  }`}
                >
                  Step {step.number}
                </span>
                <Icon
                  className={`h-4 w-4 ${
                    isActive ? "text-[#FF8A24]" : "text-slate-400"
                  }`}
                />
              </div>
              <span className="text-xs font-bold leading-snug line-clamp-1">{step.title}</span>
              <span
                className={`text-[10px] truncate ${
                  isActive ? "text-white/70" : "text-slate-500"
                }`}
              >
                {step.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Card */}
      <div className="mt-8 rounded-2xl border border-[#E5DDF0] bg-[#F7F3FC]/50 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#351650] text-white shadow-md">
              {(() => {
                const ActiveIcon = current.icon;
                return <ActiveIcon className="h-6 w-6 text-[#FF8A24]" />;
              })()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#FF8A24]">
                  PHASE {current.number} OF 06
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500">{current.subtitle}</span>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-extrabold text-[#351650] mt-0.5">
                {current.title}
              </h4>
            </div>
          </div>

          {/* Timeline pill */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 border border-[#E5DDF0] shadow-2xs self-start lg:self-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Processing Speed:
            </span>
            <span className="text-xs font-bold text-[#351650]">{current.timeline}</span>
          </div>
        </div>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-foreground/85">
          {current.description}
        </p>

        {/* Institutional Regulatory Footprint */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-200/60">
          <div className="rounded-xl bg-white p-3.5 border border-[#E5DDF0]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF8A24]">
              Regulatory Supervision
            </p>
            <p className="text-xs font-semibold text-[#351650] mt-0.5">{current.regulator}</p>
          </div>
          <div className="rounded-xl bg-white p-3.5 border border-[#E5DDF0]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#351650]/60">
              Settlement Role
            </p>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">
              {current.settlementRole}
            </p>
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="mt-6 flex items-center justify-between pt-2">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
              activeStep === 0
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white text-[#351650] border border-[#E5DDF0] hover:bg-slate-50 cursor-pointer"
            }`}
          >
            ← Previous Stage
          </button>

          <span className="text-xs font-semibold text-slate-500">
            {activeStep + 1} / {steps.length}
          </span>

          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
              activeStep === steps.length - 1
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-[#FF8A24] text-white hover:bg-[#e0771c] cursor-pointer shadow-xs"
            }`}
          >
            <span>Next Stage</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}


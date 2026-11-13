import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  LogIn,
  GraduationCap,
  TrendingUp,
  Sparkles,
  Award,
  BookOpen,
  Users,
  ShieldCheck,
  Building2,
  FileText,
  Globe,
  Coins,
  Download,
  Briefcase,
  MapPin,
  Image,
  CheckSquare,
} from "lucide-react";
import { brand } from "@/data/seg";
import { MarketTickerBar } from "@/components/ticker/MarketTickerBar";
import { CareersModal } from "@/components/CareersModal";

export function Logo({
  className = "",
  showTagline = true,
  dark = true,
}: {
  className?: string;
  showTagline?: boolean;
  dark?: boolean;
}) {
  return (
    <a
      href="/"
      className={`inline-flex min-w-0 items-center ${className}`}
      aria-label={`${brand.name} home`}
    >
      <img
        src="/SEGAcademy%20Training%20Workshop%20Logo.png?v=2"
        alt="SEG Academy"
        className={`h-[38px] sm:h-[42px] md:h-[45px] lg:h-[48px] w-auto max-w-[170px] sm:max-w-[200px] md:max-w-[230px] object-contain shrink-0 transition-all hover:opacity-95 drop-shadow-xs ${
          !dark ? "rounded-xl bg-white/95 p-1.5 shadow-sm" : ""
        }`}
      />
    </a>
  );
}

// Course Dropdown Data
const coursesData = [
  {
    abbr: "APFM",
    name: "Advance Program in Financial Market",
    description: "Comprehensive equity, F&O, technical analysis & live terminal handling.",
    level: "Beginner to Pro",
    levelColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    href: "/#courses",
    badge: "Flagship",
  },
  {
    abbr: "MMP",
    name: "Money Matrix Program",
    description: "Smart Money Logic across Indian equities, global indices & cryptocurrency.",
    level: "Featured Program",
    levelColor: "text-orange-700 bg-orange-50 border-orange-200",
    href: "/money-matrix",
    badge: "Specialized",
  },
  {
    abbr: "PTS",
    name: "Pro Trading Setup",
    description: "High-probability swing trading, trend following & intraday price action setups.",
    level: "Intermediate",
    levelColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
    href: "/#courses",
    badge: "Action",
  },
  {
    abbr: "HEDGING",
    name: "Option Hedging & Strategies",
    description: "Derivatives risk management, expiry day tactics & disciplined capital hedging.",
    level: "Advanced Options",
    levelColor: "text-purple-700 bg-purple-50 border-purple-200",
    href: "/#courses",
    badge: "Derivatives",
  },
];

// About Dropdown Data
const aboutData = [
  {
    icon: Building2,
    label: "Director's Message",
    href: "/about/directors-message",
    description: "Official institutional address by Director Sandeep Chatterjee",
  },
  {
    icon: ShieldCheck,
    label: "Why Choose SEG Academy?",
    href: "/about/why-choose-seg-academy",
    description: "Pedagogy, live trading lab & NAAC/NEP learning standards",
  },
  {
    icon: Award,
    label: "Mission & Vision",
    href: "/about/mission-vision",
    description: "Core values, educational charter & Government accreditations",
  },
  {
    icon: BookOpen,
    label: "About SEG Academy",
    href: "/about/overview",
    description: "Institutional background, campuses, heritage & infrastructure",
  },
  {
    icon: Users,
    label: "Meet Our Faculty",
    href: "/leadership-team",
    description: "Meet our core mentors, technical analysts & academic leadership",
  },
];

// Student Portal Flyout Data
const studentPortalData = [
  {
    label: "Student Login",
    href: "/student-zone/login",
    description: "Access student learning dashboard & batch lecture notes",
    icon: LogIn,
  },
  {
    label: "Student Registration",
    href: "/student-zone/registration",
    description: "Official online enrollment application & admission desk",
    icon: GraduationCap,
  },
  {
    label: "Student Verification",
    href: "/student-zone/verification",
    description: "Verify active student enrollment status in SEG database",
    icon: ShieldCheck,
  },
  {
    label: "Certificate Verification",
    href: "/student-zone/certificate-verification",
    description: "Validate authentic SEG Academy course certificates",
    icon: Award,
  },
];

const blogNavData = [
  {
    label: "View All Blogs",
    href: "/blogs",
    description: "Explore all financial market research and guides",
    icon: BookOpen,
  },
  {
    label: "Indian Stock Market",
    href: "/blogs/indian-stock-market",
    description: "NSE/BSE, FMCG distribution, ₹1L allocation & cycles",
    icon: TrendingUp,
  },
  {
    label: "Global Stock Market",
    href: "/blogs/global-stock-market",
    description: "US equities, international macroeconomic correlations",
    icon: Globe,
  },
  {
    label: "Cryptocurrency Market",
    href: "/blogs/cryptocurrency-market",
    description: "Layer-1 protocols, DeFi, tokens & Indian tax laws",
    icon: Coins,
  },
];

// More Dropdown Data (Download, Franchise, Gallery, Mock Test, Subsidiary Brands)
const moreNavData = {
  download: {
    label: "Download",
    description: "Official documents & examination admit cards",
    icon: Download,
    items: [
      {
        label: "Download Document",
        href: "/download",
        description: "Official prospectus, curriculum & registration forms",
        icon: FileText,
        internal: true,
      },
      {
        label: "Download Admit Card",
        href: "/download-admit-card",
        description: "Official student examination hall tickets & admit cards",
        icon: Award,
        internal: true,
      },
    ],
  },
  franchise: {
    label: "Franchise",
    description: "Partner with India's leading stock market institute",
    icon: Building2,
    items: [
      {
        label: "Franchise Enquiry",
        href: "/franchise-enquiry",
        description: "Submit official franchise application & partner enquiry",
        icon: Briefcase,
        internal: true,
      },
      {
        label: "Branch List",
        href: "/branch-list",
        description: "Search verified study centres, campuses & regional desks",
        icon: MapPin,
        internal: true,
      },
    ],
  },
  gallery: {
    label: "Gallery",
    href: "https://www.segacademy.in/photos.php",
    description: "Campus facilities, live trading labs & seminar archives",
    icon: Image,
  },
  mockTest: {
    label: "Mock Test",
    href: "https://www.segacademy.in/page.php?id=TXpZdw==",
    description: "Chapter exams, diploma tests & market assessments",
    icon: CheckSquare,
  },
  subsidiaryBrands: {
    label: "Subsidiary Brands",
    href: "/subsidiary-brands",
    description: "Associated education, technology & software ventures",
    icon: Sparkles,
    internal: true,
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeNestedMenu, setActiveNestedMenu] = useState<string | null>(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileStudentOpen, setMobileStudentOpen] = useState(false);
  const [mobileBlogsOpen, setMobileBlogsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileDownloadOpen, setMobileDownloadOpen] = useState(false);
  const [mobileFranchiseOpen, setMobileFranchiseOpen] = useState(false);
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleOpenCareers = () => setIsCareersModalOpen(true);
    window.addEventListener("open-seg-careers-modal", handleOpenCareers);
    return () => window.removeEventListener("open-seg-careers-modal", handleOpenCareers);
  }, []);

  // Smart Auto-Hide on Scroll Detection Logic
  // - Top of page (<= 100px): always visible
  // - Scrolling DOWN past 100px: smoothly slide upward and hide
  // - Scrolling UP: smoothly slide down and reveal
  // - 8px buffer threshold prevents accidental jitter
  // - Active dropdown or open mobile menu locks navbar visible
  useEffect(() => {
    let ticking = false;
    const scrollThreshold = 8;

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY);
      const prevScrollY = lastScrollYRef.current;
      const diff = currentScrollY - prevScrollY;

      // 1. Scrolled state for compact glass aesthetics
      setScrolled(currentScrollY > 35);

      // 2. Rule: At the top of the page (within 100px), always keep visible
      if (currentScrollY <= 100) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // 3. Rule: Keep visible while user is actively interacting with an open dropdown or mobile drawer
      if (activeDropdown !== null || mobileOpen) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      // 4. Rule: Ignore tiny scroll jitters under the 8px threshold
      if (Math.abs(diff) < scrollThreshold) {
        return;
      }

      // 5. Rule: Scrolling DOWN -> Hide navbar beyond top edge
      if (diff > 0) {
        setIsNavbarVisible(false);
      }
      // 6. Rule: Scrolling UP -> Reveal navbar back to original fixed position
      else if (diff < 0) {
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeDropdown, mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Click outside & Escape key listeners
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleDropdownEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveNestedMenu(null);
    }, 180);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setActiveNestedMenu(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 pointer-events-none flex flex-col w-full"
      >
      {/* 1. Indian Stock Market Ticker Tape (Layered below the floating 3D navbar pill) */}
      <div className="pointer-events-auto w-full relative z-30 bg-white">
        <MarketTickerBar />
      </div>

      {/* 2. Floating Glass Navbar with Smart Auto-Hide on Scroll (Layered on top with 3D shadow over ribbon) */}
      <div
        style={{
          transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
          transform: isNavbarVisible ? "translateY(0)" : "translateY(-130%)",
        }}
        className={`w-full px-3 sm:px-6 relative z-50 will-change-transform pt-0 -mt-1 sm:-mt-1.5 ${
          isNavbarVisible ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`pointer-events-auto mx-auto max-w-[1180px] rounded-2xl transition-all duration-300 ease-out flex items-center justify-between px-3 sm:px-4 lg:px-5 ${
            scrolled
              ? "h-[54px] sm:h-[58px] lg:h-[62px] bg-white/94 backdrop-blur-2xl border border-slate-200/85 shadow-[0_10px_32px_rgba(15,23,42,0.10),0_1px_3px_rgba(0,0,0,0.04)]"
              : "h-[60px] sm:h-[64px] lg:h-[68px] bg-white/85 backdrop-blur-[20px] border border-white/85 shadow-[0_8px_28px_rgba(15,23,42,0.06),0_1px_2px_rgba(0,0,0,0.03)]"
          }`}
        >
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Logo dark={true} showTagline={true} />
        </div>

        {/* Desktop Public Navigation Links */}
        <nav
          aria-label="Main Public Navigation"
          className="hidden items-center gap-1 lg:flex xl:gap-1.5 text-[13.5px] font-semibold text-slate-700"
        >
          {/* 1. Home */}
          <a
            href="/"
            onClick={handleLinkClick}
            className="rounded-lg px-2.5 py-1 transition-colors duration-150 hover:bg-slate-100/70 hover:text-[#351650]"
          >
            Home
          </a>

          {/* 2. About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "about" ? null : "about")
              }
              aria-expanded={activeDropdown === "about"}
              aria-haspopup="true"
              className={`group flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                activeDropdown === "about"
                  ? "bg-slate-100/90 text-[#351650] font-bold"
                  : "hover:bg-slate-100/70 hover:text-[#351650]"
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "about" ? "rotate-180 text-[#FF8A24]" : "group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* About Glass Dropdown Panel */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                activeDropdown === "about"
                  ? "pointer-events-auto visible opacity-100 translate-y-0"
                  : "pointer-events-none invisible opacity-0 -translate-y-1.5"
              }`}
            >
              <div className="w-[320px] rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Institutional Profile
                  </span>
                  <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[9.5px] font-bold text-[#FF8A24] border border-orange-100">
                    Est. 2017
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {aboutData.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className="group/item flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#F7F3FC] hover:translate-x-0.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover/item:bg-[#FF8A24]/10 group-hover/item:text-[#FF8A24]">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="truncate">
                              <span className="block text-[13.5px] font-bold text-slate-800 leading-tight group-hover/item:text-[#351650]">
                                {item.label}
                              </span>
                              <span className="block text-[11px] font-normal text-slate-500 truncate leading-tight mt-0.5">
                                {item.description}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform duration-150 group-hover/item:translate-x-0.5 group-hover/item:text-[#FF8A24]" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Courses Dropdown ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("courses")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "courses" ? null : "courses")
              }
              aria-expanded={activeDropdown === "courses"}
              aria-haspopup="true"
              className={`group flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                activeDropdown === "courses"
                  ? "bg-slate-100/90 text-[#351650] font-bold"
                  : "hover:bg-slate-100/70 hover:text-[#351650]"
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "courses" ? "rotate-180 text-[#FF8A24]" : "group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* Courses Glass Dropdown Panel */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                activeDropdown === "courses"
                  ? "pointer-events-auto visible opacity-100 translate-y-0"
                  : "pointer-events-none invisible opacity-0 -translate-y-1.5"
              }`}
            >
              <div className="w-[390px] rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-[#FF8A24]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Market Certifications
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">
                    NSE / BSE Aligned
                  </span>
                </div>

                <ul className="space-y-1">
                  {coursesData.map((course) => (
                    <li key={course.abbr}>
                      <a
                        href={course.href}
                        onClick={handleLinkClick}
                        className="group/item flex items-start justify-between rounded-xl p-2.5 transition-all duration-150 hover:bg-[#F7F3FC] hover:translate-x-0.5"
                      >
                        <div className="min-w-0 pr-3">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="rounded-md bg-slate-900 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white tracking-wider">
                              {course.abbr}
                            </span>
                            <span className={`rounded-full border px-2 py-0.2 text-[9.5px] font-semibold ${course.levelColor}`}>
                              {course.level}
                            </span>
                          </div>
                          <span className="block text-[13.5px] font-bold text-slate-800 leading-snug group-hover/item:text-[#351650]">
                            {course.name}
                          </span>
                          <span className="block text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
                            {course.description}
                          </span>
                        </div>
                        <div className="pt-2">
                          <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-150 group-hover/item:translate-x-0.5 group-hover/item:text-[#FF8A24]" />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-2 border-t border-slate-100 pt-2 px-1">
                  <a
                    href="/#courses"
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-bold text-[#FF8A24] transition-colors hover:bg-orange-50"
                  >
                    <span>View All Programs & Full Curriculum</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Blogs Dropdown ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("blogs")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "blogs" ? null : "blogs")
              }
              aria-expanded={activeDropdown === "blogs"}
              aria-haspopup="true"
              className={`group flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                activeDropdown === "blogs"
                  ? "bg-slate-100/90 text-[#351650] font-bold"
                  : "hover:bg-slate-100/70 hover:text-[#351650]"
              }`}
            >
              <span>Blogs</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "blogs" ? "rotate-180 text-[#FF8A24]" : "group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* Blogs Glass Dropdown Panel */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                activeDropdown === "blogs"
                  ? "pointer-events-auto visible opacity-100 translate-y-0"
                  : "pointer-events-none invisible opacity-0 -translate-y-1.5"
              }`}
            >
              <div className="w-[360px] rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Financial Knowledge Hub
                    </span>
                  </div>
                  <a
                    href="/blogs"
                    onClick={handleLinkClick}
                    className="text-[11px] font-bold text-[#FF8A24] hover:underline"
                  >
                    View All →
                  </a>
                </div>

                <ul className="space-y-0.5">
                  {blogNavData.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className="group/item flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#F7F3FC] hover:translate-x-0.5"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover/item:bg-[#FF8A24]/10 group-hover/item:text-[#FF8A24]">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="truncate">
                              <span className="block text-[13px] font-bold text-slate-800 leading-tight group-hover/item:text-[#351650]">
                                {item.label}
                              </span>
                              <span className="block text-[11px] font-normal text-slate-500 truncate leading-tight mt-0.5">
                                {item.description}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform duration-150 group-hover/item:translate-x-0.5 group-hover/item:text-[#FF8A24]" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* 5. More Dropdown ▼ */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("more")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(activeDropdown === "more" ? null : "more")
              }
              aria-expanded={activeDropdown === "more"}
              aria-haspopup="true"
              className={`group flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                activeDropdown === "more"
                  ? "bg-slate-100/90 text-[#351650] font-bold"
                  : "hover:bg-slate-100/70 hover:text-[#351650]"
              }`}
            >
              <span>More</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                  activeDropdown === "more"
                    ? "rotate-180 text-[#FF8A24]"
                    : "group-hover:text-slate-600"
                }`}
              />
            </button>

            {/* More Dropdown Panel */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                activeDropdown === "more"
                  ? "pointer-events-auto visible opacity-100 translate-y-0"
                  : "pointer-events-none invisible opacity-0 -translate-y-1.5"
              }`}
            >
              <div className="w-[300px] rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                <div className="border-b border-slate-100 px-3 py-2 mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A24]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Resources &amp; Institutional Network
                    </span>
                  </div>
                </div>

                <ul className="space-y-1 relative">
                  {/* 1. DOWNLOAD (Nested Submenu) */}
                  <li
                    className="relative group/dl"
                    onMouseEnter={() => setActiveNestedMenu("download")}
                  >
                    <div
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-150 cursor-pointer ${
                        activeNestedMenu === "download"
                          ? "bg-[#F7F3FC] text-[#351650]"
                          : "hover:bg-[#F7F3FC] text-slate-700 hover:text-[#351650]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover/dl:bg-[#FF8A24] group-hover/dl:text-white transition-colors">
                          <Download className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#351650] group-hover/dl:text-[#FF8A24] transition-colors flex items-center gap-1">
                            Download
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            Prospectus &amp; admit cards
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-3.5 w-3.5 shrink-0 transition-all duration-150 ${
                          activeNestedMenu === "download"
                            ? "text-[#FF8A24] translate-x-1"
                            : "text-slate-300 group-hover/dl:text-[#FF8A24]"
                        }`}
                      />
                    </div>

                    {/* Download Flyout Submenu Panel */}
                    <div
                      className={`absolute left-full top-0 pl-2 transition-all duration-200 z-50 ${
                        activeNestedMenu === "download"
                          ? "pointer-events-auto visible opacity-100 translate-x-0"
                          : "pointer-events-none invisible opacity-0 -translate-x-1"
                      }`}
                    >
                      <div className="w-[280px] rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
                        <div className="border-b border-slate-100 px-3 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Official Downloads
                        </div>
                        <ul className="space-y-0.5">
                          {moreNavData.download.items.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  onClick={handleLinkClick}
                                  className="group/sub flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#F7F3FC]"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover/sub:bg-[#FF8A24] group-hover/sub:text-white transition-colors">
                                      <Icon className="h-3.5 w-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-xs font-bold text-[#351650] group-hover/sub:text-[#FF8A24] transition-colors">
                                        {sub.label}
                                      </p>
                                      <p className="text-[10px] text-slate-500 truncate">
                                        {sub.description}
                                      </p>
                                    </div>
                                  </div>
                                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover/sub:translate-x-0.5 group-hover/sub:text-[#FF8A24]" />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* 2. FRANCHISE (Nested Submenu) */}
                  <li
                    className="relative group/fr"
                    onMouseEnter={() => setActiveNestedMenu("franchise")}
                  >
                    <div
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-150 cursor-pointer ${
                        activeNestedMenu === "franchise"
                          ? "bg-[#F7F3FC] text-[#351650]"
                          : "hover:bg-[#F7F3FC] text-slate-700 hover:text-[#351650]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover/fr:bg-[#FF8A24] group-hover/fr:text-white transition-colors">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#351650] group-hover/fr:text-[#FF8A24] transition-colors flex items-center gap-1">
                            Franchise
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            Partnerships &amp; branch network
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-3.5 w-3.5 shrink-0 transition-all duration-150 ${
                          activeNestedMenu === "franchise"
                            ? "text-[#FF8A24] translate-x-1"
                            : "text-slate-300 group-hover/fr:text-[#FF8A24]"
                        }`}
                      />
                    </div>

                    {/* Franchise Flyout Submenu Panel */}
                    <div
                      className={`absolute left-full top-0 pl-2 transition-all duration-200 z-50 ${
                        activeNestedMenu === "franchise"
                          ? "pointer-events-auto visible opacity-100 translate-x-0"
                          : "pointer-events-none invisible opacity-0 -translate-x-1"
                      }`}
                    >
                      <div className="w-[280px] rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
                        <div className="border-b border-slate-100 px-3 py-1.5 mb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Franchise Network
                        </div>
                        <ul className="space-y-0.5">
                          {moreNavData.franchise.items.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <li key={sub.label}>
                                <a
                                  href={sub.href}
                                  onClick={handleLinkClick}
                                  className="group/sub flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#F7F3FC]"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover/sub:bg-[#FF8A24] group-hover/sub:text-white transition-colors">
                                      <Icon className="h-3.5 w-3.5" />
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-xs font-bold text-[#351650] group-hover/sub:text-[#FF8A24] transition-colors">
                                        {sub.label}
                                      </p>
                                      <p className="text-[10px] text-slate-500 truncate">
                                        {sub.description}
                                      </p>
                                    </div>
                                  </div>
                                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover/sub:translate-x-0.5 group-hover/sub:text-[#FF8A24]" />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>

                  {/* 3. GALLERY (Direct Navigation) */}
                  <li onMouseEnter={() => setActiveNestedMenu(null)}>
                    <a
                      href={moreNavData.gallery.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-[#F7F3FC]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover:bg-[#FF8A24] group-hover:text-white transition-colors">
                          <Image className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#351650] group-hover:text-[#FF8A24] transition-colors">
                            {moreNavData.gallery.label}
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            {moreNavData.gallery.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#FF8A24]" />
                    </a>
                  </li>

                  {/* 4. MOCK TEST (Direct Navigation) */}
                  <li onMouseEnter={() => setActiveNestedMenu(null)}>
                    <a
                      href={moreNavData.mockTest.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-[#F7F3FC]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover:bg-[#FF8A24] group-hover:text-white transition-colors">
                          <CheckSquare className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#351650] group-hover:text-[#FF8A24] transition-colors">
                            {moreNavData.mockTest.label}
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            {moreNavData.mockTest.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#FF8A24]" />
                    </a>
                  </li>

                  {/* 5. SUBSIDIARY BRANDS (Direct Navigation) */}
                  <li onMouseEnter={() => setActiveNestedMenu(null)}>
                    <a
                      href={moreNavData.subsidiaryBrands.href}
                      onClick={handleLinkClick}
                      className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-[#F7F3FC]"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 pr-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] group-hover:bg-[#FF8A24] group-hover:text-white transition-colors">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#351650] group-hover:text-[#FF8A24] transition-colors">
                            {moreNavData.subsidiaryBrands.label}
                          </p>
                          <p className="text-[10px] text-slate-500 truncate">
                            {moreNavData.subsidiaryBrands.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#FF8A24]" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 6. Careers (Opens WhatsApp Careers Application Modal) */}
          <button
            type="button"
            onClick={() => setIsCareersModalOpen(true)}
            className="group flex items-center gap-1 rounded-lg px-2.5 py-1 transition-colors duration-150 hover:bg-slate-100/70 hover:text-[#351650] cursor-pointer"
          >
            <span>Careers</span>
          </button>

          {/* 7. Contact */}
          <a
            href="/contact"
            onClick={handleLinkClick}
            className="rounded-lg px-2.5 py-1 transition-colors duration-150 hover:bg-slate-100/70 hover:text-[#351650]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop Right Actions: Student Login + ENROLL NOW CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Student Login (Secondary Action with Dropdown for Portals) */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("student")}
            onMouseLeave={handleDropdownLeave}
          >
            <a
              href="/student-zone/login"
              onClick={handleLinkClick}
              className={`group flex items-center gap-1.5 rounded-xl border border-slate-200/90 bg-white/70 px-3 py-1.5 text-[12.5px] font-semibold text-slate-700 shadow-xs transition-all duration-150 hover:border-slate-300 hover:bg-white hover:text-[#351650] hover:shadow-xs ${
                activeDropdown === "student" ? "bg-white border-slate-300 text-[#351650]" : ""
              }`}
            >
              <LogIn className="h-3.5 w-3.5 text-slate-400 transition-colors group-hover:text-[#FF8A24]" />
              <span>Student Login</span>
              <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-slate-600" />
            </a>

            {/* Student Portal Dropdown */}
            <div
              className={`absolute right-0 top-full pt-2 transition-all duration-200 ease-out z-50 ${
                activeDropdown === "student"
                  ? "pointer-events-auto visible opacity-100 translate-y-0"
                  : "pointer-events-none invisible opacity-0 -translate-y-1.5"
              }`}
            >
              <div className="w-[280px] rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                <div className="border-b border-slate-100 px-3 py-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Student Zone Portal
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {studentPortalData.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={handleLinkClick}
                          className="group/item flex items-center justify-between rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#F7F3FC]"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-hover/item:bg-[#FF8A24]/10 group-hover/item:text-[#FF8A24]">
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            <div className="truncate">
                              <span className="block text-xs font-bold text-slate-800 leading-tight group-hover/item:text-[#351650]">
                                {item.label}
                              </span>
                              <span className="block text-[10px] font-normal text-slate-400 truncate leading-tight mt-0.5">
                                {item.description}
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="h-3 w-3 shrink-0 text-slate-300 group-hover/item:text-[#FF8A24] group-hover/item:translate-x-0.5" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* ENROLL NOW CTA (Primary Action) */}
          <a
            href="/student-zone/registration"
            onClick={handleLinkClick}
            className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wide text-white shadow-[0_3px_12px_rgba(255,122,0,0.30)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_5px_18px_rgba(255,122,0,0.45)] active:scale-[0.98]"
          >
            <span>ENROLL NOW</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/student-zone/registration"
            className="inline-flex items-center justify-center rounded-lg bg-[#FF8A24] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-xs sm:hidden"
          >
            Enroll
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-700 shadow-xs transition-colors hover:bg-slate-100"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Floating Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[1180px] rounded-2xl border border-slate-200/90 bg-white/96 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.18)] backdrop-blur-2xl max-h-[calc(100vh-90px)] overflow-y-auto animate-in fade-in-0 slide-in-from-top-2 duration-200 lg:hidden">
          <ul className="flex flex-col divide-y divide-slate-100 text-sm font-semibold text-slate-800">
            {/* Home */}
            <li className="py-2.5">
              <a
                href="/"
                onClick={handleLinkClick}
                className="flex items-center justify-between rounded-lg px-2 py-1 text-slate-800 hover:text-[#351650]"
              >
                <span>Home</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            </li>

            {/* About Accordion */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => setMobileAboutOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-slate-800 hover:text-[#351650]"
              >
                <span>About</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180 text-[#FF8A24]" : ""
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-2">
                  {aboutData.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white hover:text-[#351650]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* Courses Accordion */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => setMobileCoursesOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-slate-800 hover:text-[#351650]"
              >
                <div className="flex items-center gap-1.5">
                  <span>Courses</span>
                  <span className="rounded-full bg-orange-100 px-1.5 py-0.2 text-[10px] font-bold text-[#FF8A24]">
                    4 Programs
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileCoursesOpen ? "rotate-180 text-[#FF8A24]" : ""
                  }`}
                />
              </button>
              {mobileCoursesOpen && (
                <div className="mt-2 space-y-1.5 rounded-xl bg-slate-50 p-2">
                  {coursesData.map((course) => (
                    <a
                      key={course.abbr}
                      href={course.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between rounded-lg bg-white p-2.5 shadow-sm hover:border-[#FF8A24]/30"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="rounded bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
                            {course.abbr}
                          </span>
                          <span className={`rounded-full border px-1.5 py-0.2 text-[9px] font-semibold ${course.levelColor}`}>
                            {course.level}
                          </span>
                        </div>
                        <span className="block text-xs font-bold text-slate-800">
                          {course.name}
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </a>
                  ))}
                  <a
                    href="/#courses"
                    onClick={handleLinkClick}
                    className="block text-center rounded-lg p-2 text-xs font-bold text-[#FF8A24] hover:bg-orange-100/50"
                  >
                    View All Programs & Full Curriculum →
                  </a>
                </div>
              )}
            </li>

            {/* Blogs Accordion */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => setMobileBlogsOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-slate-800 hover:text-[#351650]"
              >
                <div className="flex items-center gap-1.5">
                  <span>Blogs & Knowledge Hub</span>
                  <span className="rounded-full bg-orange-100 px-1.5 py-0.2 text-[10px] font-bold text-[#FF8A24]">
                    Hub
                  </span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileBlogsOpen ? "rotate-180 text-[#FF8A24]" : ""
                  }`}
                />
              </button>
              {mobileBlogsOpen && (
                <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-2">
                  {blogNavData.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-slate-700 hover:bg-white hover:text-[#351650]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                    </a>
                  ))}
                </div>
              )}
            </li>

            {/* More Accordion */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => setMobileMoreOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-slate-800 hover:text-[#351650]"
              >
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#FF8A24]" />
                  <span>More</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileMoreOpen ? "rotate-180 text-[#FF8A24]" : ""
                  }`}
                />
              </button>
              {mobileMoreOpen && (
                <div className="mt-2 space-y-1.5 rounded-xl bg-slate-50 p-2 pl-3 border-l-2 border-[#FF8A24]/50">
                  {/* 1. Download Nested Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileDownloadOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                    >
                      <div className="flex items-center gap-2">
                        <Download className="h-3.5 w-3.5 text-[#FF8A24]" />
                        <span>Download</span>
                      </div>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-slate-400 transition-transform ${
                          mobileDownloadOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileDownloadOpen && (
                      <div className="mt-1 space-y-1 pl-4 border-l border-slate-200">
                        {moreNavData.download.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block rounded-lg px-2 py-1 text-xs text-slate-600 hover:text-[#FF8A24]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 2. Franchise Nested Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileFranchiseOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                    >
                      <div className="flex items-center gap-2">
                        <Building2 className="h-3.5 w-3.5 text-[#FF8A24]" />
                        <span>Franchise</span>
                      </div>
                      <ChevronDown
                        className={`h-3.5 w-3.5 text-slate-400 transition-transform ${
                          mobileFranchiseOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileFranchiseOpen && (
                      <div className="mt-1 space-y-1 pl-4 border-l border-slate-200">
                        {moreNavData.franchise.items.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={handleLinkClick}
                            className="block rounded-lg px-2 py-1 text-xs text-slate-600 hover:text-[#FF8A24]"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 3. Gallery */}
                  <a
                    href={moreNavData.gallery.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                  >
                    <div className="flex items-center gap-2">
                      <Image className="h-3.5 w-3.5 text-slate-400" />
                      <span>Gallery</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                  </a>

                  {/* 4. Mock Test */}
                  <a
                    href={moreNavData.mockTest.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                  >
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-3.5 w-3.5 text-slate-400" />
                      <span>Mock Test</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                  </a>

                  {/* 5. Subsidiary Brands */}
                  <a
                    href={moreNavData.subsidiaryBrands.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#FF8A24]" />
                      <span>Subsidiary Brands</span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                  </a>
                </div>
              )}
            </li>

            {/* Careers (Opens WhatsApp Careers Application Modal) */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setIsCareersModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-slate-800 hover:text-[#351650] text-left cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-[#FF8A24]" />
                  <span>Careers</span>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            </li>

            {/* Contact */}
            <li className="py-2.5">
              <a
                href="/contact"
                onClick={handleLinkClick}
                className="flex items-center justify-between rounded-lg px-2 py-1 text-slate-800 hover:text-[#351650]"
              >
                <span>Contact Us</span>
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </a>
            </li>

            {/* Student Zone Accordion */}
            <li className="py-2.5">
              <button
                type="button"
                onClick={() => setMobileStudentOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1 text-left text-slate-800 hover:text-[#351650]"
              >
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-[#FF8A24]" />
                  <span>Student Zone Portal</span>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                    mobileStudentOpen ? "rotate-180 text-[#FF8A24]" : ""
                  }`}
                />
              </button>
              {mobileStudentOpen && (
                <div className="mt-2 space-y-1 rounded-xl bg-slate-50 p-2">
                  {studentPortalData.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white hover:text-[#351650]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Action CTAs in Mobile Drawer */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="/student-zone/login"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <LogIn className="h-4 w-4 text-slate-500" />
              <span>Student Login</span>
            </a>

            <a
              href="/student-zone/registration"
              onClick={handleLinkClick}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_16px_rgba(255,122,0,0.35)]"
            >
              <span>ENROLL NOW</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>

    {/* Careers WhatsApp Application Modal */}
    <CareersModal
      isOpen={isCareersModalOpen}
      onClose={() => setIsCareersModalOpen(false)}
    />
  </>
  );
}
import React, { useState, useRef, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { brand } from "@/data/seg";

interface SocialItem {
  id: string;
  name: string;
  href: string;
  bgColor: string;
  hoverColor: string;
  icon: React.ReactNode;
  shadowColor: string;
}

const socialPlatforms: SocialItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/SEGAcademyy/",
    bgColor: "bg-[#1877F2]",
    hoverColor: "hover:bg-[#0d65d9]",
    shadowColor: "shadow-blue-500/25",
    icon: (
      <svg className="h-[22px] w-[22px] fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/segacademy/?hl=en",
    bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    hoverColor: "hover:opacity-95 hover:brightness-105",
    shadowColor: "shadow-pink-500/25",
    icon: (
      <svg className="h-[21px] w-[21px] fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/segacademy?originalSubdomain=in",
    bgColor: "bg-[#0A66C2]",
    hoverColor: "hover:bg-[#084e96]",
    shadowColor: "shadow-blue-600/25",
    icon: (
      <svg className="h-[20px] w-[20px] fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCAszwUvP5flbubXBbyZJDCA",
    bgColor: "bg-[#FF0000]",
    hoverColor: "hover:bg-[#cc0000]",
    shadowColor: "shadow-red-600/25",
    icon: (
      <svg className="h-[20px] w-[20px] fill-white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const whatsappHref = brand.whatsappHref || "https://wa.me/919454945992";

  // Keep menu open while hovering anywhere over the complete widget container
  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
      setHoveredItem(null);
    }, 220);
  };

  // Hovering on arrow directly opens the stack
  const handleArrowMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsOpen(true);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close on Escape or click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <aside
      ref={widgetRef}
      aria-label="Floating Social Media & WhatsApp Widget"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center select-none"
    >
      {/* 
        EXPANDED CONTAINER:
        When expanded:
          1. Arrow Toggle at top (pointing DOWN)
          2. Facebook
          3. Instagram
          4. LinkedIn
          5. YouTube
          6. WhatsApp at permanent bottom
      */}

      {/* Dynamic Arrow Toggle Button */}
      <div className="relative flex items-center justify-center mb-2.5">
        <button
          type="button"
          onClick={handleArrowClick}
          onMouseEnter={handleArrowMouseEnter}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse social media options" : "Expand social media options"}
          className={`group flex h-9 w-9 items-center justify-center rounded-full bg-[#351650] text-white shadow-md border border-white/20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#FF8A24] hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF8A24] cursor-pointer ${
            isOpen ? "bg-[#FF8A24] shadow-[0_4px_16px_rgba(255,138,36,0.35)]" : ""
          }`}
        >
          <ChevronUp
            className={`h-5 w-5 text-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Arrow Tooltip */}
        <div
          role="tooltip"
          className={`pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#351650] px-2.5 py-1 text-[11px] font-bold text-white shadow-md border border-white/10 transition-all duration-200 ${
            hoveredItem === "arrow"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          {isOpen ? "Close Menu" : "Social Links"}
        </div>
      </div>

      {/* 
        Social Media Menu Stack (Facebook -> Instagram -> LinkedIn -> YouTube)
        Animates smoothly with height, opacity, and scale
      */}
      <div
        className={`flex flex-col items-center gap-2.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "max-h-[260px] opacity-100 pointer-events-auto mb-2.5"
            : "max-h-0 opacity-0 pointer-events-none overflow-hidden scale-95"
        }`}
      >
        {socialPlatforms.map((item, index) => {
          // Staggered reveal calculation
          const delayStyle = {
            transitionDelay: isOpen ? `${index * 35}ms` : "0ms",
          };

          return (
            <div
              key={item.id}
              className="relative flex items-center justify-center"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Left-Side Platform Tooltip */}
              <div
                role="tooltip"
                className={`pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#351650] px-2.5 py-1 text-[11px] font-bold text-white shadow-md border border-white/10 transition-all duration-150 ${
                  hoveredItem === item.id
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 pointer-events-none"
                }`}
              >
                {item.name}
              </div>

              {/* Circular Social Button */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                aria-label={`Visit SEG Academy on ${item.name} (opens in new tab)`}
                onClick={() => setIsOpen(false)}
                style={delayStyle}
                className={`group flex h-11 w-11 items-center justify-center rounded-full ${item.bgColor} ${item.hoverColor} ${item.shadowColor} shadow-md border border-white/25 text-white transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF8A24] cursor-pointer`}
              >
                {item.icon}
              </a>
            </div>
          );
        })}
      </div>

      {/* 
        PERMANENT WHATSAPP BUTTON (Bottom-most)
        Circular WhatsApp green (#25D366) with official white WhatsApp icon
      */}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setWhatsappHovered(true)}
        onMouseLeave={() => setWhatsappHovered(false)}
      >
        {/* "Message Us!" Tooltip on Left */}
        <div
          role="tooltip"
          className={`pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-[#241038] px-3 py-1.5 text-xs font-bold text-white shadow-xl border border-white/15 transition-all duration-200 flex items-center gap-1.5 ${
            whatsappHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Message Us!</span>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SEG Academy on WhatsApp (opens in new tab)"
          className="group relative flex h-[52px] w-[52px] sm:h-[54px] sm:w-[54px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.38)] border-2 border-white/30 transition-all duration-200 hover:scale-105 hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366] cursor-pointer"
        >
          <svg
            className="h-7 w-7 sm:h-[30px] sm:w-[30px] fill-white transition-transform duration-200 group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.33C16.32 14.21 15.1 13.61 14.88 13.53C14.65 13.45 14.49 13.41 14.32 13.66C14.16 13.9 13.68 14.47 13.54 14.63C13.4 14.79 13.25 14.82 13.01 14.69C12.76 14.57 11.97 14.31 11.03 13.48C10.3 12.83 9.8 12.03 9.66 11.78C9.52 11.54 9.64 11.4 9.77 11.28C9.88 11.17 10.02 10.99 10.14 10.85C10.26 10.71 10.3 10.61 10.38 10.45C10.46 10.29 10.42 10.14 10.36 10.02C10.3 9.9 9.8 8.68 9.59 8.18C9.39 7.69 9.18 7.76 9.03 7.75C8.89 7.74 8.72 7.74 8.56 7.74C8.4 7.74 8.13 7.8 7.91 8.04C7.68 8.29 7.04 8.89 7.04 10.11C7.04 11.33 7.93 12.51 8.05 12.67C8.17 12.83 9.8 15.34 12.28 16.41C12.87 16.66 13.33 16.82 13.69 16.93C14.28 17.12 14.82 17.09 15.25 17.03C15.73 16.96 16.72 16.43 16.93 15.84C17.13 15.26 17.13 14.76 17.07 14.66C17.01 14.55 16.85 14.45 16.57 14.33Z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}


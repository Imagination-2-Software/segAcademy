import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  FileCheck2,
  GraduationCap,
  LogIn,
  ShieldCheck,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StudentPortalBreadcrumb } from "./StudentPortalBreadcrumb";

interface StudentPortalLayoutProps {
  pageTitle: string;
  pageSubtitle: string;
  activePath: string;
  children: React.ReactNode;
}

export const studentPortalNavItems = [
  {
    label: "Student Registration",
    href: "/student-zone/registration",
    icon: UserPlus,
    description: "Online enrollment & admission application",
  },
  {
    label: "Student Verification",
    href: "/student-zone/verification",
    icon: UserCheck,
    description: "Verify student enrollment & active status",
  },
  {
    label: "Student Login",
    href: "/student-zone/login",
    icon: LogIn,
    description: "Access student learning dashboard & batch notes",
  },
  {
    label: "Certificate Verification",
    href: "/student-zone/certificate-verification",
    icon: Award,
    description: "Verify authentic SEG Academy course certificates",
  },
];

export function StudentPortalLayout({
  pageTitle,
  pageSubtitle,
  activePath,
  children,
}: StudentPortalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden bg-[#241038] py-14 text-white lg:py-20 border-b border-purple-500/20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_40%,rgba(124,58,237,0.28),transparent_70%)]"
          />

          <div className="relative z-10 mx-auto max-w-[1240px] px-5 lg:px-8">
            {/* Breadcrumb */}
            <StudentPortalBreadcrumb currentPageTitle={pageTitle} />

            <div className="mt-6 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#FF8A24]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8A24] border border-[#FF8A24]/40">
                  Student Zone
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/15">
                  Academic Session: 2025-2026
                </span>
                <span className="text-xs text-white/60">
                  ISO 9001:2015 Certified • DPIIT Start-up India
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
                {pageTitle}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                {pageSubtitle}
              </p>
            </div>

            {/* Quick Navigation Tabs for the 4 Student Portal Pages */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {studentPortalNavItems.map((item) => {
                const isActive = activePath === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FF8A24] text-white font-bold shadow-md shadow-orange-500/20"
                        : "border border-white/20 bg-white/5 text-white/85 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="mx-auto max-w-[1180px] px-4 pt-10 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}


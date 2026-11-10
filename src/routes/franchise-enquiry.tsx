import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FranchiseHero } from "@/components/franchise/FranchiseHero";
import { FranchiseForm } from "@/components/franchise/FranchiseForm";
import {
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Users,
  Award,
  Headphones,
} from "lucide-react";

const title = "Franchise Enquiry | Partner with SEG Academy";
const description =
  "Official Franchise Enquiry & Application Portal for SEG Academy. Partner with India's trusted financial market institute and establish a certified trading education center.";

export const Route = createFileRoute("/franchise-enquiry")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/franchise-enquiry" },
    ],
    links: [{ rel: "canonical", href: "/franchise-enquiry" }],
  }),
  component: FranchiseEnquiryPage,
});

function FranchiseEnquiryPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Signature Franchise Hero */}
          <FranchiseHero
            title="FRANCHISE"
            highlightedWord="ENQUIRY"
            subtitle="Partner with India's premier stock market institute. Establish an ISO 9001:2015 certified financial training laboratory and student mentorship hub in your city."
            badge="OFFICIAL FRANCHISE ENQUIRY"
            currentPageLabel="Franchise Enquiry"
            currentPageHref="/franchise-enquiry"
          />

          {/* Form Content Area */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16 space-y-12">
            {/* The Form Component */}
            <FranchiseForm />

            {/* Institutional Association Advantages Strip */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-6">
              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <GraduationCap className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                  NEP &amp; NAAC Aligned Pedagogy
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Our curriculum architecture follows National Education Policy standards, offering structured credits and formal academic certification.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                  Central Corporate Governance
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Registered under the Ministry of Corporate Affairs (CIN: U80902UP2021PTC147746) with strict academic quality control and faculty audits.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <Headphones className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="mt-4 font-display text-base font-bold text-[#351650]">
                  Comprehensive Center Support
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Complete setup assistance, instructor training, software terminal licensing, study materials, and student portal access.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}


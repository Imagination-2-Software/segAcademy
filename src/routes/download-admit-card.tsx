import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadHero } from "@/components/download/DownloadHero";
import { AdmitCardForm } from "@/components/download/AdmitCardForm";
import { ShieldCheck, Award, HelpCircle } from "lucide-react";

const title = "Download Admit Card | Student Examination Portal | SEG Academy";
const description =
  "Official Admit Card Download Portal for SEG Academy. Retrieve and print your official examination hall ticket using your registration number.";

export const Route = createFileRoute("/download-admit-card")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/download-admit-card" },
    ],
    links: [{ rel: "canonical", href: "/download-admit-card" }],
  }),
  component: DownloadAdmitCardPage,
});

export function DownloadAdmitCardPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Signature Admit Card Hero */}
          <DownloadHero
            title="DOWNLOAD"
            highlightedWord="ADMIT CARD"
            subtitle="Enter your official institutional registration number to access, verify, and print your examination hall ticket."
            badge="EXAMINATION CELL PORTAL"
            currentPageLabel="Download Admit Card"
            currentPageHref="/download-admit-card"
          />

          {/* Form Content Container */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16 space-y-12">
            <AdmitCardForm />

            {/* Quick Examination Support Strip */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                <HelpCircle className="h-6 w-6 text-[#FF8A24]" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-[#351650]">
                  Need Help with Your Registration Number?
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Your registration number is printed on your admission receipt and course enrollment welcome letter. For assistance, contact the examination controller desk at{" "}
                  <strong className="text-[#351650]">094549 45992</strong>.
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


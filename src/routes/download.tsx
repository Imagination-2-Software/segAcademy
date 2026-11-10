import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DownloadHero } from "@/components/download/DownloadHero";
import { DocumentTable } from "@/components/download/DocumentTable";
import { officialDocumentsDatabase } from "@/components/download/downloadData";
import { ShieldCheck, BookOpen, FileText } from "lucide-react";

const title = "Download Document | Official Academic Resources | SEG Academy";
const description =
  "Official Document Download Library of SEG Academy. Access and download verified course syllabi, institutional guidelines, and academic brochures.";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/download" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadDocumentPage,
});

export function DownloadDocumentPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Signature Download Hero */}
          <DownloadHero
            title="DOWNLOAD"
            highlightedWord="DOCUMENT"
            subtitle="Access and download verified course curricula, institutional code of conduct, and higher educational NEP framework documents."
            badge="OFFICIAL DOCUMENT REPOSITORY"
            currentPageLabel="Download Document"
            currentPageHref="/download"
          />

          {/* Document Table Content Container */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16 space-y-8">
            <DocumentTable documents={officialDocumentsDatabase} />

            {/* Academic Information Cards */}
            <div className="grid gap-6 sm:grid-cols-3 pt-4">
              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <BookOpen className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="font-display text-base font-bold text-[#351650]">
                  Structured Syllabi
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All syllabi follow National Education Policy (NEP 2020) frameworks with clear credit weightage and terminal lab hours.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <ShieldCheck className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="font-display text-base font-bold text-[#351650]">
                  ISO 9001:2015 Benchmarks
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Course materials and institutional evaluation standards are certified under accredited quality management systems.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5DDF0] bg-white p-6 shadow-sm space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                  <FileText className="h-5 w-5 text-[#FF8A24]" />
                </div>
                <h4 className="font-display text-base font-bold text-[#351650]">
                  Official Circulation
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Documents issued here carry corporate authentication from Segacademy Private Limited (CIN: U80902UP2021PTC147746).
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


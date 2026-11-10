import React, { useState, useMemo } from "react";
import {
  FileText,
  Download,
  Search,
  ExternalLink,
  FolderOpen,
  FileCheck2,
  AlertCircle,
  FileCode,
} from "lucide-react";
import { OfficialDocument } from "./downloadData";

interface DocumentTableProps {
  documents: OfficialDocument[];
}

export function DocumentTable({ documents }: DocumentTableProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDocuments = useMemo(() => {
    if (!searchQuery.trim()) return documents;
    const query = searchQuery.toLowerCase().trim();
    return documents.filter(
      (doc) =>
        doc.subject.toLowerCase().includes(query) ||
        doc.category?.toLowerCase().includes(query)
    );
  }, [documents, searchQuery]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-10 shadow-[0_16px_48px_rgba(53,22,80,0.06)] space-y-6">
      {/* Signature subtle orange ambient glow */}
      <div className="seg-ambient-glow-subtle" aria-hidden="true" />

      {/* Table Header and Search Bar */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5DDF0] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A24]">
            Institutional Document Library
          </span>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-[#351650]">
            Download Official <span className="seg-gradient-heading">Documents</span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Access and download verified course syllabi, institutional enrollment rules, and academic brochures.
          </p>
        </div>

        {/* Search input */}
        {documents.length > 0 && (
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search by subject or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#E5DDF0] bg-[#F7F3FC] pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#351650] placeholder:text-muted-foreground transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24]"
            />
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">
        {documents.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
              <FolderOpen className="h-7 w-7 text-[#FF8A24]" />
            </div>
            <p className="font-display text-base sm:text-lg font-bold text-[#351650]">
              No documents available at the moment.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Please check back shortly or contact the SEG Academy academic desk for specific institutional documents.
            </p>
          </div>
        ) : filteredDocuments.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <AlertCircle className="mx-auto h-8 w-8 text-[#FF8A24]" />
            <p className="font-display text-base font-bold text-[#351650]">
              No documents match &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs font-semibold text-[#FF8A24] hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#E5DDF0]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5DDF0] bg-[#351650] text-white">
                  <th
                    scope="col"
                    className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-center w-[90px]"
                  >
                    S.NO
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-xs font-bold uppercase tracking-wider"
                  >
                    SUBJECT
                  </th>
                  <th
                    scope="col"
                    className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-center w-[160px]"
                  >
                    DOWNLOAD
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DDF0]">
                {filteredDocuments.map((doc, idx) => (
                  <tr
                    key={doc.sNo}
                    className={`transition-colors hover:bg-[#F7F3FC] ${
                      idx % 2 === 1 ? "bg-[#FAF7FC]/50" : "bg-white"
                    }`}
                  >
                    {/* Column 1: S.NO */}
                    <td className="py-4 px-5 text-center font-mono text-xs font-bold text-[#351650]">
                      {doc.sNo}
                    </td>

                    {/* Column 2: SUBJECT */}
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0] mt-0.5">
                          <FileText className="h-4 w-4 text-[#FF8A24]" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-[#351650] leading-snug">
                            {doc.subject}
                          </p>
                          <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                            {doc.category && (
                              <span className="font-semibold text-[#FF8A24]">
                                {doc.category}
                              </span>
                            )}
                            {doc.fileSize && (
                              <>
                                <span>•</span>
                                <span>{doc.fileSize}</span>
                              </>
                            )}
                            <span className="inline-block rounded px-1.5 py-0.2 bg-[#F7F3FC] font-mono font-bold text-[#351650] border border-[#E5DDF0]">
                              {doc.fileType}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Column 3: DOWNLOAD */}
                    <td className="py-4 px-6 text-center">
                      <a
                        href={doc.downloadUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:scale-[1.03] hover:shadow-md transition-all cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Download</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Table Footer Notice */}
      <div className="relative z-10 pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground border-t border-[#E5DDF0]">
        <span>
          Showing <strong>{filteredDocuments.length}</strong> official academic document records
        </span>
        <span className="font-semibold text-[#FF8A24]">
          SEG Academy Academic Directorate • Verified 2026
        </span>
      </div>
    </div>
  );
}


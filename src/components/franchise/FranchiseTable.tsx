import React, { useState } from "react";
import {
  MapPin,
  Building2,
  User,
  Phone,
  Maximize2,
  X,
  SearchX,
  CheckCircle2,
} from "lucide-react";
import { FranchiseCentre } from "./franchiseData";

interface FranchiseTableProps {
  centres: FranchiseCentre[];
  onResetFilters: () => void;
}

export function FranchiseTable({
  centres,
  onResetFilters,
}: FranchiseTableProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    name: string;
    code: string;
  } | null>(null);

  if (centres.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-12 text-center shadow-[0_12px_36px_rgba(53,22,80,0.06)] space-y-4">
        <div className="seg-ambient-glow-subtle" aria-hidden="true" />
        <div className="relative z-10 max-w-md mx-auto space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
            <SearchX className="h-7 w-7 text-[#FF8A24]" />
          </div>
          <h3 className="font-display text-xl font-bold text-[#351650]">
            No Branches Found Matching Your Search
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            There are currently no listed study centres in the selected state or district filter. Try selecting &quot;All States&quot; or resetting your search filters.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 rounded-xl bg-[#351650] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-[#241038] transition-colors cursor-pointer"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white shadow-[0_16px_48px_rgba(53,22,80,0.06)]">
        {/* Signature subtle orange ambient glow */}
        <div className="seg-ambient-glow-subtle" aria-hidden="true" />

        {/* Top Header Strip */}
        <div className="relative z-10 border-b border-[#E5DDF0] bg-[#F7F3FC] px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#FF8A24]" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#351650]">
              Official SEG Academy Branch Directory
            </h3>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#FF8A24] border border-[#E5DDF0] shadow-2xs">
            {centres.length} Verified Records
          </span>
        </div>

        {/* Desktop Table View */}
        <div className="relative z-10 hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E5DDF0] bg-[#351650] text-white">
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider w-[120px]">
                  Centre Code
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider min-w-[220px]">
                  Centre Name
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider min-w-[180px]">
                  Centre Head
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider min-w-[280px]">
                  Address
                </th>
                <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-center w-[120px]">
                  Photo
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DDF0]">
              {centres.map((centre, idx) => (
                <tr
                  key={centre.code}
                  className={`transition-colors hover:bg-[#F7F3FC]/80 ${
                    idx % 2 === 1 ? "bg-[#FAF7FC]/50" : "bg-white"
                  }`}
                >
                  {/* Column 1: Centre Code */}
                  <td className="py-4 px-6 align-top">
                    <span className="inline-block rounded-lg bg-[#351650] px-3 py-1 font-mono text-xs font-extrabold text-[#FF8A24] border border-[#351650] shadow-2xs">
                      {centre.code}
                    </span>
                    <p className="mt-1.5 text-[10px] font-semibold text-muted-foreground uppercase">
                      {centre.type}
                    </p>
                  </td>

                  {/* Column 2: Centre Name */}
                  <td className="py-4 px-6 align-top">
                    <h4 className="font-display text-sm font-bold text-[#351650]">
                      {centre.name}
                    </h4>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="font-semibold text-[#FF8A24]">{centre.state}</span>
                      <span>•</span>
                      <span>{centre.district}</span>
                    </div>
                  </td>

                  {/* Column 3: Centre Head */}
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F7F3FC] text-[#351650] border border-[#E5DDF0]">
                        <User className="h-3.5 w-3.5 text-[#FF8A24]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[#351650]">
                        {centre.head}
                      </span>
                    </div>
                    {centre.phone && (
                      <p className="mt-1.5 text-[11px] text-muted-foreground pl-9">
                        {centre.phone}
                      </p>
                    )}
                  </td>

                  {/* Column 4: Address */}
                  <td className="py-4 px-6 align-top">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-[#FF8A24] mt-0.5" />
                      <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                        {centre.address}
                      </p>
                    </div>
                  </td>

                  {/* Column 5: Photo */}
                  <td className="py-4 px-6 align-middle text-center">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPhoto({
                          url: centre.photo,
                          name: centre.name,
                          code: centre.code,
                        })
                      }
                      title={`View photo of ${centre.name}`}
                      className="group/photo relative inline-block overflow-hidden rounded-xl border-2 border-[#E5DDF0] shadow-sm hover:border-[#FF8A24] transition-all cursor-pointer"
                    >
                      <img
                        src={centre.photo}
                        alt={`${centre.name} campus photograph`}
                        className="h-14 w-20 object-cover object-center group-hover/photo:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-[#351650]/40 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity text-white">
                        <Maximize2 className="h-4 w-4" />
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View */}
        <div className="relative z-10 block md:hidden divide-y divide-[#E5DDF0]">
          {centres.map((centre) => (
            <div key={centre.code} className="p-5 space-y-3.5 bg-white">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-lg bg-[#351650] px-2.5 py-0.5 font-mono text-xs font-bold text-[#FF8A24]">
                    {centre.code}
                  </span>
                  <h4 className="mt-1.5 font-display text-base font-bold text-[#351650]">
                    {centre.name}
                  </h4>
                  <p className="text-xs text-[#FF8A24] font-semibold">
                    {centre.state} • {centre.district}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedPhoto({
                      url: centre.photo,
                      name: centre.name,
                      code: centre.code,
                    })
                  }
                  className="shrink-0 overflow-hidden rounded-xl border border-[#E5DDF0] shadow-xs cursor-pointer"
                >
                  <img
                    src={centre.photo}
                    alt={centre.name}
                    className="h-16 w-20 object-cover"
                  />
                </button>
              </div>

              <div className="grid gap-2 pt-1 text-xs">
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-[#FF8A24] shrink-0" />
                  <span className="text-muted-foreground">Centre Head:</span>
                  <strong className="text-[#351650]">{centre.head}</strong>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#FF8A24] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 leading-relaxed">
                    {centre.address}
                  </span>
                </div>

                {centre.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[#FF8A24] shrink-0" />
                    <span className="text-muted-foreground">{centre.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 p-4 bg-[#351650] text-white">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF8A24]">
                  [{selectedPhoto.code}]
                </span>{" "}
                <strong className="text-sm">{selectedPhoto.name}</strong>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="rounded-lg p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-2 bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.name}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
              />
            </div>
            <div className="p-3 bg-white text-center text-xs text-muted-foreground">
              Verified campus facility of SEG Academy Institutional Association
            </div>
          </div>
        </div>
      )}
    </>
  );
}


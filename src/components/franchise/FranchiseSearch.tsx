import React from "react";
import { Search, RotateCcw, MapPin, Building } from "lucide-react";

interface FranchiseSearchProps {
  states: string[];
  districts: string[];
  selectedState: string;
  selectedDistrict: string;
  onStateChange: (state: string) => void;
  onDistrictChange: (district: string) => void;
  onSearch: () => void;
  onReset: () => void;
  totalResults: number;
}

export function FranchiseSearch({
  states,
  districts,
  selectedState,
  selectedDistrict,
  onStateChange,
  onDistrictChange,
  onSearch,
  onReset,
  totalResults,
}: FranchiseSearchProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#E5DDF0] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_12px_36px_rgba(53,22,80,0.06)] space-y-6">
      {/* Signature subtle orange ambient glow */}
      <div className="seg-ambient-glow-subtle" aria-hidden="true" />

      {/* Introductory Content from Reference */}
      <div className="relative z-10 border-b border-[#E5DDF0] pb-6 space-y-2">
        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#351650] tracking-tight">
          Welcome to <span className="seg-gradient-heading">SEG ACADEMY</span> Academic Association....
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-[#FF8A24] tracking-wide">
          *Find Study Centre......
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Search and locate verified SEG Academy training laboratories, university tie-up centers, and regional affiliated study desks across India.
        </p>
      </div>

      {/* Search Filter Controls Bar */}
      <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end">
        {/* Control 1: STATE */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#351650]">
            State
          </label>
          <div className="relative">
            <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <select
              value={selectedState}
              onChange={(e) => onStateChange(e.target.value)}
              className="w-full rounded-xl border border-[#E5DDF0] bg-[#F7F3FC] pl-10 pr-4 py-3 text-xs sm:text-sm font-semibold text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] cursor-pointer"
            >
              <option value="All">All States</option>
              {states.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Control 2: DISTRICT */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#351650]">
            District
          </label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <select
              value={selectedDistrict}
              onChange={(e) => onDistrictChange(e.target.value)}
              className="w-full rounded-xl border border-[#E5DDF0] bg-[#F7F3FC] pl-10 pr-4 py-3 text-xs sm:text-sm font-semibold text-[#351650] transition-all outline-none focus:ring-2 focus:ring-[#FF8A24]/20 focus:border-[#FF8A24] cursor-pointer"
            >
              <option value="All">All Districts</option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Control 3: SEARCH BRANCH BUTTON */}
        <div>
          <button
            type="button"
            onClick={onSearch}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#E05F00] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Search className="h-4 w-4" />
            <span>Search Branch</span>
          </button>
        </div>

        {/* Control 4: RESET / ACTIVE COUNT */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onReset}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#E5DDF0] bg-white px-4 py-3.5 text-xs sm:text-sm font-semibold text-[#351650] hover:bg-[#F7F3FC] transition-colors shadow-2xs cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5 text-[#FF8A24]" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>

      {/* Filter summary status */}
      <div className="relative z-10 pt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Showing <strong>{totalResults}</strong> verified study centres
          {selectedState !== "All" && ` in ${selectedState}`}
          {selectedDistrict !== "All" && ` (${selectedDistrict})`}
        </span>
        <span className="font-semibold text-[#FF8A24]">
          Directory Verified • Updated 2026
        </span>
      </div>
    </div>
  );
}


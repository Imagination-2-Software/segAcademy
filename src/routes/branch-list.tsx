import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FranchiseHero } from "@/components/franchise/FranchiseHero";
import { FranchiseSearch } from "@/components/franchise/FranchiseSearch";
import { FranchiseTable } from "@/components/franchise/FranchiseTable";
import { franchiseCentres } from "@/components/franchise/franchiseData";

const title = "Branch List | Verified Study Centres | SEG Academy";
const description =
  "Official Branch & Study Centre Directory of SEG Academy. Explore and search verified stock market trading laboratories, regional centers and academic associate institutes across India.";

export const Route = createFileRoute("/branch-list")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/branch-list" },
    ],
    links: [{ rel: "canonical", href: "/branch-list" }],
  }),
  component: BranchListPage,
});

export function BranchListPage() {
  // Filter States
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");

  // Committed search filters (applied when visitor clicks "SEARCH BRANCH")
  const [appliedFilters, setAppliedFilters] = useState<{
    state: string;
    district: string;
  }>({
    state: "All",
    district: "All",
  });

  // Unique states extracted from actual centre records
  const states = useMemo(() => {
    const list = Array.from(new Set(franchiseCentres.map((c) => c.state)));
    return list.sort();
  }, []);

  // Districts dynamically derived from current state selection
  const districts = useMemo(() => {
    let filtered = franchiseCentres;
    if (selectedState !== "All") {
      filtered = filtered.filter((c) => c.state === selectedState);
    }
    const list = Array.from(new Set(filtered.map((c) => c.district)));
    return list.sort();
  }, [selectedState]);

  // Handle State Change: reset district when state changes
  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    setSelectedDistrict("All");
  };

  // Handle District Change
  const handleDistrictChange = (newDistrict: string) => {
    setSelectedDistrict(newDistrict);
  };

  // Search Action
  const handleSearch = () => {
    setAppliedFilters({
      state: selectedState,
      district: selectedDistrict,
    });
  };

  // Reset Action
  const handleReset = () => {
    setSelectedState("All");
    setSelectedDistrict("All");
    setAppliedFilters({
      state: "All",
      district: "All",
    });
  };

  // Filtered Centres based on applied filters
  const filteredCentres = useMemo(() => {
    return franchiseCentres.filter((c) => {
      const matchState =
        appliedFilters.state === "All" || c.state === appliedFilters.state;
      const matchDistrict =
        appliedFilters.district === "All" ||
        c.district === appliedFilters.district;
      return matchState && matchDistrict;
    });
  }, [appliedFilters]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-foreground flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {/* Signature Branch List Hero */}
          <FranchiseHero
            title="BRANCH"
            highlightedWord="LIST"
            subtitle="Search and explore verified SEG Academy study centres, regional academic campuses, and institutional partner units across India."
            badge="OFFICIAL BRANCH DIRECTORY"
            currentPageLabel="Branch List"
            currentPageHref="/branch-list"
          />

          {/* Directory Content Area */}
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8 py-12 lg:py-16 space-y-8">
            {/* Search Filter Controls Component */}
            <FranchiseSearch
              states={states}
              districts={districts}
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              onStateChange={handleStateChange}
              onDistrictChange={handleDistrictChange}
              onSearch={handleSearch}
              onReset={handleReset}
              totalResults={filteredCentres.length}
            />

            {/* Franchise Centre Records Table Component */}
            <FranchiseTable
              centres={filteredCentres}
              onResetFilters={handleReset}
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}


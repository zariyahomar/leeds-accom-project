"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import StarRating from "@/components/StarRating";
import LocationPin from "@/components/LocationPin";
import Link from "next/link";

type Listing = {
  id: number;
  name: string;
  area: string;
  accommodationType: string;
  price: number | null;
  rating: number | null;
  reviewCount: number;
  tag: string;
};

const listings: Listing[] = [
  { id: 1, name: "The Glassworks", area: "City Centre", accommodationType: "Studio", price: 750, rating: 4.6, reviewCount: 32, tag: "Top pick · Close to city centre" },
  { id: 2, name: "Headingley Studios", area: "Headingley", accommodationType: "Studio", price: 620, rating: 4.3, reviewCount: 18, tag: "Student favourite · Great nightlife" },
  { id: 3, name: "Sherwood House", area: "Hyde Park", accommodationType: "Shared House", price: 480, rating: 3.9, reviewCount: 9, tag: "Budget friendly · Quiet street" },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse", accommodationType: "Ensuite", price: 540, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
  { id: 5, name: "Cardigan Heights", area: "Headingley", accommodationType: "Studio", price: 610, rating: 4.5, reviewCount: 14, tag: "Top pick · Close to campus" },
  { id: 6, name: "Burley Lodge Court", area: "Burley", accommodationType: "Shared House", price: 495, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
];

const areaOptions = ["Headingley", "Hyde Park", "City Centre", "Woodhouse", "Burley"];
const typeOptions = ["Studio", "Ensuite", "Shared House"];
const priceOptions = [
  { label: "Under £500", test: (p: number | null) => p !== null && p < 500 },
  { label: "£500 – £700", test: (p: number | null) => p !== null && p >= 500 && p <= 700 },
  { label: "£700+", test: (p: number | null) => p !== null && p > 700 },
];
const ratingOptions = [4, 3];
const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Rating: High to Low", value: "rating-desc" },
] as const;

type SortValue = (typeof sortOptions)[number]["value"];

/* ---------- Desktop: pure CSS hover, no JS state needed ---------- */
function HoverDropdown({
  label,
  activeCount,
  align = "left",
  children,
}: {
  label: string;
  activeCount: number;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className="relative group flex-shrink-0">
      <button
        className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium shadow-sm transition-all duration-200 ${
          activeCount > 0
            ? "bg-[#84ab95] border-[#84ab95] text-white"
            : "bg-white border-zinc-300 text-zinc-700 group-hover:border-[#84ab95] group-hover:text-[#84ab95]"
        }`}
      >
        <span>
          {label}
          {activeCount > 0 ? ` (${activeCount})` : ""}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="absolute left-0 right-0 top-full h-2" />

      <div
        className={`absolute top-full mt-2 w-56 bg-white border border-zinc-200 rounded-xl shadow-lg p-3 z-50 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 ${
          align === "right" ? "right-0" : "left-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Mobile: tap to open/close ---------- */
function TapDropdown({
  label,
  activeCount,
  isOpen,
  onToggle,
  align = "left",
  children,
}: {
  label: string;
  activeCount: number;
  isOpen: boolean;
  onToggle: () => void;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex-shrink-0">
      <button
        onClick={onToggle}
        className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 ${
          activeCount > 0
            ? "bg-[#84ab95] border-[#84ab95] text-white"
            : "bg-white border-zinc-300 text-zinc-700"
        }`}
      >
        <span>
          {label}
          {activeCount > 0 ? ` (${activeCount})` : ""}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-56 bg-white border border-zinc-200 rounded-xl shadow-lg p-3 z-50 ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function BrowsePage() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState<string | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortValue>("default");
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  const toggleMobile = (name: string) =>
    setOpenMobile((current) => (current === name ? null : name));

  const toggleArea = (area: string) =>
    setSelectedAreas((current) =>
      current.includes(area) ? current.filter((a) => a !== area) : [...current, area]
    );

  const toggleType = (type: string) =>
    setSelectedTypes((current) =>
      current.includes(type) ? current.filter((t) => t !== type) : [...current, type]
    );

  const activeFilterCount = {
    area: selectedAreas.length,
    price: selectedPriceLabel ? 1 : 0,
    type: selectedTypes.length,
    rating: minRating ? 1 : 0,
  };

  const filteredListings = useMemo(() => {
    let result = listings.filter((listing) => {
      if (selectedAreas.length > 0 && !selectedAreas.includes(listing.area)) return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(listing.accommodationType)) return false;
      if (selectedPriceLabel) {
        const priceRule = priceOptions.find((p) => p.label === selectedPriceLabel);
        if (priceRule && !priceRule.test(listing.price)) return false;
      }
      if (minRating && (listing.rating ?? 0) < minRating) return false;
      return true;
    });

    if (sortBy === "price-asc") {
      result = [...result].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    } else if (sortBy === "price-desc") {
      result = [...result].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    } else if (sortBy === "rating-desc") {
      result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    }

    return result;
  }, [selectedAreas, selectedTypes, selectedPriceLabel, minRating, sortBy]);

  const areaContent = (
    <div className="flex flex-col gap-2">
      {areaOptions.map((area) => (
        <label key={area} className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
          <input type="checkbox" checked={selectedAreas.includes(area)} onChange={() => toggleArea(area)} className="accent-[#84ab95]" />
          {area}
        </label>
      ))}
    </div>
  );

  const priceContent = (
    <div className="flex flex-col gap-2">
      {priceOptions.map((p) => (
        <label key={p.label} className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
          <input
            type="radio"
            name="price"
            checked={selectedPriceLabel === p.label}
            onClick={() => setSelectedPriceLabel(selectedPriceLabel === p.label ? null : p.label)}
            onChange={() => {}}
            className="accent-[#84ab95]"
          />
          {p.label}
        </label>
      ))}
    </div>
  );

  const typeContent = (
    <div className="flex flex-col gap-2">
      {typeOptions.map((type) => (
        <label key={type} className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
          <input type="checkbox" checked={selectedTypes.includes(type)} onChange={() => toggleType(type)} className="accent-[#84ab95]" />
          {type}
        </label>
      ))}
    </div>
  );

  const ratingContent = (
    <div className="flex flex-col gap-2">
      {ratingOptions.map((r) => (
        <label key={r} className="flex items-center gap-2 text-sm text-zinc-700 cursor-pointer">
          <input
            type="radio"
            name="rating"
            checked={minRating === r}
            onClick={() => setMinRating(minRating === r ? null : r)}
            onChange={() => {}}
            className="accent-[#84ab95]"
          />
          {r}+ stars
        </label>
      ))}
    </div>
  );

  const sortContent = (
    <div className="flex flex-col gap-1">
      {sortOptions.map((opt) => (
        <button
          key={opt.value}
          onClick={() => {
            setSortBy(opt.value);
            setOpenMobile(null);
          }}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
            sortBy === opt.value ? "bg-[#EFF3EF] text-[#5C6E5D] font-medium" : "text-zinc-700 hover:bg-zinc-50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  const sortLabel = `Sort by${sortBy !== "default" ? `: ${sortOptions.find((s) => s.value === sortBy)?.label}` : ""}`;

  return (
    <div className="min-h-screen bg-[#F5F1E9]" onClick={() => setOpenMobile(null)}>
      <Navbar />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 pb-16">
        {/* Hero Card */}
        <section className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[40px] bg-gradient-to-br from-[#EEF5F1] via-[#F6F8F5] to-[#F5F1E9] border border-zinc-200 shadow-lg px-5 sm:px-10 md:px-16 py-8 sm:py-16">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#84ab95]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#BFD4C6]/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm text-[#84ab95] font-semibold">
                Uni Stays
              </span>

              <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl font-medium text-zinc-900 mt-3 sm:mt-4 px-2">
                Browse Accommodation
              </h1>

              <p className="mt-4 max-w-lg mx-auto text-[17px] text-zinc-500 leading-7 font-light tracking-[0.01em]">
                Discover your next home in Leeds.
              </p>

              <form
                className="mt-6 sm:mt-10 w-full max-w-5xl bg-white rounded-2xl sm:rounded-full shadow-lg border border-zinc-200 p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex items-center gap-3 flex-1 px-2 sm:px-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:ml-3 text-[#84ab95] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search accommodation..."
                    className="flex-1 bg-transparent px-2 sm:px-5 py-2 text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-base sm:text-lg min-w-0"
                  />
                </div>
                <button type="submit" className="bg-[#84ab95] hover:bg-[#73967E] transition-colors text-white rounded-xl sm:rounded-full px-8 py-3 font-medium whitespace-nowrap">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Filter chips - DESKTOP (hover) */}
        <div className="hidden sm:block w-full border-t border-zinc-200 mt-10 pt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <HoverDropdown label="Area" activeCount={activeFilterCount.area}>{areaContent}</HoverDropdown>
            <HoverDropdown label="Price" activeCount={activeFilterCount.price}>{priceContent}</HoverDropdown>
            <HoverDropdown label="Accommodation Type" activeCount={activeFilterCount.type}>{typeContent}</HoverDropdown>
            <HoverDropdown label="Rating" activeCount={activeFilterCount.rating}>{ratingContent}</HoverDropdown>
          </div>
        </div>

        {/* Filter chips - MOBILE (tap) */}
        <div className="sm:hidden w-full border-t border-zinc-200 mt-8 pt-6" onClick={(e) => e.stopPropagation()}>
          <div className="flex overflow-x-auto gap-3 -mx-1 px-1 pb-2 no-scrollbar">
            <TapDropdown label="Area" activeCount={activeFilterCount.area} isOpen={openMobile === "area"} onToggle={() => toggleMobile("area")}>{areaContent}</TapDropdown>
            <TapDropdown label="Price" activeCount={activeFilterCount.price} isOpen={openMobile === "price"} onToggle={() => toggleMobile("price")}>{priceContent}</TapDropdown>
            <TapDropdown label="Type" activeCount={activeFilterCount.type} isOpen={openMobile === "type"} onToggle={() => toggleMobile("type")}>{typeContent}</TapDropdown>
            <TapDropdown label="Rating" activeCount={activeFilterCount.rating} isOpen={openMobile === "rating"} onToggle={() => toggleMobile("rating")}>{ratingContent}</TapDropdown>
          </div>
        </div>

        {/* Results header */}
        <div
          className="max-w-6xl mx-auto mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-sm sm:text-base text-zinc-600">
            Showing <span className="font-semibold text-zinc-900">{filteredListings.length}</span> accommodations
          </p>

          {/* Desktop sort - hover */}
          <div className="hidden sm:block">
            <HoverDropdown label={sortLabel} activeCount={0} align="right">{sortContent}</HoverDropdown>
          </div>

          {/* Mobile sort - tap */}
          <div className="sm:hidden">
            <TapDropdown label={sortLabel} activeCount={0} isOpen={openMobile === "sort"} onToggle={() => toggleMobile("sort")} align="right">
              {sortContent}
            </TapDropdown>
          </div>
        </div>

        {/* Listing grid */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredListings.map((listing) => (
            <Link key={listing.id} href={`/accommodation/${listing.id}`} className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 flex flex-col gap-2">
              <h3 className="font-serif font-medium text-lg text-zinc-900">{listing.name}</h3>
              <p className="text-zinc-400 font-light text-sm flex items-center gap-1">
                <LocationPin className="w-3.5 h-3.5" />
                {listing.area}
              </p>
              <p className="text-zinc-500 text-xs">{listing.tag}</p>

              {listing.reviewCount > 0 ? (
                <div className="flex items-center gap-2 mt-1">
                  <StarRating rating={Math.round(listing.rating ?? 0)} />
                  <span className="text-xs text-zinc-500">({listing.reviewCount})</span>
                </div>
              ) : (
                <span className="text-sm font-medium text-zinc-500 mt-1">No reviews yet</span>
              )}

              <span className="text-sm text-zinc-700 mt-1">
                {listing.price ? `£${listing.price}/mo` : "Price unknown"}
              </span>
            </Link>
          ))}

          {filteredListings.length === 0 && (
            <p className="col-span-full text-center text-zinc-500 py-12">
              No accommodations match your filters. Try clearing some.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
"use client";

import Navbar from "@/components/Navbar";
import StarRating from "@/components/StarRating";
import LocationPin from "@/components/LocationPin";

type Listing = {
  id: number;
  name: string;
  area: string;
  price: number | null;
  rating: number | null;
  reviewCount: number;
  tag: string;
};

const listings: Listing[] = [
  { id: 1, name: "The Glassworks", area: "City Centre", price: 750, rating: 4.6, reviewCount: 32, tag: "Top pick · Close to city centre" },
  { id: 2, name: "Headingley Studios", area: "Headingley", price: 620, rating: 4.3, reviewCount: 18, tag: "Student favourite · Great nightlife" },
  { id: 3, name: "Sherwood House", area: "Hyde Park", price: 480, rating: 3.9, reviewCount: 9, tag: "Budget friendly · Quiet street" },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse", price: 540, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
  { id: 5, name: "Cardigan Heights", area: "Headingley", price: 610, rating: 4.5, reviewCount: 14, tag: "Top pick · Close to campus" },
  { id: 6, name: "Burley Lodge Court", area: "Burley", price: 495, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
];

const filters = ["Area", "Price", "Accommodation Type", "Rating"];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E9]">
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

              <p className="mt-3 sm:mt-5 text-sm sm:text-lg text-zinc-600 max-w-2xl font-light px-2">
                Compare honest student reviews before you book.
              </p>

              <form className="mt-6 sm:mt-10 w-full max-w-5xl bg-white rounded-2xl sm:rounded-full shadow-lg border border-zinc-200 p-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0">
                <div className="flex items-center gap-3 flex-1 px-2 sm:px-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 sm:ml-3 text-[#84ab95] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search accommodation..."
                    className="flex-1 bg-transparent px-2 sm:px-5 py-2 text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-base sm:text-lg min-w-0"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#84ab95] hover:bg-[#73967E] transition-colors text-white rounded-xl sm:rounded-full px-8 py-3 font-medium whitespace-nowrap"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Filter chips */}
        <div className="w-full border-t border-zinc-200 mt-8 sm:mt-10 pt-6 sm:pt-8">
          <div className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-3 sm:gap-4 px-1 sm:px-0 -mx-1 sm:mx-0 pb-2 sm:pb-0 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-2 rounded-full bg-white border border-zinc-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:border-[#84ab95] hover:text-[#84ab95] flex-shrink-0"
              >
                <span>{filter}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Results header */}
        <div className="max-w-6xl mx-auto mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <p className="text-sm sm:text-base text-zinc-600">
            Showing <span className="font-semibold text-zinc-900">{listings.length}</span> accommodations
          </p>

          <button className="flex items-center gap-2 rounded-full bg-white border border-zinc-300 px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 hover:border-[#84ab95] hover:text-[#84ab95]">
            <span>Sort by</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Listing grid */}
        <div className="max-w-6xl mx-auto mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-zinc-200 rounded-xl p-4 sm:p-5 flex flex-col gap-2"
            >
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
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
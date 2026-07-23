import Navbar from "@/components/Navbar";

const filters = [
  "Area",
  "Price",
  "Accommodation Type",
  "Rating",
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Navbar />

      <main className="pt-28 px-6 pb-16">

        {/* Hero Card */}
        <section className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#EEF5F1] via-[#F6F8F5] to-[#F5F1E9] border border-zinc-200 shadow-lg px-10 md:px-16 py-16">

            {/* Decorative blobs */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#84ab95]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#BFD4C6]/30 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center text-center">

              <span className="uppercase tracking-[0.25em] text-sm text-[#84ab95] font-semibold">
                Uni Stays
              </span>

              <h1 className="font-serif text-5xl md:text-6xl font-medium text-zinc-900 mt-4">
                Browse Accommodation
              </h1>

              <p className="mt-5 text-lg text-zinc-600 max-w-2xl font-light">
                Compare honest student reviews before you book.
              </p>

              {/* Search Bar */}
              <form className="mt-10 w-full max-w-5xl bg-white rounded-full shadow-lg border border-zinc-200 p-3 flex items-center">

                {/* Search Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 ml-5 text-[#84ab95]"
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
                  placeholder="Search accommodation by name..."
                  className="flex-1 bg-transparent px-5 py-2 text-zinc-800 placeholder:text-zinc-400 focus:outline-none text-lg"
                />

                <button
                  type="submit"
                  className="bg-[#84ab95] hover:bg-[#73967E] transition-colors text-white rounded-full px-8 py-3 font-medium"
                >
                  Search
                </button>

              </form>

            </div>
          </div>
        </section>

        {/* Filter chips will go here */}
       {/* Divider */}
<div className="w-full border-t border-zinc-200 mt-10 pt-8">
  <div className="flex flex-wrap justify-center gap-4">

    {filters.map((filter) => (
      <button
        key={filter}
        className="flex items-center gap-2 rounded-full bg-white border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all duration-200 hover:border-[#84ab95] hover:text-[#84ab95]"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    ))}

  </div>
</div>

<div className="max-w-6xl mx-auto mt-10 flex items-center justify-between">
  <p className="text-zinc-600">
    Showing <span className="font-semibold text-zinc-900">6</span> accommodations
  </p>

  <button
  className="flex items-center gap-2 rounded-full bg-white border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-200 hover:border-[#84ab95] hover:text-[#84ab95]"
>
  <span>Sort by</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</button>
</div>

      </main>
    </div>
  );
}
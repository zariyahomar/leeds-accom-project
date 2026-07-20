type Listing = {
  id: number;
  name: string;
  area: string;
  price: number | null;
  rating: number | null;
  reviewCount: number;
};

type Review = {
  id: number;
  listingName: string;
  area: string;
  rating: number;
  quote: string;
  reviewerInitials: string;
  reviewerName: string;
  reviewerUni: string;
  date: string;
};

const listings: Listing[] = [
  { id: 1, name: "The Glassworks", area: "City Centre", price: 750, rating: 4.6, reviewCount: 32 },
  { id: 2, name: "Headingley Studios", area: "Headingley", price: 620, rating: 4.3, reviewCount: 18 },
  { id: 3, name: "Sherwood House", area: "Hyde Park", price: 480, rating: 3.9, reviewCount: 9 },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse", price: 540, rating: null, reviewCount: 0 },
  { id: 5, name: "Cardigan Heights", area: "Headingley", price: 610, rating: 4.5, reviewCount: 14 },
  { id: 6, name: "Burley Lodge Court", area: "Burley", price: 495, rating: null, reviewCount: 0 },
];

const recentReviews: Review[] = [
  {
    id: 1,
    listingName: "Woodhouse Lane Flats",
    area: "Woodhouse",
    rating: 4,
    quote: "Really solid for the price. The en-suites were newly refurbished and the location is unbeatable — 8 minutes walk to...",
    reviewerInitials: "JT",
    reviewerName: "Jamie T.",
    reviewerUni: "Leeds Beckett University",
    date: "July 2026",
  },
  {
    id: 2,
    listingName: "Burley Road House Share",
    area: "Burley",
    rating: 5,
    quote: "Best year of my life honestly — huge rooms, great housemates, and the landlord was genuinely one of the kinde...",
    reviewerInitials: "PS",
    reviewerName: "Priya S.",
    reviewerUni: "University of Leeds",
    date: "June 2026",
  },
];

const areas = ["Headingley", "Hyde Park", "City Centre", "Woodhouse", "Burley"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? "text-[#84ab95]" : "text-zinc-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1E9] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 bg-black text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#84ab95] rounded-md flex items-center justify-center">
            <span className="text-white text-sm">★</span>
          </div>
          <span className="font-serif text-xl font-semibold">Leeds Digs</span>
        </div>
        <nav className="hidden sm:flex items-center gap-8 text-sm">
          <a href="#browse" className="hover:text-[#84ab95]">Browse</a>
          <a href="#areas" className="hover:text-[#84ab95]">Areas</a>
          <a href="#write-review" className="hover:text-[#84ab95]">Write a Review</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="relative text-white px-8 py-24 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/leeds-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-2">
            Find accommodation
          </h1>
          <h1 className="font-serif text-4xl sm:text-5xl italic text-[#87ad98] mb-6">
            you can trust.
          </h1>
          <p className="max-w-md text-zinc-200 mb-10">
            Honest reviews from Leeds students, for Leeds students. No spin, no landlord edits.
          </p>

          <form className="w-full max-w-xl bg-[#F5F1E9] rounded-2xl p-6 flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Search accommodation by name"
              className="w-full border border-zinc-300 rounded-lg px-4 py-3 text-black text-center focus:outline-none focus:ring-2 focus:ring-[#84ab95]"
            />
            <button
              type="submit"
              className="bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full px-8 py-2 font-medium"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Browse all accommodations */}
      <section id="browse" className="px-8 py-16 max-w-5xl mx-auto w-full">
        <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
          All Listings
        </span>
        <h2 className="font-serif text-3xl font-bold mb-8 text-zinc-900">
          Accommodation in Leeds
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-2"
            >
              <h3 className="font-serif font-semibold text-lg text-zinc-900">{listing.name}</h3>
              <p className="text-zinc-600 text-sm">📍 {listing.area}</p>

              {listing.reviewCount > 0 ? (
                <div className="flex items-center gap-2 mt-1">
                  <StarRating rating={Math.round(listing.rating ?? 0)} />
                  <span className="text-xs text-zinc-500">({listing.reviewCount})</span>
                </div>
              ) : (
                <span className="text-sm font-medium text-zinc-500 mt-1">
                  No reviews yet
                </span>
              )}

              <span className="text-sm text-zinc-700 mt-1">
                {listing.price ? `£${listing.price}/mo` : "Price unknown"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Reviewed */}
      <section className="bg-[#EFF3EF] px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
                Fresh In
              </span>
              <h2 className="font-serif text-3xl font-bold text-zinc-900">
                Recently Reviewed
              </h2>
            </div>
            <a href="#" className="text-[#6B7D6C] text-sm font-medium hover:underline">
              All reviews →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-2"
              >
                <h3 className="font-serif font-semibold text-lg text-zinc-900">
                  {review.listingName}
                </h3>
                <p className="text-zinc-600 text-sm">📍 {review.area}</p>
                <StarRating rating={review.rating} />
                <p className="text-zinc-600 text-sm italic mt-1">"{review.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F5F1E9] px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
            Simple By Design
          </span>
          <h2 className="font-serif text-3xl font-bold mb-12 text-zinc-900">
            How it works
          </h2>

          <div className="grid sm:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#84ab95]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <span className="text-zinc-300 font-serif text-sm mb-2">01</span>
              <h3 className="font-serif font-bold text-lg text-zinc-900 mb-2">Search</h3>
              <p className="text-zinc-600 text-sm max-w-xs">
                Look up the accommodation you're considering by name.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#84ab95]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <span className="text-zinc-300 font-serif text-sm mb-2">02</span>
              <h3 className="font-serif font-bold text-lg text-zinc-900 mb-2">Read honest reviews</h3>
              <p className="text-zinc-600 text-sm max-w-xs">
                See real experiences written by students who've actually lived there. No paid placements, no landlord edits.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#84ab95]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0-8l2-2m7 2v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8" />
                </svg>
              </div>
              <span className="text-zinc-300 font-serif text-sm mb-2">03</span>
              <h3 className="font-serif font-bold text-lg text-zinc-900 mb-2">Share yours</h3>
              <p className="text-zinc-600 text-sm max-w-xs">
                Lived somewhere in Leeds? Add your review to help the next student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Write a review CTA */}
      <section id="write-review" className="bg-black text-white px-8 py-20 text-center">
        <span className="text-[#87ad98] text-xs font-semibold uppercase tracking-wide">
          Help The Next Student
        </span>
        <h2 className="font-serif text-3xl font-bold mt-2">
          Lived somewhere in Leeds?
        </h2>
        <h2 className="font-serif text-3xl italic text-[#87ad98] mb-4">
          Share your experience.
        </h2>
        <p className="text-zinc-200 max-w-md mx-auto mb-8">
          Your honest review helps other students make better decisions. It only takes 3 minutes.
        </p>
        <button className="bg-white text-black rounded-full px-8 py-3 font-medium hover:bg-zinc-200">
          Write a Review
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-300 px-8 py-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#84ab95] rounded-md flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="font-serif text-white font-semibold">Leeds Digs</span>
            </div>
            <p className="text-sm">The honest student accommodation review platform for Leeds.</p>
          </div>
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">Explore</h4>
            <ul className="text-sm flex flex-col gap-1">
              <li>Browse Accommodations</li>
              <li>Top Rated</li>
              <li>Newly Added</li>
              <li>New Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">Areas</h4>
            <ul className="text-sm flex flex-col gap-1">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Leeds Digs. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-zinc-300">Terms of Service</a>
            <a href="/privacy" className="hover:text-zinc-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
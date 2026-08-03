import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import StarRating from "@/components/StarRating";
import LocationPin from "@/components/LocationPin";

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

type CategoryRatings = {
  Location: number;
  Maintanence: number;
  noise: number;
  value: number;
};

type Review = {
  id: number;
  title: string;
  overallRating: number;
  categoryRatings: CategoryRatings;
  roomType: string;
  pros: string;
  cons: string;
  photoCount: number;
  date: string;
};

const listings: Listing[] = [
  { id: 1, name: "The Glassworks", area: "City Centre", accommodationType: "Studio", price: 750, rating: 4.6, reviewCount: 32, tag: "Top pick · Close to city centre" },
  { id: 2, name: "Headingley Studios", area: "Headingley", accommodationType: "Studio", price: 620, rating: 4.3, reviewCount: 18, tag: "Student favourite · Great nightlife" },
  { id: 3, name: "Sherwood House", area: "Hyde Park", accommodationType: "Shared House", price: 480, rating: 3.9, reviewCount: 9, tag: "Budget friendly · Quiet street" },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse", accommodationType: "Ensuite", price: 540, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
  { id: 5, name: "Cardigan Heights", area: "Headingley", accommodationType: "Studio", price: 610, rating: 4.5, reviewCount: 14, tag: "Top pick · Close to campus" },
  { id: 6, name: "Burley Lodge Court", area: "Burley", accommodationType: "Shared House", price: 495, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
];

const reviewsByListing: Record<number, Review[]> = {
  1: [
    {
      id: 1,
      title: "Genuinely can't fault this place",
      overallRating: 5,
      categoryRatings: { Location: 5, Maintanence: 5, noise: 4, value: 4 },
      roomType: "Studio",
      pros: "Location fixed a leak within a day. Location can't be beaten — 5 min walk to campus.",
      cons: "Bins get a bit chaotic on collection day, otherwise no complaints.",
      photoCount: 3,
      date: "June 2026",
    },
    {
      id: 2,
      title: "Solid choice for the price",
      overallRating: 4,
      categoryRatings: { Location: 4, Maintanence: 4, noise: 3, value: 5 },
      roomType: "Studio",
      pros: "Great value for what you get. Kitchen appliances were all new.",
      cons: "A bit noisy on weekends since it's close to the bars.",
      photoCount: 0,
      date: "May 2026",
    },
  ],
  2: [
    {
      id: 1,
      title: "Great nightlife on the doorstep",
      overallRating: 4,
      categoryRatings: { Location: 3, Maintanence: 4, noise: 3, value: 4 },
      roomType: "Studio",
      pros: "Perfect if you want to be in the middle of everything in Headingley.",
      cons: "Walls are a little thin, you'll hear neighbours some nights.",
      photoCount: 1,
      date: "July 2026",
    },
  ],
  3: [
    {
      id: 1,
      title: "Quiet and good value",
      overallRating: 4,
      categoryRatings: { Location: 4, Maintanence: 3, noise: 5, value: 5 },
      roomType: "Shared House",
      pros: "Quiet street, great for studying. Rent is genuinely fair for Hyde Park.",
      cons: "Wouldn't expect luxury — fixtures are a bit dated.",
      photoCount: 2,
      date: "April 2026",
    },
  ],
  5: [
    {
      id: 1,
      title: "Close to campus, Location actually responds",
      overallRating: 5,
      categoryRatings: { Location: 5, Maintanence: 5, noise: 4, value: 4 },
      roomType: "Studio",
      pros: "Location replies to emails within a day, which is rare. Clean building, close to campus.",
      cons: "Parking is limited if you have a car.",
      photoCount: 4,
      date: "June 2026",
    },
  ],
};

function CategoryBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs text-zinc-500 w-28 flex-shrink-0">{label}</span>
      <div className="flex-1 h-1.5 rounded-full bg-zinc-100 overflow-hidden">
        <div
          className="h-full bg-[#84ab95] rounded-full"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-xs text-zinc-500 w-6 text-right">{value}/5</span>
    </div>
  );
}

export default async function AccommodationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = listings.find((l) => l.id === Number(id));

  if (!listing) {
    notFound();
  }

  const reviews = reviewsByListing[listing.id] ?? [];

  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Navbar />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/browse"
            className="text-sm text-[#6B7D6C] hover:underline inline-flex items-center gap-1 mb-6"
          >
            ← Back to Browse
          </Link>

          {/* Photo placeholder */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl bg-gradient-to-br from-[#EEF5F1] via-[#F6F8F5] to-[#F5F1E9] border border-zinc-200 flex flex-col items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#84ab95]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z" />
            </svg>
            <p className="text-sm text-zinc-500">No photos yet — be the first to add one</p>
          </div>

          {/* Title + key info */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900">
                {listing.name}
              </h1>
              <p className="text-zinc-400 font-light text-sm flex items-center gap-1 mt-1">
                <LocationPin className="w-3.5 h-3.5" />
                {listing.area} · {listing.accommodationType}
              </p>
              <p className="text-zinc-500 text-xs mt-1">{listing.tag}</p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-lg font-medium text-zinc-900">
                {listing.price ? `£${listing.price}/mo` : "Price unknown"}
              </p>
              {listing.reviewCount > 0 ? (
                <div className="flex items-center gap-2 mt-1 sm:justify-end">
                  <StarRating rating={Math.round(listing.rating ?? 0)} />
                  <span className="text-sm text-zinc-500">
                    {listing.rating} ({listing.reviewCount} reviews)
                  </span>
                </div>
              ) : (
                <p className="text-sm text-zinc-500 mt-1">No reviews yet</p>
              )}
            </div>
          </div>

          {/* Write a review CTA */}
          <div className="mt-8 bg-white border border-zinc-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-medium text-zinc-900">Lived here?</p>
              <p className="text-sm text-zinc-500">Help other students by sharing your experience.</p>
            </div>
            <Link
              href={`/review?listing=${listing.id}`}
              className="bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full px-6 py-2.5 font-medium whitespace-nowrap"
            >
              Write a Review
            </Link>
          </div>

          {/* Reviews list */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-medium text-zinc-900 mb-4">
              Reviews {reviews.length > 0 ? `(${reviews.length})` : ""}
            </h2>

            {reviews.length > 0 ? (
              <div className="flex flex-col gap-4">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-4"
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif font-medium text-zinc-900">{review.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <StarRating rating={review.overallRating} />
                          <span className="text-xs text-zinc-400">{review.roomType}</span>
                        </div>
                      </div>
                      <span className="text-xs text-zinc-400 whitespace-nowrap">{review.date}</span>
                    </div>

                    {/* Category ratings */}
                    <div className="flex flex-col gap-2 border-t border-zinc-100 pt-3">
                      <CategoryBar label="Location" value={review.categoryRatings.Location} />
                      <CategoryBar label="Maintanence" value={review.categoryRatings.Maintanence} />
                      <CategoryBar label="Noise" value={review.categoryRatings.noise} />
                      <CategoryBar label="Value" value={review.categoryRatings.value} />
                    </div>

                    {/* Pros / Cons */}
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-3">
                      <div>
                        <p className="text-xs font-semibold text-[#5C6E5D] uppercase tracking-wide mb-1">
                          Pros
                        </p>
                        <p className="text-sm text-zinc-600">{review.pros}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-1">
                          Cons
                        </p>
                        <p className="text-sm text-zinc-600">{review.cons}</p>
                      </div>
                    </div>

                    {/* Photos placeholder */}
                    {review.photoCount > 0 && (
                      <div className="flex gap-2 border-t border-zinc-100 pt-3">
                        {Array.from({ length: review.photoCount }).map((_, i) => (
                          <div
                            key={i}
                            className="w-16 h-16 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs text-zinc-400"
                          >
                            Photo
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-zinc-200 rounded-xl p-8 text-center">
                <p className="text-zinc-500 mb-4">No reviews yet for this accommodation.</p>
                <Link
                  href={`/review?listing=${listing.id}`}
                  className="inline-block bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full px-6 py-2.5 font-medium"
                >
                  Be the first to review
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
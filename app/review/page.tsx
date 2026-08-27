"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Listing = {
  id: number;
  name: string;
  area: string;
};

const listings: Listing[] = [
  { id: 1, name: "The Glassworks", area: "City Centre" },
  { id: 2, name: "Headingley Studios", area: "Headingley" },
  { id: 3, name: "Sherwood House", area: "Hyde Park" },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse" },
  { id: 5, name: "Cardigan Heights", area: "Headingley" },
  { id: 6, name: "Burley Lodge Court", area: "Burley" },
];

const roomTypes = ["Studio", "Ensuite", "Shared House", "Standard Room"];

const academicYears = ["2024/25", "2025/26", "2026/27"];

const stayLengths = [
  "Less than 6 months",
  "6–12 months",
  "1 year",
  "More than 1 year",
];

function StarInput({
  value,
  onChange,
  label,
  required = false,
  large = false,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  required?: boolean;
  large?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-zinc-700 ${
          large ? "text-base font-medium text-zinc-900" : "text-sm"
        }`}
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </span>

      <div className={`flex ${large ? "gap-1.5" : "gap-1"}`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`${n} out of 5 stars`}
            onClick={() => onChange(n)}
            className={`leading-none transition-all duration-150 hover:scale-110 ${
              large ? "text-[2rem] sm:text-[2.2rem]" : "text-2xl"
            } ${
              n <= value
                ? "text-[#84ab95]"
                : "text-zinc-200 hover:text-zinc-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

function RecommendationButton({
  value,
  selected,
  onClick,
  icon,
}: {
  value: string;
  selected: boolean;
  onClick: () => void;
  icon: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-2xl border py-4 px-4 text-sm font-medium transition-all duration-200 ${
        selected
          ? "border-[#84ab95] bg-[#EFF3EF] text-[#5f806d] shadow-sm"
          : "border-zinc-200 bg-white text-zinc-600 hover:border-[#b9cabe] hover:bg-[#fafcfb]"
      }`}
    >
      <span
        className={`block text-xl mb-1 transition-transform ${
          selected ? "scale-110" : ""
        }`}
      >
        {icon}
      </span>
      {value}
    </button>
  );
}

function SelectField({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-900 mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full border border-zinc-200 bg-[#fcfcfb] rounded-xl px-4 py-3 pr-10 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#84ab95]/40 focus:border-[#84ab95] transition-all"
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

function SectionHeading({
  number,
  title,
  optional = false,
}: {
  number: string;
  title: string;
  optional?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFF3EF] text-[#6f8f7d] flex items-center justify-center text-xs font-semibold">
        {number}
      </span>

      <div>
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-xl font-serif font-medium text-zinc-900">
            {title}
          </h2>

          {optional && (
            <span className="text-[11px] uppercase tracking-wider text-zinc-400">
              Optional
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function WriteReviewPage() {
  const searchParams = useSearchParams();
  const listingIdParam = searchParams.get("listing");

  const preselectedListing = listings.find(
    (l) => l.id === Number(listingIdParam)
  );

  const [selectedListingId, setSelectedListingId] = useState<number | "">(
    preselectedListing ? preselectedListing.id : ""
  );

  const [overallRating, setOverallRating] = useState(0);
  const [landlord, setLandlord] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [noise, setNoise] = useState(0);
  const [value, setValue] = useState(0);
  const [location, setLocation] = useState(0);

  const [roomType, setRoomType] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [stayLength, setStayLength] = useState("");

  const [recommendation, setRecommendation] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [experience, setExperience] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedListing = listings.find(
    (l) => l.id === selectedListingId
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedListingId) {
      setError("Please select which accommodation you're reviewing.");
      return;
    }

    if (overallRating === 0) {
      setError("Please give an overall rating.");
      return;
    }

    if (!pros.trim()) {
      setError("Please add at least one pro.");
      return;
    }

    if (!cons.trim()) {
      setError("Please add at least one con.");
      return;
    }

    setError("");

    const reviewData = {
      listingId: selectedListingId,
      overallRating,
      categoryRatings: {
        landlord,
        cleanliness,
        noise,
        value,
        location,
      },
      roomType,
      academicYear,
      stayLength,
      recommendation,
      pros,
      cons,
      experience,
      anonymous: true,
      date: new Date().toISOString(),
    };

    console.log("Review submitted (not yet saved anywhere):", reviewData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F5F1E9]">
        <Navbar />

        <main className="pt-24 sm:pt-28 px-4 sm:px-6 pb-16">
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative overflow-hidden bg-white border border-zinc-200 rounded-[28px] shadow-lg p-8 sm:p-12 text-center">
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#BFD4C6]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-[#84ab95]/15 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-[#EFF3EF] flex items-center justify-center mx-auto mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#84ab95]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <p className="uppercase tracking-[0.2em] text-xs font-semibold text-[#84ab95] mb-3">
                  Review submitted
                </p>

                <h1 className="text-3xl sm:text-4xl font-serif font-medium text-zinc-900 mb-3">
                  Thanks for sharing!
                </h1>

                <p className="text-zinc-500 leading-7 max-w-md mx-auto mb-7">
                  Your anonymous review of{" "}
                  <span className="text-zinc-700 font-medium">
                    {selectedListing?.name}
                  </span>{" "}
                  will help future students make a more informed decision.
                </p>

                {selectedListing && (
                  <Link
                    href={`/accommodation/${selectedListing.id}`}
                    className="inline-block bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full px-7 py-3 font-medium transition-colors"
                  >
                    Back to {selectedListing.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Navbar />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#EEF5F1] via-[#F6F8F5] to-[#F5F1E9] border border-zinc-200 shadow-sm mb-8 sm:mb-10">
            <div className="absolute -top-28 -left-20 w-80 h-80 bg-[#84ab95]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-[#BFD4C6]/30 rounded-full blur-3xl" />

            <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/75 border border-white px-4 py-2 shadow-sm mb-5">
                <span className="w-2 h-2 rounded-full bg-[#84ab95]" />
                <span className="uppercase tracking-[0.18em] text-[10px] sm:text-xs font-semibold text-[#6f8f7d]">
                  Anonymous reviews
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-zinc-900 tracking-tight">
                Share your stay
              </h1>

              <p className="mt-4 text-base sm:text-lg text-zinc-500 font-light">
                Tell future students about your experience.
              </p>
            </div>
          </section>

          {/* REVIEW CARD */}
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-200 rounded-[28px] shadow-lg overflow-hidden"
          >
            {/* FORM INTRO */}
            <div className="px-6 sm:px-10 lg:px-12 py-7 sm:py-8 border-b border-zinc-100 bg-[#fcfcfb]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="uppercase tracking-[0.16em] text-[10px] font-semibold text-[#84ab95] mb-1">
                    Your experience
                  </p>

                  <h2 className="text-2xl sm:text-2xl font-serif font-medium text-zinc-900">
                    Tell us about your home away from home
                  </h2>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11a4 4 0 100-8 4 4 0 000 8zm6 9a6 6 0 00-12 0"
                    />
                  </svg>
                  Completely anonymous
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 lg:p-12">

              {/* ACCOMMODATION */}
              <section>
                <SectionHeading number="01" title="Accommodation" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-zinc-900 mb-2">
                      Where did you live?{" "}
                      <span className="text-red-400">*</span>
                    </label>

                    <div className="relative">
                      <select
                        value={selectedListingId}
                        onChange={(e) =>
                          setSelectedListingId(
                            e.target.value ? Number(e.target.value) : ""
                          )
                        }
                        className="appearance-none w-full border border-zinc-200 bg-[#fcfcfb] rounded-xl px-4 py-3 pr-10 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-[#84ab95]/40 focus:border-[#84ab95] transition-all"
                      >
                        <option value="">
                          Select accommodation...
                        </option>

                        {listings.map((listing) => (
                          <option key={listing.id} value={listing.id}>
                            {listing.name} — {listing.area}
                          </option>
                        ))}
                      </select>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  <SelectField
                    label="Room type"
                    value={roomType}
                    onChange={setRoomType}
                    placeholder="Select room type..."
                    options={roomTypes}
                  />

                  <SelectField
                    label="Academic year"
                    value={academicYear}
                    onChange={setAcademicYear}
                    placeholder="Select academic year..."
                    options={academicYears}
                  />

                  <SelectField
                    label="Length of stay"
                    value={stayLength}
                    onChange={setStayLength}
                    placeholder="Select length of stay..."
                    options={stayLengths}
                  />
                </div>
              </section>

              {/* RATINGS */}
              <section className="mt-10 pt-10 border-t border-zinc-100">
                <SectionHeading number="02" title="Your ratings" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                  {/* OVERALL */}
                  <div className="lg:row-span-3 rounded-2xl bg-gradient-to-br from-[#F4F8F5] to-[#EFF3EF] border border-[#e1ebe4] p-6 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-[0.16em] font-semibold text-[#6f8f7d] mb-3">
                      Overall
                    </p>

                    <p className="font-serif text-2xl text-zinc-900 mb-1">
                      How was your stay?
                    </p>

                    <p className="text-sm text-zinc-500 mb-5">
                      Give this accommodation an overall rating.
                    </p>

                    <StarInput
                      label="Overall rating"
                      value={overallRating}
                      onChange={setOverallRating}
                      required
                      large
                    />

                    <p className="text-[11px] text-zinc-400 mt-4">
                      * Required
                    </p>
                  </div>

                  {/* CATEGORY RATINGS */}
                  <div className="rounded-2xl border border-zinc-100 bg-[#fcfcfb] p-5">
                    <div className="flex flex-col gap-4">
                      <StarInput
                        label="Landlord"
                        value={landlord}
                        onChange={setLandlord}
                      />

                      <StarInput
                        label="Cleanliness"
                        value={cleanliness}
                        onChange={setCleanliness}
                      />

                      <StarInput
                        label="Noise"
                        value={noise}
                        onChange={setNoise}
                      />

                      <StarInput
                        label="Value for money"
                        value={value}
                        onChange={setValue}
                      />

                      <StarInput
                        label="Location"
                        value={location}
                        onChange={setLocation}
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* RECOMMENDATION */}
              <section className="mt-10 pt-10 border-t border-zinc-100">
                <SectionHeading
                  number="03"
                  title="Would you recommend it to a friend?"
                  optional
                />

                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <RecommendationButton
                    value="Yes"
                    icon="♥"
                    selected={recommendation === "Yes"}
                    onClick={() => setRecommendation("Yes")}
                  />

                  <RecommendationButton
                    value="Maybe"
                    icon="~"
                    selected={recommendation === "Maybe"}
                    onClick={() => setRecommendation("Maybe")}
                  />

                  <RecommendationButton
                    value="No"
                    icon="×"
                    selected={recommendation === "No"}
                    onClick={() => setRecommendation("No")}
                  />
                </div>
              </section>

              {/* PROS & CONS */}
              <section className="mt-10 pt-10 border-t border-zinc-100">
                <SectionHeading number="04" title="Pros & Cons" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-900 mb-2">
                      Pros <span className="text-red-400">*</span>
                    </label>

                    <textarea
                      value={pros}
                      onChange={(e) => setPros(e.target.value)}
                      rows={5}
                      placeholder="What did you love about living here?"
                      className="w-full border border-zinc-200 bg-[#fcfcfb] rounded-xl px-4 py-3 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#84ab95]/40 focus:border-[#84ab95] resize-none transition-all"
                    />

                    <p className="text-[11px] text-zinc-400 mt-2">
                      What would you tell a friend to look forward to?
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-900 mb-2">
                      Cons <span className="text-red-400">*</span>
                    </label>

                    <textarea
                      value={cons}
                      onChange={(e) => setCons(e.target.value)}
                      rows={5}
                      placeholder="What could have been better?"
                      className="w-full border border-zinc-200 bg-[#fcfcfb] rounded-xl px-4 py-3 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#84ab95]/40 focus:border-[#84ab95] resize-none transition-all"
                    />

                    <p className="text-[11px] text-zinc-400 mt-2">
                      What should future students be aware of?
                    </p>
                  </div>
                </div>
              </section>

              {/* EXPERIENCE */}
              <section className="mt-10 pt-10 border-t border-zinc-100">
                <SectionHeading
                  number="05"
                  title="Your experience"
                  optional
                />

                <textarea
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  rows={6}
                  placeholder="What was it actually like living here?"
                  className="w-full border border-zinc-200 bg-[#fcfcfb] rounded-xl px-4 py-3 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#84ab95]/40 focus:border-[#84ab95] resize-none transition-all"
                />
              </section>

              {/* PHOTOS */}
              <section className="mt-10 pt-10 border-t border-zinc-100">
                <SectionHeading number="06" title="Photos" optional />

                <div className="group border-2 border-dashed border-zinc-200 hover:border-[#b7cbbd] rounded-2xl p-8 sm:p-10 text-center bg-[#fcfcfb] hover:bg-[#fafcfb] transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#EFF3EF] flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#84ab95]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.7}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16l5-5a2 2 0 012.8 0L14 14l2-2a2 2 0 012.8 0L21 14M7 7h.01"
                      />
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-zinc-700">
                    Add photos of your accommodation
                  </p>

                  <p className="text-xs text-zinc-400 mt-1">
                    Photo upload coming soon
                  </p>
                </div>
              </section>

              {/* ERROR */}
              {error && (
                <div className="mt-8 text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <div className="mt-10 pt-8 border-t border-zinc-100">
                <button
                  type="submit"
                  className="w-full bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full py-4 font-medium text-base shadow-sm hover:shadow-md transition-all duration-200"
                >
                  Submit review
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-zinc-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11a4 4 0 100-8 4 4 0 000 8zm6 9a6 6 0 00-12 0"
                    />
                  </svg>
                  Your review is posted anonymously.
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
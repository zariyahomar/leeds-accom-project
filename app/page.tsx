"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";
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
  { id: 1, name: "The Glassworks", area: "City Centre", price: 750, rating: 4.6, reviewCount: 32, tag: "Top pick · Close to city centre" },
  { id: 2, name: "Headingley Studios", area: "Headingley", price: 620, rating: 4.3, reviewCount: 18, tag: "Student favourite · Great nightlife" },
  { id: 3, name: "Sherwood House", area: "Hyde Park", price: 480, rating: 3.9, reviewCount: 9, tag: "Budget friendly · Quiet street" },
  { id: 4, name: "Woodsley Road Flats", area: "Woodhouse", price: 540, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
  { id: 5, name: "Cardigan Heights", area: "Headingley", price: 610, rating: 4.5, reviewCount: 14, tag: "Top pick · Close to campus" },
  { id: 6, name: "Burley Lodge Court", area: "Burley", price: 495, rating: null, reviewCount: 0, tag: "New listing · Be the first to review" },
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

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1E9] font-sans">
      {/* Header */}
    
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 transition-colors duration-300 ${
          scrolled ? "bg-[#F5F1E9] text-zinc-900 shadow-sm" : "bg-transparent text-white"
        }`}
      
        <Navbar scrolled={scrolled} />
      

      {/* Hero */}
      <section
        className="relative text-white px-8 py-32 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/leeds-hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight mb-2">
            Find accommodation
          </h1>
          <h1 className="font-serif text-4xl sm:text-5xl italic font-normal text-[#87ad98] mb-6">
            you can trust.
          </h1>
          <p className="max-w-md text-zinc-200 mb-10 font-light">
            Honest reviews from Leeds students, for Leeds students. No spin, no landlord edits.
          </p>

          <form className="w-full max-w-4xl bg-[#F5F1E9] rounded-full shadow-xl p-3 flex items-center mt-8">
            <Search
              className="ml-4 text-[#84ab95]" size ={24}
            />

            <input
              type="text"
              placeholder="Search accommodation name..."
              className="flex-grow bg-transparent text-zinc-900 placeholder-zinc-400 px-4 py-2 rounded-full focus:outline-none"
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

      {/* Featured in Leeds */}
      <section id="browse" className="px-8 py-16 max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
              Top Picks
            </span>
            <h2 className="font-serif text-3xl font-medium text-zinc-900">
              Featured in Leeds
            </h2>
          </div>
         <Link
            href="/browse"
            className="text-[#6F8E7B] hover:text-[#84ab95] transition"
          >
           View all listings →
        </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col gap-2"
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
              <h2 className="font-serif text-3xl font-medium text-zinc-900">
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
                <h3 className="font-serif font-medium text-lg text-zinc-900">
                  {review.listingName}
                </h3>
                <p className="text-zinc-400 font-light text-sm flex items-center gap-1">
                  <LocationPin className="w-3.5 h-3.5" />
                  {review.area}
                </p>
                <StarRating rating={review.rating} />
                <p className="text-zinc-600 text-sm italic mt-1">"{review.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#F5F1E9] px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
            Simple By Design
          </span>
          <h2 className="font-serif text-3xl font-medium mb-12 text-zinc-900">
            How it works
          </h2>

          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#84ab95]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <span className="text-zinc-300 font-serif text-sm mb-2">01</span>
              <h3 className="font-serif font-medium text-lg text-zinc-900 mb-2">Search</h3>
              <p className="text-zinc-600 text-sm max-w-xs font-light">
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
              <h3 className="font-serif font-medium text-lg text-zinc-900 mb-2">Read honest reviews</h3>
              <p className="text-zinc-600 text-sm max-w-xs font-light">
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
              <h3 className="font-serif font-medium text-lg text-zinc-900 mb-2">Share yours</h3>
              <p className="text-zinc-600 text-sm max-w-xs font-light">
                Lived somewhere in Leeds? Add your review to help the next student.
              </p>
            </div>
          </div>

            <a
            href="#browse"
            className="inline-block bg-[#84ab95] hover:bg-[#76886F] text-white rounded-full px-8 py-3 font-medium"
          >
            Browse all accommodations
          </a>
        </div>
      </section>

      {/* Write a review CTA */}
      <section id="write-review" className="bg-black text-white px-8 py-20 text-center">
        <span className="text-[#87ad98] text-xs font-semibold uppercase tracking-wide">
          Help The Next Student
        </span>
        <h2 className="font-serif text-3xl font-medium mt-2">
          Lived somewhere in Leeds?
        </h2>
        <h2 className="font-serif text-3xl italic font-normal text-[#87ad98] mb-4">
          Share your experience.
        </h2>
        <p className="text-zinc-200 max-w-md mx-auto mb-8 font-light">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#84ab95]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
              >
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6z" />
              </svg>
              <span className="font-serif text-white font-medium">Uni Stays</span>
            </div>
            <p className="text-sm font-light">The honest student accommodation review platform for Leeds.</p>
          </div>
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">Explore</h4>
            <ul className="text-sm flex flex-col gap-1 font-light">
              <li>Browse Accommodations</li>
              <li>Top Rated</li>
              <li>Newly Added</li>
              <li>New Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">About</h4>
            <ul className="text-sm flex flex-col gap-1 font-light">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#write-review" className="hover:text-white">Write a Review</a></li>
              <li><a href="mailto:hello@unistays.co.uk" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Uni Stays. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-zinc-300">Terms of Service</a>
            <a href="/privacy" className="hover:text-zinc-300">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
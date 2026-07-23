"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type NavbarProps = {
  scrolled?: boolean;
};

export default function Navbar({ scrolled = true }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]); 

  return (
    <><header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-[#F5F1E9] text-zinc-900 shadow-sm"
          : "bg-transparent text-white"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#84ab95] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6z" />
          </svg>
        </div>

        <span className="font-serif text-xl font-medium tracking-tight">
          Uni Stays
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-5 text-[15px] font-medium">
  <Link
    href="/browse"
    className="hover:text-[#84ab95] transition-colors duration-200"
  >
    Browse
  </Link>

  <Link
    href="/review"
    className="hover:text-[#84ab95] transition-colors duration-200"
  >
    Write a Review
  </Link>

  <Link
    href="/about"
    className="hover:text-[#84ab95] transition-colors duration-200"
  >
    About
  </Link>
</nav>
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden relative w-8 h-8 flex items-center justify-center text-current"
  aria-label="Toggle menu"
>
  <span
    className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
      menuOpen ? "rotate-45" : "-translate-y-2"
    }`}
  />

  <span
    className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
      menuOpen ? "opacity-0" : ""
    }`}
  />

  <span
    className={`absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
      menuOpen ? "-rotate-45" : "translate-y-2"
    }`}
  />
</button>
    </header>

    <div
        className={`fixed top-20 left-4 right-4 z-40 md:hidden overflow-hidden rounded-3xl border border-zinc-200 bg-[#F5F1E9] text-zinc-900 shadow-xl transition-all duration-300 ${
        menuOpen
          ? "max-h-64 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <nav className="flex flex-col divide-y divide-zinc-200">
        <Link href="/browse" onClick={() => setMenuOpen(false)}
        className="px-5 py-4 hover:bg-[#84ab95] hover:text-white transition-colors duration-200"
        >
          Browse
        </Link>

        <Link href="/review" onClick={() => setMenuOpen(false)}
        className="px-5 py-4 hover:bg-[#84ab95] hover:text-white transition-colors duration-200"
        >
          Write a Review
        </Link>

        <Link href="/about" onClick={() => setMenuOpen(false)}
        className="px-5 py-4 hover:bg-[#84ab95] hover:text-white transition-colors duration-200"
        >
          About
        </Link>
      </nav>
    </div>
    </>
  );
}
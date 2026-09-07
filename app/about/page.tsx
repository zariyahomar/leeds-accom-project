import Navbar from "@/components/Navbar";
import Link from "next/link";

const values = [
  {
    title: "Honest by default",
    description:
      "Reviews are written by students who've actually lived somewhere — no landlord edits, no paid placements, and no hiding the bad stuff.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    ),
  },
  {
    title: "Anonymous, always",
    description:
      "Reviewers don't need to attach their name to be honest. Every review is posted anonymously so students can speak freely.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11a4 4 0 100-8 4 4 0 000 8zm6 9a6 6 0 00-12 0"
      />
    ),
  },
  {
    title: "Built for Leeds",
    description:
      "Not a generic national directory — every listing is somewhere real students in Leeds have actually lived.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F1E9]">
      <Navbar />

      <main className="pt-24 sm:pt-28 px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-[#EEF5F1] via-[#F6F8F5] to-[#F5F1E9] border border-zinc-200 shadow-sm mb-10">
            
            <div className="absolute -top-28 -left-20 w-80 h-80 bg-[#84ab95]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-[#BFD4C6]/30 rounded-full blur-3xl" />

            <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 text-center">
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-[#84ab95]">
                About Us
              </span>

              <h1 className="mt-4 text-4xl sm:text-5xl font-serif font-medium text-zinc-900 tracking-tight">
                Why Uni Stays exists
              </h1>

              <p className="mt-4 text-base sm:text-lg text-zinc-500 font-light max-w-xl mx-auto leading-relaxed">
                Honest accommodation reviews, written by Leeds students, for
                Leeds students.
              </p>
            </div>
          </section>

          {/* STORY */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 mb-8">
            <h2 className="font-serif text-2xl font-medium text-zinc-900 mb-5">
              The problem we kept running into
            </h2>

            <div className="flex flex-col gap-4 text-zinc-600 leading-7">
              <p>
                Every year, students in Leeds sign a tenancy agreement for
                somewhere they've never actually lived in — often relying on
                polished listing photos and carefully selected reviews to make
                their decision.
              </p>

              <p>
                Uni Stays was created to give students something those listings
                can't: honest, first-hand experiences from people who've
                actually lived there. Reviews are anonymous, independent, and
                designed to help you know what you're getting into before you
                sign.
              </p>
            </div>
          </section>

          {/* VALUES */}
          <section className="mb-8">
            <div className="text-center mb-6">
              <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-[0.18em]">
                Our Principles
              </span>

              <h2 className="font-serif text-2xl font-medium text-zinc-900 mt-2">
                What we stand for
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white border border-zinc-200 rounded-2xl p-5 flex flex-col gap-3"
                >
                  <div className="w-11 h-11 rounded-full bg-[#EFF3EF] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#84ab95]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      {value.icon}
                    </svg>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-zinc-900">
                    {value.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-6">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* INDEPENDENT BY DESIGN */}
          <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-10 mb-8">
            <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-[0.18em]">
              No Hidden Agenda
            </span>

            <h2 className="font-serif text-2xl font-medium text-zinc-900 mt-2 mb-5">
              Independent by design
            </h2>

            <div className="flex flex-col gap-4 text-zinc-600 leading-7">
              <p>
                Uni Stays isn't a booking platform, and it doesn't take
                commission from landlords or agencies. Nobody can pay to have
                their accommodation featured or have negative reviews removed.
              </p>

              <p>
                The only way a listing looks good on this site is if the
                students who lived there say it was good.
              </p>

              <p>
                Uni Stays also isn't trying to replace official university
                housing advice. It's a complement to it — built around the one
                thing official channels rarely provide: unfiltered,
                first-hand accounts from other students.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#6B7D6C] text-white rounded-2xl px-6 py-10 sm:py-12 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium mb-3">
              Lived somewhere in Leeds?
            </h2>

            <p className="text-white/80 mb-7 font-light max-w-md mx-auto leading-relaxed">
              Share your experience and help the next student make a more
              informed choice.
            </p>

            <Link
              href="/review"
              className="inline-flex items-center gap-2 bg-white text-[#6B7D6C] hover:bg-[#F5F1E9] rounded-full px-7 py-3 font-medium transition-colors"
            >
              Write a Review
              <span>→</span>
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}
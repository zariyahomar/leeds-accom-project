"use client";

import Navbar from "@/components/Navbar";

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1E9] font-sans">
      {/* Header */}
      <Navbar scrolled={false} />

      {/* Terms of Use */}
      <main className="flex-1 px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="mb-12">
            <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
              Using Uni Stays
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-zinc-900 mt-2 mb-4">
              Terms of Use
            </h1>

            <p className="text-zinc-500 text-sm font-light">
              Last updated: September 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-4 mb-10">
            <p className="text-zinc-700 leading-7 font-light">
              Welcome to Uni Stays. These Terms of Use explain the rules for
              using the Uni Stays website and services. By accessing or using
              Uni Stays, you agree to follow these terms.
            </p>
          </section>

          {/* 1. About Uni Stays */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              1. About Uni Stays
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays is a student accommodation review platform designed
              to help students research and compare accommodation through
              reviews and experiences shared by other students.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Uni Stays provides information to help students make their own
              decisions about accommodation. We do not act as a landlord,
              letting agent, accommodation provider, or representative of any
              accommodation listed on the platform.
            </p>
          </section>

          {/* 2. Using Uni Stays */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              2. Using Uni Stays
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              You agree to use Uni Stays only for lawful purposes and in a way
              that does not interfere with the operation of the website or
              negatively affect other users.
            </p>

            <p className="text-zinc-700 leading-7 font-light mb-3">
              You must not:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-zinc-700 font-light leading-7">
              <li>
                Use Uni Stays for fraudulent, misleading, or unlawful purposes
              </li>
              <li>
                Attempt to gain unauthorised access to the website or its
                systems
              </li>
              <li>
                Interfere with or disrupt the website
              </li>
              <li>
                Scrape, copy, or reproduce substantial amounts of content
                without permission
              </li>
              <li>
                Impersonate another person or organisation
              </li>
              <li>
                Submit information that you know to be false or misleading
              </li>
              <li>
                Use Uni Stays to harass, threaten, or target another person
              </li>
            </ul>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We reserve the right to restrict or remove access where we
              reasonably believe these rules have been violated.
            </p>
          </section>

          {/* 3. Reviews */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              3. Reviews
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              Reviews are intended to reflect genuine experiences of students
              who have lived in or otherwise experienced an accommodation.
            </p>

            <p className="text-zinc-700 leading-7 font-light mb-3">
              When submitting a review, you agree that:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-zinc-700 font-light leading-7">
              <li>
                Your review is based on your genuine experience
              </li>
              <li>
                The information you provide is accurate to the best of your
                knowledge
              </li>
              <li>
                You will not deliberately misrepresent an accommodation or
                individual
              </li>
              <li>
                Your review will not contain unlawful, threatening, abusive,
                or discriminatory material
              </li>
              <li>
                You will not use reviews to promote a business, product, or
                competing service
              </li>
              <li>
                You will not submit multiple reviews designed to manipulate an
                accommodation's rating
              </li>
            </ul>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Reviews should focus on the accommodation and your experience
              rather than making personal attacks against individual people.
            </p>
          </section>

          {/* 4. Review Moderation */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              4. Review moderation
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays may review, edit, restrict, or remove content that
              violates these Terms of Use or that we reasonably believe is
              inappropriate, misleading, fraudulent, or harmful to the
              platform or its users.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We may also remove content where necessary to comply with
              applicable law.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We do not guarantee that every review submitted will be
              published.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Uni Stays does not guarantee that reviews are completely
              accurate, and the publication of a review does not mean that
              Uni Stays agrees with or endorses the opinions expressed in it.
            </p>
          </section>

          {/* 5. Your Content */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              5. Your content
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              When you submit a review or other content to Uni Stays, you
              retain ownership of the content you create.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              However, you give Uni Stays permission to use, display,
              reproduce, and distribute that content as part of operating and
              promoting the platform.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              This permission allows Uni Stays to display reviews on
              accommodation pages and other parts of the website.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              You are responsible for the content you submit and should not
              include private or sensitive information about yourself or
              another person unless it is genuinely necessary.
            </p>
          </section>

          {/* 6. Accommodation Information */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              6. Accommodation information
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Accommodation information displayed on Uni Stays may include
              information such as location, pricing, facilities, ratings, and
              other details.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We aim to provide useful and accurate information, but
              accommodation details can change over time.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Prices, availability, facilities, policies, and other
              information should be independently confirmed with the relevant
              accommodation provider before making a booking or financial
              commitment.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Uni Stays does not guarantee that accommodation information will
              always be complete, current, or error-free.
            </p>
          </section>

          {/* 7. No Accommodation Guarantee */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              7. No accommodation guarantee
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays is an information and review platform.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We do not guarantee that an accommodation will meet your
              expectations or that information contained in a review will
              accurately predict your own experience.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Any decision to rent, book, or otherwise enter into an agreement
              with an accommodation provider is made by you and the relevant
              provider.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Uni Stays is not a party to any tenancy, booking, payment, or
              other agreement between a student and an accommodation provider.
            </p>
          </section>

          {/* 8. Third Party */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              8. Third-party websites and services
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays may contain links to websites or services operated by
              third parties.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              These links may be provided for convenience, including where
              users want to find additional information about an accommodation.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Uni Stays does not control third-party websites and is not
              responsible for their content, availability, policies, or
              services.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Your use of a third-party website is subject to that website's
              own terms and policies.
            </p>
          </section>

          {/* 9. Intellectual Property */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              9. Intellectual property
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              The Uni Stays website, including its design, branding, layout,
              original text, graphics, logos, and other original materials,
              belongs to Uni Stays or its respective licensors unless
              otherwise stated.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              You may use the website for personal, non-commercial purposes.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              You must not reproduce, modify, distribute, sell, or commercially
              exploit Uni Stays content without permission.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              User-submitted reviews remain the property of their respective
              authors, subject to the licence described in these Terms.
            </p>
          </section>

          {/* 10. Availability */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              10. Availability of the website
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We aim to keep Uni Stays available and functioning properly, but
              we do not guarantee that the website will always be available,
              uninterrupted, or free from errors.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We may temporarily suspend, modify, or discontinue parts of the
              website where necessary for maintenance, development, security,
              or other operational reasons.
            </p>
          </section>

          {/* 11. Limitation of Responsibility */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              11. Limitation of responsibility
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays provides the platform and its content for general
              informational purposes.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              To the extent permitted by applicable law, Uni Stays is not
              responsible for losses arising from decisions made solely on the
              basis of information found on the platform.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              This includes decisions relating to accommodation, landlords,
              letting agents, pricing, contracts, bookings, or tenancy
              arrangements.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Nothing in these Terms excludes or limits liability where doing
              so would be unlawful.
            </p>
          </section>

          {/* 12. Changes */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              12. Changes to Uni Stays
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We may update, change, or remove features of Uni Stays at any
              time.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We may also update these Terms of Use from time to time. When we
              make significant changes, we will update the date shown at the
              top of this page.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Your continued use of Uni Stays after changes are made means that
              you accept the updated Terms.
            </p>
          </section>

          {/* 13. Termination */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              13. Termination and restriction
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We may suspend or restrict access to Uni Stays where we
              reasonably believe that a user has violated these Terms, misused
              the platform, or created a risk to other users or the service.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Where appropriate, we may also remove content associated with a
              violation.
            </p>
          </section>

          {/* 14. Governing Law */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              14. Governing law
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              These Terms of Use are governed by the laws of England and
              Wales.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Any disputes relating to these Terms or your use of Uni Stays
              will be subject to the applicable courts of England and Wales.
            </p>
          </section>

          {/* 15. Contact */}
          <section className="mb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              15. Contact us
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              If you have questions about these Terms of Use, you can contact
              us at{" "}
              <a
                href="mailto:hello@unistays.co.uk"
                className="text-[#6B7D6C] hover:underline"
              >
                hello@unistays.co.uk
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-300 px-8 py-12">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">

          {/* Brand */}
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
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3 3.9-6.3-3.9 1.7-7-5.4-4.7 7.1-.6z" />
              </svg>

              <span className="font-serif text-white font-medium">
                Uni Stays
              </span>
            </div>

            <p className="text-sm font-light">
              The honest student accommodation review platform for Leeds.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">
              Explore
            </h4>

            <ul className="text-sm flex flex-col gap-1 font-light">
              <li>Browse Accommodations</li>
              <li>Top Rated</li>
              <li>Newly Added</li>
              <li>New Reviews</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">
              About
            </h4>

            <ul className="text-sm flex flex-col gap-1 font-light">
              <li>
                <a
                  href="/about"
                  className="hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/#how-it-works"
                  className="hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="/#write-review"
                  className="hover:text-white"
                >
                  Write a Review
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@unistays.co.uk"
                  className="hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-5xl mx-auto border-t border-zinc-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} Uni Stays. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a
              href="/terms"
              className="hover:text-zinc-300"
            >
              Terms of Service
            </a>

            <a
              href="/privacy"
              className="hover:text-zinc-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
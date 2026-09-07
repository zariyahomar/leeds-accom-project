"use client";

import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F1E9] font-sans">
      {/* Header */}
      <Navbar scrolled={false} />

      {/* Privacy Policy */}
      <main className="flex-1 px-6 sm:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="mb-12">
            <span className="text-[#6B7D6C] text-xs font-semibold uppercase tracking-wide">
              Your Privacy
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-medium text-zinc-900 mt-2 mb-4">
              Privacy Policy
            </h1>

            <p className="text-zinc-500 text-sm font-light">
              Last updated: September 2026
            </p>
          </div>

          {/* Introduction */}
          <section className="space-y-4 mb-10">
            <p className="text-zinc-700 leading-7 font-light">
              At Uni Stays, we believe that finding student accommodation
              should be transparent, useful, and trustworthy. We also believe
              that your personal information should be handled with the same
              level of care.
            </p>

            <p className="text-zinc-700 leading-7 font-light">
              This Privacy Policy explains what information Uni Stays collects,
              how we use it, and the choices you have when using our website
              and services.
            </p>
          </section>

          {/* 1 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              1. Information we collect
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              We only collect information that is reasonably necessary to
              operate and improve Uni Stays.
            </p>

            <h3 className="font-serif text-lg font-medium text-zinc-900 mb-2">
              Information you provide
            </h3>

            <p className="text-zinc-700 leading-7 font-light mb-3">
              When you use certain features of the website, you may provide
              information such as:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-zinc-700 font-light leading-7">
              <li>Your name or display name</li>
              <li>Your university</li>
              <li>Your accommodation reviews and ratings</li>
              <li>Information about your accommodation experience</li>
              <li>Information you provide when contacting us</li>
            </ul>

            <h3 className="font-serif text-lg font-medium text-zinc-900 mt-6 mb-2">
              Information collected automatically
            </h3>

            <p className="text-zinc-700 leading-7 font-light">
              When you use Uni Stays, certain technical information may be
              collected automatically, such as your IP address, browser type,
              device information, pages visited, and general usage information.
              This information helps us maintain the security and functionality
              of the website and understand how the platform is being used.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              2. How we use your information
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              We may use information we collect to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-zinc-700 font-light leading-7">
              <li>Provide and operate Uni Stays</li>
              <li>Publish and manage accommodation reviews</li>
              <li>Improve the website and user experience</li>
              <li>Respond to questions, feedback, or support requests</li>
              <li>Detect and prevent misuse, fraud, or harmful activity</li>
              <li>Maintain the security and reliability of the platform</li>
              <li>Understand general trends in how the platform is used</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              3. Reviews and public information
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              Uni Stays is designed around honest student reviews. Information
              that you choose to submit as part of a review may therefore be
              displayed publicly on the platform.
            </p>

            <p className="text-zinc-700 leading-7 font-light">
              Reviews may include your rating, written experience, university,
              and other information that you choose to provide. We encourage
              you not to include personal information about yourself or anyone
              else that is not necessary for your review.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              4. Anonymous reviews
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Where Uni Stays offers anonymous or pseudonymous reviewing, your
              public review will not necessarily display your full identity.
              However, information submitted to Uni Stays may still be
              processed internally where necessary to operate the platform,
              moderate content, investigate abuse, or maintain security.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              5. Cookies and similar technologies
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays may use cookies and similar technologies to keep the
              website functioning, remember preferences, understand how users
              interact with the platform, and improve our services.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              You can control or disable cookies through your browser settings.
              Some parts of the website may not function correctly if certain
              cookies are disabled.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              6. Sharing your information
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              We do not sell your personal information.
            </p>

            <p className="text-zinc-700 leading-7 font-light">
              We may share information with service providers that help us
              operate Uni Stays, such as hosting, analytics, database, or
              security providers. These providers should only receive the
              information necessary to provide their services.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              We may also disclose information where required by law, to
              protect the rights or safety of Uni Stays or its users, or where
              necessary to investigate fraud, abuse, or security issues.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              7. Data security
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We take reasonable technical and organisational measures to
              protect information held by Uni Stays from unauthorised access,
              loss, misuse, alteration, or disclosure.
            </p>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              However, no online service can guarantee that information will
              always be completely secure.
            </p>
          </section>

          {/* 8 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              8. Data retention
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We retain personal information only for as long as reasonably
              necessary for the purposes described in this policy, including
              operating the platform, maintaining records, resolving
              disputes, preventing abuse, and meeting legal or regulatory
              requirements.
            </p>
          </section>

          {/* 9 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              9. Your rights
            </h2>

            <p className="text-zinc-700 leading-7 font-light mb-4">
              Depending on your circumstances and applicable data protection
              law, you may have rights relating to your personal information,
              including the right to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-zinc-700 font-light leading-7">
              <li>Request access to personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of certain information</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request a copy of certain information in a portable format</li>
            </ul>

            <p className="text-zinc-700 leading-7 font-light mt-4">
              Some of these rights may be subject to legal limitations or
              exceptions.
            </p>
          </section>

          {/* 10 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              10. Third-party links
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays may contain links to third-party websites or services.
              We are not responsible for the privacy practices, security, or
              content of those third parties. We recommend reviewing their
              privacy policies before providing them with personal information.
            </p>
          </section>

          {/* 11 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              11. Children's privacy
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              Uni Stays is intended for university students and prospective
              students. We do not knowingly collect personal information from
              children where doing so would be prohibited by applicable law.
            </p>
          </section>

          {/* 12 */}
          <section className="mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              12. Changes to this policy
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              We may update this Privacy Policy from time to time to reflect
              changes to Uni Stays, our practices, or applicable legal
              requirements. When we make changes, we will update the date at
              the top of this page.
            </p>
          </section>

          {/* 13 */}
          <section className="mb-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mb-4">
              13. Contact us
            </h2>

            <p className="text-zinc-700 leading-7 font-light">
              If you have a question about this Privacy Policy or how your
              information is handled, you can contact us at{" "}
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

              <span className="font-serif text-white font-medium">
                Uni Stays
              </span>
            </div>

            <p className="text-sm font-light">
              The honest student accommodation review platform for Leeds.
            </p>
          </div>

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

          <div>
            <h4 className="text-zinc-100 text-xs uppercase font-semibold mb-2">
              About
            </h4>

            <ul className="text-sm flex flex-col gap-1 font-light">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="/#how-it-works" className="hover:text-white">
                  How It Works
                </a>
              </li>

              <li>
                <a href="/#write-review" className="hover:text-white">
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
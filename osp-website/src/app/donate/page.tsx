import React from "react";
import {
  CreditCardIcon,
  BanknotesIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const DonatePage = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fadeInUp">
            Support Our Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fadeInUp animation-delay-200">
            Your generous contribution can make a significant difference in the
            lives of orphans and those in need. Choose a way to donate that
            suits you best.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {/* Donation Option 1: One-time Donation */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 animate-slideInLeft">
            <CreditCardIcon
              className="h-10 w-10 text-green-600"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900">
              One-Time Donation
            </h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
              Make a single, impactful contribution to support our ongoing
              projects and emergency relief efforts.
            </p>
            <button
              type="button"
              className="mt-8 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Donate Now
            </button>
          </div>

          {/* Donation Option 2: Monthly Sponsorship */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 animate-fadeInUp animation-delay-400">
            <BanknotesIcon
              className="h-10 w-10 text-green-600"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900">
              Monthly Sponsorship
            </h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
              Become a regular sponsor and provide sustained support for an
              orphan or a specific program.
            </p>
            <button
              type="button"
              className="mt-8 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sponsor Monthly
            </button>
          </div>

          {/* Donation Option 3: Zakat/Sadaqah */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 animate-slideInRight">
            <GiftIcon className="h-10 w-10 text-green-600" aria-hidden="true" />
            <h3 className="mt-6 text-xl font-semibold leading-7 text-gray-900">
              Zakat & Sadaqah
            </h3>
            <p className="mt-4 flex-auto text-base leading-7 text-gray-600">
              Fulfill your religious obligations or give in general charity. We
              ensure your contributions reach those eligible.
            </p>
            <button
              type="button"
              className="mt-8 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Give Zakat/Sadaqah
            </button>
          </div>
        </div>

        <div className="mt-16 text-center animate-fadeInUp animation-delay-600">
          <h3 className="text-2xl font-semibold text-gray-900">
            Other Ways to Give
          </h3>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Interested in bank transfers, in-kind donations, or legacy giving?
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-md border border-transparent bg-green-100 px-8 py-3 text-base font-medium text-green-700 hover:bg-green-200"
          >
            Contact Us for More Options
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;

// Add animation-delay utilities if not already in globals.css or tailwind.config.js
// .animation-delay-200 { animation-delay: 0.2s; }
// .animation-delay-400 { animation-delay: 0.4s; }
// .animation-delay-600 { animation-delay: 0.6s; }

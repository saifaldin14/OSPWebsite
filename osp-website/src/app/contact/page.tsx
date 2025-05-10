import type { Metadata } from "next";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact Us - OSP",
  description: "Get in touch with the Orphan Sponsorship Program (OSP).",
};

const ContactPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Send Us a Message
            </h2>
            <form action="#" method="POST">
              {" "}
              {/* Replace # with your form handling endpoint */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Our Contact Details
            </h2>
            <p className="text-gray-600 mb-6">
              We are here to answer any questions you may have about our
              programs, donations, or how you can get involved. Reach out to us
              through any of the following channels:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Address:</h3>
                  <p className="text-gray-600">
                    123 Charity Lane, Hope City, HC 45678, World
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Phone:</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-700">Email:</h3>
                  <p className="text-gray-600">info@ospcharity.org</p>
                </div>
              </div>
            </div>

            <div id="volunteer" className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Volunteer & Partnership Inquiries
              </h3>
              <p className="text-gray-600 mb-2">
                Interested in volunteering or partnering with OSP? Please use
                the contact form or email us directly with your proposal or area
                of interest.
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:volunteer@ospcharity.org"
                  className="text-green-600 hover:underline"
                >
                  volunteer@ospcharity.org
                </a>
              </p>
            </div>
            <div id="fundraise" className="mt-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                Start a Fundraiser
              </h3>
              <p className="text-gray-600 mb-2">
                Want to organize a fundraising event? We'd love to hear from
                you! Contact us to discuss your ideas.
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:fundraising@ospcharity.org"
                  className="text-green-600 hover:underline"
                >
                  fundraising@ospcharity.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

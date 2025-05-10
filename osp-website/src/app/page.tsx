import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg" // Placeholder - replace with an actual image
            alt="Smiling children"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 p-6 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Sponsor an Orphan, <br /> Change a Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join OSP in providing hope and a future for children and families in
            need across the globe.
          </p>
          <Link
            href="/donate"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to OSP
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            The Orphan Sponsorship Program (OSP) is an Islamic charity dedicated
            to uplifting the lives of orphans and vulnerable individuals
            worldwide. We believe every child deserves a chance to thrive, and
            with your support, we can make that a reality.
          </p>
          <Link
            href="/about"
            className="text-green-600 hover:text-green-700 font-semibold text-lg transition duration-300"
          >
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideInLeft">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                10,000+
              </h3>
              <p className="text-gray-600">Orphans Sponsored</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideInUp">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                50+
              </h3>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideInRight">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                $5M+
              </h3>
              <p className="text-gray-600">Raised for Aid</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            How You Can Help
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            Your contribution, big or small, makes a significant difference.
            Explore the ways you can join our mission and bring joy to those in
            need.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                Sponsor an Orphan
              </h3>
              <p className="text-gray-600 mb-4">
                Provide long-term support for a child's education, health, and
                well-being.
              </p>
              <Link
                href="/campaigns#sponsor"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-green-600 mb-3">
                General Donation
              </h3>
              <p className="text-gray-600 mb-4">
                Contribute to our general fund to support urgent needs and
                ongoing projects.
              </p>
              <Link
                href="/donate"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Final */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your generosity can transform lives. Partner with OSP today and be a
            beacon of hope.
          </p>
          <Link
            href="/donate"
            className="bg-white hover:bg-gray-100 text-green-600 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Support Our Cause
          </Link>
        </div>
      </section>
    </>
  );
}

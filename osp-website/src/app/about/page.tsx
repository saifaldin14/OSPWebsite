import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - OSP",
  description:
    "Learn more about the Orphan Sponsorship Program (OSP) and our mission.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About OSP</h1>
      <div className="prose lg:prose-xl max-w-none text-gray-700">
        <p>
          The Orphan Sponsorship Program (OSP) is a dedicated Islamic charity
          organization committed to making a tangible difference in the lives of
          orphans and vulnerable individuals across the globe. Our foundation is
          built upon the core Islamic principles of compassion, empathy, and
          social responsibility.
        </p>
        <p>
          We believe that every child, regardless of their circumstances,
          deserves a nurturing environment, access to education, healthcare, and
          the opportunity to reach their full potential. OSP strives to be a
          beacon of hope, providing not just material aid but also emotional and
          spiritual support to those we serve.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Our Mission
        </h2>
        <p>
          Our mission is to empower orphans and needy communities through
          sustainable sponsorship programs, educational initiatives, healthcare
          provisions, and emergency relief efforts. We aim to break the cycle of
          poverty and foster self-reliance, enabling individuals to build
          brighter futures for themselves and their communities.
        </p>
        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
          Our Values
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Compassion (Rahmah):</strong> Treating all individuals with
            kindness, empathy, and respect.
          </li>
          <li>
            <strong>Integrity (Amanah):</strong> Upholding transparency and
            accountability in all our endeavors.
          </li>
          <li>
            <strong>Justice (Adl):</strong> Striving for fairness and equity in
            the distribution of aid and resources.
          </li>
          <li>
            <strong>Excellence (Ihsan):</strong> Committing to the highest
            standards in our programs and operations.
          </li>
          <li>
            <strong>Collaboration:</strong> Working with local partners and
            communities to maximize our impact.
          </li>
        </ul>
        <p className="mt-6">
          We are driven by the Quranic injunction to care for the orphan and the
          needy, and the Prophetic tradition that emphasizes the virtue of
          supporting those less fortunate. Your trust and contributions enable
          us to continue this vital work.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

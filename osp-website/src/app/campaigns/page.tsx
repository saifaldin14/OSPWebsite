import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Campaigns - OSP",
  description:
    "Explore OSP's ongoing campaigns to support orphans and those in need.",
};

// Placeholder data - replace with actual campaign data
const campaigns = [
  {
    id: "sponsor-an-orphan",
    title: "Sponsor an Orphan",
    description:
      "Provide comprehensive support for a child, covering education, healthcare, and living expenses. Your sponsorship offers a lifeline and a chance for a brighter future.",
    image: "/images/campaign-sponsor.jpg", // Replace with actual image
    goal: 50000,
    raised: 25000,
  },
  {
    id: "education-for-all",
    title: "Education for All",
    description:
      "Help us provide educational materials, school fees, and tutoring for children in underserved communities. Education is key to breaking the cycle of poverty.",
    image: "/images/campaign-education.jpg", // Replace with actual image
    goal: 30000,
    raised: 12000,
  },
  {
    id: "emergency-relief",
    title: "Emergency Relief Fund",
    description:
      "Contribute to our emergency fund to provide immediate aid during crises, such as natural disasters or conflict, offering food, shelter, and medical care.",
    image: "/images/campaign-relief.jpg", // Replace with actual image
    goal: 75000,
    raised: 40000,
  },
];

const CampaignsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Our Campaigns
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            id={campaign.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-56 w-full">
              {/* Placeholder for Image - Next/Image would be better here if images are in public folder */}
              <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                <span className="text-gray-500">
                  Image for {campaign.title}
                </span>
              </div>
              {/* <Image src={campaign.image} alt={campaign.title} layout="fill" objectFit="cover" /> */}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-semibold text-green-600 mb-3">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-4 flex-grow">
                {campaign.description}
              </p>
              <div className="mb-4">
                <div className="bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{
                      width: `${(campaign.raised / campaign.goal) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Raised: ${campaign.raised.toLocaleString()} of $
                  {campaign.goal.toLocaleString()}
                </p>
              </div>
              <Link
                href={`/donate?campaign=${campaign.id}`}
                className="mt-auto block text-center bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
              >
                Support This Campaign
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;

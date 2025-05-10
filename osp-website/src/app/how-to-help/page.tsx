import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartIcon,
  BookOpenIcon,
  UsersIcon,
  GiftIcon,
} from "@heroicons/react/24/outline"; // Example icons

export const metadata: Metadata = {
  title: "How to Help - OSP",
  description:
    "Discover various ways you can support the Orphan Sponsorship Program (OSP).",
};

const waysToHelp = [
  {
    icon: HeartIcon,
    title: "Sponsor an Orphan",
    description:
      "Make a long-term commitment to support a child's upbringing, including education, healthcare, and daily needs. This is one of the most impactful ways to change a life directly.",
    link: "/campaigns#sponsor-an-orphan",
    linkText: "Sponsor Now",
  },
  {
    icon: GiftIcon,
    title: "Make a General Donation",
    description:
      "Your one-time or recurring general donations allow us to allocate funds where they are most needed, responding to urgent situations and supporting ongoing operational costs.",
    link: "/donate",
    linkText: "Donate Today",
  },
  {
    icon: BookOpenIcon,
    title: "Support Educational Programs",
    description:
      "Contribute towards providing books, school supplies, and funding for teachers and learning centers. Education empowers children and communities for a better future.",
    link: "/campaigns#education-for-all",
    linkText: "Support Education",
  },
  {
    icon: UsersIcon,
    title: "Volunteer Your Time & Skills",
    description:
      "If you have skills in fundraising, marketing, teaching, or other areas, consider volunteering with OSP. Your time and expertise are invaluable.",
    link: "/contact#volunteer",
    linkText: "Get Involved",
  },
  {
    title: "Spread the Word",
    description:
      "Raise awareness about OSP and the plight of orphans and those in need. Share our mission with your friends, family, and social networks.",
    link: "/", // Link to homepage or social media links
    linkText: "Share Our Mission",
  },
  {
    title: "Organize a Fundraiser",
    description:
      "Host your own fundraising event or campaign in your community, school, or workplace to support OSP. We can provide materials and support.",
    link: "/contact#fundraise",
    linkText: "Start a Fundraiser",
  },
];

const HowToHelpPage = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Ways You Can Make a Difference
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Every act of kindness, no matter how small, contributes to a larger
          wave of positive change. Here are several ways you can join OSP in our
          mission to support orphans and those in need.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {waysToHelp.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col"
            >
              {item.icon && (
                <item.icon className="h-12 w-12 text-green-600 mb-4" />
              )}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
              <Link
                href={item.link}
                className="mt-auto inline-block bg-green-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-green-700 transition duration-300 text-center"
              >
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-16 py-12 bg-green-600 text-white rounded-lg px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Support Matters</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            "The believer's shade on the Day of Resurrection will be his
            charity." (Al-Tirmidhi)
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in this noble cause. Your contribution, whether through
            sponsorship, donation, or spreading awareness, has the power to
            transform lives and bring hope where it's needed most.
          </p>
          <Link
            href="/donate"
            className="bg-white text-green-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg"
          >
            Donate Generously
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HowToHelpPage;

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700"
        >
          OSP
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">
            About Us
          </Link>
          <Link
            href="/campaigns"
            className="text-gray-700 hover:text-green-600"
          >
            Campaigns
          </Link>
          <Link
            href="/how-to-help"
            className="text-gray-700 hover:text-green-600"
          >
            How to Help
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">
            Contact
          </Link>
          <Link
            href="/donate"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

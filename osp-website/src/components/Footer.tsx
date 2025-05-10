const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} OSP - Orphan Sponsorship Program.
          All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Inspired by Islamic values of compassion and charity.
        </p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

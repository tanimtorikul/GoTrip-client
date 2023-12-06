import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 sm:px-8 py-6 md:py-12">
      <div className="container mx-auto flex flex-col lg:flex-row md:justify-between md:items-center">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <Link
            to="/"
            className="flex md:justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500">
              <span className="text-3xl font-semibold">GT</span>
            </div>
            <span className="self-center text-2xl font-semibold">GoTrip</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Discover</h3>
            <ul className="space-y-1">
              <li>
                <Link to="#">Popular Destinations</Link>
              </li>
              <li>
                <Link to="#">Tour Packages</Link>
              </li>
              <li>
                <Link to="#">Travel Stories</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Plan Your Trip</h3>
            <ul className="space-y-1">
              <li>
                <Link to="#">Book a Tour</Link>
              </li>
              <li>
                <Link to="#">Tour Types</Link>
              </li>
              <li>
                <Link to="#">Find a Guide</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase">Social Media</div>
            <div className="flex justify-start space-x-3">
              <Link
                to="#"
                title="Facebook"
                className="flex text-lg items-center p-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                title="Twitter"
                className="flex text-lg items-center p-1"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="flex text-lg items-center p-1"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 text-sm text-center">
        © 2023 GoTrip. Developed by Tanim.
      </div>
    </footer>
  );
};

export default Footer;

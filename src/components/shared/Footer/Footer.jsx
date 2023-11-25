import { FaFacebookF, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-8 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                y
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">GoTrip</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Public API
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" href="#">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase">Social media</div>
            <div className="flex justify-start space-x-3">
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex text-lg items-center p-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex text-lg items-center p-1"
              >
                <FaSquareXTwitter />
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex text-lg items-center p-1"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center">© 2023 GoTrip by Tanim.</div>
    </footer>
  );
};

export default Footer;

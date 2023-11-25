import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <a className="btn btn-ghost text-2xl">ExploreBangla</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/community">Community</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="text-lg">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Add the dropdown code here */}
        <div className="dropdown dropdown-end">
          {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
              
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
           <Link className="btn text-lg">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("Logged out successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-white fixed z-10 w-full lg:px-24">
      <div className="navbar-start ">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
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
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <Link
            to="/"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 text-white rounded-full bg-teal-500">
              <span className="text-3xl font-semibold">GT</span>
            </div>
            <span className="self-center text-2xl font-semibold">GoTrip</span>
          </Link>
        </div>
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
          {user ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt={user.email} src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <a className="justify-between">{user.email}</a>
                </li>
                <li>
                  <Link to="/dashboard/profile">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <Link to="/login" className="btn text-lg bg-teal-500 text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

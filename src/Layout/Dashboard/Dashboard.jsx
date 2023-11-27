import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row h-screen  text-white">
      <div className="w-64 md:w-1/4 min-h-screen bg-gray-800 p-4">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-lg md:text-xl font-semibold">
            {user?.displayName}
          </h1>
        </div>
        <ul className="menu space-y-2">
          <li>
            <NavLink
              to="/dashboard/profile"
              activeClassName="font-bold"
              className="hover:underline"
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/wishlist"
              activeClassName="font-bold"
              className="hover:underline"
            >
              My Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookings"
              activeClassName="font-bold"
              className="hover:underline"
            >
              My Bookings
            </NavLink>
          </li>
        </ul>
        <div className="mt-6">
          <NavLink to="/" className="text-gray-300 hover:text-white">
            Go Home
          </NavLink>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-8 bg-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

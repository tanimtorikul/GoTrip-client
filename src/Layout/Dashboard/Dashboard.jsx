import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen  text-white">
      <div className="w-64 md:w-1/4 min-h-screen bg-gray-800 p-4">
        <div className="flex justify-center text-3xl text-center space-x-4 mb-6">
          GoTrip <br />
          User Dashboard
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

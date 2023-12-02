import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  

  return (
    <div className="flex flex-col md:flex-row md:h-screen text-white">
      <div className="w-full md:w-72 md:min-h-screen bg-blue-800 p-4">
        {isAdmin ? (
          <div className="flex justify-center text-3xl text-center space-x-4 mb-6">
            Admin Dashboard
          </div>
        ) : (
          <div className="flex justify-center text-3xl text-center space-x-4 mb-6">
            User Dashboard
          </div>
        )}
        <ul className="menu space-y-2">
          {isAdmin ? (
            <>
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
                  to="/dashboard/addpackage"
                  activeClassName="font-bold"
                  className="hover:underline"
                >
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageusers"
                  activeClassName="font-bold"
                  className="hover:underline"
                >
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
          {/* shared navlinks */}
          <div className="divider my-2"></div>
          <li>
            <NavLink to="/" className="text-gray-300 hover:text-white">
              Go Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allpackages"
              className="text-gray-300 hover:text-white"
            >
              Packages
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="md:flex-1 p-4 md:p-8 bg-gray-100">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;

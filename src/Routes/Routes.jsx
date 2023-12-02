import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import TourTypePage from "../pages/TourTypePage/TourTypePage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Profile from "../pages/UserDashboard/Profile/Profile";
import StoryDetails from "../pages/StoryDetails/StoryDetails";
import AllStories from "../pages/AllStories/AllStories";
import PrivateRoute from "../Routes/PrivateRoute";
import ManageUsers from "../Layout/Dashboard/ManageUsers/ManageUsers";
import AddPackages from "../Layout/Dashboard/AddPackages/AddPackages";
import WishList from "../Layout/Dashboard/WishList/WishList";
import Bookings from "../Layout/Dashboard/Bookings/Bookings";
import AssignedTour from "../Layout/Dashboard/AssignedTour/AssignedTour";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "allpackages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "package/:id",
        element: <PackageDetails></PackageDetails>,
      },
      {
        path: "/packages/:tourType",
        element: <TourTypePage></TourTypePage>,
      },
      {
        path: "/stories/:id",
        element: <StoryDetails></StoryDetails>,
      },
      {
        path: "/allstories",
        element: <AllStories></AllStories>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      // admin routes
      {
        path: "addpackage",
        element: <AddPackages></AddPackages>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "assignedTour",
        element: <AssignedTour></AssignedTour>,
      },
    ],
  },
]);

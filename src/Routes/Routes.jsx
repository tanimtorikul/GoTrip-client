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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

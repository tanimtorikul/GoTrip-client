import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/SignUp";
import AllPackages from "../pages/AllPackages/AllPackages";
import PackageDetails from "../pages/PackageDetails/PackageDetails";
import TourTypePage from "../pages/TourTypePage/TourTypePage";
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
      }
      
      
    ],
  },
]);

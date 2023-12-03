import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="font-jost px-4 md:px-4 lg:px-0">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;

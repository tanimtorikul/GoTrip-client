import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainLayout = () => {
  useEffect(() => {
    AOS.init();

  }, [])
  return (
    <div className="font-jost ">
      <div>
        <Navbar></Navbar>
      </div>

      <div className="px-4 md:px-4 lg:px-0">
        <div className="min-h-screen py-12 md:py-24 ">
          <Outlet></Outlet>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-jost">
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </div>
            
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
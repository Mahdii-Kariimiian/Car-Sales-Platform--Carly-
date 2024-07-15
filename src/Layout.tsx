import Navbar from "./components/generals/Navbar";
import Footer from "./components/generals/Footer";
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;

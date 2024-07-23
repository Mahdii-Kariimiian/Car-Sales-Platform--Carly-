import Navbar from "./Components/General/Navbar";
import Footer from "./Components/General/Footer";
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

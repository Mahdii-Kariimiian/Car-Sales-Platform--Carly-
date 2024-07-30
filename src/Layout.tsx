import Navbar from "./components/general/navBar";
import Footer from "./components/general/footer";
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

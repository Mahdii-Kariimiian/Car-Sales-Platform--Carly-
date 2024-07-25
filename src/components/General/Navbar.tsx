import mobileIcon from "../../assets/Icons/mobile-icon.svg";
import profileIcon from "../../assets/Icons/profile-icon.svg";
import Carly from "../../assets/Logo/carly.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <Link to={"/"}>
                <img className="w-36 mr-2" src={Carly} alt="logo" />
            </Link>

            <ul className="menu-list">
                <li className="menu-lists ml-5 text-lg">
                    <Link to="/listingcars">Cars</Link>
                </li>
                <li className="menu-lists">About</li>
                <li className="menu-lists">Contact</li>
            </ul>
            <div className="icon mx-auto">
                <img src={mobileIcon} alt="mobile icon" />
                <p>+75 123 456 789</p>
            </div>
            <div className="icon cursor-pointer">
                <img src={profileIcon} alt="profile icon" />
                <p className="mr-9">Sign in</p>
            </div>
            <button className="button">Submit Listing</button>
        </div>
    );
};

export default Navbar;

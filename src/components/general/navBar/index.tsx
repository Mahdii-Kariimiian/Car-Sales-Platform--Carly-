import { Link } from "react-router-dom";
import mobileIcon from "@/assets/Icons/mobile-icon.svg";
import profileIcon from "@/assets/Icons/profile-icon.svg";
import Carly from "@/assets/Logo/carly.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import "./style.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="navbar__container padding-measures">
            <Link to={"/"}>
                <img className="w-36 mr-2" src={Carly} alt="logo" />
            </Link>

            <div className="navbar__menu-list">
                <Link className="navbar__menu-lists ml-4" to="/listingcars">
                    Cars
                </Link>

                <Link to="/aboutus" className="navbar__menu-lists">
                    About
                </Link>
                <Link to="/contactus" className="navbar__menu-lists">
                    Contact
                </Link>
            </div>
            <div className="navbar__icon mx-auto max-lg:hidden">
                <img src={mobileIcon} alt="mobile icon" />
                <p>+75 123 456 789</p>
            </div>
            <div className="navbar__icon cursor-pointer max-md:hidden">
                <img src={profileIcon} alt="profile icon" />
                <p className="mr-9 whitespace-nowrap">Sign in</p>
            </div>
            <button className="navbar__button max-md:hidden">
                Submit Listing
            </button>

            {/* Hamburger Menu  */}
            <div
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className="navbar__hamburger-icon"
            >
                <GiHamburgerMenu />
            </div>
            {isOpen ? (
                <div>
                    <div
                        onClick={() => setIsOpen((prev) => (prev = !prev))}
                        className="navbar__menu-list-hamburger space-y-7"
                    >
                        <Link
                            className="navbar__menu-lists-hamburger"
                            to="/listingcars"
                        >
                            Cars
                        </Link>
                        <Link to="aboutus" className="navbar__menu-lists-hamburger">
                            About
                        </Link>
                        <Link to="/contactus" className="navbar__menu-lists-hamburger">
                            Contact
                        </Link>
                        <div className="icon py-10 text-2xl">
                            <p>+75 123 456 789</p>
                        </div>
                        <button className="navbar__button-hamburger">Sign in</button>
                        <button className="navbar__button-hamburger">
                            Submit Listing
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;

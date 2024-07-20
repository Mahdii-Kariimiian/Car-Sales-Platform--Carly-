import mobileIcon from "../../assets/Icons/mobile-icon.svg";
import profileIcon from "../../assets/Icons/profile-icon.svg";
import Carly from "../../assets/Logo/carly.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-dark-blue font-dm-sans text-base pt-12 pb-12 px-28">
            <Link to={"/"}>
                <img className="w-36 mr-2" src={Carly} alt="logo" />
            </Link>

            <ul className="flex text-lg items-center gap-6 font-poppins-bold ">
                <li className="hover:bg-dark hover:text-white px-3 py-1 hover:rounded-md ml-5 cursor-pointer transition-all">
                    <Link className="text-base" to="/listingcars">Cars</Link>
                </li>
                <li className="hover:bg-dark hover:text-white px-3 py-1 hover:rounded-md cursor-pointer transition-all">
                    About
                </li>
                <li className="hover:bg-dark hover:text-white px-3 py-1 hover:rounded-md cursor-pointer transition-all">
                    Contact
                </li>
            </ul>
            <div className="flex gap-3 items-center mx-auto text-lg">
                <img src={mobileIcon} alt="mobile icon" />
                <p>+75 123 456 789</p>
            </div>
            <div className="flex gap-3 items-center text-lg cursor-pointer ">
                <img src={profileIcon} alt="profile icon" />
                <p className="mr-9">Sign in</p>
            </div>
            <button className="px-6 py-3 border border-dark-blue rounded-lg hover:text-white hover:bg-dark transition-all">
                Submit Listing
            </button>
        </div>
    );
};

export default Navbar;

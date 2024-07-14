import mobileIcon from "../assets/Icons/mobileIcon.png";
import profileIcon from "../assets/Icons/profileIcon.png";
import Carly from "../assets/Logo/Carly.png"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-dark-blue font-dm-sans text-base pt-12 pb-12 px-28">
            <img className="w-36 mr-2" src={Carly} alt="logo" />
            <ul className="flex text-lg items-center gap-9 font-poppins-bold ">
                <li className="ml-9">Cars</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-3 items-center mx-auto text-lg">
                <img src={mobileIcon} alt="mobile icon" />
                <p>+75 123 456 789</p>
            </div>
            <div className="flex gap-3 items-center text-lg">
                <img src={profileIcon} alt="profile icon" />
                <p className="mr-9">Sign in</p>
            </div>
            <button className="px-6 py-3 border border-dark-blue rounded-md">
                Submit Listing{" "}
            </button>
        </div>
    );
};

export default Navbar;
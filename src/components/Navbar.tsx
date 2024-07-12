import mobileIcon from "../assets/Icons/mobileIcon.png";
import profileIcon from "../assets/Icons/profileIcon.png";
import Carly from "../assets/Logo/Carly.png"

const Navbar = () => {
    return (
        <div className="flex items-center gap-8 text-dark-blue text-[16px] pb-5">
            <img className="w-[93px] mr-2" src={Carly} alt="logo" />
            <ul className="flex items-center gap-9 ">
                <li>Cars</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-2.5 items-center m-auto">
                <img src={mobileIcon} alt="mobile icon" />

                <p>+75 123 456 789</p>
            </div>
            <div className="flex gap-2.5 items-center ">
            <img src={profileIcon} alt="profile icon" />
                <p>Sign in</p>
            </div>
            <button className=" px-6 py-3 border border-[#050B20] rounded-[16px]">
                Submit Listing{" "}
            </button>
        </div>
    );
};

export default Navbar;

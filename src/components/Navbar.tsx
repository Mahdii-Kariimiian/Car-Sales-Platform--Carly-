import mobileIcon from "../assets/Icons/mobileIcon.png";
import profileIcon from "../assets/Icons/profileIcon.png";
import Carly from "../assets/Logo/Carly.png"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between text-dark-blue font-dm-sans text-[16px] pt-[47.75px] pb-[46.91px] px-[109.57px]">
            <img className="w-[143.66px] mr-2" src={Carly} alt="logo" />
            <ul className="flex text-[18.26px] items-center gap-[36.95px] font-poppins-bold ">
                <li className="ml-[37.27px]">Cars</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-[10.96px] items-center mx-auto">
                <img src={mobileIcon} alt="mobile icon" />
                <p>+75 123 456 789</p>
            </div>
            <div className="flex gap-[12.78px] items-center">
                <img src={profileIcon} alt="profile icon" />
                <p className="mr-[36.11px]">Sign in</p>
            </div>
            <button className="px-6 py-3 border border-dark-blue rounded-[16px]">
                Submit Listing{" "}
            </button>
        </div>
    );
};

export default Navbar;

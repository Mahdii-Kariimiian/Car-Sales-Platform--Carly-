import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="flex items-center gap-4">
            <h1 className="text-[2.66em]">Carly</h1>
            <ul className="flex items-center gap-4 text-[1.5em]">
                <li>Cars</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex gap-2 items-center m-auto text-[1.5em]">
                <HiOutlineDevicePhoneMobile />

                <p>+75 123 456 789</p>
            </div>
            <div className="flex gap-2 items-center text-[1.5em]">
                <CgProfile />
                <p>Sign in</p>
            </div>
            <button className="text-[1.5em]">Submit Listing </button>
        </div>
    );
};

export default Navbar;

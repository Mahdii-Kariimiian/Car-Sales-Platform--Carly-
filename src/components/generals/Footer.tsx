import facebook from "../../assets/Icons/facebook-icon.svg";
import twitter from "../../assets/Icons/twitter-icon.svg";
import instagram from "../../assets/Icons/instagram-icon.svg";
import linkedin from "../../assets/Icons/linkedin-icon.svg";
import Link from "./UlList";
import { footerData } from "../../db/data";

const Footer = () => {
    return (
        <footer className="bg-white py-14 px-28  ">
            <div className="grid grid-cols-5 gap-10 text-dark text-lg">
                <div>
                    <h2 className="font-bold  mb-4">Company</h2>
                    <Link links={footerData.Company} />
                </div>
                <div>
                    <h2 className="font-bold  mb-4">Quick Links</h2>

                    <Link links={footerData.QuickLinks} />
                </div>
                <div>
                    <h2 className="font-bold  mb-4">Our Brands</h2>
                    <Link links={footerData.OurBrands} />
                </div>
                <div>
                    <h2 className="font-bold  mb-4">Vehicles Type</h2>
                    <Link links={footerData.VehicleTypes} />
                </div>
                <div className="">
                    <h2 className="font-bold  mb-4">Sale Hours</h2>

                    <li>Monday – Friday: 09:00AM – 09:00 PM</li>
                    <li>Saturday: 09:00AM – 07:00PM</li>
                    <li>Sunday: Closed</li>

                    <h2 className="font-bold  mt-6 mb-4">
                        Connect With Us
                    </h2>
                    <div className="flex items-end space-x-6 text-2xl">
                        <a href="#" aria-label="Facebook">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src={linkedin} alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

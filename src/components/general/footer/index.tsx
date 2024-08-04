import { footerData } from "@/db";
import facebook from "@/assets/Icons/facebook-icon.svg";
import twitter from "@/assets/Icons/twitter-icon.svg";
import instagram from "@/assets/Icons/instagram-icon.svg";
import linkedin from "@/assets/Icons/linkedin-icon.svg";
import LinkComponent from "../ulList";
import "./style.css";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__lists-container">
                <div>
                    <h2 className="footer__list-menu">Company</h2>
                    <LinkComponent links={footerData.Company} />
                </div>
                <div>
                    <h2 className="footer__list-menu">Quick Links</h2>

                    <LinkComponent links={footerData.QuickLinks} />
                </div>
                <div>
                    <h2 className="footer__list-menu">Our Brands</h2>
                    <LinkComponent links={footerData.OurBrands} />
                </div>
                <div>
                    <h2 className="footer__list-menu">Vehicles Type</h2>
                    <LinkComponent links={footerData.VehicleTypes} />
                </div>
                <div>
                    <h2 className="footer__list-menu">Sale Hours</h2>

                    <ul>
                        <li>Monday – Friday: 09:00AM – 09:00 PM</li>
                        <li>Saturday: 09:00AM – 07:00PM</li>
                        <li>Sunday: Closed</li>
                    </ul>

                    <h2 className="font-bold mt-6 mb-4">Connect With Us</h2>
                    <div className="flex items-end space-x-6 text-2xl max-sm:justify-center">
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

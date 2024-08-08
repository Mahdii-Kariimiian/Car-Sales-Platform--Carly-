import image from "@/assets/Images/contact-us-image.png";
import mobileIcon from "@/assets/Icons/mobile-icon.svg";
import emailIcon from "@/assets/Icons/email-icon.svg";
import Button from "@/components/general/button";
import "./style.css";

const ContactUs = () => {
    return (
        <div className="contact-us-container padding-measures">
            <img className="contact-us-image" src={image} alt="contact image" />
            <div className="space-y-10 max-lg:text-center">
                <h2 className="contact-us-title">
                    Have more questions? Don't hesitate to reach us
                </h2>
                <div className="text-xl">
                    <p>123 Queensberry Street, North</p>
                    <p>Melbourne VIC3051, Australia.</p>
                </div>
                <div className="contact-us-info-container">
                    <div className="contact-us-info">
                        <img
                            className="w-4"
                            src={mobileIcon}
                            alt="mobile icon"
                        />
                        <p>+76 956 039 999</p>
                    </div>
                    <div className="contact-us-info">
                        <img className="w-5" src={emailIcon} alt="email icon" />{" "}
                        <p>ali@boxcars.com</p>
                    </div>
                </div>
                <Button
                    classes="contact-us-button"
                    text="Contact Us"
                    path="/contactus"
                />
            </div>
        </div>
    );
};

export default ContactUs;

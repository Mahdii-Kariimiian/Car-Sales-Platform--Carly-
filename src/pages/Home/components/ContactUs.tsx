import image from "../../../assets/Images/contact-us-image.png";
import mobileIcon from "../../../assets/Icons/mobile-icon.svg";
import emailIcon from "../../../assets/Icons/email-icon.svg";
import Button from "../../../Components/General/Button";

const ContactUs = () => {
    return (
        <div className="flex items-center gap-28 px-28 py-48 text-dark">
            <img className="h-[41rem]" src={image} alt="contact image" />
            <div className="space-y-6">
                <h2 className="text-5xl font-bold">
                    Have more questions? Don't hesitate to reach us
                </h2>
                <div className="text-xl">
                    <p>123 Queensberry Street, North</p>
                    <p>Melbourne VIC3051, Australia.</p>
                </div>
                <div className="flex gap-6 text-xl">
                    <div className="flex gap-4 border border-dark rounded-full px-10 py-3">
                        <img className="w-4" src={mobileIcon} alt="mobile icon" />
                        <p>+76 956 039 999</p>
                    </div>
                    <div className="flex gap-4 border border-dark rounded-full px-10 py-3" >
                        <img className="w-5" src={emailIcon} alt="email icon" />{" "}
                        <p>ali@boxcars.com</p>
                    </div>
                </div>
                <Button classes="bg-dark text-white" text="Contact Us" />
            </div>
        </div>
    );
};

export default ContactUs;

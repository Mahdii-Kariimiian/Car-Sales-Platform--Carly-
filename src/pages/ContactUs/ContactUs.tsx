import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useForm } from "react-hook-form";
import { message } from "../../Types/Types";
import emailIcon from "../../assets/Icons/email-icon.svg";
import facebookIcon from "../../assets/Icons/facebook-icon.svg";
import instagramIcon from "../../assets/Icons/instagram-icon.svg";
import twitterIcon from "../../assets/Icons/twitter-icon.svg";
import linkedinIcon from "../../assets/Icons/linkedin-icon.svg";
import mobileIcon from "../../assets/Icons/mobile-icon.svg";
import addressIcon from "../../assets/Icons/address-icon.svg";
import arrowIcon from "../../assets/Icons/arrow-icon.svg";

const ContactUs = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: message) => {
        console.log(data);
    };
    return (
        <div className="padding-measures">
            <div className="padding-measures py-11">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>
                    <span className="text-lg"> / {"  "}Contact Us</span>
                </div>
                <h2 className="text-4xl font-bold">Contact Us </h2>
            </div>
            <div>
                <MapContainer
                    className="w-full h-96"
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[51.505, -0.09]}></Marker>
                </MapContainer>
            </div>
            <div className="mt-20 px-28 flex gap-32">
                <div>
                    <h3 className="text-4xl font-bold mb-2">Get In Touch</h3>
                    <p className="text-lg">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </p>
                    <form
                        action=""
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 grid grid-cols-2 gap-8"
                    >
                        <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                            <label htmlFor="firstname">First Name</label>
                            <input
                                className="focus:outline-none"
                                id="firstname"
                                {...register("firstname")}
                            />
                        </div>
                        <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                className="focus:outline-none"
                                id="lastname"
                                {...register("lastname")}
                            />
                        </div>
                        <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="focus:outline-none"
                                id="email"
                                {...register("email")}
                            />
                        </div>
                        <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl p-2">
                            <label htmlFor="phone">Phone</label>
                            <input
                                className="focus:outline-none"
                                id="phone"
                                {...register("phone")}
                            />
                        </div>
                        <div className="text-xl flex flex-col gap-1 border border-gray-200 rounded-xl  p-2 col-span-full">
                            <label htmlFor="message">Message</label>
                            <textarea
                                rows={5}
                                className="focus:outline-none"
                                id="message"
                                {...register("message")}
                            ></textarea>
                        </div>
                        <button className="flex items-center justify-center gap-2 font-semibold text-xl px-10 py-5 text-white bg-primary rounded-lg hover:opacity-70 transition-all w-48 whitespace-nowrap">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="border-gray-200 border rounded-xl mb-24 p-10">
                    <h3 className="text-2xl mb-2">Contact details</h3>
                    <p className="text-lg">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </p>
                    <ul className="space-y-5 my-8">
                        <li className="flex gap-2 items-start">
                            <img
                                className="size-6 mt-1"
                                src={addressIcon}
                                alt="address icon"
                            />
                            <div>
                                <p className="text-lg font-semibold">Address</p>
                                <p className="text-lg">
                                    123 Queensberry Street, North <br />
                                    Melbourne VIC3051, Australia.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <img
                                className="size-6 mt-1"
                                src={emailIcon}
                                alt="email icon"
                            />
                            <div>
                                <p className="text-lg font-semibold">Email</p>
                                <p className="text-lg">ali@boxcars.com</p>
                            </div>
                        </li>
                        <li className="flex gap-2 items-start">
                            <img
                                className="size-6 mt-1"
                                src={mobileIcon}
                                alt="mobile icon"
                            />
                            <div>
                                <p className="text-lg font-semibold">Phone</p>
                                <p className="text-lg">+76 956 123 456</p>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <p className="text-xl mb-3">Follow Us</p>
                        <ul className="flex items-center justify-start gap-10">
                            <li>
                                <img
                                    src={facebookIcon}
                                    alt="facebook icon"
                                    aria-label="facebook icon"
                                />
                            </li>
                            <li>
                                <img
                                    src={instagramIcon}
                                    alt=" instagram icon"
                                    aria-label="facebook icon"
                                />
                            </li>
                            <li>
                                <img
                                    src={twitterIcon}
                                    alt="twitter icon"
                                    aria-label="facebook icon"
                                />
                            </li>
                            <li>
                                <img
                                    src={linkedinIcon}
                                    alt="linkedin icon"
                                    aria-label="facebook icon"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="px-28 mt-28">
                <h2 className="text-4xl font-bold">Our Offices</h2>
                <div className="grid grid-cols-3 gap-28 justify-between py-16">
                    <div className="text-start">
                        <h4 className="text-2xl font-semibold mb-2 pb-5">
                            San Francisco
                        </h4>
                        <p className="text-lg mb-2">
                            416 Dewey Blvd, San Francisco, <br />
                            CA 94116, USA
                        </p>
                        <a
                            href="https://www.google.com/maps?q=416+Dewey+Blvd,+San+Francisco,+CA+94116,+USA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center underline text-xl text-primary"
                        >
                            See on Map
                            <img className="size-4" src={arrowIcon} alt="" />
                        </a>
                        <div className="flex justify-between w-full items-start mt-6">
                            <a
                                href="mailto:alisan@boxcars.com"
                                className="text-lg mb-2"
                            >
                                alisan@boxcars.com
                            </a>
                            <a href="tel:+88656123456" className="text-lg">
                                +88 656 123 456
                            </a>
                        </div>
                    </div>
                    <div className="text-start">
                        <h4 className="text-2xl font-semibold mb-2 pb-5">
                            New York
                        </h4>
                        <p className="text-lg mb-2">
                            232–240 Wilson Ave, Brooklyn, <br />
                            NY 11237, USA
                        </p>
                        <a
                            href="https://www.google.com/maps?q=232%E2%80%93240+Wilson+Ave,+Brooklyn,+NY+11237,+USA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center underline text-xl text-primary"
                        >
                            See on Map
                            <img className="size-4" src={arrowIcon} alt="" />
                        </a>
                        <div className="flex justify-between items-start mt-6">
                            <a
                                href="mailto:aliny@boxcars.com"
                                className="text-lg mb-2"
                            >
                                aliny@boxcars.com
                            </a>
                            <a href="tel:+76956123456" className="text-lg">
                                +76 956 123 456
                            </a>
                        </div>
                    </div>
                    <div className="text-start">
                        <h4 className="text-2xl font-semibold mb-2 pb-5">
                            London
                        </h4>
                        <p className="text-lg mb-2">
                            127–143 Borough High St, <br />
                            London SE1 1NP, UK
                        </p>
                        <a
                            href="https://www.google.com/maps?q=127%E2%80%93143+Borough+High+St,+London+SE1+1NP,+UK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" flex gap-2 items-center underline text-xl text-primary"
                        >
                            See on Map
                            <img className="size-4" src={arrowIcon} alt="" />
                        </a>
                        <div className="flex justify-between items-start mt-6">
                            <a
                                href="mailto:alild@boxcars.com"
                                className="text-lg mb-2"
                            >
                                alild@boxcars.com
                            </a>
                            <a href="tel:+76222333888" className="text-lg">
                                +76 222 333 888
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

import BreadcrumbList from "@/components/general/breadcrumbList";
import ContactUsForm from "./components/ContactUsForm";
import GetInTouchItem from "./components/GetInTouchItem";
import { getInTouchItems, offices } from "@/db";
import { GetInTouchItems, Office } from "@/types";
// Assets
import facebookIcon from "@/assets/Icons/facebook-icon.svg";
import instagramIcon from "@/assets/Icons/instagram-icon.svg";
import twitterIcon from "@/assets/Icons/twitter-icon.svg";
import linkedinIcon from "@/assets/Icons/linkedin-icon.svg";
import OfficeCard from "./components/OfficeCard";
//Leaflet
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs = () => {
    return (
        <div className="padding-measures">
            <div className="padding-measures py-11">
                <BreadcrumbList title="Contact Us" />
            </div>
            <div>
                <MapContainer
                    className="w-full h-96 z-0"
                    center={[51.505, -0.09]}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[51.505, -0.09]}></Marker>
                </MapContainer>
            </div>

            <div className="mt-20 lg:px-28 lg:flex gap-32">
                <div>
                    <h3 className="text-4xl font-bold mb-2">Get In Touch</h3>
                    <p className="text-lg">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </p>
                    <ContactUsForm />
                </div>
                <div className="border-gray-200 border rounded-xl mb-24 p-10">
                    <h3 className="text-2xl mb-2">Contact details</h3>
                    <p className="text-lg">
                        Etiam pharetra egestas interdum blandit viverra morbi
                        consequat mi non bibendum egestas quam egestas nulla.
                    </p>
                    <ul className="space-y-5 my-8">
                        {getInTouchItems.map((item: GetInTouchItems) => {
                            return (
                                <GetInTouchItem
                                    title={item.title}
                                    icon={item.icon}
                                    description={item.description}
                                />
                            );
                        })}
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
            <div className="lg:px-28 mt-28">
                <h2 className="text-4xl font-bold">Our Offices</h2>
                <div className="lg:flex lg:justify-between">
                    {offices.map((office: Office) => {
                        return <OfficeCard office={office} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

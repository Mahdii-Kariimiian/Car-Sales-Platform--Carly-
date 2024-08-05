import { Link } from "react-router-dom";
import image1 from "@/assets/Images/about-us-image (1).png";
import image2 from "@/assets/Images/about-us-image (2).png";
import image3 from "@/assets/Images/about-us-image (3).png";
import image4 from "@/assets/Images/about-us-image (4).png";
import image5 from "@/assets/Images/about-us-image (5).png";
import image6 from "@/assets/Images/about-us-image (6).png";
import checkIcon from "@/assets/Icons/check-icon.svg";
import Button from "../../components/general/button";
import { customers, faq } from "@/db";
import CustomerCard from "./components/CustomerCard";
import { Customers, Faq } from "@/types";
import Accordion from "../../components/general/Accordion";

const AboutUs = () => {
    console.log(faq);
    return (
        <div className="padding-measures">
            {/* Baguet List  */}
            <div className="padding-measures py-11">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>
                    <span className="text-lg"> / {"  "}About Us</span>
                </div>
                <h2 className="text-4xl font-bold">About Us </h2>
            </div>
            {/* Main title and description */}
            <div className="lg:flex max-lg:space-y-4 gap-40 padding-measures">
                <h2 className="text-5xl lg:min-w-[40%] leading-[5rem]">
                    We Value Our Clients And Want Them To Have A Nice Experience
                </h2>
                <div className="text-lg space-y-5">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Convallis
                        integer enim eget sit urna. Eu duis lectus amet
                        vestibulum varius. Nibh tellus sit sit at lorem
                        facilisis. Nunc vulputate ac interdum aliquet vestibulum
                        in tellus.
                    </p>
                    <p>
                        Sit convallis rhoncus dolor purus amet orci urna.
                        Lobortis vulputate vestibulum consectetur donec ipsum
                        egestas velit laoreet justo. Eu dignissim egestas
                        egestas ipsum. Sit est nunc pellentesque at a aliquam
                        ultrices consequat. Velit duis velit nec amet eget eu
                        morbi. Libero non diam sit viverra dignissim. Aliquam
                        tincidunt in cursus euismod enim.
                    </p>
                    <p>
                        Magna odio sed ornare ultrices. Id lectus mi amet sit at
                        sit arcu mi nisl. Mauris egestas arcu mauris.
                    </p>
                </div>
            </div>
            {/* Grid images */}
            <div className="grid gap-4 grid-cols-12 grid-rows-5 padding-measures mt-32">
                <div className="col-span-2 row-span-3 bg-primary text-4xl rounded-2xl p-8 text-white">
                    <span className="text-5xl">45</span> <br /> Years in
                    Business
                </div>
                <img
                    className="col-span-5 row-span-5 h-full"
                    src={image2}
                    alt="image"
                />
                <img
                    className="col-span-5 row-span-3 h-full"
                    src={image1}
                    alt="image"
                />
                <img
                    className="col-span-2 row-span-2 h-full"
                    src={image3}
                    alt="image"
                />
                <img
                    className="col-span-2 row-span-2 h-full"
                    src={image5}
                    alt="image"
                />
                <img
                    className="col-span-3 row-span-2 h-full"
                    src={image4}
                    alt="image"
                />
            </div>
            {/* Why Choose us? */}
            <div className="padding-measures">
                <h3 className="my-32 text-4xl">Why Choose Us?</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <p className="text-lg">Special Financing Offers</p>
                        <p>
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg">Trusted Car Dealership</p>
                        <p>
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg">Transparent Pricing</p>
                        <p>
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg">Expert Car Service</p>
                        <p>
                            Our stress-free finance department that can find
                            financial solutions to save you money.
                        </p>
                    </div>
                </div>
            </div>
            {/* Card */}
            <div className="bg-cyan lg:flex overflow-hidden rounded-xl mt-32 m mb-20">
                <div className="lg:w-[50%]">
                    <img
                        className="h-full object-cover"
                        src={image6}
                        alt="about us background"
                    />
                </div>
                <div className="lg:w-[50%] p-16 flex flex-col items-start justify-center space-y-5">
                    <h2 className="text-2xl">
                        Get A Fair Price For Your Car Sell To Us Today
                    </h2>
                    <p>
                        We are committed to providing our customers with
                        exceptional service, competitive pricing, and a wide
                        range of.
                    </p>
                    <div className="flex gap-2 items-center">
                        <div className="size-7 bg-white flex justify-center items-center rounded-full">
                            <img
                                className="size-3"
                                src={checkIcon}
                                alt="check icon"
                            />
                        </div>
                        <p>
                            We are the UK’s largest provider, with more patrols
                            in more places
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="size-7 bg-white flex justify-center items-center rounded-full">
                            <img
                                className="size-3"
                                src={checkIcon}
                                alt="check icon"
                            />
                        </div>
                        <p>You get 24/7 roadside assistance</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="size-7 bg-white flex justify-center items-center rounded-full">
                            <img
                                className="size-3"
                                src={checkIcon}
                                alt="check icon"
                            />
                        </div>
                        <p>We fix 4 out of 5 cars at the roadside</p>
                    </div>
                    <Button
                        text="Get Started"
                        path=""
                        classes="text-white bg-primary"
                    />
                </div>
            </div>
            {/* customer */}
            <div className="bg-teal-50 padding-measures px-36 py-28 rounded-xl">
                <h2 className="text-3xl mb-14">What our customers say</h2>
                <div className="lg:flex gap-10 space-y-4 ">
                    {customers.map((customer: Customers) => {
                        return <CustomerCard customer={customer} />;
                    })}
                </div>
            </div>
            {/* Frequently asked */}
            <div className="mt-36 text-center">
                <h2 className="text-3xl">Frequently Asked Questions</h2>
                <div className="p-8 mx-64 space-y-4">
                    {faq.map((item: Faq) => {
                        return <Accordion item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

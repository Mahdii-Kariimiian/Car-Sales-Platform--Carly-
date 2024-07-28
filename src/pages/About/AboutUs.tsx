import { Link } from "react-router-dom";
import image1 from "../../assets/Images/about-us-image (1).png";
import image2 from "../../assets/Images/about-us-image (2).png";
import image3 from "../../assets/Images/about-us-image (3).png";
import image4 from "../../assets/Images/about-us-image (4).png";
import image5 from "../../assets/Images/about-us-image (5).png";

const AboutUs = () => {
    return (
        <div className="padding-measures">
            <div className="padding-measures py-11">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>
                    <span className="text-lg"> / {"  "}About Us</span>
                </div>
                <h2 className="text-4xl font-bold">About Us </h2>
            </div>
            <div className="flex gap-40 padding-measures">
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
        </div>
    );
};

export default AboutUs;

import heroBg from "../../../assets/Images/hero-background.png";

const Hero = () => {
    return (
        <div className="relative text-white">
            <img className="w-full px-28" src={heroBg} alt="hero image" />
            <h2 className="absolute text-[3.5rem] top-[26%] transform -translate-x-[50%] left-[50%]">
                The World's Largest Used Car Dealership
            </h2>
            <h1 className="absolute text-xl top-[20%] transform -translate-x-[50%] left-[50%]">
                Find Your Perfect Vehicle Online
            </h1>
        </div>
    );
};

export default Hero;

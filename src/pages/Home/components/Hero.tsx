import heroBg from "../../../assets/Images/hero-background.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container padding-measures">
            <img className="hero-image" src={heroBg} alt="hero image" />
            <h1 className="hero-subtitle">Find Your Perfect Vehicle Online</h1>
            <h2 className="hero-title">
                The World's Largest Used Car Dealership
            </h2>
        </div>
    );
};

export default Hero;

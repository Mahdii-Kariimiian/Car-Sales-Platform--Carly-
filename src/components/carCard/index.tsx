import { useNavigate } from "react-router";
import { CarsInfo, LatestCarProps } from "@/types";
// assets
import favoriteIcon from "@/assets/Icons/favorite-icon.svg";
import fuelIcon from "@/assets/Icons/fuel-icon.svg";
import transmissionIcon from "@/assets/Icons/Transmission-icon.svg";
import arrowIcon from "@/assets/Icons/arrow-icon.svg";
import maxSpeedIcon from "@/assets/Icons/maxSpeed-icon.svg";
//Lazy Loading Images library
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Css
import "./style.css";
const CarCard: React.FC<LatestCarProps> = ({ carsArray }) => {
    ////////// States and Variables //////////
    const navigate = useNavigate();

    // Go to single car page
    const handleViewInfo = (car: CarsInfo) => {
        navigate(`/allcars/singlecar/${car.id}`, { state: { car } });
    };

    return (
        <div>
            <div className="container">
                {carsArray &&
                    carsArray.map((car: CarsInfo) => {
                        return (
                            <div key={car.id} className="card">
                                <div>
                                    <LazyLoadImage
                                        effect="blur"
                                        className="h-64 object-cover w-full"
                                        src={car.image}
                                        alt={car.model}
                                    />
                                    <div className="favorite-icon">
                                        <img
                                            src={favoriteIcon}
                                            alt="favorite icon"
                                            aria-label="favorite"
                                        />
                                    </div>
                                </div>
                                <div className="px-9">
                                    <p className="text-xl text-left pt-5 pb-8">
                                        {car.model}
                                    </p>
                                    <div className="card-info">
                                        <div className="text-center">
                                            <img
                                                className="pb-3.5 m-auto"
                                                src={maxSpeedIcon}
                                                alt="max Speed"
                                            />
                                            <p>{car.topSpeed} Miles</p>
                                        </div>
                                        <div className="text-center">
                                            <img
                                                className="pb-3 m-auto"
                                                src={fuelIcon}
                                                alt="fuel type"
                                            />
                                            {car.fuel}
                                        </div>
                                        <div className="text-center">
                                            <img
                                                className="pb-3.5 m-auto"
                                                src={transmissionIcon}
                                                alt="transmission type"
                                            />
                                            {car.transmission}
                                        </div>
                                    </div>
                                    <div className="flex pt-5 items-end">
                                        {car.discountedPrice ? (
                                            <div className="text-start">
                                                <p className="text-lg line-through">
                                                    $ {car.price}
                                                </p>
                                                <p className="text-2xl font-bold">
                                                    $ {car.discountedPrice}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-xl font-bold">
                                                $ {car.price}
                                            </p>
                                        )}
                                        <button
                                            className="ml-auto text-lg text-primary flex gap-2"
                                            onClick={() => handleViewInfo(car)}
                                        >
                                            View Details
                                            <img
                                                className="w-3"
                                                src={arrowIcon}
                                                alt="arrow Icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default CarCard;

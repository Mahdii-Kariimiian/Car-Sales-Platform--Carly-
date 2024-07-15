import { CarsInfo } from "../../types/Types";
import favoriteIcon from "../../assets/Icons/favorite-icon.svg";
import fuelIcon from "../../assets/Icons/fuel-icon.svg";
import transmissionIcon from "../../assets/Icons/Transmission-icon.svg";
import arrowIcon from "../../assets/Icons/arrow-icon.svg";
import maxSpeedIcon from "../../assets/Icons/maxspeed-icon.svg";

type LatestCarProps = {
    cars: CarsInfo[];
};

const LatestCar: React.FC<LatestCarProps> = ({ cars }) => {
    return (
        <div className="grid grid-cols-4 text-[#050B20] px-28 gap-9">
            {cars.slice(10, 14).map((car) => {
                return (
                    <div
                        className=" relative pb-12 border border-[#E9E9E9] overflow-hidden rounded-lg"
                        id={car.id.toString()}
                    >
                        <div>
                            <img
                                className="h-64 object-cover"
                                src={car.Image}
                                alt={car.Model}
                            />

                            <div className="absolute top-6 right-6 bg-white rounded-full">
                                <img
                                    className=""
                                    src={favoriteIcon}
                                    alt={favoriteIcon}
                                    aria-label="favorite"
                                />
                            </div>
                        </div>
                        <div className="px-9">
                            <p className="text-xl text-left pt-5 pb-8">
                                {car.Model}
                            </p>

                            <div className="grid grid-cols-3 items-end border-t text-xl border-b pb-3 border-gray-200 justify-between pt-5">
                                <div className="text-center">
                                    <img
                                        className="pb-3.5 m-auto"
                                        src={maxSpeedIcon}
                                        alt="max Speed"
                                    />
                                    <p>{car["Top Speed"]} Miles</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        className="pb-3 m-auto"
                                        src={fuelIcon}
                                        alt="fuel type"
                                    />
                                    {car.Fuel}
                                </div>
                                <div className="text-center">
                                    <img
                                        className="pb-3.5 m-auto"
                                        src={transmissionIcon}
                                        alt="transmission type "
                                    />
                                    {car.Transmission}
                                </div>
                            </div>

                            <div className="flex pt-5 items-center">
                                <p className="text-xl font-bold">
                                    $ {car.Price.toLocaleString()}
                                </p>
                                <p className="ml-auto mr-4 text-lg text-primary">
                                    View Details
                                </p>
                                <img
                                    className="w-4"
                                    src={arrowIcon}
                                    alt="arrow Icon"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LatestCar;

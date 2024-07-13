import { CarsInfo } from "../../../types/Types";
import favoriteIcon from "../../../assets/Icons/favorite-icon.png";
import fuelIcon from "../../../assets/Icons/fuel-icon.png";
import transmissionIcon from "../../../assets/Icons/Transmission-icon.png";
import arrowIcon from "../../../assets/Icons/arrow-icon.png";
import maxSpeedIcon from "../../../assets/Icons/maxspeed-icon.png";

type LatestCarProps = {
    cars: CarsInfo[];
};

const LatestCar: React.FC<LatestCarProps> = ({ cars }) => {
    return (
        <div className="grid grid-cols-4 text-[#050B20] px-[109.69px] gap-[35.68px]">
            {cars.slice(10, 14).map((car) => {
                return (
                    <div
                        className=" relative pb-[48px] border border-[#E9E9E9]  overflow-hidden rounded-[19.48px]"
                        id={car.id.toString()}
                    >
                        <div className="">
                            <div className="">
                                <img className="h-[266.19px] object-cover" src={car.Image} alt={car.Model} />
                            </div>
                            <div className="absolute top-[23.35px] right-[23.35px] bg-white rounded-full">
                                <img
                                    className=""
                                    src={favoriteIcon}
                                    alt={favoriteIcon}
                                    aria-label="favorite"
                                />
                            </div>
                        </div>
                        <div className="px-[37.74px]">
                            <p className="text-[21.91px] text-left pt-[20.94px] pb-[32.14px]">
                                {car.Model}
                            </p>

                            <div className="grid grid-cols-3 items-end border-t border-b pb-[11.44px] border-[#E9E9E9] justify-between pt-[21.52px]">
                                <div className="text-center">
                                    <img
                                        className="pb-[14.48px] m-auto"
                                        src={maxSpeedIcon}
                                        alt="max Speed"
                                    />
                                    <p>{car["Top Speed"]} Miles</p>
                                </div>
                                <div className="text-center">
                                    <img
                                        className="pb-[14.48px] m-auto"
                                        src={fuelIcon}
                                        alt="fuel type"
                                    />
                                    {car.Fuel}
                                </div>
                                <div className="text-center">
                                    <img
                                        className="pb-[14.48px] m-auto"
                                        src={transmissionIcon}
                                        alt="transmission type "
                                    />
                                    {car.Transmission}
                                </div>
                            </div>

                            <div className="flex pt-[19.48px] items-center">
                                <p className="text-[24.65px] font-bold"> $ {car.Price.toLocaleString()}</p>
                                <p className="ml-auto mr-[11.61px] text-[18.26px] text-[#405FF2]">View Details</p>
                                <img className="w-[17.4px]" src={arrowIcon} alt="arrow Icon" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LatestCar;

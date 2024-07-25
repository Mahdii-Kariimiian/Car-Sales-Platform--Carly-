import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchCars } from "../../Axios/Axios";
import { CarsInfo } from "../../Types/Types";
import favoriteIcon from "../../assets/Icons/favorite-icon.svg";
import fuelIcon from "../../assets/Icons/fuel-icon.svg";
import transmissionIcon from "../../assets/Icons/Transmission-icon.svg";
import arrowIcon from "../../assets/Icons/arrow-icon.svg";
import maxSpeedIcon from "../../assets/Icons/maxspeed-icon.svg";

// Types
type LatestCarProps = {
    firstNumber?: number;
    lastNumber?: number;
    setCarsLength?: Dispatch<SetStateAction<number>>;
    setParam?: Dispatch<SetStateAction<string | undefined>>;
    sortedList?: (cars: CarsInfo[] | undefined) => CarsInfo[] | undefined;
};

const CarCard: React.FC<LatestCarProps> = ({
    lastNumber,
    firstNumber,
    setCarsLength,
    setParam,
    sortedList,
}) => {
    //States and Variables
    const { type } = useParams();
    const [listedCars, setListedCars] = useState<CarsInfo[]>([]);
    const [allCars, setAllCars] = useState<CarsInfo[] | undefined>([]);

    //UseEffects
    useEffect(() => {
        // Fetch data if type of the car is NOT selected (with pagination)
        !type &&
            fetchCars("cars.json").then((res) => {
                const fetchedCars: CarsInfo[] = res.data;
                setCarsLength && setCarsLength(fetchedCars.length);
                setAllCars(fetchedCars);
                setListedCars(
                    lastNumber
                        ? fetchedCars.slice(firstNumber, lastNumber)
                        : fetchedCars
                );
            });
    }, [lastNumber]);

    useEffect(() => {
        // Fetch data if the Type IS selected
        fetchCars("cars.json").then((res) => {
            if (type) {
                const typeCars: CarsInfo[] = res.data.filter(
                    (car: CarsInfo) => {
                        return car.Type.toLowerCase() === type;
                    }
                );
                setListedCars(typeCars);
                //carLength is used for loading more cars
                setCarsLength && setCarsLength(typeCars.length);
                setParam && setParam(type);
            }
        });
    }, [type]);

    // Sort Cars based on the user's selection
    useEffect(() => {
        sortedList &&
            allCars &&
            setListedCars(sortedList(allCars.slice(0, lastNumber)) || []);
    }, [allCars, sortedList, lastNumber]);

    return (
        <div>
            {listedCars ? (
                <div className="grid grid-cols-4 text-dark  gap-9">
                    {listedCars.map((car, index) => {
                        return (
                            <div
                                key={index.toString()}
                                className=" relative pb-12 border border-gray-200 overflow-hidden rounded-lg"
                            >
                                <div>
                                    <img
                                        className="h-64 object-cover w-full"
                                        src={car.Image}
                                        alt={car.Model}
                                    />

                                    <div className="absolute top-6 right-6 size-8 flex items-center justify-center bg-white rounded-full">
                                        <img
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

                                    <div className="flex pt-5 items-end">
                                        {car.Discount ? (
                                            <div className="text-start">
                                                <p className="text-lg line-through">
                                                    ${" "}
                                                    {car.Price.toLocaleString()}
                                                </p>
                                                <p className="text-2xl font-bold">
                                                    ${" "}
                                                    {car.Discount.toLocaleString()}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-xl font-bold">
                                                $ {car.Price.toLocaleString()}
                                            </p>
                                        )}
                                        <NavLink
                                            className="ml-auto"
                                            key={car.id.toString()}
                                            to={`/listingcars/singlecar/${car.id}`}
                                        >
                                            <p className=" text-lg text-primary flex gap-2">
                                                View Details
                                                <img
                                                    className="w-3"
                                                    src={arrowIcon}
                                                    alt="arrow Icon"
                                                />
                                            </p>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="text-8xl">Loading</div>
            )}
        </div>
    );
};

export default CarCard;

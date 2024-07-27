import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchCars } from "../../Axios/Axios";
import { CarsInfo } from "../../Types/Types";
import favoriteIcon from "../../assets/Icons/favorite-icon.svg";
import fuelIcon from "../../assets/Icons/fuel-icon.svg";
import transmissionIcon from "../../assets/Icons/Transmission-icon.svg";
import arrowIcon from "../../assets/Icons/arrow-icon.svg";
import maxSpeedIcon from "../../assets/Icons/maxspeed-icon.svg";
import "./CarCard.css";

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
    console.log("carcard  global");
    const { type } = useParams(); //For rendering based on the style(type) of the cars
    const [listedCars, setListedCars] = useState<CarsInfo[]>([]); // Cars shown in page based on pagination number
    const [allCars, setAllCars] = useState<CarsInfo[] | undefined>([]); // All of the cars

    //Functions
    const fetchAndSetCars = async () => {
        console.log("carcard fetchAndSetCars func");
        try {
            const res = await fetchCars("cars.json");
            const fetchedCars: CarsInfo[] = Object.values(res.data);

            type
                ? (() => {
                      console.log("carcard fetchAndSetCars func with type");
                      const typeCars = fetchedCars.filter(
                          (car) => car.Type.toLowerCase() === type.toLowerCase()
                      );
                      setListedCars(typeCars.slice(0, lastNumber));
                      setCarsLength?.(typeCars.length);
                      setParam?.(type);
                  })()
                : (() => {
                      console.log("carcard fetchAndSetCars func without type");
                      setAllCars(fetchedCars);
                      setListedCars(
                          lastNumber
                              ? fetchedCars.slice(firstNumber, lastNumber)
                              : fetchedCars
                      );
                      setCarsLength?.(fetchedCars.length);
                  })();
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    //UseEffects
    //All cars and Cars based on type
    useEffect(() => {
        console.log("carcard first useeffect");
        fetchAndSetCars();
    }, [type, firstNumber, lastNumber, setCarsLength, setParam, sortedList]);

    // Sort Cars based on user's selection
    useEffect(() => {
        console.log("carcard second useeffect");

        if (sortedList && allCars) {
            const sortedCars = sortedList(allCars);
            setListedCars(sortedList(sortedCars?.slice(0, lastNumber)) || []);
        }
    }, [allCars, sortedList]);

    return (
        <div>
            {listedCars.length > 0 ? (
                <div className="container">
                    {listedCars.map((car, index) => {
                        return (
                            <div key={index.toString()} className="card">
                                <div>
                                    <img
                                        className="h-64 object-cover w-full"
                                        src={car.Image}
                                        alt={car.Model}
                                    />

                                    <div className="favorite-icon">
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

                                    <div className="card-info">
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
                                            to={`/listingcars/singlecar/${index}`}
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
                <div className="text-5xl p-10">Loading</div>
            )}
        </div>
    );
};

export default CarCard;

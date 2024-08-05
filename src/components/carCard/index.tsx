import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carServices from "@/services";
import { CarsInfo, LatestCarProps, CarsKeyValue } from "@/types";
import CarCardSkeleton from "./CarCardSkeleton";
// assets
import favoriteIcon from "@/assets/Icons/favorite-icon.svg";
import fuelIcon from "@/assets/Icons/fuel-icon.svg";
import transmissionIcon from "@/assets/Icons/Transmission-icon.svg";
import arrowIcon from "@/assets/Icons/arrow-icon.svg";
import maxSpeedIcon from "@/assets/Icons/maxSpeed-icon.svg";
//Toastify library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Lazy Loading Images library
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// Css
import "./style.css";

const CarCard: React.FC<LatestCarProps> = ({
    lastNumber,
    firstNumber,
    setCarsLength,
    setParam,
    sortedList,
}) => {
    // States and Variables
    const { type } = useParams();
    const [listedCars, setListedCars] = useState<CarsKeyValue>([]);
    const [allCars, setAllCars] = useState<CarsKeyValue>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Functions
    const fetchAndSetCars = async () => {
        setLoading(true); // Start loading
        try {
            const res = await carServices("cars.json");
            const fetchedCars: CarsKeyValue = Object.entries(res.data);

            if (type) {
                const typeCars = fetchedCars.filter(
                    (car: [string, CarsInfo]) =>
                        car[1].Type.toLowerCase() === type.toLowerCase()
                );

                setListedCars(typeCars.slice(firstNumber, lastNumber));
                setCarsLength?.(typeCars.length);
                setParam?.(type);
            } else {
                setAllCars(fetchedCars);
                setListedCars(fetchedCars.slice(firstNumber, lastNumber));
                setCarsLength?.(fetchedCars.length);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                notify(error.message);
            } else {
                notify("An unknown error occurred");
            }
        } finally {
            setLoading(false); // End loading
        }
    };

    // Show single car info
    const handleViewInfo = (carId: string, car: CarsInfo) => {
        navigate(`/listingcars/singlecar/${carId}`, { state: { car } });
    };

    // Use Effects
    // Show cars with or without type(style) selected
    useEffect(() => {
        fetchAndSetCars();
    }, [type, firstNumber, lastNumber, setCarsLength, setParam]);

    // Show cars with Sorted options
    useEffect(() => {
        if (sortedList && allCars.length > 0) {
            const sortedCars = sortedList(
                allCars.map((car: CarsKeyValue) => car[1])
            );
            setListedCars(
                sortedCars
                    .slice(firstNumber, lastNumber)
                    .map((car: CarsKeyValue, index: number) => [
                        allCars[index][0],
                        car,
                    ])
            );
        }
    }, [allCars, sortedList, firstNumber, lastNumber]);

    // Toastify function
    const notify = (message: string) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <div>
            {loading ? (
                <CarCardSkeleton />
            ) : listedCars.length > 0 ? (
                <div className="container">
                    {listedCars.map((carObj: [string, CarsInfo]) => {
                        const car = carObj[1];
                        return (
                            <div key={carObj[0]} className="card">
                                <div>
                                    <LazyLoadImage
                                        effect="blur"
                                        className="h-64 object-cover w-full"
                                        src={car.Image}
                                        alt={car.Model}
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
                                                alt="transmission type"
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
                                        <button
                                            className="ml-auto text-lg text-primary flex gap-2"
                                            onClick={() =>
                                                handleViewInfo(carObj[0], car)
                                            }
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
            ) : (
                <div className="text-5xl p-10">No Cars Available</div>
            )}
            <ToastContainer />
        </div>
    );
};

export default CarCard;

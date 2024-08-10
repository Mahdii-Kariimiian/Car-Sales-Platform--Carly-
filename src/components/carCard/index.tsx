import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import carServices from "@/services";
import { CarsInfo, LatestCarProps } from "@/types";
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
import useCRUD from "../../services/useCRUD";

const CarCard: React.FC<LatestCarProps> = ({
    lastNumber,
    firstNumber,
    setCarsLength,
    setParam,
    sortedList,
}) => {
    ////////// States and Variables //////////
    const { type } = useParams();
    const [listedCars, setListedCars] = useState<CarsInfo>([]);
    const [allCars, setAllCars] = useState<CarsInfo>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { read } = useCRUD("https://localhost:8000/", {
        "content-type": "application/json",
    });

    useEffect(() => {
        read("cars")
            .then((res) => console.log(`res ${res}`))
            .catch((err) => console.log(err.message));
    }, []);

    ////////// Functions //////////
    const fetchAndSetCars = async () => {
        setLoading(true); // Start loading
        try {
            const res = await carServices("cars");
            const fetchedCars: CarsInfo[] = res.data;

            if (type) {
                const typeCars = fetchedCars.filter((car: CarsInfo) => {
                    return car.type.toLowerCase() === type.toLowerCase();
                });
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

    // Go to single car page
    const handleViewInfo = (car: CarsInfo) => {
        navigate(`/listingcars/singlecar/${car.id}`, { state: { car } });
    };

    ////////// Use Effects ////////////
    // Show cars with or without type(style) selected
    useEffect(() => {
        fetchAndSetCars();
    }, [type, firstNumber, lastNumber, setCarsLength, setParam]);

    // Show cars with Sorted options
    useEffect(() => {
        if (sortedList && allCars.length > 0) {
            const sortedCars = sortedList(allCars);
            setListedCars(sortedCars.slice(firstNumber, lastNumber));
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
                // Skeleton (maybe move to app.tsx with lazy and suspense)
                <CarCardSkeleton quantity={lastNumber} />
            ) : listedCars.length > 0 ? (
                <div className="container">
                    {listedCars.map((car: CarsInfo) => {
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
            ) : (
                <div className="text-5xl p-10">No Cars Available</div>
            )}
            <ToastContainer />
        </div>
    );
};

export default CarCard;

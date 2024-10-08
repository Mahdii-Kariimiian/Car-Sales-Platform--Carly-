import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import OverviewItem from "./components/OverviewItem";
import Button from "@/components/general/button";
import carServices from "@/services";
import steeringWheel from "@/assets/Icons/steering wheel-icon.svg";
import offer from "@/assets/Icons/offer-icon.svg";
import carBody from "@/assets/Icons/car-icon.svg";
import fuel from "@/assets/Icons/fuel-icon.svg";
import maxSpeed from "@/assets/Icons/maxSpeed-icon.svg";
import calendar from "@/assets/Icons/calendar-icon.svg";
import profile from "@/assets/Icons/profile-icon.svg";
import color from "@/assets/Icons/car-icon.svg";
import transmission from "@/assets/Icons/Transmission-icon.svg";
import remove from "@/assets/Icons/remove-icon.svg";
import edit from "@/assets/Icons/edit-icon.svg";
import favorite from "@/assets/Icons/favorite-icon.svg";
import share from "@/assets/Icons/share-icon.svg";
import { CarsInfo, CarKeyValue, CarOverviewInfo } from "@/types";
// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleCar = () => {
    const [singleCar, setSingleCar] = useState<CarsInfo | undefined>(undefined);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { id } = useParams();

    //Use effects
    useEffect(() => {
        setSingleCar(state?.car);
    }, [state]);

    // Data
    const carOverviewInfo: CarOverviewInfo[] = [
        {
            icon: carBody,
            text: "Body",
            description: singleCar?.Type,
        },
        {
            icon: maxSpeed,
            text: "Mileage",
            description: singleCar?.["Top Speed"],
        },
        {
            icon: fuel,
            text: "Fuel Type",
            description: singleCar?.Fuel,
        },
        {
            icon: calendar,
            text: "Year",
            description: singleCar?.Year,
        },
        {
            icon: profile,
            text: "Condition",
            description: singleCar?.Condition,
        },
        {
            icon: color,
            text: "Color",
            description: singleCar?.Brand,
        },
        {
            icon: transmission,
            text: "Transmission",
            description: singleCar?.Transmission,
        },
    ];

    // Functions
    const goToEditCarPage = () => {
        navigate(`/editcar/${id}`, { state: { car: singleCar } });
    };

    const removeCar = () => {
        carServices
            .delete(`cars/${id}.json`)
            .then((res: CarKeyValue) => {
                if (res.status === 200 || res.status === 204) {
                    notify("Car deleted successfully", false);
                    setTimeout(() => {
                        navigate("/listingcars");
                    }, 1000);
                } else {
                    notify("An error occurred", true);
                }
            })
            .catch((error: unknown) => {
                console.log(error);
                notify("Failed to delete car", true);
            });
    };

    // Noatify functions
    const notify = (message: string, isError = false) => {
        if (isError) {
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
        } else {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <div className="px-28 pt-28 text-xl">
            <div className="flex justify-between gap-10 items-end">
                <div>
                    <div className="pb-4">
                        <span className="text-xl text-primary">
                            <Link to="/">Home{"  "}</Link>
                        </span>
                        /
                        <span className="text-xl text-primary">
                            <Link to="/listingcars">
                                {"  "}Listings{"  "}
                            </Link>
                        </span>
                        /
                        <span className="text-lg pb-7">
                            {"  "} {singleCar?.Model} - {singleCar?.Year}
                        </span>
                    </div>
                    <div className="flex gap-6 items-center pb-8">
                        <h1 className="text-5xl font-semibold mr-3">
                            {singleCar?.Model} - {singleCar?.Year}
                        </h1>
                        <img
                            className="cursor-pointer"
                            onClick={removeCar}
                            src={remove}
                            alt="remove"
                        />

                        <img
                            className="cursor-pointer"
                            src={edit}
                            alt="edit"
                            onClick={goToEditCarPage}
                        />
                    </div>
                </div>
                <div className="flex gap-5 pb-8 text-2xl">
                    <div className="flex gap-2 items-end">
                        <p>Share</p>
                        <span className="size-9 border border-gray-200 rounded-full flex items-center justify-center">
                            <img className="size-5" src={favorite} alt="save" />
                        </span>
                    </div>
                    <div className="flex gap-2 items-end">
                        <p>Save</p>{" "}
                        <span className="size-9 border border-gray-200 rounded-full flex items-center justify-center">
                            <img className="size-5" src={share} alt="share" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-20">
                <div>
                    <img
                        className="w-full mb-28 rounded-3xl"
                        src={singleCar?.Image}
                        alt={singleCar?.Model}
                    />

                    <div className="">
                        <h2 className="text-3xl pb-7">Car Overview</h2>
                        <div className="grid grid-cols-2 grid-rows-4 border-b border-gay-200 pb-12">
                            {carOverviewInfo.map((car, index) => {
                                return (
                                    <div key={index.toString()} className="">
                                        <OverviewItem
                                            icon={car.icon}
                                            text={car.text}
                                            description={car.description}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        <h3 className="text-3xl pt-12 pb-7">Description</h3>
                        <p className="text-xl pb-32 leading-10">
                            {singleCar?.Description}
                        </p>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 p-8 min-w-96 text-xl space-y-4">
                    <p>Our Price</p>
                    {singleCar?.Discount ? (
                        <div className="text-start">
                            <span className="text-xl line-through">
                                $ {singleCar?.Price.toLocaleString()}
                            </span>
                            <span className="text-2xl font-bold ml-3">
                                $ {singleCar?.Discount.toLocaleString()}
                            </span>
                            <div>
                                Instant Saving :{" "}
                                <span>
                                    {(
                                        singleCar?.Price - singleCar?.Discount
                                    ).toLocaleString()}{" "}
                                    $
                                </span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-xl font-bold">
                            $ {singleCar?.Price.toLocaleString()}
                        </p>
                    )}
                    <Button
                        classes="bg-primary text-white "
                        text="Make an Offer Price"
                        icon={offer}
                        path=""
                    />
                    <Button
                        classes="bg-white text-dark border border-dark"
                        text="Schedule Test Drive"
                        icon={steeringWheel}
                        path=""
                    />
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleCar;

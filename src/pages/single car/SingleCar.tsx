import { cars } from "../../db/data";
import { useParams, Link } from "react-router-dom";
import { CarsInfo } from "../../types/Types";
import Button from "../../components/generals/Button";
import steeringWheel from "../../assets/Icons/steering wheel-icon.svg";
import offer from "../../assets/Icons/offer-icon.svg";
import carBody from "../../assets/Icons/car-icon.svg";
import fuel from "../../assets/Icons/fuel-icon.svg";
import maxSpeed from "../../assets/Icons/maxspeed-icon.svg";
import calendar from "../../assets/Icons/calendar-icon.svg";
import profile from "../../assets/Icons/profile-icon.svg";
import color from "../../assets/Icons/car-icon.svg";
import transmission from "../../assets/Icons/Transmission-icon.svg";
import remove from "../../assets/Icons/remove-icon.svg";
import edit from "../../assets/Icons/edit-icon.svg";
import favorite from "../../assets/Icons/favorite-icon.svg";
import share from "../../assets/Icons/share-icon.svg";
import { carOverviewInfo } from "../../types/Types";

import OverviewItem from "./OverviewItem";

const SingleCar = () => {
    const { id } = useParams<{ id: string }>();
    const singleCar: CarsInfo | undefined = cars.find((car: CarsInfo) => {
        return car.id.toLocaleString() === id;
    });

    const carOverviewInfo: carOverviewInfo[] = [
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

    return (
        <div className=" px-28 pt-28 text-xl ">
            <div className="flex justify-between gap-10 items-end">
                <div>
                    <p className="pb-4">
                        <span className="text-xl text-primary ">
                            <Link to="/">Home{"  "}</Link>
                        </span>
                        /
                        <span className="text-xl text-primary  ">
                            <Link to="/listingcars">
                                {"  "}Listings{"  "}
                            </Link>
                        </span>
                        /
                        <span className="text-xl pb-7">
                            {"  "} {singleCar?.Model} - {singleCar?.Year}
                        </span>
                    </p>
                    <div className=" flex gap-3 items-center pb-8">
                        <h1 className="text-5xl font-semibold">
                            {singleCar?.Model} - {singleCar?.Year}
                        </h1>
                        <img src={remove} alt="remove" />
                        <img src={edit} alt="edit" />
                    </div>
                </div>
                <div className="flex gap-5 pb-8 text-2xl">
                    <p className="flex gap-2 items-end">
                        <p>Share</p>
                        <span className="size-9 border border-gray-200 rounded-full flex items-center justify-center">
                            <img className="size-5" src={favorite} alt="save" />
                        </span>
                    </p>
                    <p className="flex gap-2 items-end">
                        <p>Save</p>{" "}
                        <span className="size-9 border border-gray-200 rounded-full flex items-center justify-center">
                            <img className="size-5" src={share} alt="share" />
                        </span>
                    </p>
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
                                    <div id={index.toString()} className="">
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
                    />
                    <Button
                        classes="bg-white text-dark border border-dark"
                        text="Schedule Test Drive"
                        icon={steeringWheel}
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleCar;

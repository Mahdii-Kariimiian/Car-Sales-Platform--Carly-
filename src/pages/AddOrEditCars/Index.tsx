import backIcon from "../../assets/Icons/back-icon.svg";
import Button from "../../Components/General/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { CarStyles } from "../../db/Data";
import { CarsInfo } from "../../Types/Types";
import { CarStyle } from "../../Types/Types";
import { fetchCars } from "../../Axios/Axios";
import "./Index.css";
import { useEffect, useState } from "react";

const Index = () => {
    const [carCount, setCarCount] = useState<number>(0);
    const [newCar, setNewCar] = useState<CarsInfo>();
    const navigate = useNavigate();
    const { register, control, handleSubmit } = useForm<CarsInfo>();
console.log(carCount)
    useEffect(() => {
        // Fetching existing cars and counting them
        fetchCars("cars.json")
            .then((res) => {
                // Assuming res.data is an object where each key is a car node
                setCarCount(Object.keys(res.data).length);
            })
            .catch((error) => console.error("Error fetching cars:", error));
    }, []);

    const onSubmit = (newCar: CarsInfo) => {
        const updatedCar = {
            ...newCar,
            id: Number(carCount) + 1,
            Price: Number(newCar.Price),
            Year: Number(newCar.Year),
            Discount: Number(newCar.Discount),
            "Top Speed": Number(newCar["Top Speed"]),
        };
        console.log(updatedCar);

        fetchCars
            .post("cars.json", updatedCar)
            .then((res) => console.log(res.data.name));
    };
    return (
        <div className="px-28 py-32">
            <button
                className="flex gap-3 items-center text-gray-400 mb-9"
                onClick={() => navigate(-1)}
            >
                <img src={backIcon} alt="back icon" />{" "}
                <span className="text-2xl">Back</span>
            </button>
            <div className="flex gap-3 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-16 text-base w-[60%]">
                    <h2 className="text-4xl font-bold mb-5">Add a New Car</h2>
                    <p className="text-xl mb-8">
                        Fill the below form to add a new car to the listing
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-2 gap-8"
                    >
                        <div className="item">
                            <label htmlFor="model">Model</label>
                            <input
                                className="input"
                                id="model"
                                {...register("Model")}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="brand">Brand</label>
                            <input
                                className="input"
                                id="brand"
                                {...register("Brand")}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="price">$ Price</label>
                            <input
                                inputMode="numeric"
                                pattern="[0-9]*"
                                className="input"
                                id="price"
                                {...register("Price")}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="max-speed">Max-speed</label>
                            <input
                                className="input"
                                id="max-speed"
                                {...register("Top Speed")}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="year">Year</label>
                            <input
                                className="input"
                                id="year"
                                inputMode="numeric"
                                min="1900"
                                max={new Date().getFullYear()}
                                {...register("Year")}
                            />
                        </div>
                        <div className="item">
                            <label htmlFor="Transmission">Transmission</label>
                            <select
                                className="select"
                                id="Transmission"
                                {...register("Transmission")}
                            >
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="Condition">Condition</label>
                            <select
                                className="select"
                                id="Condition"
                                {...register("Condition")}
                            >
                                <option value="Used">Used</option>
                                <option value="New">New</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="Fuel">Fuel</label>
                            <select
                                className="select"
                                {...register("Fuel")}
                                id="Fuel"
                            >
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electronic">Electronic</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="Type">Type</label>
                            <select
                                className="select"
                                {...register("Type")}
                                id="Type"
                            >
                                {CarStyles.map((style: CarStyle) => {
                                    return (
                                        <option
                                            key={style.id}
                                            value={style.title}
                                        >
                                            {style.title}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="discount">Discount</label>
                            <input
                                className="input"
                                id="discount"
                                {...register("Discount")}
                            />
                        </div>
                        <div className="flex flex-col gap-8 col-span-full">
                            <div className="item">
                                <label htmlFor="Image">Image URL</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="www.google.com"
                                    {...register("Image")}
                                />
                            </div>
                            <div className="item">
                                <label htmlFor="Description">Description</label>
                                <textarea
                                    className="input"
                                    rows={10}
                                    {...register("Description")}
                                    id="Description"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <Button
                                text="Add"
                                classes="w-full text-white bg-primary"
                            />
                        </div>
                    </form>
                    <DevTool control={control} />
                </div>
                <img src="" alt="image" />
            </div>
        </div>
    );
};

export default Index;

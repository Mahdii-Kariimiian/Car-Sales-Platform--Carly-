import { useEffect, useState } from "react";
import backIcon from "../../assets/Icons/back-icon.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { CarStyles } from "../../db/Data";
import { CarsInfo } from "../../types/";
import { CarStyle } from "../../types/";
import carServices from "../../services";
import "./style.css";

const Index = () => {
    // React-router methods

    const navigate = useNavigate();
    const { id } = useParams();

    // States and Variables
    const [hash, setHash] = useState<string | undefined>("");
    const [editedCar, setEditedCar] = useState<CarsInfo | null>(null);
    const [carCount, setCarCount] = useState<number>(0);

    // React-hook-form methods
    const { register, control, handleSubmit, formState, watch, reset } =
        useForm<CarsInfo>({ defaultValues: editedCar || {} });
    const { errors } = formState;
    const imageUrl = watch("Image");

    useEffect(() => {
        carServices("cars.json")
            .then((res) => {
                // const hashArray = Object.keys(res.data);
                const allCars = Object.values(res.data);
                // Number of objects in array to specify the next id
                setCarCount(allCars.length);
                // Get data of car to Edit from API
                const carToEdit =
                    id &&
                    allCars.find((car, index) => {
                        return index === Number(id);
                    });
                // Get firebase Hash to edit car
                setHash(
                    Object.keys(res.data).find((hash, index) => {
                        return index === Number(id);
                    })
                );

                carToEdit && setEditedCar(carToEdit);
                carToEdit && reset(carToEdit); //??
            })
            .catch((error) => console.error("Error fetching cars:", error));
    }, []);

    const onSubmit = (newCar: CarsInfo) => {
        const updatedCar = {
            ...newCar,
            // Changing types to Number
            Price: Number(newCar.Price),
            Year: Number(newCar.Year),
            Discount: Number(newCar.Discount),
            "Top Speed": Number(newCar["Top Speed"]),
            // Finish changing types to Number
        };

        if (editedCar) {
            // Use PUT to update the existing car
            carServices
                .put(`cars/${hash}.json`, updatedCar)
                .then((res) => {
                    // console.log(res.data);
                    // navigate("/listingcars");
                })
                .catch((error) => console.error("Error updating car:", error));
        } else {
            // Use POST to add a new car
            carServices
                .post(`cars.json`, updatedCar)
                .then((res) => {
                    // console.log(res.data);
                    // navigate("/listingcars");
                })
                .catch((error) => console.error("Error adding car:", error));
        }
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
            <div className="lg:grid lg:grid-cols-2 gap-3 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-16 text-base">
                    <h2 className="text-4xl font-bold mb-5">Add a New Car</h2>
                    <p className="text-xl mb-8">
                        Fill the below form to add a new car to the listing
                    </p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="grid grid-cols-2 gap-5"
                        noValidate
                    >
                        <div>
                            <div className="item">
                                <label htmlFor="model">Model</label>
                                <input
                                    className="input"
                                    id="model"
                                    {...register("Model", {
                                        required: "This field is required",
                                    })}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.Model?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="brand">Brand</label>
                                <input
                                    className="input"
                                    id="brand"
                                    {...register("Brand", {
                                        required: "This field is required",
                                    })}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.Brand?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="price">$ Price</label>
                                <input
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="input"
                                    id="price"
                                    {...register("Price", {
                                        required: "This field is required",
                                    })}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.Price?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="max-speed">Max-speed</label>
                                <input
                                    className="input"
                                    id="max-speed"
                                    {...register("Top Speed", {
                                        required: "This field is required",
                                    })}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors["Top Speed"]?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="year">Year</label>
                                <input
                                    className="input"
                                    id="year"
                                    inputMode="numeric"
                                    {...register("Year", {
                                        pattern: {
                                            value: /^(19[0-9][0-9]|20[0-2][0-9]|202[0-4])$/s,
                                            message: "Enter right year",
                                        },
                                        required: "This field is required",
                                    })}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.Year?.message}
                            </p>
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
                            <div>
                                <div className="item">
                                    <label htmlFor="Image">Image URL</label>
                                    <input
                                        className="input"
                                        type="text"
                                        placeholder="www.google.com"
                                        {...register("Image", {
                                            required: "This field is required",
                                        })}
                                    />
                                </div>
                                <p className="text-red-500 text-lg mt-1">
                                    {errors.Image?.message}
                                </p>
                            </div>
                            <div>
                                <div className="item">
                                    <label htmlFor="Description">
                                        Description
                                    </label>
                                    <textarea
                                        className="input"
                                        rows={5}
                                        {...register("Description", {
                                            required: "This field is required",
                                        })}
                                        id="Description"
                                    ></textarea>
                                </div>
                                <p className="text-red-500 text-lg mt-1">
                                    {errors.Description?.message}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <button className="w-full text-white bg-primary flex items-center justify-center gap-2 font-semibold text-xl px-10 py-5 rounded-lg hover:opacity-70 transition-all">
                                Add
                            </button>
                        </div>
                    </form>
                    <DevTool control={control} />
                </div>
                {imageUrl ? (
                    <div className="w-full h-full relative">
                        <img
                            src={imageUrl}
                            alt="Car Image"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <p className="text-3xl text-gray-400 flex justify-center items-center w-full h-full">
                        Your Image goes here
                    </p>
                )}
            </div>
        </div>
    );
};

export default Index;

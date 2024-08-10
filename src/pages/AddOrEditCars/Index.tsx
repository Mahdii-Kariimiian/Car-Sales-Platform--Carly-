import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { CarStyles } from "@/db";
import { CarsInfo, CarStyle } from "@/types/";
import carServices from "@/services";
import { ValidationType, FieldValidation } from "./validation/ValidationTypes";
import backIcon from "@/assets/Icons/back-icon.svg";
//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//CSS
import "./style.css";
import validationData from "./validation/ValidationData";

const index = () => {
    ////////// Methods //////////
    // React-router methods
    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();

    ////////// States and Variables //////////
    const [editedCar, setEditedCar] = useState<CarsInfo | null>();
    useEffect(() => {
        setEditedCar(state?.car || null);
    }, []);

    // React-hook-form methods
    const { register, control, handleSubmit, formState, watch } =
        useForm<CarsInfo>({ defaultValues: state?.car || null });
    const { errors } = formState;
    const imageUrl = watch("image");

    ////////// Functions //////////
    const onSubmit = (newCar: CarsInfo) => {
        if (editedCar) {
            // Use PUT to update the existing car
            // console.log(editedCar);
            carServices(`cars/${id}`, {
                method: "PATCH",
                body: JSON.stringify(newCar),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res: CarsInfo) => {
                    console.log(res.data);
                    notify();
                    navigate("/listingcars");
                })
                .catch((error: unknown) =>
                    console.error("Error updating car:", error)
                );
        } else {
            // Use POST to add a new car
            console.log("add");
            carServices
                .post(`cars`, {
                    method: "POST",
                    body: JSON.stringify(newCar),
                    headers: {
                        "content-type": "application/json",
                    },
                })
                .then((res: CarsInfo) => {
                    console.log(res.data);
                    notify();
                    navigate("/listingcars");
                })
                .catch((error: unknown) =>
                    console.error("Error adding car:", error)
                );
        }
    };

    // Handle Validations
    const handleValidation = (item: keyof ValidationType) => {
        const validationEntry: FieldValidation = validationData[item];
        return validationEntry;
    };

    // Get validation for all fields
    const priceValidation = handleValidation("price");
    const modelValidation = handleValidation("model");
    const brandValidation = handleValidation("brand");
    const topSpeedValidation = handleValidation("topSpeed");
    const yearValidation = handleValidation("manufactureYear");
    const imageValidation = handleValidation("image");
    const descriptionValidation = handleValidation("description");
    const discountedPriceValidation = handleValidation("discountedPrice");

    // Toastify Library
    const notify = () => {
        toast.success(`Car Successfully ${state ? "Edited" : "Added"}`, {
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
                                    {...register("model", modelValidation)}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.model?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="brand">Brand</label>
                                <input
                                    className="input"
                                    id="brand"
                                    {...register("brand", brandValidation)}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.brand?.message}
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
                                    {...register("price", priceValidation)}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.price?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="topSpeed">Top speed</label>
                                <input
                                    className="input"
                                    id="topSpeed"
                                    {...register(
                                        "topSpeed",
                                        topSpeedValidation
                                    )}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.topSpeed?.message}
                            </p>
                        </div>
                        <div>
                            <div className="item">
                                <label htmlFor="manufactureYear">Year</label>
                                <input
                                    className="input"
                                    id="manufactureYear"
                                    inputMode="numeric"
                                    {...register(
                                        "manufactureYear",
                                        yearValidation
                                    )}
                                />
                            </div>
                            <p className="text-red-500 text-lg mt-1">
                                {errors.manufactureYear?.message}
                            </p>
                        </div>
                        <div className="item">
                            <label htmlFor="transmission">Transmission</label>
                            <select
                                className="select"
                                id="transmission"
                                {...register("transmission")}
                            >
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="condition">Condition</label>
                            <select
                                className="select"
                                id="condition"
                                {...register("condition")}
                            >
                                <option value="Used">Used</option>
                                <option value="New">New</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="fuel">Fuel</label>
                            <select
                                className="select"
                                {...register("fuel")}
                                id="fuel"
                            >
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Electronic">Electronic</option>
                            </select>
                        </div>
                        <div className="item">
                            <label htmlFor="type">Type</label>
                            <select
                                className="select"
                                {...register("type")}
                                id="type"
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
                            <label htmlFor="discountedPrice">Discount</label>
                            <input
                                className="input"
                                id="discountedPrice"
                                {...register(
                                    "discountedPrice",
                                    discountedPriceValidation
                                )}
                            />
                        </div>
                        <div className="flex flex-col gap-8 col-span-full">
                            <div>
                                <div className="item">
                                    <label htmlFor="image">Image URL</label>
                                    <input
                                        id="image"
                                        className="input"
                                        type="text"
                                        placeholder="www.google.com"
                                        {...register("image", imageValidation)}
                                    />
                                </div>
                                <p className="text-red-500 text-lg mt-1">
                                    {errors.image?.message}
                                </p>
                            </div>
                            <div>
                                <div className="item">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        className="input"
                                        rows={5}
                                        {...register(
                                            "description",
                                            descriptionValidation
                                        )}
                                        id="description"
                                    ></textarea>
                                </div>
                                <p className="text-red-500 text-lg mt-1">
                                    {errors.description?.message}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <button className="w-full text-white bg-primary flex items-center justify-center gap-2 font-semibold text-xl px-10 py-5 rounded-lg hover:opacity-70 transition-all">
                                {state ? "Edit" : "Add"}
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
            <ToastContainer />
        </div>
    );
};

export default index;

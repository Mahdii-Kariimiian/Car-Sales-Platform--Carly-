import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { CarStyles } from "@/db";
import { CarsInfo, CarStyle } from "@/types/";
import { ValidationType, FieldValidation } from "./validation/ValidationTypes";
import backIcon from "@/assets/Icons/back-icon.svg";
import validationData from "./validation/ValidationData";
//CSS
import "./style.css";

interface Props {
    carData?: CarsInfo;
    submitHandler: Function;
    type: string;
}

const index: React.FC<Props> = ({ carData, submitHandler, type }) => {
    ////////// Methods //////////
    // React-router methods
    const navigate = useNavigate();

    // React-hook-form methods
    const { register, control, handleSubmit, formState, watch } =
        useForm<CarsInfo>({ defaultValues: carData?.car || {} });
    const { errors } = formState;
    const imageFile = watch("image");

    ////////// Functions //////////
    const onSubmit = (newCar: CarsInfo) => {
        const fd = new FormData();

        fd.append("model", newCar.model);
        fd.append("brand", newCar.brand);
        fd.append("price", newCar.price);
        fd.append("discountedPrice", newCar.discountedPrice);
        fd.append("manufactureYear", newCar.manufactureYear);
        fd.append("topSpeed", newCar.topSpeed);
        fd.append("type", newCar.type);
        fd.append("fuel", newCar.fuel);
        fd.append("condition", newCar.condition);
        fd.append("description", newCar.description);
        fd.append("transmission", newCar.transmission);
        // Add image if it exists
        if (imageFile && imageFile[0]) {
            fd.append("image", imageFile[0]);
        }

        console.log(fd);
        submitHandler(fd);
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
                                        type="file"
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
                                {carData ? "Edit" : "Add"}
                            </button>
                        </div>
                    </form>
                    <DevTool control={control} />
                </div>
                {imageFile ? (
                    <div className="w-full h-full relative">
                        <img
                            src={imageFile}
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

export default index;

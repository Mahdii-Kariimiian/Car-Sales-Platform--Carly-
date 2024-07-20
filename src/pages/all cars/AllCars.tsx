import { useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "../../components/car/CarCard";
import Button from "../../components/generals/Button";

const AllCars = () => {
    const [lastNumber, setLastNumber] = useState<number>(8);
    const [carsLength, setCarsLength] = useState<number>(0);
    const quantity = 8;

    const loadMoreCars = () => {
        setLastNumber((prev) => prev + quantity);
    };

    return (
        <div className="px-28 py-28">
            <div className="flex justify-between">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>
                    /<span className="text-xl ">{"  "}Listings</span>
                </div>
                <div className="flex gap-5 items-center text-xl">
                    <p className="text-xl text-gray-600">Sort by</p>
                    <select className="p-3 rounded-xl bg-white border border-gray-200" name="sort" id="sort">
                        <option value="Default">Default</option>
                        <option value="Decreasing">Decreasing Price</option>
                        <option value="Increasing">Increasing Price</option>
                        <option value="Newest">Newest</option>
                    </select>
                </div>
            </div>

            <h2 className="text-5xl font-bold pb-6">All Cars</h2>
            <p className="text-xl pb-12">
                Showing 1 /{" "}
                <span className="text-xl">
                    {lastNumber > carsLength ? carsLength : lastNumber} from{" "}
                    <span className="text-xl">{carsLength}</span>{" "}
                </span>
            </p>

            <CarCard lastNumber={lastNumber} setCarsLength={setCarsLength} />

            <div
                className="w-full"
                onClick={() => {
                    lastNumber < carsLength && loadMoreCars();
                }}
            >
                <Button
                    classes="bg-primary text-white px-32 m-auto mt-20 rounded-2xl"
                    text="Load More "
                />
            </div>
        </div>
    );
};

export default AllCars;

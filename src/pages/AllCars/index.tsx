import { useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "@/components/carCard";
import Button from "@/components/general/button";
import { CarsKeyValue } from "@/types";

const AllCars = () => {
    //States and Variables
    const [lastNumber, setLastNumber] = useState<number>(12);
    const [carsLength, setCarsLength] = useState<number>(0);
    const [param, setParam] = useState<string | undefined>(undefined);
    const [sortType, setSortType] = useState<string>("Default");
    const quantity = 12;

    // Functions
    // Load more Cars
    const loadMoreCars = () => {
        lastNumber < carsLength && setLastNumber((prev) => prev + quantity);
    };

    // Sort Cars List
    const sortedCars = (allCars: CarsKeyValue | undefined) => {
        if (!allCars) return [];
        switch (sortType) {
            case "Increasing":
                return [...allCars].sort((a, b) => a.Price - b.Price);
            case "Decreasing":
                return [...allCars].sort((a, b) => b.Price - a.Price);
            case "Newest":
                return [...allCars].sort((a, b) => b.Year - a.Year);
            case "TopSpeed":
                return [...allCars].sort(
                    (a, b) => b["Top Speed"] - a["Top Speed"]
                );
            default:
                return allCars;
        }
    };

    // Change sort Value
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

    return (
        <div className="px-28 py-28">
            <div className="flex justify-between">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>

                    {param ? (
                        <span className="text-lg text-primary ">
                            <Link to="/listingcars"> / {"  "} Listings</Link>
                        </span>
                    ) : (
                        <span className="text-lg ">/{"  "}Listings</span>
                    )}
                    {param && (
                        <span className="text-lg ">
                            / {"  "}
                            {param}
                        </span>
                    )}
                </div>
                <div className="flex gap-5 items-center text-xl">
                    <p className="text-xl text-gray-600">Sort by</p>
                    <select
                        className="p-3 rounded-xl bg-white border border-gray-200"
                        name="sort"
                        id="sort"
                        onChange={handleSortChange}
                    >
                        <option value="Default">Default</option>
                        <option value="Decreasing">Decreasing Price</option>
                        <option value="Increasing">Increasing Price</option>
                        <option value="Newest">Newest Car</option>
                        <option value="TopSpeed">Top Speed</option>
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

            <CarCard
                lastNumber={lastNumber}
                setCarsLength={setCarsLength}
                setParam={setParam}
                sortedList={sortedCars}
            />
            <div
                className="w-full"
                onClick={() => {
                    lastNumber < carsLength && loadMoreCars();
                }}
            >
                {lastNumber < carsLength && (
                    <Button
                        classes="bg-primary text-white px-32 m-auto mt-20 rounded-2xl"
                        text="Load More"
                        path=""
                    />
                )}
            </div>
        </div>
    );
};

export default AllCars;

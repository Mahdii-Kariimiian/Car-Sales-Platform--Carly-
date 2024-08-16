import React, { SetStateAction, useEffect, useState } from "react";
import { CarsInfo } from "@/types";

interface SortedCarsProps {
    setSortedCars: React.Dispatch<SetStateAction<CarsInfo[]>>;
    carsArray: CarsInfo[];
}

const SortCars: React.FC<SortedCarsProps> = ({ setSortedCars, carsArray }) => {
    const [sortType, setSortType] = useState<string>("Default");

    const sortedCarsArray = () => {
        switch (sortType) {
            case "Increasing":
                return [...carsArray].sort((a, b) => a.Price - b.Price);
            case "Decreasing":
                return [...carsArray].sort((a, b) => b.Price - a.Price);
            case "Newest":
                return [...carsArray].sort((a, b) => b.Year - a.Year);
            case "TopSpeed":
                return [...carsArray].sort((a, b) => b.TopSpeed - a.TopSpeed);
            default:
                return carsArray;
        }
    };

    useEffect(() => {
        setSortedCars(sortedCarsArray());
    }, [sortType, carsArray]);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

    return (
        <div>
            <div className="all-cars__nav">
                <div className="all-cars__nav__sort">
                    <p className="all-cars__nav__sort-title">Sort by</p>
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
        </div>
    );
};

export default SortCars;

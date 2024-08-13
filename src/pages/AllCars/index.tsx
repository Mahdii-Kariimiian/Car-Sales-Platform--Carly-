import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CarCard from "@/components/carCard";
import Button from "@/components/general/button";
import useCRUD from "@/services/useCRUD";
import { CarsKeyValue, CarsInfo } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

const AllCars = () => {
    //States and Variables
    const { read, data, error, loading } = useCRUD(`/cars`);
    const [carsArray, setCarsArray] = useState<CarsInfo[]>([]);
    const [carsLength, setCarsLength] = useState<number>(0);
    const [lastNumber, setLastNumber] = useState<number>(12);
    const [param, setParam] = useState<string | null>(null);
    const [sortType, setSortType] = useState<string>("Default");
    const quantity = 12;

    useEffect(() => {
        read();
    }, []);

    useEffect(() => {
        if (data) {
            setCarsArray(data);
            setCarsLength(data.length);
        }

        if (error) {
            notify("Error fetching Data");
        }
    }, [data, error]);

    // Functions
    // Load more Cars
    const loadMoreCars = () => {
        lastNumber < carsArray.length &&
            setLastNumber((prev) => prev + quantity);
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
                return [...allCars].sort((a, b) => b.TopSeed - a.TopSpeed);
            default:
                return allCars;
        }
    };

    // Change sort Value
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortType(event.target.value);
    };

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
        <div className="all-cars__container">
            <div className="all-cars__nav">
                <div className="pb-4">
                    <span className="text-xl text-primary ">
                        <Link to="/">Home{"  "}</Link>
                    </span>

                    {param ? (
                        <span className="text-lg text-primary ">
                            <Link onClick={() => setParam(null)} to="/allcars">
                                {" "}
                                {"  "} / {"  "} Listings
                            </Link>
                        </span>
                    ) : (
                        <span className="text-lg ">/{"  "}Listings</span>
                    )}
                    {param ? (
                        <span className="text-lg ">
                            {"  "} / {"  "}
                            {param}
                        </span>
                    ) : null}
                </div>
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

            <h2 className="text-5xl font-bold pb-6">All Cars</h2>
            <p className="text-xl pb-12">
                Showing 1 /{" "}
                <span className="text-xl">
                    {lastNumber > carsArray.length
                        ? carsArray.length
                        : lastNumber}{" "}
                    from <span className="text-xl">{carsLength}</span>{" "}
                </span>
            </p>

            {loading ? <h1>Loading...</h1> : <CarCard carsArray={carsArray} />}
            <div
                className="w-full"
                onClick={() => {
                    lastNumber < carsLength && loadMoreCars();
                }}
            >
                {lastNumber < carsLength && (
                    <Button
                        classes="all-cars__button"
                        text="Load More"
                        path=""
                    />
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default AllCars;

import { useEffect, useState } from "react";
import CarCard from "@/components/carCard";
import Button from "@/components/general/button";
import useCRUD from "@/services/useCRUD";
import BreadcrumbList from "@/components/general/breadcrumbList";
import SortCars from "./components/SortCars";
import { CarsInfo } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import "./style.css";

const AllCars = () => {
    //States and Variables
    const { read, data, error, loading } = useCRUD(`/cars`);
    const [carsArray, setCarsArray] = useState<CarsInfo[]>([]);
    const [carsLength, setCarsLength] = useState<number>(0);
    const [lastNumber, setLastNumber] = useState<number>(12);
    const [sortedCars, setSortedCars] = useState<CarsInfo>([]);
    const [param, setParam] = useState<string | null>(null);
    const quantity = 12;

    console.log(sortedCars);

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
                <BreadcrumbList
                    param={param}
                    setParam={setParam}
                    title="All Cars"
                />
                <SortCars setSortedCars={setSortedCars} carsArray={carsArray} />
            </div>

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

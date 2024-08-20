import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { CarsInfo } from "@/types";
import useCRUD from "@/services/useCRUD";
import AddOrEditCar from "../AddOrEditCars";

const index = () => {
    // const { state } = useLocation();
    // const [carData, setCarData] = useState<CarsInfo>(state);
    // const CRUDHeader = { "content-type": "multipart/form-data" };

    const car = {
        brand: "test brand",
        condition: "Used",
        description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
        discountedPrice: 0,
        fuel: "Diesel",
        id: 1,
        image: "/static/images/image-1722944690219-756117783.jpg",
        manufactureYear: 2020,
        model: "test model",
        price: 10000,
        topSpeed: 130,
        transmission: "Automatic",
        type: "SUV",
    };

    const getData = async () => {
        try {
            const res = await fetch("/cars");
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const postData = async () => {
        try {
            const res = await fetch("/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(car),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log("Posted data:", data);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };

    useEffect(() => {
        getData();
        postData();
    }, []);

    // const { create, data, error } = useCRUD("/cars");

    // const typeOfRequest = "create";

    // if (data) {
    //     console.log(data);
    // }
    // if (error) {
    //     console.log(error);
    // }

    return (
        <div>
            {/* <AddOrEditCar submitHandler={create} type={typeOfRequest} /> */}
        </div>
    );
};

export default index;

import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { CarsInfo } from "@/types";
import useCRUD from "@/services/useCRUD";
import AddOrEditCar from "../AddOrEditCars";

const index = () => {
    const { state } = useLocation();
    const [carData, setCarData] = useState<CarsInfo>(state);
    // const CRUDHeader = { "content-type": "multipart/form-data" };

    const { create, data, error } = useCRUD("/cars");

    useEffect(() => {
        create(carData);
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }, [carData]);

    return (
        <div>
            <AddOrEditCar setCarData={setCarData} />
        </div>
    );
};

export default index;

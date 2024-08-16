import { useParams, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { CarsInfo } from "@/types";
import useCRUD from "@/services/useCRUD";
import AddOrEditCar from "../AddOrEditCars";

const index = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const [carData, setCarData] = useState<CarsInfo>(state);

    const CRUDHeader = { "content-type": "multipart/form-data" };

    const { update, data } = useCRUD("/cars");

    useEffect(() => {
        update(id, carData);
    }, []);

    if (data) console.log(data);

    return (
        <div>
            <AddOrEditCar carData={carData} setCarData={setCarData} />
        </div>
    );
};

export default index;

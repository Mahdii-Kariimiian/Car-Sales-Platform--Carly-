import { CarStyles } from "../../../db/Data";
import CarStyleItem from "./CarStyleItem";

const CarBodyStyles = () => {
    return (
        <div className="text-center px-5 pt-36 pb-12 font-dm-sans">
            <h2 className="text-5xl font-bold pb-9">Select a Body Style</h2>
            <div>
                <CarStyleItem CarStyles={CarStyles} />
            </div>
        </div>
    );
};

export default CarBodyStyles;

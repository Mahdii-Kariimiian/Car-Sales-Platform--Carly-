import { CarStyles } from "@/db";
import CarStyleItem from "./components/CarStyleItem";
import "./style.css";

const CarBodyStyles = () => {
    return (
        <div className="car-style-list-container">
            <h2 className="car-style-list-title">Select a Body Style</h2>
            <div>
                <CarStyleItem CarStyles={CarStyles} />
            </div>
        </div>
    );
};

export default CarBodyStyles;

import CarCard from "../../../Components/Car/CarCard";
import "./LatestCars.css"

const LatestCars = () => {
    return (
        <div className="latest-cars-container padding-measures">
            <h2 className="latest-cars-title">Latest Cars</h2>
            <div className="latest-cars-list">
                <CarCard firstNumber={0} lastNumber={4} />
            </div>
        </div>
    );
};

export default LatestCars;

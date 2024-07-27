import CarCard from "../../../Components/Car/CarCard";

const LatestCars = () => {
    return (
        <div className="text-center pb-9">
            <h2 className="text-5xl font-bold pb-12">Latest Cars</h2>
            <CarCard firstNumber={0} lastNumber={4} />
        </div>
    );
};

export default LatestCars;

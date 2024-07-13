import { CarStyles } from "../../../db/data";
import CarBodyStyle from "./CarBodyStyle";
import { CarStyle } from "../../../types/Types";



const CarBodyStyles = () => {
    return (
        <div className="text-center px-[18.26px] pt-[140px] pb-[50px] font-dm-sans">
            <h2 className="text-[48.7px]  font-bold pb-[36.52]">Select a Body Style </h2>
            <div>
                <CarBodyStyle CarStyles={CarStyles} />
            </div>
        </div>
    );
};

export default CarBodyStyles;

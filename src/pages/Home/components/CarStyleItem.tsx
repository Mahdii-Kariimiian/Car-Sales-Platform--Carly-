import { CarStyle } from "../../../Types/Types";
import { Link } from "react-router-dom";
import "./CarStyleItem.css";

type CarBodyStyleProps = {
    CarStyles: CarStyle[];
};

const CarBodyStyle: React.FC<CarBodyStyleProps> = ({ CarStyles }) => {
    return (
        <div className="car-body">
            {CarStyles.map((style, index) => {
                return (
                    <Link
                        to={`/listingcars/${style.title.toLowerCase()}`}
                        key={index}
                    >
                        <div className="CarBodyStyle-container">
                            <img
                                className="w-60 gap-9"
                                src={style.src}
                                alt={style.title}
                            />
                            <h2 className="text-xl">{style.title}</h2>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default CarBodyStyle;

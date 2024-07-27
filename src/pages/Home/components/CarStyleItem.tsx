import { CarStyle } from "../../../Types/Types";
import { Link } from "react-router-dom";

type CarBodyStyleProps = {
    CarStyles: CarStyle[];
};

const CarBodyStyle: React.FC<CarBodyStyleProps> = ({ CarStyles }) => {
    return (
        <div className="flex justify-between w-full">
            {CarStyles.map((style, index) => {
                return (
                    <Link to={`/listingcars/${style.title.toLowerCase()}`} key={index}>
                        <div className="px-5 pb-11 hover:outline hover:outline-gray-200 hover:rounded-md">
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

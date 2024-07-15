import { CarStyle } from "../../../types/Types";
type CarBodyStyleProps = {
    CarStyles: CarStyle[];
};

const CarBodyStyle: React.FC<CarBodyStyleProps> = ({ CarStyles }) => {
    return (
        <div className="flex justify-between w-full">
            {CarStyles.map((style) => {
                return (
                    <div className="px-5 pb-11" key={style.id}>
                        <img
                            className="w-60 gap-9"
                            src={style.src}
                            alt={style.title}
                        />
                        <h2 className="text-xl">{style.title}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default CarBodyStyle;

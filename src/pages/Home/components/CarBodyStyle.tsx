import { CarStyle } from "../../../types/Types";
type CarBodyStyleProps = {
    CarStyles: CarStyle[];
};

const CarBodyStyle: React.FC<CarBodyStyleProps> = ({ CarStyles }) => {
    return (
        <div className="flex justify-between w-full">
            {CarStyles.map((style) => {
                return (
                    <div className="px-[20.7px] pb-[44.55px]" key={style.id}>
                        <img
                            className="w-[243.49px] gap-[36.52px]"
                            src={style.src}
                            alt={style.title}
                        />
                        <h2 className="text-[21.91px]">{style.title}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default CarBodyStyle;

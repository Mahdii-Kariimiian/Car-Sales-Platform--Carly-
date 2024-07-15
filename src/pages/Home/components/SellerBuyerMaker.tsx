import { BuyOrSell } from "../../../types/Types";
import Button from "../../../components/generals/Button";

type SellerBuyerMakerProps = {
    sellOrBuy: BuyOrSell[];
};

const sellerBuyerMaker: React.FC<SellerBuyerMakerProps> = ({ sellOrBuy }) => {
    return (
        <div className="flex gap-9 px-28 py-14 ">
            {sellOrBuy.map((card) => {
                console.log(card.color);
                return (
                    <div
                        className={`${card.color} flex gap-20 items-end justify-between rounded-lg w-full p-24`}
                        id={card.id.toLocaleString()}
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl text-[#050B20] font-bold pb-4">
                                {card.title}
                            </h2>
                            <p className="text-lg text-[#050B20] pb-4">
                                {card.description}
                            </p>
                            <Button
                                color={card.buttonColor}
                                text={card.buttonText}
                            />
                        </div>
                        <img
                            className="w-32"
                            src={card.icon}
                            alt="buy or sell"
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default sellerBuyerMaker;

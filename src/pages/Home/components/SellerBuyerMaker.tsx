import { BuyOrSell } from "../../../types/Types";
import Button from "../../../components/generals/Button";
import arrow from "../../../assets/Icons/white-arrow-icon.svg";

type SellerBuyerMakerProps = {
    sellOrBuy: BuyOrSell[];
};

const sellerBuyerMaker: React.FC<SellerBuyerMakerProps> = ({ sellOrBuy }) => {
    return (
        <div className="flex gap-9 px-28 py-14 ">
            {sellOrBuy.map((card, index) => {
                return (
                    <div
                        className={`${card.color} flex gap-20 items-end justify-between rounded-lg w-full p-24`}
                        id={index.toString()}
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl text-[#050B20] font-bold pb-4">
                                {card.title}
                            </h2>
                            <p className="text-lg text-[#050B20] pb-4">
                                {card.description}
                            </p>
                            <Button
                                classes={`${card.buttonColor} text-white`}
                                text={`${card.buttonText}`}
                                icon={arrow}
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

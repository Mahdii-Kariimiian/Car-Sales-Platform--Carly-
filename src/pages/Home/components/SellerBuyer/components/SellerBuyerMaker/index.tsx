import { BuyOrSell } from "@/types";
import Button from "@/components/general/button";
import arrow from "@/assets/Icons/white-arrow-icon.svg";
import "./style.css";

type SellerBuyerMakerProps = {
    sellOrBuy: BuyOrSell[];
};

const sellerBuyerMaker: React.FC<SellerBuyerMakerProps> = ({ sellOrBuy }) => {
    return (
        <div className="seller-buyer-maker-container padding-measures">
            {sellOrBuy.map((card, index) => {
                return (
                    <div
                        className={`${card.color} card-container`}
                        key={index.toString()}
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl text-[#050B20] font-bold pb-4">
                                {card.title}
                            </h2>
                            <p className="text-lg text-[#050B20] pb-4">
                                {card.description}
                            </p>
                            <Button
                                classes={`${card.buttonColor} text-white flex-row-reverse whitespace-nowrap`}
                                text={`${card.buttonText}`}
                                icon={arrow}
                                path={card.path}
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

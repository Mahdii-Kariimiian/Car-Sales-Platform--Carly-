import { sellOrBuy } from "@/db";
import SellerBuyerMaker from "./components/SellerBuyerMaker";

const SellerBuyer = () => {
    return (
        <div>
            <SellerBuyerMaker sellOrBuy={sellOrBuy} />
        </div>
    );
};

export default SellerBuyer;

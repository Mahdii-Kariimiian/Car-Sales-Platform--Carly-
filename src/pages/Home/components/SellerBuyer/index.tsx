import { sellOrBuy } from "../../../../db/Data";
import SellerBuyerMaker from "./components/SellerBuyerMaker";

const SellerBuyer = () => {
    return (
        <div>
            <SellerBuyerMaker sellOrBuy={sellOrBuy} />
        </div>
    );
};

export default SellerBuyer;

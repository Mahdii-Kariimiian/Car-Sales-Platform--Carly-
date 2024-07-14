import {sellOrBuy} from "../../../db/data";
import SellerBuyerMaker from "./SellerBuyerMaker";


const SellerBuyer = () => {
    return (
        <div>
            <SellerBuyerMaker sellOrBuy={sellOrBuy} />
        </div>
    );
};

export default SellerBuyer;

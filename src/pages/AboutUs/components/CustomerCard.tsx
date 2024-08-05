import { Customers } from "@/types";
import quoteIcon from "@/assets/Icons/quote-icon.svg";

type CustomerCardProps = { customer: Customers };

const CustomerCard: React.FC<CustomerCardProps> = ({
    customer: { title, name, description, img, socialMedia },
}) => {
    return (
        <div className="space-y-10 p-10 bg-white rounded-xl">
            <div className="flex gap-2 justify-between">
                <p className="text-xl">{title}</p>
                <img src={quoteIcon} alt="quote icon" />
            </div>
            <p>{description}</p>
            <div className="flex gap-3 items-center">
                <img className="size-14" src={img} alt="customer profile" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p>{socialMedia}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;

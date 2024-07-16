import { carOverviewInfo } from "../../types/Types";

type OverviewProps = carOverviewInfo;

const OverviewItem: React.FC<OverviewProps> = ({ icon, text, description }) => {
    return (
        <div className="grid grid-cols-2 gap-3 text-xl space-y-4">
            <div className="flex gap-3 items-center  text-xl">
                <img className="size-6" src={icon} alt={text} />
                <p>{text}</p>
            </div>
            <p className="flex-1">{description}</p>
        </div>
    );
};

export default OverviewItem;

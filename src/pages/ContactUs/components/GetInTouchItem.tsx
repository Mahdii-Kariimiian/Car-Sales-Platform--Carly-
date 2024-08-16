import { FC, Fragment } from "react";

interface GetInTouchItemProps {
    icon: string;
    title: string;
    description: string;
}

const GetInTouchItem: FC<GetInTouchItemProps> = ({
    icon,
    title,
    description,
}) => {
    return (
        <li className="flex gap-2 items-start">
            <img className="size-6 mt-1" src={icon} alt={title} />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-lg">
                    {description.split("-").map((line, index) => {
                        return (
                            <Fragment key={index}>
                                {line.trim()}
                                {index < description.split("-").length - 1 && (
                                    <br />
                                )}
                            </Fragment>
                        );
                    })}
                </p>
            </div>
        </li>
    );
};

export default GetInTouchItem;

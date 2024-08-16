import React from "react";
import arrowIcon from "@/assets/Icons/arrow-icon.svg";
import emailIcon from "../../../assets/Icons/email-icon.svg";
import mobileIcon from "../../../assets/Icons/mobile-icon.svg";
import { Office } from "@/types";

type OfficeCardProps = {
    office: Office;
};

const OfficeCard: React.FC<OfficeCardProps> = ({ office }) => {
    return (
        <div className="text-start mt-16">
            <h4 className="text-2xl font-semibold mb-2 pb-5">{office.name}</h4>
            <p className="text-lg mb-2">
                {office.address
                    .split(",")
                    .map((line: string, index: number) => (
                        <React.Fragment key={index}>
                            {line.trim()}
                            {index < office.address.split(",").length - 1 && (
                                <br />
                            )}
                        </React.Fragment>
                    ))}
            </p>
            <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center underline text-xl text-primary"
            >
                See on Map
                <img className="size-4" src={arrowIcon} alt="arrow icon" />
            </a>
            <div className="xl:flex xl:gap-3 mt-6 whitespace-nowrap">
                <div className="flex gap-2 items-center">
                    <img className="size-4" src={emailIcon} alt="email icon" />
                    <a href={`mailto:${office.email}`} className="text-lg mb-2">
                        {office.email}
                    </a>
                </div>
                <div className="flex gap-2 items-center">
                    <img
                        className="size-4"
                        src={mobileIcon}
                        alt="mobile icon"
                    />
                    <a href={`tel:${office.phone}`} className="text-lg">
                        {office.phone}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OfficeCard;

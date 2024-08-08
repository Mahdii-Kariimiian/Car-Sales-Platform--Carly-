import { useState } from "react";
import { Faq } from "@/types";
import openIcon from "@/assets/Icons/open-icon.svg";
import closeIcon from "@/assets/Icons/close-icon.svg";

type AccordionProps = {
    item: Faq;
};

const index: React.FC<AccordionProps> = ({ item: { answer, question } }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="text-start p-10 space-y-4 bg-teal-50 rounded-xl">
            <div
                onClick={() => setIsOpen((prev) => (prev = !prev))}
                className=" cursor-pointer text-lg font-semibold flex justify-between gap-2"
            >
                {question}
                <img src={isOpen ? closeIcon : openIcon} alt="" />
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`transition-all cursor-pointer ${
                    isOpen ? "block" : "hidden"
                }`}
            >
                {answer}
            </div>
        </div>
    );
};

export default index;

import React from "react";
type LinkProps = {
    links: string[];
};

const Link: React.FC<LinkProps> = ({ links }) => {
    return (
        <div>
            {links.map((link, index) => {
                return (
                    <ul className="space-y-2 text-lg" id={index.toLocaleString()}>
                        <li>{link}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default Link;

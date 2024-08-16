import React from "react";
import { Link } from "react-router-dom";

interface SubHeaderProps {
    param?: string | null;
    setParam?: React.Dispatch<React.SetStateAction<string | null>>;
    title: string;
}

const index: React.FC<SubHeaderProps> = ({ param, setParam, title }) => {
    return (
        <div>
            <div className="pb-4">
                <span className="text-xl text-primary">
                    <Link to="/">Home{"  "}</Link>
                </span>

                {param ? (
                    <span className="text-lg text-primary">
                        <Link
                            onClick={() => setParam && setParam(null)}
                            to="/allcars"
                        >
                            {" "}
                            {"  "} / {"  "} {title}
                        </Link>
                    </span>
                ) : (
                    <span className="text-lg">
                        /{"  "}
                        {title}
                    </span>
                )}
                {param ? (
                    <span className="text-lg">
                        {"  "} / {"  "}
                        {param}
                    </span>
                ) : null}
            </div>
            <h2 className="text-5xl font-bold pb-6">{title}</h2>
        </div>
    );
};

export default index;

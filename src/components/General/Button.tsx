import { Link } from "react-router-dom";
type ButtonProps = {
    classes: string;
    text: string;
    icon?: string;
    path: string
};

const Button: React.FC<ButtonProps> = ({ classes, text, icon , path }) => {
    return (
        <div>
            <Link to={path}>
                <button
                    className={`${classes} flex items-center justify-center gap-2 font-semibold text-xl px-10 py-5 rounded-lg hover:opacity-70 transition-all`}
                >
                    {icon && (
                        <span>
                            <img src={icon} alt="icon" />
                        </span>
                    )}
                    <p>{text}</p>
                </button>
            </Link>
        </div>
    );
};

export default Button;

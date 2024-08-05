import { Link } from "react-router-dom";
import "./style.css"

//Types
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
                    className={`${classes} button-style`}
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

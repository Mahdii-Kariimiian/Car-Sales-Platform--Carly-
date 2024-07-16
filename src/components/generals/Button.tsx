type ButtonProps = {
    classes: string;
    text: string;
    icon?: string;
};

const Button: React.FC<ButtonProps> = ({ classes, text, icon }) => {
    return (
        <div>
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
        </div>
    );
};

export default Button;

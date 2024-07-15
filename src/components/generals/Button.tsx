type ButtonProps = {
    color: string;
    text: string;
};

const Button: React.FC<ButtonProps> = ({ color, text }) => {
    return (
        <div>
            <button
                className={`${color} text-white text-xl px-10 py-5 rounded-lg hover:opacity-70 transition-all`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;

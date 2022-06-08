import "./index.css";

const HeaderButton = ({ text, width, height, className, ...props }) => {
    return (
        <button
            {...props}
            style={{ padding: "5px 10px", width: width, height: height }}
            className={`header-btn text-center ${className}`}
        >
            {text}
        </button>
    );
};

export default HeaderButton;

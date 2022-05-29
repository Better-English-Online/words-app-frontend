import "./index.css";

const HeaderButton = ({ text, width, height, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            style={{ padding: "5px 10px", width: width, height: height }}
            className={"header-btn text-center" + " " + className}
        >
            {text}
        </button>
    );
};

export default HeaderButton;

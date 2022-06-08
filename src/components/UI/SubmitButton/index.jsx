import styles from "./index.module.css";

const SubmitButton = ({ text, style, onClick }) => {
    return (
        <button
            style={style}
            type="submit"
            onClick={onClick}
            className={styles["submit-btn"]}
        >
            <span>{text}</span>
        </button>
    );
};

export default SubmitButton;

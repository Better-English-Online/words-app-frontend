import styles from "./index.module.css";

const Input = ({ type, placeholder, name }) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
        />
    );
};
export default Input;

import styles from "./index.module.css";

const Input = ({ type, placeholder, name, ...props }) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            {...props}
        />
    );
};
export default Input;

import styles from "./index.module.css";

const SetItem = ({ title }) => {
    return (
        <div className={styles["set-item"]}>
            <h2>{title}</h2>
            <h2 className={styles["type-id"]}>set</h2>
        </div>
    );
};

export default SetItem;

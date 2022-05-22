import styles from "./index.module.css";

const HeaderButton = ({ text }) => {
    return <div className={styles["header-btn"]}>{text}</div>;
};

export default HeaderButton;

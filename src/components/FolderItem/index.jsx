import styles from './index.module.css'


const FolderItem = ({title, type}) => {
    return (
        <div className={styles["folder-item"]}>
            <h1>{title}</h1>
            <h2 className={styles["type-id"]}>folder</h2>
        </div>
    );
}

export default FolderItem
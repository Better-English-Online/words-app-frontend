import { Link } from "react-router-dom";
import FolderItem from "../FolderItem/index";
import SetItem from "../SetItem/index";
import styles from "./index.module.css";

const setsComponents = (sets) => {
    return sets.map((set) => (
        <Link key={`set${set.id}`} to={`/sets/${set.id}`}>
            <SetItem title={set.name} />
        </Link>
    ));
};

const foldersComponents = (folders) => {
    return folders.map((folder) => (
        <Link key={`folder${folder.id}`} to={`/folders/${folder.id}`}>
            <FolderItem title={folder.name} />
        </Link>
    ));
};

const FolderItems = ({ sets, folders }) => {
    return (
        <div className={styles.container}>
            {foldersComponents(folders)}
            {setsComponents(sets)}
        </div>
    );
};

export default FolderItems;

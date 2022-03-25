import Header from "../../Header/Header";
import Main from "../../Main/Main";
import Footer from "../../Footer/Footer";
import styles from './Folder.module.css'
import FolderItems from '../../FolderItems/FolderItems';
import {useParams} from 'react-router-dom'
import {folders} from '../../../Data/Folders.js'

const Dictionary = () => {
    const {id} = useParams()
    const folderId = id || '1'
    return (
        <div className={styles.folder}>
            <Header />
            <Main>
                <FolderItems items={folders[folderId].items}/>
            </Main>
            <Footer />
        </div>
);
};

export default Dictionary;

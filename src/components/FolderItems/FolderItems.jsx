import {NavLink} from 'react-router-dom'
import FolderItem from '../FolderItem/index';
import SetItem from '../SetItem/index';
import styles from './index.module.css'

const detectItem = (item) => {
    if (item.type === 'folder') {
        return (
            <NavLink to={`/folders/${item.id}`}>
                <FolderItem type={item.type} title={item.title}/>
            </NavLink>
        )
    } else if(item.type ==='set') {
    return (
        <NavLink to={`/sets/${item.id}`}>
            <SetItem  type={item.type} title={item.title}/>
        </NavLink>
    )}
};

const FolderItems = ({items}) => {
    return (
        <div className={styles.container}>
        {items.map(item => detectItem(item))}
        </div>
    )
}

export default FolderItems
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import HeaderButton from '../UI/HeaderButton/index';


const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={"/"}>
                <HeaderButton text='Home'/>
            </NavLink>    
                <NavLink to={"/folders"}>
                    <HeaderButton text='Dictionary'/>
                </NavLink>
        </div>
    );
}

export default Header
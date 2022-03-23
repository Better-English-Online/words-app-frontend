import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'


const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/dict"}>Dictionary</NavLink>
        </div>
    );
}

export default Header
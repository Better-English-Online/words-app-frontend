import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import HeaderButton from '../UI/HeaderButton/index';
import React from 'react'


const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });
    if(width > 1000) {
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
    } else {
        return (
            <div className={styles.header}>
                <NavLink to={"/"}>
                    <svg
                        className={styles["header-ico"]}
                        viewBox="-2 -2 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin"
                    >
                        <path d="M18 18V7.132l-8-4.8-8 4.8V18h4v-2.75a4 4 0 1 1 8 0V18h4zm-6 2v-4.75a2 2 0 1 0-4 0V20H2a2 2 0 0 1-2-2V7.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.132V18a2 2 0 0 1-2 2h-6z" />
                    </svg>
                </NavLink>
                <NavLink to={"/folders"}>
                    <svg
                        className={styles["header-ico"]}
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <title>folder, file, archive, document, office</title>
                        <path d="M21,5H11.72l-.32-1A3,3,0,0,0,8.56,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5Zm1,14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H8.56a1,1,0,0,1,.95.68L10.28,7H21a1,1,0,0,1,1,1Z" />
                    </svg>
                </NavLink>
            </div>
        );
    }
}

export default Header
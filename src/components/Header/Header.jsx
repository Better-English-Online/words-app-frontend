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
    if (width > 1000) {
        return (
            <div className={styles.header}>
                <div>
                    <NavLink className="text-3xl mr-20" to={"/home"}>
                        Words-App
                    </NavLink>
                    {user ? (
                        <nav className="inline mr-20">
                            <NavLink to={"/"} className="mr-5 ml-5">
                                <HeaderButton text="Home" />
                            </NavLink>
                            <NavLink className="mr-5 ml-5" to={"/folders"}>
                                <HeaderButton text="Dictionary" />
                            </NavLink>
                            <NavLink className="mr-5 ml-5" to={"/login"}>
                                <HeaderButton text="Log-in" />
                            </NavLink>
                        </nav>
                    ) : (
                        ""
                    )}
                </div>

                <button>
                    <div className="h-[45px] w-[45px] bg-white rounded-full"></div>
                </button>
            </div>
        );
    } else {
        return (
            <div className={styles["m-header"]}>
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
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <title>folder, file, archive, document, office</title>
                        <path d="M21,5H11.72l-.32-1A3,3,0,0,0,8.56,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5Zm1,14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H8.56a1,1,0,0,1,.95.68L10.28,7H21a1,1,0,0,1,1,1Z" />
                    </svg>
                </NavLink>
                <NavLink to={"/login"}>
                    <svg
                        className={styles["header-ico"]}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3ZM15.7742 11.6645C17.132 10.5645 18 8.88361 18 7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7C6 8.88361 6.86797 10.5645 8.22578 11.6645C4.33857 13.0843 1.47727 16.6347 1.05411 20.9027C0.934722 22.1069 1.92503 23 3 23H21C22.075 23 23.0653 22.1069 22.9459 20.9027C22.5227 16.6347 19.6614 13.0843 15.7742 11.6645ZM12 13C7.36764 13 3.55165 16.5005 3.05484 21H20.9452C20.4483 16.5005 16.6324 13 12 13Z"
                        />
                    </svg>
                </NavLink>
            </div>
        );
    }
};

export default Header;

import { NavLink } from "react-router-dom";
import HeaderButton from "../../UI/HeaderButton/index";
import { useRef, useContext } from "react";
import { rippleOnClick } from "../../../Utils";
import Tabs from "../../Tabs";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/Auth";

const PCHeader = () => {
    const header = useRef(null);
    const user = useContext(AuthContext);

    let navigate = useNavigate();
    return (
        <div
            className="header"
            ref={header}
            onClick={(e) => rippleOnClick(e, header.current)}
        >
            <div className="flex">
                <NavLink className="text-3xl mr-20" to={"/home"}>
                    Words-App
                </NavLink>
                {user ? (
                    <Tabs className="inline mr-20">
                        <NavLink to="/home" className="tab ml-5 mr-5">
                            <HeaderButton
                                padding="6px 15px"
                                text="Home"
                                className="header-btn"
                            />
                        </NavLink>
                        <NavLink to="/folders" className="tab ml-5 mr-5">
                            <HeaderButton
                                padding="6px 15px"
                                text="Dictionary"
                                className="header-btn"
                            />
                        </NavLink>
                    </Tabs>
                ) : (
                    ""
                )}
            </div>

            {user ? (
                <button className="p-3 -m-3">
                    <div className="h-[45px] w-[45px] bg-white rounded-full"></div>
                </button>
            ) : (
                <div>
                    <HeaderButton
                        className="ml-5 mr-5"
                        onClick={() => navigate("/login")}
                        text="Log-in"
                    />
                    <HeaderButton
                        className="ml-5 mr-5"
                        onClick={() => navigate("/register")}
                        text="Sign-in"
                    />
                </div>
            )}
        </div>
    );
};

export default PCHeader;

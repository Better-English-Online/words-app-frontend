import { NavLink } from "react-router-dom";
import { useRef } from "react";
import Home from "../../UI/Svgs/Home";
import Folder from "../../UI/Svgs/Folder";
import { rippleOnClick } from "../../../Utils";
import SignUp from "../../UI/Svgs/SignUp";
import LogIn from "../../UI/Svgs/LogIn";
import Tabs from "../../Tabs";
import { useContext } from "react";
import AuthContext from "../../../contexts/Auth";
import Profile from "../../UI/Svgs/Profile";

const MobileHeader = () => {
    const header = useRef(null);
    const user = useContext(AuthContext);
    return (
        <>
            {user ? (
                <Tabs
                    innerRef={header}
                    onClick={(e) => rippleOnClick(e, header.current)}
                    className="m-header"
                >
                    <NavLink to="/home" className="m-tab">
                        <Home className="header-ico" />
                    </NavLink>
                    <NavLink to="/folders" className="m-tab">
                        <Folder className="header-ico" />
                    </NavLink>
                    <NavLink to="/profile" className="m-tab">
                        <Profile className="header-ico" />
                    </NavLink>
                </Tabs>
            ) : (
                <div
                    ref={header}
                    onClick={(e) => rippleOnClick(e, header.current)}
                    className="m-header"
                >
                    <NavLink className="m-tab" to={"/login"}>
                        <LogIn className="header-ico" />
                    </NavLink>
                    <NavLink className="m-tab" to={"/register"}>
                        <SignUp className="header-ico" />
                    </NavLink>
                </div>
            )}
        </>
    );
};

export default MobileHeader;

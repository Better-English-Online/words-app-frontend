import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "../../UI/Svgs/Home";
import Folder from "../../UI/Svgs/Folder";
import { rippleOnClick } from "../../../Utils";
import SignUp from "../../UI/Svgs/SignUp";
import LogIn from "../../UI/Svgs/LogIn";
import Tabs from "../../Tabs";

const MHeader = () => {
    const [index, setIndex] = useState(null);
    const header = useRef(null);
    const user = true;
    return (
        <>
            {user ? (
                <Tabs
                    innerRef={header}
                    onClick={(e) => rippleOnClick(e, header.current)}
                    className="m-header"
                    indexState={index}
                    setIndexState={setIndex}
                >
                    <NavLink to={"/home"} className="m-tab">
                        <Home fill="rgb(159, 159, 159)" height="35px" />
                    </NavLink>
                    <NavLink className="m-tab" to={"/folders"}>
                        <Folder fill="rgb(159, 159, 159)" height="35px" />
                    </NavLink>
                    <button>
                        <div className="h-[45px] w-[45px] bg-white rounded-full"></div>
                    </button>
                </Tabs>
            ) : (
                <div
                    ref={header}
                    onClick={(e) => rippleOnClick(e, header.current)}
                    className="m-header"
                >
                    <NavLink to={"/login"}>
                        <LogIn height="35px" fill="rgb(159, 159, 159)" />
                    </NavLink>
                    <NavLink to={"/register"}>
                        <SignUp fill="rgb(159, 159, 159)" height="40px" />
                    </NavLink>
                </div>
            )}
        </>
    );
};

export default MHeader;

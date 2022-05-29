import { NavLink, Link } from "react-router-dom";
import HeaderButton from "../../UI/HeaderButton/index";
import { useRef, useState } from "react";
import { rippleOnClick } from "../../../Utils";
import Tabs from "../../Tabs";
import { useNavigate } from "react-router-dom";

const PCHeader = () => {
    const [index, setIndex] = useState(null);
    const header = useRef(null);
    const user = true;
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
                    <Tabs
                        indexState={index}
                        setIndexState={setIndex}
                        className="inline mr-20"
                    >
                        <HeaderButton
                            className="tab m5-3 mr-5"
                            onClick={() => navigate("/home")}
                            padding="6px 15px"
                            text="Home"
                        />
                        <HeaderButton
                            className="tab ml-5 mr-5"
                            padding="6px 15px"
                            onClick={() => {
                                navigate("/folders");
                            }}
                            text="Dictionary"
                        />
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
                        onClick={() => navigate("/login")}
                        text="Log-in"
                    />
                    <HeaderButton
                        onClick={() => navigate("/register")}
                        text="Sign-in"
                    />
                </div>
            )}
        </div>
    );
};

export default PCHeader;

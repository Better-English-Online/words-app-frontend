import { NavLink } from "react-router-dom";
import BackArrow from "../../components/UI/Svgs/BackArrow";
import RegisterForm from "../../components/RegisterForm/index";
import { useState } from "react";
import { useWidth } from "../../Utils";

const Register = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useWidth(setWidth);
    return (
        <div className="p-3 flex h-[100vh] justify-center items-center">
            {width > 1000 ? (
                <NavLink className="absolute top-10 left-14 p-5 -m-5" to="/">
                    <BackArrow fill="grey" />
                </NavLink>
            ) : (
                ""
            )}
            <RegisterForm />
        </div>
    );
};

export default Register;

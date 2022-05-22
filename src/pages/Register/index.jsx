import { NavLink } from "react-router-dom";
import BackArrow from "../../components/UI/Svgs/BackArrow";
import RegisterForm from "../../components/RegisterForm/index";

const Register = () => {
    return (
        <div className="flex h-[100vh] justify-center items-center">
            <NavLink className="absolute top-10 left-14 p-5 -m-5" to="/">
                <BackArrow fill='grey' />
            </NavLink>
            <RegisterForm />
        </div>
    );
};

export default Register;

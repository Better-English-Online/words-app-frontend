import styles from "./index.module.css";
import SubmitButton from "../UI/SubmitButton/index";
import Input from "../UI/Input/index";
import PasswordInput from "../UI/PasswordInput/index";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import login from "../../api/login";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const onSuccess = (data) => {
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/home");
    };

    const onFailure = () => console.log("Failure");

    const onSubmit = (e) => {
        e.preventDefault();
        const username = e.target.email.value;
        const password = e.target.password.value;
        login({ username, password, onSuccess, onFailure });
    };
    return (
        <div className={styles.container}>
            <h2 className={styles["form-title"]}>Log-in</h2>
            <form className={styles.AuthForm} action="get" onSubmit={onSubmit}>
                <div className={styles.inputs} style={{ width: "100%" }}>
                    <Input type="text" placeholder="Email..." name="email" />
                    <PasswordInput placeholder="Password..." name="password" />
                </div>
                <SubmitButton
                    style={{
                        marginTop: "100px",
                        width: "100%",
                        marginBottom: "20px",
                    }}
                    text="Submit"
                />
            </form>
            <NavLink
                className="text-gray-300 underline text-sm hover:text-white"
                to="/register"
            >
                Don't have an account? Sign-in
            </NavLink>
        </div>
    );
};

export default LoginForm;

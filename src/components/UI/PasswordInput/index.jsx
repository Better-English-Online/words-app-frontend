import styles from "./index.module.css";
import { useState } from "react";

const PasswordInput = ({ placeholder, name, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordIcoStyle = {
        position: "absolute",
        top: "50%",
        right: "0%",
        transform: " translateX(-20px) translateY(-50%)",
        height: "22px",
        cursor: "pointer",
        color: "grey",
        userSelect: "none",
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const setPasswordInputType = () => {
        return showPassword ? "text" : "password";
    };

    const setShowPasswordIcon = () => {
        if (!showPassword) {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    onClick={toggleShowPassword}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={showPasswordIcoStyle}
                >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            );
        } else {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={showPasswordIcoStyle}
                    onClick={toggleShowPassword}
                >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
            );
        }
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.passInput}
                type={setPasswordInputType()}
                placeholder={placeholder}
                name={name}
                {...props}
            />
            {setShowPasswordIcon()}
        </div>
    );
};
export default PasswordInput;

import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);

    let loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch(
            `${process.env.REACT_APP_API_HOST}/api/token/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: e.target.email.value,
                    password: e.target.password.value,
                }),
            }
        );
        let data = await response.json();
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            window.location.href = "/home";
        } else {
            alert("Something went wrong!");
        }
    };
    let contextData = {
        user: user,
        loginUser: loginUser,
    };
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

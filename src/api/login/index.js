import jwt_decode from "jwt-decode";
import { postRequest, requestHeaders } from "../common";

const url = `${process.env.REACT_APP_API_HOST}/api/token/`;

const buildBody = (email, password) => {
    return JSON.stringify({
        email,
        password,
    });
};

const login = async ({ email, password, onSuccess, onFailure }) => {
    const body = buildBody(email, password);
    const headers = requestHeaders();
    postRequest({ url, body, headers, onSuccess, onFailure });
};

// localStorage.setItem("authTokens", JSON.stringify(data));

export default login;

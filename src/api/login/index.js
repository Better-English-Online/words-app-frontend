import jwt_decode from "jwt-decode";
import { postRequest, requestHeaders } from "../common";

const url = `${process.env.REACT_APP_API_HOST}/api/token/`;

const buildBody = (username, password) => {
    return JSON.stringify({
        username,
        password,
    });
};

const login = async ({ username, password, onSuccess, onFailure }) => {
    const body = buildBody(username, password);
    const headers = requestHeaders();
    postRequest({ url, body, headers, onSuccess, onFailure });
};

// localStorage.setItem("authTokens", JSON.stringify(data));

export default login;

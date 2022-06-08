import { postRequest, requestHeaders } from "../common";

const url = `${process.env.REACT_APP_API_HOST}/api/register/`;

const buildBody = (email, password, password2) => {
    return JSON.stringify({
        email,
        password,
        password2,
    });
};

const register = async ({ email, password, password2, onSuccess, onFailure }) => {
    const body = buildBody(email, password, password2);
    const headers = requestHeaders();
    postRequest({ url, body, headers, onSuccess, onFailure });
};

// localStorage.setItem("authTokens", JSON.stringify(data));

export default register;
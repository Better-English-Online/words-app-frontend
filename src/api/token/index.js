import jwt_decode from "jwt-decode";
import { postRequest, requestHeaders } from "../common";

const url = `${process.env.REACT_APP_API_HOST}/api/token/check`;

const buildBody = (token) => {
    return JSON.stringify({
        token,
    });
};

const check = async ({ token, onSuccess, onFailure }) => {
    const body = buildBody(token);
    const headers = requestHeaders();
    postRequest({ url, body, headers, onSuccess, onFailure });
};

export { check };

const defaultHeaders = {
    "Content-Type": "application/json",
};

const requestHeaders = (headers) => {
    return {
        ...defaultHeaders,
        ...headers,
    };
};

const postRequest = async ({ url, headers, body, onSuccess, onFailure }) => {
    return fetch(url, { method: "POST", headers, body }).then((response) => {
        const handler = response.ok ? onSuccess : onFailure;
        return response.json().then(handler);
    });
};

export { requestHeaders, postRequest };

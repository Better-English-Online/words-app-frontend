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
        const handler = response.ok
            ? onSuccess
            : (response) => onFailure(response);
        return response.json().then(handler);
    }).catch(() => onFailure());
};

export { requestHeaders, postRequest };

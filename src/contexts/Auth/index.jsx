import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import { check } from '../../api/token';

const Context = createContext();

const Provider = ({ children }) => {
    const [data, setData] = useState(null);
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    const accessToken = tokens?.access;

    const onSuccess = () => {
        const decoded = jwt_decode(accessToken);
        setData(decoded);
    };

    const onFailure = (
        // Add refresh logic here
    ) => {};

    useEffect(() => {
        if (!accessToken) return;

        check({ token: accessToken,  onSuccess, onFailure });
    }, [])
    

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};

export default Context;
export { Provider };
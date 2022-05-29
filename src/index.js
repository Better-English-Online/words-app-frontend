import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as AuthProvider } from "./contexts/Auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
);

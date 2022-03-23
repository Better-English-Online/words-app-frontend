import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Dictionary from "./components/Pages/Dictionary/Dictionary";
import './App.module.css'

function App() {
    return (
        <BrowserRouter basename="/my-react-app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path="/dict"
                    element={<Dictionary />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

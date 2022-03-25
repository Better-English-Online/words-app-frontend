import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Folder from "./components/Pages/Folder/Folder";
import './App.module.css'

function App() {
    return (
        <BrowserRouter basename="/my-react-app">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/folders/:id" element={<Folder />}></Route>
                <Route path="/folders" element={<Folder />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

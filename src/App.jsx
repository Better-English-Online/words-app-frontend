import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Folder from "./pages/Folder/Folder";
import './App.module.css'
import Set from './pages/Set/Set';
import NotFound from './pages/NotFound/index';
import Login from './pages/Login/index';

function App() {
    return (
        <BrowserRouter basename="/words-app-frontend">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/folders/:id" element={<Folder />}></Route>
                <Route path="/folders" element={<Folder />}></Route>
                <Route path="/sets/:id" element={<Set />}></Route>
                <Route path="/registration" element={<Login />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

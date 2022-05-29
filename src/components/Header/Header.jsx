import "./Header.css";
import { useState } from "react";
import { useWidth } from "../../Utils";
import PCHeader from "./PCHeader/index";
import MHeader from "./MHeader";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useWidth(setWidth);
    if (width > 1000) {
        return <PCHeader />;
    } else {
        return <MHeader />;
    }
};

export default Header;

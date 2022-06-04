import "./Header.css";
import { useState } from "react";
import { useWidth } from "../../Utils";
import PCHeader from "./PCHeader/index";
import MobileHeader from "./MobileHeader";

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useWidth(setWidth);
    if (width > 1000) {
        return <PCHeader />;
    } else {
        return <MobileHeader />;
    }
};

export default Header;

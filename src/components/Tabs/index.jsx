import { TabsChildrenPropsInjector } from "../../Utils/index";
import { useState } from "react";

const Tabs = ({ innerRef, children, ...props }) => {
    const [index, setIndex] = useState(null);
    const tabsChildren = TabsChildrenPropsInjector(children, index, setIndex);

    return (
        <div ref={innerRef} {...props}>
            {tabsChildren}
        </div>
    );
};

export default Tabs;

import { tabsChildrenPropsInjector } from "../../Utils/index";
import { useState } from "react";

const Tabs = ({ innerRef, children, indexState, setIndexState, ...props }) => {
    const tabsChildren = tabsChildrenPropsInjector(
        children,
        indexState,
        setIndexState
    );

    return (
        <div ref={innerRef} {...props}>
            {tabsChildren}
        </div>
    );
};

export default Tabs;

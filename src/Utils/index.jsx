import { useEffect, cloneElement } from "react";

const useWidth = (setWidth) => {
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });
};

const tabsChildrenPropsInjector = (children, indexState, setIndexState) => {
    const NewChildren = () =>
        children.map((child, elementIndex) =>
            cloneElement(child, {
                onClick: (e) => {
                    child.props.onClick(e);
                    setIndexState(elementIndex);
                },
                className: `${child.props.className} ${
                    indexState === elementIndex ? "active" : ""
                }`,
            })
        );
    return <NewChildren />;
};

const findClickCoordinates = (e) => {
    let x = e.clientX - e.currentTarget.offsetLeft;
    let y = e.clientY - e.currentTarget.offsetTop;
    return [x, y];
};

const rippleOnClick = (e, element) => {
    let [x, y] = findClickCoordinates(e);
    let ripples = document.createElement("span");
    ripples.style = `
        position: absolute;
        background: white;
        transform: translate(-50%, -50%);
        pointer-events: none;
        border-radius: 50%;
        animation: rippleAnimation 0.6s linear;
        z-index: -1;
        top: ${y}px;
        left: ${x}px
        `;
    element.appendChild(ripples);
    setTimeout(() => {
        ripples.remove();
    }, 1000);
};
export {
    useWidth,
    tabsChildrenPropsInjector,
    findClickCoordinates,
    rippleOnClick,
};

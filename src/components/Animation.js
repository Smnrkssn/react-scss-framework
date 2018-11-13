import React from "react";
import {classNames} from "../services/className";

export const Animation = ({
    animation = "fadeIn",
    className,
    children,
    ...props
}) => {
    const animationClass = classNames({
        "animated": true,
        [animation]: true
    }, className);

    return (
        <div
            className={animationClass}
            {...props}
        >{children}</div>
    );
};
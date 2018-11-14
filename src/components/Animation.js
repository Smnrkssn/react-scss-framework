import React from "react";
import {classNames} from "../services/className";

export const Animation = ({
    animation = "fadeIn",
    className,
    duration = 1000,
    children,
    ...props
}) => {
    const animationClass = classNames({
        "animated": true,
        [animation]: true
    }, className);

    const style = {
        animationDuration: `${duration / 1000}s`
    };

    return <div className={animationClass} style={style} {...props}>{children}</div>;
};
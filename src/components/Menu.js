import React from "react";
import {classNames} from "../services/className";

export const Menu = ({
    className = "",
    vertical = false,
    inline = false,
    right = false,
    center = false,
    fixed = false,
    children,
    ...props
}) => {
    const menuClass = classNames({
        "menu": true,
        "vertical": vertical,
        "inline": inline,
        "right": right,
        "center": center,
        "fixed": fixed
    }, className);

    return (
        <nav className={menuClass} {...props}>
            {children}
        </nav>
    );
};
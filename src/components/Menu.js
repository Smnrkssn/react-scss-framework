import React from "react";
import {classNames} from "../services/className";

export const Menu = ({
    className = "",
    vertical = false,
    inline = false,
    children,
    ...props
}) => {
    const menuClass = classNames({
        "menu": true,
        "vertical": vertical,
        "inline": inline
    }, className);

    return (
        <nav className={menuClass} {...props}>
            {children}
        </nav>
    );
};
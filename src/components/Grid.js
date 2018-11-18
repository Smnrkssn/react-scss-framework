import React from "react";
import {classNames, getOptionalClasses} from "../services/className";

export const Grid = ({
    className,
    gap = "15px",
    children,
    style = {},
    ...props
}) => {
    const gridClass = classNames({
        "grid": true,
        ...getOptionalClasses(props)
    }, className);

    const gridStyles = {
        gridGap: gap,
        ...style
    };

    return (
        <div className={gridClass} style={gridStyles}>
            {children}
        </div>
    );
};
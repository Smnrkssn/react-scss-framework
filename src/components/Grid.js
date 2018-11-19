import React from "react";
import {classNames, getOptionalClasses} from "../services/className";

export const Grid = ({
    className,
    columns,
    rows,
    dense,
    autoFlow,
    inline = false,
    gap = "15px",
    children,
    style = {},
    ...props
}) => {
    const isNumber = (value) => value && !isNaN(value);

    const gridClass = classNames({
        "grid": true,
        [`grid-col-${columns}`]: isNumber(columns),
        [`grid-row-${rows}`]: isNumber(rows),
        "inline-grid": inline,
        ...getOptionalClasses(props),
    }, className);

    const gridStyles = {
        gap: (isNumber(gap)) ? `${gap}px` : gap,
        gridAutoFlow: autoFlow,
        ...style
    };

    return (
        <div className={gridClass} style={gridStyles}>
            {children}
        </div>
    );
};
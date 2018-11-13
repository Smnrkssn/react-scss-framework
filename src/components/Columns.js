import React from "react";
import {classNames} from "../services/className";

export const Columns = ({
    className,
    unstackable = false,
    breakpoint,
    sizes = [],
    children,
    ...props
}) => {
    const columnsClass = classNames({
        "columns": true,
        "breakpoint": breakpoint,
        "unstackable": unstackable,
        [breakpoint]: breakpoint
    }, className, breakpoint);

    const getColumnClass = (index) => (!sizes[index]) ? "column" : `column-${sizes[index]}`;

    return (
        <div className={columnsClass} {...props}>
            {React.Children.map(children, (child, i) => (
                <div key={i} className={getColumnClass(i)}>
                    {child}
                </div>
            ))}
        </div>
    );
};
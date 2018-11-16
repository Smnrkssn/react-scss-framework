import React from "react";
import {classNames} from "../services/className";

export const Columns = ({
    className,
    unstackable = false,
    breakpoint,
    sizes = [],
    columnProps = {},
    children,
    ...props
}) => {
    const columnsClass = classNames({
        "columns": true,
        "breakpoint": breakpoint,
        "unstackable": unstackable,
        [breakpoint]: breakpoint
    }, className, breakpoint);

    const getColumnClass = (index, {size}) => {
        if(size) return `column-${size}`;
        return (!sizes[index]) ? "column" : `column-${sizes[index]}`;
    };

    return (
        <div className={columnsClass} {...props}>
            {React.Children.map(children, (child, i) => (
                (child.props.className !== "column") ? (
                    <div key={i} className={getColumnClass(i, child.props)} {...columnProps}>
                        {child}
                    </div>
                ) : React.cloneElement(child, {className: getColumnClass(i, child.props)})
            ))}
        </div>
    );
};
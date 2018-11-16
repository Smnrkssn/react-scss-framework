import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

export const Columns = ({
    className,
    segment = false,
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
        [breakpoint]: breakpoint,
        ...getOptionalClasses(props),
        "segment": segment
    }, className, breakpoint);

    const getColumnClass = (index, {size}) => {
        if(size) return `column-${size}`;
        return (!sizes[index]) ? "column" : `column-${sizes[index]}`;
    };

    return (
        <div className={columnsClass} {...filterOutOptionalClasses(props)}>
            {React.Children
                .toArray(children)
                .filter(children => children)
                .map((child, i) => (
                    (child.props.className && child.props.className.includes("column")) ? (
                        React.cloneElement(child, {className: getColumnClass(i, child.props)})
                    ) : (
                        <div key={i} className={getColumnClass(i, child.props)} {...columnProps}>
                            {child}
                        </div>
                    )
                ))}
        </div>
    );
};
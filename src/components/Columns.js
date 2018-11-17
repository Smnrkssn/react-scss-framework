import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

export const Columns = ({
    className,
    segment = false,
    unstackable = false,
    breakpoint,
    sizes = [],
    children,
    ...props
}) => {
    const filterOutColumnProps = ({columnClass, columnProps, ...props}) => props;

    const isColumn = (child) => {
        return child.props.className && child.props.className.includes("column");
    };

    const columnsClass = classNames({
        "columns": true,
        "breakpoint": breakpoint,
        "unstackable": unstackable,
        [breakpoint]: breakpoint,
        ...getOptionalClasses(props),
        "segment": segment
    }, className, breakpoint);

    const getColumnClass = (index, {columnClass}) => {
        if(columnClass) return `column ${columnClass}`;
        return (!sizes[index]) ? "column" : `column span-${sizes[index]}`;
    };

    return (
        <div className={columnsClass} {...filterOutOptionalClasses(props)}>
            {React.Children
                .toArray(children)
                .filter(children => children)
                .map((child, i) => (
                    (isColumn(child))
                        ? child
                        : (
                            <div
                                key={i}
                                className={getColumnClass(i, child.props)}
                                {...child.props.columnProps}
                            >{React.cloneElement({
                                ...child,
                                ...{props: filterOutColumnProps(child.props)}
                            })}</div>
                        )
                ))}
        </div>
    );
};
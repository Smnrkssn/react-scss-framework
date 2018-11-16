import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

export const Button = ({
    className,
    loading = false,
    outlined = false,
    disabled = false,
    children,
    ...props
}) => {
    const buttonClass = classNames({
        "button": true,
        "outlined": outlined,
        "loading": loading,
        "disabled": disabled,
        ...getOptionalClasses(props)
    }, className);

    return (
        <button
            disabled={disabled}
            className={buttonClass}
            {...filterOutOptionalClasses(props)}
        >{children}</button>
    );
};
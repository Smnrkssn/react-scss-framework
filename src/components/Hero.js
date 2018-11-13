import React from "react";
import {classNames} from "../services/className";

export const Hero = ({
    className = "",
    light = false,
    segment = false,
    inset = false,
    children,
    ...props
}) => {
    const heroClass = classNames({
        "hero": true,
        "light": light,
        "segment": segment,
        "inset": inset
    }, className);

    return (
        <div className={heroClass} {...props}>
            {children}
        </div>
    );
};
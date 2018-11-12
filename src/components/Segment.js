import React from "react";
import {classNames} from "../services/className";

const Segment = ({
    className = "",
    inline = false,
    light = false,
    glass = false,
    inset = false,
    attached = false,
    hero = false,
    children,
    ...props
}) => {
    const segmentClass = classNames({
        "segment": true,
        "inline": inline,
        "light": light,
        "glass": glass,
        "inset": inset,
        "hero": hero
    }, className);

    return (
        <div className={segmentClass} {...props}>
            {children}
        </div>
    );
};

Segment.List = ({className = "", children, ...props}) => (
    <div className={classNames("segment-list", className)} {...props}>
        {children}
    </div>
);

export default Segment;
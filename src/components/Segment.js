import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

const Segment = ({
    segment = true,
    className = "",
    children,
    ...props
}) =>  (
    <div className={classNames({
        ...getOptionalClasses(props),
        "segment": segment
    }, className)} {...filterOutOptionalClasses(props)}>{children}</div>
);

Segment.List = ({className = "", children, ...props}) => (
    <div className={classNames({
        ...getOptionalClasses(props),
        "segment-list": true
    }, className)} {...filterOutOptionalClasses(props)}>
        {children}
    </div>
);

export default Segment;
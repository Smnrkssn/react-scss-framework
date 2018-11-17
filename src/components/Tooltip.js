import React from "react";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

const Tooltip = ({
    segment = true,
    top = true,
    right,
    bottom,
    left = true,
    className,
    children,
    ...props
}) => (
    <div className={classNames({
        "tooltip": true,
        "top": top && !bottom,
        "right": right,
        "bottom": bottom,
        "left": left && !right,
        ...getOptionalClasses(props),
        "segment": segment
    }, className)} {...filterOutOptionalClasses(props)}>{children}</div>
);

Tooltip.Container = ({className, children, ...props}) => (
    <div className={classNames({"tooltip-container": true}, className)} {...props}>
        {children}
    </div>
);

Tooltip.Container.displayName = "Tooltip.Container";

export default Tooltip;
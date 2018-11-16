import React from "react";
import {classNames, filterOutOptionalClasses, getOptionalClasses} from "../services/className";

export const Message = ({
    message = true,
    heading,
    list = [],
    children,
    className,
    ...props
}) => {
    const messageClass = classNames({
        ...getOptionalClasses(props),
        "message": message
    }, className);

    return (
        <div className={messageClass} {...filterOutOptionalClasses(props)}>
            {(heading) && (<h4 className="heading">{heading}</h4>)}
            {(list.length > 0) && (
                <ul>
                    {list.map((listItem, i) => <li key={i}>{listItem}</li>)}
                </ul>
            )}
            {children}
        </div>
    );
};
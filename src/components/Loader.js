import React from "react";
import {joinClassNames} from "../services/className";

export const Loader = ({size = "medium", className = "", ...props}) => (
    <div className={joinClassNames(`loader-${size}`, className)} {...props}/>
);
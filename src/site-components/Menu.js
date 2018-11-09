import React from "react";
import {routes} from "../routes";
import {joinClassNames} from "../services/className";

export const Menu = ({className = "", ...props}) => (
    <aside className={joinClassNames("container-secondary color-white", className)} {...props}>
        <p><a href={routes.homePage}>Home</a></p>
        <p><a href={routes.typographyPage}>Typography</a></p>
        <p><a href={routes.alertsPage}>Alert</a></p>
        <p><a href={routes.messagesPage}>Message</a></p>
        <p><a href={routes.buttonsPage}>Buttons</a></p>
    </aside>
);
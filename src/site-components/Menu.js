import React from "react";
import {routes} from "../routes";
import {joinClassNames} from "../services/className";

export const Menu = ({className = "", ...props}) => (
    <aside className={joinClassNames("container-secondary color-white", className)} {...props}>
        <p><a href={routes.alertsPage}>Alerts</a></p>
        <p><a href={routes.buttonsPage}>Buttons</a></p>
        <p><a href={routes.homePage}>Home</a></p>
        <p><a href={routes.loadersPage}>Loaders</a></p>
        <p><a href={routes.messagesPage}>Messages</a></p>
        <p><a href={routes.tablesPage}>Tables</a></p>
        <p><a href={routes.typographyPage}>Typography</a></p>
    </aside>
);
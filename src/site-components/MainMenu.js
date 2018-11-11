import React from "react";
import {routes} from "../routes";
import {Menu} from "../components/Menu";

export const MainMenu = ({className = "", ...props}) => (
    <Menu vertical className="b-dark-gray" {...props}>
        <a href={routes.alertsPage}>Alerts</a>
        <a href={routes.blockquotePage}>Blockquote</a>
        <a href={routes.buttonsPage}>Buttons</a>
        <a href={routes.codePage}>Code</a>
        <a href={routes.formsPage}>Forms</a>
        <a href={routes.headingPage}>Heading</a>
        <a href={routes.homePage}>Home</a>
        <a href={routes.loadersPage}>Loaders</a>
        <a href={routes.menusPage}>Menus</a>
        <a href={routes.messagesPage}>Messages</a>
        <a href={routes.tablesPage}>Tables</a>
    </Menu>
);
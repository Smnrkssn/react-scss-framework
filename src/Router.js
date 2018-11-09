import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AlertsPage from "./pages/AlertsPage";
import MessagesPage from "./pages/MessagesPage";
import TypographyPage from "./pages/TypographyPage";
import {routes} from "./routes";
import ButtonsPage from "./pages/ButtonsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.homePage} component={HomePage}/>
                <Route exact path={routes.alertsPage} component={AlertsPage}/>
                <Route exact path={routes.messagesPage} component={MessagesPage}/>
                <Route exact path={routes.typographyPage} component={TypographyPage}/>
                <Route exact path={routes.buttonsPage} component={ButtonsPage}/>
            </Fragment>
        </BrowserRouter>
    );
};
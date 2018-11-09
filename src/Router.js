import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import AlertsPage from "./pages/AlertsPage";
import ButtonsPage from "./pages/ButtonsPage";
import HomePage from "./pages/HomePage";
import LoadersPage from "./pages/LoadersPage";
import MessagesPage from "./pages/MessagesPage";
import TablesPage from "./pages/TablesPage";
import TypographyPage from "./pages/TypographyPage";
import {routes} from "./routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.alertsPage} component={AlertsPage}/>
                <Route exact path={routes.buttonsPage} component={ButtonsPage}/>
                <Route exact path={routes.homePage} component={HomePage}/>
                <Route exact path={routes.loadersPage} component={LoadersPage}/>
                <Route exact path={routes.messagesPage} component={MessagesPage}/>
                <Route exact path={routes.tablesPage} component={TablesPage}/>
                <Route exact path={routes.typographyPage} component={TypographyPage}/>
            </Fragment>
        </BrowserRouter>
    );
};
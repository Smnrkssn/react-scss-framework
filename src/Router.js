import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import AccordionPage from "./pages/AccordionPage";
import AlertsPage from "./pages/AlertsPage";
import AnimationsPage from "./pages/AnimationsPage";
import ArticlePage from "./pages/ArticlePage";
import ButtonsPage from "./pages/ButtonsPage";
import ColumnsPage from "./pages/ColumnsPage";
import FormsPage from "./pages/FormsPage";
import HeroPage from "./pages/HeroPage";
import HomePage from "./pages/HomePage";
import LoadersPage from "./pages/LoadersPage";
import MenusPage from "./pages/MenusPage";
import MessagesPage from "./pages/MessagesPage";
import ProgressPage from "./pages/ProgressPage";
import SegmentsPage from "./pages/SegmentsPage";
import TablesPage from "./pages/TablesPage";
import TypographyPage from "./pages/TypographyPage";
import {routes} from "./routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.accordionPage} component={AccordionPage}/>
                <Route exact path={routes.alertsPage} component={AlertsPage}/>
                <Route exact path={routes.animationsPage} component={AnimationsPage}/>
                <Route exact path={routes.articlePage} component={ArticlePage}/>
                <Route exact path={routes.buttonsPage} component={ButtonsPage}/>
                <Route exact path={routes.columnsPage} component={ColumnsPage}/>
                <Route exact path={routes.formsPage} component={FormsPage}/>
                <Route exact path={routes.heroPage} component={HeroPage}/>
                <Route exact path={routes.homePage} component={HomePage}/>
                <Route exact path={routes.loadersPage} component={LoadersPage}/>
                <Route exact path={routes.menusPage} component={MenusPage}/>
                <Route exact path={routes.messagesPage} component={MessagesPage}/>
                <Route exact path={routes.progressPage} component={ProgressPage}/>
                <Route exact path={routes.segmentsPage} component={SegmentsPage}/>
                <Route exact path={routes.tablesPage} component={TablesPage}/>
                <Route exact path={routes.typographyPage} component={TypographyPage}/>
            </Fragment>
        </BrowserRouter>
    );
};
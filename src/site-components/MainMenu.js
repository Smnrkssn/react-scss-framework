import React, {Component} from "react";
import {routes} from "../routes";
import HidingMenu from "../components/HidingMenu";
import {joinClassNames} from "../services/className";
import {withRouter} from 'react-router-dom';

class MainMenu extends Component {
    withoutRouterExtras = ({history, match, staticContext, ...props}) => props;

    render(){
        const {
            className,
            location,
            ...props
        } = this.withoutRouterExtras(this.props);
        
        return (
            <HidingMenu
                id="main-menu"
                vertical
                breakpoint="md"
                containerProps={{
                    className: "scrollable fixed-md w-25 w-100-md b-dark-gray h-100 h-0-md"
                }}
                mobileMenuProps={{
                    className: joinClassNames("b-dark-gray w-100-md", className)
                }}
                mobileMenuItemClass="grow"
                className={joinClassNames("fixed static-md w-25", className)}
                {...props}
            >
                <h3 className="effectless menu-item">
                    <a href={routes.homePage}>
                        SCSS Framework
                    </a>
                </h3>
                <a href={routes.alertsPage} 
                   className={location.pathname === routes.alertsPage ? "active" : ""}>
                    Alerts
                </a>
                <a href={routes.animationsPage} 
                   className={location.pathname === routes.animationsPage ? "active" : ""}>
                    Animations
                </a>
                <a href={routes.articlePage} 
                   className={location.pathname === routes.articlePage ? "active" : ""}>
                    Article
                </a>
                <a href={routes.buttonsPage} 
                   className={location.pathname === routes.buttonsPage ? "active" : ""}>
                    Buttons
                </a>
                <a href={routes.formsPage} 
                   className={location.pathname === routes.formsPage ? "active" : ""}>
                    Forms
                </a>
                <a href={routes.heroPage} 
                   className={location.pathname === routes.heroPage ? "active" : ""}>
                    Hero
                </a>
                <a href={routes.loadersPage} 
                   className={location.pathname === routes.loadersPage ? "active" : ""}>
                    Loaders
                </a>
                <a href={routes.menusPage} 
                   className={location.pathname === routes.menusPage ? "active" : ""}>
                    Menus
                </a>
                <a href={routes.messagesPage} 
                   className={location.pathname === routes.messagesPage ? "active" : ""}>
                    Messages
                </a>
                <a href={routes.progressPage} 
                   className={location.pathname === routes.progressPage ? "active" : ""}>
                    Progress
                </a>
                <a href={routes.segmentsPage} 
                   className={location.pathname === routes.segmentsPage ? "active" : ""}>
                    Segments
                </a>
                <a href={routes.tablesPage} 
                   className={location.pathname === routes.tablesPage ? "active" : ""}>
                    Tables
                </a>
                <a href={routes.typographyPage} 
                   className={location.pathname === routes.typographyPage ? "active" : ""}>
                    Typography
                </a>
            </HidingMenu>
        );
    }
}

export default withRouter(MainMenu);
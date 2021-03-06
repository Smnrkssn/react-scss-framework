import React, {Component} from "react";
import {routes} from "../routes";
import HidingMenu from "../components/HidingMenu";
import {joinClassNames} from "../services/className";
import {withRouter} from 'react-router-dom';
import $ from "jquery";
import Accordion from "../components/Accordion";
import {Menu} from "../components/Menu";

class MainMenu extends Component {
    withoutRouterExtras = ({history, match, staticContext, ...props}) => props;

    componentWillUnmount(){
        $("body").removeClass("prevent-scroll-md");
    }

    getInitialElementsToShow = () => {
        console.log(this.props.location);
        if(this.props.location.pathname === routes.homePage) return [];

        switch(this.props.location.pathname){
        case routes.gridPage:
        case routes.columnsPage:
        case routes.segmentsPage:
        case routes.heroPage:
            return [0];
        case routes.articlePage:
        case routes.typographyPage:
        case routes.animationsPage:
            return [2];
        default:
            return [1];
        }
    };

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
                stateReducer={(state, changes) => {
                    if(changes.showMenu){
                        $("body").addClass("prevent-scroll-md");
                    } else {
                        $("body").removeClass("prevent-scroll-md");
                    }

                    return changes;
                }}
                {...props}
            >
                <h3 className="effectless menu-item">
                    <a href={routes.homePage}>
                        SCSS Framework
                    </a>
                </h3>
                <Accordion initialElementsToShow={this.getInitialElementsToShow()}>
                    <Accordion.Toggle content="Layout">
                        <Menu vertical light className="b-dark-gray">
                            <a href={routes.gridPage}
                               className={location.pathname === routes.gridPage ? "active" : ""}>
                                Grid
                            </a>
                            <a href={routes.columnsPage}
                               className={location.pathname === routes.columnsPage ? "active" : ""}>
                                Columns
                            </a>
                            <a href={routes.segmentsPage}
                               className={location.pathname === routes.segmentsPage ? "active" : ""}>
                                Segments
                            </a>
                            <a href={routes.heroPage}
                               className={location.pathname === routes.heroPage ? "active" : ""}>
                                Hero
                            </a>
                        </Menu>
                    </Accordion.Toggle>
                    <Accordion.Toggle content="Components">
                        <Menu vertical light className="b-dark-gray">
                            <a href={routes.accordionPage}
                               className={location.pathname === routes.accordionPage ? "active" : ""}>
                                Accordion
                            </a>
                            <a href={routes.alertsPage}
                               className={location.pathname === routes.alertsPage ? "active" : ""}>
                                Alerts
                            </a>
                            <a href={routes.buttonsPage}
                               className={location.pathname === routes.buttonsPage ? "active" : ""}>
                                Buttons
                            </a>
                            <a href={routes.formsPage}
                               className={location.pathname === routes.formsPage ? "active" : ""}>
                                Forms
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
                            <a href={routes.slideshowPage}
                               className={location.pathname === routes.slideshowPage ? "active" : ""}>
                                Slideshow
                            </a>
                            <a href={routes.tablesPage}
                               className={location.pathname === routes.tablesPage ? "active" : ""}>
                                Tables
                            </a>
                            <a href={routes.tooltipPage}
                               className={location.pathname === routes.tooltipPage ? "active" : ""}>
                                Tooltip
                            </a>
                        </Menu>
                    </Accordion.Toggle>
                    <Accordion.Toggle content="Content">
                        <Menu vertical light className="b-dark-gray">
                            <a href={routes.articlePage}
                               className={location.pathname === routes.articlePage ? "active" : ""}>
                                Article
                            </a>
                            <a href={routes.animationsPage}
                               className={location.pathname === routes.animationsPage ? "active" : ""}>
                                Animations
                            </a>
                            <a href={routes.typographyPage}
                               className={location.pathname === routes.typographyPage ? "active" : ""}>
                                Typography
                            </a>
                        </Menu>
                    </Accordion.Toggle>
                </Accordion>
            </HidingMenu>
        );
    }
}

export default withRouter(MainMenu);
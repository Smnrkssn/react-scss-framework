import React, {Component} from "react";
import {compose} from "redux";
import PropTypes from "prop-types";
import {Menu} from "./Menu";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

class HidingMenu extends Component {
    static defaultProps = {
        breakpoint: "sm",
        className: "",
        containerProps: {},
        mobileMenuProps: {},
        mobileMenuItemProps: {},
        mobileMenuChildren: null,
        mobileMenuItemClass: "",
        mobileIcon: <i className="fas fa-bars"/>,
        stateReducer: (state, changes) => changes,
        onStateChange: () => {}
    };

    static propTypes = {
        breakpoint: PropTypes.oneOf(["lg", "md", "sm", "xs", "xxs"]),
        containerProps: PropTypes.object,
        mobileMenuProps: PropTypes.object,
        mobileMenuItemProps: PropTypes.object,
        mobileIcon: PropTypes.element,
        mobileMenuItemClass: PropTypes.string,
        stateReducer: PropTypes.func,
        onStateChange: PropTypes.func
    };

    state = {
        showMenu: false
    };

    internalSetState = (changes, callback = () => {}) => {
        let allChanges;

        this.setState(() => {
            allChanges = this.props.stateReducer(this.state, changes);
            return allChanges;
        }, () => {
            this.props.onStateChange(allChanges);
            callback(allChanges);
        });
    };

    toggleShowMenu = () => this.internalSetState({showMenu: !this.state.showMenu});

    filterOutExtraProps = ({stateReducer, onStateChange, ...props}) => props;

    render(){
        const {
            className,
            breakpoint,
            mobileIcon,
            containerProps,
            mobileMenuProps,
            mobileMenuChildren,
            mobileMenuItemProps,
            mobileMenuItemClass,
            children,
            ...props
        } = this.props;

        const menuClass = classNames({
            [`hide-${breakpoint}`]: true,
            [`vertical-${breakpoint}`]: true,
            [`w-100-${breakpoint}`]: true,
            ...getOptionalClasses(props),
            "show": this.state.showMenu
        }, className);

        const menuItemClass = classNames({
            "menu-item": true,
            [`show-${breakpoint}`]: true,
            "active": this.state.showMenu
        }, mobileMenuItemClass);

        return (
            <Menu {...containerProps}>
                <Menu {...mobileMenuProps}>
                    <div
                        className={menuItemClass}
                        onClick={this.toggleShowMenu}
                        {...mobileMenuItemProps}
                    >{mobileIcon}</div>
                    {mobileMenuChildren}
                </Menu>
                <Menu className={menuClass} {...compose(
                    filterOutOptionalClasses,
                    this.filterOutExtraProps
                )(props)}>
                    {children}
                </Menu>
            </Menu>
        );
    }
}

export default HidingMenu;
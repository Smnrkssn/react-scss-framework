import React, {Component, Fragment} from "react";
import {Menu} from "./Menu";
import {classNames} from "../services/className";

class Accordion extends Component {
    static Toggle = ({content, ...props}) => (
        <div {...props}>{content}</div>
    );

    state = {
        elementsToShow: []
    };

    getToggleClass = (i, {className}) => classNames({
        "menu-item": true,
        "active": this.state.elementsToShow.includes(i)
    }, className);

    getContentClass = (i) => classNames({
        "hide": !this.state.elementsToShow.includes(i)
    });

    toggleElementToShow = (i) => () => this.setState((prevState => ({
        elementsToShow: (prevState.elementsToShow.includes(i))
            ? prevState.elementsToShow.filter(index => index !== i)
            : [i, ...prevState.elementsToShow]
    })));

    render(){
        const {children, ...props} = this.props;

        return (
            <Menu vertical {...props}>
                {React.Children.map(children, (child, i) => (
                    <Fragment key={i}>
                        {React.cloneElement(child, {
                            className: this.getToggleClass(i, child.props),
                            onClick: (child.props.onClick)
                                ? (event) => child.props.onClick(event, i)
                                : this.toggleElementToShow(i)
                        })}
                        {(child.props.onClick) ? (
                            child.props.children
                        ) : (
                            <div className={this.getContentClass(i)}>
                                {child.props.children}
                            </div>
                        )}
                    </Fragment>
                ))}
            </Menu>
        );
    }
}

export default Accordion;
import React, {Component} from "react";
import {joinClassNames, classNames} from "../services/className";
import PropTypes from "prop-types";
import {Animation} from "./Animation";

class Slideshow extends Component {
    static animationStatus = {
        idle: "idle",
        out: "out",
        in: "in"
    };

    static defaultProps = {
        className: "",
        leftIcon: <i className="fas fa-angle-left"/>,
        rightIcon: <i className="fas fa-angle-right"/>,
        animation: "fadeIn",
        outAnimation: "fadeOut",
        duration: 400,
        autoplaySpeed: 0,
        onStateChange: () => {},
        stateReducer: (state, changes) => changes
    };

    static propTypes = {
        onStateChange: PropTypes.func,
        stateReducer: PropTypes.func,
        duration: PropTypes.number,
        animation: PropTypes.string
    };

    constructor(props){
        super(props);

        this.state = {
            active: 0,
            canChangeSlide: true,
            animationStatus: Slideshow.animationStatus.idle
        }
    }

    componentDidMount(){
        if(this.autoplayIsEnabled()){
            this.timer = setInterval(() => {
                this.setActiveState((prevActive) =>
                    (prevActive+1 < React.Children.count(this.props.children))
                        ? prevActive+1
                        : 0,
                );
            }, this.props.autoplaySpeed);
        }
    }

    componentWillUnmount(){
        if(this.autoplayIsEnabled()){
            clearInterval(this.timer);
        }
    }

    sleep = (duration) => new Promise(resolve => setTimeout(() => resolve(), duration));

    autoplayIsEnabled = () => (this.props.autoplaySpeed > 0);

    awaitAnimation = () => this.sleep(this.props.duration);

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

    setActiveState = (activeUpdater) => {
        this.internalSetState({
            canChangeSlide: false,
            animationStatus: Slideshow.animationStatus.out
        }, () => {
            this.awaitAnimation().then(() => {
                this.internalSetState({
                    active: activeUpdater(this.state.active),
                    animationStatus: Slideshow.animationStatus.in
                }, () => {
                    this.awaitAnimation().then(() => {
                        this.internalSetState({
                            canChangeSlide: true,
                            animationStatus: Slideshow.animationStatus.idle
                        });
                    });
                });
            });
        });
    };

    removeExtraProps = ({
        autoplaySpeed,
        onStateChange,
        stateReducer,
        duration,
        ...props
    }) => props;

    render(){
        const {
            children,
            leftIcon,
            rightIcon,
            animation,
            outAnimation,
            className,
            ...props
        } = this.removeExtraProps(this.props);

        const {
            animationStatus,
            canChangeSlide
        } = this.state;

        const childrenCount = React.Children.count(children);
        const rightIconClass = classNames({
            "unclickable": !canChangeSlide,
            "disabled": !canChangeSlide
        }, rightIcon.props.className);
        const leftIconClass = classNames({
            "unclickable": !canChangeSlide,
            "disabled": !canChangeSlide,
        }, leftIcon.props.className);

        return (
            <div className={joinClassNames("slideshow", className)} {...props}>
                {React.cloneElement(leftIcon, {
                    className: leftIconClass,
                    onClick: () => {
                        if(canChangeSlide){
                            this.setActiveState((prevActive) =>
                                ((prevActive-1 >= 0) ? prevActive-1 : childrenCount - 1)
                            );
                        }
                    }
                })}
                {React.Children.map(children, (child, i) => (
                    (this.state.active === i) ? (
                        <Animation
                            key={animationStatus}
                            duration={this.props.duration}
                            animation={
                                (animationStatus === Slideshow.animationStatus.out)
                                    ? outAnimation
                                    : (animationStatus === Slideshow.animationStatus.in)
                                        ? animation : ""
                            }
                        >
                            {child}
                        </Animation>
                    ) : null
                ))}
                {React.cloneElement(rightIcon, {
                    className: rightIconClass,
                    onClick: () => {
                        if(canChangeSlide){
                            this.setActiveState((prevActive) =>
                                (prevActive+1 < childrenCount) ? prevActive+1 : 0,
                            );
                        }
                    }
                })}
            </div>
        );
    }
}

export default Slideshow;
import classnames from 'classnames';

export const className = (string = "") =>{
    return (string === "") ? {} : {
        className: string
    };
};

export const classNames = (optionalClasses, className2 = "") =>{
    return classnames(optionalClasses, className2);
};

export const joinClassNames = (className1, className2 = "") =>{
    return (className2 === '') ? className1 : [className1, className2].join(' ');
};

export const getOptionalClasses = ({
    segment,
    message,
    inverted,
    wrapper,
    container,
    tooltip,
    inline,
    light,
    glass,
    inset,
    hero,
    show
}) => ({
    "segment": segment,
    "message": message,
    "inverted": inverted,
    [`wrapper-${wrapper}`]: wrapper,
    [`container-${container}`]: container,
    "tooltip-container": tooltip,
    "inline": inline,
    "light": light,
    "glass": glass,
    "inset": inset,
    "hero": hero,
    "show": show,
    "hide": !show && typeof show === "boolean",
    "controlled": typeof show === "boolean"
});

export const filterOutOptionalClasses = ({
    segment,
    inverted,
    message,
    wrapper,
    container,
    tooltip,
    inline,
    light,
    glass,
    inset,
    hero,
    show,
    ...props
}) => props;
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
    disabled,
    thickened,
    thinned,
    segment,
    loading,
    padder,
    message,
    inverted,
    wrapper,
    container,
    tooltip,
    inline,
    light,
    dark,
    glass,
    inset,
    hero,
    show
}) => ({
    "disabled": disabled,
    "segment": segment,
    "thickened": thickened,
    "thinned": thinned,
    "message": message,
    "inverted": inverted,
    "loading": loading,
    [`wrapper-${wrapper}`]: typeof wrapper === "number",
    [`container-${container}`]: typeof container === "number",
    [`padder-${padder}`]: typeof padder === "number",
    "tooltip-container": tooltip,
    "inline": inline,
    "light": light,
    "dark": dark,
    "glass": glass,
    "inset": inset,
    "hero": hero,
    "show": show,
    "hide": !show && typeof show === "boolean",
    "controlled": typeof show === "boolean"
});

export const filterOutOptionalClasses = ({
    segment,
    loading,
    thickened,
    thinned,
    padder,
    inverted,
    message,
    wrapper,
    container,
    tooltip,
    inline,
    light,
    dark,
    glass,
    inset,
    hero,
    show,
    ...props
}) => props;
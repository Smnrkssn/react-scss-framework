import React from "react";
import {Columns} from "./Columns";
import {classNames} from "../services/className";

const Form = ({className, children, ...props}) => (
    <form className={classNames({"form": true}, className)} {...props}>
        {children}
    </form>
);

Form.Columns = ({children, ...props}) => {
    let columns = [];
    let columnChildren = [];

    React.Children.forEach(children, (child, i) => {
        if(child.props.className === "column"){
            columns.push(child);
        } else {
            columnChildren.push(child);

            if(child.type !== "label"){
                columns.push(React.createElement("div", {
                    className: "column",
                    size: child.props.size,
                    key: i
                }, columnChildren));
                columnChildren = [];
            }
        }
    });

    return (
        <Columns {...props}>
            {columns}
        </Columns>
    );
};

export default Form;
import React from "react";
import {compose} from "redux";
import {classNames, getOptionalClasses, filterOutOptionalClasses} from "../services/className";

export const filterOutTableOptions = ({
    className,
    sortable,
    collapse,
    striped,
    clickable,
    ...props
}) => props;

export const getTableClass = (tableType, {
    className,
    collapse,
    striped,
    sortable,
    clickable,
    ...props
}) => classNames({
    [tableType]: true,
    "striped": striped,
    "clickable": clickable,
    "sortable": sortable,
    "collapse": collapse,
    ...getOptionalClasses(props)
}, className);

export const Table = ({children, ...props}) => (
    <table
        className={getTableClass("table", props)}
        {...compose(filterOutTableOptions, filterOutOptionalClasses)(props)}
    >{children}</table>
);

export const StackedTable = ({children, ...props}) => (
    <table
        className={getTableClass("stacked-table", props)}
        {...compose(filterOutTableOptions, filterOutOptionalClasses)(props)}
    >{children}</table>
);

export const DefinitionTable = ({children, ...props}) => (
    <table
        className={getTableClass("definition-table", props)}
        {...compose(filterOutTableOptions, filterOutOptionalClasses)(props)}
    >{children}</table>
);

export const ListTable = ({children, ...props}) => (
    <table
        className={getTableClass("list-table", props)}
        {...compose(filterOutTableOptions, filterOutOptionalClasses)(props)}
    >{children}</table>
);
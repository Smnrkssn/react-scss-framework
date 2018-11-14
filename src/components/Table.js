import React from "react";
import {classNames} from "../services/className";

const filterOutTableOptions = ({
    className,
    sortable,
    collapse,
    striped,
    clickable,
    light,
    ...props
}) => props;

const getTableClass = (tableType, {
    className,
    collapse,
    striped,
    sortable,
    clickable,
    light
}) => classNames({
    [tableType]: true,
    "striped": striped,
    "clickable": clickable,
    "sortable": sortable,
    "collapse": collapse,
    "light": light
}, className);

export const Table = ({children, ...props}) => (
    <table className={getTableClass("table", props)} {...filterOutTableOptions(props)}>
        {children}
    </table>
);

export const StackedTable = ({children, ...props}) => (
    <table className={getTableClass("stacked-table", props)} {...filterOutTableOptions(props)}>
        {children}
    </table>
);

export const DefinitionTable = ({children, ...props}) => (
    <table className={getTableClass("definition-table", props)} {...filterOutTableOptions(props)}>
        {children}
    </table>
);

export const ListTable = ({children, ...props}) => (
    <table className={getTableClass("list-table", props)} {...filterOutTableOptions(props)}>
        {children}
    </table>
);
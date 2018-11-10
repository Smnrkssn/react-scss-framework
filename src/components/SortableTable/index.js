import React, {Component, Fragment} from "react";
import TableSorter from "./TableSorter";
import $ from "jquery";
import {joinClassNames} from "../../services/className";

class SortableTable extends Component {
    static defaultProps = {
        id: "sortable-table",
        onTableSorterMount: () => {},
        body: [],
        head: [],
        className: ""
    };

    componentDidMount(){
        this.tablesorter = new TableSorter($(`#${this.props.id}`));
        this.props.onTableSorterMount(this.tablesorter);
    }

    componentWillUnmount(){
        this.tablesorter.turnOffSorting();
    }

    renderBodyColumns = (columns, i) => {
        return (
            <tr key={i}>
                {columns.map((column, j) => (
                    (typeof column === "string")
                        ? <td key={j}>{column}</td>
                        : React.cloneElement(column, {key: j})
                ))}
            </tr>
        );
    };

    renderHeadColumns = (column, i) => {
        return (typeof column === "string")
            ? <th key={i}>{column}</th>
            : React.cloneElement(column, {key: i});
    };

    renderData = () => {
        return (
            <Fragment>
                <thead>
                    <tr>
                        {this.props.head.map(this.renderHeadColumns)}
                    </tr>
                </thead>
                <tbody>
                    {this.props.body.map(this.renderBodyColumns)}
                </tbody>
            </Fragment>
        );
    };

    render(){
        return (
            <table id={this.props.id} className={joinClassNames(
                "table sortable",
                this.props.className
            )}>
                {(this.props.body.length > 0 && this.props.head.length > 0)
                    ? this.renderData()
                    : this.props.children}
            </table>
        );
    }
}

export default SortableTable;
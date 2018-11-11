import React, {Component} from "react";
import {joinClassNames} from "../services/className";
import _ from "lodash";

class SortableTable extends Component {
    static defaultProps = {
        className: ""
    };

    constructor(props){
        super(props);

        this.state = {
            table: this.buildTable(props.children),
            direction: "none",
            clickedColumn: -1
        };
    }

    buildTable = (children) => {
        this.thead = children[0];
        this.theadTr = this.thead.props.children;
        this.ths = this.theadTr.props.children;
        const headings = this.ths.map(th => th.props.children);

        this.tbody = children[1];
        this.tbodyTrs = this.tbody.props.children;

        return this.tbodyTrs.map(tr => headings.map((th, i) => ({
            [th]: tr.props.children[i].props.children
        })).reduce((acc, next) => Object.assign({}, acc, next)));
    };

    sortBy = (th, column) => async () => {
        const {clickedColumn, direction, table} = this.state;

        const ascending = clickedColumn !== column || direction !== "asc";
        const sortDirection = (ascending) ? "asc" : "desc";

        this.setState({
            table: _.orderBy(table, [th], [sortDirection]),
            direction: sortDirection,
            clickedColumn: column
        });
    };

    getHeadingClass = (column, className) => {
        if(className === "no-sort") return "";

        const {clickedColumn, direction} = this.state;

        return (clickedColumn === column) ? `sortable ${direction}` : "sortable";
    };

    getHeadingProps = (th, column, heading) => {
        const className = (th.props.className) ? th.props.className : "";

        return Object.assign({}, {
            onClick: (className.includes("no-sort")) ? () => {} : this.sortBy(heading, column)
        }, th.props, {
            className: (className.includes("no-sort"))
                ? className
                : joinClassNames(this.getHeadingClass(column, className), className)
        });
    };

    render(){
        const {className, children, ...props} = this.props;
        const {table} = this.state;

        return (
            <table className={joinClassNames("table sortable", className)} {...props}>
                <thead {...this.thead.props}>
                    <tr {...this.theadTr.props}>
                        {Object.keys(this.state.table[0]).map((th, i) => (
                            <th key={i}
                                {...this.getHeadingProps(this.ths[i], i, th)}
                            >{th}</th>
                        ))}
                    </tr>
                </thead>
                <tbody {...this.tbody.props}>
                    {this.state.table.map((row, i) => (
                        <tr key={i} {...this.tbodyTrs[i].props}>
                            {Object.values(row).map((td, j) => (
                                <td key={j} {...this.tbodyTrs[i].props.children[j].props}>{td}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default SortableTable;
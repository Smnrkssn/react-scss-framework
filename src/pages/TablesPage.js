import React, {Component} from "react";
import {Page} from "../site-components/Page";
import SortableTable from "../components/SortableTable";
import {colors} from "../services/colors";

class TablesPage extends Component {
    render() {
        return (
            <Page>
                <h3>Tables</h3>
                <div>
                    <table className={`table striped sortable clickable mb-30`}>
                        <thead>
                        <tr>
                            <th>Heading 1</th>
                            <th>Heading 2</th>
                            <th>Heading 3</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Sortable Table</h3>
                <SortableTable className="mb-30">
                    <thead>
                        <tr>
                            <th className="no-sort">Column with sort disabled</th>
                            <th className="bg-color-b-red">Heading 2</th>
                            <th>Heading 3</th>
                        </tr>
                    </thead>
                    <tbody className="head">
                        <tr className="head">
                            <td className="head">Data 2</td>
                            <td>23</td>
                            <td>Female</td>
                        </tr>
                        <tr>
                            <td>Data 3</td>
                            <td>17</td>
                            <td>Male</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>37</td>
                            <td>Robot</td>
                        </tr>
                    </tbody>
                </SortableTable>
                <h3>Definition Table</h3>
                <table className="definition-table collapse mb-30">
                    <tbody>
                        <tr>
                            <td>Heading 1</td>
                            <td>Data 1</td>
                            <td>Data 2</td>
                        </tr>
                        <tr>
                            <td>Heading 2</td>
                            <td>Data 1</td>
                            <td>Data 2</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Stacked Table</h3>
                <table className="stacked-table mb-30">
                    <tbody>
                        <tr>
                            <td>Heading 1</td>
                            <td>Data 1</td>
                        </tr>
                        <tr>
                            <td>Heading 2</td>
                            <td>Data 2</td>
                        </tr>
                    </tbody>
                </table>
                <h3>List Table</h3>
                <table className="list-table mb-30">
                    <tbody>
                    <tr>
                        <td>List item 1</td>
                        <td>List item 2</td>
                    </tr>
                    <tr>
                        <td>List item 4</td>
                        <td>List item 5</td>
                    </tr>
                    </tbody>
                </table>
                <h3>Color Tables (works for all table types)</h3>
                {[...colors, ...colors.map(color => `${color} dark`)].map((color, i) => (
                    <table key={i} className={`table striped sortable clickable ${color} mb-30`}>
                        <thead>
                        <tr>
                            <th>Heading 1</th>
                            <th>Heading 2</th>
                            <th>Heading 3</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        <tr>
                            <td>Data 1</td>
                            <td>Data 2</td>
                            <td>Data 3</td>
                        </tr>
                        </tbody>
                    </table>
                ))}
            </Page>
        );
    }
}

export default TablesPage;
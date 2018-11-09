import React, {Component} from "react";
import {Page} from "../site-components/Page";

class TablesPage extends Component {
    render() {
        return (
            <Page>
                <h3>Tables</h3>
                <table className="table striped collapse mb-30">
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
                <table className="list-table">
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
            </Page>
        );
    }
}

export default TablesPage;
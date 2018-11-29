import React, {Component} from "react";
import {Page} from "../site-components/Page";
import SortableTable from "../components/SortableTable";
import {Table, StackedTable, DefinitionTable, ListTable} from "../components/Table";
import {colors} from "../services/colors";
import SourceContainer from "../components/SourceContainer";

class TablesPage extends Component {
    render() {
        return (
            <Page>
                <h2>Tables</h2>
                <hr/>
                <div className="container-4">
                    <SourceContainer>
                        <Table striped sortable clickable>
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
                        </Table>
                    </SourceContainer>
                    <h3>Sortable Table</h3>
                    <SourceContainer>
                        <SortableTable>
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
                    </SourceContainer>
                    <h3>Definition Table</h3>
                    <SourceContainer>
                        <DefinitionTable collapse>
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
                        </DefinitionTable>
                    </SourceContainer>
                    <h3>Stacked Table</h3>
                    <SourceContainer>
                        <StackedTable>
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
                        </StackedTable>
                    </SourceContainer>
                    <h3>List Table</h3>
                    <SourceContainer>
                        <ListTable>
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
                        </ListTable>
                    </SourceContainer>
                    <h3>Color Tables (works for all table types)</h3>
                    {[...colors.map(color => `${color} light`), ...colors].map((color, i) => (
                        <SourceContainer key={i}>
                            <Table striped sortable clickable className={`${color}`}>
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
                            </Table>
                        </SourceContainer>
                    ))}
                </div>
            </Page>
        );
    }
}

export default TablesPage;
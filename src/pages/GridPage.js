import React, {Component} from "react";
import {Page} from "../site-components/Page";
import Segment from "../components/Segment";
import {Grid} from "../components/Grid";
import SourceContainer from "../components/SourceContainer";
import Form from "../components/Form";
import {AndroidCheckbox} from "../components/Checkboxes";

class GridPage extends Component {
    state = {
        elements: 2,
        columns: "",
        rows: "",
        gap: 15,
        selected: 1,
        elementsProps: {
            "1": {},
            "2": {}
        },
        autoFlow: false,
        inline: false
    };

    updateElementProp = (event, prop) => {
        let value = event.target.value;

        this.setState((prevState) => ({
            elementsProps: {
                ...prevState.elementsProps,
                [prevState.selected]: {
                    ...prevState.elementsProps[prevState.selected],
                    [prop]: value
                }
            }
        }))
    };

    getElementClass = (element) => {
        const {elementsProps} = this.state;

        let className = "secondary";

        if(!elementsProps[element]) return className;

        if(elementsProps[element].columnSpan && !isNaN(elementsProps[element].columnSpan)){
            className += ` col-span-${elementsProps[element].columnSpan}`;
        }

        if(elementsProps[element].rowSpan && !isNaN(elementsProps[element].rowSpan)){
            className += ` row-span-${elementsProps[element].rowSpan}`;
        }

        return className;
    };

    render(){
        const {
            elements,
            columns,
            rows,
            gap,
            selected,
            elementsProps,
            autoFlow,
            inline
        } = this.state;
        console.log(this.state);

        return (
            <Page>
                <h2>CSS Grid</h2>
                <hr/>
                <Form message className="white mb-15">
                    <Form.Columns>
                        <label>Elements</label>
                        <input
                            value={elements}
                            onChange={(event) => this.setState({elements: event.target.value})}
                            type="number"
                        />
                        <label>Columns</label>
                        <input
                            value={columns}
                            onChange={(event) => this.setState({columns: event.target.value})}
                            type="number"
                        />
                        <label>Rows</label>
                        <input
                            value={rows}
                            onChange={(event) => this.setState({rows: event.target.value})}
                            type="number"
                        />
                        <label>Gap</label>
                        <input
                            value={gap}
                            onChange={(event) => this.setState({gap: event.target.value})}
                            type="number"
                        />
                    </Form.Columns>
                    <Form.Columns>
                        <label>Element</label>
                        <select
                            onChange={(event) => {
                                let selected = event.target.value.replace("Element ", "");
                                this.setState({selected});
                            }}
                        >
                            {Array
                                .from({length: elements}, (v, k) => k+1)
                                .map((element) => (
                                    <option key={element}>Element {element}</option>
                                ))}
                        </select>
                        <label>Column Span</label>
                        <input
                            value={(elementsProps[selected] && elementsProps[selected].columnSpan)
                                ? elementsProps[selected].columnSpan : ""}
                            onChange={(event) => this.updateElementProp(event, "columnSpan")}
                            type="number"
                        />
                        <label>Row Span</label>
                        <input
                            value={(elementsProps[selected] && elementsProps[selected].rowSpan)
                                ? elementsProps[selected].rowSpan : ""}
                            onChange={(event) => this.updateElementProp(event, "rowSpan")}
                            type="number"
                        />
                    </Form.Columns>
                    <Form.Columns sizes={[4, "auto"]}>
                        <label>Grid Auto Flow</label>
                        <select
                            value={(!autoFlow) ? "none" : autoFlow}
                            onChange={(event) => this.setState({
                                autoFlow: (event.target.value === "none")
                                    ? null : event.target.value
                            })}
                        >
                            <option>none</option>
                            <option>row</option>
                            <option>row dense</option>
                            <option>column</option>
                            <option>column dense</option>
                        </select>
                        <div className="column span-2 span-3-sm span-4-xs">
                            <Form.Columns>
                                <label>Inline</label>
                                <AndroidCheckbox
                                    id={`inline-checkbox`}
                                    checked={this.state.inline}
                                    onChange={(event) => this.setState({
                                        inline: event.target.checked
                                    })}
                                />
                            </Form.Columns>
                        </div>
                    </Form.Columns>
                </Form>
                <SourceContainer>
                    <Grid
                        gap={gap}
                        columns={columns}
                        rows={rows}
                        inline={inline}
                        autoFlow={autoFlow}
                    >
                        {Array
                            .from({length: this.state.elements}, (v, k) => k+1)
                            .map((element) => (
                                <Segment
                                    className={this.getElementClass(element)}
                                    key={element}>
                                    <h2 className="mb-0">{element}</h2>
                                </Segment>
                            ))}
                    </Grid>
                </SourceContainer>
            </Page>
        );
    }
}

export default GridPage;
import React, {Component} from "react";
import Form from "../components/Form";
import {AndroidCheckbox} from "../components/Checkboxes";
import {ColorDropdown} from "../components/ColorDropdown";
import {Columns} from "../components/Columns";

export default (state = null) => (ChildComponent) => (
    class OptionsForm extends Component {
        constructor(props){
            super(props);

            const defaultState = {
                className: "white",
                inverted: false,
                segment: false,
                message: false,
                light: false,
                glass: false,
                inset: false,
                hero: false
            };

            this.state = (state) ? state : defaultState;
        };

        renderForm = ({children, ...props}) => {
            return (
                <Form segment inset className="mb-15" {...props}>
                    <Columns className="pt-30">
                        {this.state.className && (
                            <div className="column" size={3}>
                                <label>color</label>
                                <ColorDropdown
                                    className="inline"
                                    value={this.state.className}
                                    onChange={(event) => {
                                        this.setState({className: event.target.value});
                                    }}
                                />
                            </div>
                        )}
                        <Columns>
                            {Object.keys(this.state)
                                .filter(state => state !== "className")
                                .map((state, i) => (
                                    <div className="column" size={2} key={i}>
                                        <label>{state}</label>
                                        <AndroidCheckbox
                                            id={`checkbox-${i}`}
                                            checked={this.state[state]}
                                            onChange={(event) => this.setState({
                                                [state]: event.target.checked
                                            })}
                                        />
                                    </div>
                                ))}
                        </Columns>
                    </Columns>
                    {children}
                </Form>
            );
        };

        render(){
            return (
                <ChildComponent
                    renderForm={this.renderForm}
                    options={this.state}
                />
            );
        }
    }
);